import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { photos, type Category, type Photo } from "@/lib/photos";
import { Lightbox } from "./Lightbox";

const ALBUM_DETAILS: { category: Category; location: string; kind: string }[] = [
  { category: "Ensaio Feminino - Haras", location: "Haras", kind: "Ensaio Feminino" },
  {
    category: "Ensaio de Viagem - Itália & Suíça",
    location: "Itália & Suíça",
    kind: "Ensaio de Viagem",
  },
  {
    category: "Ensaio Bailarina - Fazenda Ipanema",
    location: "Fazenda Ipanema",
    kind: "Ensaio Bailarina",
  },
  { category: "Ensaio Feminino - campo aberto", location: "Campo aberto", kind: "Ensaio Feminino" },
  { category: "Pré Wedding - Campo aberto", location: "Campo aberto", kind: "Pré Wedding" },
  { category: "Ensaio Familia - Holambra", location: "Holambra", kind: "Ensaio de Família" },
];

const albums = ALBUM_DETAILS.map((album, index) => ({
  ...album,
  id: `album-${index + 1}`,
  photos: photos.filter((photo) => photo.category === album.category),
})).filter((album) => album.photos.length > 0);

type Album = (typeof albums)[number];

export function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const lastAlbumId = useRef<string | null>(null);
  const list = selectedAlbum?.photos ?? [];

  useEffect(() => {
    if (selectedAlbum) {
      lastAlbumId.current = selectedAlbum.id;
      headingRef.current?.focus({ preventScroll: true });
      sectionRef.current?.scrollIntoView({ block: "start" });
    } else if (lastAlbumId.current) {
      const cover = document.getElementById(lastAlbumId.current);
      cover?.focus({ preventScroll: true });
      cover?.scrollIntoView({ block: "nearest" });
    }
  }, [selectedAlbum]);

  return (
    <section
      ref={sectionRef}
      id="works"
      aria-labelledby="works-heading"
      className="mx-auto max-w-[1600px] px-5 md:px-12 scroll-mt-24"
    >
      <div className="mb-8 border-b border-border/60 pb-6 md:mb-10 md:pb-8">
        {selectedAlbum && (
          <button
            type="button"
            onClick={() => {
              setActiveIndex(null);
              setSelectedAlbum(null);
            }}
            className="group mb-6 inline-flex min-h-11 items-center gap-3 text-[11px] uppercase tracking-lux-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft
              className="h-4 w-4 transition-transform group-hover:-translate-x-1"
              aria-hidden="true"
            />
            Voltar aos álbuns
          </button>
        )}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            {selectedAlbum && (
              <p className="mb-3 text-[10px] uppercase tracking-lux-sm text-muted-foreground">
                {selectedAlbum.location}
              </p>
            )}
            <h2
              ref={headingRef}
              id="works-heading"
              tabIndex={-1}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight outline-none"
            >
              {selectedAlbum?.kind ?? "Ensaios"}
              <span className="italic text-muted-foreground/60 font-light">.</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              {selectedAlbum
                ? "Um pouco dessa história, foto por foto."
                : "Histórias em imagens. Escolha um álbum para explorar."}
            </p>
          </div>
          <p className="flex shrink-0 items-center gap-3 text-[10px] uppercase tracking-lux-sm text-muted-foreground">
            <span className="h-px w-8 bg-foreground/20" aria-hidden="true" />
            {selectedAlbum
              ? `${String(list.length).padStart(2, "0")} fotos`
              : `${String(albums.length).padStart(2, "0")} álbuns`}
          </p>
        </div>
      </div>

      {selectedAlbum ? (
        <EditorialGrid key={selectedAlbum.id} list={list} onOpen={setActiveIndex} />
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {albums.map((album, index) => (
            <button
              key={album.id}
              id={album.id}
              type="button"
              onClick={() => setSelectedAlbum(album)}
              aria-label={`Abrir álbum: ${album.category}, ${album.photos.length} fotos`}
              className="group relative isolate block aspect-[4/5] w-full bg-muted text-left text-white shadow-md transition-shadow duration-500 hover:shadow-xl focus-visible:outline-foreground"
            >
              <span className="absolute inset-0 overflow-hidden">
                <img
                  src={album.photos[0].src}
                  alt={album.photos[0].alt}
                  loading={index < 3 ? "eager" : "lazy"}
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 group-focus-visible:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/20" />
              </span>
              <span className="pointer-events-none absolute inset-3 border border-white/25 transition-colors duration-500 group-hover:border-white/50 group-focus-visible:border-white/50 md:inset-4" />
              <span className="absolute left-7 right-7 top-7 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] md:left-9 md:right-9 md:top-9">
                <span className="tabular-nums">Álbum {String(index + 1).padStart(2, "0")}</span>
                <span className="bg-black/25 px-2.5 py-1.5 tabular-nums backdrop-blur-sm">
                  {String(album.photos.length).padStart(2, "0")} fotos
                </span>
              </span>
              <span className="absolute inset-x-7 bottom-7 md:inset-x-9 md:bottom-9">
                <span className="mb-3 block text-[10px] uppercase tracking-[0.24em] text-white/80">
                  {album.location}
                </span>
                <span className="block font-serif text-4xl leading-[1.05] tracking-tight xl:text-5xl">
                  {album.kind}
                </span>
                <span className="mt-6 flex items-center justify-between border-t border-white/30 pt-4">
                  <span className="text-[10px] uppercase tracking-[0.2em]">Explorar álbum</span>
                  <ArrowUpRight
                    className="h-5 w-5 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </span>
            </button>
          ))}
        </div>
      )}

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
              type="button"
              onClick={() => onOpen(i)}
              className="img-hover relative block w-full overflow-hidden bg-muted"
              aria-label={`Abrir ${p.title}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading={i < 2 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "auto"}
                decoding="async"
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
                    decoding="async"
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
            <figcaption className="mt-4 flex flex-col items-start gap-1 text-xs text-muted-foreground sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
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
                    decoding="async"
                  />
                )}
              </span>
              <span className="text-[10px] leading-relaxed tracking-[0.16em] uppercase tabular-nums sm:text-xs sm:tracking-lux-sm">
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
    { col: "md:col-span-7", mt: "" }, // Foto 1: Mais larga
    { col: "md:col-span-5", mt: "md:mt-24" }, // Foto 2: Mais estreita, rebaixada
    { col: "md:col-span-5", mt: "" }, // Foto 3: Mais estreita
    { col: "md:col-span-7", mt: "md:mt-24" }, // Foto 4: Mais larga, rebaixada
  ];
  return patterns[i % patterns.length];
}
