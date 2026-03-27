"use client";

import { Briefcase, DollarSign, MapPin, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: MapPin,
    title: "Localização Central",
    description:
      "No coração de Campo Grande, com acesso rápido a tudo que importa.",
  },
  {
    icon: Briefcase,
    title: "Foco no Profissional",
    description: "Ambiente silencioso e funcional para quem viaja a trabalho.",
  },
  {
    icon: DollarSign,
    title: "Custo Inteligente",
    description: "Conforto essencial com tarifas que fazem sentido.",
  },
  {
    icon: Sparkles,
    title: "Sempre Evoluindo",
    description: "Melhorias constantes para sua experiência.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-green-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* LEFT - 3/5 */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="mb-6 text-foreground"
              style={{
                fontSize: "clamp(4rem, 4vw, 5rem)",
                fontWeight: 600,
                lineHeight: 1.2,
              }}
            >
              Simples, funcional e direto ao ponto.
            </h2>

            <p
              className="text-muted-foreground max-w-lg leading-relaxed text-base "
              style={{
                fontSize: "clamp(1rem, 4vw, 1.2rem)",
                fontWeight: 300,
                lineHeight: 1.2,
              }}
            >
              Um espaço pensado para quem valoriza praticidade. Boa localização,
              conforto essencial e um ambiente tranquilo para manter o foco ou
              simplesmente descansar.
            </p>

            <div className="mt-8 w-8 h-[2px] bg-primary/60" />
          </motion.div>

          {/* RIGHT - 2/5 */}
          <div className="lg:col-span-2 grid gap-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <div
                  className="p-3 border border-neutral-200 backdrop-blur-sm transition-all duration-300 rounded-sm
                                hover:bg-primary hover:bg-green-800/50 hover:border-primary hover:shadow-sm"
                >
                  {/* header (icon + title inline) */}
                  <div className="flex items-center gap-2 mb-1">
                    <feature.icon
                      size={16}
                      className="text-primary transition-colors duration-300 group-hover:text-white"
                    />
                    <h3 className="text-sm font-medium text-foreground transition-colors duration-300 group-hover:text-white">
                      {feature.title}
                    </h3>
                  </div>

                  {/* description */}
                  <p
                    className="text-xs text-muted-foreground leading-relaxed pl-[22px]
                                transition-colors duration-300 group-hover:text-white/80"
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
