
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { categories, Category, SubCategory, ProductDetail } from "@/data/products";
import ProductDetailModal from "./ProductDetailModal";
import { ChevronRight, ArrowLeft, Layers, Cylinder, Package, Mountain, Cable } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layers,
  Cylinder,
  Package,
  Mountain,
  Cable,
};
type ViewMode = "categories" | "subcategories" | "products";

const ProductsSection = () => {
  const { t, i18n } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Get current state from URL params with validation
  const currentCategoryId = searchParams.get('category');
  const currentViewMode = searchParams.get('view') || 'categories';

  // Find the selected category based on URL and validate it exists
  const selectedCategory = currentCategoryId
    ? categories.find(cat => cat.id === currentCategoryId) || null
    : null;

  // If category ID is invalid, redirect to categories view
  useEffect(() => {
    if (currentCategoryId && !selectedCategory) {
      setSearchParams({});
    }
  }, [currentCategoryId, selectedCategory, setSearchParams]);

  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll to products section when navigating
  useEffect(() => {
    if (currentViewMode === 'products' || currentCategoryId) {
      const element = document.getElementById('products');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [currentViewMode, currentCategoryId]);

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      // Force re-render when browser navigation occurs
      const newCategoryId = searchParams.get('category');
      const newViewMode = searchParams.get('view') || 'categories';
      // The component will automatically re-render with new params
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [searchParams]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Close modal with Escape key
      if (event.key === 'Escape' && isModalOpen) {
        handleModalClose();
      }
      // Navigate back with Backspace key when in products view
      else if (event.key === 'Backspace' && currentViewMode === 'products' && !isModalOpen) {
        event.preventDefault();
        handleBack();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, currentViewMode]);

  const handleCategoryClick = (category: Category) => {
    // Update URL with category and view mode
    setSearchParams({ category: category.id, view: 'products' });
  };

  const handleProductClick = (product: ProductDetail) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleBack = () => {
    // Clear category and view params to go back to categories
    setSearchParams({});
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const getBreadcrumb = () => {
    const parts = [t("products.title")];
    if (selectedCategory) parts.push(selectedCategory.name);
    return parts;
  };

  return (
    <section id="products" className="py-24 bg-background">

      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-heading text-foreground mb-4">{i18n.language === 'gu' ? "અમારા ઉત્પાદનો" : "Our Products"}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {i18n.language === 'gu' ? "દરેક પ્રોજેક્ટ માટે મજબૂત અને વિશ્વસનીય પ્રોડક્ટ્સ" : "Strong, reliable construction materials for every project"}
          </p>
        </div>
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          {currentViewMode !== "categories" && (
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("products.back")}
            </button>
          )}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {getBreadcrumb().map((part, index) => (
              <span key={index} className="flex items-center gap-2">
                {index > 0 && <ChevronRight className="w-4 h-4" />}
                <span className={index === getBreadcrumb().length - 1 ? "text-foreground font-medium" : ""}>
                  {part}
                </span>
              </span>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* Categories View */}
          {currentViewMode === "categories" && (
            <motion.div
              key="categories"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
            >
              {categories.map((category, index) => {
                const IconComponent = iconMap[category.icon];
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div
                      className="bg-card rounded-xl overflow-hidden shadow-card border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                      onClick={() => handleCategoryClick(category)}
                    >
                      <div className="flex items-center gap-4 p-6">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                          {IconComponent && <IconComponent className="w-7 h-7 text-primary" />}
                        </div>
                        <div>
                          <h3 className="font-display text-lg text-foreground mb-2">
                            {category.name}
                          </h3>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-muted-foreground text-sm">
                          {category.subCategories.reduce((acc, sub) => acc + sub.products.length, 0)} {t("products.products")}
                        </p>
                        <div className="flex items-center gap-2 mt-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                          {t("products.viewProducts")}
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {/* Products View */}
          {currentViewMode === "products" && selectedCategory && (
            <motion.div
              key="products"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {selectedCategory.subCategories.flatMap(subCategory => subCategory.products).map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleProductClick(product)}
                  className="group cursor-pointer"
                >
                  <div className="bg-card rounded-xl overflow-hidden shadow-card border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <img
                      src={product.image}
                      alt={i18n.language === 'gu' ? product.name_gu || product.name : product.name}
                      className="w-full h-40 object-cover rounded-t-xl"
                    />
                    <div className="p-4">
                      <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                        {i18n.language === 'gu' ? product.name_gu || product.name : product.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {i18n.language === 'gu' ? product.description_gu || product.description : product.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {(i18n.language === 'gu' && product.specifications_gu
                          ? Object.entries(product.specifications_gu)
                          : Object.entries(product.specifications)
                        ).map(([key, value]) => (
                          <span
                            key={key}
                            className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground"
                          >
                            {key}: {value}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                        {i18n.language === 'gu' ? t('products.viewDetails') : 'View Details'}
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <ProductDetailModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={handleModalClose}
        />

        {/* Material Calculator Section */}
        <MaterialCalculatorSectionUI />
      </div>
    </section>
  );
};

// --- Material Calculator Section Implementation ---
import { Calculator, Boxes, Fence } from 'lucide-react';
function MaterialCalculatorSectionUI() {
    const { t } = useTranslation();
    // Helper to get pole products for select
    const poleProducts = categories.find(cat => cat.id === "poles")?.subCategories.flatMap(sub => sub.products) || [];
    const [selectedPoleProductId, setSelectedPoleProductId] = useState(poleProducts[0]?.id || "");
    // Helper to get wire products for select
    const wireProducts = categories.find(cat => cat.id === "wire")?.subCategories.flatMap(sub => sub.products) || [];
    // Default to fencing wire if available
    const defaultWireProduct = wireProducts.find(p => p.id === "wire-fencing") || wireProducts[0];
    const [selectedWireProductId] = useState(defaultWireProduct?.id || "");
  const [activeCalculator, setActiveCalculator] = useState('brick');
  // Helper to get brick products for select
  const brickProducts = categories
    .find(cat => cat.id === "bricks")?.subCategories.flatMap(sub => sub.products) || [];
  const [selectedBrickProductId, setSelectedBrickProductId] = useState(brickProducts[0]?.id || "");

  // Brick Calculator State
  const [brickForm, setBrickForm] = useState({
    wallLength: '',
    wallHeight: '',
    wallThickness: '',
    brickPreset: '14x4',
    customBrickLength: '',
    customBrickHeight: '',
    customBrickWidth: '',
    wastage: '0'
  });
  const [brickResult, setBrickResult] = useState(null);
  const [price, setPrice] = useState<string>("");

  // Pole Calculator State
  const [poleForm, setPoleForm] = useState({
    fenceLength: '',
    poleDistance: ''
  });
  const [poleResult, setPoleResult] = useState(null);

  // Wire Calculator State
  const [wireForm, setWireForm] = useState({
    fenceLength: '',
    wireRows: '',
    wireGauge: '1',
    customGauge: '',
    pricePerKg: ''
  });
  const [wireResult, setWireResult] = useState(null);

  // Brick Calculator Functions
  const handleBrickPresetChange = (preset) => {
    setBrickForm({ ...brickForm, brickPreset: preset });
    setBrickResult(null); // Clear previous result when preset changes
  };

  const calculateBricks = (e) => {
    e.preventDefault();
    const wallLength = parseFloat(brickForm.wallLength) * 12;
    const wallHeight = parseFloat(brickForm.wallHeight) * 12;
    // const wallThickness = parseFloat(brickForm.wallThickness);
    const wastagePercent = parseFloat(brickForm.wastage);
    let brickLength, brickHeight, brickWidth;
    if (brickForm.brickPreset === 'custom') {
      brickLength = parseFloat(brickForm.customBrickLength);
      brickHeight = parseFloat(brickForm.customBrickHeight);
      brickWidth = parseFloat(brickForm.customBrickWidth);
    } else {
      const [l, h, w] = brickForm.brickPreset.split('x').map(Number);
      brickLength = l;
      brickHeight = h;
      brickWidth = w;
    }
    const mortarGap = 1.0;
    const effectiveBrickLength = brickLength + mortarGap;
    const effectiveBrickHeight = brickHeight + mortarGap;
    const wallArea = wallLength * wallHeight;
    const brickArea = effectiveBrickLength * effectiveBrickHeight;
    const bricksNeeded = wallArea / brickArea;
    const totalBricks = Math.ceil(bricksNeeded * (1 + wastagePercent / 100));
    setBrickResult(totalBricks);
  };

  // Pole Calculator Functions
  const calculatePoles = (e) => {
    e.preventDefault();
    const fenceLength = parseFloat(poleForm.fenceLength);
    const poleDistance = parseFloat(poleForm.poleDistance);
    const totalPoles = Math.ceil(fenceLength / poleDistance) + 1;
    setPoleResult(totalPoles);
  };

  // Wire Calculator Functions
  const calculateWire = (e) => {
    e.preventDefault();
    const fenceLength = parseFloat(wireForm.fenceLength);
    const wireRows = parseFloat(wireForm.wireRows);
    const totalLengthFt = fenceLength * wireRows;
    const totalLengthM = totalLengthFt * 0.3048;
    let gaugeValue;
    if (wireForm.wireGauge === 'custom') {
      gaugeValue = parseFloat(wireForm.customGauge);
    } else {
      gaugeValue = parseFloat(wireForm.wireGauge);
    }
    const totalWeight = (totalLengthFt / 10) * gaugeValue;
    let totalCost = null;
    if (wireForm.pricePerKg && parseFloat(wireForm.pricePerKg) > 0) {
      totalCost = totalWeight * parseFloat(wireForm.pricePerKg);
    }
    setWireResult({
      lengthFt: Math.round(totalLengthFt * 10) / 10,
      lengthM: Math.round(totalLengthM * 10) / 10,
      weight: Math.round(totalWeight * 100) / 100,
      cost: totalCost ? Math.round(totalCost * 100) / 100 : null
    });
  };

  return (
    <section id="material-calculator" className="py-20 bg-background mt-16">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-heading text-foreground mb-4">{t('calculator.title')}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('calculator.subtitle')}
          </p>
        </div>

        {/* Calculator Type Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCalculator('brick')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
              activeCalculator === 'brick'
                ? 'bg-primary text-primary-foreground shadow-lg transform scale-105'
                : 'bg-muted text-muted-foreground hover:bg-primary/10'
            }`}
          >
            <Boxes size={20} />
            <span>{t('calculator.wallBrick')}</span>
          </button>
          <button
            onClick={() => setActiveCalculator('pole')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
              activeCalculator === 'pole'
                ? 'bg-primary text-primary-foreground shadow-lg transform scale-105'
                : 'bg-muted text-muted-foreground hover:bg-primary/10'
            }`}
          >
            <Fence size={20} />
            <span>{t('calculator.fencingPole')}</span>
          </button>
          <button
            onClick={() => setActiveCalculator('wire')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
              activeCalculator === 'wire'
                ? 'bg-primary text-primary-foreground shadow-lg transform scale-105'
                : 'bg-muted text-muted-foreground hover:bg-primary/10'
            }`}
          >
            <Cable size={20} />
            <span>{t('calculator.fenceWire')}</span>
          </button>
        </div>

        {/* Brick Calculator */}
        {activeCalculator === 'brick' && (
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-background rounded-2xl shadow-xl p-8 animate-fade-in">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Boxes className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-2xl text-foreground">{t('calculator.wallBrick')} Calculator</h3>
            </div>

            <form onSubmit={calculateBricks} className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-muted-foreground mb-2">{t('calculator.wallLength')}</label>
                  <input
                    type="number"
                    step="0.1"
                    value={brickForm.wallLength}
                    onChange={(e) => setBrickForm({ ...brickForm, wallLength: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-muted-foreground mb-2">{t('calculator.wallHeight')}</label>
                  <input
                    type="number"
                    step="0.1"
                    value={brickForm.wallHeight}
                    onChange={(e) => setBrickForm({ ...brickForm, wallHeight: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                {/* <div>
                  <label className="block text-muted-foreground mb-2">{t('calculator.wallThickness')}</label>
                  <input
                    type="number"
                    step="0.1"
                    value={brickForm.wallThickness}
                    onChange={(e) => setBrickForm({ ...brickForm, wallThickness: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div> */}
              </div>

              <div>
                <label className="block text-muted-foreground mb-2">{t('calculator.brickSize')}</label>
                <select
                  value={brickForm.brickPreset}
                  onChange={(e) => handleBrickPresetChange(e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="14x4x9">{t('calculator.defaultBrick')}</option>
                  <option value="14x4x7">{t('calculator.brick9')}</option>
                  <option value="custom">{t('calculator.custom')}</option>
                </select>
              </div>

              <div className="mt-4">
                <label className="block text-muted-foreground mb-2">{t('Price(ભાવ)') || 'Price (per unit)'}</label>
                <input
                  type="number"
                  step="0.01"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {brickForm.brickPreset === 'custom' && (
                <div className="grid md:grid-cols-3 gap-4 p-4 bg-primary/10 rounded-lg">
                  <div>
                    <label className="block text-muted-foreground mb-2">{t('calculator.brickLength')}</label>
                    <input
                      type="number"
                      step="0.1"
                      value={brickForm.customBrickLength}
                      onChange={(e) => setBrickForm({ ...brickForm, customBrickLength: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-muted-foreground mb-2">{t('calculator.brickHeight')}</label>
                    <input
                      type="number"
                      step="0.1"
                      value={brickForm.customBrickHeight}
                      onChange={(e) => setBrickForm({ ...brickForm, customBrickHeight: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-muted-foreground mb-2">{t('calculator.brickWidth')}</label>
                    <input
                      type="number"
                      step="0.1"
                      value={brickForm.customBrickWidth}
                      onChange={(e) => setBrickForm({ ...brickForm, customBrickWidth: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-muted-foreground mb-2">{t('calculator.wastage')}</label>
                <input
                  type="number"
                  step="0.1"
                  value={brickForm.wastage}
                  onChange={(e) => setBrickForm({ ...brickForm, wastage: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/80 text-primary-foreground py-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Calculator size={20} />
                <span>{t('calculator.calculate')}</span>
              </button>

              {brickResult !== null && (
                <div className="mt-6 p-6 bg-green-50 border-2 border-green-500 rounded-xl animate-slide-in">
                  <h4 className="text-xl text-foreground mb-2">{t('calculator.result')}</h4>
                  <p className="text-3xl text-green-600">
                    {brickResult.toLocaleString()} {t('calculator.bricks')}
                  </p>
                  {/* Show calculated total price if user entered price(s) */}
                  {(() => {
                    const qty = Number(brickResult);
                    const p = price ? Number(price) : NaN;
                    if (!isNaN(p)) {
                      return (
                        <p className="text-lg text-primary mt-2 font-semibold">
                          {t('calculator.estimatedPrice') || 'Estimated Price'}: {`₹${Math.ceil(p * qty)}`}
                        </p>
                      );
                    }
                    return <p className="text-xs text-muted-foreground mt-2">{t('calculator.note')}</p>;
                  })()}
                </div>
              )}
            </form>
          </div>
        )}

        {/* Pole Calculator */}
        {activeCalculator === 'pole' && (
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-background rounded-2xl shadow-xl p-8 animate-fade-in">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Fence className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-2xl text-foreground">{t('calculator.fencingPoleCalculator')}</h3>
            </div>

            <form onSubmit={calculatePoles} className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-muted-foreground mb-2">{t('calculator.fenceLength')}</label>
                  <input
                    type="number"
                    step="0.1"
                    value={poleForm.fenceLength}
                    onChange={(e) => setPoleForm({ ...poleForm, fenceLength: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-muted-foreground mb-2">{t('calculator.distanceBetweenPoles')}</label>
                  <input
                    type="number"
                    step="0.1"
                    value={poleForm.poleDistance}
                    onChange={(e) => setPoleForm({ ...poleForm, poleDistance: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-muted-foreground mb-2">{t('calculator.poleSize')}</label>
                  <select
                    value={selectedPoleProductId}
                    onChange={e => setSelectedPoleProductId(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {poleProducts.map(p => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/80 text-primary-foreground py-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Calculator size={20} />
                <span>{t('calculator.calculate')}</span>
              </button>

              {poleResult !== null && (
                <div className="mt-6 p-6 bg-green-50 border-2 border-green-500 rounded-xl animate-slide-in">
                  <h4 className="text-xl text-foreground mb-2">{t('calculator.result')}</h4>
                  <p className="text-3xl text-green-600">
                    {poleResult} {t('calculator.poles')}
                  </p>
                  <p className="text-lg text-primary mt-2 font-semibold">
                    {t('calculator.estimatedPrice')} {(() => {
                      const prod = poleProducts.find(p => p.id === selectedPoleProductId);
                      if (!prod) return "-";
                      const [min, max] = prod.mrp.replace(/[^\d\-]/g, "").split("-");
                      if (!min || !max) return prod.mrp;
                      return `₹${Math.ceil(Number(min) * poleResult)} - ₹${Math.ceil(Number(max) * poleResult)} ${prod.unit}`;
                    })()}
                  </p>
                </div>
              )}
            </form>
          </div>
        )}

        {/* Wire Calculator */}
        {activeCalculator === 'wire' && (
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-background rounded-2xl shadow-xl p-8 animate-fade-in">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Cable className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-2xl text-foreground">{t('calculator.fenceWireCalculator')}</h3>
            </div>

            <form onSubmit={calculateWire} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-muted-foreground mb-2">{t('calculator.fenceLength')}</label>
                  <input
                    type="number"
                    step="0.1"
                    value={wireForm.fenceLength}
                    onChange={(e) => setWireForm({ ...wireForm, fenceLength: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-muted-foreground mb-2">{t('calculator.numberOfWireRows')}</label>
                  <input
                    type="number"
                    step="1"
                    value={wireForm.wireRows}
                    onChange={(e) => setWireForm({ ...wireForm, wireRows: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-muted-foreground mb-2">{t('calculator.wireGauge')}</label>
                <select
                  value={wireForm.wireGauge}
                  onChange={(e) => setWireForm({ ...wireForm, wireGauge: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="1">{t('calculator.gaugeA')}</option>
                  <option value="0.75">{t('calculator.gaugeB')}</option>
                  <option value="0.5">{t('calculator.gaugeC')}</option>
                  <option value="custom">{t('calculator.custom')}</option>
                </select>
              </div>

              {wireForm.wireGauge === 'custom' && (
                <div className="p-4 bg-primary/10 rounded-lg">
                  <label className="block text-muted-foreground mb-2">{t('calculator.customGauge')}</label>
                  <input
                    type="number"
                    step="0.01"
                    value={wireForm.customGauge}
                    onChange={(e) => setWireForm({ ...wireForm, customGauge: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              )}

              <div>
                <label className="block text-muted-foreground mb-2">{t('calculator.pricePerKg')}</label>
                <input
                  type="number"
                  step="0.01"
                  value={wireForm.pricePerKg}
                  onChange={(e) => setWireForm({ ...wireForm, pricePerKg: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/80 text-primary-foreground py-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Calculator size={20} />
                <span>{t('calculator.calculate')}</span>
              </button>

              {wireResult !== null && (
                <div className="mt-6 p-6 bg-green-50 border-2 border-green-500 rounded-xl animate-slide-in">
                  <h4 className="text-xl text-foreground mb-4">{t('calculator.result')}</h4>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      {t('calculator.totalWireLength')}
                      <span className="text-green-600 ml-2">
                        {wireResult.lengthFt} ft ({wireResult.lengthM} m)
                      </span>
                    </p>
                    <p className="text-muted-foreground">
                      {t('calculator.totalWireWeight')}
                      <span className="text-green-600 ml-2">
                        {wireResult.weight} kg
                      </span>
                    </p>
                    <p className="text-lg text-primary mt-2 font-semibold">
                      {t('calculator.estimatedPrice')} {(() => {
                        const prod = wireProducts.find(p => p.id === selectedWireProductId);
                        if (!prod) return "-";
                        const [min, max] = prod.mrp.replace(/[^\d\-]/g, "").split("-");
                        if (!min || !max) return prod.mrp;
                        return `₹${Math.ceil(Number(min) * wireResult.weight)} - ₹${Math.ceil(Number(max) * wireResult.weight)} ${prod.unit}`;
                      })()}
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        .animate-slide-in {
          animation: slide-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}

export default ProductsSection;