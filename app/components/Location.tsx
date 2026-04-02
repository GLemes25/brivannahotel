"use client";

import { ExternalLink, MapPin } from "lucide-react";
import { motion } from "motion/react";

const MAPS_URL =
  "https://www.google.com/maps/place/brivanna+hotel/data=!4m2!3m1!1s0x9486e63bf6ac9045:0xcd6611b986340b47";

const EMBED_URL = "https://www.google.com/maps?q=brivanna+hotel&output=embed";

export default function Location() {
  return (
    <section
      id="localizacao"
      className="bg-white/85
    reboot"
    >
      {/* HEADER (continua com container normal) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-1"
        >
          <h2
            style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 600 }}
          >
            <span className="text-green-950">
              Localização no Centro da Cidade
            </span>
          </h2>
        </motion.div>
      </div>

      {/* 🔥 MAPA FULL WIDTH REAL */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
      >
        <div className="relative w-full h-[60vh] md:h-[60vh] lg:h-[70vh]">
          {/* MAPA INTERATIVO */}
          <iframe
            src={EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full border-0"
          />

          {/* OVERLAY QUE NÃO BLOQUEIA O MAPA */}
          <div className="pointer-events-none absolute inset-0 flex items-end p-6 md:p-10">
            {/* CARD INTERATIVO */}
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
                className="w-full bg-primary text-primary-foreground px-4 py-3 rounded-lg flex items-center justify-center gap-2 font-medium"
              >
                <MapPin size={18} />
                Ver rota no Google Maps
                <ExternalLink size={16} />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
