"use client";

import { useEffect, useRef, useState } from "react";
import { type FeedbacksType } from "@/app/data/feedbacks";
import FeedbackCard from "./FeedbackCard";

type InfiniteCarouselPropsType = {
  items: FeedbacksType[];
};

const InfiniteCarousel = ({ items }: InfiniteCarouselPropsType) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollPos = useRef(0);

  const duplicated = [...items, ...items];

  useEffect(() => {
    let frame: number;
    const speed = 0.5;

    const animate = () => {
      if (!isPaused && ref.current) {
        scrollPos.current += speed;

        if (scrollPos.current >= ref.current.scrollWidth / 2) {
          scrollPos.current = 0;
        }

        ref.current.scrollLeft = scrollPos.current;
      }
      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, [isPaused]);

  const handleManualScroll = () => {
    if (ref.current) {
      scrollPos.current = ref.current.scrollLeft;
    }
  };

  return (
    <div
      className="overflow-hidden w-full relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div
        ref={ref}
        onScroll={handleManualScroll}
        className="flex gap-6 overflow-x-auto pb-8 pt-4 px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {duplicated.map((item, i) => (
          <FeedbackCard key={`${item.user}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
