import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import embracePortrait from "@/assets/portfolio/Fontana Abraço.JPEG";
import { whatsappUrl } from "@/lib/whatsapp";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contato | Entre Nós Fotografia em Boituva" },
      {
        name: "description",
        content:
          "Entre em contato com a Entre Nós Fotografia para registrar casamentos, eventos e ensaios em Boituva e região.",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Contato | Entre Nós Fotografia em Boituva" },
      { property: "og:url", content: "https://entrenosphotos.com.br/contact" },
      {
        property: "og:description",
        content: "Fale com Gustavo e Beatriz sobre seu próximo casamento, evento ou ensaio.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contato | Entre Nós Fotografia em Boituva" },
      {
        name: "twitter:description",
        content: "Fale com Gustavo e Beatriz sobre seu próximo casamento, evento ou ensaio.",
      },
      { name: "twitter:url", content: "https://entrenosphotos.com.br/contact" },
    ],
    links: [{ rel: "canonical", href: "https://entrenosphotos.com.br/contact" }],
  }),
});

const FIRST_HELLO = [
  {
    title: "A sua ideia",
    description: "Um ensaio, um casamento ou um evento. Conte qual história você quer guardar.",
  },
  {
    title: "Quando e onde",
    description: "Se já tiver uma data ou um lugar em mente, compartilhe com a gente.",
  },
  {
    title: "O que te inspira",
    description: "Uma referência, um sentimento ou um detalhe. Queremos conhecer o seu olhar.",
  },
];

function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground [&>footer]:mt-0">
      <Header />

      <section
        aria-labelledby="contact-heading"
        className="mx-auto max-w-[1440px] px-5 pb-16 pt-24 md:px-12 md:pb-24 md:pt-32"
      >
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 pb-5 text-[10px] uppercase tracking-lux-sm text-muted-foreground">
            <span className="inline-flex items-center gap-3">
              <span
                className="h-1.5 w-1.5 rounded-full bg-[#927457] dark:bg-[#bba386]"
                aria-hidden="true"
              />
              Contato
            </span>
            <span>Vamos criar memórias</span>
          </div>
        </Reveal>

        <div className="mt-10 grid items-center gap-12 md:mt-14 md:grid-cols-12 md:gap-10 lg:gap-20">
          <div className="min-w-0 md:col-span-6">
            <Reveal delay={80}>
              <h1
                id="contact-heading"
                className="font-serif text-[clamp(3.25rem,8vw,5rem)] leading-[0.98] tracking-[-0.045em] lg:text-[clamp(5rem,6.6vw,6.5rem)]"
              >
                Sua história
                <br />
                começa com
                <br />
                <em className="font-light text-[#927457] dark:text-[#bba386]">um olá.</em>
              </h1>
              <p className="mt-6 max-w-[42ch] text-sm leading-[1.8] text-muted-foreground md:mt-8 md:text-[15px]">
                Conte para nós a sua ideia. A melhor parte começa antes da câmera, quando a história
                ainda está encontrando seu jeito de acontecer.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conversar com Gustavo e Beatriz pelo WhatsApp"
                className="group mt-8 flex min-h-28 items-center gap-4 bg-[#28372e] p-5 text-white transition-colors duration-300 hover:bg-[#34473b] focus-visible:outline-[#28372e] dark:focus-visible:outline-white sm:gap-5 sm:p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/5 sm:h-12 sm:w-12">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-white/65">
                    O primeiro olá
                  </span>
                  <span className="mt-1 block font-serif text-2xl leading-tight sm:text-3xl">
                    Vamos conversar
                  </span>
                  <span className="mt-1.5 block text-xs text-white/75">
                    Pelo WhatsApp, do seu jeito.
                  </span>
                </span>
                <ArrowUpRight
                  className="h-5 w-5 shrink-0 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1"
                  aria-hidden="true"
                />
              </a>

              <div className="mt-5 divide-y divide-border/70 border-y border-border/70">
                <a
                  href="mailto:gustavo.henrico01@gmail.com"
                  className="group flex min-h-20 items-center gap-4 py-4 transition-colors hover:text-[#927457] dark:hover:text-[#bba386]"
                >
                  <Mail className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[9px] uppercase tracking-lux-sm text-muted-foreground">
                      Prefere e-mail?
                    </span>
                    <span className="mt-1 block break-all text-sm sm:text-base">
                      gustavo.henrico01@gmail.com
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="https://www.instagram.com/entrenosphotos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Conhecer o Instagram de Entre Nós Fotografia, @entrenosphotos"
                  className="group flex min-h-20 items-center gap-4 py-4 transition-colors hover:text-[#927457] dark:hover:text-[#bba386]"
                >
                  <Instagram
                    className="h-5 w-5 shrink-0 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[9px] uppercase tracking-lux-sm text-muted-foreground">
                      Nosso diário em imagens
                    </span>
                    <span className="mt-1 block font-serif text-xl">@entrenosphotos</span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-[10px] text-muted-foreground">
                <a
                  href="https://maps.google.com/?q=Boituva,+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver Boituva, São Paulo, no mapa"
                  className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-foreground"
                >
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  Boituva, SP · disponíveis para viajar
                </a>
                <span className="inline-flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-[#927457] dark:bg-[#bba386]"
                    aria-hidden="true"
                  />
                  Agenda 2026 / 2027 aberta
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal className="md:col-span-6" delay={140}>
            <div className="relative mx-auto mb-9 max-w-[520px] pl-4 sm:pl-6 md:mb-12">
              <div className="border border-border/70 bg-[#ece6db] p-3 dark:bg-[#191714] sm:p-4">
                <figure>
                  <figcaption className="pb-3 text-right text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:pb-4">
                    Gustavo &amp; Beatriz
                  </figcaption>
                  <div className="img-hover relative aspect-[3/4] overflow-hidden bg-muted">
                    <img
                      src={embracePortrait}
                      alt="Gustavo e Beatriz abraçados diante da Fontana di Trevi, em Roma"
                      width={2581}
                      height={3872}
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                      className="h-full w-full object-cover object-bottom"
                    />
                    <span
                      className="pointer-events-none absolute inset-3 border border-white/25"
                      aria-hidden="true"
                    />
                  </div>
                </figure>
              </div>
              <div className="absolute -bottom-9 left-0 max-w-[75%] border border-border/60 bg-background px-5 py-4 shadow-lg sm:-bottom-10 sm:px-7 sm:py-5">
                <p className="font-serif text-2xl italic leading-tight text-foreground sm:text-3xl">
                  Primeiro, um encontro.
                  <br />
                  Depois, uma memória.
                </p>
                <span
                  className="mt-3 block h-px w-10 bg-[#927457]/50 dark:bg-[#bba386]/50"
                  aria-hidden="true"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        aria-labelledby="first-hello-heading"
        className="border-t border-border/60 bg-secondary/60"
      >
        <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-12 md:py-20">
          <Reveal>
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-[10px] uppercase tracking-lux-sm text-muted-foreground">
                  Pode começar por aqui
                </p>
                <h2
                  id="first-hello-heading"
                  className="mt-4 max-w-[20ch] font-serif text-4xl leading-[1.1] tracking-tight md:text-5xl"
                >
                  O que contar no{" "}
                  <em className="text-[#927457] dark:text-[#bba386]">primeiro olá.</em>
                </h2>
              </div>
              <p className="max-w-[34ch] text-sm leading-relaxed text-muted-foreground">
                Tudo bem se a ideia ainda estiver tomando forma. A conversa também faz parte da
                história.
              </p>
            </div>
          </Reveal>
          <ol className="mt-10 grid gap-8 md:mt-12 md:grid-cols-3 md:gap-10">
            {FIRST_HELLO.map((item, index) => (
              <li key={item.title}>
                <Reveal delay={index * 100}>
                  <div className="border-t border-foreground/20 pt-5 md:pt-6">
                    <span
                      className="font-serif text-base italic text-[#927457] dark:text-[#bba386]"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mb-3 mt-4 font-serif text-3xl">{item.title}</h3>
                    <p className="max-w-[36ch] text-sm leading-[1.8] text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
          <Reveal delay={180}>
            <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border/70 pt-6 sm:flex-row sm:items-center md:mt-14">
              <p className="font-serif text-xl italic text-foreground/75">
                Ainda buscando inspiração?
              </p>
              <Link
                to="/"
                hash="works"
                className="group inline-flex min-h-11 items-center gap-4 text-[10px] uppercase tracking-lux-sm text-foreground transition-colors hover:text-[#927457] dark:hover:text-[#bba386]"
              >
                Explore nossos ensaios
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
