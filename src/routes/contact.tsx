import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import embracePortrait from "@/assets/portfolio/Fontana Abraço.JPEG";
import { whatsappUrl } from "@/lib/whatsapp";

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
    <main className="min-h-screen overflow-x-clip bg-background text-foreground flex flex-col">
      <Header />

      <section className="relative mx-auto w-full max-w-[1600px] px-5 md:px-12 pt-28 pb-10 md:pt-44 md:pb-16 flex-1">
        {/* decorative dotted block */}
        <span
          className="ring-dotted absolute right-5 top-28 hidden h-32 w-32 rounded-full md:block md:right-12 md:top-44 drift"
          aria-hidden
        />

        <div className="grid grid-cols-12 gap-y-12 md:gap-6">
          <Reveal className="col-span-12 md:col-span-2">
            <div className="flex items-center gap-3 md:flex-col md:items-start">
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] md:tracking-lux text-muted-foreground">
                Contato
              </p>
              <span className="hidden md:block mt-3 h-px w-12 bg-border" />
            </div>
          </Reveal>

          <div className="col-span-12 md:col-span-10 md:col-start-3">
            <div className="grid items-start gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16">
              <div>
                <Reveal>
                  <h1 className="font-serif text-[2.25rem] leading-[1.02] tracking-[-0.02em] sm:text-5xl md:text-[clamp(2.5rem,5vw,5.5rem)] md:leading-[0.98]">
                    Vamos conversar sobre o que ainda{" "}
                    <em className="italic text-muted-foreground">não foi feito</em>.
                  </h1>
                </Reveal>

                <Reveal delay={160}>
                  <p className="mt-6 max-w-[42ch] text-[14px] leading-relaxed text-muted-foreground md:text-base">
                    Conte para nós a sua ideia. A melhor parte começa antes da câmera, quando a
                    história ainda está encontrando seu jeito de acontecer.
                  </p>
                </Reveal>

                <Reveal delay={280}>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Solicitar informações pelo WhatsApp"
                    className="cta-fill group mt-10 inline-flex min-h-14 w-full items-center justify-between gap-4 border border-foreground px-5 py-4 text-xs uppercase tracking-lux-sm text-foreground transition-colors md:mt-14 md:w-fit md:justify-start md:gap-12 md:px-10 md:py-6 md:text-sm"
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
                </Reveal>

                <Reveal delay={380}>
                  <div className="mt-10 grid max-w-[520px] grid-cols-1 gap-3 sm:grid-cols-2 md:mt-12">
                    {[
                      {
                        label: "Entre Nós Fotografia",
                        value: "@entrenosphotos",
                        href: "https://www.instagram.com/entrenosphotos/",
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
                        className="tilt-card group block border border-border/70 bg-background p-5"
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

              <Reveal delay={120}>
                <figure className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={embracePortrait}
                    alt="Gustavo e Beatriz abraçados"
                    className="absolute inset-0 h-full w-full object-cover object-[58%_bottom] transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02]"
                    loading="eager"
                    decoding="async"
                  />
                  <figcaption className="absolute bottom-4 left-4 text-[10px] uppercase tracking-lux-sm text-white/80">
                    Entre Nós Fotografia
                  </figcaption>
                </figure>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
