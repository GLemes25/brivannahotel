"use client";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

export default function Parking() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yRaw = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const y = useSpring(yRaw, {
    stiffness: 50,
    damping: 20,
  });

  return (
    <section
      ref={ref}
      id="parking"
      className="relative h-[90vh] overflow-hidden"
    >
      {/* IMAGEM */}
      <motion.div style={{ y }} className="absolute inset-[-10%] z-0 scale-90">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dk7zfhbrj/image/upload/v1775158333/garagembrivanna_tptenr.jpg')`,
          }}
        />
      </motion.div>

      {/* OVERLAY */}
      <div className="absolute inset-0 z-10 bg-black/60 pointer-events-none" />

      {/* CONTEÚDO */}
      <div className="relative z-20 h-full flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col items-center max-w-2xl"
        >
          {/* TÍTULO */}
          <h1
            className="text-white font-light"
            style={{
              fontSize: "clamp(3rem, 6vw, 4rem)",
              letterSpacing: "0.14em",
            }}
          >
            Estacionamento
          </h1>

          {/* SUBTÍTULO */}
          <p className="text-white/70 text-xs tracking-[0.35em] uppercase mt-4">
            conforto, segurança e praticidade desde a chegada
          </p>

          {/* DIVISOR */}
          <div className="w-16 h-px bg-white/30 my-8" />

          {/* DESCRIÇÃO PRINCIPAL */}
          <p className="text-white/80 text-sm leading-relaxed max-w-md">
            Disponibilizamos{" "}
            <span className="text-white">2 estacionamentos privativos</span>,
            cuidadosamente planejados para oferecer comodidade e tranquilidade
            durante toda a sua estadia.
          </p>

          {/* LISTA DE BENEFÍCIOS */}
          <div className="mt-8 grid gap-4 text-white/70 text-sm tracking-wide">
            <p>• segurança 24h</p>
            <p>• vagas para vans</p>
            <p>• espaço para caminhões de pequeno porte</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
