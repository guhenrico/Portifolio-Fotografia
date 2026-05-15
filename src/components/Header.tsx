import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const navClass =
    "text-[11px] uppercase tracking-lux text-foreground/60 transition-colors hover:text-foreground";
  const mobileLinkClass =
    "font-serif text-3xl tracking-tight text-foreground transition-opacity hover:opacity-60";

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1600px] items-center justify-between px-5 md:h-16 md:px-12">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-baseline gap-2 text-foreground"
        >
          <span className="font-serif text-lg tracking-tight md:text-xl">Henrico</span>
          <span className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground/80 font-light">
            photography
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" activeOptions={{ exact: true }} className={navClass} activeProps={{ className: "text-foreground" }}>
            Trabalhos
          </Link>
          <Link to="/about" className={navClass} activeProps={{ className: "text-foreground" }}>
            Sobre
          </Link>
          <Link to="/contact" className={navClass} activeProps={{ className: "text-foreground" }}>
            Contato
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center text-foreground/80 transition-colors hover:text-foreground"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 ease-out ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-[1600px] flex-col gap-6 px-5 py-10">
          <p className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
            Index
          </p>
          <Link to="/" activeOptions={{ exact: true }} onClick={() => setOpen(false)} className={mobileLinkClass} activeProps={{ className: "italic text-muted-foreground" }}>
            Trabalhos
          </Link>
          <Link to="/about" onClick={() => setOpen(false)} className={mobileLinkClass} activeProps={{ className: "italic text-muted-foreground" }}>
            Sobre
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)} className={mobileLinkClass} activeProps={{ className: "italic text-muted-foreground" }}>
            Contato
          </Link>
          <p className="mt-6 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
            Henrico — Collection 01
          </p>
        </nav>
      </div>
    </header>
  );
}
