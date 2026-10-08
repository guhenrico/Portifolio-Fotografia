import { photos, type Category } from "./photos";
import haras from "@/assets/album-covers/haras.webp";
import harasPreview from "@/assets/album-covers/haras-preview.webp";
import viagem from "@/assets/album-covers/viagem.webp";
import viagemPreview from "@/assets/album-covers/viagem-preview.webp";
import bailarina from "@/assets/album-covers/bailarina.webp";
import bailarinaPreview from "@/assets/album-covers/bailarina-preview.webp";
import campo from "@/assets/album-covers/campo.webp";
import campoPreview from "@/assets/album-covers/campo-preview.webp";
import preWedding from "@/assets/album-covers/pre-wedding.webp";
import preWeddingPreview from "@/assets/album-covers/pre-wedding-preview.webp";
import familia from "@/assets/album-covers/familia.webp";
import familiaPreview from "@/assets/album-covers/familia-preview.webp";

interface AlbumDetails {
  slug: string;
  category: Category;
  location: string;
  title: [string, string];
  note: string;
  cover: string;
  coverAlt?: string;
  preview: string;
  position: string;
  previewPosition?: string;
}

const details: AlbumDetails[] = [
  {
    slug: "pre-wedding",
    category: "Pré Wedding - Campo aberto",
    location: "Campo aberto",
    title: ["Pré", "Wedding"],
    note: "O amor, antes do sim.",
    cover: preWedding,
    coverAlt: "Foto 14 do ensaio pré wedding em campo aberto",
    preview: preWeddingPreview,
    position: "50% 66%",
    previewPosition: "50% 50%",
  },
  {
    slug: "familia",
    category: "Ensaio Familia - Holambra",
    location: "Holambra",
    title: ["Ensaio de", "Família"],
    note: "O nosso lugar é junto.",
    cover: familia,
    preview: familiaPreview,
    position: "50% 68%",
  },
  {
    slug: "bailarina",
    category: "Ensaio Bailarina - Fazenda Ipanema",
    location: "Fazenda Ipanema",
    title: ["Ensaio", "Bailarina"],
    note: "O movimento também é poesia.",
    cover: bailarina,
    preview: bailarinaPreview,
    position: "50% 50%",
  },
  {
    slug: "campo",
    category: "Ensaio Feminino - campo aberto",
    location: "Campo aberto",
    title: ["Ensaio", "Feminino"],
    note: "Um respiro. Um instante só seu.",
    cover: campo,
    coverAlt: "Foto 3 do ensaio externo em campo aberto",
    preview: campoPreview,
    position: "50% 100%",
    previewPosition: "50% 80%",
  },
  {
    slug: "haras",
    category: "Ensaio Feminino - Haras",
    location: "Haras",
    title: ["Ensaio", "Feminino"],
    note: "Entre a luz e a delicadeza.",
    cover: haras,
    preview: harasPreview,
    position: "50% 38%",
  },
  {
    slug: "viagem",
    category: "Ensaio de Viagem - Itália & Suíça",
    location: "Itália & Suíça",
    title: ["Ensaio de", "Viagem"],
    note: "Lugares que ficam na gente.",
    cover: viagem,
    preview: viagemPreview,
    position: "50% 55%",
  },
];

export const albums = details
  .map((album, index) => ({
    ...album,
    id: `album-${album.slug}`,
    number: String(index + 1).padStart(2, "0"),
    kind: album.title.join(" "),
    photos: photos.filter((photo) => photo.category === album.category),
  }))
  .filter((album) => album.photos.length > 0);

export type Album = (typeof albums)[number];
