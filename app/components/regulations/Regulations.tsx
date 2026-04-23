"use client";

import type { RegulationsType } from "@/app/data/regulations/regulations";
import regulationsData from "@/app/data/regulations/regulations.json";
import { RegulationSection } from "./RegulationSection";

const rules = regulationsData.regulations as RegulationsType[];

const Regulations = () => (
  <section
    id="regulations"
    className="bg-background2 py-12 relative overflow-hidden min-h-screen flex flex-col justify-center"
  >
    {/* Linha Decorativa Superior */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[#ca993d]/30 to-transparent" />

    {/* Glow de Fundo Sutil */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ca993d]/5 rounded-full blur-[150px] pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
      {/* Header Centralizado - Com o mesmo estilo do Rooms */}
      <div className="text-center mb-15">
        <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#ca993d] font-semibold mb-4">
          Transparência e Conforto
        </h2>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-wide">
          Regulamento Interno
        </h3>
        <div className="mt-6 w-12 h-px bg-[#ca993d]/40 mx-auto" />
      </div>

      {/* GRID DINÂMICO 
          - No desktop: 3 colunas, sem gap, com divisórias verticais
          - No mobile: 1 coluna, com divisórias horizontais
      */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10 items-stretch border-y md:border-y-0 border-white/10">
        {rules.map((rule, index) => (
          <RegulationSection key={rule.title} rule={rule} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Regulations;
