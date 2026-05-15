import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Elena Marchetti — Selected Works" },
      { name: "description", content: "Portfólio editorial: retrato, street, paisagem e moda." },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="mx-auto max-w-[1600px] px-5 md:px-12 pt-28 pb-16 md:pt-56 md:pb-32">
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <Reveal className="col-span-12 md:col-span-2">
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] md:tracking-lux text-muted-foreground">
              HENRICO · Collection 01
            </p>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-9 md:col-start-3" delay={120}>
            <h1 className="font-serif text-[2.25rem] sm:text-5xl md:text-[clamp(2.75rem,7vw,7rem)] leading-[1] md:leading-[0.95] tracking-[-0.02em]">
              Imagens que respiram <em className="italic text-muted-foreground">silêncio</em> — composições
              entre olhar, luz e memória.
            </h1>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-4 md:col-start-9 mt-6 md:mt-12" delay={240}>
            <p className="text-[13px] md:text-sm text-muted-foreground leading-relaxed">
              Através de seu olhar, Henrico busca capturar a calma e o detalhe. Com base no interior
              de SP, ele cria imagens que valorizam o silêncio, a textura das coisas e a luz que
              envolve cada cena. Um trabalho feito para ser sentido, não apenas visto.
            </p>
          </Reveal>
        </div>
      </section>

      <Reveal>
        <Gallery />
      </Reveal>

      <Footer />
    </main>
  );
}
