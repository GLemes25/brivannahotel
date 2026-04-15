"use client";

import { useEffect, useRef, useState } from "react";
import { FeedbacksType } from "../../data/feedbacks/feedbacks";
import FeedbackCard from "./FeedbackCard";

type InfiniteCarouselPropsType = {
  items: FeedbacksType[];
};

const InfiniteCarousel = ({ items }: InfiniteCarouselPropsType) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const duplicated = [...items, ...items];

  useEffect(() => {
    let frame: number;
    let scroll = 0;
    const speed = 0.4;

    const animate = () => {
      if (!isHovered && ref.current) {
        scroll += speed;
        ref.current.scrollLeft = scroll;

        if (scroll >= ref.current.scrollWidth / 2) {
          scroll = 0;
        }
      }

      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, [isHovered]);

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div ref={ref} className="flex gap-6 overflow-x-scroll no-scrollbar pb-8">
        {duplicated.map((item, i) => (
          <FeedbackCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
