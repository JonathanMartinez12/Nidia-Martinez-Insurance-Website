/**
 * Real photos of Nidia and John in the Metairie office. Web versions are cropped from the
 * originals in assets/reference/office-photos/; alt text lives in messages (`Photos.<key>`).
 */
export const photos = {
  together: { src: '/images/office/nidia-john-together.jpg', width: 1120, height: 840 },
  nidiaOffice: { src: '/images/office/nidia-office.jpg', width: 1200, height: 900 },
  johnOffice: { src: '/images/office/john-office.jpg', width: 1200, height: 900 },
  nidiaDesk: { src: '/images/office/nidia-desk.jpg', width: 1200, height: 900 },
  johnDesk: { src: '/images/office/john-desk.jpg', width: 1000, height: 750 },
  office: { src: '/images/office/office.jpg', width: 1200, height: 900 },
} as const;

export type PhotoKey = keyof typeof photos;

/** Photo shown on each agent's profile page (by agent slug). */
export const agentPhoto: Partial<Record<string, PhotoKey>> = {
  'nidia-martinez': 'nidiaDesk',
  'john-martinez': 'johnDesk',
};
