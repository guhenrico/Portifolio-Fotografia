import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import aboutPortrait from "@/assets/portfolio/Beatriz e Gustavo.JPEG";
import coliseumPortrait from "@/assets/portfolio/Be e Gu parque do coliseu.JPEG";
import gardenPortrait from "@/assets/portfolio/Be e Gu Jardim.JPEG";
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
      { property: "og:url", content: "https://entrenosphotos.com.br/about" },
      {
        property: "og:description",
        content:
          "Conheça Gustavo e Beatriz, o casal por trás da Entre Nós Fotografia, em Boituva e região.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sobre Nós | Entre Nós Fotografia em Boituva" },
      {
        name: "twitter:description",
        content:
          "Conheça Gustavo e Beatriz, o casal por trás da Entre Nós Fotografia, em Boituva e região.",
      },
      { name: "twitter:url", content: "https://entrenosphotos.com.br/about" },
    ],
    links: [{ rel: "canonical", href: "https://entrenosphotos.com.br/about" }],
  }),
});

const OUR_APPROACH = [
  {
    title: "Presença",
    description:
      "Desacelerar, observar e estar por inteiro. É assim que encontramos a beleza nos pequenos detalhes.",
  },
  {
    title: "Sensibilidade",
    description:
      "A luz, os gestos e a atmosfera de cada encontro. Dois olhares atentos ao que faz a sua história ser sua.",
  },
  {
    title: "Memória",
    description:
      "Fotografias feitas para guardar o que se sente. Para voltar a um instante, mesmo depois que ele passou.",
  },
];

function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground [&>footer]:mt-0">
      <Header />

      <section
        aria-labelledby="about-heading"
        className="mx-auto max-w-[1440px] px-5 pb-16 pt-24 md:px-12 md:pb-24 md:pt-32"
      >
        <Reveal>
          <div className="flex items-center justify-between gap-4 border-b border-border/70 pb-5 text-[10px] uppercase tracking-lux-sm text-muted-foreground">
            <span className="inline-flex items-center gap-3">
              <span
                className="h-1.5 w-1.5 rounded-full bg-[#927457] dark:bg-[#bba386]"
                aria-hidden="true"
              />
              Sobre nós
            </span>
            <span>Gustavo &amp; Beatriz</span>
          </div>
        </Reveal>

        <div className="mt-10 grid items-center gap-12 md:mt-16 md:grid-cols-12 md:gap-10 lg:gap-20">
          <div className="min-w-0 md:col-span-6">
            <Reveal delay={80}>
              <h1
                id="about-heading"
                className="font-serif text-[clamp(3.25rem,8vw,5rem)] leading-[0.98] tracking-[-0.045em] lg:text-[clamp(5rem,6.6vw,6.5rem)]"
              >
                Dois olhares.
                <br />
                Uma história
                <br />
                <em className="font-light text-[#927457] dark:text-[#bba386]">entre nós.</em>
              </h1>
              <p className="mt-7 font-serif text-2xl italic leading-snug text-foreground/75 md:mt-9 md:text-3xl">
                Olá, somos Gustavo e Beatriz.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-5 max-w-[48ch] space-y-4 text-sm leading-relaxed text-muted-foreground md:text-[15px] md:leading-[1.85]">
                <p>
                  A fotografia sempre foi a nossa maneira de desacelerar e enxergar a beleza nos
                  detalhes. Decidimos unir esses dois olhares para registrar quem quiser eternizar a
                  sua própria história.
                </p>
                <p>
                  Com base em Boituva, interior de SP, procuramos capturar a calma e os detalhes
                  mais genuínos. Cada imagem valoriza o silêncio, a textura das coisas e a atmosfera
                  do momento — feita para ser sentida, não apenas vista.
                </p>
              </div>
              <a
                href="#nosso-olhar"
                className="group mt-8 inline-flex min-h-11 items-center gap-4 text-[10px] uppercase tracking-lux-sm text-foreground"
              >
                Conheça nosso olhar
                <ArrowDown
                  className="h-4 w-4 transition-transform group-hover:translate-y-1"
                  aria-hidden="true"
                />
              </a>
            </Reveal>
          </div>

          <Reveal className="md:col-span-6" delay={140}>
            <div className="relative mx-auto mb-14 max-w-[520px] pl-6 sm:pl-10 md:mb-16">
              <span
                className="pointer-events-none absolute -top-3 bottom-3 left-9 right-3 border border-[#927457]/35 sm:left-14 dark:border-[#bba386]/35"
                aria-hidden="true"
              />
              <figure className="relative">
                <div className="img-hover aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={aboutPortrait}
                    alt="Beatriz e Gustavo juntos diante da Fontana di Trevi, em Roma"
                    width={2581}
                    height={3872}
                    fetchPriority="high"
                    loading="eager"
                    decoding="async"
                    className="h-full w-full object-cover object-bottom"
                  />
                </div>
                <figcaption className="mt-4 flex items-center justify-end gap-3 text-[9px] uppercase tracking-[0.18em] text-muted-foreground sm:text-[10px]">
                  <span className="hidden h-px w-6 bg-border sm:inline-block" aria-hidden="true" />
                  Gustavo &amp; Beatriz
                </figcaption>
              </figure>
              <figure className="absolute -bottom-9 left-0 w-[46%] -rotate-6 border border-border/50 bg-background p-2 shadow-xl transition-transform duration-700 hover:rotate-0 sm:-bottom-12 sm:p-3">
                <img
                  src={coliseumPortrait}
                  alt="Gustavo e Beatriz caminhando juntos no parque do Coliseu"
                  width={3872}
                  height={2581}
                  loading="eager"
                  decoding="async"
                  className="aspect-[3/2] w-full object-cover"
                />
                <figcaption className="pb-1 pt-3 text-center font-serif text-sm italic text-foreground sm:text-base">
                  Nossa história, em um clique.
                </figcaption>
              </figure>
            </div>
          </Reveal>
        </div>

        <Reveal delay={220}>
          <dl className="mt-4 grid gap-6 border-y border-border/70 py-7 sm:grid-cols-3 md:mt-8 md:gap-10 md:py-8">
            <div>
              <dt className="text-[9px] uppercase tracking-lux-sm text-muted-foreground">
                Nossa base
              </dt>
              <dd className="mt-2 font-serif text-xl">Boituva, São Paulo</dd>
            </div>
            <div>
              <dt className="text-[9px] uppercase tracking-lux-sm text-muted-foreground">
                O que registramos
              </dt>
              <dd className="mt-2 font-serif text-xl">Casamentos, eventos e ensaios</dd>
            </div>
            <div>
              <dt className="text-[9px] uppercase tracking-lux-sm text-muted-foreground">
                Novas histórias
              </dt>
              <dd className="mt-2 inline-flex items-center gap-3 font-serif text-xl">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-[#927457] dark:bg-[#bba386]"
                  aria-hidden="true"
                />
                Agenda 2026 / 2027 aberta
              </dd>
            </div>
          </dl>
        </Reveal>
      </section>

      <section
        id="nosso-olhar"
        aria-labelledby="approach-heading"
        className="scroll-mt-24 bg-secondary/60"
      >
        <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-12 md:py-20">
          <Reveal>
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-[10px] uppercase tracking-lux-sm text-muted-foreground">
                  Nossa essência
                </p>
                <h2
                  id="approach-heading"
                  className="mt-4 max-w-[18ch] font-serif text-4xl leading-[1.1] tracking-tight md:text-5xl"
                >
                  O que guia o <em className="text-[#927457] dark:text-[#bba386]">nosso olhar.</em>
                </h2>
              </div>
              <p className="max-w-[32ch] text-sm leading-relaxed text-muted-foreground">
                A forma como vemos o mundo está em cada fotografia que fazemos.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-3 md:gap-10">
            {OUR_APPROACH.map((value, index) => (
              <Reveal key={value.title} delay={index * 100}>
                <div className="border-t border-foreground/20 pt-5 md:pt-7">
                  <span className="font-serif text-base italic text-[#927457] dark:text-[#bba386]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-3 mt-4 font-serif text-3xl md:text-4xl">{value.title}</h3>
                  <p className="max-w-[36ch] text-sm leading-[1.8] text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="next-story-heading"
        className="relative isolate overflow-hidden bg-[#232820] text-white"
      >
        <img
          src={gardenPortrait}
          alt="Gustavo e Beatriz trocando olhares em um jardim, com o Coliseu ao fundo"
          width={3872}
          height={2581}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[70%_center] md:object-center"
        />
        <div
          className="absolute inset-0 bg-black/55 md:bg-gradient-to-r md:from-black/80 md:via-black/45 md:to-black/10"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-[1440px] px-5 py-20 md:px-12 md:py-28 lg:py-36">
          <Reveal>
            <p className="text-[10px] uppercase tracking-lux-sm text-white/75">
              De Boituva, para onde a vida levar
            </p>
            <h2
              id="next-story-heading"
              className="mt-6 max-w-[14ch] font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
            >
              Vamos aonde a sua <em>história pedir.</em>
            </h2>
            <p className="mt-6 max-w-[36ch] text-sm leading-relaxed text-white/80">
              A próxima história pode ser a sua. Vamos criar memórias juntos?
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 items-center justify-between gap-6 bg-white px-5 py-4 text-[10px] uppercase tracking-lux-sm text-[#232820] transition-colors hover:bg-white/85 focus-visible:outline-white"
              >
                Vamos conversar
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <Link
                to="/"
                hash="works"
                className="inline-flex min-h-11 items-center gap-3 border-b border-white/50 text-[10px] uppercase tracking-lux-sm text-white transition-colors hover:border-white focus-visible:outline-white"
              >
                Ver nossos ensaios
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
