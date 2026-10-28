import { cn } from "@/lib/utils";

type FrameLinesProps = {
  children: React.ReactNode;
  className?: string;
  grid?: boolean;
  dots?: "bottom" | "top" | "both" | "none";
};

export function FrameLines({
  children,
  className,
  grid = false,
  dots = "bottom",
}: FrameLinesProps) {
  const showTop = dots === "top" || dots === "both";
  const showBottom = dots === "bottom" || dots === "both";

  return (
    <div className={cn("frame-lines", grid && "frame-lines-grid", className)}>
      {(showTop || showBottom) && (
        <div className="frame-lines-dots" aria-hidden="true">
          {showTop && (
            <>
              <span className="tl" />
              <span className="tr" />
            </>
          )}
          {showBottom && (
            <>
              <span className="bl" />
              <span className="br" />
            </>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
