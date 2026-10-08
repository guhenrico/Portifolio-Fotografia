import { useEffect, useRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Photo } from "@/lib/photos";

interface LightboxProps {
  photos: Photo[];
  index: number | null;
  onClose: () => void;
  onNavigate: (next: number) => void;
}

export function Lightbox({ photos, index, onClose, onNavigate }: LightboxProps) {
  const returnFocus = useRef<HTMLElement | null>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const photo = index !== null ? photos[index] : null;

  useEffect(() => {
    if (index === null || photos.length < 2) return;
    const next = new Image();
    next.src = photos[(index + 1) % photos.length].src;
    const previous = new Image();
    previous.src = photos[(index - 1 + photos.length) % photos.length].src;
  }, [index, photos]);

  if (!photo || index === null) return null;

  const previous = () => onNavigate((index - 1 + photos.length) % photos.length);
  const next = () => onNavigate((index + 1) % photos.length);

  return (
    <Dialog.Root
      open
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="cinema-overlay" />
        <Dialog.Content
          className="cinema-viewer"
          onOpenAutoFocus={() => {
            returnFocus.current =
              document.activeElement instanceof HTMLElement ? document.activeElement : null;
          }}
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            returnFocus.current?.focus({ preventScroll: true });
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") {
              event.preventDefault();
              next();
            }
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              previous();
            }
          }}
        >
          <div className="cinema-toolbar">
            <div className="cinema-brand">
              Entre Nós <span>/</span> Fotografia
            </div>
            <div className="cinema-controls">
              <span className="cinema-counter" aria-hidden="true">
                {String(index + 1).padStart(2, "0")} <span>/</span>{" "}
                {String(photos.length).padStart(2, "0")}
              </span>
              <Dialog.Close className="cinema-close" aria-label="Fechar">
                <X className="h-5 w-5" aria-hidden="true" />
              </Dialog.Close>
            </div>
          </div>
          <Dialog.Description className="sr-only">
            Use as setas para navegar pelas fotos e Escape para fechar. No celular, deslize a foto
            para os lados.
          </Dialog.Description>
          <div
            className="cinema-stage"
            onClick={(event) => {
              if (event.target === event.currentTarget) onClose();
            }}
            onPointerDown={(event) => {
              if (event.pointerType === "touch")
                touchStart.current = { x: event.clientX, y: event.clientY };
            }}
            onPointerUp={(event) => {
              const start = touchStart.current;
              touchStart.current = null;
              if (!start || event.pointerType !== "touch") return;
              const dx = event.clientX - start.x;
              const dy = event.clientY - start.y;
              if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
                if (dx < 0) next();
                else previous();
              }
            }}
            onPointerCancel={() => {
              touchStart.current = null;
            }}
          >
            <img
              key={photo.id}
              src={photo.src}
              alt={photo.alt}
              decoding="async"
              draggable={false}
              className="cinema-photo"
            />
            {photos.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={previous}
                  aria-label="Foto anterior"
                  className="cinema-nav cinema-nav-previous"
                >
                  <ChevronLeft aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Próxima foto"
                  className="cinema-nav cinema-nav-next"
                >
                  <ChevronRight aria-hidden="true" />
                </button>
              </>
            )}
          </div>
          <div className="cinema-caption" aria-live="polite" aria-atomic="true">
            <div>
              <Dialog.Title className="cinema-photo-title">{photo.title}</Dialog.Title>
              <p>
                {photo.category}
                {photo.country ? ` · ${photo.country.label}` : ""}
              </p>
            </div>
            <span className="cinema-progress-label">
              Foto {index + 1} de {photos.length}
            </span>
          </div>
          <div className="cinema-progress" aria-hidden="true">
            <span style={{ width: `${((index + 1) / photos.length) * 100}%` }} />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
