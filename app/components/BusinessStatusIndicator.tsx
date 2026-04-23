"use client";

import useBusinessStatus, { BusinessStatus } from "@/app/hooks/UseBusinessStatus";

type Schedule = Parameters<typeof useBusinessStatus>[0];

type BusinessStatusIndicatorProps = {
  schedule: Schedule;
  businessHours: string;
};

type StatusConfig = {
  dotClass: string;
  textClass: string;
  label: string;
};

const STATUS_CONFIG: Record<BusinessStatus, StatusConfig> = {
  "24H": {
    dotClass: "bg-emerald-500/80",
    textClass: "text-emerald-400/80",
    label: "Aberto 24h",
  },
  OPEN: {
    dotClass: "bg-emerald-500/80",
    textClass: "text-emerald-400/80",
    label: "Aberto agora",
  },
  CLOSING_SOON: {
    dotClass: "bg-amber-500/80",
    textClass: "text-amber-400/80",
    label: "Fecha em breve",
  },
  OPENS_SOON: {
    dotClass: "bg-[#ca993d]/80",
    textClass: "text-[#ca993d]",
    label: "Abre em breve",
  },
  CLOSED: {
    dotClass: "bg-rose-500/50",
    textClass: "text-rose-300/50",
    label: "Fechado",
  },
};

const BusinessStatusIndicator = ({
  schedule,
  businessHours,
}: BusinessStatusIndicatorProps) => {
  const status = useBusinessStatus(schedule);
  const config = STATUS_CONFIG[status];

  return (
    <div className="flex items-center gap-2 mb-5 mt-1">
      <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${config.dotClass}`} />
      <span className={`text-xs font-light tracking-wide ${config.textClass}`}>
        {config.label}
      </span>
      <span className="text-white/20 text-xs select-none">•</span>
      <span className="text-xs text-muted-foreground font-light tracking-wide">
        {businessHours}
      </span>
    </div>
  );
};

export default BusinessStatusIndicator;
