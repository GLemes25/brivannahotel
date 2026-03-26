"use client";
import { MapPin } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="inicio" className="relative h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dk7zfhbrj/image/upload/v1774471098/Brivanna_Estabelecimento_ry0h9r.png')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/10" />
      </div>

      {/* Título central premium */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="leading-tight"
          style={{
            fontSize: "clamp(3rem, 6vw, 4rem)",
            fontWeight: 800,
            letterSpacing: "0.05em",
          }}
        >
          <span className="text-white">Bem-vindo ao </span>
          <span className="bg-gradient-to-r from-[#f4d988] via-[#ca993d] to-[#f4d988] bg-clip-text text-transparent font-semibold">
            Hotel Brivanna
          </span>
        </motion.h1>
      </div>

      {/* Badge no FINAL da tela */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/20 rounded-full px-5 py-2">
          <MapPin className="text-[#ca993d]" size={16} />
          <span className="text-white text-sm font-light">
            Centro de Campo Grande, MS
          </span>
        </div>
      </motion.div>

      {/* Gradiente inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
}
