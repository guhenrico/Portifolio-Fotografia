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
import np1 from "@/assets/portfolio/NP.JPEG";
import np2 from "@/assets/portfolio/NP2.JPEG";
import np3 from "@/assets/portfolio/NP3.JPEG";
import np4 from "@/assets/portfolio/NP4.JPEG";
import dt1 from "@/assets/portfolio/DT.JPEG";
import dt2 from "@/assets/portfolio/DT2.JPEG";
import dt3 from "@/assets/portfolio/DT3.JPEG";
import dt4 from "@/assets/portfolio/DT4.JPEG";
import dt5 from "@/assets/portfolio/DT5.JPEG";
import dt6 from "@/assets/portfolio/DT6.JPEG";
import dt7 from "@/assets/portfolio/DT7.JPEG";
import det8 from "@/assets/portfolio/DET8.JPEG";
import det9 from "@/assets/portfolio/DET9.JPEG";
import det10 from "@/assets/portfolio/DET10.JPEG";

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
  { id: "np-1", title: "Nápoles", category: "Fotos", src: np1, orientation: "landscape", country: IT, alt: "Nápoles, paisagem" },
  { id: "np-2", title: "Nápoles", category: "Fotos", src: np2, orientation: "landscape", country: IT, alt: "Nápoles, paisagem" },
  { id: "np-3", title: "Nápoles", category: "Fotos", src: np3, orientation: "landscape", country: IT, alt: "Nápoles, paisagem" },
  { id: "np-4", title: "Nápoles", category: "Fotos", src: np4, orientation: "landscape", country: IT, alt: "Nápoles, paisagem" },
  { id: "dt-1", title: "Detalhes 1", category: "Detalhes", src: dt1, orientation: "portrait", alt: "Fotografia de detalhes" },
  { id: "dt-2", title: "Detalhes 2", category: "Detalhes", src: dt2, orientation: "portrait", alt: "Fotografia de detalhes" },
  { id: "dt-3", title: "Detalhes 3", category: "Detalhes", src: dt3, orientation: "portrait", alt: "Fotografia de detalhes" },
  { id: "dt-4", title: "Detalhes 4", category: "Detalhes", src: dt4, orientation: "portrait", alt: "Fotografia de detalhes" },
  { id: "dt-5", title: "Detalhes 5", category: "Detalhes", src: dt5, orientation: "portrait", alt: "Fotografia de detalhes" },
  { id: "dt-6", title: "Detalhes 6", category: "Detalhes", src: dt6, orientation: "portrait", alt: "Fotografia de detalhes" },
  { id: "dt-7", title: "Detalhes 7", category: "Detalhes", src: dt7, orientation: "portrait", alt: "Fotografia de detalhes" },
  { id: "det-8", title: "Detalhes 8", category: "Detalhes", src: det8, orientation: "portrait", alt: "Fotografia de detalhes" },
  { id: "det-9", title: "Detalhes 9", category: "Detalhes", src: det9, orientation: "portrait", alt: "Fotografia de detalhes" },
  { id: "det-10", title: "Detalhes 10", category: "Detalhes", src: det10, orientation: "portrait", alt: "Fotografia de detalhes" },
];
