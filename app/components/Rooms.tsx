"use client";

import { Users } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";

import { amenityMap } from "../data/rooms/amenities";
import { Room } from "../data/rooms/rooms";
import roomsJson from "../data/rooms/rooms.json";

const MotionButton = motion(Button);

const rooms: Room[] = roomsJson as Room[];

const Rooms = () => {
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-foreground text-[clamp(4rem,4vw,2.75rem)] font-semibold">
            Nossos <span className="text-primary">Quartos</span>
          </h2>

          <p className="text-muted-foreground max-w-3xl mx-auto text-[1.4rem] font-light">
            Escolha a acomodação que melhor se adapta às suas necessidades
          </p>
        </motion.div>

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
              {room.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-[#f4d988] via-[#ca993d] to-[#f4d988] text-black px-4 py-1 rounded-full shadow-lg text-xs font-medium">
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="h-full bg-card/40 backdrop-blur-sm border border-yellow-700 rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10">
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${room.image})` }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />

                  <div className="absolute top-4 right-4 bg-green-900 backdrop-blur-sm border border-black rounded-lg px-3 py-1.5 flex items-center gap-2">
                    <Users size={16} className="text-primary" />
                    <span className="text-foreground text-sm">
                      {room.capacity}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-foreground text-center mb-3 text-[1.6rem] font-semibold pb-2">
                    {room.name}
                  </h3>

                  <p className="text-muted-foreground mb-4 text-[0.9375rem] font-light leading-relaxed">
                    {room.description}
                  </p>

                  <div className="flex items-center gap-4 mb-5 pb-5 border-b border-yellow-800">
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
                  <div className="flex items-center justify-between">
                    <MotionButton
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={scrollToContact}
                      className="w-full bg-white/70 text-black border border-yellow-800/30 px-4 py-2 rounded-lg transition-all duration-300 text-sm font-semibold hover:bg-gradient-to-r hover:from-[#f4d988] hover:via-[#ca993d] hover:to-[#f4d988] hover:text-black hover:brightness-110"
                    >
                      Reservar
                    </MotionButton>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
