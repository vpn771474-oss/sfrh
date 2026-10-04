import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getRestaurantData } from '../data/restaurantData';
import { Phone, MessageCircle, Mail, MapPin, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactSectionProps {
  onOpenOrder: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenOrder }) => {
  const { lang, isRtl } = useLanguage();
  const data = getRestaurantData(lang);
  const { contact, phone, whatsapp, email, address } = data;

  const whatsappClean = whatsapp ? whatsapp.replace(/[^0-9]/g, '') : '';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="contact" className="w-full bg-[#E8DCCB] py-20 lg:py-28 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center">
        {/* Eyebrow */}
        <span className="text-xs sm:text-sm font-bold text-[#9A3040] uppercase tracking-widest mb-3">
          {isRtl ? 'طازج، ساخن، وسريع' : 'Fresh, Sizzling, and Fast'}
        </span>

        {/* Headline */}
        <h2 className="text-[52px] sm:text-[72px] md:text-[88px] font-bold text-[#121212] tracking-tight leading-none mb-6">
          {contact.headline}
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-2xl text-[#68615B] font-normal max-w-xl mb-10 leading-relaxed">
          {contact.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14 sm:mb-16">
          <motion.button
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenOrder}
            className="h-[56px] px-10 rounded-full bg-[#9A3040] text-white text-[16px] font-semibold tracking-wide hover:bg-[#852735] hover:shadow-lg transition-all duration-200 cursor-pointer inline-flex items-center gap-2"
          >
            <span>{contact.primaryCta}</span>
            <ArrowIcon className="w-4 h-4" />
          </motion.button>

          {whatsapp && (
            <motion.a
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`https://wa.me/${whatsappClean}?text=${encodeURIComponent(
                isRtl
                  ? 'مرحبًا سَفرة، أود الاستفسار عن القائمة والطلب'
                  : 'Hello Sofrah, I would like to inquire about the menu and orders.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="h-[56px] px-8 rounded-full bg-[#101010] text-white text-[16px] font-semibold hover:bg-black hover:shadow-lg transition-all duration-200 cursor-pointer inline-flex items-center gap-2.5"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>{isRtl ? 'واتساب سَفرة' : 'WhatsApp Us'}</span>
            </motion.a>
          )}
        </div>

        {/* Contact details capsules */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-[#121212] pt-8 border-t border-[#E4DBD0]">
          {phone && (
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center gap-2 hover:text-[#9A3040] transition-colors"
              dir="ltr"
            >
              <Phone className="w-4 h-4 text-[#9A3040]" />
              <span className="font-mono">{phone}</span>
            </a>
          )}

          {email && (
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 hover:text-[#9A3040] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#9A3040]" />
              <span>{email}</span>
            </a>
          )}

          {address && (
            <div className="inline-flex items-center gap-2 text-[#68615B]">
              <MapPin className="w-4 h-4 text-[#9A3040]" />
              <span>{address}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
