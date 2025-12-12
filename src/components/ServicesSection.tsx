import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { CreditCard, Clock, Truck } from "lucide-react";

const ServicesSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: CreditCard,
      key: "payment",
    },
    {
      icon: Clock,
      key: "service",
    },
    {
      icon: Truck,
      key: "delivery",
    },
  ];

  return (
    <section id="services" className="py-24 bg-construction-dark text-primary-foreground">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            {t("services.title")}
          </span>
          <h2 className="section-heading text-primary-foreground mt-2 mb-4">
            {t("services.subtitle")}
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            {t("services.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                <feature.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-primary-foreground mb-3">
                {t(`services.features.${feature.key}.title`)}
              </h3>
              <p className="text-primary-foreground/70">
                {t(`services.features.${feature.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
