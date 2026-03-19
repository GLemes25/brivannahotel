"use client";
import { Briefcase, DollarSign, MapPin, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: MapPin,
    title: "Localização Central",
    description:
      "No coração de Campo Grande, próximo a pontos comerciais e empresariais.",
    accent: false,
  },
  {
    icon: Briefcase,
    title: "Ideal para Trabalho",
    description:
      "Ambiente profissional e tranquilo, perfeito para viagens corporativas.",
    accent: false,
  },
  {
    icon: DollarSign,
    title: "Excelente Custo-Benefício",
    description: "Tarifas competitivas sem comprometer qualidade e conforto.",
    accent: false,
  },
  {
    icon: Sparkles,
    title: "Em Modernização",
    description:
      "Constante melhoria para oferecer sempre a melhor experiência.",
    accent: true,
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 600 }}
          >
            <span className="text-foreground">Por que escolher o </span>
            <span className="text-primary">Hotel Brivanna ?</span>
          </h2>
          <p
            className="text-muted-foreground max-w-2xl mx-auto"
            style={{ fontSize: "1.0625rem", fontWeight: 300 }}
          >
            Combinamos localização privilegiada com infraestrutura pensada para
            o profissional moderno
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="relative h-full bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                {/* Icon Container */}
                <div
                  className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 ${
                    feature.accent
                      ? "bg-gradient-to-br from-accent to-primary group-hover:shadow-lg group-hover:shadow-accent/30"
                      : "bg-gradient-to-br from-primary to-primary/70 group-hover:shadow-lg group-hover:shadow-primary/30"
                  }`}
                >
                  <feature.icon className="text-primary-foreground" size={26} />
                </div>

                {/* Content */}
                <h3
                  className="text-foreground mb-3"
                  style={{ fontSize: "1.25rem", fontWeight: 500 }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed"
                  style={{ fontSize: "0.9375rem", fontWeight: 300 }}
                >
                  {feature.description}
                </p>

                {/* Accent indicator */}
                {feature.accent && (
                  <div className="absolute top-4 right-4">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
