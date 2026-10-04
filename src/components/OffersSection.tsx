import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getRestaurantData, Offer } from '../data/restaurantData';
import { ArrowLeft, ArrowRight, Tag } from 'lucide-react';
import { motion } from 'motion/react';

interface OffersSectionProps {
  onSelectOffer: (offer: Offer) => void;
}

export const OffersSection: React.FC<OffersSectionProps> = ({ onSelectOffer }) => {
  const { lang, isRtl } = useLanguage();
  const data = getRestaurantData(lang);
  const activeOffers = data.currentOffers.filter((o) => o.enabled);

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  if (activeOffers.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-[#FFF9F0] py-20 lg:py-24 px-4 sm:px-6 lg:px-10 border-t border-[#E4DBD0]/50">
      <div className="max-w-[1450px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="text-start space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#9A3040]" />
              <span className="text-[13px] sm:text-[14px] font-semibold text-[#9A3040] tracking-wider uppercase">
                {isRtl ? 'باقات ومجموعات' : 'Curated Feasts'}
              </span>
            </div>
            <h2 className="text-[36px] sm:text-[46px] lg:text-[54px] font-semibold text-[#121212] tracking-tight leading-[1.15]">
              {isRtl ? 'عروض مختارة' : 'Special Bundles'}
            </h2>
          </div>
          <p className="text-[#68615B] text-base sm:text-lg max-w-md text-start leading-relaxed font-normal">
            {isRtl
              ? 'باقات متكاملة تجمع أطباقك المفضلة بقيمة مدروسة لتشاركها مع العائلة والأصدقاء.'
              : 'Complete feasts designed to share, pairing favorite wraps, burgers, and crisp fries at exceptional value.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activeOffers.map((offer) => (
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              key={offer.id}
              className="group rounded-[34px] overflow-hidden bg-white border border-[#E4DBD0] shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#E8DCCB]/40">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                
                {offer.badge && (
                  <span
                    className={`absolute top-5 ${
                      isRtl ? 'right-5' : 'left-5'
                    } px-4 py-1.5 rounded-full bg-[#9A3040] text-white text-xs font-bold shadow-md`}
                  >
                    {offer.badge}
                  </span>
                )}

                {offer.expiresAt && (
                  <span
                    className={`absolute bottom-4 ${
                      isRtl ? 'right-5' : 'left-5'
                    } text-white/90 text-xs font-medium`}
                  >
                    {offer.expiresAt}
                  </span>
                )}
              </div>

              <div className="p-8 text-start space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#121212] tracking-tight">
                      {offer.title}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-[#9A3040]">
                        {offer.price} {isRtl ? 'ر.س' : 'SAR'}
                      </span>
                      {offer.oldPrice && (
                        <span className="text-sm text-[#68615B] line-through font-normal">
                          {offer.oldPrice} {isRtl ? 'ر.س' : 'SAR'}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[#68615B] leading-relaxed">
                    {offer.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E4DBD0]/60 flex items-center justify-between">
                  <span className="text-xs text-[#596044] font-semibold flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5" />
                    <span>{isRtl ? 'سعر الباقة الخاص' : 'Special Bundle Price'}</span>
                  </span>

                  <button
                    onClick={() => onSelectOffer(offer)}
                    className="h-11 px-7 rounded-full bg-[#101010] text-white text-xs sm:text-sm font-semibold hover:bg-[#9A3040] transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <span>{offer.cta || (isRtl ? 'اطلب العرض' : 'Order Offer')}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
