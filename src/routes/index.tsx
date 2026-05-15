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
      <section className="mx-auto max-w-[1600px] px-5 md:px-12 pt-32 pb-20 md:pt-56 md:pb-32">
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
            <h1 className="font-serif text-[2.5rem] sm:text-5xl md:text-[clamp(2.75rem,7vw,7rem)] leading-[1.02] md:leading-[0.95] tracking-[-0.02em]">
              Imagens que respiram <em className="italic text-muted-foreground">silêncio</em> — composições
              entre olhar, luz e memória.
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
      </section>

      <Reveal>
        <Gallery />
      </Reveal>

      <Footer />
    </main>
  );
}
