import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import aboutPortrait from "@/assets/portfolio/about-portrait.jpeg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "Sobre — Elena Marchetti" },
      { name: "description", content: "Visão artística, prêmios e clientes de Elena Marchetti." },
      { property: "og:title", content: "Sobre — Elena Marchetti" },
      { property: "og:description", content: "Fotógrafa baseada em Milão, entre o editorial e o documental." },
    ],
  }),
});

const clients = [
  "Vogue Italia", "Wallpaper*", "Apartamento", "The Gentlewoman",
  "Hermès", "Aesop", "Jil Sander", "Kinfolk",
  "Loewe", "Zara Atelier", "Le Monde M", "032c",
];

const press = [
  { year: "2024", title: "Sony World Photography — Shortlist, Portrait" },
  { year: "2023", title: "British Journal of Photography — Ones to Watch" },
  { year: "2022", title: "Hyères Festival — Finalist" },
  { year: "2021", title: "Foam Talent — Selected" },
];

function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="mx-auto max-w-[1600px] px-6 md:px-12 pt-40 pb-32 md:pt-48">
        <div className="grid grid-cols-12 gap-6 md:gap-12">
          <Reveal className="col-span-12 md:col-span-5">
            <div className="img-hover overflow-hidden bg-muted">
              <img
                src={aboutPortrait}
                alt="Retrato do fotógrafo em uma gôndola, Venezia"
                className="block aspect-[4/5] w-full object-cover"
              />
            </div>
            <p className="mt-3 text-[11px] uppercase tracking-lux text-muted-foreground">
              Sul canale, Venezia
            </p>
          </Reveal>

          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <Reveal>
              <p className="text-[11px] uppercase tracking-lux text-muted-foreground">Sobre</p>
              <h1 className="mt-4 font-serif text-5xl md:text-6xl leading-[1.05]">
                Trabalho com a quietude entre dois cliques.
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-foreground/80">
                <p>
                  Nascida em Bolonha (1991) e formada pelo Istituto Europeo di Design,
                  trabalho na fronteira entre editorial de moda, retrato e arquitetura.
                  Minhas imagens partem de uma observação demorada — busco a textura
                  exata de uma luz que está quase desaparecendo.
                </p>
                <p>
                  Nos últimos dez anos colaborei com publicações e marcas que tratam o
                  objeto fotográfico como matéria primeira: papel, grão, tempo. Mantenho
                  estúdio em Milão e trabalho em projetos pessoais entre o Mediterrâneo
                  e o Norte da Europa.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
                <div>
                  <p className="text-[11px] uppercase tracking-lux text-muted-foreground">
                    Prêmios & Imprensa
                  </p>
                  <ul className="mt-5 space-y-3 text-sm">
                    {press.map((p) => (
                      <li key={p.title} className="flex gap-4 border-b border-border/60 pb-3">
                        <span className="font-serif italic text-muted-foreground w-12">{p.year}</span>
                        <span className="text-foreground/90">{p.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-lux text-muted-foreground">
                    Clientes selecionados
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-foreground/90">
                    {clients.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
