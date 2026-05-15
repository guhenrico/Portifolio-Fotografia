import lagoDiComo1 from "@/assets/portfolio/lago-di-como-1.jpeg";
import lagoDiComo2 from "@/assets/portfolio/lago-di-como-2.jpeg";
import venezia1 from "@/assets/portfolio/venezia-1.jpeg";
import venezia2 from "@/assets/portfolio/venezia-2.jpeg";
import cachorro from "@/assets/portfolio/cachorro.jpg";
import gato1 from "@/assets/portfolio/gato-1.jpg";
import gato2 from "@/assets/portfolio/gato-2.jpg";
import pato from "@/assets/portfolio/pato.jpg";

export type Category = "Retratos" | "Paisagens" | "Animais";

export interface Photo {
  id: string;
  title: string;
  category: Category;
  src: string;
  orientation: "portrait" | "landscape" | "square";
}

export const photos: Photo[] = [
  { id: "lago-1", title: "Lago di Como", category: "Paisagens", src: lagoDiComo1, orientation: "portrait" },
  { id: "lago-2", title: "Lago di Como", category: "Paisagens", src: lagoDiComo2, orientation: "portrait" },
  { id: "venezia-1", title: "Venezia", category: "Paisagens", src: venezia1, orientation: "portrait" },
  { id: "venezia-2", title: "Venezia", category: "Paisagens", src: venezia2, orientation: "portrait" },
  { id: "cachorro", title: "Cachorro", category: "Animais", src: cachorro, orientation: "portrait" },
  { id: "gato-1", title: "Gato", category: "Animais", src: gato1, orientation: "portrait" },
  { id: "gato-2", title: "Gato", category: "Animais", src: gato2, orientation: "portrait" },
  { id: "pato", title: "Pato", category: "Animais", src: pato, orientation: "portrait" },
];
