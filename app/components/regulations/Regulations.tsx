import type { RegulationsType } from "@/app/data/regulations/regulations";
import regulationsData from "@/app/data/regulations/regulations.json";
import { RegulationSection } from "./RegulationSection";

const rules = regulationsData.regulations as RegulationsType[];

const Regulations = () => (
  <section className="bg-background2 px-6 py-24 relative overflow-hidden">
    {/* Elementos Decorativos de Fundo */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#ca993d]/30 to-transparent" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ca993d]/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="mx-auto max-w-4xl relative z-10">
      {/* Header da Seção */}
      <div className="text-center mb-16">
        <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#ca993d] font-semibold mb-3">
          Informações Importantes
        </h2>
        <h3 className="text-4xl md:text-5xl font-serif text-white">
          Regras do Hotel
        </h3>
      </div>

      {/* Lista com linhas divisórias elegantes */}
      <div className="flex flex-col divide-y divide-white/10">
        {rules.map((rule, index) => (
          <RegulationSection key={rule.title} rule={rule} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Regulations;
