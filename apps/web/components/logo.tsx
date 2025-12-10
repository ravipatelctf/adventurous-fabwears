import { cn } from "@workspace/ui/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center", className)}>
      <svg
        width="48"
        height="28"
        viewBox="0 0 64 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Slash (Golden) */}
        <line
          x1="5"
          y1="28"
          x2="15"
          y2="4"
          stroke="#D4AF37"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/*
          Triangle A — stroke is:
          • black in light mode
          • white in dark mode
        */}
        <path
          d="M17 26 L27 6 L37 26"
          className="stroke-black dark:stroke-white"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* Bottom bar with center gap */}
        <line
          x1="19"
          y1="26"
          x2="24"
          y2="26"
          className="stroke-black dark:stroke-white"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="30"
          y1="26"
          x2="35"
          y2="26"
          className="stroke-black dark:stroke-white"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
