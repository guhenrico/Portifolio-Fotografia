import lagoDiComo1 from "@/assets/portfolio/lago-di-como-1.jpeg";
import lagoDiComo2 from "@/assets/portfolio/lago-di-como-2.jpeg";

export type Category = "Editorial" | "Street" | "Retratos" | "Paisagens";

export interface Photo {
  id: string;
  title: string;
  category: Category;
  src: string;
  orientation: "portrait" | "landscape" | "square";
}

const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const photos: Photo[] = [
  { id: "lago-1", title: "Lago di Como", category: "Paisagens", src: lagoDiComo1, orientation: "portrait" },
  { id: "lago-2", title: "Lago di Como", category: "Paisagens", src: lagoDiComo2, orientation: "portrait" },
  { id: "p1",  title: "Silent Linen",        category: "Editorial", src: u("1490481651871-ab68de25d43d"), orientation: "portrait" },
  { id: "p2",  title: "Crosswalk No. 7",     category: "Street",    src: u("1503676260728-1c00da094a0b"), orientation: "landscape" },
  { id: "p3",  title: "Margaux",             category: "Retratos",  src: u("1531746020798-e6953c6e8e04"), orientation: "portrait" },
  { id: "p4",  title: "Drift",               category: "Paisagens", src: u("1465146344425-f00d5f5c8f07"), orientation: "landscape" },
  { id: "p5",  title: "Atelier",             category: "Editorial", src: u("1485518882345-15568b007407"), orientation: "portrait" },
  { id: "p6",  title: "Concrete Dialogue",   category: "Street",    src: u("1519681393784-d120267933ba"), orientation: "landscape" },
  { id: "p7",  title: "Iris",                category: "Retratos",  src: u("1544005313-94ddf0286df2"), orientation: "portrait" },
  { id: "p8",  title: "After the Rain",      category: "Paisagens", src: u("1418065460487-3e41a6c84dc5"), orientation: "landscape" },
  { id: "p9",  title: "Folded Light",        category: "Editorial", src: u("1483985988355-763728e1935b"), orientation: "portrait" },
  { id: "p10", title: "Subway Hours",        category: "Street",    src: u("1502920917128-1aa500764cbd"), orientation: "landscape" },
  { id: "p11", title: "Júlia",               category: "Retratos",  src: u("1438761681033-6461ffad8d80"), orientation: "portrait" },
  { id: "p12", title: "Dune Geometry",       category: "Paisagens", src: u("1500530855697-b586d89ba3ee"), orientation: "landscape" },
];
