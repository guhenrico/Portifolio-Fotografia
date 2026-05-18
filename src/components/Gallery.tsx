import { useMemo, useState } from "react";
import { photos, type Category, type Photo } from "@/lib/photos";
import { Lightbox } from "./Lightbox";

const FILTERS: ("Todos" | Category)[] = ["Todos", "Retratos", "Paisagens", "Animais"];

export function Gallery() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Todos");
  const [active, setActive] = useState<Photo | null>(null);

  const counts = useMemo(() => {
    const map: Record<string, number> = { Todos: photos.length };
    for (const p of photos) map[p.category] = (map[p.category] ?? 0) + 1;
    return map;
  }, []);

  const list = useMemo(
    () => (filter === "Todos" ? photos : photos.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section className="mx-auto max-w-[1600px] px-5 md:px-12">
      {/* Header — editorial control bar */}
      <div className="mb-10 border-b border-border/60 pb-5 md:mb-16 md:pb-7">
        <div className="flex flex-wrap items-end justify-between gap-y-5 gap-x-8">
          <div className="flex items-baseline gap-4">
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] md:tracking-lux text-muted-foreground">
              Henrico / Pics
            </p>
            <span className="hidden md:inline-block h-px w-12 bg-border" />
            <p className="font-serif text-base md:text-lg italic text-foreground tabular-nums">
              <span key={list.length} className="inline-block animate-fade-in">
                {String(list.length).padStart(2, "0")}
              </span>
              <span className="text-muted-foreground"> / {String(photos.length).padStart(2, "0")}</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 md:gap-x-7">
            {FILTERS.map((f) => {
              const isActive = filter === f;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`group inline-flex items-baseline gap-1.5 text-[11px] uppercase tracking-lux transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="relative">
                    {f}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-foreground transition-[width] duration-500 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </span>
                  <sup className="text-[9px] tracking-normal text-muted-foreground/70 tabular-nums">
                    {String(counts[f] ?? 0).padStart(2, "0")}
                  </sup>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <EditorialGrid list={list} onOpen={setActive} />

      <Lightbox photo={active} onClose={() => setActive(null)} />
    </section>
  );
}

/* ---------------- Editorial (mosaic) ---------------- */

function EditorialGrid({ list, onOpen }: { list: Photo[]; onOpen: (p: Photo) => void }) {
  return (
    <div className="grid grid-cols-12 gap-x-4 gap-y-10 md:gap-x-10 md:gap-y-28">
      {list.map((p, i) => {
        const layout = layoutFor(i, p.orientation);
        const idx = String(i + 1).padStart(2, "0");
        return (
          <figure key={p.id} className={`group ${layout.col} ${layout.offset} ${layout.mt}`}>
            <button
              onClick={() => onOpen(p)}
              className="img-hover relative block w-full overflow-hidden bg-muted"
              aria-label={`Abrir ${p.title}`}
            >
              <img
                src={p.src}
                alt={p.title}
                loading="lazy"
                className={`block w-full object-cover transition duration-700 group-hover:grayscale-0 ${
                  p.orientation === "portrait"
                    ? "aspect-[4/5]"
                    : p.orientation === "landscape"
                    ? "aspect-[3/2]"
                    : "aspect-square"
                }`}
              />
              {/* Index badge */}
              <span className="pointer-events-none absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 bg-background/80 px-2 py-1 text-[10px] uppercase tracking-lux-sm text-foreground backdrop-blur-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="tabular-nums">№ {idx}</span>
                {p.country && (
                  <img
                    src={`https://flagcdn.com/20x15/${p.country.code}.png`}
                    width={14}
                    height={10}
                    alt={p.country.label}
                    className="inline-block rounded-[1px]"
                    loading="lazy"
                  />
                )}
              </span>
              {/* Bottom slide-up caption */}
              <span className="pointer-events-none absolute inset-x-0 bottom-0 z-10 translate-y-full bg-gradient-to-t from-foreground/85 via-foreground/55 to-transparent px-4 pb-3 pt-10 text-background transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
                <span className="flex items-baseline justify-between gap-3">
                  <span className="font-serif text-base italic">{p.title}</span>
                  <span className="text-[10px] uppercase tracking-lux-sm opacity-80">Ver →</span>
                </span>
              </span>
            </button>
            <figcaption className="mt-4 flex items-baseline justify-between gap-4 text-xs text-muted-foreground">
              <span className="font-serif text-sm italic text-foreground inline-flex items-center gap-2">
                {p.title}
                {p.country && (
                  <img
                    src={`https://flagcdn.com/20x15/${p.country.code}.png`}
                    srcSet={`https://flagcdn.com/40x30/${p.country.code}.png 2x`}
                    width={20}
                    height={15}
                    alt={p.country.label}
                    className="not-italic inline-block rounded-[1px] shadow-sm"
                    loading="lazy"
                  />
                )}
              </span>
              <span className="tracking-lux-sm uppercase tabular-nums">
                {idx} · {p.category}
              </span>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}

/* ---------------- Index (list with floating preview) ---------------- */

function IndexView({ list, onOpen }: { list: Photo[]; onOpen: (p: Photo) => void }) {
  const [hover, setHover] = useState<Photo | null>(null);
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const wrapRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div ref={wrapRef} onMouseMove={handleMove} className="relative">
      <ul className="divide-y divide-border/60 border-y border-border/60">
        {list.map((p, i) => {
          const idx = String(i + 1).padStart(2, "0");
          const isHover = hover?.id === p.id;
          return (
            <li key={p.id}>
              <button
                onClick={() => onOpen(p)}
                onMouseEnter={() => setHover(p)}
                onMouseLeave={() => setHover((h) => (h?.id === p.id ? null : h))}
                className="group grid w-full grid-cols-12 items-baseline gap-4 px-1 py-5 md:py-7 text-left transition-colors"
              >
                <span className="col-span-2 md:col-span-1 text-[11px] uppercase tracking-lux-sm text-muted-foreground tabular-nums">
                  № {idx}
                </span>
                <span
                  className={`col-span-7 md:col-span-7 font-serif text-2xl md:text-4xl italic transition-all duration-500 ${
                    isHover ? "translate-x-2 text-foreground" : "text-foreground/85"
                  }`}
                >
                  {p.title}
                </span>
                <span className="col-span-2 md:col-span-3 text-[11px] uppercase tracking-lux-sm text-muted-foreground">
                  {p.category}
                </span>
                <span className="col-span-1 flex items-center justify-end text-foreground">
                  {p.country && (
                    <img
                      src={`https://flagcdn.com/20x15/${p.country.code}.png`}
                      srcSet={`https://flagcdn.com/40x30/${p.country.code}.png 2x`}
                      width={20}
                      height={15}
                      alt={p.country.label}
                      className="inline-block rounded-[1px] shadow-sm opacity-80 transition-opacity group-hover:opacity-100"
                      loading="lazy"
                    />
                  )}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Floating preview that follows the cursor */}
      <div
        aria-hidden
        className={`pointer-events-none absolute z-20 hidden md:block transition-opacity duration-300 ${
          hover ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(24px, -50%)",
        }}
      >
        {hover && (
          <div className="w-[280px] overflow-hidden bg-muted shadow-2xl">
            <img
              src={hover.src}
              alt=""
              className={`block w-full object-cover ${
                hover.orientation === "portrait"
                  ? "aspect-[4/5]"
                  : hover.orientation === "landscape"
                  ? "aspect-[3/2]"
                  : "aspect-square"
              }`}
            />
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------------- Editorial layout pattern ---------------- */

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
  if (orientation === "landscape" && i % patterns.length === 4) {
    return { ...base, col: "col-span-12 md:col-span-6" };
  }
  return base;
}
