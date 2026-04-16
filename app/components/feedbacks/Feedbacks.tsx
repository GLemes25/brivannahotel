"use client";

import feedbacksJson from "../../data/feedbacks/feadbacks.json";
import { FeedbacksType } from "../../data/feedbacks/feedbacks";
import InfiniteCarousel from "./infinite-carousel";

const feedbacks: FeedbacksType[] = feedbacksJson as FeedbacksType[];

const Feedbacks = () => {
  return (
    <section className="py-15 bg-background2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-light text-white">
            Avaliações dos Hóspedes
          </h2>
          <p className="text-gray-300 text-sm mt-2">
            Feedbacks reais coletados do booking
          </p>
        </div>

        <InfiniteCarousel items={feedbacks} />
      </div>
    </section>
  );
};

export default Feedbacks;
