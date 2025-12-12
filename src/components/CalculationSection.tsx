import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { MapPin, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";


const LocationSection = () => {
  const { t } = useTranslation();
  return (
    <section id="location" className="py-24 bg-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            {t("location.title", "Visit Us")}
          </span>
          <h2 className="section-heading text-foreground mt-2 mb-4">
            {t("location.heading", "Our Location")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("location.subtitle", "We welcome you to visit our office and factory at the location below. Feel free to drop by during working hours or contact us for directions.")}
          </p>
        </motion.div>
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-card border border-border w-full max-w-3xl h-[400px] lg:h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.5284675120433!2d71.54386257485797!3d24.153192373194628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395b3fed11e8bb49%3A0x8d58692bdca20fd7!2sVishvas%20Enterprise!5e0!3m2!1sen!2sin!4v1765130875492!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vishvas Enterprise Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
