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
      <section className="mx-auto max-w-[1600px] px-5 md:px-12 pt-28 pb-20 md:pt-56 md:pb-32">
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <Reveal className="col-span-12 md:col-span-2">
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] md:tracking-lux text-muted-foreground">
              Contato · № 002
            </p>
          </Reveal>

          <div className="col-span-12 md:col-span-8 md:col-start-3">
            <Reveal>
              <h1 className="font-serif text-[2.25rem] sm:text-5xl md:text-[clamp(2.5rem,6vw,6rem)] leading-[1.02] md:leading-[0.98] tracking-[-0.02em]">
                Vamos conversar sobre o que ainda <em className="italic text-muted-foreground">não foi feito</em>.
              </h1>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-10 flex flex-col gap-4 md:mt-16">
                <a
                  href="mailto:gustavo.henrico01@gmail.com"
                  className="group inline-flex w-full items-center justify-between gap-4 border border-foreground px-6 py-4 text-xs uppercase tracking-lux-sm text-foreground transition-colors hover:bg-foreground hover:text-background md:w-fit md:justify-start md:px-8 md:py-5 md:text-sm"
                >
                  Vamos conversar
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                </a>
                <p className="text-sm text-muted-foreground">gustavo.henrico01@gmail.com</p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
