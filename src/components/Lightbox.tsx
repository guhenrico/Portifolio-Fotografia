import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Photo } from "@/lib/photos";

interface LightboxProps {
  photos: Photo[];
  index: number | null;
  onClose: () => void;
  onNavigate: (next: number) => void;
}

export function Lightbox({ photos, index, onClose, onNavigate }: LightboxProps) {
  const photo = index !== null ? photos[index] : null;

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % photos.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + photos.length) % photos.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, photos.length, onClose, onNavigate]);

  if (!photo || index === null) return null;
  if (typeof document === "undefined") return null;

  const prev = () => onNavigate((index - 1 + photos.length) % photos.length);
  const next = () => onNavigate((index + 1) % photos.length);

  return createPortal(
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2147483000,
        background: "var(--background)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 1rem",
      }}
    >
      <img
        key={photo.id}
        src={photo.src}
        alt={photo.alt}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxHeight: "calc(100vh - 10rem)",
          maxWidth: "min(1400px, 100%)",
          width: "auto",
          height: "auto",
          objectFit: "contain",
          display: "block",
        }}
      />

      <div
        onClick={(e) => e.stopPropagation()}
        className="mt-5 flex w-full max-w-[1400px] flex-wrap items-end justify-between gap-x-6 gap-y-2 px-2 text-xs"
      >
        <div className="flex items-baseline gap-3">
          <p className="font-serif text-lg italic text-foreground">{photo.title}</p>
          {photo.country && (
            <span className="inline-flex items-center gap-2 text-[11px] text-muted-foreground">
              <img
                src={`https://flagcdn.com/20x15/${photo.country.code}.png`}
                width={16}
                height={12}
                alt={photo.country.label}
                className="inline-block rounded-[1px]"
                loading="lazy"
              />
              {photo.country.label}
            </span>
          )}
        </div>
        <p className="text-muted-foreground tracking-lux-sm uppercase tabular-nums">
          {String(index + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")} · {photo.category}
        </p>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Fechar"
        className="absolute top-5 right-5 inline-flex h-10 w-10 items-center justify-center text-foreground/80 transition-colors hover:text-foreground"
      >
        <X className="h-5 w-5" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        aria-label="Foto anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center text-foreground/70 transition-colors hover:text-foreground md:left-6"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        aria-label="Próxima foto"
        className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center text-foreground/70 transition-colors hover:text-foreground md:right-6"
      >
        <ChevronRight className="h-7 w-7" />
      </button>
    </div>,
    document.body
  );
}
