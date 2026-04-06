"use client";
import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const highlights = [
  "Localização estratégica no centro comercial",
  "Equipe atenciosa e profissional",
  "Ambientes em constante modernização",
  "Tarifas justas e transparentes",
];

const About = () => {
  return (
    <section
      id="sobre"
      className="py-24 bg-gradient-to-b from-background via-secondary/20 to-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
              <Image
                src="https://res.cloudinary.com/dk7zfhbrj/image/upload/v1774557268/brivannaReception_cx53tp.jpg"
                alt="Hotel Reception"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h2
                className="mb-4 mt-1"
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
                style={{ fontSize: "1.05rem", fontWeight: 300 }}
              >
                O{" "}
                <strong className="text-primary" style={{ fontWeight: 500 }}>
                  Hotel Brivanna
                </strong>{" "}
                está situado em uma localização estratégica de Campo Grande, com
                fácil acesso aos principais centros comerciais e empresariais.
              </p>

              <p
                className="text-muted-foreground leading-relaxed"
                style={{ fontSize: "1rem", fontWeight: 300 }}
              >
                Oferecemos acomodações confortáveis, aliadas a um atendimento
                atencioso e eficiente.
              </p>

              <p
                className="text-muted-foreground leading-relaxed"
                style={{ fontSize: "1rem", fontWeight: 300 }}
              >
                Em constante modernização, buscamos elevar nossa experiência,
                mantendo excelência e ótimo custo-benefício.
              </p>
            </div>

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
};

export default About;
