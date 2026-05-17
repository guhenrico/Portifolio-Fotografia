import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Henrico — Selected Works" },
      { name: "description", content: "Portfólio fotográfico: retratos, paisagens e animais." },
    ],
  }),
});

function Star() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="inline-block h-3.5 w-3.5 text-foreground/40 align-middle"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0l2 9 10 .5-8 5.5 3 9-7-5-7 5 3-9-8-5.5L10 9z" />
    </svg>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="relative mx-auto max-w-[1600px] px-5 md:px-12 pt-32 pb-12 md:pt-44 md:pb-16">
        {/* decorative seal */}
        <div className="pointer-events-none absolute right-5 top-28 hidden md:block md:right-12 md:top-40">
          <div className="relative h-28 w-28">
            <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0 h-full w-full text-muted-foreground">
              <defs>
                <path id="circ" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
              </defs>
              <text fontSize="8" letterSpacing="3" fill="currentColor" fontFamily="Inter">
                <textPath href="#circ">HENRICO · COLLECTION 01 · MMXXVI · </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <Star />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-y-10 md:gap-6">
          <Reveal className="col-span-7 md:col-span-2">
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] md:tracking-lux text-muted-foreground leading-relaxed">
              Henrico<br />Collection 01
            </p>
          </Reveal>
          <Reveal className="col-span-5 self-start text-right md:hidden">
            <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground leading-relaxed">
              MMXXVI<br />№ 001
            </p>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-9 md:col-start-3" delay={120}>
            <h1 className="word-rise font-serif text-[2.5rem] sm:text-5xl md:text-[clamp(2.75rem,7vw,7rem)] leading-[1.02] md:leading-[0.95] tracking-[-0.02em]">
              <span style={{ animationDelay: "60ms" }}>Imagens&nbsp;</span>
              <span style={{ animationDelay: "140ms" }}>que&nbsp;</span>
              <span style={{ animationDelay: "220ms" }}>respiram&nbsp;</span>
              <span style={{ animationDelay: "300ms" }} className="italic text-muted-foreground">silêncio&nbsp;</span>
              <span style={{ animationDelay: "380ms" }}>—&nbsp;</span>
              <span style={{ animationDelay: "460ms" }}>composições&nbsp;</span>
              <span style={{ animationDelay: "540ms" }}>entre&nbsp;</span>
              <span style={{ animationDelay: "620ms" }}>olhar,&nbsp;</span>
              <span style={{ animationDelay: "700ms" }}>luz&nbsp;</span>
              <span style={{ animationDelay: "780ms" }}>e&nbsp;</span>
              <span style={{ animationDelay: "860ms" }}>memória.</span>
            </h1>
          </Reveal>

          <Reveal className="col-span-10 col-start-3 md:col-span-4 md:col-start-9 md:mt-12" delay={240}>
            <p className="text-[13px] md:text-sm text-muted-foreground leading-relaxed">
              Através de seu olhar, Henrico busca capturar a calma e o detalhe. Com base no interior
              de SP, ele cria imagens que valorizam o silêncio, a textura das coisas e a luz que
              envolve cada cena. Um trabalho feito para ser sentido, não apenas visto.
            </p>
          </Reveal>
        </div>

        {/* scroll cue */}
        <div className="mt-16 hidden md:flex items-center gap-3 text-[10px] uppercase tracking-lux text-muted-foreground">
          <span className="h-px w-12 bg-muted-foreground/40" />
          Role para ver
          <span className="drift inline-block">↓</span>
        </div>
      </section>

      {/* Editorial marquee divider */}
      <div className="border-y border-border/60 py-5 md:py-7">
        <Marquee className="font-serif italic text-foreground/80 text-2xl md:text-4xl">
          <span className="inline-flex items-center gap-12">
            <span>retratos</span> <Star />
            <span>paisagens</span> <Star />
            <span>animais</span> <Star />
            <span>luz natural</span> <Star />
            <span>silêncio</span> <Star />
            <span>memória</span> <Star />
          </span>
          <span className="inline-flex items-center gap-12 pl-12">
            <span>retratos</span> <Star />
            <span>paisagens</span> <Star />
            <span>animais</span> <Star />
            <span>luz natural</span> <Star />
            <span>silêncio</span> <Star />
            <span>memória</span> <Star />
          </span>
        </Marquee>
      </div>

      <div className="pt-12 md:pt-20">
        <Reveal>
          <Gallery />
        </Reveal>
      </div>

      <Footer />
    </main>
  );
}
