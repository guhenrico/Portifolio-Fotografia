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
import vez1 from "@/assets/portfolio/vez1.JPEG";
import vez2 from "@/assets/portfolio/vez2.JPEG";
import vez3 from "@/assets/portfolio/vez3.JPEG";
import vez4 from "@/assets/portfolio/vez4.JPEG";
import roma1 from "@/assets/portfolio/ROMA.JPEG";
import roma2 from "@/assets/portfolio/ROMA2.JPEG";
import rom1 from "@/assets/portfolio/rom1.JPEG";
import rom2 from "@/assets/portfolio/rom2.JPEG";

import roma4 from "@/assets/portfolio/ROMA4.JPEG";
import fl1 from "@/assets/portfolio/FL.JPEG";
import fl2 from "@/assets/portfolio/FL2.JPEG";
import fl3 from "@/assets/portfolio/FL3.JPEG";
import fl4 from "@/assets/portfolio/FL4.JPEG";
import np1 from "@/assets/portfolio/NP.JPEG";
import np2 from "@/assets/portfolio/NP2.JPEG";
import np3 from "@/assets/portfolio/NP3.JPEG";
import np4 from "@/assets/portfolio/NP4.JPEG";
import np5 from "@/assets/portfolio/NP5.JPEG";
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

export type Category =
  | "Capítulo I — Haras"
  | "Capítulo II — Parque"
  | "Capítulo IV — Veneza"
  | "Capítulo V — Roma"
  | "Capítulo VI — St. Moritz"
  | "Capítulo VII — Lago di Como"
  | "Capítulo VIII — Florença"
  | "Capítulo IX — Nápoles"
  | "Capítulo III — Vaticano";

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
  // --- Allana ---
  {
    id: "allana",
    title: "Allana",
    category: "Capítulo I — Haras",
    src: allana,
    orientation: "portrait",
    country: BR,
    alt: "Retrato de Allana entre folhagens sob luz dourada",
  },
  {
    id: "allana-2",
    title: "Allana",
    category: "Capítulo I — Haras",
    src: allana2,
    orientation: "portrait",
    country: BR,
    alt: "Allana de perfil em um jardim iluminado pelo fim de tarde",
  },
  {
    id: "allana-4",
    title: "Allana",
    category: "Capítulo I — Haras",
    src: allana4,
    orientation: "portrait",
    country: BR,
    alt: "Allana voltada para a câmera em meio à vegetação",
  },
  {
    id: "allana-8",
    title: "Allana",
    category: "Capítulo I — Haras",
    src: allana8,
    orientation: "portrait",
    country: BR,
    alt: "Allana sentada junto a uma janela em fotografia preto e branco",
  },

  // --- Allana 2 (extras) ---
  {
    id: "allana2-1",
    title: "Allana",
    category: "Capítulo II — Parque",
    src: allana2a,
    orientation: "portrait",
    country: BR,
    alt: "Allana em retrato preto e branco entre folhagens",
  },
  {
    id: "allana2-7",
    title: "Allana",
    category: "Capítulo II — Parque",
    src: allana2g,
    orientation: "portrait",
    country: BR,
    alt: "Allana olhando de lado em um jardim verde",
  },

  // --- Veneza (VZ) ---
  {
    id: "vz-1",
    title: "Veneza",
    category: "Capítulo IV — Veneza",
    src: vz1,
    orientation: "landscape",
    country: IT,
    alt: "Pessoa observando um canal de Veneza a partir de uma varanda",
  },
  {
    id: "vz-2",
    title: "Veneza",
    category: "Capítulo IV — Veneza",
    src: vz2,
    orientation: "landscape",
    country: IT,
    alt: "Gôndola diante da Basílica de Santa Maria della Salute em Veneza",
  },
  {
    id: "vz-3",
    title: "Veneza",
    category: "Capítulo IV — Veneza",
    src: vz3,
    orientation: "landscape",
    country: IT,
    alt: "Canal estreito entre fachadas antigas de Veneza",
  },
  {
    id: "vz-4",
    title: "Veneza",
    category: "Capítulo IV — Veneza",
    src: vz4,
    orientation: "landscape",
    country: IT,
    alt: "Interior de uma embarcação veneziana iluminado por luzes quentes",
  },
  {
    id: "vez-1",
    title: "Veneza",
    category: "Capítulo IV — Veneza",
    src: vez1,
    orientation: "landscape",
    country: IT,
    alt: "Canal de Veneza com gôndolas e arquitetura histórica",
  },
  {
    id: "vez-2",
    title: "Veneza",
    category: "Capítulo IV — Veneza",
    src: vez2,
    orientation: "landscape",
    country: IT,
    alt: "Gôndolas em um canal de Veneza com edifícios coloridos",
  },
  {
    id: "vez-3",
    title: "Veneza",
    category: "Capítulo IV — Veneza",
    src: vez3,
    orientation: "landscape",
    country: IT,
    alt: "Ponte sobre um canal em Veneza com gôndolas",
  },
  {
    id: "vez-4",
    title: "Veneza",
    category: "Capítulo IV — Veneza",
    src: vez4,
    orientation: "landscape",
    country: IT,
    alt: "Pessoa em uma gôndola em um canal de Veneza",
  },

  // --- Capítulo V — Roma ---
  {
    id: "roma-1",
    title: "Roma",
    category: "Capítulo V — Roma",
    src: roma1,
    orientation: "landscape",
    country: IT,
    alt: "Retrato feminino diante de uma fachada histórica em Roma",
  },
  {
    id: "roma-2",
    title: "Roma",
    category: "Capítulo V — Roma",
    src: roma2,
    orientation: "landscape",
    country: IT,
    alt: "Fontana di Trevi sob o céu azul de Roma",
  },
  {
    id: "roma-4",
    title: "Roma",
    category: "Capítulo V — Roma",
    src: roma4,
    orientation: "landscape",
    country: IT,
    alt: "Retrato noturno com vestido vermelho diante do Coliseu",
  },
  {
    id: "rom-1",
    title: "Roma",
    category: "Capítulo V — Roma",
    src: rom1,
    orientation: "landscape",
    country: IT,
    alt: "Vista de Roma",
  },
  {
    id: "rom-2",
    title: "Roma",
    category: "Capítulo V — Roma",
    src: rom2,
    orientation: "landscape",
    country: IT,
    alt: "Outra vista de Roma",
  },

  // --- Capítulo VI — St. Moritz ---
  {
    id: "st-moritz-1",
    title: "St. Moritz",
    category: "Capítulo VI — St. Moritz",
    src: stMoritz1,
    orientation: "landscape",
    country: CH,
    alt: "Montanhas nevadas de St. Moritz sob céu azul",
  },
  {
    id: "st-moritz-2",
    title: "St. Moritz",
    category: "Capítulo VI — St. Moritz",
    src: stMoritz2,
    orientation: "landscape",
    country: CH,
    alt: "Pessoa contemplando a paisagem nevada pela janela de um trem",
  },
  {
    id: "st-moritz-3",
    title: "St. Moritz",
    category: "Capítulo VI — St. Moritz",
    src: stMoritz3,
    orientation: "landscape",
    country: CH,
    alt: "Lago e montanhas de St. Moritz em fotografia preto e branco",
  },
  {
    id: "st-moritz-4",
    title: "St. Moritz",
    category: "Capítulo VI — St. Moritz",
    src: stMoritz4,
    orientation: "landscape",
    country: CH,
    alt: "Paisagem de St. Moritz em fotografia em preto e branco",
  },

  // --- Capítulo VII — Lago di Como ---
  {
    id: "lc-1",
    title: "Lago di Como",
    category: "Capítulo VII — Lago di Como",
    src: lc1,
    orientation: "landscape",
    country: IT,
    alt: "Pessoa diante do Lago di Como e das montanhas ao fundo",
  },
  {
    id: "lc-2",
    title: "Lago di Como",
    category: "Capítulo VII — Lago di Como",
    src: lc2,
    orientation: "landscape",
    country: IT,
    alt: "Barco navegando pelas águas claras do Lago di Como",
  },
  {
    id: "lc-3",
    title: "Lago di Como",
    category: "Capítulo VII — Lago di Como",
    src: lc3,
    orientation: "landscape",
    country: IT,
    alt: "Flores brancas iluminadas pelo sol à margem do Lago di Como",
  },
  {
    id: "lc-4",
    title: "Lago di Como",
    category: "Capítulo VII — Lago di Como",
    src: lc4,
    orientation: "landscape",
    country: IT,
    alt: "Nadador e embarcação nas águas do Lago di Como",
  },
  {
    id: "lago-2",
    title: "Lago di Como",
    category: "Capítulo VII — Lago di Como",
    src: lago2,
    orientation: "landscape",
    country: IT,
    alt: "Arquitetura à beira do Lago di Como",
  },
  {
    id: "lago-3",
    title: "Lago di Como",
    category: "Capítulo VII — Lago di Como",
    src: lago3,
    orientation: "landscape",
    country: IT,
    alt: "Ponte e arquitetura sobre as águas do Lago di Como",
  },
  {
    id: "lago-4",
    title: "Lago di Como",
    category: "Capítulo VII — Lago di Como",
    src: lago4,
    orientation: "landscape",
    country: IT,
    alt: "Ruela e arquitetura na região do Lago di Como",
  },

  // --- Capítulo VIII — Florença ---
  {
    id: "fl-1",
    title: "Florença",
    category: "Capítulo VIII — Florença",
    src: fl1,
    orientation: "landscape",
    country: IT,
    alt: "Retrato feminino em uma praça histórica de Florença",
  },
  {
    id: "fl-2",
    title: "Florença",
    category: "Capítulo VIII — Florença",
    src: fl2,
    orientation: "landscape",
    country: IT,
    alt: "Bandeiras e cúpula da Catedral de Florença entre edifícios",
  },
  {
    id: "fl-3",
    title: "Florença",
    category: "Capítulo VIII — Florença",
    src: fl3,
    orientation: "landscape",
    country: IT,
    alt: "Detalhe de uma mão com anéis sobre tecido estampado",
  },
  {
    id: "fl-4",
    title: "Florença",
    category: "Capítulo VIII — Florença",
    src: fl4,
    orientation: "landscape",
    country: IT,
    alt: "Escultura renascentista em uma galeria de Florença",
  },

  // --- Capítulo IX — Nápoles ---
  {
    id: "np-1",
    title: "Nápoles",
    category: "Capítulo IX — Nápoles",
    src: np1,
    orientation: "landscape",
    country: IT,
    alt: "Pessoa caminhando diante de lojas nas ruas de Nápoles",
  },
  {
    id: "np-2",
    title: "Nápoles",
    category: "Capítulo IX — Nápoles",
    src: np2,
    orientation: "landscape",
    country: IT,
    alt: "Rua estreita e movimentada no centro de Nápoles",
  },
  {
    id: "np-4",
    title: "Nápoles",
    category: "Capítulo IX — Nápoles",
    src: np4,
    orientation: "landscape",
    country: IT,
    alt: "Vista do porto e dos edifícios de Nápoles sob céu nublado",
  },
  {
    id: "np-5",
    title: "Nápoles",
    category: "Capítulo IX — Nápoles",
    src: np5,
    orientation: "landscape",
    country: IT,
    alt: "Detalhe urbano e paisagem de Nápoles",
  },

  // --- Capítulo III — Vaticano ---
  {
    id: "beatriz-1",
    title: "Beatriz",
    category: "Capítulo III — Vaticano",
    src: beatriz1,
    orientation: "portrait",
    country: BR,
    alt: "Beatriz sorrindo sob luz dourada em um ensaio externo",
  },
  {
    id: "beatriz-2",
    title: "Beatriz",
    category: "Capítulo III — Vaticano",
    src: beatriz2,
    orientation: "portrait",
    country: BR,
    alt: "Beatriz de perfil em um campo iluminado pelo entardecer",
  },
  {
    id: "beatriz-3",
    title: "Beatriz",
    category: "Capítulo III — Vaticano",
    src: beatriz3,
    orientation: "portrait",
    country: BR,
    alt: "Retrato de Beatriz em meio à luz suave do fim da tarde",
  },
  {
    id: "beatriz-5",
    title: "Beatriz",
    category: "Capítulo III — Vaticano",
    src: beatriz5,
    orientation: "portrait",
    country: BR,
    alt: "Vitral circular fotografado em perspectiva no interior de um edifício",
  },
  {
    id: "beatriz-6",
    title: "Beatriz",
    category: "Capítulo III — Vaticano",
    src: beatriz6,
    orientation: "portrait",
    country: BR,
    alt: "Beatriz em pé diante de uma parede iluminada por luz quente",
  },
  {
    id: "beatriz-7",
    title: "Beatriz",
    category: "Capítulo III — Vaticano",
    src: beatriz7,
    orientation: "portrait",
    country: BR,
    alt: "Retrato de Beatriz sentada em ambiente interno preto e branco",
  },
  {
    id: "beatriz-8",
    title: "Beatriz",
    category: "Capítulo III — Vaticano",
    src: beatriz8,
    orientation: "portrait",
    country: BR,
    alt: "Cúpula histórica de Florença enquadrada por árvores",
  },
];