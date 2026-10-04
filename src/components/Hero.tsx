import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getRestaurantData } from '../data/restaurantData';
import { ArrowLeft, ArrowRight, Sparkles, Flame } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenOrder: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrder, onExploreMenu }) => {
  const { lang, isRtl } = useLanguage();
  const data = getRestaurantData(lang);
  const { hero } = data;

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="relative w-full bg-[#FFF9F0] pt-[155px] sm:pt-[175px] lg:pt-[190px] pb-16 lg:pb-24 px-4 sm:px-6 lg:px-10 overflow-hidden">
      {/* Background soft ambient warm glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[720px] h-[380px] bg-[#F1D8C9]/40 rounded-full blur-[120px] pointer-events-none -z-0" />

      <div className="max-w-[1450px] mx-auto relative z-10">
        {/* CENTERED EDITORIAL HEADER CONTAINER WITH STAGGERED MOTION */}
        <div className="flex flex-col items-center text-center max-w-[1050px] mx-auto">
          {/* Small Centered Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 mb-4 sm:mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#9A3040]" />
            <span className="text-[13px] sm:text-[15px] font-semibold text-[#9A3040] tracking-wider uppercase">
              {hero.eyebrow}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#9A3040]" />
          </motion.div>

          {/* Huge Centered Arabic / English Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[44px] sm:text-[62px] md:text-[76px] lg:text-[92px] leading-[1.08] font-semibold text-[#121212] tracking-tight whitespace-pre-line mb-6 sm:mb-7"
          >
            {hero.headline}
          </motion.h1>

          {/* Short Centered Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[16px] sm:text-[18px] md:text-[20px] text-[#68615B] leading-[1.65] max-w-[700px] font-normal mb-8 sm:mb-10 px-2"
          >
            {hero.description}
          </motion.p>

          {/* Two Pill CTA Buttons with Micro-interactions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16 sm:mb-20"
          >
            {/* Primary CTA */}
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenOrder}
              className="h-[54px] sm:h-[58px] px-8 sm:px-10 rounded-full bg-[#9A3040] text-white text-[15px] sm:text-[16px] font-semibold tracking-wide hover:bg-[#852735] transition-colors shadow-[0_14px_32px_rgba(154,48,64,0.25)] cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <span>{hero.primaryCta}</span>
              <ArrowIcon className="w-4 h-4" />
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onExploreMenu}
              className="h-[54px] sm:h-[58px] px-8 sm:px-10 rounded-full bg-[#E8DCCB] text-[#121212] text-[15px] sm:text-[16px] font-semibold tracking-wide hover:bg-[#ded1bd] transition-colors cursor-pointer inline-flex items-center justify-center"
            >
              <span>{hero.secondaryCta}</span>
            </motion.button>
          </motion.div>
        </div>

        {/* HERO FOOD EDITORIAL COMPOSITION */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch"
        >
          {/* 01: Main Dominant Large Card (7 cols) */}
          <div className="lg:col-span-7 relative group rounded-[32px] sm:rounded-[36px] overflow-hidden min-h-[380px] sm:min-h-[480px] lg:min-h-[540px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-[#E4DBD0]/70 flex flex-col justify-end p-6 sm:p-10">
            <img
              src={hero.mainVisual.image}
              alt="شاورما ومأكولات سَفرة الشهية"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              loading="eager"
            />
            {/* Cinematic gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

            {/* Overlay Editorial Content */}
            <div className="relative z-10 text-start space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[12px] sm:text-[13px] font-medium tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-[#D69A3A]" />
                <span>{hero.mainVisual.eyebrow}</span>
              </div>
              <h2 className="text-[26px] sm:text-[34px] md:text-[40px] font-bold text-white leading-[1.18] whitespace-pre-line tracking-tight">
                {hero.mainVisual.headline}
              </h2>
            </div>
          </div>

          {/* 02 & 03: Right Column with Supporting and Detail cards (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 sm:gap-6">
            {/* 02: Medium Supporting Food Image Card */}
            <div className="relative group rounded-[30px] sm:rounded-[34px] overflow-hidden min-h-[260px] sm:min-h-[290px] lg:min-h-[310px] shadow-[0_16px_40px_rgba(0,0,0,0.06)] border border-[#E4DBD0]/70 flex flex-col justify-end p-6 sm:p-7">
              <img
                src={hero.secondaryVisual.image}
                alt="برجر سَفرة الطازج"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
              
              <div className="relative z-10 text-start space-y-1">
                <div className="inline-flex items-center gap-1.5 text-[#D69A3A] text-xs font-semibold">
                  <Flame className="w-3.5 h-3.5" />
                  <span>{isRtl ? 'طعم أصيل ومميز' : 'Distinctive Soul'}</span>
                </div>
                <h3 className="text-[20px] sm:text-[24px] font-bold text-white leading-snug whitespace-pre-line">
                  {hero.secondaryVisual.headline}
                </h3>
              </div>
            </div>

            {/* 03: Detail Image Card with Glass-Black finish */}
            <div className="relative group rounded-[30px] sm:rounded-[34px] overflow-hidden min-h-[190px] sm:min-h-[200px] lg:min-h-[205px] shadow-[0_16px_40px_rgba(0,0,0,0.12)] border border-white/10 flex items-center justify-between p-6 sm:p-8 glass-black">
              <img
                src={hero.detailVisual.image}
                alt="بطاطس سَفرة المقرمشة"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 group-hover:scale-[1.04] transition-all duration-700 ease-out"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent pointer-events-none" />

              <div className="relative z-10 text-start space-y-1">
                <span className="text-[12px] font-semibold text-[#D69A3A] tracking-wider uppercase">
                  {isRtl ? 'القرمشة والصوصات' : 'Crunch & Dips'}
                </span>
                <h3 className="text-[22px] sm:text-[26px] font-bold text-white leading-tight whitespace-pre-line">
                  {hero.detailVisual.headline}
                </h3>
              </div>

              <div className="relative z-10 w-11 h-11 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-[#9A3040] transition-colors">
                <ArrowIcon className="w-4 h-4" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
