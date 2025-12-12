import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "gu" : "en");
  };

  const navLinks = [
    { href: "#home", label: t("nav.home") },
    { href: "#products", label: t("nav.products") },
    { href: "#material-calculator", label: t("nav.calculation") },
    { href: "#location", label: t("nav.location") },
    { href: "#gallery", label: t("nav.gallery") },
    { href: "#contact", label: t("nav.contact") },
    { href: "#about", label: t("nav.about") },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-gray-300 backdrop-blur-md shadow-card"
          : "bg-transparent"
      )}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            {/* <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center "> */}
              {/* <span className="font-display text-2xl text-primary-foreground">V</span> */}
              <img
                src="../../public/logo-removebg-preview.png"
                alt="Vishvas Enterprise Logo"
                className="w-14 h-14 object-contain"
              />
            {/* </div> */}
            <div className="hidden sm:block">
              <h1 className="font-display text-xl tracking-wide text-orange-500 ">
                VISHVAS
              </h1>
              <p className="text-sm text-white -mt-1">ENTERPRISE</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-lg font-medium text-orange-500 hover:text-primary transition-colors rounded-md hover:bg-primary/20"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="gap-2 border-primary/30 hover:bg-primary/10 hover:border-primary"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">
                {i18n.language === "en" ? "ગુજરાતી" : "English"}
              </span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              // variant="ghost"
              size="icon"
              className="lg:hidden bg-transparent hover:bg-primary/20"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-orange-500 font-extrabold" />
              ) : (
                <Menu className="w-6 h-6 text-orange-500 font-extrabold" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-fade-in bg-gray-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 font-bold text-orange-500 hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
