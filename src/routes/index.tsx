import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Reveal } from "@/components/Reveal";
import BeGuFontana from "@/assets/portfolio/Be e Gu Fontana.JPEG";
import { whatsappUrl } from "@/lib/whatsapp";

const SITE_URL = "https://entrenosphotos.com.br/";
const TITLE = "Entre Nós Fotografia | Casal de Fotógrafos em Boituva";
const DESCRIPTION =
  "Entre Nós Fotografia é um casal de fotógrafos em Boituva focados em Casamentos, Eventos e Ensaios Externos. Vamos aonde sua história pedir";
const SOCIAL_IMAGE_URL = `${SITE_URL}gustavo-henrico-fotografia.jpg`;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Entre Nós Fotografia" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: SOCIAL_IMAGE_URL },
      {
        property: "og:image:alt",
        content: "Casal de fotógrafos em Boituva, Gustavo e Beatriz",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:url", content: SITE_URL },
      { name: "twitter:image", content: SOCIAL_IMAGE_URL },
      {
        name: "twitter:image:alt",
        content: "Casal de fotógrafos em Boituva, Gustavo e Beatriz",
      },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": ["ProfessionalService", "LocalBusiness"],
          name: "Entre Nós Fotografia",
          alternateName: "Por Gustavo & Beatriz",
          url: SITE_URL,
          telephone: "+55 15 99144-6560",
          email: "gustavo.henrico01@gmail.com",
          image: SOCIAL_IMAGE_URL,
          description: DESCRIPTION,
          areaServed: ["Boituva", "Iperó", "Tatuí", "Cerquilho", "Porto Feliz", "Sorocaba"].map(
            (name) => ({ "@type": "City", name }),
          ),
          sameAs: ["https://www.instagram.com/entrenosphotos/"],
        },
      },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
});

function Camera() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="inline-block h-3.5 w-3.5 text-white align-middle"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M6.827 6.175A2.25 2.25 0 018.675 4.5h6.65a2.25 2.25 0 011.848 1.675M17.25 10.5h-10.5m10.5 0a1.5 1.5 0 011.5 1.5v4.375c0 1.241-.986 2.25-2.227 2.25H5.477c-1.24 0-2.227-1.009-2.227-2.25V12c0-.88.214-1.603.586-2.227a2.25 2.25 0 011.848-1.675h6.65a2.25 2.25 0 011.848 1.675Zm-8.986 0h.005M12 14.5c0-.966-.784-1.75-1.75-1.75s-1.75.784-1.75 1.75.784 1.75 1.75 1.75S12 15.466 12 14.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function Index() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Header />

      <section className="relative overflow-hidden w-full px-5 md:px-12 pt-32 pb-12 md:pt-44 md:pb-16">
        <div
          className="absolute inset-0 bg-cover bg-[position:68%_bottom] md:bg-[position:65%_bottom]"
          style={{ backgroundImage: `url(${BeGuFontana})` }}
        />
        <div className="absolute inset-0 bg-black/38" />
        <div className="pointer-events-none absolute right-5 top-28 hidden md:block md:right-12 md:top-40">
          <div className="relative h-28 w-28">
            <svg
              viewBox="0 0 100 100"
              className="spin-slow absolute inset-0 h-full w-full text-white"
            >
              <defs>
                <path id="circ" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
              </defs>
              <text fontSize="8" letterSpacing="3" fill="currentColor" fontFamily="Inter">
                <textPath href="#circ">GUSTAVO &amp; BEATRIZ · PORTFÓLIO · </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <Camera />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-y-10 md:gap-6">
          <Reveal className="col-span-7 md:col-span-2">
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] md:tracking-lux text-white leading-relaxed">
              Por Gustavo &amp;
              <br />
              Beatriz
            </p>
          </Reveal>
          <Reveal className="col-span-5 self-start text-right md:hidden">
            <p className="text-[10px] uppercase tracking-[0.28em] text-white leading-relaxed">
              MMXXVI
              <br />№ 001
            </p>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-9 md:col-start-3" delay={120}>
            <h1 className="word-rise font-serif text-[2.5rem] sm:text-5xl md:text-[clamp(2.75rem,7vw,7rem)] leading-[1.02] md:leading-[0.95] tracking-[-0.02em] text-white">
              <span style={{ animationDelay: "60ms" }}>Fotógrafos&nbsp;</span>
              <span style={{ animationDelay: "140ms" }} className="italic text-white/90">
                de&nbsp;
              </span>
              <span style={{ animationDelay: "220ms" }}>histórias&nbsp;</span>
              <span style={{ animationDelay: "300ms" }}>—&nbsp;</span>
              <span style={{ animationDelay: "540ms" }}>imagens&nbsp;</span>
              <span style={{ animationDelay: "620ms" }}>entre&nbsp;</span>
              <span style={{ animationDelay: "700ms" }}>olhar,&nbsp;</span>
              <span style={{ animationDelay: "780ms" }}>luz&nbsp;</span>
              <span style={{ animationDelay: "860ms" }}>e&nbsp;</span>
              <span style={{ animationDelay: "940ms" }}>memória.</span>
            </h1>
          </Reveal>

          <Reveal
            className="col-span-10 col-start-3 flex flex-wrap items-center gap-x-6 gap-y-4 md:col-span-4 md:col-start-9 md:mt-12"
            delay={240}
          >
            <p className="w-full text-[13px] leading-relaxed text-white/85 md:text-sm">
              Somos fotógrafos com base em Boituva, interior de SP. Atuamos com ensaios e
              casamentos, disponíveis para registrar histórias em qualquer lugar que elas pedirem.
              Criamos imagens que respiram silêncio, feitas para ser sentidas, não apenas vistas.
            </p>
            <a
              href="#works"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("works")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="group mt-4 inline-flex items-center gap-3 border-b border-white/40 pb-1.5 text-[11px] uppercase tracking-lux text-white transition-colors hover:border-white md:mt-8"
            >
              Ver trabalhos
              <span
                className="drift inline-block transition-transform duration-500 group-hover:translate-y-1"
                aria-hidden
              >
                ↓
              </span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-3 border-b border-white/40 pb-1.5 text-[11px] uppercase tracking-lux text-white transition-colors hover:border-white md:mt-8"
              aria-label="Solicitar informações sobre ensaio pelo WhatsApp"
            >
              Solicitar informações
              <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>

        {/* scroll cue */}
        <div className="mt-16 hidden md:flex items-center gap-3 text-[10px] uppercase tracking-lux text-white">
          <span className="h-px w-12 bg-white/40" />
          Role para ver
          <span className="drift inline-block">↓</span>
        </div>
      </section>

      <div className="border-y border-border/60 py-5 md:py-7 text-center">
        <p className="font-serif italic text-foreground/80 text-2xl md:text-4xl">Boituva SP</p>
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
