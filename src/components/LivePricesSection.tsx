import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { TrendingUp, Clock } from "lucide-react";

const priceData = [
  { product: "Fly Ash Brick [7x14x4 inch]", unit: "per 1", price: "₹16", updated: "Available" },
  { product: "Fly Ash Brick [9x14x4 inch]", unit: "per 1", price: "₹18", updated: "Available" },
  { product: "Altratech Cement (50kg)", unit: "per bag", price: "₹340", updated: "Available" },
  // { product: "Altratech Whetdher Cement", unit: "per bag", price: "₹400", updated: "3 hrs ago" },
 /* { product: "Sand", unit: "per trolly 21 inch", price: "₹2100", updated: "1 hr ago" },
  { product: "Stone (20mm)", unit: "per trolly", price: "₹5500", updated: "2 hrs ago" },
  { product: "Fence Poles", unit: "per piece", price: "₹420", updated: "4 hrs ago" },*/
  // { product: "Fence Wire TATA", unit: "per kg", price: "₹110", updated: "3 hrs ago" },
];

const LivePricesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider flex items-center justify-center gap-2">
            <TrendingUp className="w-4 h-4" />
            {t("prices.title")}
          </span>
          <h2 className="section-heading text-foreground mt-2 mb-4">
            {t("prices.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("prices.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl shadow-card border border-border overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-construction-dark text-primary-foreground">
                  <th className="text-left p-4 font-semibold">{t("prices.product")}</th>
                  <th className="text-left p-4 font-semibold">{t("prices.unit")}</th>
                  <th className="text-left p-4 font-semibold">{t("prices.price")}</th>
                  <th className="text-left p-4 font-semibold">{t("prices.updated")}</th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-border hover:bg-secondary/50 transition-colors"
                  >
                    <td className="p-4 font-medium text-foreground">{item.product}</td>
                    <td className="p-4 text-muted-foreground">{item.unit}</td>
                    <td className="p-4 font-semibold text-primary">{item.price}</td>
                    <td className="p-4 text-muted-foreground">
                      <span className="flex items-center gap-1">
                        {item.updated}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <p className="text-center text-muted-foreground text-sm mt-4">
          {t("prices.note")}
        </p>
      </div>
    </section>
  );
};

export default LivePricesSection;
