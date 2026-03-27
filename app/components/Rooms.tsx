"use client";

import { Users } from "lucide-react";
import { motion } from "motion/react";

import { amenityMap } from "../data/amenities";
import { Room } from "../data/rooms";
import roomsJson from "../data/rooms.json";

const rooms: Room[] = roomsJson as Room[];

export default function Rooms() {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (!element) return;

    const offset = 80;
    const position =
      element.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top: position, behavior: "smooth" });
  };

  return (
    <section id="quartos" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-foreground text-[clamp(2rem,4vw,2.75rem)] font-semibold">
            Nossos <span className="text-primary">Quartos</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-[1.0625rem] font-light">
            Escolha a acomodação que melhor se adapta às suas necessidades
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Badge */}
              {room.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-[#f4d988] via-[#ca993d] to-[#f4d988] text-black px-4 py-1 rounded-full shadow-lg text-xs font-medium">
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="h-full bg-card/40 backdrop-blur-sm border border-primary/20 rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${room.image})` }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />

                  {/* Capacity */}
                  <div className="absolute top-4 right-4 bg-green-900 backdrop-blur-sm border border-primary/30 rounded-lg px-3 py-1.5 flex items-center gap-2">
                    <Users size={16} className="text-primary" />
                    <span className="text-foreground text-sm">
                      {room.capacity}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-foreground mb-3 text-[1.375rem] font-medium">
                    {room.name}
                  </h3>

                  <p className="text-muted-foreground mb-4 text-[0.9375rem] font-light leading-relaxed">
                    {room.description}
                  </p>

                  {/* Amenities */}
                  <div className="flex items-center gap-4 mb-5 pb-5 border-b border-primary/20">
                    {room.amenities.map((key, idx) => {
                      const amenity = amenityMap[key];
                      if (!amenity) return null;

                      const Icon = amenity.icon;

                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-1 text-muted-foreground group/amenity"
                        >
                          <Icon
                            size={16}
                            className="text-accent group-hover/amenity:text-primary transition-colors"
                          />
                          <span className="text-xs font-light">
                            {amenity.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-primary text-lg font-semibold">
                        {room.priceRange}
                      </div>
                      <div className="text-muted-foreground text-xs font-light">
                        por noite
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={scrollToContact}
                      className="bg-primary/10 text-primary border border-primary/30 px-5 py-2.5 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-medium"
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
