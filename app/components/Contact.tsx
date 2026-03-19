"use client";

import { Clock, Mail, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  const whatsappNumber = "5567999999999"; // Replace with actual number
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de fazer uma reserva no Hotel Central.",
  );

  return (
    <section
      id="contato"
      className="py-24 bg-gradient-to-b from-background via-secondary/20 to-background"
    >
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
            <span className="text-foreground">Entre em </span>
            <span className="text-primary">Contato</span>
          </h2>
          <p
            className="text-muted-foreground max-w-2xl mx-auto"
            style={{ fontSize: "1.0625rem", fontWeight: 300 }}
          >
            Estamos prontos para atender você e garantir a melhor experiência de
            hospedagem
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* WhatsApp CTA - Main Focus */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Main WhatsApp Card */}
            <div className="relative bg-gradient-to-br from-[#25D366]/20 to-accent/20 border-2 border-[#25D366]/40 rounded-2xl p-8 overflow-hidden">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#25D366]/30">
                  <MessageCircle className="text-white" size={32} />
                </div>

                <h3
                  className="text-foreground mb-3"
                  style={{ fontSize: "1.75rem", fontWeight: 600 }}
                >
                  Faça sua Reserva pelo WhatsApp
                </h3>

                <p
                  className="text-foreground/90 mb-8 leading-relaxed"
                  style={{ fontSize: "1.0625rem", fontWeight: 300 }}
                >
                  Atendimento rápido e personalizado. Tire suas dúvidas e
                  garanta seu quarto com apenas alguns cliques!
                </p>

                <motion.a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(37, 211, 102, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 bg-[#25D366] text-white px-8 py-4 rounded-xl shadow-lg hover:bg-[#20BA5A] transition-all duration-300 group"
                  style={{ fontSize: "1.125rem", fontWeight: 600 }}
                >
                  <MessageCircle size={24} />
                  <span>Abrir WhatsApp</span>
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </motion.a>

                <div className="mt-6 flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full border-2 border-background" />
                    <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-full border-2 border-background" />
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full border-2 border-background" />
                  </div>
                  <p
                    className="text-foreground/80"
                    style={{ fontSize: "0.875rem", fontWeight: 400 }}
                  >
                    <span
                      className="text-[#25D366]"
                      style={{ fontWeight: 600 }}
                    >
                      +200
                    </span>{" "}
                    reservas feitas este mês
                  </p>
                </div>
              </div>

              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#25D366]/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
            </div>
          </motion.div>

          {/* Contact Information */}
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
                style={{ fontSize: "1.5rem", fontWeight: 600 }}
              >
                Outras Formas de Contato
              </h3>
              <p
                className="text-muted-foreground"
                style={{ fontSize: "1rem", fontWeight: 300 }}
              >
                Escolha a melhor forma de falar conosco
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                className="flex items-start space-x-4 bg-card/40 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary" size={22} />
                </div>
                <div>
                  <h4
                    className="text-foreground mb-1"
                    style={{ fontSize: "1.0625rem", fontWeight: 500 }}
                  >
                    Telefone
                  </h4>
                  <p
                    className="text-muted-foreground"
                    style={{ fontSize: "0.9375rem", fontWeight: 300 }}
                  >
                    (67) 3333-4444
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                className="flex items-start space-x-4 bg-card/40 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={22} />
                </div>
                <div>
                  <h4
                    className="text-foreground mb-1"
                    style={{ fontSize: "1.0625rem", fontWeight: 500 }}
                  >
                    E-mail
                  </h4>
                  <p
                    className="text-muted-foreground"
                    style={{ fontSize: "0.9375rem", fontWeight: 300 }}
                  >
                    contato@hotelcentral.com.br
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                className="flex items-start space-x-4 bg-card/40 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-primary" size={22} />
                </div>
                <div>
                  <h4
                    className="text-foreground mb-1"
                    style={{ fontSize: "1.0625rem", fontWeight: 500 }}
                  >
                    Horário de Atendimento
                  </h4>
                  <p
                    className="text-muted-foreground mb-1"
                    style={{ fontSize: "0.9375rem", fontWeight: 300 }}
                  >
                    Recepção: 24 horas
                  </p>
                  <p
                    className="text-muted-foreground"
                    style={{ fontSize: "0.875rem", fontWeight: 300 }}
                  >
                    WhatsApp: 8h às 22h
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
