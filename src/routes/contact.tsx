import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contato | Gustavo Henrico Fotografia em Boituva" },
      {
        name: "description",
        content:
          "Solicite informações sobre ensaios externos e retratos com luz natural em Boituva e região.",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Contato | Gustavo Henrico Fotografia em Boituva" },
      {
        property: "og:description",
        content: "Fale com Gustavo Henrico sobre seu próximo ensaio fotográfico.",
      },
    ],
    links: [{ rel: "canonical", href: "https://henricofotografia.com.br/contact" }],
  }),
});

function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <section className="relative mx-auto w-full max-w-[1600px] px-5 md:px-12 pt-28 pb-10 md:pt-44 md:pb-16 flex-1">
        {/* decorative dotted block */}
        <span
          className="ring-dotted absolute right-5 top-28 hidden h-32 w-32 rounded-full md:block md:right-12 md:top-44 drift"
          aria-hidden
        />

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <Reveal className="col-span-12 md:col-span-2">
            <div className="flex items-center gap-3 md:flex-col md:items-start">
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] md:tracking-lux text-muted-foreground">
                Contato · № 002
              </p>
              <span className="hidden md:block mt-3 h-px w-12 bg-border" />
            </div>
          </Reveal>

          <div className="col-span-12 md:col-span-9 md:col-start-3">
            <Reveal>
              <h1 className="font-serif text-[2.25rem] sm:text-5xl md:text-[clamp(2.5rem,6vw,6rem)] leading-[1.02] md:leading-[0.98] tracking-[-0.02em]">
                Vamos conversar sobre o que ainda{" "}
                <em className="italic text-muted-foreground">não foi feito</em>.
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 max-w-[52ch] text-[14px] md:text-base text-muted-foreground leading-relaxed">
                Conte-me sua ideia para um ensaio em Boituva ou região — a melhor parte começa antes
                da câmera.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10 flex flex-col gap-4 md:mt-14">
                <a
                  href="https://wa.me/5511997372512"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Solicitar informações pelo WhatsApp"
                  className="cta-fill group inline-flex w-full items-center justify-between gap-4 border border-foreground px-6 py-4 text-xs uppercase tracking-lux-sm text-foreground transition-colors md:w-fit md:justify-start md:gap-12 md:px-10 md:py-6 md:text-sm"
                >
                  <span className="word-swap">
                    <span className="swap-out">Vamos conversar</span>
                    <span className="swap-in text-[#25D366]">WhatsApp</span>
                  </span>
                  <span
                    className="transition-transform duration-500 group-hover:translate-x-2"
                    aria-hidden
                  >
                    →
                  </span>
                </a>
              </div>
            </Reveal>

            {/* Quick link cards */}
            <Reveal delay={380}>
              <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[520px]">
                {[
                  {
                    label: "Instagram",
                    value: "@guhenricoo",
                    href: "https://www.instagram.com/henricofotografia/",
                    meta: "diário",
                  },
                  {
                    label: "Local",
                    value: "Boituva, SP",
                    href: "https://maps.google.com/?q=Boituva,+SP",
                    meta: "base",
                  },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="tilt-card group block border border-border/70 p-5 bg-background"
                  >
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-lux-sm text-muted-foreground">
                      <span>{c.label}</span>
                      <span
                        aria-hidden
                        className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                      >
                        ↗
                      </span>
                    </div>
                    <p className="mt-6 font-serif text-xl italic">{c.value}</p>
                    <p className="mt-1 text-[11px] text-muted-foreground">{c.meta}</p>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
