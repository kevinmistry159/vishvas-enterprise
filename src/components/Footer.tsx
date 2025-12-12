import { useTranslation } from "react-i18next";
import { Facebook, Instagram, ArrowUp } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { href: "#home", label: t("nav.home") },
    { href: "#products", label: t("nav.products") },
    { href: "#material-calculator", label: t("nav.calculation") },
    { href: "#location", label: t("nav.location") },
    { href: "#gallery", label: t("nav.gallery") },
    { href: "#contact", label: t("nav.contact") },
    { href: "#about", label: t("nav.about") },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-construction-dark text-primary-foreground py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-display text-2xl text-primary-foreground">V</span>
              </div>
              <div>
                <h3 className="font-display text-xl">VISHVAS</h3>
                <p className="text-xs text-primary-foreground/60 -mt-1">ENTERPRISE</p>
              </div>
            </div>
            <p className="text-primary-foreground/70">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Back to Top */}
          <div>
            <h4 className="font-display text-lg mb-4">{t("contact.followUs")}</h4>
            <div className="flex gap-3 mb-8">
              <a
                href="https://wa.me/919824474301"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="WhatsApp"
              >
                {/* WhatsApp SVG icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.028-.967-.271-.099-.468-.149-.666.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.373-.025-.522-.075-.149-.666-1.611-.912-2.206-.242-.579-.487-.5-.666-.51-.173-.008-.373-.01-.572-.01-.198 0-.52.075-.792.373-.271.298-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.075.149.198 2.099 3.205 5.077 4.377.711.306 1.263.489 1.695.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.075-.124-.271-.198-.568-.347z" />
                  <path d="M12.004 2.003c-5.523 0-9.997 4.474-9.997 9.997 0 1.762.463 3.484 1.341 4.995l-1.419 5.188a1.001 1.001 0 0 0 1.243 1.243l5.188-1.419a9.953 9.953 0 0 0 4.995 1.341c5.523 0 9.997-4.474 9.997-9.997s-4.474-9.997-9.997-9.997zm0 18.001c-1.627 0-3.217-.438-4.584-1.266a1 1 0 0 0-.813-.093l-3.437.94.94-3.437a1 1 0 0 0-.093-.813A7.963 7.963 0 0 1 4.003 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61584598006077"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/_vishvas_enterprise?igsh=YnFraTFzeWEzZWM0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
              Back to Top
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            {t("footer.copyright")}
          </p>
        </div>
        <div className=" border-primary-foreground/10 mt-4 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm text-yellow-500">
            {t("footer.devloper")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
