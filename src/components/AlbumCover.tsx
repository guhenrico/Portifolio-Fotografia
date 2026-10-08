import type { PointerEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Album } from "@/lib/albums";

export function AlbumCover({
  album,
  index,
  total,
  onOpen,
}: {
  album: Album;
  index: number;
  total: number;
  onOpen: (album: Album) => void;
}) {
  const tilt = (event: PointerEvent<HTMLButtonElement>) => {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    button.style.setProperty(
      "--book-x",
      `${((event.clientY - rect.top) / rect.height - 0.5) * -4}deg`,
    );
    button.style.setProperty(
      "--book-y",
      `${((event.clientX - rect.left) / rect.width - 0.5) * 5}deg`,
    );
  };

  const resetTilt = (event: PointerEvent<HTMLButtonElement>) => {
    event.currentTarget.style.removeProperty("--book-x");
    event.currentTarget.style.removeProperty("--book-y");
  };

  return (
    <article className={`album-item album-item-${index + 1}`}>
      <div className="album-overline">
        <span>Capítulo {album.number}</span>
        <span>{album.location}</span>
      </div>
      <button
        id={album.id}
        type="button"
        className="album-book group"
        onClick={() => onOpen(album)}
        onPointerMove={tilt}
        onPointerLeave={resetTilt}
        aria-label={`Abrir álbum: ${album.kind}, ${album.location}, ${album.photos.length} fotos`}
      >
        <span className="album-book-pages" aria-hidden="true" />
        <span className="album-book-cover">
          <img
            className="album-cover-image"
            src={album.cover}
            alt={album.coverAlt ?? album.photos[0].alt}
            style={{ objectPosition: album.position }}
            loading={index < 2 ? "eager" : "lazy"}
            decoding="async"
          />
          <img
            className="album-preview-image"
            src={album.preview}
            alt=""
            aria-hidden="true"
            style={{ objectPosition: album.previewPosition ?? album.position }}
            loading="lazy"
            decoding="async"
          />
          <span className="album-cover-shade" aria-hidden="true" />
          <span className="album-book-spine" aria-hidden="true" />
          <span className="album-cover-frame" aria-hidden="true" />
          <span className="album-cover-top">
            <span>
              Entre Nós <span className="opacity-60">/</span> Fotografia
            </span>
            <span className="album-photo-count">{album.photos.length} fotos</span>
          </span>
          <span className="album-cover-bottom">
            <span className="album-location">{album.location}</span>
            <span className="album-cover-title">
              <span>{album.title[0]}</span> <em>{album.title[1]}</em>
            </span>
            <span className="album-cover-action">
              <span>Abrir essa história</span>
              <span className="album-open-arrow">
                <ArrowUpRight aria-hidden="true" />
              </span>
            </span>
          </span>
        </span>
      </button>
      <div className="album-footnote">
        <p>{album.note}</p>
        <span aria-hidden="true">
          {album.number} <span className="opacity-40">/</span> {String(total).padStart(2, "0")}
        </span>
      </div>
    </article>
  );
}
