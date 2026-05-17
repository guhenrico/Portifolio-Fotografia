import type { ReactNode } from "react";

export function Marquee({
  children,
  className = "",
  slow = false,
}: {
  children: ReactNode;
  className?: string;
  slow?: boolean;
}) {
  return (
    <div className={`marquee overflow-hidden ${className}`}>
      <div className={`marquee-track ${slow ? "slow" : ""}`}>
        {children}
        {children}
      </div>
    </div>
  );
}
