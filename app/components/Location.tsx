"use client";

import { ExternalLink, MapPin } from "lucide-react";
import { motion } from "motion/react";

const MAPS_URL =
  "https://www.google.com/maps/place/brivanna+hotel/data=!4m2!3m1!1s0x9486e63bf6ac9045:0xcd6611b986340b47";

const EMBED_URL = "https://www.google.com/maps?q=brivanna+hotel&output=embed";

const Location = () => {
  return (
    <section id="localizacao" className="bg-background overflow-hidden">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2
            className="text-white font-semibold"
            style={{ fontSize: "clamp(1.8rem, 5vw, 2.75rem)" }}
          >
            Localização no Centro
          </h2>
        </motion.div>
      </div>

      {/* MAP FULL WIDTH (SEM HACK PERIGOSO) */}
      <motion.div
        initial={{ opacity: 0, scale: 1.01 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <div className="relative w-full h-[55svh] md:h-[60vh] lg:h-[70vh]">
          <iframe
            src={EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full border-0"
          />

          {/* OVERLAY (SÓ DESKTOP) */}
          <div className="hidden md:flex pointer-events-none absolute inset-0 items-end p-10">
            <div className="pointer-events-auto backdrop-blur-md bg-black/60 border border-white/10 rounded-xl p-5 max-w-[330px] shadow-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <MapPin className="text-primary-foreground" size={20} />
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg">
                    Brivanna Hotel
                  </h3>
                  <p className="text-white/70 text-sm">Campo Grande - MS</p>
                </div>
              </div>

              <p className="text-white/80 text-sm mb-4">
                Localização estratégica no centro, com acesso rápido aos
                principais pontos da cidade.
              </p>

              <motion.a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="
                  w-full
                  bg-gradient-to-r from-[#f4d988] via-[#ca993d] to-[#f4d988]
                  text-black
                  px-4 py-3 rounded-md
                  flex items-center justify-center gap-2
                  font-medium
                "
              >
                <MapPin size={18} />
                Ver rota
                <ExternalLink size={16} />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Location;
