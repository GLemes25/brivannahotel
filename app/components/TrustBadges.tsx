"use client";
import { Award, Clock, Shield, ThumbsUp } from "lucide-react";
import { motion } from "motion/react";

const badges = [
  {
    icon: Shield,
    title: "Seguro",
    description: "Ambiente seguro 24h",
  },
  {
    icon: Clock,
    title: "Pontual",
    description: "Check-in rápido",
  },
  {
    icon: ThumbsUp,
    title: "Confiável",
    description: "95% aprovação",
  },
  {
    icon: Award,
    title: "Qualidade",
    description: "Serviço premium",
  },
];

export default function TrustBadges() {
  return (
    <section className="py-16 bg-secondary/30 border-y border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-3 group-hover:from-primary group-hover:to-accent transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/30">
                <badge.icon
                  className="text-primary group-hover:text-primary-foreground transition-colors"
                  size={28}
                />
              </div>
              <h4
                className="text-foreground mb-1"
                style={{ fontSize: "1rem", fontWeight: 500 }}
              >
                {badge.title}
              </h4>
              <p
                className="text-muted-foreground"
                style={{ fontSize: "0.8125rem", fontWeight: 300 }}
              >
                {badge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
