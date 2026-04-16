"use client";

import { MapPin, Navigation } from "lucide-react";
import { motion } from "motion/react";

const MAPS_URL =
  "https://www.google.com/maps/place/brivanna+hotel/data=!4m2!3m1!1s0x9486e63bf6ac9045:0xcd6611b986340b47";
const EMBED_URL = "https://www.google.com/maps?q=brivanna+hotel&output=embed";

const Location = () => {
  return (
    <section
      id="localizacao"
      className="bg-background py-12 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-[#ca993d] uppercase tracking-[0.2em] text-xs md:text-sm font-semibold mb-4">
            Como Chegar
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-foreground tracking-wide">
            Localização Privilegiada
          </h3>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[1920px] mx-auto relative"
      >
        <div className="relative w-full h-[65svh] md:h-[70vh] lg:h-[75vh]">
          <iframe
            src={EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full border-0 grayscale-[20%] contrast-125 opacity-90"
          />

          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background via-transparent to-transparent opacity-40" />

          <div className="hidden md:flex absolute inset-y-0 left-0 pointer-events-none items-end justify-start p-10 lg:pl-20 z-10 pb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pointer-events-auto bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 w-full max-w-[380px] shadow-[0_8px_30px_rgba(0,0,0,0.5)] group hover:border-[#ca993d]/30 transition-colors duration-500"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#ca993d]/10 border border-[#ca993d]/20 flex items-center justify-center shrink-0">
                  <MapPin className="text-[#ca993d]" size={22} />
                </div>

                <div>
                  <h3 className="text-xl font-serif text-white tracking-wide">
                    Brivanna Hotel
                  </h3>
                  <p className="text-white/60 text-sm font-light mt-0.5">
                    Campo Grande - MS
                  </p>
                </div>
              </div>

              <div className="w-10 h-[1px] bg-gradient-to-r from-[#ca993d] to-transparent mb-4" />

              <p className="text-white/80 text-sm font-light leading-relaxed mb-8">
                Localização estratégica no centro, com acesso rápido aos
                principais pontos comerciais, turísticos e gastronômicos da
                cidade.
              </p>

              <motion.a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full h-12 bg-gradient-to-br from-[#f4d988] via-[#ca993d] to-[#f4d988] text-black rounded-xl flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide shadow-md transition-all duration-300 hover:shadow-lg hover:brightness-110"
              >
                <Navigation size={18} className="fill-black/20" />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  Traçar Rota
                </span>
              </motion.a>
            </motion.div>
          </div>

          <div className="md:hidden absolute inset-x-0 bottom-6 pointer-events-none flex justify-center z-20 px-4">
            <motion.a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileTap={{ scale: 0.95 }}
              className="pointer-events-auto flex items-center gap-2 bg-gradient-to-br from-[#f4d988] via-[#ca993d] to-[#f4d988] text-black px-6 py-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.6)] border border-[#f4d988]/50"
            >
              <Navigation size={18} className="fill-black/20" />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Traçar Rota
              </span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Location;
