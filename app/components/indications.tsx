"use client";
import { Briefcase, Building2, ShoppingBag, Utensils } from "lucide-react";
import { motion } from "motion/react";

const nearbyPlaces = [
  { icon: Building2, name: "Centros Empresariais", distance: "5 min" },
  { icon: Utensils, name: "Restaurantes", distance: "2 min" },
  { icon: ShoppingBag, name: "Shopping Centers", distance: "10 min" },
  { icon: Briefcase, name: "Zona Comercial", distance: "3 min" },
];

export default function Indication() {
  return (
    <section id="indications" className="py-12  bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Nossa localização estratégica permite que você economize tempo e
                dinheiro com deslocamentos, aproveitando ao máximo sua estadia
                em Campo Grande.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
