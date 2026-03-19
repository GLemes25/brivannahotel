"use client";
import { Coffee, Users, Wifi, Wind } from "lucide-react";
import { motion } from "motion/react";

const rooms = [
  {
    name: "Quarto Standard Single",
    description: "Perfeito para viajantes solo. Confortável e funcional.",
    image:
      "https://images.unsplash.com/photo-1590303200076-8dac38dde3ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5nbGUlMjBob3RlbCUyMHJvb20lMjBtb2Rlcm4lMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc3Mzk0ODg2NXww&ixlib=rb-4.1.0&q=80&w=1080",
    capacity: "1 pessoa",
    priceRange: "A partir de R$ 120",
    amenities: [
      { icon: Wifi, label: "Wi-Fi" },
      { icon: Wind, label: "Ar-condicionado" },
      { icon: Coffee, label: "Café" },
    ],
  },
  {
    name: "Quarto Standard Double",
    description:
      "Espaçoso com cama de casal, ideal para casais ou mais conforto.",
    image:
      "https://images.unsplash.com/photo-1741506131058-533fcf894483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwaG90ZWwlMjByb29tJTIwZG91YmxlJTIwYmVkfGVufDF8fHx8MTc3Mzk0ODg2NXww&ixlib=rb-4.1.0&q=80&w=1080",
    capacity: "2 pessoas",
    priceRange: "A partir de R$ 150",
    featured: true,
    amenities: [
      { icon: Wifi, label: "Wi-Fi" },
      { icon: Wind, label: "Ar-condicionado" },
      { icon: Coffee, label: "Café" },
    ],
  },
  {
    name: "Quarto Premium",
    description: "Máximo conforto com acabamentos superiores e mais espaço.",
    image:
      "https://images.unsplash.com/photo-1731336478850-6bce7235e320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb20lMjBwcmVtaXVtfGVufDF8fHx8MTc3Mzk0ODg2NHww&ixlib=rb-4.1.0&q=80&w=1080",
    capacity: "2 pessoas",
    priceRange: "A partir de R$ 190",
    amenities: [
      { icon: Wifi, label: "Wi-Fi" },
      { icon: Wind, label: "Ar-condicionado" },
      { icon: Coffee, label: "Café" },
    ],
  },
];

export default function Rooms() {
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
    <section id="quartos" className="py-24 bg-background">
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
            <span className="text-foreground">Nossos </span>
            <span className="text-primary">Quartos</span>
          </h2>
          <p
            className="text-muted-foreground max-w-2xl mx-auto"
            style={{ fontSize: "1.0625rem", fontWeight: 300 }}
          >
            Escolha a acomodação que melhor se adapta às suas necessidades
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {room.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <div
                    className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1 rounded-full shadow-lg"
                    style={{ fontSize: "0.75rem", fontWeight: 500 }}
                  >
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="relative h-full bg-card/40 backdrop-blur-sm border border-primary/20 rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${room.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300" />

                  {/* Capacity Badge */}
                  <div className="absolute top-4 right-4 bg-secondary/90 backdrop-blur-sm border border-primary/30 rounded-lg px-3 py-1.5 flex items-center space-x-2">
                    <Users size={16} className="text-primary" />
                    <span
                      className="text-foreground"
                      style={{ fontSize: "0.875rem", fontWeight: 400 }}
                    >
                      {room.capacity}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-foreground mb-3"
                    style={{ fontSize: "1.375rem", fontWeight: 500 }}
                  >
                    {room.name}
                  </h3>

                  <p
                    className="text-muted-foreground mb-4 leading-relaxed"
                    style={{ fontSize: "0.9375rem", fontWeight: 300 }}
                  >
                    {room.description}
                  </p>

                  {/* Amenities */}
                  <div className="flex items-center space-x-4 mb-5 pb-5 border-b border-primary/20">
                    {room.amenities.map((amenity, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-1 text-muted-foreground group/amenity"
                      >
                        <amenity.icon
                          size={16}
                          className="text-accent group-hover/amenity:text-primary transition-colors"
                        />
                        <span
                          style={{ fontSize: "0.8125rem", fontWeight: 300 }}
                        >
                          {amenity.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div
                        className="text-primary"
                        style={{ fontSize: "1.125rem", fontWeight: 600 }}
                      >
                        {room.priceRange}
                      </div>
                      <div
                        className="text-muted-foreground"
                        style={{ fontSize: "0.75rem", fontWeight: 300 }}
                      >
                        por noite
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={scrollToContact}
                      className="bg-primary/10 text-primary border border-primary/30 px-5 py-2.5 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      style={{ fontSize: "0.875rem", fontWeight: 500 }}
                    >
                      Consultar
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
