import { useMemo, useState } from "react";
import { photos, type Category, type Photo } from "@/lib/photos";
import { Lightbox } from "./Lightbox";

const FILTERS: ("Todos" | Category)[] = ["Todos", "Retratos", "Paisagens", "Animais"];

export function Gallery() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Todos");
  const [active, setActive] = useState<Photo | null>(null);

  const list = useMemo(
    () => (filter === "Todos" ? photos : photos.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section className="mx-auto max-w-[1600px] px-5 md:px-12">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-4 md:mb-12 md:gap-6 md:pb-6">
        <p className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] md:tracking-lux text-muted-foreground">
          Index № 001 / Selected Works
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 md:gap-x-6">
          {FILTERS.map((f) => {
            const isActive = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-[11px] uppercase tracking-lux transition-colors ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="relative">
                  {f}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 h-px w-full bg-foreground" />
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-x-4 gap-y-10 md:gap-x-10 md:gap-y-28">
        {list.map((p, i) => {
          const layout = layoutFor(i, p.orientation);
          return (
            <figure
              key={p.id}
              className={`group ${layout.col} ${layout.offset} ${layout.mt}`}
            >
              <button
                onClick={() => setActive(p)}
                className="img-hover block w-full overflow-hidden bg-muted"
                aria-label={`Abrir ${p.title}`}
              >
                <img
                  src={p.src}
                  alt={p.title}
                  loading="lazy"
                  className={`block w-full object-cover ${
                    p.orientation === "portrait"
                      ? "aspect-[4/5]"
                      : p.orientation === "landscape"
                      ? "aspect-[3/2]"
                      : "aspect-square"
                  }`}
                />
              </button>
              <figcaption className="mt-4 flex items-baseline justify-between gap-4 text-xs text-muted-foreground">
                <span className="font-serif text-sm italic text-foreground">{p.title}</span>
                <span className="tracking-lux-sm uppercase">
                  {String(i + 1).padStart(2, "0")} · {p.category}
                </span>
              </figcaption>
            </figure>
          );
        })}
      </div>

      <Lightbox photo={active} onClose={() => setActive(null)} />
    </section>
  );
}

// Asymmetric editorial grid pattern
function layoutFor(i: number, orientation: Photo["orientation"]) {
  const patterns = [
    { col: "col-span-12 md:col-span-7", offset: "md:col-start-1", mt: "" },
    { col: "col-span-12 md:col-span-4", offset: "md:col-start-9", mt: "md:mt-32" },
    { col: "col-span-12 md:col-span-5", offset: "md:col-start-2", mt: "" },
    { col: "col-span-12 md:col-span-6", offset: "md:col-start-7", mt: "md:mt-16" },
    { col: "col-span-12 md:col-span-4", offset: "md:col-start-1", mt: "md:mt-12" },
    { col: "col-span-12 md:col-span-7", offset: "md:col-start-6", mt: "" },
  ];
  const base = patterns[i % patterns.length];
  // narrower for portraits, wider for landscapes when possible
  if (orientation === "landscape" && i % patterns.length === 4) {
    return { ...base, col: "col-span-12 md:col-span-6" };
  }
  return base;
}
