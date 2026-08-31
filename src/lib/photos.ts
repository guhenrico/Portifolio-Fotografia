import allana from "@/assets/portfolio/allana.jpg";
import allana2 from "@/assets/portfolio/allana-2.jpg";
import allana4 from "@/assets/portfolio/allana-4.jpg";
import allana7 from "@/assets/portfolio/allana-7.JPEG";
import allana8 from "@/assets/portfolio/allana-8.JPEG";
import allana2a from "@/assets/portfolio/allana2.jpg";
import allana2g from "@/assets/portfolio/allana2 (7).jpg";
import stMoritz1 from "@/assets/portfolio/St.Moritz.jpg";
import stMoritz2 from "@/assets/portfolio/St.Moritz2.jpg";
import stMoritz3 from "@/assets/portfolio/St.Moritz3.jpg";
import stMoritz4 from "@/assets/portfolio/st.JPEG";

import lc1 from "@/assets/portfolio/LC.JPEG";
import lc2 from "@/assets/portfolio/LC2.JPEG";
import lc3 from "@/assets/portfolio/LC3.JPEG";
import lc4 from "@/assets/portfolio/LC4.JPEG";
import vz1 from "@/assets/portfolio/VZ.JPEG";
import vz2 from "@/assets/portfolio/VZ2.JPEG";
import vz3 from "@/assets/portfolio/VZ3.JPEG";
import vz4 from "@/assets/portfolio/VZ4.JPEG";
import vez1 from "@/assets/portfolio/Retrato-Veneza.JPEG";
import vez2 from "@/assets/portfolio/vez2.JPEG";
import vez3 from "@/assets/portfolio/vez3.JPEG";
import vez4 from "@/assets/portfolio/vez4.JPEG";
import roma1 from "@/assets/portfolio/ROMA.JPEG";
import roma2 from "@/assets/portfolio/ROMA2.JPEG";
import rom1 from "@/assets/portfolio/rom1.JPEG";
import rom2 from "@/assets/portfolio/rom2.JPEG";

import roma4 from "@/assets/portfolio/ROMA4.JPEG";
import fl3 from "@/assets/portfolio/FL3.JPEG";
import np1 from "@/assets/portfolio/NP.JPEG";
import np2 from "@/assets/portfolio/NP2.JPEG";
import np3 from "@/assets/portfolio/NP3.JPEG";
import np4 from "@/assets/portfolio/NP4.JPEG";
import beatriz1 from "@/assets/portfolio/Beatriz1.jpg";
import beatriz2 from "@/assets/portfolio/Beatriz2.jpg";
import beatriz3 from "@/assets/portfolio/Beatriz3.jpg";
import beatriz4 from "@/assets/portfolio/Beatriz4.jpg";
import beatriz5 from "@/assets/portfolio/Beatriz5.jpg";
import beatriz6 from "@/assets/portfolio/Beatriz6.jpg";
import beatriz7 from "@/assets/portfolio/Beatriz7.jpg";
import beatriz8 from "@/assets/portfolio/Beatriz8.jpg";
import lago1 from "@/assets/portfolio/Lago1.JPEG";
import lago2 from "@/assets/portfolio/Lago2.JPEG";
import lago3 from "@/assets/portfolio/Lago3.JPEG";
import lago4 from "@/assets/portfolio/Lago4.JPEG";
import ana1 from "@/assets/portfolio/Ana.JPEG";
import ana10 from "@/assets/portfolio/Ana1.JPEG";
import ana2 from "@/assets/portfolio/Ana2.JPEG";
import ana3 from "@/assets/portfolio/Ana3.JPEG";
import ana4 from "@/assets/portfolio/Ana4.JPEG";
import ana5 from "@/assets/portfolio/Ana5.JPEG";
import ana6 from "@/assets/portfolio/Ana6.JPEG";
import ana7 from "@/assets/portfolio/Ana7.JPEG";
import ana8 from "@/assets/portfolio/Ana8.JPEG";
import ana9 from "@/assets/portfolio/Ana9.JPEG";
import campo1 from "@/assets/portfolio/Campo 1.JPEG";
import campo2 from "@/assets/portfolio/Campo 2.JPEG";
import campo3 from "@/assets/portfolio/Campo 3.JPEG";
import campo4 from "@/assets/portfolio/Campo 4.JPEG";
import campo5 from "@/assets/portfolio/Campo 5.JPEG";
import campo6 from "@/assets/portfolio/Campo 6.JPEG";
import campo7 from "@/assets/portfolio/Campo 7.JPEG";
import campo8 from "@/assets/portfolio/Campo 8.JPEG";
import campo9 from "@/assets/portfolio/Campo 9.JPEG";
import campo10 from "@/assets/portfolio/Campo 10.JPEG";
import campo11 from "@/assets/portfolio/Campo 11.JPEG";
import campo12 from "@/assets/portfolio/Campo 12.JPEG";
import campo13 from "@/assets/portfolio/Campo 13.JPEG";
import campo14 from "@/assets/portfolio/Campo 14.JPEG";
import campo15 from "@/assets/portfolio/Campo 15.JPEG";
import campo16 from "@/assets/portfolio/Campo 16.JPEG";

export type Category =
  | "Ensaio Externo - Haras"
  | "Ensaio Externo - Itália & Suíça"
  | "Ensaio Externo - Bailarina"
  | "Ensaio Externo - Campo aberto";

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
const HARAS_CHAPTER: Category = "Ensaio Externo - Haras";
const ITALY_CHAPTER: Category = "Ensaio Externo - Itália & Suíça";
const BALLERINA_CHAPTER: Category = "Ensaio Externo - Bailarina";
const FIELD_CHAPTER: Category = "Ensaio Externo - Campo aberto";

const campoPhotos: Photo[] = [
  campo1,
  campo2,
  campo3,
  campo4,
  campo5,
  campo14,
  campo15,
  campo16,
  campo6,
  campo7,
  campo8,
  campo9,
  campo10,
  campo11,
  campo12,
  campo13,
].map((src, index) => ({
  id: `campo-${index + 1}`,
  title: "Campo aberto",
  category: FIELD_CHAPTER,
  src,
  orientation: "portrait",
  country: BR,
  alt: `Foto ${index + 1} do ensaio externo em campo aberto`,
}));

export const photos: Photo[] = [
  // --- Allana ---
  {
    id: "allana-4",
    title: "Allana",
    category: HARAS_CHAPTER,
    src: allana4,
    orientation: "portrait",
    country: BR,
    alt: "Allana voltada para a câmera em meio à vegetação",
  },
  {
    id: "allana",
    title: "Allana",
    category: HARAS_CHAPTER,
    src: allana,
    orientation: "portrait",
    country: BR,
    alt: "Retrato de Allana entre folhagens sob luz dourada",
  },
  {
    id: "allana-2",
    title: "Allana",
    category: HARAS_CHAPTER,
    src: allana2,
    orientation: "portrait",
    country: BR,
    alt: "Allana de perfil em um jardim iluminado pelo fim de tarde",
  },
  {
    id: "allana-8",
    title: "Allana",
    category: HARAS_CHAPTER,
    src: allana8,
    orientation: "portrait",
    country: BR,
    alt: "Allana sentada junto a uma janela em fotografia preto e branco",
  },

  // --- Capítulo I — Haras (extras) ---
  {
    id: "allana2-1",
    title: "Allana",
    category: HARAS_CHAPTER,
    src: allana2a,
    orientation: "portrait",
    country: BR,
    alt: "Allana em retrato preto e branco entre folhagens",
  },
  {
    id: "allana2-7",
    title: "Allana",
    category: HARAS_CHAPTER,
    src: allana2g,
    orientation: "portrait",
    country: BR,
    alt: "Allana olhando de lado em um jardim verde",
  },

  // --- Capítulo II — Itália ---
  {
    id: "vz-1",
    title: "Veneza",
    category: ITALY_CHAPTER,
    src: vz1,
    orientation: "landscape",
    country: IT,
    alt: "Pessoa observando um canal de Veneza a partir de uma varanda",
  },
  {
    id: "vz-2",
    title: "Veneza",
    category: ITALY_CHAPTER,
    src: vz2,
    orientation: "landscape",
    country: IT,
    alt: "Gôndola diante da Basílica de Santa Maria della Salute em Veneza",
  },
  {
    id: "vz-3",
    title: "Veneza",
    category: ITALY_CHAPTER,
    src: vz3,
    orientation: "landscape",
    country: IT,
    alt: "Canal estreito entre fachadas antigas de Veneza",
  },
  {
    id: "vz-4",
    title: "Veneza",
    category: ITALY_CHAPTER,
    src: vz4,
    orientation: "landscape",
    country: IT,
    alt: "Interior de uma embarcação veneziana iluminado por luzes quentes",
  },
  {
    id: "vez-1",
    title: "Veneza",
    category: ITALY_CHAPTER,
    src: vez1,
    orientation: "landscape",
    country: IT,
    alt: "Canal de Veneza com gôndolas e arquitetura histórica",
  },
  {
    id: "vez-2",
    title: "Veneza",
    category: ITALY_CHAPTER,
    src: vez2,
    orientation: "landscape",
    country: IT,
    alt: "Gôndolas em um canal de Veneza com edifícios coloridos",
  },
  {
    id: "vez-3",
    title: "Veneza",
    category: ITALY_CHAPTER,
    src: vez3,
    orientation: "landscape",
    country: IT,
    alt: "Ponte sobre um canal em Veneza com gôndolas",
  },
  {
    id: "vez-4",
    title: "Veneza",
    category: ITALY_CHAPTER,
    src: vez4,
    orientation: "landscape",
    country: IT,
    alt: "Pessoa em uma gôndola em um canal de Veneza",
  },

  // --- Capítulo II — Itália (Roma) ---
  {
    id: "roma-1",
    title: "Roma",
    category: ITALY_CHAPTER,
    src: roma1,
    orientation: "landscape",
    country: IT,
    alt: "Retrato feminino diante de uma fachada histórica em Roma",
  },
  {
    id: "roma-2",
    title: "Roma",
    category: ITALY_CHAPTER,
    src: roma2,
    orientation: "landscape",
    country: IT,
    alt: "Fontana di Trevi sob o céu azul de Roma",
  },
  {
    id: "roma-4",
    title: "Roma",
    category: ITALY_CHAPTER,
    src: roma4,
    orientation: "landscape",
    country: IT,
    alt: "Retrato noturno com vestido vermelho diante do Coliseu",
  },
  {
    id: "rom-1",
    title: "Roma",
    category: ITALY_CHAPTER,
    src: rom1,
    orientation: "landscape",
    country: IT,
    alt: "Vista de Roma",
  },
  {
    id: "rom-2",
    title: "Roma",
    category: ITALY_CHAPTER,
    src: rom2,
    orientation: "landscape",
    country: IT,
    alt: "Outra vista de Roma",
  },

  // --- Capítulo II — Itália (St. Moritz) ---
  {
    id: "st-moritz-1",
    title: "St. Moritz",
    category: ITALY_CHAPTER,
    src: stMoritz1,
    orientation: "landscape",
    country: CH,
    alt: "Montanhas nevadas de St. Moritz sob céu azul",
  },
  {
    id: "st-moritz-2",
    title: "St. Moritz",
    category: ITALY_CHAPTER,
    src: stMoritz2,
    orientation: "landscape",
    country: CH,
    alt: "Pessoa contemplando a paisagem nevada pela janela de um trem",
  },
  {
    id: "st-moritz-3",
    title: "St. Moritz",
    category: ITALY_CHAPTER,
    src: stMoritz3,
    orientation: "landscape",
    country: CH,
    alt: "Lago e montanhas de St. Moritz em fotografia preto e branco",
  },
  {
    id: "st-moritz-4",
    title: "St. Moritz",
    category: ITALY_CHAPTER,
    src: stMoritz4,
    orientation: "landscape",
    country: CH,
    alt: "Paisagem de St. Moritz em fotografia em preto e branco",
  },

  // --- Capítulo II — Itália (Lago di Como) ---
  {
    id: "lc-1",
    title: "Lago di Como",
    category: ITALY_CHAPTER,
    src: lc1,
    orientation: "landscape",
    country: IT,
    alt: "Pessoa diante do Lago di Como e das montanhas ao fundo",
  },
  {
    id: "lc-2",
    title: "Lago di Como",
    category: ITALY_CHAPTER,
    src: lc2,
    orientation: "landscape",
    country: IT,
    alt: "Barco navegando pelas águas claras do Lago di Como",
  },
  {
    id: "lc-3",
    title: "Lago di Como",
    category: ITALY_CHAPTER,
    src: lc3,
    orientation: "landscape",
    country: IT,
    alt: "Flores brancas iluminadas pelo sol à margem do Lago di Como",
  },
  {
    id: "lc-4",
    title: "Lago di Como",
    category: ITALY_CHAPTER,
    src: lc4,
    orientation: "landscape",
    country: IT,
    alt: "Nadador e embarcação nas águas do Lago di Como",
  },
  {
    id: "lago-2",
    title: "Lago di Como",
    category: ITALY_CHAPTER,
    src: lago2,
    orientation: "landscape",
    country: IT,
    alt: "Arquitetura à beira do Lago di Como",
  },
  {
    id: "lago-3",
    title: "Lago di Como",
    category: ITALY_CHAPTER,
    src: lago3,
    orientation: "landscape",
    country: IT,
    alt: "Ponte e arquitetura sobre as águas do Lago di Como",
  },
  {
    id: "lago-4",
    title: "Lago di Como",
    category: ITALY_CHAPTER,
    src: lago4,
    orientation: "landscape",
    country: IT,
    alt: "Ruela e arquitetura na região do Lago di Como",
  },

  // --- Capítulo II — Itália (Roma) ---
  {
    id: "roma-3",
    title: "Roma",
    category: ITALY_CHAPTER,
    src: fl3,
    orientation: "landscape",
    country: IT,
    alt: "Detalhe de uma mão com anéis sobre tecido estampado",
  },

  // --- Capítulo II — Itália (Nápoles) ---
  {
    id: "np-1",
    title: "Nápoles",
    category: ITALY_CHAPTER,
    src: np1,
    orientation: "landscape",
    country: IT,
    alt: "Pessoa caminhando diante de lojas nas ruas de Nápoles",
  },
  {
    id: "np-2",
    title: "Nápoles",
    category: ITALY_CHAPTER,
    src: np2,
    orientation: "landscape",
    country: IT,
    alt: "Rua estreita e movimentada no centro de Nápoles",
  },
  {
    id: "np-4",
    title: "Nápoles",
    category: ITALY_CHAPTER,
    src: np4,
    orientation: "landscape",
    country: IT,
    alt: "Vista do porto e dos edifícios de Nápoles sob céu nublado",
  },
  // --- Capítulo II — Itália (Vaticano) ---
  {
    id: "beatriz-1",
    title: "Beatriz",
    category: ITALY_CHAPTER,
    src: beatriz1,
    orientation: "portrait",
    country: BR,
    alt: "Beatriz sorrindo sob luz dourada em um ensaio externo",
  },
  {
    id: "beatriz-2",
    title: "Beatriz",
    category: ITALY_CHAPTER,
    src: beatriz2,
    orientation: "portrait",
    country: BR,
    alt: "Beatriz de perfil em um campo iluminado pelo entardecer",
  },
  {
    id: "beatriz-3",
    title: "Beatriz",
    category: ITALY_CHAPTER,
    src: beatriz3,
    orientation: "portrait",
    country: BR,
    alt: "Retrato de Beatriz em meio à luz suave do fim da tarde",
  },
  {
    id: "beatriz-5",
    title: "Beatriz",
    category: ITALY_CHAPTER,
    src: beatriz5,
    orientation: "portrait",
    country: BR,
    alt: "Vitral circular fotografado em perspectiva no interior de um edifício",
  },
  {
    id: "beatriz-6",
    title: "Beatriz",
    category: ITALY_CHAPTER,
    src: beatriz6,
    orientation: "portrait",
    country: BR,
    alt: "Beatriz em pé diante de uma parede iluminada por luz quente",
  },
  {
    id: "beatriz-7",
    title: "Beatriz",
    category: ITALY_CHAPTER,
    src: beatriz7,
    orientation: "portrait",
    country: BR,
    alt: "Retrato de Beatriz sentada em ambiente interno preto e branco",
  },
  {
    id: "beatriz-8",
    title: "Beatriz",
    category: ITALY_CHAPTER,
    src: beatriz8,
    orientation: "portrait",
    country: BR,
    alt: "Cúpula histórica de Florença enquadrada por árvores",
  },

  // --- Ensaio Externo - Bailarina ---
  {
    id: "ana-1",
    title: "Ana",
    category: BALLERINA_CHAPTER,
    src: ana1,
    orientation: "portrait",
    country: BR,
    alt: "Ana em ensaio externo de bailarina",
  },
  {
    id: "ana-2",
    title: "Ana",
    category: BALLERINA_CHAPTER,
    src: ana2,
    orientation: "portrait",
    country: BR,
    alt: "Ana em ensaio externo de bailarina",
  },
  {
    id: "ana-10",
    title: "Ana",
    category: BALLERINA_CHAPTER,
    src: ana10,
    orientation: "portrait",
    country: BR,
    alt: "Ana em ensaio externo de bailarina",
  },
  {
    id: "ana-3",
    title: "Ana",
    category: BALLERINA_CHAPTER,
    src: ana3,
    orientation: "portrait",
    country: BR,
    alt: "Ana em ensaio externo de bailarina",
  },
  {
    id: "ana-4",
    title: "Ana",
    category: BALLERINA_CHAPTER,
    src: ana4,
    orientation: "portrait",
    country: BR,
    alt: "Ana em ensaio externo de bailarina",
  },
  {
    id: "ana-5",
    title: "Ana",
    category: BALLERINA_CHAPTER,
    src: ana5,
    orientation: "portrait",
    country: BR,
    alt: "Ana em ensaio externo de bailarina",
  },
  {
    id: "ana-6",
    title: "Ana",
    category: BALLERINA_CHAPTER,
    src: ana6,
    orientation: "portrait",
    country: BR,
    alt: "Ana em ensaio externo de bailarina",
  },
  {
    id: "ana-7",
    title: "Ana",
    category: BALLERINA_CHAPTER,
    src: ana7,
    orientation: "portrait",
    country: BR,
    alt: "Ana em ensaio externo de bailarina",
  },
  {
    id: "ana-8",
    title: "Ana",
    category: BALLERINA_CHAPTER,
    src: ana8,
    orientation: "portrait",
    country: BR,
    alt: "Ana em ensaio externo de bailarina",
  },
  {
    id: "ana-9",
    title: "Ana",
    category: BALLERINA_CHAPTER,
    src: ana9,
    orientation: "portrait",
    country: BR,
    alt: "Ana em ensaio externo de bailarina",
  },
  ...campoPhotos,
];
