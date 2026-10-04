import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getRestaurantData } from '../data/restaurantData';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface PopularCombinationsProps {
  onOpenOrder: () => void;
}

export const PopularCombinations: React.FC<PopularCombinationsProps> = ({ onOpenOrder }) => {
  const { lang, isRtl } = useLanguage();
  const data = getRestaurantData(lang);
  const { combinations, ui } = data;

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="combinations" className="w-full bg-[#FFF9F0] py-20 lg:py-28 px-4 sm:px-6 lg:px-10 border-t border-[#E4DBD0]/50">
      <div className="max-w-[1450px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="text-start space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#9A3040]" />
              <span className="text-[13px] sm:text-[14px] font-semibold text-[#9A3040] tracking-wider uppercase">
                {ui.comboCallout}
              </span>
            </div>
            <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-semibold text-[#121212] tracking-tight leading-[1.15]">
              {isRtl ? 'ماذا تختار؟' : 'What To Choose?'}
            </h2>
          </div>

          <p className="text-[#68615B] text-base sm:text-lg max-w-md text-start leading-relaxed font-normal">
            {isRtl
              ? 'توليفات كلاسيكية مدروسة تجمع بين الطبق الرئيسي، الصوص الخاص والمشروب المنعش لتجربة سَفرة المتكاملة.'
              : 'Thoughtfully paired combinations bringing together signature mains, artisan dips, and chilled sodas.'}
          </p>
        </div>

        {/* 3 Combination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {combinations.map((combo) => (
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              key={combo.id}
              className="group rounded-[32px] overflow-hidden bg-white border border-[#E4DBD0] shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col justify-between text-start"
            >
              {/* Image Preview with Tag */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E8DCCB]/40">
                <img
                  src={combo.image}
                  alt={combo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span
                  className={`absolute top-4 ${
                    isRtl ? 'right-4' : 'left-4'
                  } px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#121212] text-xs font-bold shadow-sm`}
                >
                  {combo.tag}
                </span>
                <span
                  className={`absolute bottom-3 ${
                    isRtl ? 'right-4' : 'left-4'
                  } text-white text-sm font-semibold tracking-wide`}
                >
                  {combo.subtitle}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-[#121212] tracking-tight">
                    {combo.title}
                  </h3>
                  <p className="text-sm text-[#68615B] leading-relaxed">
                    {combo.description}
                  </p>

                  {/* Components List */}
                  <div className="pt-2 space-y-2">
                    {combo.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#121212] font-medium">
                        <Check className="w-3.5 h-3.5 text-[#596044] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E4DBD0]/60 flex items-center justify-between">
                  <span className="text-xs text-[#68615B]">{ui.comboBadge}</span>
                  <button
                    onClick={onOpenOrder}
                    className="h-10 px-5 rounded-full bg-[#101010] text-white text-xs font-semibold hover:bg-[#9A3040] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{isRtl ? 'طلب هذا الكومبو' : 'Order This Combo'}</span>
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
