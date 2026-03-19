"use client";
import { Facebook, Heart, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
    <footer className="relative bg-secondary/50 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">
                  H
                </span>
              </div>
              <div className="flex flex-col">
                <span
                  className="text-foreground tracking-wide"
                  style={{ fontSize: "1.125rem", fontWeight: 600 }}
                >
                  Hotel Brivanna
                </span>
                <span
                  className="text-muted-foreground"
                  style={{ fontSize: "0.75rem", fontWeight: 300 }}
                >
                  Campo Grande
                </span>
              </div>
            </div>
            <p
              className="text-muted-foreground leading-relaxed"
              style={{ fontSize: "0.9375rem", fontWeight: 300 }}
            >
              Conforto, praticidade e localização privilegiada para
              profissionais exigentes.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-4">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-primary/10 border border-primary/30 rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
              >
                <Facebook
                  size={18}
                  className="text-primary group-hover:text-primary-foreground transition-colors"
                />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-primary/10 border border-primary/30 rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
              >
                <Instagram
                  size={18}
                  className="text-primary group-hover:text-primary-foreground transition-colors"
                />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-foreground mb-4"
              style={{ fontSize: "1.0625rem", fontWeight: 600 }}
            >
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  style={{ fontSize: "0.9375rem", fontWeight: 300 }}
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("quartos")}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  style={{ fontSize: "0.9375rem", fontWeight: 300 }}
                >
                  Quartos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  style={{ fontSize: "0.9375rem", fontWeight: 300 }}
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("localizacao")}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  style={{ fontSize: "0.9375rem", fontWeight: 300 }}
                >
                  Localização
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  style={{ fontSize: "0.9375rem", fontWeight: 300 }}
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-foreground mb-4"
              style={{ fontSize: "1.0625rem", fontWeight: 600 }}
            >
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone
                  size={18}
                  className="text-primary mt-0.5 flex-shrink-0"
                />
                <span
                  className="text-muted-foreground"
                  style={{ fontSize: "0.9375rem", fontWeight: 300 }}
                >
                  (67) 3333-4444
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span
                  className="text-muted-foreground break-all"
                  style={{ fontSize: "0.9375rem", fontWeight: 300 }}
                >
                  contato@hotelBrivanna.com.br
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin
                  size={18}
                  className="text-primary mt-0.5 flex-shrink-0"
                />
                <span
                  className="text-muted-foreground"
                  style={{ fontSize: "0.9375rem", fontWeight: 300 }}
                >
                  Rua Principal, 123
                  <br />
                  Centro - Campo Grande, MS
                </span>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4
              className="text-foreground mb-4"
              style={{ fontSize: "1.0625rem", fontWeight: 600 }}
            >
              Informações
            </h4>
            <ul className="space-y-3">
              <li>
                <span
                  className="text-muted-foreground"
                  style={{ fontSize: "0.9375rem", fontWeight: 300 }}
                >
                  Check-in: 14h
                </span>
              </li>
              <li>
                <span
                  className="text-muted-foreground"
                  style={{ fontSize: "0.9375rem", fontWeight: 300 }}
                >
                  Check-out: 12h
                </span>
              </li>
              <li>
                <span
                  className="text-muted-foreground"
                  style={{ fontSize: "0.9375rem", fontWeight: 300 }}
                >
                  Recepção: 24 horas
                </span>
              </li>
              <li>
                <span
                  className="text-muted-foreground"
                  style={{ fontSize: "0.9375rem", fontWeight: 300 }}
                >
                  Wi-Fi gratuito
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p
              className="text-muted-foreground text-center md:text-left"
              style={{ fontSize: "0.875rem", fontWeight: 300 }}
            >
              © {currentYear} Hotel Brivanna. Todos os direitos reservados.
            </p>
            <p
              className="text-muted-foreground flex items-center space-x-2"
              style={{ fontSize: "0.875rem", fontWeight: 300 }}
            >
              <span>Feito com</span>
              <Heart size={14} className="text-accent fill-accent" />
              <span>em Campo Grande, MS</span>
            </p>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-50" />
    </footer>
  );
}
