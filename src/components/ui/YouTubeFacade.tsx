'use client';

import { Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { track } from '@/lib/analytics';

/**
 * Lightweight YouTube embed: shows a thumbnail and only loads the player when tapped (no
 * YouTube scripts on page load). Sends video_play on tap and video_complete when the video ends.
 */
export function YouTubeFacade({ videoId, title, playLabel }: { videoId: string; title: string; playLabel: string }) {
  const [playing, setPlaying] = useState(false);
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!playing) return;
    let completed = false;
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== 'https://www.youtube-nocookie.com' || typeof e.data !== 'string') return;
      try {
        const data = JSON.parse(e.data) as { event?: string; info?: unknown };
        // YouTube iframe API: playerState 0 = ended.
        const ended =
          (data.event === 'onStateChange' && data.info === 0) ||
          (data.event === 'infoDelivery' && (data.info as { playerState?: number } | null)?.playerState === 0);
        if (ended && !completed) {
          completed = true;
          track('video_complete', { video_title: title });
        }
      } catch {
        /* not a YouTube message */
      }
    };
    window.addEventListener('message', onMessage);
    // Ask the player to send state changes.
    const frame = frameRef.current;
    const listen = () =>
      frame?.contentWindow?.postMessage(JSON.stringify({ event: 'listening', id: videoId }), 'https://www.youtube-nocookie.com');
    frame?.addEventListener('load', listen);
    return () => {
      window.removeEventListener('message', onMessage);
      frame?.removeEventListener('load', listen);
    };
  }, [playing, title, videoId]);

  if (playing) {
    return (
      <div className="relative aspect-video overflow-hidden rounded-[var(--radius-card)] bg-navy-950">
        <iframe
          ref={frameRef}
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0&enablejsapi=1`}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
  return (
    <button
      type="button"
      onClick={() => {
        setPlaying(true);
        track('video_play', { video_title: title });
      }}
      className="group relative block aspect-video w-full overflow-hidden rounded-[var(--radius-card)] bg-navy-950"
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- static YouTube thumbnail */}
      <img
        src={`https://i.ytimg.com/vi/${encodeURIComponent(videoId)}/hqdefault.jpg`}
        alt=""
        width={480}
        height={360}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      />
      <span className="absolute inset-0 grid place-items-center">
        <span className="inline-flex min-h-14 items-center gap-2 rounded-full bg-red-600 px-6 text-lg font-bold text-white shadow-lg group-hover:bg-red-700">
          <Play aria-hidden className="h-6 w-6" />
          {playLabel}: {title}
        </span>
      </span>
    </button>
  );
}
