"use client";

import brivannaData from "@/app/data/brivanna.json";
import dayjs from "dayjs";
import { Instagram, Mail, MapPin, Phone, PhoneIcon } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { whatsappMessage } from "../helpers";
import { Button } from "./ui/button";

const Footer = () => {
  const currentYear = dayjs().year();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#111111] text-white border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Image
              src="/brivanna_white_logo.svg"
              alt="Hotel Brivanna"
              width={120}
              height={40}
              className="w-28 h-auto"
              priority
            />
            <p className="text-white/60 text-sm leading-relaxed font-light">
              Experiência exclusiva e conforto premium. Recepção disponível 24
              horas para o seu melhor atendimento.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-serif text-white tracking-wide mb-6">
              Fale Conosco
            </h4>
            <div className="space-y-4 text-sm text-white/70 font-light">
              <a className="flex items-center gap-3" href={whatsappMessage()}>
                <Phone size={16} className="text-[#ca993d]" />
                <span className="hover:text-white transition-colors cursor-pointer">
                  {brivannaData.phone}
                </span>
              </a>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#ca993d]" />
                <span className="hover:text-white transition-colors cursor-pointer">
                  {brivannaData.email}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif text-white tracking-wide mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3 flex flex-col items-start">
              {["inicio", "quartos", "sobre", "localizacao"].map((item) => (
                <li key={item}>
                  <Button
                    variant="link"
                    onClick={() => scrollToSection(item)}
                    className="h-auto p-0 text-white/70 text-sm font-light hover:text-[#ca993d] transition-colors capitalize"
                  >
                    {item === "inicio"
                      ? "Início"
                      : item === "localizacao"
                        ? "Localização"
                        : item}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif text-white tracking-wide mb-6">
              Localização
            </h4>
            <div className="space-y-5 text-sm text-white/70 font-light">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#ca993d] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{brivannaData.address}</span>
              </div>
              <div className="flex gap-3 pt-2">
                {[PhoneIcon, Instagram].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[#ca993d]/10 hover:border-[#ca993d]/30 transition-all group"
                  >
                    <Icon
                      size={16}
                      className="text-white group-hover:text-[#ca993d] transition-colors"
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/40 font-light">
          <p>© {currentYear} Hotel Brivanna — Todos os direitos reservados</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#ca993d] transition-colors cursor-pointer">
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
