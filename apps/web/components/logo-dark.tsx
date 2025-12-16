import { cn } from "@workspace/ui/lib/utils"

export const LogoDark = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center", className)}>
      <svg
        width="48"
        height="28"
        viewBox="0 0 64 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Slash (Golden Accent) — SAME */}
        <line
          x1="5"
          y1="28"
          x2="15"
          y2="4"
          stroke="#D4AF37"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Triangle A — ONLY COLOR CHANGED */}
        <path
          d="M17 26 L27 6 L37 26"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* Bottom bar with center gap — ONLY COLOR CHANGED */}
        <line
          x1="19"
          y1="26"
          x2="24"
          y2="26"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="30"
          y1="26"
          x2="35"
          y2="26"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
