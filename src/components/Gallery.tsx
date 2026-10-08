import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Columns2, Grid2X2, Maximize2 } from "lucide-react";
import { albums, type Album } from "@/lib/albums";
import type { Photo } from "@/lib/photos";
import { AlbumCover } from "./AlbumCover";
import { Lightbox } from "./Lightbox";

export function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [view, setView] = useState<"editorial" | "grid">("editorial");
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const lastAlbumId = useRef<string | null>(null);
  const list = selectedAlbum?.photos ?? [];
  const nextAlbum = selectedAlbum
    ? albums[(albums.indexOf(selectedAlbum) + 1) % albums.length]
    : null;

  const openAlbum = (album: Album) => {
    setActiveIndex(null);
    setView("editorial");
    setSelectedAlbum(album);
  };

  useEffect(() => {
    if (selectedAlbum) {
      lastAlbumId.current = selectedAlbum.id;
      headingRef.current?.focus({ preventScroll: true });
      sectionRef.current?.scrollIntoView({ block: "start" });
    } else if (lastAlbumId.current) {
      const cover = document.getElementById(lastAlbumId.current);
      cover?.focus({ preventScroll: true });
      cover?.scrollIntoView({ block: "center" });
    }
  }, [selectedAlbum]);

  return (
    <section
      ref={sectionRef}
      id="works"
      aria-labelledby="works-heading"
      className="album-collection mx-auto max-w-[1440px] scroll-mt-24 px-5 md:px-12"
    >
      {selectedAlbum ? (
        <>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-border/70 pb-5">
            <button
              type="button"
              onClick={() => {
                setActiveIndex(null);
                setSelectedAlbum(null);
              }}
              className="group inline-flex min-h-11 items-center gap-3 text-[10px] uppercase tracking-lux-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft
                className="h-4 w-4 transition-transform group-hover:-translate-x-1"
                aria-hidden="true"
              />
              Voltar aos álbuns
            </button>
            <p className="text-[10px] uppercase tracking-lux-sm text-muted-foreground">
              Capítulo {selectedAlbum.number} <span className="mx-2 opacity-40">/</span>{" "}
              {String(albums.length).padStart(2, "0")}
            </p>
          </div>
          <div key={selectedAlbum.id} className="album-story">
            <div className="album-story-hero" data-album={selectedAlbum.slug}>
              <img
                src={selectedAlbum.cover}
                alt={selectedAlbum.coverAlt ?? selectedAlbum.photos[0].alt}
                className="album-story-image"
                style={{ objectPosition: selectedAlbum.position }}
                decoding="async"
              />
              <div className="album-story-shade" aria-hidden="true" />
              <span className="album-story-number" aria-hidden="true">
                {selectedAlbum.number}
              </span>
              <div className="album-story-intro">
                <p className="text-[10px] uppercase tracking-[0.24em] text-white/70">
                  {selectedAlbum.location}
                </p>
                <h2
                  ref={headingRef}
                  id="works-heading"
                  tabIndex={-1}
                  className="album-story-title outline-none"
                >
                  <span>{selectedAlbum.title[0]}</span> <em>{selectedAlbum.title[1]}</em>
                </h2>
                <p className="mt-5 font-serif text-xl italic text-white/80 md:text-2xl">
                  {selectedAlbum.note}
                </p>
              </div>
            </div>
            <div className="mb-10 flex flex-col justify-between gap-5 border-b border-border/70 py-6 sm:flex-row sm:items-center md:mb-16 md:py-8">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <p className="text-[10px] uppercase tracking-lux-sm text-muted-foreground">
                  {String(list.length).padStart(2, "0")} fotografias{" "}
                  <span className="mx-2 opacity-40">·</span> Uma história
                </p>
                <button
                  type="button"
                  onClick={() => setActiveIndex(0)}
                  className="inline-flex min-h-11 items-center gap-2 text-[10px] uppercase tracking-lux-sm text-foreground transition-opacity hover:opacity-60"
                >
                  <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                  Ver em tela cheia
                </button>
              </div>
              <div
                className="inline-flex w-fit border border-border/70 p-1"
                role="group"
                aria-label="Visualização das fotos"
              >
                {(
                  [
                    { value: "editorial", label: "Editorial", icon: Columns2 },
                    { value: "grid", label: "Grade", icon: Grid2X2 },
                  ] as const
                ).map(({ value, label, icon: Icon }) => (
                  <button
                    key={value}
                    type="button"
                    aria-pressed={view === value}
                    onClick={() => setView(value)}
                    className={`inline-flex min-h-10 items-center gap-2 px-3 text-[10px] uppercase tracking-[0.12em] transition-colors ${view === value ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <PhotoGrid list={list} view={view} onOpen={setActiveIndex} />
            {nextAlbum && (
              <button
                type="button"
                className="album-next group"
                onClick={() => openAlbum(nextAlbum)}
                aria-label={`Próximo álbum: ${nextAlbum.kind}, ${nextAlbum.location}`}
              >
                <img
                  src={nextAlbum.cover}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: nextAlbum.position }}
                />
                <span
                  className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/15"
                  aria-hidden="true"
                />
                <span className="relative z-10">
                  <span className="mb-4 block text-[10px] uppercase tracking-lux-sm text-white/70">
                    A próxima história
                  </span>
                  <span className="block font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
                    {nextAlbum.kind}
                  </span>
                  <span className="mt-3 block text-xs text-white/75">{nextAlbum.location}</span>
                </span>
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/40 transition-colors group-hover:bg-white group-hover:text-black sm:h-16 sm:w-16">
                  <ArrowRight
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </button>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="collection-kicker">
            <span className="inline-flex items-center gap-3">
              <span
                className="h-1.5 w-1.5 rounded-full bg-[#927457] dark:bg-[#bba386]"
                aria-hidden="true"
              />
              Entre Nós <span className="opacity-40">/</span> Coleção de histórias
            </span>
            <span>
              {String(albums.length).padStart(2, "0")} álbuns ·{" "}
              {albums.reduce((total, album) => total + album.photos.length, 0)} fotografias
            </span>
          </div>
          <div className="collection-heading">
            <div>
              <h2 id="works-heading" className="collection-title">
                Ensaios<span>.</span>
              </h2>
              <p className="collection-subtitle">
                Instantes que viram <em>memória.</em>
              </p>
            </div>
            <div className="collection-intro">
              <p>
                Um álbum, um universo.
                <br />
                Abra uma história e fique um pouco.
              </p>
              <span className="collection-signature">Por Gustavo &amp; Beatriz</span>
            </div>
          </div>
          <div className="album-shelf">
            {albums.map((album, index) => (
              <AlbumCover
                key={album.id}
                album={album}
                index={index}
                total={albums.length}
                onOpen={openAlbum}
              />
            ))}
          </div>
          <div className="collection-closing">
            <span className="collection-closing-mark" aria-hidden="true">
              &amp;
            </span>
            <div>
              <p className="text-[10px] uppercase tracking-lux-sm text-muted-foreground">
                Histórias continuam
              </p>
              <p className="mt-3 font-serif text-3xl leading-tight md:text-5xl">
                A próxima pode ser <em className="text-[#927457] dark:text-[#bba386]">a sua.</em>
              </p>
            </div>
            <Link
              to="/contact"
              className="group inline-flex min-h-12 items-center gap-5 border-b border-foreground/40 text-[10px] uppercase tracking-lux-sm text-foreground transition-colors hover:border-foreground"
            >
              Vamos criar memórias
              <ArrowUpRight
                className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </>
      )}
      <Lightbox
        photos={list}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}

function PhotoGrid({
  list,
  view,
  onOpen,
}: {
  list: Photo[];
  view: "editorial" | "grid";
  onOpen: (index: number) => void;
}) {
  return (
    <div
      className={
        view === "grid" ? "photo-grid photo-grid-compact" : "photo-grid photo-grid-editorial"
      }
    >
      {list.map((photo, index) => (
        <figure key={photo.id} className="photo-entry group">
          <button
            type="button"
            onClick={() => onOpen(index)}
            className="photo-open"
            aria-label={`Abrir foto ${index + 1}: ${photo.title}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading={index < 2 ? "eager" : "lazy"}
              decoding="async"
            />
            <span className="photo-open-shade" aria-hidden="true" />
            <span className="photo-index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="photo-expand">
              <Maximize2 className="h-4 w-4" aria-hidden="true" />
            </span>
          </button>
          <figcaption className="photo-caption">
            <span>{photo.title}</span>
            <span>
              {photo.country?.label ?? ""} <span className="opacity-40">/</span>{" "}
              {String(index + 1).padStart(2, "0")}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
