export type Category = "Editorial" | "Street" | "Retratos" | "Paisagens";

export interface Photo {
  id: string;
  title: string;
  year: string;
  location: string;
  camera: string;
  category: Category;
  src: string;
  orientation: "portrait" | "landscape" | "square";
}

const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const photos: Photo[] = [
  { id: "p1",  title: "Silent Linen",        year: "2024", location: "Milano, IT",   camera: "Hasselblad X2D · 80mm f/2.5",   category: "Editorial", src: u("1490481651871-ab68de25d43d"), orientation: "portrait" },
  { id: "p2",  title: "Crosswalk No. 7",     year: "2023", location: "Tokyo, JP",    camera: "Leica Q2 · 28mm f/1.7",          category: "Street",    src: u("1503676260728-1c00da094a0b"), orientation: "landscape" },
  { id: "p3",  title: "Margaux",             year: "2024", location: "Paris, FR",    camera: "Mamiya 7 · 80mm f/4 · Portra 400", category: "Retratos",  src: u("1531746020798-e6953c6e8e04"), orientation: "portrait" },
  { id: "p4",  title: "Drift",               year: "2022", location: "Lofoten, NO",  camera: "Sony A7R IV · 24mm f/1.4",       category: "Paisagens", src: u("1465146344425-f00d5f5c8f07"), orientation: "landscape" },
  { id: "p5",  title: "Atelier",             year: "2024", location: "Antwerp, BE",  camera: "Hasselblad 500CM · 80mm",        category: "Editorial", src: u("1485518882345-15568b007407"), orientation: "portrait" },
  { id: "p6",  title: "Concrete Dialogue",   year: "2023", location: "São Paulo, BR",camera: "Fuji X-Pro3 · 35mm f/2",         category: "Street",    src: u("1519681393784-d120267933ba"), orientation: "landscape" },
  { id: "p7",  title: "Iris",                year: "2024", location: "Lisboa, PT",   camera: "Leica M11 · 50mm f/1.4",         category: "Retratos",  src: u("1544005313-94ddf0286df2"), orientation: "portrait" },
  { id: "p8",  title: "After the Rain",      year: "2023", location: "Reykjavík, IS",camera: "Phase One IQ4 · 55mm f/2.8",     category: "Paisagens", src: u("1418065460487-3e41a6c84dc5"), orientation: "landscape" },
  { id: "p9",  title: "Folded Light",        year: "2024", location: "Studio NY",    camera: "Hasselblad H6D · 100mm f/2.2",   category: "Editorial", src: u("1483985988355-763728e1935b"), orientation: "portrait" },
  { id: "p10", title: "Subway Hours",        year: "2022", location: "New York, US", camera: "Ricoh GR IIIx · 40mm",           category: "Street",    src: u("1502920917128-1aa500764cbd"), orientation: "landscape" },
  { id: "p11", title: "Júlia",               year: "2024", location: "Barcelona, ES",camera: "Pentax 67 · 105mm · Tri-X",      category: "Retratos",  src: u("1438761681033-6461ffad8d80"), orientation: "portrait" },
  { id: "p12", title: "Dune Geometry",       year: "2023", location: "Atacama, CL",  camera: "Sony A1 · 70-200mm f/2.8",       category: "Paisagens", src: u("1500530855697-b586d89ba3ee"), orientation: "landscape" },
];
