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
      id="about"
      className="py-12 bg-background relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-[#ca993d]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[450px] md:h-[550px] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(202,153,61,0.1)] border border-white/5 group">
              <Image
                src="https://res.cloudinary.com/dk7zfhbrj/image/upload/v1774557268/brivannaReception_cx53tp.jpg"
                alt="Hotel Reception"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h2 className="text-[#ca993d] uppercase tracking-[0.2em] text-xs md:text-sm font-semibold mb-4">
              Nossa História
            </h2>

            <h3 className="mb-6 text-4xl md:text-5xl font-serif text-foreground leading-tight tracking-wide">
              Tradição e <span className="text-[#ca993d]">Modernidade</span>
              <br />
              no Coração da Cidade
            </h3>

            <div className="space-y-5 mb-10">
              <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed">
                O{" "}
                <strong className="text-foreground font-medium">
                  Hotel Brivanna
                </strong>{" "}
                está situado em uma localização estratégica de Campo Grande, com
                fácil acesso aos principais centros comerciais e empresariais.
              </p>

              <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed">
                Oferecemos acomodações confortáveis, aliadas a um atendimento
                atencioso e eficiente.
              </p>

              <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed">
                Em constante modernização, buscamos elevar nossa experiência,
                mantendo excelência e ótimo custo-benefício.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    className="text-[#ca993d] shrink-0 mt-0.5"
                    size={20}
                  />
                  <span className="text-sm md:text-[15px] text-foreground/90 font-light leading-snug">
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
