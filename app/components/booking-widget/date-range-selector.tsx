"use client";

import { Calendar } from "@/app/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";
import dayjs from "dayjs";
import { useState } from "react";
import { cn } from "../ui/utils";
import type { BookingDateRange } from "./types";

type DateRangeSelectorProps = {
  value: BookingDateRange;
  onChange: (range: BookingDateRange) => void;
};

const DateRangeSelector = ({ value, onChange }: DateRangeSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasValue = value.from || value.to;

  const displayText =
    value.from && value.to
      ? `${dayjs(value.from).format("DD MMM")} — ${dayjs(value.to).format("DD MMM")}`
      : value.from
        ? `${dayjs(value.from).format("DD MMM")} — Saída`
        : "Selecionar datas";

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button
          className={cn(
            "w-full rounded-xl border px-4 py-3 text-left transition-all",
            "flex items-center justify-between gap-3",
            "bg-background hover:bg-green-900",
            "focus:outline-none focus:ring-2 focus:ring-[#ca993d]/40",
            isOpen && "ring-2 ring-[#ca993d]/40",
            hasValue ? "border-border" : "border-dashed border-border/70",
          )}
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex flex-col min-w-0">
              <span
                className={cn(
                  "text-xs uppercase tracking-wide",
                  hasValue
                    ? "text-muted-foreground"
                    : "text-muted-foreground/60",
                )}
              >
                Check-in / Check-out
              </span>

              <span
                className={cn(
                  "text-sm font-medium truncate",
                  !hasValue && "text-muted-foreground/70",
                )}
              >
                {displayText}
              </span>
            </div>
          </div>

          <div
            className={cn(
              "text-xs text-muted-foreground transition-transform",
              isOpen && "rotate-180",
            )}
          >
            ▼
          </div>
        </button>
      </PopoverTrigger>

      <PopoverContent
        className="w-auto p-0 bg-background border border-border shadow-2xl rounded-xl overflow-hidden"
        align="start"
        sideOffset={10}
      >
        <Calendar
          mode="range"
          selected={{ from: value.from, to: value.to }}
          onSelect={(range) => {
            onChange({ from: range?.from, to: range?.to });

            if (range?.from && range?.to) {
              setIsOpen(false);
            }
          }}
          numberOfMonths={2}
          disabled={{ before: new Date() }}
          initialFocus
          className="p-3"
        />
      </PopoverContent>
    </Popover>
  );
};

export default DateRangeSelector;
