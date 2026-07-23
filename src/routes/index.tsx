import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Reveal } from "@/components/Reveal";

const SITE_URL = "https://henricofotografia.com.br/";
const TITLE = "Fotógrafo em Boituva | Gustavo Henrico Fotografia";
const DESCRIPTION =
  "Fotógrafo em Boituva especializado em ensaios externos e retratos com luz natural. Conheça o portfólio de Gustavo Henrico e solicite informações.";
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
      { property: "og:site_name", content: "Gustavo Henrico Fotografia" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: SOCIAL_IMAGE_URL },
      {
        property: "og:image:alt",
        content: "Retrato feminino ao ar livre fotografado por Gustavo Henrico",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: SOCIAL_IMAGE_URL },
      {
        name: "twitter:image:alt",
        content: "Retrato feminino ao ar livre fotografado por Gustavo Henrico",
      },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": ["ProfessionalService", "LocalBusiness"],
          name: "Gustavo Henrico Fotografia",
          alternateName: "Henrico Fotografia",
          url: SITE_URL,
          telephone: "+55 11 99737-2512",
          email: "gustavo.henrico01@gmail.com",
          image: SOCIAL_IMAGE_URL,
          description: DESCRIPTION,
          areaServed: ["Boituva", "Iperó", "Tatuí", "Cerquilho", "Porto Feliz", "Sorocaba"].map(
            (name) => ({ "@type": "City", name }),
          ),
          sameAs: ["https://www.instagram.com/guhenricoo/"],
        },
      },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
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
            <svg
              viewBox="0 0 100 100"
              className="spin-slow absolute inset-0 h-full w-full text-muted-foreground"
            >
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
              Henrico
              <br />
              Collection 01
            </p>
          </Reveal>
          <Reveal className="col-span-5 self-start text-right md:hidden">
            <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground leading-relaxed">
              MMXXVI
              <br />№ 001
            </p>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-9 md:col-start-3" delay={120}>
            <h1 className="word-rise font-serif text-[2.5rem] sm:text-5xl md:text-[clamp(2.75rem,7vw,7rem)] leading-[1.02] md:leading-[0.95] tracking-[-0.02em]">
              <span style={{ animationDelay: "60ms" }}>Fotógrafo&nbsp;</span>
              <span style={{ animationDelay: "140ms" }}>em&nbsp;</span>
              <span style={{ animationDelay: "220ms" }} className="italic text-muted-foreground">
                Boituva&nbsp;
              </span>
              <span style={{ animationDelay: "300ms" }}>—&nbsp;</span>
              <span style={{ animationDelay: "380ms" }}>imagens&nbsp;</span>
              <span style={{ animationDelay: "460ms" }}>entre&nbsp;</span>
              <span style={{ animationDelay: "540ms" }}>olhar,&nbsp;</span>
              <span style={{ animationDelay: "620ms" }}>luz&nbsp;</span>
              <span style={{ animationDelay: "700ms" }}>e&nbsp;</span>
              <span style={{ animationDelay: "780ms" }}>memória.</span>
            </h1>
          </Reveal>

          <Reveal
            className="col-span-10 col-start-3 md:col-span-4 md:col-start-9 md:mt-12"
            delay={240}
          >
            <p className="text-[13px] md:text-sm text-muted-foreground leading-relaxed">
              Gustavo Henrico é fotógrafo em Boituva, São Paulo. Atua principalmente com ensaios
              externos e retratos com luz natural, atendendo Boituva e região. Imagens que respiram
              silêncio, feitas para ser sentidas, não apenas vistas.
            </p>
            <a
              href="#works"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("works")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="group mt-8 inline-flex items-center gap-3 border-b border-foreground/40 pb-1.5 text-[11px] uppercase tracking-lux text-foreground transition-colors hover:border-foreground"
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
              href="https://wa.me/5511997372512"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-6 mt-8 inline-flex items-center gap-3 border-b border-foreground/40 pb-1.5 text-[11px] uppercase tracking-lux text-foreground transition-colors hover:border-foreground"
              aria-label="Solicitar informações sobre ensaio pelo WhatsApp"
            >
              Solicitar informações
              <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>

        {/* scroll cue */}
        <div className="mt-16 hidden md:flex items-center gap-3 text-[10px] uppercase tracking-lux text-muted-foreground">
          <span className="h-px w-12 bg-muted-foreground/40" />
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
