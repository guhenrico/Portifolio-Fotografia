import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contato — Elena Marchetti" },
      { name: "description", content: "Comissões editoriais, comerciais e exposições." },
      { property: "og:title", content: "Contato — Elena Marchetti" },
      { property: "og:description", content: "Vamos conversar sobre o seu próximo projeto." },
    ],
  }),
});

function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="mx-auto max-w-[1600px] px-6 md:px-12 pt-40 pb-32 md:pt-56">
        <div className="grid grid-cols-12 gap-6">
          <Reveal className="col-span-12 md:col-span-2">
            <p className="text-[11px] uppercase tracking-lux text-muted-foreground">
              Contato<br />№ 002
            </p>
          </Reveal>

          <div className="col-span-12 md:col-span-8 md:col-start-3">
            <Reveal>
              <h1 className="font-serif text-[clamp(2.5rem,6vw,6rem)] leading-[0.98] tracking-[-0.02em]">
                Vamos conversar sobre o que ainda <em className="italic text-muted-foreground">não foi feito</em>.
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-10 max-w-xl text-[15px] leading-relaxed text-foreground/80">
                Aceito comissões editoriais, comerciais e projetos de longa duração.
                Para exposições e impressões em edição limitada, entre em contato com o estúdio.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-16 flex flex-col gap-4">
                <a
                  href="mailto:hello@elenamarchetti.com"
                  className="group inline-flex w-fit items-center gap-4 border border-foreground px-8 py-5 text-sm uppercase tracking-lux-sm text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  Vamos conversar
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                </a>
                <p className="text-sm text-muted-foreground">hello@elenamarchetti.com</p>
              </div>
            </Reveal>

            <Reveal delay={450}>
              <div className="mt-24 grid grid-cols-1 gap-10 border-t border-border/60 pt-10 md:grid-cols-3">
                <div>
                  <p className="text-[11px] uppercase tracking-lux text-muted-foreground">Estúdio</p>
                  <p className="mt-3 text-sm text-foreground/90">Via della Spiga 12<br />20121 Milano, Itália</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-lux text-muted-foreground">Representação</p>
                  <p className="mt-3 text-sm text-foreground/90">Webber Represents<br />London · Paris · NY</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-lux text-muted-foreground">Social</p>
                  <ul className="mt-3 space-y-1 text-sm">
                    <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:opacity-60">Instagram</a></li>
                    <li><a href="https://vsco.co" target="_blank" rel="noreferrer" className="hover:opacity-60">VSCO</a></li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
