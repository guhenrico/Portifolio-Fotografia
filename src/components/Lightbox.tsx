import { useEffect } from "react";
import { X } from "lucide-react";
import type { Photo } from "@/lib/photos";

export function Lightbox({ photo, onClose }: { photo: Photo | null; onClose: () => void }) {
  useEffect(() => {
    if (!photo) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [photo, onClose]);

  if (!photo) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl px-6 py-12 animate-in fade-in duration-300"
    >
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-6 right-6 inline-flex h-10 w-10 items-center justify-center text-foreground/70 transition-colors hover:text-foreground"
      >
        <X className="h-5 w-5" />
      </button>
      <div
        className="relative flex max-h-full max-w-[1400px] flex-col items-center gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.src}
          alt={photo.title}
          className="max-h-[78vh] w-auto object-contain"
        />
        <div className="flex w-full items-end justify-between gap-6 text-xs">
          <p className="font-serif text-lg text-foreground">{photo.title}</p>
          <p className="text-muted-foreground tracking-lux-sm uppercase">{photo.category}</p>
        </div>
      </div>
    </div>
  );
}
