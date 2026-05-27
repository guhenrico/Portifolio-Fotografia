import allana from "@/assets/portfolio/allana.jpg";
import allana2 from "@/assets/portfolio/allana-2.jpg";
import allana3 from "@/assets/portfolio/allana-3.jpg";
import allana4 from "@/assets/portfolio/allana-4.jpg";
import stMoritz1 from "@/assets/portfolio/St.Moritz.jpg";
import stMoritz2 from "@/assets/portfolio/St.Moritz2.jpg";
import stMoritz3 from "@/assets/portfolio/St.Moritz3.jpg";
import stMoritz4 from "@/assets/portfolio/St.Moritz4.jpg";
import lc1 from "@/assets/portfolio/LC.JPEG";
import lc2 from "@/assets/portfolio/LC2.JPEG";
import lc3 from "@/assets/portfolio/LC3.JPEG";
import lc4 from "@/assets/portfolio/LC4.JPEG";
import vz1 from "@/assets/portfolio/VZ.JPEG";
import vz2 from "@/assets/portfolio/VZ2.JPEG";
import vz3 from "@/assets/portfolio/VZ3.JPEG";
import vz4 from "@/assets/portfolio/VZ4.JPEG";
import roma1 from "@/assets/portfolio/ROMA.JPEG";
import roma2 from "@/assets/portfolio/ROMA2.JPEG";
import roma3 from "@/assets/portfolio/ROMA3.JPEG";
import roma4 from "@/assets/portfolio/ROMA4.JPEG";
import fl1 from "@/assets/portfolio/FL.JPEG";
import fl2 from "@/assets/portfolio/FL2.JPEG";
import fl3 from "@/assets/portfolio/FL3.JPEG";
import fl4 from "@/assets/portfolio/FL4.JPEG";

export type Category = "Fotos" | "Detalhes";

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
const CH = { code: "ch", label: "Suíça" };
const IT = { code: "it", label: "Itália" };

export const photos: Photo[] = [
  { id: "allana", title: "Allana, golden hour", category: "Fotos", src: allana, orientation: "portrait", country: BR, alt: "Allana em golden hour, retrato com luz quente" },
  { id: "allana-2", title: "Allana, golden hour", category: "Fotos", src: allana2, orientation: "portrait", country: BR, alt: "Allana em golden hour, retrato com luz quente" },
  { id: "allana-3", title: "Allana, golden hour", category: "Fotos", src: allana3, orientation: "portrait", country: BR, alt: "Allana em retrato com cabelos ruivos e sardas, luz natural" },
  { id: "allana-4", title: "Allana", category: "Fotos", src: allana4, orientation: "portrait", country: BR, alt: "Allana em retrato com luz natural" },
  { id: "st-moritz-1", title: "St. Moritz", category: "Fotos", src: stMoritz1, orientation: "landscape", country: CH, alt: "St. Moritz" },
  { id: "st-moritz-2", title: "St. Moritz", category: "Fotos", src: stMoritz2, orientation: "landscape", country: CH, alt: "St. Moritz" },
  { id: "st-moritz-3", title: "St. Moritz", category: "Fotos", src: stMoritz3, orientation: "landscape", country: CH, alt: "St. Moritz" },
  { id: "st-moritz-4", title: "St. Moritz", category: "Fotos", src: stMoritz4, orientation: "landscape", country: CH, alt: "St. Moritz" },
  { id: "lc-1", title: "Lago di Como", category: "Fotos", src: lc1, orientation: "landscape", country: IT, alt: "Lago di Como, paisagem" },
  { id: "lc-2", title: "Lago di Como", category: "Fotos", src: lc2, orientation: "landscape", country: IT, alt: "Lago di Como, paisagem" },
  { id: "lc-3", title: "Lago di Como", category: "Fotos", src: lc3, orientation: "landscape", country: IT, alt: "Lago di Como, paisagem" },
  { id: "lc-4", title: "Lago di Como", category: "Fotos", src: lc4, orientation: "landscape", country: IT, alt: "Lago di Como, paisagem" },
  { id: "vz-1", title: "Veneza", category: "Fotos", src: vz1, orientation: "landscape", country: IT, alt: "Veneza, paisagem" },
  { id: "vz-2", title: "Veneza", category: "Fotos", src: vz2, orientation: "landscape", country: IT, alt: "Veneza, paisagem" },
  { id: "vz-3", title: "Veneza", category: "Fotos", src: vz3, orientation: "landscape", country: IT, alt: "Veneza, paisagem" },
  { id: "vz-4", title: "Veneza", category: "Fotos", src: vz4, orientation: "landscape", country: IT, alt: "Veneza, paisagem" },
  { id: "roma-1", title: "Roma", category: "Fotos", src: roma1, orientation: "landscape", country: IT, alt: "Roma, paisagem" },
  { id: "roma-2", title: "Roma", category: "Fotos", src: roma2, orientation: "landscape", country: IT, alt: "Roma, paisagem" },
  { id: "roma-3", title: "Roma", category: "Fotos", src: roma3, orientation: "landscape", country: IT, alt: "Roma, paisagem" },
  { id: "roma-4", title: "Roma", category: "Fotos", src: roma4, orientation: "landscape", country: IT, alt: "Roma, paisagem" },
  { id: "fl-1", title: "Florença", category: "Fotos", src: fl1, orientation: "landscape", country: IT, alt: "Florença, paisagem" },
  { id: "fl-2", title: "Florença", category: "Fotos", src: fl2, orientation: "landscape", country: IT, alt: "Florença, paisagem" },
  { id: "fl-3", title: "Florença", category: "Fotos", src: fl3, orientation: "landscape", country: IT, alt: "Florença, paisagem" },
  { id: "fl-4", title: "Florença", category: "Fotos", src: fl4, orientation: "landscape", country: IT, alt: "Florença, paisagem" },
];