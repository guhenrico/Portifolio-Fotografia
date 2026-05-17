import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
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

        <div className="mt-8 md:mt-12 grid grid-cols-12 gap-8 md:gap-14 items-start">
          <Reveal className="col-span-12 md:col-span-5" delay={100}>
            <figure className="img-hover relative overflow-hidden grain">
              <img
                src={aboutPortrait}
                alt="Gustavo Henrico"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              {/* decorative dotted ring */}
              <span className="ring-dotted absolute -bottom-6 -right-6 h-24 w-24 rounded-full hidden md:block" aria-hidden />
            </figure>
            <figcaption className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-lux-sm text-muted-foreground">
              <span>Retrato</span>
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
                <p>
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
