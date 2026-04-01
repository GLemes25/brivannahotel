"use client";
import {
  Briefcase,
  Building2,
  ExternalLink,
  MapPin,
  ShoppingBag,
  Utensils,
} from "lucide-react";
import { motion } from "motion/react";

const nearbyPlaces = [
  { icon: Building2, name: "Centros Empresariais", distance: "5 min" },
  { icon: Utensils, name: "Restaurantes", distance: "2 min" },
  { icon: ShoppingBag, name: "Shopping Centers", distance: "10 min" },
  { icon: Briefcase, name: "Zona Comercial", distance: "3 min" },
];

const MAPS_URL =
  "https://www.google.com/maps/place/brivanna+hotel/data=!4m2!3m1!1s0x9486e63bf6ac9045:0xcd6611b986340b47";

const EMBED_URL = "https://www.google.com/maps?q=brivanna+hotel&output=embed";
export default function Location() {
  return (
    <section id="localizacao" className="py-12  bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2
            style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 600 }}
          >
            <span className="text-foreground">Localização no </span>
            <span className="text-primary">Centro da Cidade</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* MAPA FULL WIDTH */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full mb-12"
          >
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden shadow-2xl bg-card">
              {/* MAPA */}
              <iframe
                src={EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full border-0"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6 md:p-10">
                <div className="backdrop-blur-md bg-black/40 border border-white/10 rounded-xl p-5 max-w-md">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-md">
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
                    className="w-full bg-primary text-primary-foreground px-4 py-3 rounded-lg flex items-center justify-center gap-2 font-medium shadow-lg hover:shadow-primary/40 transition-all"
                  >
                    <MapPin size={18} />
                    Ver rota no Google Maps
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CONTEÚDO ABAIXO */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-1 gap-12"></div>
            {/* Nearby Places */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="mb-8">
                <h3
                  className="text-foreground mb-3"
                  style={{ fontSize: "1.75rem", fontWeight: 600 }}
                >
                  Pontos de Interesse Próximos
                </h3>
                <p
                  className="text-muted-foreground"
                  style={{ fontSize: "1rem", fontWeight: 300 }}
                >
                  Tudo que você precisa está a poucos minutos de distância
                </p>
              </div>

              <div className="space-y-4">
                {nearbyPlaces.map((place, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 8, transition: { duration: 0.2 } }}
                    className="group"
                  >
                    <div className="flex items-center justify-between bg-card/40 backdrop-blur-sm border border-primary/20 rounded-xl p-5 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center group-hover:from-primary group-hover:to-accent transition-all duration-300">
                          <place.icon
                            className="text-primary group-hover:text-primary-foreground transition-colors"
                            size={22}
                          />
                        </div>
                        <span
                          className="text-foreground"
                          style={{ fontSize: "1.0625rem", fontWeight: 500 }}
                        >
                          {place.name}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span
                          className="text-primary"
                          style={{ fontSize: "1rem", fontWeight: 600 }}
                        >
                          {place.distance}
                        </span>
                        <span
                          className="text-muted-foreground"
                          style={{ fontSize: "0.875rem", fontWeight: 300 }}
                        >
                          a pé
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-xl p-6"
              >
                <p
                  className="text-foreground leading-relaxed"
                  style={{ fontSize: "0.9375rem", fontWeight: 400 }}
                >
                  <strong className="text-primary" style={{ fontWeight: 500 }}>
                    Dica:
                  </strong>{" "}
                  Nossa localização estratégica permite que você economize tempo
                  e dinheiro com deslocamentos, aproveitando ao máximo sua
                  estadia em Campo Grande.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
