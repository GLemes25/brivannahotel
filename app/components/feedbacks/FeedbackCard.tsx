"use client";

import { Frown, Smile, Star } from "lucide-react";
import { type FeedbacksType } from "@/app/data/feedbacks";

type FeedbackCardPropsType = {
  item: FeedbacksType;
};

const getRatingLabel = (score: number) => {
  if (score >= 9) return "Excepcional";
  if (score >= 8) return "Muito bom";
  if (score >= 7) return "Bom";
  if (score >= 5) return "Regular";
  return "Avaliado";
};

const FeedbackCard = ({ item }: FeedbackCardPropsType) => {
  return (
    <div className="relative min-w-[340px] max-w-[340px] md:min-w-[380px] md:max-w-[380px] bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#ca993d]/20 transition-all duration-500 group">
      <div className="flex justify-between items-start mb-6">
        <div className="pr-4">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={10}
                className="fill-[#ca993d] text-[#ca993d]"
              />
            ))}
          </div>
          <h3 className="text-lg font-serif text-neutral-900 tracking-tight leading-tight">
            "{item.title}"
          </h3>
          <p className="text-[10px] text-neutral-400 font-medium uppercase tracking-tighter mt-2">
            Hóspede Verificado • {item.date}
          </p>
        </div>

        <div className="bg-[#ca993d] text-white px-2.5 py-1.5 rounded-lg text-base font-bold shadow-md shadow-[#ca993d]/20">
          {item.rating.toFixed(1)}
        </div>
      </div>

      <p className="text-[#ca993d] text-xs font-bold uppercase tracking-widest mb-6">
        {getRatingLabel(item.rating)}
      </p>

      <div className="space-y-4 mb-8">
        <div className="flex items-start gap-3">
          <Smile className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
          <p className="text-sm text-neutral-700 font-light leading-relaxed italic">
            {item.positive}
          </p>
        </div>

        {item.negative && (
          <div className="flex items-start gap-3">
            <Frown className="w-4 h-4 text-red-900 mt-0.5 shrink-0" />
            <p className="text-sm text-neutral-500 font-light leading-relaxed italic">
              {item.negative}
            </p>
          </div>
        )}
      </div>

      <div className="pt-5 border-t border-neutral-100 mt-auto">
        <div className="flex items-center justify-between">
          <div className="text-[11px] text-neutral-400 font-light space-y-0.5">
            <p className="font-bold text-neutral-800 uppercase tracking-tighter">
              {item.user}
            </p>
            <p>
              {item.location} • {item.room}
            </p>
          </div>
          <div className="bg-neutral-50 px-2 py-1 rounded border border-neutral-100">
            <span className="text-[9px] font-bold text-neutral-400">
              BOOKING.COM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
