"use client";

import type { RegulationsType } from "@/app/data/regulations/regulations";
import { motion } from "framer-motion";
import Image from "next/image";
import { RuleItem } from "./RegulationItem";

type RuleSectionProps = {
  rule: RegulationsType;
  index: number;
};

export const RuleSection = ({ rule, index }: RuleSectionProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="
    group
    flex flex-col gap-6 py-5
    sm:flex-row sm:items-start
    border-b border-white/10
  "
  >
    {/* ICON (desktop) */}
    <div className="hidden sm:block shrink-0 relative">
      <div className="absolute inset-0 rounded-full bg-red-600/10 blur-xl group-hover:bg-red-600/20 transition" />
      <Image
        src={rule.icon}
        alt={rule.title}
        width={72}
        height={72}
        className="object-contain relative z-10"
      />
    </div>

    {/* CONTENT */}
    <div className="flex flex-col gap-4 flex-1">
      {/* TITLE + ICON (mobile) */}
      <div className="flex items-center gap-3">
        {/* ICON mobile */}
        <div className="sm:hidden relative shrink-0">
          <div className="absolute inset-0 rounded-full bg-red-600/10 blur-xl" />
          <Image
            src={rule.icon}
            alt={rule.title}
            width={48}
            height={48}
            className="object-contain relative z-10"
          />
        </div>

        {/* barra */}
        <div className="h-6 w-[3px] bg-gradient-to-b from-red-600 to-red-800 rounded-full" />

        {/* title */}
        <h3
          className="
          text-2xl md:text-3xl
          font-semibold
          text-white
          tracking-tight
        "
        >
          {rule.title}
        </h3>
      </div>
      {/* HIGHLIGHT */}
      {rule.highlight &&
        (() => {
          const [title, description] = rule.highlight.split(":");

          return (
            <p className="text-lg font-medium">
              <span className="text-red-500">{title}:</span>{" "}
              <span className="text-white/90">{description}</span>
            </p>
          );
        })()}

      {/* LIST */}
      <ul className="space-y-2 mt-2">
        {rule.items.map((item) => (
          <RuleItem key={item} text={item} />
        ))}
      </ul>

      {/* EXTRA */}
      {rule.extra && (
        <p className="text-sm text-white/50 italic mt-2">{rule.extra}</p>
      )}
    </div>
  </motion.div>
);
