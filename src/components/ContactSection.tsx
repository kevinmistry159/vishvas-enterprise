import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { contactProfiles } from "@/data/contactProfiles";
import { ReviewSection } from "./ReviewSection";

const ContactSection = () => {
  const { i18n } = useTranslation();

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-heading text-foreground mb-2">
            {i18n.language === 'gu' ? "કોઈપણ પ્રશ્ન માટે કૉલ અથવા વૉટ્સએપ કરો" : "Call or WhatsApp for any query"}
            
          </h2>
          <p className="text-muted-foreground">
            {i18n.language === 'gu' ? "અમારા કોઈપણ વ્યવસાયિક સ્ટાફ તમને સહાય કરશે." : "Any of our business handlers will assist you."}</p>
      
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactProfiles.map((profile, idx) => (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-background rounded-xl p-6 shadow-card border border-border text-center card-hover flex flex-col items-center"
            >
              <img
                src={profile.image}
                alt={profile.name}
                className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-primary"
              />
              <h3 className="font-display text-lg text-foreground mb-2">{i18n.language === 'gu' ? profile.name : profile.name_en}</h3>
              <div className="flex gap-4 mt-2">
                <a
                  href={`https://wa.me/${profile.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 hover:bg-green-600 hover:text-white transition-colors"
                  aria-label="WhatsApp"
                >
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.028-.967-.271-.099-.468-.149-.666.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.373-.025-.522-.075-.149-.666-1.611-.912-2.206-.242-.579-.487-.5-.666-.51-.173-.008-.373-.01-.572-.01-.198 0-.52.075-.792.373-.271.298-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.075.149.198 2.099 3.205 5.077 4.377.711.306 1.263.489 1.695.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.075-.124-.271-.198-.568-.347z" />
                  <path d="M12.004 2.003c-5.523 0-9.997 4.474-9.997 9.997 0 1.762.463 3.484 1.341 4.995l-1.419 5.188a1.001 1.001 0 0 0 1.243 1.243l5.188-1.419a9.953 9.953 0 0 0 4.995 1.341c5.523 0 9.997-4.474 9.997-9.997s-4.474-9.997-9.997-9.997zm0 18.001c-1.627 0-3.217-.438-4.584-1.266a1 1 0 0 0-.813-.093l-3.437.94.94-3.437a1 1 0 0 0-.093-.813A7.963 7.963 0 0 1 4.003 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" />
                </svg>
                </a>
                <a
                  href={`tel:+91${profile.phone}`}
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                  aria-label="Call"
                >
                  <Phone className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Floating WhatsApp Button
import React, { useEffect } from "react";

const FloatingWhatsAppButton = () => {
  useEffect(() => {
    // Optionally, add smooth scroll polyfill for older browsers
  }, []);
  const handleClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center animate-bounce"
      aria-label="Contact via WhatsApp"
      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.028-.967-.271-.099-.468-.149-.666.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.373-.025-.522-.075-.149-.666-1.611-.912-2.206-.242-.579-.487-.5-.666-.51-.173-.008-.373-.01-.572-.01-.198 0-.52.075-.792.373-.271.298-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.075.149.198 2.099 3.205 5.077 4.377.711.306 1.263.489 1.695.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.075-.124-.271-.198-.568-.347z" />
        <path d="M12.004 2.003c-5.523 0-9.997 4.474-9.997 9.997 0 1.762.463 3.484 1.341 4.995l-1.419 5.188a1.001 1.001 0 0 0 1.243 1.243l5.188-1.419a9.953 9.953 0 0 0 4.995 1.341c5.523 0 9.997-4.474 9.997-9.997s-4.474-9.997-9.997-9.997zm0 18.001c-1.627 0-3.217-.438-4.584-1.266a1 1 0 0 0-.813-.093l-3.437.94.94-3.437a1 1 0 0 0-.093-.813A7.963 7.963 0 0 1 4.003 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" />
      </svg>
    </button>
  );
};

const ContactSectionWithFloatingButton = () => (
  <>
    <ContactSection />
    <FloatingWhatsAppButton />
  </>
);

export default ContactSectionWithFloatingButton;
