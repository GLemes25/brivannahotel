"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { whatsappMessage } from "../helpers";

const WhatsAppButton = () => {
  return (
    <motion.a
      href={whatsappMessage()}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="flex fixed bottom-6 right-5 md:bottom-8 md:right-8 z-50 w-12 h-12 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.4)] items-center justify-center group hover:shadow-[0_8px_25px_rgba(37,211,102,0.6)] transition-shadow duration-300"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <div className="relative w-6 h-6 md:w-9 md:h-9">
        <Image
          src="/whatsapp_icon.svg"
          alt="WhatsApp"
          fill
          className="object-contain"
        />
      </div>

      <motion.div
        className="absolute inset-0 bg-[#25D366] rounded-full -z-10"
        initial={{ scale: 1, opacity: 0.5 }}
        animate={{ scale: 1.5, opacity: 0 }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <div className="hidden md:block absolute right-full mr-4 bg-[#25D366] text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-md text-sm font-medium tracking-wide">
        Fale conosco no WhatsApp
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-[#25D366]" />
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
