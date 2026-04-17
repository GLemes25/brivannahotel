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
            "bg-background hover:bg-green-900", // Ajustado para não ser um verde forte no hover do input
            "focus:outline-none focus:ring-2 focus:ring-primary/40",
            isOpen && "ring-2 ring-primary/40",
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
        /* w-[var(--radix-popover-trigger-width)] garante que o calendário tenha a largura do input */
        className="w-[var(--radix-popover-trigger-width)] min-w-[320px] md:min-w-[600px] max-w-[calc(100vw-2rem)] p-4 bg-background border border-border shadow-2xl rounded-2xl overflow-hidden"
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
          classNames={{
            months:
              "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 justify-center",
            month: "space-y-4 w-full",
            caption: "flex justify-center pt-1 relative items-center ",
            caption_label: "text-sm font-medium font-serif",
            head_cell:
              "text-neutral-500 rounded-md w-9 font-normal text-[0.8rem]",
            cell: "text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
            day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-green-900 rounded-md transition-colors",
            day_range_middle:
              "aria-selected:bg-primary/60 aria-selected:text-black",
            day_selected:
              "bg-primary text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white",
            day_today: "bg-green-200/20 ",
            day_outside: "text-neutral-300 opacity-50",
            day_disabled: "text-neutral-300 opacity-50",
          }}
        />
      </PopoverContent>
    </Popover>
  );
};

export default DateRangeSelector;
