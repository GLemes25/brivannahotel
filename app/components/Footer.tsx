"use client";

import brivannaData from "@/app/data/brivanna.json";
import dayjs from "dayjs";
import { Instagram, Mail, MapPin, Phone, PhoneIcon } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { whatsappMessage } from "../helpers";

const Footer = () => {
  const currentYear = dayjs().year();

  return (
    <footer className="bg-[#111111] text-foreground border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <div className="space-y-6">
            <Image
              src="/brivanna_white_logo.svg"
              alt="Hotel Brivanna"
              width={120}
              height={40}
              className="w-28 h-auto"
              priority
            />
            <p className="text-foreground/60 text-sm leading-relaxed font-light">
              Experiência exclusiva e conforto premium. Recepção disponível 24
              horas para o seu melhor atendimento.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-serif text-foreground tracking-wide mb-6">
              Fale Conosco
            </h4>
            <div className="space-y-4 text-sm text-foreground/70 font-light">
              <a
                className="flex items-center gap-3 group"
                href={whatsappMessage()}
              >
                <Phone size={16} className="text-primary" />
                <span className="group-hover:text-primary transition-colors cursor-pointer">
                  {brivannaData.phone}
                </span>
              </a>
              <div className="flex items-center gap-3 group">
                <Mail size={16} className="text-primary" />
                <span className="group-hover:text-primary transition-colors cursor-pointer">
                  {brivannaData.email}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif text-foreground tracking-wide mb-6">
              Localização
            </h4>
            <div className="space-y-5 text-sm text-foreground/70 font-light">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">{brivannaData.address}</span>
              </div>
              <div className="flex gap-3 pt-2">
                {[PhoneIcon, Instagram].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full border border-foreground/10 bg-foreground/5 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all group"
                  >
                    <Icon
                      size={16}
                      className="text-foreground group-hover:text-primary transition-colors"
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-foreground/40 font-light">
          <p>© {currentYear} Hotel Brivanna — Todos os direitos reservados</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-primary transition-colors cursor-pointer">
              Política de Privacidade
            </span>
            <Image
              src="/brivanna_logo.svg"
              alt="Brivanna"
              width={80}
              height={18}
              className="w-[80px] h-auto opacity-40 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
