export interface ProductDetail {
  id: string;
  name: string;
  name_gu?: string;
  description: string;
  description_gu?: string;
  image: string;
  specifications: Record<string, string>;
  specifications_gu?: Record<string, string>;
  mrp: string;
  unit: string;
  unit_gu?: string;
}

export interface SubCategory {
  id: string;
  name: string;
  products: ProductDetail[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  image: string;
  subCategories: SubCategory[];
}

import img7brick from "../photos/7brick.jpg";
import img9bricks from "../photos/9bricks.jpg";
import img7bricksss from "../photos/7bricksss.jpg";
import img9bricksss from "../photos/9bricksss.jpg";
import img6poles from "../photos/6poles.jpg";
import img8poles from "../photos/8poles.jpg";
import img10feet from "../photos/10feet.jpeg";  
import imgDownload from "../photos/download.jpeg";
import imgCementCard from "../photos/cement-card.png";
import imgUtech from "../photos/utech.jpg";
import imgSand from "../photos/sand.jpg";
import imgRisand from "../photos/risand.jpg";
import imgKapchi from "../photos/kapchi.avif";
import imgKapchi2 from "../photos/kapchi2.avif";
import imgCwire from "../photos/cwire.webp";
import imgWire from "../photos/wire.jpg";
import imgJali from "../photos/jali.jpg";

export const categories: Category[] = [
  {
    id: "bricks",
    name: "Bricks",
    icon: "Layers",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    subCategories: [
      {
        id: "7x14x4-without-stone",
        name: "7×14×4 (Without Stone)",
        products: [
          {
            id: "brick-7x14x4-ws-standard",
            name: "Standard Fly Ash Brick 7×14×4 inch",
            name_gu: "ફ્લાય એશ બ્લોક ( ખંડા ) 7×14×4 ઇંચ",
            description: "The 7×14×4 Fly Ash Block is a strong, high-quality block with accurate dimensions and a smooth finish. Made using eco-friendly materials, it is ideal for partition walls, small structures, and fast construction work..",
            description_gu: "7×14×4 ફ્લાય એશ બ્લોક(ખંડા) મજબૂત, ઉચ્ચ ગુણવત્તાવાળો બ્લોક છે જેમાં ચોક્કસ માપ અને સ્મૂથ ફિનિશ છે. ઇકો-ફ્રેન્ડલી સામગ્રીથી બનેલો, આ બ્લોક પાર્ટિશન વોલ, નાના માળખાં અને ઝડપી બાંધકામ માટે આદર્શ છે.",
            image: img7brick,
            mrp: "₹17-20",
            unit: "per piece",
            unit_gu: "પ્રતિ પીસ",
            specifications: {
              "Cement %": "12%",
              "Sand %": "35%",
              "Fly Ash %": "53%",
              "Stone %": "0%",
              "Spraying water Days": "14 days",
              "Size": "7 × 14 × 4 inches",
              "Weight": "13~ KG"
            },
            specifications_gu: {
              "સિમેન્ટ %": "12%",
              "રેત %": "35%",
              "ફ્લાય એશ %": "53%",
              "કપચી  %": "0%",
              "પાણી નો છંટકાવ સમય": "14 દિવસ",
              "માપ": "7 × 14 × 4 ઇંચ",
              "વજન": "13~ કિગ્રા"
            }
          }
        ]
      },
      {
        id: "9x14x4-without-stone",
        name: "9×14×4 (Without Stone)",
        products: [
          {
            id: "brick-9x14x4-ws-standard",
            name: "Fly Ash Brick 9×14×4 inch",
            name_gu: "ફ્લાય એશ બ્લોક ( ખંડા ) 9×14×4 ઇંચ",
            description: "The  9×14×4 Fly Ash Block  is strong, accurately sized, and has a smooth finish. Ideal for houses, buildings, and commercial walls, these blocks provide durability, strength, and a premium finish.",
            description_gu: "9×14×4 ફ્લાય એશ બ્લોક(ખંડા) મજબૂત છે, ચોક્કસ કદવાળું છે અને સ્મૂથ ફિનિશ ધરાવે છે. મકાનો, ઇમારતો અને વ્યાપારી દીવાલો માટે આદર્શ, આ બ્લોક્સ ટકાઉપણું, મજબૂતાઈ અને પ્રીમિયમ ફિનિશ આપે છે.",
            image: img9bricks,
            mrp: "₹17-21",
            unit:"per piece",
            unit_gu: "પ્રતિ પીસ",
            specifications: {
              "Cement %": "14%",
              "Sand %": "33%",
              "Fly Ash %": "53%",
              "Stone %": "0%",
              "Spraying water Days": "14 days",
              "Size": "9 × 14 × 4 inches",
              "Weight": "17~ KG"
            },
            specifications_gu: {
              "સિમેન્ટ %": "14%",
              "રેત %": "33%",
              "ફ્લાય એશ %": "53%",
              "કપચી  %": "0%",
              "પાણી નો છંટકાવ સમય": "14 દિવસ",
              "માપ": "9 × 14 × 4 ઇંચ",
              "વજન": "17~ કિગ્રા"
            }
          }
        ]
      },
      {
        id: "7x14x4-with-stone",
        name: "7×14×4 (With Stone)",
        products: [
          {
            id: "brick-7x14x4-s-standard",
            name: "Aggregate fly ash Brick 7×14×4 inch",
            name_gu: "કપચી વાળા ફ્લાય એશ બ્લોક ( ખંડા ) 7×14×4 ઇંચ",
            description: "The 7×14×4 Fly Ash Block (With Stone) offers extra strength and durability due to the added stone aggregate. With accurate dimensions and a smooth finish, this block is ideal for strong partition walls, small constructions, and long-lasting structural work.",
            description_gu: "7×14×4 ફ્લાય એશ બ્લોક (પથ્થર સાથે) વધારાના પથ્થરના એગ્રીગેટને કારણે વધારાની મજબૂતાઈ અને ટકાઉપણું આપે છે. ચોક્કસ માપ અને સ્મૂથ ફિનિશ સાથે, આ બ્લોક મજબૂત પાર્ટિશન દીવાલો, નાના બાંધકામો અને લાંબા સમય સુધી ટકાઉ માળખાકીય કામ માટે આદર્શ છે.",
            image: img7bricksss,
            mrp: "₹17-20",
            unit:"per piece",
            unit_gu: "પ્રતિ પીસ",
            specifications: {
              "Cement %": "15%",
              "Sand %": "25%",
              "Fly Ash %": "40%",
              "Stone %": "20%",
              "Spraying water Days": "21 days",
              "Size": "7 × 14 × 4 inches",
              "Weight": "14~ KG"
            },
            specifications_gu: {
              "સિમેન્ટ %": "15%",
              "રેત %": "25%",
              "ફ્લાય એશ %": "40%",
              "કપચી %": "20%",
              "પાણી નો છંટકાવ સમય": "21 દિવસ",
              "માપ": "7 × 14 × 4 ઇંચ",
              "વજન": "14~ કિગ્રા"
            }
          }
        ]
      },
      {
        id: "9x14x4-with-stone",
        name: "9×14×4 (With Stone)",
        products: [
          {
            id: "brick-9x14x4-s-standard",
            name: "Aggregate fly ash Brick 9×14×4 inch",
            name_gu: "કપચી વાળા ફ્લાય એશ બ્લોક ( ખંડા ) 9×14×4 ઇંચ",
            description: "The 9×14×4 Fly Ash Block (With Stone) delivers superior strength, stability, and long-lasting durability. Made with accurate dimensions and a smooth finish, it is ideal for strong walls, commercial projects, and heavy-duty construction work.",
            description_gu: "9×14×4 ફ્લાય એશ બ્લોક (કપચી સાથે) ઉત્તમ મજબૂતાઈ, સ્થિરતા અને લાંબા સમયનું ટકાઉપણું આપે છે. ચોક્કસ માપ અને સ્મૂથ ફિનિશ સાથે બનેલો, આ મજબૂત દીવાલો, વ્યાપારી પ્રોજેક્ટ્સ અને હેવી-ડ્યુટી બાંધકામ કામ માટે આદર્શ છે.",
            image: img9bricksss,
            mrp: "₹18-22",
            unit:"per piece",
            unit_gu: "પ્રતિ પીસ",
            specifications: {
              "Cement %": "16%",
              "Sand %": "24%",
              "Fly Ash %": "38%",
              "Stone %": "22%",
              "Spraying water Days": "21 days",
              "Size": "9 × 14 × 4 inches",
              "Weight": "18~ KG"
            },
            specifications_gu: {
              "સિમેન્ટ %": "16%",
              "રેત %": "24%",
              "ફ્લાય એશ %": "38%",
              "કપચી  %": "22%",
              "પાણી નો છંટકાવ સમય": "21 દિવસ",
              "માપ": "9 × 14 × 4 ઇંચ",
              "વજન": "18~ કિગ્રા"
            }
          }
        ]
      }
    ]
  },
  {
    id: "poles",
    name: "Poles",
    icon: "Cylinder",
    image: "https://images.unsplash.com/photo-1597424216809-3ba9864aeb18?w=600&h=400&fit=crop",
    subCategories: [
      {
        id: "pole-6ft",
        name: "6 Feet Poles",
        products: [
          {
            id: "pole-6ft-standard",
            name: "6 Feet Concrete Pole",
            name_gu: "6 ફૂટ  થાંભલા",
            description: "Compact concrete pole perfect for residential fencing and garden boundaries. Easy to install and highly durable against weather conditions.",
            description_gu: "RCC થાંભલો જે રહેણાંક વાડ અને બગીચાની સીમાઓ માટે સંપૂર્ણ છે. સરળતાથી સ્થાપિત થાય છે અને હવામાનની સ્થિતિઓ સામે અત્યંત ટકાઉ છે.",
            image: img6poles,
            mrp: "₹230-350",
            unit:"per pole",
            unit_gu: "પ્રતિ થાંભલો",
            specifications: {
              "Cement %": "25%",
              "Sand %": "35%",
              "Stone %": "40%",
              "Spraying water": "7 days",
              "Length": "6 feet (1.83m)",
              "Diameter": "5x5 inches",
              "Weight": "85~ KG"
            },
            specifications_gu: {
              "સિમેન્ટ %": "25%",
              "રેત %": "35%",
              "કપચી  %": "40%",
              "પાણી નો છંટકાવ સમય": "7 દિવસ",
              "લંબાઈ": "6 ફૂટ (1.83મી)",
              "પહોળાઇ": "5x5 ઇંચ",
              "વજન": "85~ કિગ્રા"
            }
          }
        ]
      },
      {
        id: "pole-8ft",
        name: "8 Feet Poles",
        products: [
          {
            id: "pole-8ft-standard",
            name: "8 Feet Concrete Pole",
            name_gu: "8 ફૂટ થાંભલા",
            description: "8 FEET height concrete pole for farm fencing and commercial boundaries. Excellent strength-to-weight ratio and corrosion resistant.",
            description_gu: "8 ફૂટ ઊંચાઈવાળો RCC થાંભલો જે ખેતરની વાડ અને વ્યાપારી સીમાઓ માટે છે. ઉત્તમ મજબૂતાઈ-થી-વજન ગુણોત્તર અને કાટ પ્રતિરોધક.",
            image: img8poles,
            mrp: "₹390-460",
            unit:"per pole",
            unit_gu: "પ્રતિ થાંભલો",
            specifications: {
              "Cement %": "25%",
              "Sand %": "35%",
              "Stone %": "40%",
              "Water Spread": "7 days",
              "Length": "8 feet (2.44m)",
              "Diameter": "5x5 inches",
              "Weight": "100 KG"
            },
            specifications_gu: {
              "સિમેન્ટ %": "25%",
              "રેત %": "35%",
              "કપચી %": "40%",
              "પાણી નો છંટકાવ સમય": "7 દિવસ",
              "લંબાઈ": "8 ફૂટ (2.44મી)",
              "પહોળાઇ": "5x5 ઇંચ",
              "વજન": "100 કિગ્રા"
            }
          }
        ]
      },
      {
        id: "pole-10ft",
        name: "10 Feet Poles",
        products: [
          {
            id: "pole-10ft-standard",
            name: "10 Feet Concrete Pole",
            name_gu: "10 ફૂટ થાંભલો",
            description: "Tall concrete pole for agricultural and industrial fencing applications. Maximum security and wind resistance for exposed areas.",
            description_gu: "ઊંચો કોંક્રિટ થાંભલો જે કૃષિ અને ઔદ્યોગિક વાડ એપ્લિકેશન્સ માટે છે. ખુલ્લા વિસ્તારોમાં મહત્તમ સુરક્ષા અને પવન પ્રતિરોધ.",
            image: img10feet,
            mrp: "₹430-550",
            unit:"per pole",
            unit_gu: "પ્રતિ થાંભલો",
            specifications: {
              "Cement %": "27%",
              "Sand %": "33%",
              "Stone %": "40%",
              "Spraying water": "10 days",
              "Length": "10 feet (3.05m)",
              "Diameter": "5x5 inches",
              "Weight": "130 KG"
            },
            specifications_gu: {
              "સિમેન્ટ %": "27%",
              "રેત %": "33%",
              "કપચી %": "40%",
              "પાણી ફેલાવવાનો સમય": "10 દિવસ",
              "લંબાઈ": "10 ફૂટ (3.05મી)",
              "પહોળાઇ": "5x5 ઇંચ",
              "વજન": "130 કિગ્રા"
            }
          }
        ]
      }
    ]
  },
  {
    id: "cement",
    name: "Cement",
    icon: "Package",
    image: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=600&h=400&fit=crop",
    subCategories: [
      {
        id: "opc-43",
        name: "OPC 43 Grade",
        products: [
          {
            id: "cement-opc-43",
            name: "ultratech wether Cement",
            name_gu: "અલ્ટ્રાટેક વેધર સિમેન્ટ",
            description: "Ordinary Portland Cement 43 Grade suitable for general construction, plastering, and non-structural work. Reliable and cost-effective choice.",
            description_gu: "ઓર્ડિનરી પોર્ટલેન્ડ સિમેન્ટ 43 ગ્રેડ જે સામાન્ય બાંધકામ, પ્લાસ્ટરિંગ અને બિન-માળખાકીય કામ માટે યોગ્ય છે. વિશ્વસનીય અને ખર્ચ-અસરકારક પસંદગી.",
            image: imgDownload,
            mrp: "₹350-450",
            unit:"per bag",
            unit_gu: "પ્રતિ બેગ",
            specifications: {
              "Grade": "OPC 43",
              "Compressive Strength": "43 MPa at 28 days",
              "Initial Setting Time": "210 minutes",
              "Final Setting Time": "600 minutes",
              "Fineness": "400 m²/kg",
              "Bag Weight": "50 KG"
            },
            specifications_gu: {
              "ગ્રેડ": "OPC 43",
              "કોમ્પ્રેસિવ સ્ટ્રેન્થ": "28 દિવસે 43 MPa",
              "પ્રારંભિક સેટિંગ સમય": "210 મિનિટ",
              "અંતિમ સેટિંગ સમય": "600 મિનિટ",
              "ફાઇનેસ": "400 m²/kg",
              "બેગ વજન": "50 કિગ્રા"
            }
          }
        ]
      },
      {
        id: "opc-53",
        name: "OPC 53 Grade",
        products: [
          {
            id: "cement-opc-53",
            name: "OPC 53 Grade Ultratech Cement",
            name_gu: "OPC 53 ગ્રેડ અલ્ટ્રાટેક સિમેન્ટ",
            description: "High-strength Ordinary Portland Cement for RCC work, bridges, and high-rise buildings. Superior early strength development.",
            description_gu: "ઉચ્ચ-મજબૂતાઈવાળું ઓર્ડિનરી પોર્ટલેન્ડ સિમેન્ટ જે RCC કામ, પુલ અને ઊંચી ઇમારતો માટે છે. ઉત્તમ પ્રારંભિક મજબૂતાઈ વિકાસ.",
            image: imgCementCard,
            mrp: "₹340-400",
            unit:"per bag",
            unit_gu: "પ્રતિ બેગ",
            specifications: {
              "Grade": "OPC 53",
              "Compressive Strength": "53 MPa at 28 days",
              "Initial Setting Time": "30 minutes",
              "Final Setting Time": "600 minutes",
              "Fineness": "280 m²/kg",
              "Bag Weight": "50 KG"
            },
            specifications_gu: {
              "ગ્રેડ": "OPC 53",
              "કોમ્પ્રેસિવ સ્ટ્રેન્થ": "28 દિવસે 53 MPa",
              "પ્રારંભિક સેટિંગ સમય": "30 મિનિટ",
              "અંતિમ સેટિંગ સમય": "600 મિનિટ",
              "ફાઇનેસ": "280 m²/kg",
              "બેગ વજન": "50 કિગ્રા"
            }
          }
        ]
      },
      {
        id: "ppc",
        name: "PPC",
        products: [
          {
            id: "cement-ppc",
            name: "Ultratech Portland Pozzolana Cement",
            name_gu: "અલ્ટ્રાટેક પોર્ટલેન્ડ પોઝોલાના સિમેન્ટ",
            description: "Eco-friendly cement with fly ash. Excellent for marine construction, mass concreting, and structures exposed to sulfate attack.",
            description_gu: "ફ્લાય એશ સાથેનું ઇકો-ફ્રેન્ડલી સિમેન્ટ. સમુદ્રી બાંધકામ, મોટા પાયાના કોંક્રિટિંગ અને સલ્ફેટ હુમલાના સંપર્કમાં આવતા માળખાં માટે ઉત્તમ.",
            image: imgUtech,
            mrp: "₹340-390",
            unit:"per bag",
            unit_gu: "પ્રતિ બેગ",
            specifications: {
              "Grade": "PPC",
              "Compressive Strength": "33 MPa at 28 days",
              "Initial Setting Time": "30 minutes",
              "Final Setting Time": "600 minutes",
              "Fly Ash Content": "15-35%",
              "Bag Weight": "50 KG"
            },
            specifications_gu: {
              "ગ્રેડ": "PPC",
              "કોમ્પ્રેસિવ સ્ટ્રેન્થ": "28 દિવસે 33 MPa",
              "પ્રારંભિક સેટિંગ સમય": "30 મિનિટ",
              "અંતિમ સેટિંગ સમય": "600 મિનિટ",
              "ફ્લાય એશ કન્ટેન્ટ": "15-35%",
              "બેગ વજન": "50 કિગ્રા"
            }
          }
        ]
      }
    ]
  },
  {
    id: "sand-stone",
    name: "Sand / Crushed Stone",
    icon: "Mountain",
    image: "https://images.unsplash.com/photo-1489659831163-682b5af42225?w=600&h=400&fit=crop",
    subCategories: [
      {
        id: "river-sand",
        name: "River Sand",
        products: [
          {
            id: "sand-river",
            name: "River Sand",
            name_gu: "નદીની રેત",
            description: "Premium quality river sand for plastering and masonry work. Smooth texture and optimal grain size for superior finish.",
            description_gu: "પ્લાસ્ટરિંગ અને મેઝનરી કામ માટે પ્રીમિયમ ગુણવત્તાવાળી નદીની રેત. સ્મૂથ ટેક્સચર અને શ્રેષ્ઠ ફિનિશ માટે ઑપ્ટિમલ ગ્રેઇન સાઇઝ.",
            image: imgSand,
            mrp: "₹1700-2500",
            unit:"per trolly",
            unit_gu: "પ્રતિ ટ્રોલી",
            specifications: {
              "Type": "River Sand",
              "Grain Size": "0.15mm - 4.75mm",
              "Silt Content": "< 3%",
              "Moisture Content": "5-8%",
              "Color": "Light Brown",
              "Unit": "Per Cubic Foot"
            },
            specifications_gu: {
              "પ્રકાર": "નદીની રેત",
              "ગ્રેઇન સાઇઝ": "0.15mm - 4.75mm",
              "સિલ્ટ કન્ટેન્ટ": "< 3%",
              "મોઇશ્ચર કન્ટેન્ટ": "5-8%",
              "રંગ": "હળવો બ્રાઉન",
              "એકમ": "પ્રતિ ક્યુબિક ફૂટ"
            }
          }
        ]
      },
      {
        id: "m-sand",
        name: "M Sand",
        products: [
          {
            id: "sand-manufactured",
            name: "Manufactured Sand ",
            name_gu: "મેન્યુફેક્ચર્ડ રેત (એમ-સેન્ડ)",
            description: "Eco-friendly alternative to river sand. Consistent quality and controlled grain size for concrete and block work.",
            description_gu: "નદીની રેતનો ઇકો-ફ્રેન્ડલી વિકલ્પ. કોંક્રિટ અને બ્લોક કામ માટે સતત ગુણવત્તા અને નિયંત્રિત ગ્રેઇન સાઇઝ.",
            image: imgRisand,
            mrp: "₹9000-13000",
            unit:"per truck",
            unit_gu: "પ્રતિ ટ્રક",
            specifications: {
              "Type": "Manufactured Sand",
              "Grain Size": "0.15mm - 4.75mm",
              "Silt Content": "< 2%",
              "Crushing Value": "< 30%",
              "Color": "Gray",
              "Unit": "Per Cubic Foot"
            },
            specifications_gu: {
              "પ્રકાર": "મેન્યુફેક્ચર્ડ રેત",
              "ગ્રેઇન સાઇઝ": "0.15mm - 4.75mm",
              "સિલ્ટ કન્ટેન્ટ": "< 2%",
              "ક્રશિંગ વેલ્યુ": "< 30%",
              "રંગ": "ગ્રે",
              "એકમ": "પ્રતિ ક્યુબિક ફૂટ"
            }
          }
        ]
      },
      {
        id: "stone-6mm",
        name: "6mm Stone",
        products: [
          {
            id: "stone-6mm-crushed",
            name: "6mm Crushed Stone",
            name_gu: "6mm  કપચી ",
            description: "Fine crushed stone aggregate for finishing concrete work and decorative applications. Uniform size and clean.",
            description_gu: "ફિનિશિંગ કોંક્રિટ કામ અને સુશોભન એપ્લિકેશન્સ માટે ફાઇન કચ્ચર પથ્થર એગ્રીગેટ. એકસમાન કદ અને સ્વચ્છ.",
            image: imgKapchi,
            mrp: "₹5000-6400",
            unit:"per trolly",
            unit_gu: "પ્રતિ ટ્રોલી",
            specifications: {
              "Size": "6mm",
              "Type": "Crushed Granite",
              "Shape": "Angular",
              "Crushing Value": "< 25%",
              "Water Absorption": "< 2%",
              "Unit": "Per Cubic Foot"
            },
            specifications_gu: {
              "કદ": "6mm",
              "પ્રકાર": "કપચી ",
              "આકાર": "એન્ગ્યુલર",
              "ક્રશિંગ વેલ્યુ": "< 25%",
              "પાણી શોષણ": "< 2%",
              "એકમ": "પ્રતિ ક્યુબિક ફૂટ"
            }
          }
        ]
      },
      {
        id: "stone-12mm",
        name: "12mm Stone",
        products: [
          {
            id: "stone-12mm-crushed",
            name: "20mm Crushed Stone",
            name_gu: "20mm કપચી ",
            description: "Standard crushed stone for RCC work, foundations, and concrete mixing. High strength and low porosity.",
            description_gu: "RCC કામ, પાયા અને કોંક્રિટ મિક્સિંગ માટે સ્ટાન્ડર્ડ કચ્ચર પથ્થર. ઉચ્ચ મજબૂતાઈ અને ઓછી પોરોસિટી.",
            image: imgKapchi2,
            mrp: "₹800-1500",
            unit:"per ton",
            unit_gu: "પ્રતિ ટન",
            specifications: {
              "Size": "20mm",
              "Type": "Crushed Granite",
              "Shape": "Angular",
              "Crushing Value": "< 25%",
              "Water Absorption": "< 2%",
              "Unit": "Per Cubic Foot"
            },
            specifications_gu: {
              "કદ": "20mm",
              "પ્રકાર": "કપચી",
              "આકાર": "એન્ગ્યુલર",
              "ક્રશિંગ વેલ્યુ": "< 25%",
              "પાણી શોષણ": "< 2%",
              "એકમ": "પ્રતિ ક્યુબિક ફૂટ"
            }
          }
        ]
      }
    ]
  },
  {
    id: "wire",
    name: "Wire",
    icon: "Cable",
    image: "https://images.unsplash.com/photo-1597424216809-3ba9864aeb18?w=600&h=400&fit=crop",
    subCategories: [
      {
        id: "binding-wire",
        name: "Binding Wire",
        products: [
          {
            id: "wire-binding",
            name: "cuntruction Wire",
            name_gu: "બાંધકામ વાયર (બાઇન્ડિંગ વાયર)",
            description: "Soft annealed wire for tying reinforcement bars in RCC construction. Easy to bend and tie, high tensile strength.",
            description_gu: "RCC બાંધકામમાં રિઇન્ફોર્સમેન્ટ સળિયા બાંધવા માટે સોફ્ટ એનિલ્ડ વાયર. વાળવું અને બાંધવું સરળ, ઉચ્ચ ટેન્સાઇલ સ્ટ્રેન્થ.",
            image: imgCwire,
            mrp: "₹60-100",
            unit:"per kg",
            unit_gu: "પ્રતિ કિગ્રા",
            specifications: {
              "Material": "Mild Steel",
              "Gauge": "18-20 SWG",
              "Finish": "Black Annealed",
              "Tensile Strength": "350-500 MPa",
              "Coil Weight": "25 KG",
              "Application": "Rebar Tying"
            },
            specifications_gu: {
              "સામગ્રી": "(લોખંડ) સ્ટીલ",
              "ગેજ": "18-20 SWG",
              "ફિનિશ": "બ્લેક એનિલ્ડ",
              "ટેન્સાઇલ સ્ટ્રેન્થ": "350-500 MPa",
              "કોઇલ વજન": " કિગ્રા",
              //"એપ્લિકેશન": "રિબાર બાંધવું"
            }
          }
        ]
      },
      {
        id: "fencing-wire",
        name: "Fencing Wire",
        products: [
          {
            id: "wire-fencing",
            name: "Fencing Wire",
            name_gu: "વાડ વાયર",
            description: "Galvanized iron wire for durable fencing applications. Rust-resistant coating ensures long life in outdoor conditions.",
            description_gu: "ટકાઉ વાડ એપ્લિકેશન્સ માટે ગેલ્વેનાઇઝ્ડ આયર્ન વાયર. કાટ પ્રતિરોધક કોટિંગ બહારની સ્થિતિઓમાં લાંબુ આયુષ્ય સુનિશ્ચિત કરે છે.",
            image: imgWire,
            mrp: "₹90-110",
            unit:"per kg",
            unit_gu: "પ્રતિ કિગ્રા",
            specifications: {
              "Material": "Galvanized Iron",
              "Gauge": "12-14 SWG",
              "Finish": "Hot-Dip Galvanized",
              "Zinc Coating": "40 g/m²",
              "Coil Weight": " KG",
              "Application": "Boundary Fencing"
            },
            specifications_gu: {
              "સામગ્રી": "ગેલ્વેનાઇઝ્ડ ",
              "ગેજ": "12-14 SWG",
              "ફિનિશ": "હોટ-ડિપ ગેલ્વેનાઇઝ્ડ",
              "ઝિંક કોટિંગ": "40 g/m²",
              "કોઇલ વજન": "25 કિગ્રા",
              "એપ્લિકેશન": "થભલા વાડ"
            }
          }
        ]
      },
      {
        id: "barbed-wire",
        name: "Barbed Wire",
        products: [
          {
            id: "wire-barbed",
            name: "Barbed Fencing Wire",
            name_gu: "જાળી વાયર",
            description: "High-security barbed wire for perimeter protection. Sharp barbs at regular intervals for maximum security.",
            description_gu: "પરિમિતિ સુરક્ષા માટે ઉચ્ચ-સુરક્ષા કાંટાળો વાયર. નિયમિત અંતરે તીક્ષ્ણ કાંટા મહત્તમ સુરક્ષા માટે.",
            image: imgJali,
            mrp: "₹80-130",
            unit:"per kg",
            unit_gu: "પ્રતિ કિગ્રા",
            specifications: {
              "Material": "Galvanized Steel",
              "Wire Gauge": "12.5 SWG",
              "Barb Spacing": "3-4 inches",
              "Barb Length": "0.5 inches",
              "Coil Length": " meters",
              "Application": "Security Fencing"
            },
            specifications_gu: {
              "સામગ્રી": "ગેલ્વેનાઇઝ્ડ સ્ટીલ",
              "વાયર ગેજ": "12.5 SWG",
              "કાંટા અંતર": "3-4 ઇંચ",
              "કાંટા લંબાઈ": "0.5 ઇંચ",
              "કોઇલ લંબાઈ": " મીટર",
              "એપ્લિકેશન": "સુરક્ષા વાડ"
            }
          }
        ]
      }
    ]
  }
];