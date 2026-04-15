"use client";

import { Button } from "@/app/components/ui/button";
import dayjs from "dayjs";
import { Calendar, Search, Ticket, Users } from "lucide-react";
import { useState } from "react";
import { cn } from "../ui/utils";
import DateRangeSelector from "./date-range-selector";
import DiscountInput from "./discount-input";
import GuestRoomSelector from "./guest-room-selector";
import type { BookingState } from "./types";

const BOOKING_BASE_URL =
  "https://reservas.bitzsoftwares.com.br/9968eeee-f170-4705-b665-4939c0b92c73/pt-BR";

const buildBookingUrl = (state: BookingState): string => {
  const { dateRange, rooms, discountCode } = state;

  const totalAdults = rooms.reduce((sum, r) => sum + r.adults, 0);
  const totalChildren = rooms.reduce((sum, r) => sum + r.children, 0);
  const allChildrenAges = rooms.flatMap((r) => r.childrenAges);

  const quartos = rooms.map((r) => ({
    id: r.id,
    adultos: r.adults,
    criancas: r.children,
    idadeCriancas: r.childrenAges,
  }));

  const baseParams = new URLSearchParams({
    dataCheckIn: dayjs(dateRange.from).format("YYYY-MM-DD"),
    dataCheckOut: dayjs(dateRange.to).format("YYYY-MM-DD"),
    adultos: String(totalAdults),
    criancas: String(totalChildren),
  });

  let url = `${BOOKING_BASE_URL}?${baseParams.toString()}`;
  url += `&idadeCriancas=${JSON.stringify(allChildrenAges)}`;
  url += `&quartos=${JSON.stringify(quartos)}`;

  if (discountCode.trim()) {
    url += `&promotionalCode=${encodeURIComponent(discountCode.trim())}`;
  }

  return url;
};

const BookingWidget = () => {
  const [state, setState] = useState<BookingState>({
    dateRange: { from: undefined, to: undefined },
    rooms: [{ id: 1, adults: 2, children: 0, childrenAges: [] }],
    discountCode: "",
  });

  const isReady = !!state.dateRange.from && !!state.dateRange.to;

  const handleSearch = () => {
    if (!isReady) return;
    window.open(buildBookingUrl(state), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="booking-widget" className="bg-green-900/10 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header mais clean */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground">
            Reserve sua estadia
          </h2>
          <p className="text-sm text-muted-foreground mt-2 tracking-wide">
            Experiência exclusiva no Brivanna Hotel
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Seção de Inputs */}
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Datas */}
            <div className="p-5 group relative pb-0 lg:pb-5">
              {/* Adicionado justify-center */}
              <div className="flex items-center justify-center gap-2 mb-3 text-[#ca993d]">
                <Calendar size={16} />
                <span className="text-xs uppercase font-semibold tracking-wider text-background group-hover:text-[#ca993d] transition-colors">
                  Datas
                </span>
              </div>

              <DateRangeSelector
                value={state.dateRange}
                onChange={(dateRange) =>
                  setState((prev) => ({ ...prev, dateRange }))
                }
              />

              <div className="hidden lg:block absolute right-0 top-6 bottom-6 w-px bg-border/50" />
            </div>

            {/* Hóspedes */}
            <div className="p-5 group relative pb-0 lg:pb-5">
              {/* Adicionado justify-center */}
              <div className="flex items-center justify-center gap-2 mb-3 text-[#ca993d]">
                <Users size={16} />
                <span className="text-xs uppercase font-semibold tracking-wider text-background group-hover:text-[#ca993d] transition-colors">
                  Hóspedes
                </span>
              </div>

              <GuestRoomSelector
                rooms={state.rooms}
                onChange={(rooms) => setState((prev) => ({ ...prev, rooms }))}
              />

              <div className="hidden lg:block absolute right-0 top-6 bottom-6 w-px bg-border/50" />
            </div>

            {/* Cupom */}
            <div className="p-5 group pb-0 lg:pb-5">
              {/* Adicionado justify-center */}
              <div className="flex items-center justify-center gap-2 mb-3 text-[#ca993d]">
                <Ticket size={16} />
                <span className="text-xs uppercase font-semibold tracking-wider text-background group-hover:text-[#ca993d] transition-colors">
                  Cupom
                </span>
              </div>

              <DiscountInput
                value={state.discountCode}
                onChange={(discountCode) =>
                  setState((prev) => ({ ...prev, discountCode }))
                }
              />
            </div>
          </div>

          {/* Seção do Botão (Abaixo dos 3 e Centralizado) */}
          <div className="flex justify-center pb-5 px-5 pt-6 lg:pt-0  ">
            <Button
              onClick={handleSearch}
              disabled={!isReady}
              className={cn(
                "h-[34px] px-12 min-w-[300px] rounded-xl", // Removido w-full, adicionado px-12 e min-w-[200px]
                "bg-gradient-to-br from-[#f4d988] via-[#ca993d] to-[#f4d988]",
                "text-black font-semibold uppercase tracking-wide",
                "shadow-md transition-all",
                "hover:brightness-110 hover:shadow-lg",
                "active:scale-[0.98]",
                "disabled:opacity-50 disabled:pointer-events-none",
              )}
            >
              <div className="flex items-center justify-center gap-2">
                <Search size={16} />
                <span className="text-xs">Buscar</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingWidget;
