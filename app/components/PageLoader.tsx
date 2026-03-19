"use client";
import { AnimatePresence, motion } from "motion/react";
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
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-primary/30">
                <span
                  className="text-primary-foreground"
                  style={{ fontSize: "2.5rem", fontWeight: 700 }}
                >
                  H
                </span>
              </div>
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-foreground mb-2"
              style={{ fontSize: "1.5rem", fontWeight: 600 }}
            >
              Hotel Central
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground mb-8"
              style={{ fontSize: "0.9375rem", fontWeight: 300 }}
            >
              Campo Grande, MS
            </motion.p>

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
