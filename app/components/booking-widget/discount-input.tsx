"use client";

import { Input } from "@/app/components/ui/input";
import { cn } from "../ui/utils";

type DiscountInputProps = {
  value: string;
  onChange: (value: string) => void;
};

const DiscountInput = ({ value, onChange }: DiscountInputProps) => (
  <div
    className={cn(
      "w-full rounded-xl border px-4 py-3 transition-all",
      "flex items-center justify-between",
      "bg-background hover:bg-green-900",
      "focus-within:ring-2 focus-within:ring-[#ca993d]/40",
      value ? "border-border" : "border-dashed border-border/70",
    )}
  >
    <div className="flex flex-col w-full min-w-0">
      <span
        className={cn(
          "text-xs uppercase tracking-wide",
          value ? "text-muted-foreground" : "text-muted-foreground/60",
        )}
      >
        Código promocional
      </span>

      <Input
        value={value}
        onChange={(e) => onChange(e.target.value.toUpperCase())}
        placeholder="Inserir cupom"
        className="border-none p-0 h-auto text-sm font-medium bg-transparent shadow-none focus-visible:ring-0 placeholder:text-muted-foreground/70"
      />
    </div>
  </div>
);

export default DiscountInput;
