import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import aboutPortrait from "@/assets/portfolio/Beatriz e Gustavo.JPEG";
import coliseumPortrait from "@/assets/portfolio/Be e Gu parque do coliseu.JPEG";
import { whatsappUrl } from "@/lib/whatsapp";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "Sobre Nós | Entre Nós Fotografia em Boituva" },
      {
        name: "description",
        content:
          "Conheça Gustavo e Beatriz, o casal por trás da Entre Nós Fotografia. Registramos casamentos, eventos e ensaios com olhar sensível em Boituva e região.",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Sobre Nós | Entre Nós Fotografia em Boituva" },
      {
        property: "og:description",
        content:
          "Conheça Gustavo e Beatriz, o casal por trás da Entre Nós Fotografia, em Boituva e região.",
      },
    ],
    links: [{ rel: "canonical", href: "https://henricofotografia.com.br/about" }],
  }),
});

function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col overflow-x-clip [&>footer]:mt-0">
      <Header />
      <section className="relative mx-auto w-full max-w-[1200px] px-5 pt-20 md:px-12 md:pt-32">
        <Reveal>
          <div className="flex items-center gap-3">
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] md:tracking-lux text-muted-foreground">
              Sobre
            </p>
            <span className="h-px flex-1 max-w-[160px] bg-border" />
            <span className="text-[10px] uppercase tracking-lux-sm text-muted-foreground hidden sm:inline">
              Capítulo I
            </span>
          </div>
        </Reveal>

        <div className="mt-8 md:mt-16 grid grid-cols-12 gap-8 md:gap-16 items-start">
          <Reveal className="col-span-12 md:col-span-5 md:pl-8" delay={100}>
            <div className="relative mx-auto max-w-[360px] md:max-w-none">
              {/* Layered offset frame — desktop only to avoid mobile overflow */}
              <span
                aria-hidden
                className="pointer-events-none hidden md:block absolute -left-5 -top-5 h-full w-full border border-foreground/70"
              />
              {/* Floating dotted ring */}
              <span
                aria-hidden
                className="ring-dotted absolute -right-5 -bottom-5 md:-right-7 md:-bottom-7 h-20 w-20 md:h-24 md:w-24 rounded-full drift hidden md:block"
              />
              {/* Vertical caption — sits outside the frame on the left */}
              <span
                aria-hidden
                className="hidden md:block absolute -left-14 bottom-0 [writing-mode:vertical-rl] rotate-180 text-[10px] uppercase tracking-lux text-muted-foreground whitespace-nowrap"
              >
                Gustavo &amp; Beatriz — MMXXVI
              </span>
              <figure className="img-hover relative overflow-hidden grain group bg-muted">
                <img
                  src={aboutPortrait}
                  alt="Beatriz e Gustavo"
                  loading="eager"
                  decoding="async"
                  className="relative block h-auto w-full transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
                />
                <span className="pointer-events-none absolute left-3 top-3 z-10 bg-background/85 px-2 py-1 text-[10px] uppercase tracking-lux-sm backdrop-blur-sm">
                  Retrato
                </span>
                <span className="pointer-events-none absolute inset-x-0 bottom-0 z-10 translate-y-full bg-gradient-to-t from-foreground/85 via-foreground/55 to-transparent px-4 pb-3 pt-12 text-background transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
                  <span className="flex items-baseline justify-between gap-3">
                    <span className="font-serif text-base italic">Gustavo Henrico</span>
                    <span className="text-[10px] uppercase tracking-lux-sm opacity-80">
                      SP · BR
                    </span>
                  </span>
                </span>
              </figure>
            </div>
          </Reveal>

          <div className="col-span-12 md:col-span-7 flex flex-col gap-6 md:gap-8 min-w-0">
            <Reveal delay={120}>
              <h1 className="font-serif text-[2rem] sm:text-5xl md:text-[clamp(2.25rem,4vw,4rem)] leading-[1.05] md:leading-[1.0] tracking-[-0.02em] max-w-[18ch] break-words">
                Dois olhares <em className="italic text-muted-foreground">por trás</em> da{" "}
                <span className="relative inline-block">
                  lente
                  <span
                    aria-hidden
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-foreground/80 origin-left scale-x-0 animate-[underline_1.4s_ease-out_.6s_forwards]"
                  />
                </span>
                .
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <div className="space-y-5 text-[14px] md:space-y-6 md:text-[16px] leading-relaxed text-foreground/80 max-w-[58ch]">
                <p className="drop-cap">
                  Olá, somos Gustavo e Beatriz. A fotografia sempre foi a nossa maneira de
                  desacelerar e enxergar a beleza nos detalhes — agora, decidimos unir esses dois
                  olhares para registrar quem quiser eternizar a sua própria história.
                </p>
                <p>
                  Com base em Boituva, interior de SP, procuramos capturar a calma e os detalhes
                  mais genuínos. Cada imagem valoriza o silêncio, a textura das coisas e a atmosfera
                  do momento — feita para ser sentida, não apenas vista.
                </p>
              </div>
            </Reveal>

            {/* Mini-bio meta */}
            <Reveal delay={260}>
              <dl className="grid grid-cols-1 gap-x-6 gap-y-4 max-w-[58ch] sm:grid-cols-2 md:gap-x-8">
                <div>
                  <dt className="text-[10px] uppercase tracking-lux-sm text-muted-foreground">
                    Base
                  </dt>
                  <dd className="mt-1 font-serif text-base md:text-lg">Boituva, SP</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-lux-sm text-muted-foreground">
                    Foco
                  </dt>
                  <dd className="mt-1 max-w-[28ch] font-serif text-base italic leading-snug md:text-lg">Casamentos, Eventos e Ensaios Externos</dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] uppercase tracking-lux-sm">
                <span className="inline-flex items-center gap-2 text-muted-foreground">
                  <span className="pulse-dot" aria-hidden /> Agenda de 2026/2027 aberta
                </span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="word-swap font-serif text-base italic normal-case tracking-normal text-foreground"
                >
                  <span className="swap-out">vamos conversar →</span>
                  <span className="swap-in text-[#25D366]">WhatsApp →</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Pull quote */}
        <Reveal delay={200}>
          <figure className="relative left-1/2 mt-16 h-[78vw] max-h-[30rem] w-screen -translate-x-1/2 overflow-hidden md:mt-28 md:h-auto md:max-h-none">
            <img
              src={coliseumPortrait}
              alt="Gustavo e Beatriz no parque do Coliseu"
              className="block h-full w-full object-cover object-[center_55%] md:h-auto md:object-contain"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/38" aria-hidden />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-5 py-10 md:px-8 md:py-16">
              <span
                aria-hidden
                className="block text-center font-serif text-6xl leading-none text-white/60 select-none md:text-8xl"
              >
                “
              </span>
              <blockquote className="-mt-4 max-w-[22ch] break-words text-center font-serif text-[1.6rem] italic leading-[1.15] tracking-[-0.01em] text-white sm:text-3xl md:-mt-6 md:text-[clamp(2rem,4.2vw,3.75rem)] md:leading-[1.1]">
                Vamos aonde a sua história pedir.
              </blockquote>
            </div>
          </figure>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
