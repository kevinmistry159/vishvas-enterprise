import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

interface Review {
  id: number;
  name: string;
  name_gu?: string;
  location: string;
  location_gu?: string;
  rating: number;
  review: string;
  review_gu?: string;
  date: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Rajesh Patel',
    name_gu: 'રાજેશ પટેલ',
    location: 'Banaskantha',
    location_gu: 'બનાસકાંઠા',
    rating: 5,
    review: 'Excellent quality fly ash bricks! Used them for my entire house construction. The bricks are uniform in size and very durable. Highly recommend Vishvas Enterprise for construction materials.',
    review_gu: 'ઉત્તમ ગુણવત્તાવાળા ફ્લાય એશ બ્લોક(ખંડા)! મેં તેમને મારા સમગ્ર ઘર બાંધકામ માટે વાપર્યા. બ્લોક માપમાં સમાન છે અને ખૂબ જ ટકાઉ છે. બાંધકામ સામગ્રી માટે વિશ્વાસ એન્ટરપ્રાઇઝને ખૂબજ ભલામણ કરું છું.',
    date: 'November 2025'
  },
  {
    id: 2,
    name: 'Kiran rajput',
    name_gu: 'કિરણ રાજપૂત',
    location: 'vav-tharad(bharadava)',
    location_gu: 'વાવ-થરાદ(ભરડવા)',
    rating: 5,
    review: '“The quality of the products is excellent! Strong, durable, and perfectly sized. Our construction work became smoother and faster. Highly recommended.”',
    review_gu: 'ઉત્પાદનોની ગુણવત્તા ઉત્તમ છે! મજબૂત, ટકાઉ અને સંપૂર્ણ કદની. અમારું બાંધકામ કાર્ય સરળ અને ઝડપી બન્યું. ખૂબ ભલામણ કરવામાં આવે છે.',
    date: 'October 2025'
  },
  {
    id: 3,
    name: 'Mahesh Kumar',
    name_gu: 'મહેશ કુમાર',
    location: 'bhabhar',
    location_gu: 'ભાભર',
    rating: 5,
    review: 'Great experience with Vishvas Enterprise. The quality of sand and aggregates is top-notch. Delivery was on time and the pricing was very reasonable compared to other suppliers.',
    review_gu: 'વિશ્વાસ એન્ટરપ્રાઇઝ સાથે શ્રેષ્ઠ અનુભવ. રેતી અને કપચી ની ગુણવત્તા ટોચની છે. ડિલિવરી સમયસર હતી અને ભાવો અન્ય સપ્લાયર્સની સરખામણીમાં ખૂબ જ વાજબી હતા.',
    date: 'September 2025'
  },
  {
    id: 4,
    name: 'Priya Desai',
    name_gu: 'પ્રિયા દેસાઈ',
    location: 'tharad',
    location_gu: 'થરાદ',
    rating: 5,
    review: 'Very high-quality poles at a reasonable price. We are fully satisfied with the strength.',
    review_gu: 'વાજબી કિંમતે ખૂબ જ ઉચ્ચ-ગુણવત્તાવાળા થાંભલા. અમે મજબૂતાઈથી સંપૂર્ણપણે સંતુષ્ટ છીએ.',
    date: 'August 2025'
  },
  {
    id: 5,
    name: 'Amit Joshi',
    name_gu: 'અમિત જોશી',
    location: 'radhanpur',
    location_gu: 'રાધનપુર',
    rating: 4,
    review: 'Good quality materials at factory prices. The fencing poles I ordered were exactly as described. i am overall satisfied with the purchase.',
    review_gu: 'ફેક્ટરી ભાવો પર સારી ગુણવત્તાવાળી સામગ્રી. મેં જે ફેન્સિંગ થાંભલા ઓર્ડર કર્યા હતા તે બરાબર વર્ણન મુજબ હતા. મને ખરીદીથી એકંદરે સંતુષ્ટ છું.',
    date: 'July 2025'
  },
  {
    id: 6,
    name: 'Rohit suthar(tetarava)',
    name_gu: 'રોહિત સુથાર(તેતરવા)',
    location: 'bhabhar',
    location_gu: 'ભાભર',
    rating: 5,
    review: 'Excellent management! From production to delivery, everything is handled with proper planning and responsibility.',
    review_gu: 'ઉત્તમ સંચાલન! ઉત્પાદનથી લઈને ડિલિવરી સુધી, બધું જ યોગ્ય આયોજન અને જવાબદારી સાથે સંભાળવામાં આવે છે.',
    date: 'June 2024'
  }
];

export function ReviewSection() {
  const { t } = useTranslation();

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-800 mb-4">{t('reviews.title')}</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('reviews.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 text-orange-200" size={40} />
              
              <div className="mb-4">
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={20}
                      className={index < review.rating ? 'text-orange-500 fill-orange-500' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  &quot;{i18n.language === 'gu' && review.review_gu ? review.review_gu : review.review}&quot;
                </p>
              </div>

              <div className="pt-4 border-t border-orange-200">
                <p className="text-gray-800">{i18n.language === 'gu' && review.name_gu ? review.name_gu : review.name}</p>
                <p className="text-sm text-gray-500">{i18n.language === 'gu' && review.location_gu ? review.location_gu : review.location}</p>
                <p className="text-xs text-gray-400 mt-1">{review.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-orange-50 rounded-xl p-6">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Star className="text-orange-500 fill-orange-500" size={32} />
              <span className="text-4xl text-gray-800">4.9</span>
              <span className="text-gray-600">/ 5</span>
            </div>
            <p className="text-gray-600">{t('reviews.summary')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
