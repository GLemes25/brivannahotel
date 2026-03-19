"use client";
import { Quote, Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Ricardo Silva",
    role: "Executivo Comercial",
    rating: 5,
    text: "Excelente localização! Fico sempre aqui quando venho a Campo Grande a trabalho. Perto de tudo e com bom custo-benefício.",
    image:
      "https://ui-avatars.com/api/?name=Ricardo+Silva&background=b8960a&color=0a1214&size=80",
  },
  {
    name: "Ana Costa",
    role: "Consultora",
    rating: 5,
    text: "Atendimento muito atencioso e quartos limpos. A localização central facilita muito meus compromissos profissionais.",
    image:
      "https://ui-avatars.com/api/?name=Ana+Costa&background=a3c617&color=0a1214&size=80",
  },
  {
    name: "Paulo Mendes",
    role: "Representante Comercial",
    rating: 4,
    text: "Ótima opção para quem viaja a negócios. Equipe prestativa e sempre me ajudam com o que preciso. Recomendo!",
    image:
      "https://ui-avatars.com/api/?name=Paulo+Mendes&background=b8960a&color=0a1214&size=80",
  },
];

export default function Testimonials() {
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
            <span className="text-foreground">O que dizem nossos </span>
            <span className="text-primary">Hóspedes</span>
          </h2>
          <p
            className="text-muted-foreground max-w-2xl mx-auto"
            style={{ fontSize: "1.0625rem", fontWeight: 300 }}
          >
            Experiências reais de profissionais que já se hospedaram conosco
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="relative h-full bg-card/40 backdrop-blur-sm border border-primary/20 rounded-xl p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote size={48} className="text-primary" />
                </div>

                {/* Stars */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-primary fill-primary"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p
                  className="text-foreground/90 mb-8 leading-relaxed relative z-10"
                  style={{ fontSize: "0.9375rem", fontWeight: 300 }}
                >
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-6 border-t border-primary/20">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-primary/30"
                  />
                  <div>
                    <h4
                      className="text-foreground"
                      style={{ fontSize: "1rem", fontWeight: 500 }}
                    >
                      {testimonial.name}
                    </h4>
                    <p
                      className="text-muted-foreground"
                      style={{ fontSize: "0.875rem", fontWeight: 300 }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div
              className="text-primary mb-1"
              style={{ fontSize: "2rem", fontWeight: 600 }}
            >
              4.8
            </div>
            <div
              className="text-muted-foreground"
              style={{ fontSize: "0.875rem", fontWeight: 300 }}
            >
              Avaliação Média
            </div>
          </div>
          <div className="text-center border-l border-primary/20">
            <div
              className="text-primary mb-1"
              style={{ fontSize: "2rem", fontWeight: 600 }}
            >
              500+
            </div>
            <div
              className="text-muted-foreground"
              style={{ fontSize: "0.875rem", fontWeight: 300 }}
            >
              Hóspedes
            </div>
          </div>
          <div className="text-center border-l border-primary/20">
            <div
              className="text-primary mb-1"
              style={{ fontSize: "2rem", fontWeight: 600 }}
            >
              95%
            </div>
            <div
              className="text-muted-foreground"
              style={{ fontSize: "0.875rem", fontWeight: 300 }}
            >
              Recomendariam
            </div>
          </div>
          <div className="text-center border-l border-primary/20">
            <div
              className="text-primary mb-1"
              style={{ fontSize: "2rem", fontWeight: 600 }}
            >
              3min
            </div>
            <div
              className="text-muted-foreground"
              style={{ fontSize: "0.875rem", fontWeight: 300 }}
            >
              Tempo Resposta
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
