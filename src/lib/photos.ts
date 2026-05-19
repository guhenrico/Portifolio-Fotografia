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
}

const BR = { code: "br", label: "Brasil" };
const IT = { code: "it", label: "Itália" };
const NL = { code: "nl", label: "Holanda" };
const CH = { code: "ch", label: "Suíça" };

export const photos: Photo[] = [
  { id: "allana", title: "Allana, golden hour", category: "Retratos", src: allana, orientation: "portrait", country: BR },
  { id: "allana-2", title: "Allana, golden hour", category: "Retratos", src: allana2, orientation: "portrait", country: BR },
  { id: "anna-venezia", title: "Anna em Venezia", category: "Retratos", src: annaVenezia, orientation: "portrait", country: IT },
  { id: "beatriz-venezia", title: "Beatriz, ponte de Veneza", category: "Retratos", src: beatrizVenezia, orientation: "portrait", country: IT },
  { id: "st-moritz", title: "St. Moritz", category: "Retratos", src: stMoritz, orientation: "portrait", country: CH },
  { id: "varenna", title: "Varenna, Lago di Como", category: "Retratos", src: varenna, orientation: "portrait", country: IT },
  { id: "lago-1", title: "Lago di Como", category: "Paisagens", src: lagoDiComo1, orientation: "portrait", country: IT },
  { id: "lago-2", title: "Lago di Como", category: "Paisagens", src: lagoDiComo2, orientation: "portrait", country: IT },
  { id: "venezia-1", title: "Venezia", category: "Paisagens", src: venezia1, orientation: "portrait", country: IT },
  { id: "venezia-2", title: "Venezia", category: "Paisagens", src: venezia2, orientation: "portrait", country: IT },
  { id: "amsterdam", title: "Amsterdam", category: "Paisagens", src: amsterdam, orientation: "portrait", country: NL },
  { id: "cachorro", title: "Cachorro", category: "Animais", src: cachorro, orientation: "portrait" },
  { id: "gato-1", title: "Gato", category: "Animais", src: gato1, orientation: "portrait" },
  { id: "gato-2", title: "Gato", category: "Animais", src: gato2, orientation: "portrait" },
  { id: "pato", title: "Pato", category: "Animais", src: pato, orientation: "portrait" },
  { id: "cavalo", title: "Cavalo", category: "Animais", src: cavalo, orientation: "portrait" },
  { id: "passaro", title: "Pássaro", category: "Animais", src: passaro, orientation: "portrait" },
];
