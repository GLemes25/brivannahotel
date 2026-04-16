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
    title: "Custo Benefício",
    description: "Conforto essencial com tarifas que fazem sentido.",
  },
  {
    icon: Sparkles,
    title: "Sempre Evoluindo",
    description: "Melhorias constantes para sua experiência.",
  },
];

const Features = () => {
  return (
    <section className="py-12 bg-background2 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#ca993d]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#ca993d] uppercase tracking-[0.2em] text-xs md:text-sm font-semibold mb-4">
              A Essência Brivanna
            </h2>

            <h3 className="mb-6 text-4xl md:text-5xl lg:text-[3.5rem] leading-tight font-serif text-foreground">
              Simples, funcional e direto ao ponto.
            </h3>

            <p className="text-muted-foreground max-w-xl leading-relaxed text-base md:text-lg font-light">
              Um espaço pensado para quem valoriza praticidade. Boa localização,
              conforto essencial e um ambiente tranquilo para manter o foco ou
              simplesmente descansar.
            </p>

            <div className="mt-10 w-12 h-[1px] bg-gradient-to-r from-[#ca993d] to-transparent" />
          </motion.div>

          <div className="lg:col-span-2 grid gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <div className="p-5 bg-card/10 backdrop-blur-md border border-white/5 rounded-2xl transition-all duration-500 hover:bg-card/30 hover:border-[#ca993d]/30 hover:shadow-[0_8px_30px_rgba(202,153,61,0.08)]">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 rounded-full bg-[#ca993d]/10 border border-[#ca993d]/20 flex items-center justify-center shrink-0 group-hover:bg-[#ca993d]/20 transition-colors duration-500">
                      <feature.icon size={18} className="text-[#ca993d]" />
                    </div>
                    <h4 className="text-base md:text-lg font-serif text-foreground tracking-wide group-hover:text-[#ca993d] transition-colors duration-300">
                      {feature.title}
                    </h4>
                  </div>

                  <p className="text-sm text-muted-foreground font-light leading-relaxed pl-14 group-hover:text-foreground/80 transition-colors duration-300">
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
};

export default Features;
