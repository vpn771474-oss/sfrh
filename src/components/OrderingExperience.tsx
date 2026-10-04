import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getRestaurantData } from '../data/restaurantData';
import { Truck, Store, Utensils, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface OrderingExperienceProps {
  onOpenOrder: (initialMethod?: 'delivery' | 'pickup' | 'dine-in') => void;
}

export const OrderingExperience: React.FC<OrderingExperienceProps> = ({ onOpenOrder }) => {
  const { lang, isRtl } = useLanguage();
  const data = getRestaurantData(lang);
  const { orderingMethods, ui } = data;

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const getIcon = (type: string) => {
    switch (type) {
      case 'truck':
        return <Truck className="w-6 h-6 text-[#9A3040]" />;
      case 'store':
        return <Store className="w-6 h-6 text-[#D69A3A]" />;
      case 'utensils':
        return <Utensils className="w-6 h-6 text-[#596044]" />;
      default:
        return <Truck className="w-6 h-6 text-[#9A3040]" />;
    }
  };

  return (
    <section className="w-full bg-[#FFF9F0] py-20 lg:py-28 px-4 sm:px-6 lg:px-10 border-t border-[#E4DBD0]/50">
      <div className="max-w-[1450px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#9A3040]" />
            <span className="text-[13px] sm:text-[14px] font-semibold text-[#9A3040] tracking-wider">
              {orderingMethods.eyebrow}
            </span>
            <span className="w-2 h-2 rounded-full bg-[#9A3040]" />
          </div>

          <h2 className="text-[38px] sm:text-[50px] lg:text-[58px] font-semibold text-[#121212] tracking-tight leading-[1.14] whitespace-pre-line">
            {orderingMethods.headline}
          </h2>

          <p className="text-[#68615B] text-base sm:text-lg leading-relaxed font-normal max-w-lg mx-auto">
            {isRtl
              ? 'خيارات مرنة ومباشرة تضمن لك الاستمتاع بطعم سَفرة في أي وقت ومكان بالرياض.'
              : 'Flexible, seamless ways to enjoy Sofrah anywhere, anytime across Riyadh.'}
          </p>
        </div>

        {/* 3 Methods Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20 sm:mb-24">
          {orderingMethods.methods.map((method) => (
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              key={method.id}
              onClick={() => onOpenOrder(method.id as 'delivery' | 'pickup' | 'dine-in')}
              className="group rounded-[30px] bg-white border border-[#E4DBD0] p-8 sm:p-9 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)] transition-all duration-300 text-start flex flex-col justify-between min-h-[280px] cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#FFF9F0] border border-[#E4DBD0] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {getIcon(method.icon)}
                </div>

                <h3 className="text-2xl sm:text-[26px] font-bold text-[#121212] tracking-tight">
                  {method.title}
                </h3>

                <p className="text-[#68615B] text-[15px] leading-relaxed">
                  {method.description}
                </p>
              </div>

              <div className="pt-6 border-t border-[#E4DBD0]/50 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#9A3040] group-hover:underline">
                  {isRtl ? 'ابدأ الطلب الآن' : 'Start Order'}
                </span>
                <div className="w-8 h-8 rounded-full bg-[#101010] text-white flex items-center justify-center group-hover:bg-[#9A3040] transition-colors">
                  <ArrowIcon className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4-Step Conceptual Flow: EXTENDED RECTANGLE WITH FROSTED BLACK GLASS (المستطيل الممتد الأسود الزجاجي) */}
        <div className="glass-black text-white rounded-[36px] sm:rounded-[42px] p-8 sm:p-12 lg:p-16 shadow-[0_25px_60px_rgba(0,0,0,0.35)] border border-white/15 relative overflow-hidden">
          {/* Ambient reflections inside glass container */}
          <div className="absolute top-0 right-1/4 w-80 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-96 h-48 bg-[#9A3040]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16 space-y-3 relative z-10">
            <span className="text-xs font-semibold text-[#D69A3A] tracking-widest uppercase">
              {ui.stepPrompt}
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              {isRtl ? 'كيف يكتمل طلبك بكل سهولة؟' : 'How does your order come together?'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 relative z-10">
            {orderingMethods.steps.map((s, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={s.step}
                className="text-start space-y-4 relative"
              >
                {/* Giant Editorial Number */}
                <div className="text-[56px] sm:text-[68px] lg:text-[76px] font-bold text-[#D69A3A]/30 leading-none select-none font-mono">
                  {s.step}
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight -mt-4">
                  {s.title}
                </h4>

                <p className="text-sm text-[#E4DBD0]/80 leading-relaxed font-normal">
                  {s.desc}
                </p>

                {idx < orderingMethods.steps.length - 1 && (
                  <div
                    className={`hidden lg:block absolute ${
                      isRtl ? 'left-0 -translate-x-full' : 'right-0 translate-x-full'
                    } top-1/2 w-6 border-t border-white/10`}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Central Call to Action inside the dark glass container */}
          <div className="mt-14 sm:mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-start relative z-10">
            <div>
              <p className="text-base sm:text-lg font-semibold text-white">
                {ui.readyPrompt}
              </p>
              <p className="text-xs text-[#E4DBD0]/60 mt-1">
                {ui.readySub}
              </p>
            </div>

            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpenOrder()}
              className="h-[52px] px-8 rounded-full bg-[#9A3040] text-white text-[15px] font-semibold hover:bg-[#852735] hover:shadow-lg transition-all duration-200 cursor-pointer inline-flex items-center gap-2"
            >
              <span>{ui.orderNow}</span>
              <ArrowIcon className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
