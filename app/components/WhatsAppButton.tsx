"use client";
import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export default function WhatsAppButton() {
  const whatsappNumber = "5567999999999"; // Replace with actual number
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de fazer uma reserva no Hotel Central.",
  );

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="hidden md:flex fixed bottom-8 left-8 z-50 w-16 h-16 bg-[#25D366] rounded-full shadow-2xl items-center justify-center group hover:shadow-[#25D366]/50 transition-shadow duration-300"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="text-white" size={32} />

      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 bg-[#25D366] rounded-full -z-10"
        initial={{ scale: 1, opacity: 0.5 }}
        animate={{ scale: 1.5, opacity: 0 }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Tooltip */}
      <div
        className="absolute left-full ml-4 bg-[#25D366] text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-lg"
        style={{ fontSize: "0.875rem", fontWeight: 500 }}
      >
        Fale conosco no WhatsApp
        <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-[#25D366]" />
      </div>
    </motion.a>
  );
}
