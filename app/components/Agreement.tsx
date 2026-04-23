"use client";

import { Handshake } from "lucide-react";
import { motion } from "motion/react";

import { useState } from "react";
import AgreementDialog from "./AgreementDialog";
import { Button } from "./ui/button";

const Agreement = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <section
      id="agreement"
      className="py-8 bg-background2 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-primary uppercase tracking-[0.2em] text-xs md:text-sm font-semibold mb-4 font-serif">
              Para empresas
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-foreground tracking-tight mb-4">
              Sua base estratégica em Campo Grande.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg font-light max-w-md">
              Do executivo em trânsito ao time em campo — estrutura e condições
              exclusivas para empresas que precisam de confiabilidade.
            </p>
            <div className="mt-6 w-10 h-px bg-primary/40" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="relative h-64 lg:h-72 overflow-hidden rounded-2xl"
          >
            <img
              src="https://res.cloudinary.com/dk7zfhbrj/image/upload/v1776354054/negociations_z5hqd8.png"
              alt="Negociação corporativa"
              className="w-full h-full object-cover [mask-image:linear-gradient(to_bottom,black_95%,transparent_100%)] [webkit-mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]"
            />
          </motion.div>
        </div>
      </div>
      <div className="max-w-7xl pt-5 mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl bg-primary/5 border-l-4 border-primary px-8 md:px-12 py-10 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="relative flex items-center justify-center shrink-0">
            <div className="absolute w-14 h-14 rounded-full bg-primary/20 blur-lg" />
            <div className="relative w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Handshake size={24} className="text-primary" />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <p className="text-primary uppercase tracking-[0.2em] text-xs font-semibold mb-1 font-serif">
              Convênio Empresarial
            </p>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight mb-2">
              Torne sua empresa conveniada
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed font-light">
              Tarifas diferenciadas e faturamento direto para toda a sua equipe.
            </p>
          </div>

          <Button
            onClick={() => setIsDialogOpen(true)}
            className="shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-semibold uppercase tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 font-serif px-8 py-6"
          >
            Solicitar Convênio
          </Button>
        </motion.div>
      </div>

      <AgreementDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  );
};

export default Agreement;
