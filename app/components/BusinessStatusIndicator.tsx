"use client";

import useBusinessStatus, {
  type BusinessStatus,
} from "@/app/hooks/UseBusinessStatus";

type TimeSlot = { open: string; close: string };
type DaySchedule = TimeSlot | TimeSlot[];
export type Schedule = { is24h?: boolean } & {
  [key: string]: DaySchedule | boolean | undefined;
};

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
    dotClass: "w-1.5 h-1.5 rounded-full shrink-0 bg-emerald-500/80",
    textClass: "text-xs font-light tracking-wide text-emerald-400/90",
    label: "Aberto 24h",
  },
  OPEN: {
    dotClass: "w-1.5 h-1.5 rounded-full shrink-0 bg-emerald-500/80",
    textClass: "text-xs font-light tracking-wide text-emerald-400/90",
    label: "Aberto agora",
  },
  CLOSING_SOON: {
    dotClass: "w-1.5 h-1.5 rounded-full shrink-0 bg-amber-500/80",
    textClass: "text-xs font-light tracking-wide text-amber-400/90",
    label: "Fecha em breve",
  },
  OPENS_SOON: {
    dotClass: "w-1.5 h-1.5 rounded-full shrink-0 bg-[#ca993d]/80",
    textClass: "text-xs font-light tracking-wide text-[#ca993d]",
    label: "Abre em breve",
  },
  CLOSED: {
    dotClass: "w-1.5 h-1.5 rounded-full shrink-0 bg-rose-500/50",
    textClass: "text-xs font-light tracking-wide text-rose-300/50",
    label: "Fechado",
  },
};

const BusinessStatusIndicator = ({
  schedule,
  businessHours,
}: BusinessStatusIndicatorProps) => {
  const status = useBusinessStatus(schedule);

  if (!status) return null;

  const config = STATUS_CONFIG[status];

  return (
    <div className="flex items-center gap-2 mb-5 mt-1">
      <div className={config.dotClass} />
      <span className={config.textClass}>{config.label}</span>
      <span className="text-white/20 text-xs select-none">•</span>
      <span className="text-xs text-muted-foreground font-light tracking-wide">
        {businessHours}
      </span>
    </div>
  );
};

export default BusinessStatusIndicator;
