"use client";

import { FeedbacksType } from "../data/feedbacks/feedbacks";

type FeedbackCardPropsType = {
  item: FeedbacksType;
};

const getRatingLabel = (score: number) => {
  if (score >= 9) return "Excelente";
  if (score >= 8) return "Muito bom";
  if (score >= 7) return "Bom";
  return "Regular";
};

const FeedbackCard = ({ item }: FeedbackCardPropsType) => {
  return (
    <div className="relative min-w-[360px] max-w-[360px] bg-white border border-gray-200 rounded-xl p-6 flex flex-col justify-between">
      <div className="absolute top-0 left-0 w-full h-1 bg-green-900 rounded-t-xl" />

      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
          <p className="text-xs text-gray-500 mt-1">{item.date}</p>
        </div>

        <div className="bg-green-900 text-white px-3 py-1 rounded-md text-sm font-semibold">
          {item.rating.toFixed(1)}
        </div>
      </div>

      <p className="text-green-900 text-xs font-medium mb-4">
        {getRatingLabel(item.rating)}
      </p>

      <div className="mb-3">
        <p className="text-xs font-semibold text-gray-900">
          👍 Pontos positivos
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">{item.positive}</p>
      </div>

      <div className="mb-5">
        <p className="text-xs font-semibold text-gray-900">
          👎 Pontos negativos
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">{item.negative}</p>
      </div>

      <div className="pt-4 border-t border-gray-200 text-xs text-gray-600 space-y-1">
        <p className="font-medium text-gray-900">
          {item.user} — {item.location}
        </p>
        <p>
          {item.room} • {item.nights} diárias • {item.guests} pessoa(s)
        </p>
      </div>
    </div>
  );
};

export default FeedbackCard;
