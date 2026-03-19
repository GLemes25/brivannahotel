"use client";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1771206331424-44b8ec9acdf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGxvYmJ5JTIwZWxlZ2FudCUyMGludGVyaW9yfGVufDF8fHx8MTc3Mzk0ODg2NHww&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
        <div className="absolute inset-0 bg-[#102c31]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm border border-primary/30 rounded-full px-5 py-2 mb-8"
          >
            <MapPin className="text-accent" size={18} />
            <span
              className="text-foreground"
              style={{ fontSize: "0.875rem", fontWeight: 400 }}
            >
              Centro de Campo Grande, MS
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 600,
              lineHeight: 1.15,
            }}
          >
            <span className="text-foreground">Conforto e Praticidade</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              no Centro da Cidade
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{
              fontSize: "clamp(1.125rem, 2vw, 1.25rem)",
              fontWeight: 300,
            }}
          >
            A escolha ideal para profissionais que buscam localização
            estratégica, ambiente moderno e excelente custo-benefício em suas
            viagens de trabalho.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(184, 150, 10, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contato")}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg shadow-lg flex items-center space-x-2 w-full sm:w-auto justify-center group transition-all duration-300"
              style={{ fontSize: "1.0625rem", fontWeight: 500 }}
            >
              <span>Reservar agora</span>
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("quartos")}
              className="border-2 border-primary/50 text-foreground px-8 py-4 rounded-lg backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 w-full sm:w-auto"
              style={{ fontSize: "1.0625rem", fontWeight: 500 }}
            >
              Ver quartos
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div
                className="text-primary mb-1"
                style={{ fontSize: "2rem", fontWeight: 600 }}
              >
                27
              </div>
              <div
                className="text-muted-foreground"
                style={{ fontSize: "0.875rem", fontWeight: 300 }}
              >
                Quartos
              </div>
            </div>
            <div className="text-center border-l border-r border-primary/20">
              <div
                className="text-primary mb-1"
                style={{ fontSize: "2rem", fontWeight: 600 }}
              >
                100%
              </div>
              <div
                className="text-muted-foreground"
                style={{ fontSize: "0.875rem", fontWeight: 300 }}
              >
                Brivanna
              </div>
            </div>
            <div className="text-center">
              <div
                className="text-primary mb-1"
                style={{ fontSize: "2rem", fontWeight: 600 }}
              >
                5min
              </div>
              <div
                className="text-muted-foreground"
                style={{ fontSize: "0.875rem", fontWeight: 300 }}
              >
                Pontos Chave
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
