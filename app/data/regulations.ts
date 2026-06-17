export type RegulationsType = {
  title: string;
  icon: string;
  items: string[];
  highlight?: string;
  extra?: string;
};

export const regulationsData: RegulationsType[] = [
  {
    title: "Proibido Fumar",
    icon: "https://res.cloudinary.com/dk7zfhbrj/image/upload/v1776284402/dontsmoke_lbkkxq.svg",
    items: [
      "É proibido fumar nas dependências do hotel :",
      "Quartos",
      "Corredores",
      "Áreas internas",
      "Inclui cigarro, vape e narguilé",
    ],
    highlight: "Multa: R$ 200,00",
    extra: "Lei Antifumo Nº 9.294, 15 de julho de 1996",
  },
  {
    title: "Pets",
    icon: "https://res.cloudinary.com/dk7zfhbrj/image/upload/v1776284402/catdog_bau6l1.svg",
    items: [
      "Pets sempre supervisionados",
      "Proibido deixar sozinho no quarto",
      "Responsabilidade por danos causados",
    ],
    highlight: "Taxa: R$ 50,00 por pet / diária",
  },
  {
    title: "Crianças e Menores",
    icon: "https://res.cloudinary.com/dk7zfhbrj/image/upload/v1776284402/girlzinha_j3ioka.svg",
    items: [
      "Crianças de qualquer idade são permitidas",
      "Crianças até 5 anos (inclusive) não pagam",
      "Crianças de 6 a 12 anos pagam 50% do valor da diária por criança",
      "Documento obrigatório",
      "Menores de 18 anos devem comprovar parentesco",
    ],
    highlight: "Proibido: Menores de 14 desacompanhados",
  },
];
