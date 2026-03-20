export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="effectum logo"
      role="img"
    >
      <text
        x="0"
        y="23"
        fontFamily="var(--font-sans), Inter, system-ui, sans-serif"
        fontSize="22"
        fontWeight="700"
        letterSpacing="-0.03em"
        fill="currentColor"
      >
        effectum
      </text>
      <rect x="1" y="26" width="12" height="2.5" rx="1.25" fill="#D97706" />
    </svg>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="effectum"
      role="img"
    >
      <text
        x="4"
        y="23"
        fontFamily="var(--font-sans), Inter, system-ui, sans-serif"
        fontSize="24"
        fontWeight="700"
        fill="currentColor"
      >
        e
      </text>
      <rect x="5" y="26" width="14" height="2.5" rx="1.25" fill="#D97706" />
    </svg>
  );
}
