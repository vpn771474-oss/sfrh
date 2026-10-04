import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getRestaurantData } from '../data/restaurantData';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FAQSection: React.FC = () => {
  const { lang, isRtl } = useLanguage();
  const data = getRestaurantData(lang);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full bg-[#FFF9F0] py-20 lg:py-28 px-4 sm:px-6 lg:px-10 border-t border-[#E4DBD0]/50">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#9A3040]" />
            <span className="text-[13px] sm:text-[14px] font-semibold text-[#9A3040] tracking-wider uppercase">
              {isRtl ? 'الأسئلة الشائعة' : 'Frequently Asked'}
            </span>
            <span className="w-2 h-2 rounded-full bg-[#9A3040]" />
          </div>

          <h2 className="text-[36px] sm:text-[46px] lg:text-[54px] font-semibold text-[#121212] tracking-tight leading-[1.15]">
            {isRtl ? 'كل ما تود معرفته' : 'Everything You Need To Know'}
          </h2>

          <p className="text-[#68615B] text-base sm:text-lg leading-relaxed font-normal">
            {isRtl
              ? 'إجابات واضحة ومباشرة حول تجربة الطلب، الفروع، والاستلام.'
              : 'Direct and transparent answers regarding ordering, pickup, branches, and customization.'}
          </p>
        </div>

        <div className="space-y-4">
          {data.faq.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-[24px] sm:rounded-[28px] bg-white border border-[#E4DBD0] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 sm:p-7 text-start flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg sm:text-xl font-bold text-[#121212] tracking-tight">
                    {item.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full bg-[#FFF9F0] border border-[#E4DBD0] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#101010] text-white border-[#101010]' : 'text-[#121212]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-start">
                        <p className="text-[#68615B] text-base leading-relaxed border-t border-[#E4DBD0]/50 pt-4">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
