"use client";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#102c31]/95 backdrop-blur-md shadow-lg border-b border-primary/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-xl">H</span>
              </div>
              <div className="flex flex-col">
                <span
                  className="text-foreground tracking-wide"
                  style={{ fontSize: "1.125rem", fontWeight: 600 }}
                >
                  Hotel Central
                </span>
                <span
                  className="text-muted-foreground"
                  style={{ fontSize: "0.75rem", fontWeight: 300 }}
                >
                  Campo Grande
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-foreground hover:text-primary transition-colors duration-200"
                style={{ fontSize: "0.9375rem", fontWeight: 400 }}
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("quartos")}
                className="text-foreground hover:text-primary transition-colors duration-200"
                style={{ fontSize: "0.9375rem", fontWeight: 400 }}
              >
                Quartos
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-foreground hover:text-primary transition-colors duration-200"
                style={{ fontSize: "0.9375rem", fontWeight: 400 }}
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("localizacao")}
                className="text-foreground hover:text-primary transition-colors duration-200"
                style={{ fontSize: "0.9375rem", fontWeight: 400 }}
              >
                Localização
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-foreground hover:text-primary transition-colors duration-200"
                style={{ fontSize: "0.9375rem", fontWeight: 400 }}
              >
                Contato
              </button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(184, 150, 10, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contato")}
                className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md"
                style={{ fontSize: "0.9375rem", fontWeight: 500 }}
              >
                Reservar agora
              </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 left-0 right-0 z-40 md:hidden bg-[#102c31]/98 backdrop-blur-lg border-b border-primary/20"
        >
          <nav className="flex flex-col px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors text-left py-2"
              style={{ fontSize: "1rem", fontWeight: 400 }}
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("quartos")}
              className="text-foreground hover:text-primary transition-colors text-left py-2"
              style={{ fontSize: "1rem", fontWeight: 400 }}
            >
              Quartos
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-colors text-left py-2"
              style={{ fontSize: "1rem", fontWeight: 400 }}
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("localizacao")}
              className="text-foreground hover:text-primary transition-colors text-left py-2"
              style={{ fontSize: "1rem", fontWeight: 400 }}
            >
              Localização
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors text-left py-2"
              style={{ fontSize: "1rem", fontWeight: 400 }}
            >
              Contato
            </button>

            <button
              onClick={() => scrollToSection("contato")}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg mt-4 shadow-md"
              style={{ fontSize: "1rem", fontWeight: 500 }}
            >
              Reservar agora
            </button>
          </nav>
        </motion.div>
      )}
    </>
  );
}
