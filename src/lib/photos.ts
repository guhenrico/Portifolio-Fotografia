import allana from "@/assets/portfolio/allana.jpg";
import allana2 from "@/assets/portfolio/allana-2.jpg";
import allana3 from "@/assets/portfolio/allana-3.jpg";
import allana4 from "@/assets/portfolio/allana-4.jpg";
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

export const photos: Photo[] = [
  { id: "allana", title: "Allana, golden hour", category: "Fotos", src: allana, orientation: "portrait", country: BR, alt: "Allana em golden hour, retrato com luz quente" },
  { id: "allana-2", title: "Allana, golden hour", category: "Fotos", src: allana2, orientation: "portrait", country: BR, alt: "Allana em golden hour, retrato com luz quente" },
  { id: "allana-3", title: "Allana, golden hour", category: "Fotos", src: allana3, orientation: "portrait", country: BR, alt: "Allana em retrato com cabelos ruivos e sardas, luz natural" },
  { id: "allana-4", title: "Allana", category: "Fotos", src: allana4, orientation: "portrait", country: BR, alt: "Allana em retrato com luz natural" },
];
