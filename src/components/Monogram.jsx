export default function Monogram({ className = 'w-8 h-8', frame = true }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {frame && (
        <rect
          x="2.5"
          y="2.5"
          width="95"
          height="95"
          rx="22"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="2"
        />
      )}
      {/* M with a shared right leg that extends into the F stem + two bars */}
      <path
        d="M22 76V24L38 50L54 24V76"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M54 24H74M54 50H66"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  )
}
