/** Gentle wave echoing the curves on the business card. Uses currentColor. */
export function Curve({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden focusable="false" className={className}>
      <path d="M0 0h1440v34c-240 38-480 46-720 26S240 14 0 44Z" fill="currentColor" />
    </svg>
  );
}

/** Layered navy + red swoosh used as a decorative backdrop. */
export function Swoosh({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 400" aria-hidden focusable="false" className={className} preserveAspectRatio="xMidYMid slice">
      <path d="M0 260C140 170 330 150 600 210V400H0Z" fill="#1A2F66" />
      <path d="M0 300C160 215 360 200 600 250V400H0Z" fill="#111F4A" />
      <path d="M0 270C150 185 345 168 600 226" fill="none" stroke="#C8202F" strokeWidth="7" />
      <path d="M0 292C155 208 352 190 600 242" fill="none" stroke="#FFFFFF" strokeOpacity=".22" strokeWidth="2" />
    </svg>
  );
}
