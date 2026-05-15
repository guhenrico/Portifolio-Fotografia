import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const navClass =
    "text-[11px] uppercase tracking-lux text-foreground/60 transition-colors hover:text-foreground";
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1600px] items-center justify-between px-5 md:h-16 md:px-12">
        <Link to="/" className="font-serif text-base tracking-tight text-foreground md:text-xl">
          Henrico
          <span className="hidden md:inline"> Photography</span>
          <span className="ml-2 hidden text-[10px] uppercase tracking-lux text-muted-foreground md:inline">
            Photography
          </span>
        </Link>
        <nav className="flex items-center gap-4 md:gap-8">
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
      </div>
    </header>
  );
}
