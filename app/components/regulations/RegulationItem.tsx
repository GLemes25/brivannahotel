type RegulationItemProps = {
  text: string;
};

export const RegulationItem = ({ text }: RegulationItemProps) => (
  <li className="flex items-start gap-3 text-white/80 leading-relaxed">
    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ca993d] shadow-[0_0_8px_rgba(202,153,61,0.4)]" />
    <span className="text-[15px] sm:text-base">{text}</span>
  </li>
);
