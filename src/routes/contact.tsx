import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contato — Henrico" },
      { name: "description", content: "Comissões, colaborações e ensaios — vamos conversar." },
      { property: "og:title", content: "Contato — Henrico" },
      { property: "og:description", content: "Vamos conversar sobre o seu próximo projeto." },
    ],
  }),
});

function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <section className="relative mx-auto w-full max-w-[1600px] px-5 md:px-12 pt-28 pb-10 md:pt-44 md:pb-16 flex-1">
        {/* decorative dotted block */}
        <span className="ring-dotted absolute right-5 top-28 hidden h-32 w-32 rounded-full md:block md:right-12 md:top-44 drift" aria-hidden />

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <Reveal className="col-span-12 md:col-span-2">
            <div className="flex items-center gap-3 md:flex-col md:items-start">
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] md:tracking-lux text-muted-foreground">
                Contato · № 002
              </p>
              <span className="hidden md:block mt-3 h-px w-12 bg-border" />
            </div>
          </Reveal>

          <div className="col-span-12 md:col-span-9 md:col-start-3">
            <Reveal>
              <h1 className="font-serif text-[2.25rem] sm:text-5xl md:text-[clamp(2.5rem,6vw,6rem)] leading-[1.02] md:leading-[0.98] tracking-[-0.02em]">
                Vamos conversar sobre o que ainda{" "}
                <em className="italic text-muted-foreground">não foi feito</em>.
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 max-w-[52ch] text-[14px] md:text-base text-muted-foreground leading-relaxed">
                Ensaios autorais, retratos e projetos comerciais.
                Conte-me sua ideia — a melhor parte começa antes da câmera.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10 flex flex-col gap-4 md:mt-14">
                <a
                  href="mailto:gustavo.henrico01@gmail.com"
                  className="cta-fill group inline-flex w-full items-center justify-between gap-4 border border-foreground px-6 py-4 text-xs uppercase tracking-lux-sm text-foreground transition-colors md:w-fit md:justify-start md:gap-12 md:px-10 md:py-6 md:text-sm"
                >
                  <span className="word-swap">
                    <span className="swap-out">Vamos conversar</span>
                    <span className="swap-in">Enviar e-mail</span>
                  </span>
                  <span className="transition-transform duration-500 group-hover:translate-x-2" aria-hidden>→</span>
                </a>
                <a
                  href="mailto:gustavo.henrico01@gmail.com"
                  className="link-underline text-sm text-muted-foreground w-fit"
                >
                  gustavo.henrico01@gmail.com
                </a>
              </div>
            </Reveal>

            {/* Quick link cards */}
            <Reveal delay={380}>
              <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[520px]">
                {[
                  { label: "Instagram", value: "@guhenricoo", href: "https://www.instagram.com/guhenricoo/", meta: "diário" },
                  { label: "Resposta", value: "em até 12h", href: "mailto:gustavo.henrico01@gmail.com", meta: "seg — sex" },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="tilt-card group block border border-border/70 p-5 bg-background"
                  >
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-lux-sm text-muted-foreground">
                      <span>{c.label}</span>
                      <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                    </div>
                    <p className="mt-6 font-serif text-xl italic">{c.value}</p>
                    <p className="mt-1 text-[11px] text-muted-foreground">{c.meta}</p>
                  </a>
                ))}
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={400}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const data = new FormData(form);
                  const subject = encodeURIComponent(`Contato de ${data.get("name") ?? ""}`);
                  const body = encodeURIComponent(
                    `${data.get("message") ?? ""}\n\n— ${data.get("name") ?? ""} (${data.get("email") ?? ""})`
                  );
                  window.location.href = `mailto:gustavo.henrico01@gmail.com?subject=${subject}&body=${body}`;
                }}
                className="mt-14 max-w-[640px] border-t border-border/60 pt-10"
              >
                <p className="text-[10px] uppercase tracking-lux text-muted-foreground">
                  Ou envie uma mensagem
                </p>
                <div className="mt-8 grid grid-cols-1 gap-7 md:grid-cols-2">
                  <label className="block">
                    <span className="text-[10px] uppercase tracking-lux-sm text-muted-foreground">Nome</span>
                    <input
                      name="name"
                      type="text"
                      required
                      className="mt-2 w-full border-0 border-b border-border bg-transparent pb-2 font-serif text-lg text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none transition-colors"
                      placeholder="Seu nome"
                    />
                  </label>
                  <label className="block">
                    <span className="text-[10px] uppercase tracking-lux-sm text-muted-foreground">E-mail</span>
                    <input
                      name="email"
                      type="email"
                      required
                      className="mt-2 w-full border-0 border-b border-border bg-transparent pb-2 font-serif text-lg text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none transition-colors"
                      placeholder="voce@email.com"
                    />
                  </label>
                </div>
                <label className="mt-7 block">
                  <span className="text-[10px] uppercase tracking-lux-sm text-muted-foreground">Mensagem</span>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="mt-2 w-full resize-none border-0 border-b border-border bg-transparent pb-2 font-serif text-lg text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none transition-colors"
                    placeholder="Conte sobre sua ideia…"
                  />
                </label>
                <button
                  type="submit"
                  className="cta-fill group mt-10 inline-flex items-center justify-between gap-8 border border-foreground px-8 py-4 text-xs uppercase tracking-lux-sm text-foreground transition-colors"
                >
                  <span>Enviar mensagem</span>
                  <span className="transition-transform duration-500 group-hover:translate-x-2" aria-hidden>→</span>
                </button>
              </form>
            </Reveal>

            {/* Meta details */}
            <Reveal delay={420}>
              <dl className="mt-14 grid grid-cols-2 gap-y-6 gap-x-8 border-t border-border/60 pt-8 max-w-[640px] md:grid-cols-3">
                <div>
                  <dt className="text-[10px] uppercase tracking-lux-sm text-muted-foreground">Resposta</dt>
                  <dd className="mt-2 font-serif text-lg">em até 12h</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-lux-sm text-muted-foreground">Base</dt>
                  <dd className="mt-2 font-serif text-lg">Interior de SP</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Email marquee — kinetic editorial accent */}
      <div className="border-y border-border/60 py-6 md:py-8">
        <Marquee className="font-serif italic text-foreground/80 text-3xl md:text-5xl" slow>
          <span className="pr-12">gustavo.henrico01@gmail.com</span>
          <span className="pr-12 text-muted-foreground">— vamos conversar —</span>
          <span className="pr-12">gustavo.henrico01@gmail.com</span>
          <span className="pr-12 text-muted-foreground">— vamos conversar —</span>
        </Marquee>
      </div>

      <Footer />
    </main>
  );
}
