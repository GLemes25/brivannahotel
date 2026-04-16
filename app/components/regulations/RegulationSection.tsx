"use client";

import type { RegulationsType } from "@/app/data/regulations/regulations";
import { motion } from "framer-motion";
import Image from "next/image";
import { RegulationItem } from "./RegulationItem"; // Ajuste o caminho se necessário

type RuleSectionProps = {
  rule: RegulationsType;
  index: number;
};

export const RegulationSection = ({ rule, index }: RuleSectionProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    className="group flex flex-col gap-6 py-8 sm:flex-row sm:items-start sm:gap-8"
  >
    <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:w-20 shrink-0">
      <div className="shrink-0 relative">
        <Image
          src={rule.icon}
          alt={rule.title}
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      <h3 className="text-2xl font-serif text-white tracking-wide sm:hidden">
        {rule.title}
      </h3>
    </div>

    <div className="flex flex-col gap-4 flex-1">
      <h3 className="hidden sm:block text-2xl md:text-3xl font-serif text-white tracking-wide">
        {rule.title}
      </h3>

      {rule.highlight &&
        (() => {
          const [title, description] = rule.highlight.split(":");

          return (
            <div className="inline-flex flex-wrap items-baseline gap-2 rounded-lg bg-[#ca993d]/10 border border-[#ca993d]/20 px-4 py-3 mt-1 w-fit">
              <span className="text-[#ca993d] font-semibold tracking-wide uppercase text-xs whitespace-nowrap">
                {title}:
              </span>

              <span className="text-white/90 text-sm sm:text-base font-medium">
                {description}
              </span>
            </div>
          );
        })()}
      <ul className="flex flex-col gap-3 mt-2">
        {rule.items.map((item) => (
          <RegulationItem key={item} text={item} />
        ))}
      </ul>

      {rule.extra && (
        <p className="text-sm text-white/40 italic mt-3 font-light leading-relaxed">
          * {rule.extra}
        </p>
      )}
    </div>
  </motion.div>
);
