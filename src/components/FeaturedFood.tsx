import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getRestaurantData, MenuItem } from '../data/restaurantData';
import { ArrowLeft, ArrowRight, Flame, Sparkles, Plus } from 'lucide-react';
import { motion } from 'motion/react';

interface FeaturedFoodProps {
  onSelectItem: (item: MenuItem) => void;
  onOpenOrder: () => void;
}

export const FeaturedFood: React.FC<FeaturedFoodProps> = ({ onSelectItem, onOpenOrder }) => {
  const { lang, isRtl } = useLanguage();
  const data = getRestaurantData(lang);
  const featured = data.menuItems.filter((i) => i.featured).slice(0, 5);

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="featured" className="w-full bg-[#FFF9F0] py-20 lg:py-28 px-4 sm:px-6 lg:px-10 border-t border-[#E4DBD0]/50">
      <div className="max-w-[1450px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="text-start space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#9A3040]" />
              <span className="text-[13px] sm:text-[14px] font-semibold text-[#9A3040] tracking-wider uppercase">
                {isRtl ? 'الأكثر طلبًا' : 'Most Celebrated'}
              </span>
            </div>
            <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-semibold text-[#121212] tracking-tight leading-[1.15]">
              {isRtl ? 'أطباق تعود لها' : 'Dishes You Return To'}
            </h2>
          </div>

          <p className="text-[#68615B] text-base sm:text-lg max-w-md text-start leading-relaxed font-normal">
            {isRtl
              ? 'المختارات الأقرب لقلوب رواد سَفرة في الرياض، محضرة بتوازن دقيق بين الطعم المألوف والتقديم العصري.'
              : 'Beloved signature plates crafted with balance, honoring traditional recipes through refined presentation.'}
          </p>
        </div>

        {/* Dynamic Editorial Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-7">
          {/* Card 0: Primary Hero Featured Dish (Horizontal/Full width on 7 cols) */}
          {featured[0] && (
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              onClick={() => onSelectItem(featured[0])}
              className="lg:col-span-7 group relative rounded-[32px] overflow-hidden bg-white border border-[#E4DBD0] shadow-[0_12px_36px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] cursor-pointer flex flex-col justify-between min-h-[460px] p-7 sm:p-9"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={featured[0].image}
                  alt={featured[0].name}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
              </div>

              {/* Top metadata tags */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/25 backdrop-blur-md text-white text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-[#D69A3A]" />
                  <span>{isRtl ? 'الخيار الأول' : 'Signature Choice'}</span>
                </div>
                {featured[0].calories && (
                  <span className="text-white/80 text-xs font-medium bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
                    {featured[0].calories}
                  </span>
                )}
              </div>

              {/* Bottom text & action */}
              <div className="relative z-10 text-start space-y-3 pt-12">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[28px] sm:text-[36px] font-bold text-white tracking-tight leading-tight">
                    {featured[0].name}
                  </h3>
                  <div className="text-[24px] sm:text-[28px] font-bold text-[#E8DCCB] whitespace-nowrap">
                    {featured[0].price} <span className="text-sm font-medium">{featured[0].currency}</span>
                  </div>
                </div>
                <p className="text-white/85 text-[15px] sm:text-[16px] max-w-lg leading-relaxed line-clamp-2">
                  {featured[0].description}
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-[#E8DCCB]/80 font-medium">
                    {featured[0].details || (isRtl ? 'شاورما بتتبيلة سَفرة المميزة' : 'Artisanal Saudi Shawarma Recipe')}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectItem(featured[0]);
                    }}
                    className="h-11 px-6 rounded-full bg-[#9A3040] text-white text-sm font-semibold hover:bg-[#852735] transition-colors flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>{data.ui.orderNow}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Card 1: Secondary Featured Dish (5 cols) */}
          {featured[1] && (
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              onClick={() => onSelectItem(featured[1])}
              className="lg:col-span-5 group relative rounded-[32px] overflow-hidden bg-white border border-[#E4DBD0] shadow-[0_12px_36px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] cursor-pointer flex flex-col justify-between min-h-[460px] p-7 sm:p-9"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={featured[1].image}
                  alt={featured[1].name}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
              </div>

              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-[#D69A3A] text-[#121212] text-xs font-bold">
                  {isRtl ? 'جديد سَفرة' : 'New at Sofrah'}
                </span>
                {featured[1].calories && (
                  <span className="text-white/80 text-xs font-medium bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
                    {featured[1].calories}
                  </span>
                )}
              </div>

              <div className="relative z-10 text-start space-y-3 pt-12">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[26px] sm:text-[32px] font-bold text-white tracking-tight leading-tight">
                    {featured[1].name}
                  </h3>
                  <div className="text-[22px] sm:text-[26px] font-bold text-[#E8DCCB] whitespace-nowrap">
                    {featured[1].price} <span className="text-sm font-medium">{featured[1].currency}</span>
                  </div>
                </div>
                <p className="text-white/85 text-[15px] leading-relaxed line-clamp-2">
                  {featured[1].description}
                </p>
                <div className="pt-2 flex items-center justify-end">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectItem(featured[1]);
                    }}
                    className="h-11 px-6 rounded-full bg-white text-[#121212] text-sm font-semibold hover:bg-[#E8DCCB] transition-colors flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>{data.ui.orderNow}</span>
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Cards 2, 3, 4: Triplet Grid below (4 cols each) */}
          {featured.slice(2, 5).map((item) => (
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              key={item.id}
              onClick={() => onSelectItem(item)}
              className="lg:col-span-4 group relative rounded-[30px] overflow-hidden bg-white border border-[#E4DBD0] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] cursor-pointer flex flex-col justify-between min-h-[380px] p-6 sm:p-7"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              </div>

              <div className="relative z-10 flex items-center justify-between">
                {item.spicy ? (
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#9A3040] text-white text-xs font-semibold">
                    <Flame className="w-3 h-3 text-orange-300" />
                    <span>{isRtl ? 'سبايسي' : 'Spicy'}</span>
                  </div>
                ) : (
                  <span className="text-white/75 text-xs font-medium bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
                    {isRtl ? 'مختارات الشيف' : "Chef's Cut"}
                  </span>
                )}
                {item.calories && (
                  <span className="text-white/80 text-xs font-medium bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
                    {item.calories}
                  </span>
                )}
              </div>

              <div className="relative z-10 text-start space-y-2 pt-8">
                <div className="flex items-baseline justify-between gap-3">
                  <h4 className="text-[22px] sm:text-[24px] font-bold text-white tracking-tight leading-tight">
                    {item.name}
                  </h4>
                  <div className="text-[20px] font-bold text-[#E8DCCB] whitespace-nowrap">
                    {item.price} <span className="text-xs font-normal">{item.currency}</span>
                  </div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed line-clamp-2">
                  {item.description}
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-white/60">
                    {isRtl ? 'تفاصيل الوجبة' : 'View Details'}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectItem(item);
                    }}
                    className="h-9 px-4 rounded-full bg-[#9A3040] text-white text-xs font-semibold hover:bg-[#852735] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{data.ui.orderNow}</span>
                    <ArrowIcon className="w-3 h-3" />
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
