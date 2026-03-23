"use client";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center text-center">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-foreground mb-2"
              style={{ fontSize: "1.5rem", fontWeight: 600 }}
            >
              <Image
                src="/brivanna_white_logo.svg"
                alt="Brivanna Hotel Logo"
                width={200}
                height={30}
                className="w-50 h-auto"
                priority
              />
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full 
             bg-white/5 border border-white/10 backdrop-blur-sm m-10"
            >
              <MapPin className="w-3.5 h-3.5 text-lime-400" />

              <span className="text-white/70 text-xs tracking-widest uppercase font-medium">
                Campo Grande • MS
              </span>
            </motion.div>

            {/* Loading bar */}
            <div className="w-64 h-1 bg-secondary rounded-full overflow-hidden mx-auto">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="h-full w-1/3 bg-gradient-to-r from-primary to-accent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
