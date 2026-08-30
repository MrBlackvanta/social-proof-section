export default function PatternTop({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 584 362" className={className} aria-hidden="true">
      <defs>
        <linearGradient
          id="pattern-top"
          x1="100%"
          y1="69.212%"
          x2="9.399%"
          y2="32.183%"
        >
          <stop offset="0%" stopColor="#8A4389" stopOpacity="0" />
          <stop offset="100%" stopColor="#512051" />
        </linearGradient>
      </defs>
      <path
        d="M0 362c40.022-82.8 115.736-135.154 227.141-157.064 167.108-32.864 103.85-66.012 185.949-131.796C467.823 29.284 524.793 4.904 584 0v362H0z"
        transform="rotate(180 292 181)"
        fill="url(#pattern-top)"
        opacity=".05"
      />
    </svg>
  );
}
