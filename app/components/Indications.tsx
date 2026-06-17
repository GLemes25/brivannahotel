"use client";

import { CATEGORIES } from "@/app/data/indications";
import { motion } from "motion/react";
import Link from "next/link";

const Indications = () => {
  return (
    <section
      id="indications"
      className="py-12 bg-background relative overflow-hidden min-h-[80vh] flex flex-col justify-center"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#ca993d]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-[#ca993d] uppercase tracking-[0.2em] text-xs md:text-sm font-semibold mb-4 font-serif">
            Guia Local
          </h2>
          <h3 className="font-serif text-4xl md:text-5xl text-foreground tracking-wide mb-4">
            Indicações Brivanna
          </h3>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Sinta-se um morador local. Nossas recomendações exclusivas para sua
            estadia perfeita.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {CATEGORIES.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
              >
                <Link
                  href={`/indications/${category.slug}`}
                  className="block h-full"
                >
                  <div className="group flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-card/10 backdrop-blur-md border border-white/5 transition-all duration-500 hover:bg-card/20 hover:border-[#ca993d]/30 hover:shadow-[0_8px_30px_rgba(202,153,61,0.08)] min-h-[140px]">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#ca993d]/10 group-hover:border-[#ca993d]/30 transition-colors duration-500 shrink-0">
                      <Icon
                        size={22}
                        className="text-white/60 group-hover:text-[#ca993d] transition-colors duration-500"
                      />
                    </div>
                    <span className="text-foreground text-sm md:text-base text-center font-serif tracking-wide group-hover:text-[#ca993d] transition-colors duration-500">
                      {category.label}
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Indications;
