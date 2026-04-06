"use client";
import { ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const MotionButton = motion(Button);

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <MotionButton
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 25px rgba(184, 150, 10, 0.5)",
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="hidden md:flex fixed bottom-8 right-8 z-50 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg items-center justify-center hover:bg-primary/90 transition-colors duration-300"
          aria-label="Voltar ao topo"
        >
          <ChevronUp size={28} />
        </MotionButton>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
