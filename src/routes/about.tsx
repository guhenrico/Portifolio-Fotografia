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
      <section className="mx-auto w-full max-w-[1100px] px-5 md:px-12 pt-28 pb-20 md:pt-48 md:pb-32 flex-1">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <Reveal className="col-span-12 md:col-span-3">
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] md:tracking-lux text-muted-foreground">
              Sobre · № 003
            </p>
          </Reveal>

          <div className="col-span-12 md:col-span-9">
            <Reveal>
              <h1 className="font-serif text-[2.25rem] sm:text-5xl md:text-[clamp(2.5rem,5.5vw,5.5rem)] leading-[1.04] md:leading-[1.0] tracking-[-0.02em]">
                O olhar <em className="italic text-muted-foreground">por trás</em> da lente.
              </h1>
            </Reveal>
          </div>

          <Reveal className="col-span-12 md:col-span-5 md:col-start-1 mt-8 md:mt-16" delay={100}>
            <figure className="overflow-hidden">
              <img
                src={aboutPortrait}
                alt="Gustavo Henrico"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover"
              />
            </figure>
          </Reveal>

          <div className="col-span-12 md:col-span-6 md:col-start-7 mt-2 md:mt-16">
            <Reveal delay={150}>
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
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
