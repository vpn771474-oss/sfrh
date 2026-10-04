import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getRestaurantData } from '../data/restaurantData';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface EditorialKitchenProps {
  onExploreMenu: () => void;
}

export const EditorialKitchen: React.FC<EditorialKitchenProps> = ({ onExploreMenu }) => {
  const { lang, isRtl } = useLanguage();
  const data = getRestaurantData(lang);
  const { editorialKitchen } = data;

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="relative w-full bg-[#101010] text-white py-24 lg:py-36 px-4 sm:px-6 lg:px-10 overflow-hidden">
      {/* Background image with deep cinematic contrast */}
      <div className="absolute inset-0 z-0">
        <img
          src={editorialKitchen.image}
          alt="سفرة المطبخ والمأكولات"
          className="w-full h-full object-cover opacity-25 scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-[#101010]/80 to-[#101010]" />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10 text-center flex flex-col items-center space-y-6 sm:space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-black text-[#D69A3A] text-xs sm:text-sm font-semibold tracking-wider uppercase border border-white/10">
          <Sparkles className="w-3.5 h-3.5 text-[#D69A3A]" />
          <span>{editorialKitchen.eyebrow}</span>
        </div>

        <h2 className="text-[42px] sm:text-[60px] md:text-[72px] lg:text-[84px] font-bold tracking-tight leading-[1.08] max-w-4xl">
          {editorialKitchen.headline}
        </h2>

        <p className="text-[#E4DBD0]/85 text-base sm:text-xl lg:text-2xl max-w-2xl leading-relaxed font-normal">
          {editorialKitchen.description}
        </p>

        <div className="pt-4">
          <motion.button
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onExploreMenu}
            className="h-[56px] px-10 rounded-full bg-[#9A3040] text-white text-[15px] sm:text-[16px] font-semibold tracking-wide hover:bg-[#852735] hover:shadow-[0_12px_35px_rgba(154,48,64,0.4)] transition-all duration-300 cursor-pointer inline-flex items-center gap-2.5"
          >
            <span>{editorialKitchen.cta}</span>
            <ArrowIcon className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};
