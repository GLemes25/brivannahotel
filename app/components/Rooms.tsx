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
  const scrollToBooking = () => {
    const element = document.getElementById("booking-widget");
    if (!element) return;

    const offset = 80;
    const position =
      element.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top: position, behavior: "smooth" });
  };

  return (
    <section
      id="rooms"
      className="py-12 bg-background relative overflow-hidden"
    >
      {/* Elemento Decorativo de Fundo (opcional para dar um glow sutil) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-[#ca993d]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* HEADER DA SEÇÃO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#ca993d] uppercase tracking-[0.2em] text-xs md:text-sm font-semibold mb-4">
            Nossas Acomodações
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-foreground tracking-wide mb-4">
            Escolha seu Conforto
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
            Ambientes pensados em cada detalhe para oferecer a você uma estadia
            inesquecível e revigorante.
          </p>
        </motion.div>

        {/* GRID DE QUARTOS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {rooms.map((room, index) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="group relative h-full flex"
            >
              {/* TAG MAIS POPULAR */}
              {room.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-[#f4d988] via-[#ca993d] to-[#f4d988] text-black px-5 py-1.5 rounded-full shadow-[0_4px_12px_rgba(202,153,61,0.3)] text-[11px] font-bold uppercase tracking-widest">
                    Mais Popular
                  </div>
                </div>
              )}

              {/* CARD */}
              <div className="w-full flex flex-col bg-card/20 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#ca993d]/30 hover:shadow-[0_8px_30px_rgba(202,153,61,0.1)] hover:-translate-y-1">
                {/* IMAGEM */}
                <div className="relative h-72 overflow-hidden">
                  <motion.div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${room.image})` }}
                  />

                  {/* Overlay gradiente para a imagem */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />

                  {/* Badge de Capacidade */}
                  <div className="absolute top-5 right-5 bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 flex items-center gap-2 z-10">
                    <Users size={14} className="text-[#ca993d]" />
                    <span className="text-white text-xs font-medium tracking-wider">
                      Até {room.capacity}
                    </span>
                  </div>
                </div>

                {/* CONTEÚDO */}
                <div className="p-6 md:p-8 flex flex-col flex-1 lg:-mt-6 relative z-10">
                  <h3 className="text-2xl font-serif text-foreground mb-3 group-hover:text-[#ca993d] transition-colors duration-300">
                    {room.name}
                  </h3>

                  <p className="text-muted-foreground text-sm md:text-[15px] font-light leading-relaxed mb-6 flex-1">
                    {room.description}
                  </p>

                  {/* AMENITIES */}
                  <div className="flex flex-wrap items-center gap-4 py-5 border-t border-white/5">
                    {room.amenities.map((key, idx) => {
                      const amenity = amenityMap[key];
                      if (!amenity) return null;

                      const Icon = amenity.icon;

                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-1 text-muted-foreground"
                          title={amenity.label}
                        >
                          <Icon size={16} className="text-primary opacity-90" />
                          <span className="text-xs font-light font-serif tracking-wide">
                            {amenity.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* BOTÃO RESERVAR */}
                  <div className="pt-2">
                    <MotionButton
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={scrollToBooking}
                      className="w-full h-12 bg-gradient-to-br from-[#f4d988] via-[#ca993d] to-[#f4d988] text-black border-none rounded-xl transition-all duration-300 text-sm font-semibold uppercase tracking-wide shadow-md hover:shadow-lg hover:brightness-110"
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
