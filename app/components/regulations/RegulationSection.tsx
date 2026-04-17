"use client";

import type { RegulationsType } from "@/app/data/regulations/regulations";
import { motion } from "framer-motion";
import Image from "next/image";
import { RegulationItem } from "./RegulationItem";

type RuleSectionProps = {
  rule: RegulationsType;
  index: number;
};

export const RegulationSection = ({ rule, index }: RuleSectionProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.8,
      delay: index * 0.15,
      ease: [0.21, 0.47, 0.32, 0.98],
    }}
    /* flex-1 e h-full garantem que a divisória vertical ocupe a altura toda.
       md:px-12 cria o "vácuo" entre o item e a linha.
    */
    className="flex-1 flex flex-col h-full  py-6 lg:py-0 px-6 md:px-12 group transition-all"
  >
    {/* Cabeçalho do Item - Agora totalmente centralizado no desktop também */}
    <div className="flex flex-col items-center text-center gap-8 mb-10">
      <div className="relative shrink-0">
        <Image
          src={rule.icon}
          alt={rule.title}
          width={100}
          height={100}
          className="object-contain opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
        />
      </div>

      <h3 className="text-2xl md:text-3xl font-serif text-white tracking-wide leading-tight min-h-[70px] flex items-center justify-center">
        {rule.title}
      </h3>
    </div>

    {/* Conteúdo Central */}
    {/* CONTEÚDO */}
    <div className="flex flex-col gap-6 flex-1">
      {/* HIGHLIGHT - Forçado em uma única linha */}
      {rule.highlight &&
        (() => {
          const [title, description] = rule.highlight.split(":");
          return (
            <div className="flex items-center gap-2 rounded-xl bg-[#ca993d]/5 border border-[#ca993d]/10 px-2 py-3 w-full overflow-hidden">
              <span className="text-[#ca993d] font-semibold tracking-[0.15em] uppercase text-[11px] whitespace-nowrap">
                {title}:
              </span>

              <span
                className="text-white/90 text-[13px] font-medium truncate"
                title={description}
              >
                {description}
              </span>
            </div>
          );
        })()}
      <ul className="flex flex-col gap-4 ">
        {rule.items.map((item) => (
          <RegulationItem key={item} text={item} />
        ))}
      </ul>

      {/* FOOTER DO ITEM - Sempre na base */}
      {rule.extra && (
        <div className="mt-auto pt-8">
          <p className="text-[11px] text-white/20 italic font-light leading-relaxed group-hover:text-white/40 transition-colors">
            * {rule.extra}
          </p>
        </div>
      )}
    </div>
  </motion.div>
);
