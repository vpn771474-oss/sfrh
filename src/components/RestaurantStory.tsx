import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getRestaurantData } from '../data/restaurantData';
import { motion } from 'motion/react';

export const RestaurantStory: React.FC = () => {
  const { lang, isRtl } = useLanguage();
  const data = getRestaurantData(lang);
  const { story, ui } = data;

  return (
    <section id="story" className="w-full bg-[#FFF9F0] py-20 lg:py-28 px-4 sm:px-6 lg:px-10 border-t border-[#E4DBD0]/50">
      <div className="max-w-[1450px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Visual Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="relative rounded-[36px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-[#E4DBD0]">
              <img
                src={story.image}
                alt="أجواء مطعم سَفرة العصرية"
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 right-6 left-6 text-white text-start">
                <span className="text-xs uppercase tracking-widest text-[#D69A3A] font-semibold">
                  {ui.kitchenAccent}
                </span>
                <p className="text-xl font-bold mt-1">
                  {isRtl ? 'تناغم المألوف مع الحداثة' : 'Timeless Soul, Modern Expression'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 order-1 lg:order-2 text-start space-y-6"
          >
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#9A3040]" />
              <span className="text-[13px] sm:text-[14px] font-semibold text-[#9A3040] tracking-wider uppercase">
                {story.eyebrow}
              </span>
            </div>

            <h2 className="text-[38px] sm:text-[50px] lg:text-[60px] font-semibold text-[#121212] tracking-tight leading-[1.12] whitespace-pre-line">
              {story.headline}
            </h2>

            <p className="text-[#68615B] text-lg sm:text-xl leading-relaxed font-normal max-w-2xl">
              {story.body}
            </p>

            {/* 4 Neutral Brand Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              {story.principles.map((p, idx) => (
                <div
                  key={idx}
                  className="rounded-[24px] bg-white border border-[#E4DBD0] p-6 shadow-sm space-y-2 text-start hover:border-[#9A3040]/40 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D69A3A]" />
                    <h3 className="font-bold text-[#121212] text-lg">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#68615B] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
