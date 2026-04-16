"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

const Parking = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax suave ajustado (0% a 15% para criar movimento real)
  const yRaw = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const y = useSpring(yRaw, {
    stiffness: 60,
    damping: 25,
  });

  const features = [
    "Segurança 24h",
    "Vagas para vans",
    "Espaço para caminhões de pequeno porte",
  ];

  return (
    <section
      ref={ref}
      id="parking"
      className="relative min-h-[100svh] md:h-[95vh] overflow-hidden flex items-center justify-center"
    >
      {/* BACKGROUND COM PARALLAX */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 scale-110">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dk7zfhbrj/image/upload/v1775158333/garagembrivanna_tptenr.jpg')",
          }}
        />
      </motion.div>

      {/* OVERLAY GRADIENTE (Mais escuro nas bordas para profundidade) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/60 to-[#111111]/90" />

      {/* CONTENT */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 w-full max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center w-full"
        >
          {/* SUBTITLE */}
          <h2 className="text-[#ca993d] uppercase tracking-[0.25em] text-xs md:text-sm font-semibold mb-4">
            Conforto desde a chegada
          </h2>

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif tracking-wide mb-6">
            Estacionamento
          </h1>

          {/* DIVIDER ELEGANT */}
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#ca993d]/50 to-transparent mb-8" />

          {/* DESCRIPTION */}
          <p className="text-white/80 leading-relaxed text-base md:text-lg font-light max-w-2xl">
            Disponibilizamos{" "}
            <strong className="text-white font-medium">
              2 estacionamentos privativos
            </strong>
            , cuidadosamente planejados para oferecer comodidade e tranquilidade
            durante toda a sua estadia no Brivanna.
          </p>

          {/* FEATURES LIST */}
          <div className="mt-10 flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ca993d] shadow-[0_0_8px_rgba(202,153,61,0.5)]" />
                <span className="text-white/90 text-sm md:text-base font-medium tracking-wide">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Parking;
