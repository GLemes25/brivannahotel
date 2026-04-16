"use client";

import feedbacksJson from "../../data/feedbacks/feadbacks.json";
import { FeedbacksType } from "../../data/feedbacks/feedbacks";
import InfiniteCarousel from "./infinite-carousel";

const feedbacks: FeedbacksType[] = feedbacksJson as FeedbacksType[];

const Feedbacks = () => {
  return (
    <section className="py-12 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#ca993d]/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-[#ca993d] uppercase tracking-[0.2em] text-xs md:text-sm font-semibold mb-4">
            Avaliações Reais
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-foreground tracking-wide">
            A Experiência de Nossos Hóspedes
          </h3>
          <p className="text-muted-foreground text-sm md:text-base font-light mt-4">
            Feedbacks autênticos coletados do Booking.com
          </p>
        </div>

        <InfiniteCarousel items={feedbacks} />
      </div>
    </section>
  );
};

export default Feedbacks;
