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
      <section className="mx-auto max-w-[1600px] px-6 md:px-12 pt-40 pb-24 md:pt-56 md:pb-32">
        <div className="grid grid-cols-12 gap-6">
          <Reveal className="col-span-12 md:col-span-2">
            <p className="text-[11px] uppercase tracking-lux text-muted-foreground">
              MMXXIV<br />Volume 01
            </p>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-9 md:col-start-3" delay={120}>
            <h1 className="font-serif text-[clamp(2.75rem,7vw,7rem)] leading-[0.95] tracking-[-0.02em]">
              Imagens que respiram <em className="italic text-muted-foreground">silêncio</em> — composições
              entre luz, pele e arquitetura.
            </h1>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-4 md:col-start-9 mt-12" delay={240}>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Elena Marchetti é uma fotógrafa baseada em Milão, trabalhando entre editorial de
              moda, retrato e paisagem para revistas como Vogue Italia, Wallpaper* e Apartamento.
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
