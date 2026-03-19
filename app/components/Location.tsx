"use client";
import {
  Briefcase,
  Building2,
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

export default function Location() {
  return (
    <section id="localizacao" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-4">
            <MapPin className="text-primary mr-2" size={18} />
            <span
              className="text-primary"
              style={{ fontSize: "0.875rem", fontWeight: 500 }}
            >
              Localização Privilegiada
            </span>
          </div>

          <h2
            className="mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 600 }}
          >
            <span className="text-foreground">Bem no </span>
            <span className="text-primary">Centro da Cidade</span>
          </h2>
          <p
            className="text-muted-foreground max-w-2xl mx-auto"
            style={{ fontSize: "1.0625rem", fontWeight: 300 }}
          >
            Acesso rápido a tudo que você precisa durante sua estadia em Campo
            Grande
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 bg-secondary/50 backdrop-blur-sm border border-primary/20">
              {/* Map Placeholder - could be replaced with actual map integration */}
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary via-card to-secondary p-8 flex flex-col items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/30">
                  <MapPin className="text-primary-foreground" size={48} />
                </div>
                <h3
                  className="text-foreground text-center mb-3"
                  style={{ fontSize: "1.5rem", fontWeight: 600 }}
                >
                  Centro de Campo Grande
                </h3>
                <p
                  className="text-muted-foreground text-center max-w-sm"
                  style={{ fontSize: "0.9375rem", fontWeight: 300 }}
                >
                  Rua Principal, 123 - Centro
                  <br />
                  Campo Grande, MS - CEP 79000-000
                </p>

                <motion.a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 bg-primary text-primary-foreground px-6 py-3 rounded-lg inline-flex items-center space-x-2 shadow-md hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                  style={{ fontSize: "0.9375rem", fontWeight: 500 }}
                >
                  <MapPin size={18} />
                  <span>Abrir no Google Maps</span>
                </motion.a>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-3xl -z-10" />
          </motion.div>

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
