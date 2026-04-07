"use client";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

const Parking = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax MAIS SUAVE (mobile-friendly)
  const yRaw = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  const y = useSpring(yRaw, {
    stiffness: 60,
    damping: 25,
  });

  return (
    <section
      ref={ref}
      id="parking"
      className="
        relative 
        min-h-[100svh] 
        md:h-[95vh]
        overflow-hidden
      "
    >
      {/* BACKGROUND */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dk7zfhbrj/image/upload/v1775158333/garagembrivanna_tptenr.jpg')",
          }}
        />
      </motion.div>

      {/* OVERLAY */}
      <div className="absolute inset-0 z-10 bg-black/70 md:bg-black/60" />

      {/* CONTENT */}
      <div
        className="
          relative z-20
          flex items-center justify-center
          text-center
          px-5 sm:px-6
          py-16 md:py-0
          min-h-[100svh]
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            flex flex-col items-center
            max-w-xl md:max-w-2xl
          "
        >
          {/* TITLE */}
          <h1
            className="
              text-white font-light
              tracking-[0.12em]
            "
            style={{
              fontSize: "clamp(2rem, 6vw, 4rem)",
            }}
          >
            Estacionamento
          </h1>

          {/* SUBTITLE */}
          <p
            className="
              text-white/70 uppercase
              mt-3 md:mt-4
            "
            style={{
              fontSize: "clamp(0.65rem, 2.5vw, 0.75rem)",
              letterSpacing: "0.3em",
            }}
          >
            conforto, segurança e praticidade desde a chegada
          </p>

          {/* DIVIDER */}
          <div className="w-14 md:w-16 h-px bg-white/30 my-6 md:my-8" />

          {/* DESCRIPTION */}
          <p
            className="
              text-white/80
              leading-relaxed
              px-2 md:px-0
            "
            style={{
              fontSize: "clamp(0.9rem, 3.5vw, 1rem)",
            }}
          >
            Disponibilizamos{" "}
            <span className="text-white font-medium">
              2 estacionamentos privativos
            </span>
            , cuidadosamente planejados para oferecer comodidade e tranquilidade
            durante toda a sua estadia.
          </p>

          {/* FEATURES */}
          <div
            className="
              mt-6 md:mt-8
              grid gap-3 md:gap-4
              text-white/70
            "
            style={{
              fontSize: "clamp(0.85rem, 3vw, 0.95rem)",
            }}
          >
            <p>• segurança 24h</p>
            <p>• vagas para vans</p>
            <p>• espaço para caminhões de pequeno porte</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Parking;
