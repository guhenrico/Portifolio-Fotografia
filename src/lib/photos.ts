import lagoDiComo1 from "@/assets/portfolio/lago-di-como-1.jpeg";
import lagoDiComo2 from "@/assets/portfolio/lago-di-como-2.jpeg";
import venezia1 from "@/assets/portfolio/venezia-1.jpeg";
import venezia2 from "@/assets/portfolio/venezia-2.jpeg";
import amsterdam from "@/assets/portfolio/amsterdam.jpeg";
import cachorro from "@/assets/portfolio/cachorro.jpg";
import gato1 from "@/assets/portfolio/gato-1.jpg";
import gato2 from "@/assets/portfolio/gato-2.jpg";
import pato from "@/assets/portfolio/pato.jpg";
import cavalo from "@/assets/portfolio/cavalo.jpg";
import passaro from "@/assets/portfolio/passaro.jpg";
import allana from "@/assets/portfolio/allana.jpg";
import allana2 from "@/assets/portfolio/allana-2.jpg";
import annaVenezia from "@/assets/portfolio/anna-venezia.jpg";
import beatrizVenezia from "@/assets/portfolio/beatriz-venezia.jpg";
import stMoritz from "@/assets/portfolio/st-moritz.jpeg";
import varenna from "@/assets/portfolio/varenna.jpeg";

export type Category = "Retratos" | "Paisagens" | "Animais";

export interface Photo {
  id: string;
  title: string;
  category: Category;
  src: string;
  orientation: "portrait" | "landscape" | "square";
  country?: { code: string; label: string };
  alt: string;
}

const BR = { code: "br", label: "Brasil" };
const IT = { code: "it", label: "Itália" };
const NL = { code: "nl", label: "Holanda" };
const CH = { code: "ch", label: "Suíça" };

export const photos: Photo[] = [
  { id: "allana", title: "Allana, golden hour", category: "Retratos", src: allana, orientation: "portrait", country: BR, alt: "Allana em golden hour, retrato com luz quente" },
  { id: "allana-2", title: "Allana, golden hour", category: "Retratos", src: allana2, orientation: "portrait", country: BR, alt: "Allana em golden hour, retrato com luz quente" },
  { id: "anna-venezia", title: "Anna em Venezia", category: "Retratos", src: annaVenezia, orientation: "portrait", country: IT, alt: "Anna em Venezia, ponte ao fundo" },
  { id: "beatriz-venezia", title: "Beatriz, ponte de Veneza", category: "Retratos", src: beatrizVenezia, orientation: "portrait", country: IT, alt: "Beatriz na ponte de Veneza, Itália" },
  { id: "st-moritz", title: "Beatriz, St. Moritz", category: "Retratos", src: stMoritz, orientation: "portrait", country: CH, alt: "Beatriz em St. Moritz, neve ao fundo, Suíça" },
  { id: "varenna", title: "Varenna, Lago di Como", category: "Retratos", src: varenna, orientation: "portrait", country: IT, alt: "Varenna à beira do Lago di Como, Itália" },
  { id: "lago-1", title: "Lago di Como", category: "Paisagens", src: lagoDiComo1, orientation: "portrait", country: IT, alt: "Vista do Lago di Como ao entardecer, Itália" },
  { id: "lago-2", title: "Lago di Como", category: "Paisagens", src: lagoDiComo2, orientation: "portrait", country: IT, alt: "Vista do Lago di Como ao entardecer, Itália" },
  { id: "venezia-1", title: "Venezia", category: "Paisagens", src: venezia1, orientation: "portrait", country: IT, alt: "Canal de Venezia com barcos, Itália" },
  { id: "venezia-2", title: "Venezia", category: "Paisagens", src: venezia2, orientation: "portrait", country: IT, alt: "Canal de Venezia com barcos, Itália" },
  { id: "amsterdam", title: "Amsterdam", category: "Paisagens", src: amsterdam, orientation: "portrait", country: NL, alt: "Vista aérea de Amsterdam com canais, Holanda" },
  { id: "cachorro", title: "Labrador, luz de tarde", category: "Animais", src: cachorro, orientation: "portrait", alt: "Labrador em luz de tarde" },
  { id: "gato-1", title: "Gato, janela de manhã", category: "Animais", src: gato1, orientation: "portrait", alt: "Gato observando pela janela de manhã" },
  { id: "gato-2", title: "Gato, sombra e reflexo", category: "Animais", src: gato2, orientation: "portrait", alt: "Gato em sombra e reflexo" },
  { id: "pato", title: "Pato, beira d'água", category: "Animais", src: pato, orientation: "portrait", alt: "Pato à beira d'água" },
  { id: "cavalo", title: "Cavalo, campo aberto", category: "Animais", src: cavalo, orientation: "portrait", alt: "Cavalo em campo aberto" },
  { id: "passaro", title: "Pássaro, galho seco", category: "Animais", src: passaro, orientation: "portrait", alt: "Pássaro pousado em galho seco" },
];
