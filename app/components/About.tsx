"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Localização estratégica no centro comercial",
  "Equipe atenciosa e profissional",
  "Ambientes em constante modernização",
  "Tarifas justas e transparentes",
];

export default function About() {
  return (
    <section
      id="sobre"
      className="py-24 bg-gradient-to-b from-background via-secondary/20 to-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
              <img
                src="https://images.unsplash.com/photo-1759038085950-1234ca8f5fed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlY2VwdGlvbiUyMG1vZGVybiUyMGRlc2t8ZW58MXx8fHwxNzczOTQ4ODY1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Hotel Reception"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <div className="inline-flex items-center bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-4">
                <span
                  className="text-primary"
                  style={{ fontSize: "0.875rem", fontWeight: 500 }}
                >
                  Sobre Nós
                </span>
              </div>

              <h2
                className="mb-4"
                style={{
                  fontSize: "clamp(2rem, 4vw, 2.75rem)",
                  fontWeight: 600,
                  lineHeight: 1.2,
                }}
              >
                <span className="text-foreground">Tradição e </span>
                <span className="text-primary">Modernidade</span>
                <br />
                <span className="text-foreground">no Coração da Cidade</span>
              </h2>
            </div>

            <div className="space-y-4">
              <p
                className="text-foreground/90 leading-relaxed"
                style={{ fontSize: "1.0625rem", fontWeight: 300 }}
              >
                O{" "}
                <strong className="text-primary" style={{ fontWeight: 500 }}>
                  Hotel Central
                </strong>{" "}
                está localizado em uma das áreas mais privilegiadas de Campo
                Grande, oferecendo acesso rápido aos principais pontos
                comerciais e empresariais da cidade.
              </p>

              <p
                className="text-muted-foreground leading-relaxed"
                style={{ fontSize: "1rem", fontWeight: 300 }}
              >
                Com 27 quartos confortáveis e uma equipe dedicada, trabalhamos
                continuamente para proporcionar uma experiência de hospedagem
                que equilibra qualidade, praticidade e acessibilidade.
              </p>

              <p
                className="text-muted-foreground leading-relaxed"
                style={{ fontSize: "1rem", fontWeight: 300 }}
              >
                Estamos passando por um processo de modernização para elevar
                ainda mais o padrão de nossos serviços, sempre mantendo nosso
                compromisso com o melhor custo-benefício para profissionais em
                viagem.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle2
                    className="text-accent flex-shrink-0 mt-0.5"
                    size={20}
                  />
                  <span
                    className="text-foreground"
                    style={{ fontSize: "0.9375rem", fontWeight: 400 }}
                  >
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
