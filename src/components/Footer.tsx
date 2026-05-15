import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-20 md:mt-32">
      <div className="mx-auto max-w-[1600px] px-5 md:px-12 py-12 md:py-16">
        <div className="grid gap-10 md:gap-12 md:grid-cols-3">
          <div>
            <p className="text-[11px] uppercase tracking-lux text-muted-foreground">Estúdio</p>
            <h3 className="mt-3 font-serif text-3xl">Vamos conversar.</h3>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-3 border-b border-foreground pb-1 text-sm text-foreground transition-opacity hover:opacity-60"
            >
              gustavo.henrico01@gmail.com
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-lux text-muted-foreground">Onde encontrar</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="https://www.instagram.com/guhenricoo/" target="_blank" rel="noreferrer" className="hover:opacity-60">Instagram</a></li>
              <li><a href="https://vs.co/8oy8zgk9" target="_blank" rel="noreferrer" className="hover:opacity-60">VSCO</a></li>
            </ul>
          </div>
          <div className="md:text-right">
            <p className="text-[11px] uppercase tracking-lux text-muted-foreground">Estúdio</p>
            <p className="mt-3 text-sm text-foreground/80">Via della Spiga 12<br />20121 Milano, Itália</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-border/60 pt-6 text-[11px] md:mt-16 md:text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Henrico. Todos os direitos reservados.</p>
          <p className="tracking-lux-sm uppercase">Index № 001 — Edição Permanente</p>
        </div>
      </div>
    </footer>
  );
}
