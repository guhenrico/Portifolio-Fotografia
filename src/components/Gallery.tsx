import { useMemo, useState } from "react";
import { photos, type Category, type Photo } from "@/lib/photos";
import { Lightbox } from "./Lightbox";

const FILTERS: ("Todas" | Category)[] = [
  "Todas",
  "Ensaio 1 Allana",
  "Ensaio 2 Allana",
  "Ensaio Beatriz",
  "Veneza IT",
  "Roma IT",
  "St. Moritz CH",
  "Lago di Como IT",
  "Florença IT",
  "Nápoles IT",
];

export function Gallery() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Todas");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const counts = useMemo(() => {
    const map: Record<string, number> = { Todas: photos.length };
    for (const p of photos) map[p.category] = (map[p.category] ?? 0) + 1;
    return map;
  }, []);

  const list = useMemo(
    () => (filter === "Todas" ? photos : photos.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="works" className="mx-auto max-w-[1600px] px-5 md:px-12 scroll-mt-24">
      {/* Header — editorial control bar */}
      <div className="mb-10 border-b border-border/60 pb-5 md:mb-16 md:pb-7">
        <div className="flex flex-wrap items-end justify-between gap-y-5 gap-x-8">
          <div className="flex flex-col gap-1.5 md:gap-2">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight">
              Ensaios<span className="italic text-muted-foreground/60 font-light">.</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-1">Apenas algumas amostras dos meus cliques</p>
            <div className="flex items-center gap-4 mt-1 md:mt-2">
              <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.4em] text-muted-foreground">
                Pics
              </span>
              <span className="hidden md:inline-block h-[1px] w-12 bg-foreground/20" />
              <p className="font-serif text-sm md:text-base italic text-foreground tabular-nums">
                <span key={list.length} className="inline-block animate-fade-in">
                  {String(list.length).padStart(2, "0")}
                </span>
                <span className="text-muted-foreground/50"> / {String(photos.length).padStart(2, "0")}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            {FILTERS.map((f) => {
              const isActive = filter === f;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`group inline-flex items-baseline gap-1.5 border px-3.5 py-2 text-[11px] uppercase tracking-lux transition-all duration-300 md:px-4 md:py-2.5 ${
                    isActive
                      ? "border-foreground bg-foreground text-background"
                      : "border-border/70 text-muted-foreground hover:border-foreground hover:text-foreground"
                  }`}
                >
                  <span>{f}</span>
                  <sup className={`text-[9px] tracking-normal tabular-nums ${
                    isActive ? "text-background/70" : "text-muted-foreground/70"
                  }`}>
                    {String(counts[f] ?? 0).padStart(2, "0")}
                  </sup>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <EditorialGrid list={list} onOpen={(i) => setActiveIndex(i)} />

      <Lightbox
        photos={list}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={(i) => setActiveIndex(i)}
      />
    </section>
  );
}

/* ---------------- Editorial (mosaic) ---------------- */

function EditorialGrid({ list, onOpen }: { list: Photo[]; onOpen: (i: number) => void }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-16 md:gap-x-10 md:gap-y-20 items-start">
      {list.map((p, i) => {
        const layout = layoutFor(i);
        const idx = String(i + 1).padStart(2, "0");
        return (
          <figure key={p.id} className={`group col-span-1 ${layout.col} ${layout.mt}`}>
            <button
              onClick={() => onOpen(i)}
              className="img-hover relative block w-full overflow-hidden bg-muted"
              aria-label={`Abrir ${p.title}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="block w-full h-auto transition duration-700 group-hover:grayscale-0"
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

/* ---------------- Editorial layout pattern ---------------- */

function layoutFor(i: number) {
  // Padrão de 4 fotos (ideal para seus ensaios)
  // Cria um layout 2 por linha, assimétrico e com "degrau" vertical
  const patterns = [
    { col: "md:col-span-7", mt: "" },                 // Foto 1: Mais larga
    { col: "md:col-span-5", mt: "md:mt-24" },         // Foto 2: Mais estreita, rebaixada
    { col: "md:col-span-5", mt: "" },                 // Foto 3: Mais estreita
    { col: "md:col-span-7", mt: "md:mt-24" },         // Foto 4: Mais larga, rebaixada
  ];
  return patterns[i % patterns.length];
}
