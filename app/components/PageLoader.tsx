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
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
        >
          {/* Background com transparência */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dk7zfhbrj/image/upload/v1774471098/Brivanna_Estabelecimento_ry0h9r.png')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black/80" />
          </div>

          {/* Conteúdo */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-2"
            >
              <Image
                src="/brivanna_white_logo.svg"
                alt="Brivanna Hotel Logo"
                width={200}
                height={30}
                className="w-48 h-auto"
                priority
              />
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full 
              bg-white/10 border border-white/20 backdrop-blur-md m-10"
            >
              <MapPin className="w-3.5 h-3.5 text-lime-400" />

              <span className="text-white/80 text-xs tracking-widest uppercase font-medium">
                Campo Grande • MS
              </span>
            </motion.div>

            {/* Loading bar */}
            <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden mx-auto">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="h-full w-1/3 bg-gradient-to-r from-green-600 to-green-800"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
