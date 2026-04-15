"use client";

import { Button } from "@/app/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { cn } from "../ui/utils";
import CounterButton from "./counter-button";
import type { BookingRoom } from "./types";

type GuestRoomSelectorProps = {
  rooms: BookingRoom[];
  onChange: (rooms: BookingRoom[]) => void;
};

const GuestRoomSelector = ({ rooms, onChange }: GuestRoomSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const totalAdults = rooms.reduce((s, r) => s + r.adults, 0);
  const totalChildren = rooms.reduce((s, r) => s + r.children, 0);
  const totalRooms = rooms.length;

  const summaryText = `${totalRooms} Quarto${totalRooms > 1 ? "s" : ""}, ${totalAdults} adulto${totalAdults > 1 ? "s" : ""}${
    totalChildren > 0
      ? `, ${totalChildren} criança${totalChildren > 1 ? "s" : ""}`
      : ""
  }`;

  const updateAdults = (id: number, delta: number) => {
    onChange(
      rooms.map((r) =>
        r.id === id ? { ...r, adults: Math.max(1, r.adults + delta) } : r,
      ),
    );
  };

  const updateChildren = (id: number, delta: number) => {
    onChange(
      rooms.map((r) => {
        if (r.id !== id) return r;
        const newCount = Math.max(0, r.children + delta);
        const newAges =
          newCount > r.children
            ? [...r.childrenAges, 2]
            : r.childrenAges.slice(0, newCount);
        return { ...r, children: newCount, childrenAges: newAges };
      }),
    );
  };

  const updateChildAge = (roomId: number, childIndex: number, age: number) => {
    onChange(
      rooms.map((r) => {
        if (r.id !== roomId) return r;
        const newAges = [...r.childrenAges];
        newAges[childIndex] = age;
        return { ...r, childrenAges: newAges };
      }),
    );
  };

  const addRoom = () => {
    const newId = Math.max(...rooms.map((r) => r.id)) + 1;
    onChange([
      ...rooms,
      { id: newId, adults: 1, children: 0, childrenAges: [] },
    ]);
  };

  const removeRoom = (id: number) => {
    onChange(rooms.filter((r) => r.id !== id));
  };

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
            "border-border",
          )}
        >
          <div className="flex flex-col min-w-0">
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              Hóspedes
            </span>

            <span className="text-sm font-medium truncate">{summaryText}</span>
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
        className="w-[340px] sm:w-[400px] p-0 bg-background border-border shadow-2xl"
        align="start"
        sideOffset={8}
      >
        <div className="max-h-[480px] overflow-y-auto divide-y divide-border">
          {rooms.map((room, roomIndex) => (
            <div key={room.id} className="p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold text-sm text-foreground">
                  Quarto {roomIndex + 1}
                </span>
                {rooms.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeRoom(room.id)}
                    className="text-muted-foreground hover:text-red-500 transition-colors p-1 rounded"
                  >
                    <Trash2 size={14} />
                  </button>
                )}
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Adultos
                    </p>
                    <p className="text-xs text-muted-foreground">18+ anos</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CounterButton
                      onClick={() => updateAdults(room.id, -1)}
                      disabled={room.adults <= 1}
                    >
                      <Minus size={12} />
                    </CounterButton>
                    <span className="w-5 text-center text-sm font-semibold tabular-nums">
                      {room.adults}
                    </span>
                    <CounterButton onClick={() => updateAdults(room.id, 1)}>
                      <Plus size={12} />
                    </CounterButton>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Crianças
                    </p>
                    <p className="text-xs text-muted-foreground">0–17 anos</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CounterButton
                      onClick={() => updateChildren(room.id, -1)}
                      disabled={room.children <= 0}
                    >
                      <Minus size={12} />
                    </CounterButton>
                    <span className="w-5 text-center text-sm font-semibold tabular-nums">
                      {room.children}
                    </span>
                    <CounterButton onClick={() => updateChildren(room.id, 1)}>
                      <Plus size={12} />
                    </CounterButton>
                  </div>
                </div>

                <AnimatePresence>
                  {room.children > 0 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                        Idade das crianças
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {room.childrenAges.map((age, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.06, duration: 0.18 }}
                          >
                            <Select
                              value={String(age)}
                              onValueChange={(v) =>
                                updateChildAge(room.id, idx, Number(v))
                              }
                            >
                              <SelectTrigger className="h-8 text-xs border-border bg-muted">
                                <SelectValue
                                  placeholder={`Criança ${idx + 1}`}
                                />
                              </SelectTrigger>
                              <SelectContent className="bg-background border-border">
                                {Array.from({ length: 18 }, (_, i) => (
                                  <SelectItem
                                    key={i}
                                    value={String(i)}
                                    className="text-xs"
                                  >
                                    {i === 0
                                      ? "Menos de 1 ano"
                                      : `${i} ano${i > 1 ? "s" : ""}`}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 border-t border-border flex items-center justify-between gap-2 bg-muted/40">
          <Button
            variant="outline"
            size="sm"
            onClick={addRoom}
            className="flex items-center gap-1.5 border-border text-foreground hover:text-primary hover:border-primary text-xs"
          >
            <Plus size={13} />
            Adicionar Quarto
          </Button>
          <Button
            size="sm"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90 text-xs"
          >
            <Check size={13} />
            Concluído
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default GuestRoomSelector;
