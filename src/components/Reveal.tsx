import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => el.classList.add("is-visible");

    // Fallback: if IntersectionObserver isn't available, just show
    if (typeof IntersectionObserver === "undefined") {
      show();
      return;
    }

    // If element is already in/near viewport on mount, show immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setTimeout(show, delay);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(show, delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);

    // Safety net: ensure content becomes visible even if IO never fires
    const safety = window.setTimeout(show, 1500 + delay);

    return () => {
      io.disconnect();
      window.clearTimeout(safety);
    };
  }, [delay]);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
