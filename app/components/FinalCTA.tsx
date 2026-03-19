"use client";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function FinalCTA() {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-secondary via-card to-secondary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center bg-primary/10 border border-primary/30 rounded-full px-5 py-2 mb-6">
            <span
              className="text-primary"
              style={{ fontSize: "0.875rem", fontWeight: 500 }}
            >
              ⚡ Reserva Rápida
            </span>
          </div>

          <h2
            className="mb-6"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 600,
              lineHeight: 1.15,
            }}
          >
            <span className="text-foreground">Pronto para garantir</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              sua próxima hospedagem?
            </span>
          </h2>

          <p
            className="text-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{
              fontSize: "clamp(1.0625rem, 2vw, 1.25rem)",
              fontWeight: 300,
            }}
          >
            Entre em contato agora mesmo e garanta as melhores tarifas. Nossa
            equipe está pronta para atender você!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(184, 150, 10, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground px-10 py-5 rounded-xl shadow-xl flex items-center space-x-3 w-full sm:w-auto justify-center group transition-all duration-300"
              style={{ fontSize: "1.125rem", fontWeight: 600 }}
            >
              <span>Fazer Reserva</span>
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={22}
              />
            </motion.button>

            <motion.a
              href="tel:+5567333344444"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary/50 text-foreground px-10 py-5 rounded-xl backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 w-full sm:w-auto flex items-center justify-center space-x-3"
              style={{ fontSize: "1.125rem", fontWeight: 500 }}
            >
              <Phone size={22} className="text-primary" />
              <span>Ligar Agora</span>
            </motion.a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span style={{ fontSize: "0.875rem", fontWeight: 400 }}>
                Resposta em até 5min
              </span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-primary/30" />
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span style={{ fontSize: "0.875rem", fontWeight: 400 }}>
                Atendimento 24h
              </span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-primary/30" />
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span style={{ fontSize: "0.875rem", fontWeight: 400 }}>
                Sem taxas ocultas
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
