import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-20 md:mt-32">
      <div className="mx-auto max-w-[1600px] px-5 md:px-12 py-12 md:py-16">
        <div className="grid gap-10 md:gap-12 md:grid-cols-2">
          <div className="flex flex-col items-start">
            <p className="text-[11px] uppercase tracking-lux text-muted-foreground">Contato</p>
            <h3 className="mt-3 font-serif text-3xl">Vamos conversar.</h3>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-3 border-b border-foreground pb-1 text-sm text-foreground transition-opacity hover:opacity-60"
            >
              gustavo.henrico01@gmail.com
              <span aria-hidden>→</span>
            </Link>
            <a
              href="https://wa.me/5511997372512"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-3 border-b border-foreground pb-1 text-sm text-foreground transition-opacity hover:opacity-60 text-[#25D366]"
            >
              WhatsApp
              <span aria-hidden>→</span>
            </a>
          </div>
          <div className="md:text-right">
            <p className="text-[11px] uppercase tracking-lux text-muted-foreground">
              Onde encontrar
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href="https://www.instagram.com/guhenricoo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-60"
                  aria-label="Instagram de Gustavo Henrico Fotografia"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-border/60 pt-6 text-[11px] md:mt-16 md:text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Gustavo Henrico Fotografia. Todos os direitos reservados.
          </p>
          <p className="tracking-lux-sm uppercase">Gustavo Henrico Fotografia</p>
        </div>
      </div>
    </footer>
  );
}
