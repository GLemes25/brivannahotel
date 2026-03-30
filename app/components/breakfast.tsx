"use client";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

export default function Breakfast() {
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
      id="inicio"
      className="relative h-[120vh] overflow-hidden"
    >
      {/* IMAGEM */}
      <motion.div style={{ y }} className="absolute inset-[-10%] z-0 scale-125">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dk7zfhbrj/image/upload/v1774733405/brivannabreakfast_rbjomy.png')`,
          }}
        />
      </motion.div>

      {/* OVERLAY */}
      <div className="absolute inset-0 z-10 bg-black/60 pointer-events-none" />

      {/* CONTEÚDO CENTRAL */}
      <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center gap-6"
        >
          {/* título */}
          <h1
            className="text-white font-light"
            style={{
              fontSize: "clamp(3rem, 6vw, 4rem)",
              letterSpacing: "0.12em",
            }}
          >
            Café da manhã
          </h1>

          {/* subtítulo opcional */}
          <p className="text-white/70 text-sm tracking-[0.25em] uppercase">
            experiência matinal refinada
          </p>
          <div className="w-12 h-px bg-white/30 my-2" />
          {/* horário central */}
          <div className="mt-4">
            <p className="text-white/60 text-xs tracking-[0.3em] uppercase">
              diariamente
            </p>
            <p className="text-white text-lg font-light tracking-widest">
              06h — 09h
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
