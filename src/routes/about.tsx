import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import aboutPortrait from "@/assets/portfolio/about-portrait.jpeg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "Sobre — Henrico" },
      { name: "description", content: "O olhar por trás da lente — Gustavo Henrico, fotógrafo." },
      { property: "og:title", content: "Sobre — Henrico" },
      { property: "og:description", content: "Fotógrafo baseado no interior de SP." },
    ],
  }),
});

function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <section className="relative mx-auto w-full max-w-[1200px] px-5 md:px-12 pt-24 pb-12 md:pt-32 md:pb-20 flex-1">
        <Reveal>
          <div className="flex items-center gap-3">
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] md:tracking-lux text-muted-foreground">
              Sobre · № 003
            </p>
            <span className="h-px flex-1 max-w-[160px] bg-border" />
          </div>
        </Reveal>

        <div className="mt-10 md:mt-16 grid grid-cols-12 gap-10 md:gap-16 items-start">
          <Reveal className="col-span-12 md:col-span-5 md:pl-8" delay={100}>
            <div className="relative">
              {/* Layered offset frame */}
              <span aria-hidden className="pointer-events-none absolute -left-3 -top-3 md:-left-5 md:-top-5 h-full w-full border border-foreground/70" />
              {/* Floating dotted ring */}
              <span aria-hidden className="ring-dotted absolute -right-5 -bottom-5 md:-right-7 md:-bottom-7 h-24 w-24 rounded-full drift hidden md:block" />
              {/* Vertical caption — sits outside the frame on the left */}
              <span aria-hidden className="hidden md:block absolute -left-14 bottom-0 [writing-mode:vertical-rl] rotate-180 text-[10px] uppercase tracking-lux text-muted-foreground whitespace-nowrap">
                Gustavo Henrico — MMXXVI
              </span>
              <figure className="img-hover relative overflow-hidden grain group aspect-[4/5] bg-muted">
                <img
                  src={aboutPortrait}
                  alt="Gustavo Henrico"
                  loading="eager"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover grayscale transition-[filter,transform] duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:grayscale-0 group-hover:scale-[1.02]"
                />
                <span className="pointer-events-none absolute left-3 top-3 z-10 bg-background/85 px-2 py-1 text-[10px] uppercase tracking-lux-sm backdrop-blur-sm">
                  № 003 · Retrato
                </span>
                <span className="pointer-events-none absolute inset-x-0 bottom-0 z-10 translate-y-full bg-gradient-to-t from-foreground/85 via-foreground/55 to-transparent px-4 pb-3 pt-12 text-background transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
                  <span className="flex items-baseline justify-between gap-3">
                    <span className="font-serif text-base italic">Gustavo Henrico</span>
                    <span className="text-[10px] uppercase tracking-lux-sm opacity-80">SP · BR</span>
                  </span>
                </span>
              </figure>
            </div>
            <figcaption className="mt-6 md:mt-8 flex items-center justify-between text-[10px] uppercase tracking-lux-sm text-muted-foreground">
              <span>Auto-retrato</span>
              <span>São Paulo · SP</span>
            </figcaption>
          </Reveal>

          <div className="col-span-12 md:col-span-7 flex flex-col gap-6 md:gap-8">
            <Reveal delay={120}>
              <h1 className="font-serif text-[2.25rem] sm:text-5xl md:text-[clamp(2.25rem,4vw,4rem)] leading-[1.04] md:leading-[1.0] tracking-[-0.02em] max-w-[18ch]">
                O olhar <em className="italic text-muted-foreground">por trás</em> da lente.
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <div className="space-y-5 text-[14px] md:space-y-6 md:text-[16px] leading-relaxed text-foreground/80 max-w-[58ch]">
                <p className="drop-cap">
                  Olá, sou Gustavo Henrico. Sou fotógrafo e gosto de registrar o que vejo por aí.
                </p>
                <p>
                  Através do meu olhar, busco capturar a calma e o detalhe. Com base no interior
                  de SP, crio imagens que valorizam o silêncio, a textura das coisas e a luz que
                  envolve cada cena. Meu trabalho é feito para ser sentido, não apenas visto.
                </p>
              </div>
            </Reveal>

            {/* Mini-bio meta */}
            <Reveal delay={240}>
              <dl className="mt-2 grid grid-cols-2 gap-y-4 gap-x-8 border-t border-border/60 pt-6 max-w-[58ch]">
                <div>
                  <dt className="text-[10px] uppercase tracking-lux-sm text-muted-foreground">Base</dt>
                  <dd className="mt-1 font-serif text-lg">Interior de SP</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-lux-sm text-muted-foreground">Foco</dt>
                  <dd className="mt-1 font-serif text-lg italic">Retrato · Paisagem</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-lux-sm text-muted-foreground">Desde</dt>
                  <dd className="mt-1 font-serif text-lg">MMXXII</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-lux-sm text-muted-foreground">Disponível</dt>
                  <dd className="mt-1 font-serif text-lg italic">Comissões abertas</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
