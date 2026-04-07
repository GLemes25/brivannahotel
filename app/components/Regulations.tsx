import type { RegulationsType } from "@/app/data/regulations/regulations";
import regulationsData from "@/app/data/regulations/regulations.json";
import { RuleSection } from "./RegulationsSection";

const rules = regulationsData.regulations as RegulationsType[];

const Regulations = () => (
  <section className="bg-green-900/10 px-6 py-7 text-white">
    <div className="mx-auto max-w-3xl">
      <h2
        className="
    mb-5
    text-center
    text-4xl md:text-5xl lg:text-6xl
    font-extrabold
    tracking-tight
    text-white
    drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]
    [text-stroke:1.5px_#b91c1c]
    [-webkit-text-stroke:1.5px_#b91c1c]
  "
      >
        Regras do Hotel
      </h2>
      <div>
        {rules.map((rule, index) => (
          <div key={rule.title}>
            <RuleSection rule={rule} index={index} />
            {index < rules.length - 1 && (
              <hr className="border-t border-yellow-600/30" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Regulations;
