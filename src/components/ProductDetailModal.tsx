import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ProductDetail } from "@/data/products";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";


interface ProductDetailModalProps {
  product: ProductDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

// WhatsApp and phone info (can be moved to config if needed)
const WHATSAPP_NUMBER = '919824474301';
const PHONE_NUMBER = '+91 9824474301';

const ProductDetailModal = ({ product, isOpen, onClose }: ProductDetailModalProps) => {
  const { i18n, t } = useTranslation();
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display text-foreground">
            {i18n.language === 'gu' ? product.name_gu || product.name : product.name}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {i18n.language === 'gu' ? product.description_gu || product.description : product.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          <div className="relative h-56 rounded-xl overflow-hidden mb-6">
            <img
              src={product.image}
              alt={i18n.language === 'gu' ? product.name_gu || product.name : product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-construction-dark/40 to-transparent" />
          </div>

          {/* MRP and Contact Info */}
          <div className="mb-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-2">
              <span className="text-lg font-semibold text-primary">
                {i18n.language === 'gu' ? 'ભાવ:' : 'Price:'} {product.mrp} <span className="text-xs text-muted-foreground">{i18n.language === 'gu' ? product.unit_gu || product.unit : product.unit}</span>
              </span>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-green-500 text-white hover:bg-green-600 transition-colors text-sm font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.028-.967-.271-.099-.468-.149-.666.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.373-.025-.522-.075-.149-.666-1.611-.912-2.206-.242-.579-.487-.5-.666-.51-.173-.008-.373-.01-.572-.01-.198 0-.52.075-.792.373-.271.298-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.075.149.198 2.099 3.205 5.077 4.377.711.306 1.263.489 1.695.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.075-.124-.271-.198-.568-.347z" />
                  <path d="M12.004 2.003c-5.523 0-9.997 4.474-9.997 9.997 0 1.762.463 3.484 1.341 4.995l-1.419 5.188a1.001 1.001 0 0 0 1.243 1.243l5.188-1.419a9.953 9.953 0 0 0 4.995 1.341c5.523 0 9.997-4.474 9.997-9.997s-4.474-9.997-9.997-9.997zm0 18.001c-1.627 0-3.217-.438-4.584-1.266a1 1 0 0 0-.813-.093l-3.437.94.94-3.437a1 1 0 0 0-.093-.813A7.963 7.963 0 0 1 4.003 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" />
                </svg>
                {i18n.language === 'gu' ? 'વોટ્સએપ કરો' : 'WhatsApp Now'}
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary text-white hover:bg-primary/80 transition-colors text-sm font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.789 1.106l1.387 2.773a2 2 0 01-.327 2.327l-.893.893a16.001 16.001 0 006.586 6.586l.893-.893a2 2 0 012.327-.327l2.773 1.387A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2h1z" />
                </svg>
                {i18n.language === 'gu' ? 'કોલ કરો' : 'Call Now'}
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-2">{i18n.language === 'gu' ? 'ચોક્કસ ભાવ અને વાતચીત માટે વોટ્સએપ અથવા કોલ કરો.' : 'Note: WhatsApp or call now for exact price and negotiation.'}</p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full" />
              {i18n.language === 'gu' ? t('products.specifications') : 'Specifications'}
            </h4>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {(i18n.language === 'gu' && product.specifications_gu
                ? Object.entries(product.specifications_gu)
                : Object.entries(product.specifications)
              ).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-muted/50 rounded-lg p-4 border border-border hover:border-primary/50 transition-colors"
                >
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    {key}
                  </p>
                  <p className="text-foreground font-medium text-lg">
                    {value}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="mt-6 pt-4 border-t border-border">
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              {i18n.language === 'gu' ? t('products.premiumQuality') : 'Premium Quality'}
            </Badge>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;
