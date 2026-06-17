import { brivannaData } from "@/app/data/brivanna";

export const whatsappMessage = (message?: string) => {
  const whatsappNumber = brivannaData.whatsappNumber;

  const defaultMessage =
    "Olá! Gostaria de fazer uma reserva no Hotel Brivanna.";

  const finalMessage =
    message && message.trim() !== "" ? message : defaultMessage;

  const encodedMessage = encodeURIComponent(finalMessage);

  return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
};
