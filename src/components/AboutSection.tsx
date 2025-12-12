import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Target, Eye, Rocket } from "lucide-react";

const AboutSection = () => {
  const { t } = useTranslation();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="section-container">
        {/* Main About */}
        <motion.div {...fadeInUp} className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            {t("about.title")}
          </span>
          <h2 className="section-heading text-foreground mt-2 mb-6">
            {t("about.heading")}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            {t("about.description")}
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed mt-4">
            {t("about.paragraph2")}
          </p>
        </motion.div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Vision Card */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="bg-background rounded-xl p-8 shadow-card card-hover border border-border"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-3xl text-foreground mb-4">
              {t("about.vision.title")}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t("about.vision.content")}
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="bg-background rounded-xl p-8 shadow-card card-hover border border-border"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-3xl text-foreground mb-4">
              {t("about.mission.title")}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t("about.mission.content")}
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { value: "8+", label: "Years Experience" },
            { value: "3000+", label: "Happy Customers" },
            { value: "50+", label: "Delivery Locations" },
            { value: "8+", label: "Product Categories" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-4xl md:text-5xl text-primary mb-2">
                {stat.value}
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
