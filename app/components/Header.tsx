"use client";
import { NAV_LINKS } from "@/app/data/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const MotionButton = motion(Button);

const Header = () => {
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
            ? "bg-background/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/brivanna_logo.svg"
                alt="Brivanna Hotel Logo"
                width={260}
                height={60}
                className="h-auto w-[200px]"
                priority
              />
            </motion.div>

            <nav className="hidden md:flex items-center space-x-4">
              {NAV_LINKS.map((link) => (
                <Button
                  key={link.id}
                  variant="nothing"
                  onClick={() => scrollToSection(link.id)}
                  className="text-foreground hover:text-primary hover:bg-transparent transition-colors duration-200 h-auto px-0 py-0 text-[13px] font-normal"
                >
                  {link.label}
                </Button>
              ))}
              <MotionButton
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(202, 153, 61, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("booking-widget")}
                className="bg-primary text-primary-foreground hover:brightness-110 text-[15px] font-medium"
              >
                Reserve agora
              </MotionButton>
            </nav>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground hover:text-primary hover:bg-transparent transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </Button>
          </div>
        </div>
      </motion.header>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-md border-b border-foreground/10"
        >
          <nav className="flex flex-col px-6 py-6 gap-5">
            {NAV_LINKS.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                onClick={() => {
                  scrollToSection(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className="text-foreground/90 hover:text-primary hover:bg-foreground/5 transition-all duration-200 text-left justify-start py-3 px-0 h-auto text-[17px] font-normal"
              >
                {link.label}
              </Button>
            ))}

            <MotionButton
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                scrollToSection("booking-widget");
                setIsMobileMenuOpen(false);
              }}
              className="mt-4 w-full bg-primary text-primary-foreground py-3 rounded-md shadow-lg active:scale-[0.98] text-base font-medium"
            >
              Reservar agora
            </MotionButton>
          </nav>
        </motion.div>
      )}
    </>
  );
};

export default Header;
