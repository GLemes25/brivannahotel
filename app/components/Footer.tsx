"use client";

import { Instagram, Mail, MapPin, Phone, PhoneIcon } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import dayjs from "dayjs";
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
    <footer className="bg-[#000f0e] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-5">
            <Image
              src="https://res.cloudinary.com/dk7zfhbrj/image/upload/v1774557270/brivanna_white_log_e8hg0l.svg"
              alt="Hotel Brivanna"
              width={10}
              height={10}
              className="w-20 h-auto ml-5"
              priority
            />

            <p className="text-white/70 text-md leading-relaxed font-light">
              Recepção 24 horas
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">Fale Conosco</h4>

            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <span>(67) 3333-4444</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <span>contato@hotelbrivanna.com.br</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">Links</h4>

            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Button
                  variant="link"
                  onClick={() => scrollToSection("inicio")}
                  className="hover:text-primary transition h-auto p-0 text-white/70 text-sm font-normal"
                >
                  Início
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  onClick={() => scrollToSection("quartos")}
                  className="hover:text-primary transition h-auto p-0 text-white/70 text-sm font-normal"
                >
                  Quartos
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  onClick={() => scrollToSection("sobre")}
                  className="hover:text-primary transition h-auto p-0 text-white/70 text-sm font-normal"
                >
                  Sobre
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  onClick={() => scrollToSection("contato")}
                  className="hover:text-primary transition h-auto p-0 text-white/70 text-sm font-normal"
                >
                  Contato
                </Button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">Localize o Hotel</h4>

            <div className="space-y-4 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-1" />
                <span>
                  Rua Joaquim Nabuco, 50 <br />
                  Centro - Campo Grande, MS
                </span>
              </div>

              <div className="flex gap-3 pt-2">
                {[PhoneIcon, Instagram].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition"
                  >
                    <Icon size={18} className="text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© {currentYear} Hotel Brivanna — Todos os direitos reservados</p>

          <div className="flex items-center gap-4">
            <span className="hover:text-white cursor-pointer">
              Política de Privacidade
            </span>

            <Image
              src="https://res.cloudinary.com/dk7zfhbrj/image/upload/v1774468002/brivanna_logo_jftfdq.png"
              alt="Brivanna"
              width={90}
              height={20}
              className="w-[90px] h-auto opacity-80 hover:opacity-100 transition mr-[30px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
