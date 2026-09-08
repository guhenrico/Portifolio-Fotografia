const WHATSAPP_NUMBER = "5515991446560";

const WHATSAPP_MESSAGE =
  "Olá! Encontrei seu site e gostaria de saber mais sobre os ensaios fotográficos — opções, valores e disponibilidade. Podemos conversar?";

export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
