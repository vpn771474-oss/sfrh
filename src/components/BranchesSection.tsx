import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getRestaurantData } from '../data/restaurantData';
import { MapPin, Phone, Clock, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface BranchesSectionProps {
  onOpenOrderForBranch: (branchName: string) => void;
}

export const BranchesSection: React.FC<BranchesSectionProps> = ({ onOpenOrderForBranch }) => {
  const { lang, isRtl } = useLanguage();
  const data = getRestaurantData(lang);
  const { branches, ui } = data;

  return (
    <section id="branches" className="w-full bg-[#FFF9F0] py-20 lg:py-28 px-4 sm:px-6 lg:px-10 border-t border-[#E4DBD0]/50">
      <div className="max-w-[1450px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16">
          <div className="text-start space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#9A3040]" />
              <span className="text-[13px] sm:text-[14px] font-semibold text-[#9A3040] tracking-wider uppercase">
                {isRtl ? 'فروعنا' : 'Our Locations'}
              </span>
            </div>
            <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-semibold text-[#121212] tracking-tight leading-[1.15]">
              {isRtl ? 'أقرب لك' : 'Closer To You'}
            </h2>
          </div>

          <div className="text-start space-y-1">
            <p className="text-[#68615B] text-base sm:text-lg max-w-md leading-relaxed font-normal">
              {isRtl
                ? 'متواجدون في أرقى مواقع مدينة الرياض لنكون دائمًا وجهتك الأولى للشاورما والبرجر والبروست.'
                : 'Present in prime Riyadh districts, ensuring your favorite shawarma and burgers are always close at hand.'}
            </p>
            {data.hours && (
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#596044] bg-[#596044]/10 px-3 py-1 rounded-full mt-2">
                <Clock className="w-3.5 h-3.5" />
                <span>{isRtl ? `ساعات العمل: ${data.hours}` : `Operating Hours: ${data.hours}`}</span>
              </div>
            )}
          </div>
        </div>

        {/* Branch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 sm:gap-8">
          {branches.map((branch) => (
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              key={branch.id}
              className="group rounded-[32px] overflow-hidden bg-white border border-[#E4DBD0] shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between text-start"
            >
              {/* Branch Interior / Location Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E8DCCB]/40">
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                <div
                  className={`absolute top-4 ${
                    isRtl ? 'right-4' : 'left-4'
                  } px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-[#121212]`}
                >
                  {branch.city}
                </div>

                <div className="absolute bottom-3 right-4 left-4 flex items-center justify-between text-white">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                    {branch.name}
                  </h3>
                  <span className="text-xs bg-[#9A3040] px-2.5 py-0.5 rounded-full font-medium">
                    {ui.openNow}
                  </span>
                </div>
              </div>

              {/* Branch Information */}
              <div className="p-7 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-3.5 text-sm">
                  {branch.address && (
                    <div className="flex items-start gap-2.5 text-[#68615B]">
                      <MapPin className="w-4 h-4 text-[#9A3040] shrink-0 mt-0.5" />
                      <span className="leading-snug">{branch.address}</span>
                    </div>
                  )}

                  {branch.hours && (
                    <div className="flex items-center gap-2.5 text-[#68615B]">
                      <Clock className="w-4 h-4 text-[#D69A3A] shrink-0" />
                      <span>{branch.hours}</span>
                    </div>
                  )}

                  {branch.phone && (
                    <div className="flex items-center gap-2.5 text-[#68615B]">
                      <Phone className="w-4 h-4 text-[#596044] shrink-0" />
                      <a
                        href={`tel:${branch.phone}`}
                        dir="ltr"
                        className="hover:text-[#121212] transition-colors font-mono text-xs"
                      >
                        {branch.phone}
                      </a>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-[#E4DBD0]/60 flex items-center justify-between gap-3">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(branch.name + ' ' + branch.city)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 px-4 rounded-full bg-[#FFF9F0] border border-[#E4DBD0] text-[#121212] text-xs font-semibold hover:bg-[#E8DCCB] transition-colors flex items-center gap-1.5"
                  >
                    <span>{ui.directions}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => onOpenOrderForBranch(branch.name)}
                    className="h-10 px-5 rounded-full bg-[#101010] text-white text-xs font-semibold hover:bg-[#9A3040] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{ui.pickupFromThisBranch}</span>
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
