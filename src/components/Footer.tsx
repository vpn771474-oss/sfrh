import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getRestaurantData } from '../data/restaurantData';
import { ArrowUp, Instagram, Twitter, Phone, Mail, MapPin, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const { lang, toggleLang, isRtl } = useLanguage();
  const data = getRestaurantData(lang);
  const { name, subtitle, positioning, socialLinks, phone, email, city, country, ui } = data;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#101010] text-white pt-20 pb-12 px-4 sm:px-6 lg:px-10 border-t border-white/10">
      <div className="max-w-[1450px] mx-auto space-y-16">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 text-start">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#9A3040] flex items-center justify-center font-bold text-white text-xl">
                {isRtl ? 'س' : 'S'}
              </div>
              <div>
                <span className="text-2xl font-bold tracking-tight block">
                  {name}
                </span>
                <span className="text-xs text-[#E8DCCB]/60 font-medium">
                  {subtitle}
                </span>
              </div>
            </div>

            <p className="text-lg text-[#E4DBD0]/85 font-medium max-w-sm leading-relaxed">
              "{positioning}"
            </p>

            <p className="text-xs text-[#E4DBD0]/50 leading-relaxed max-w-md">
              {data.isFictionalDisclaimer}
            </p>

            {/* Social links & language switcher */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#9A3040] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {socialLinks.tiktok && (
                <a
                  href={socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#9A3040] transition-colors text-xs font-bold"
                  aria-label="TikTok"
                >
                  TT
                </a>
              )}
              {socialLinks.x && (
                <a
                  href={socialLinks.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#9A3040] transition-colors"
                  aria-label="X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}

              {/* Language toggle pill in footer */}
              <button
                onClick={toggleLang}
                className="h-10 px-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-semibold text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-[#D69A3A]" />
                <span>{isRtl ? 'English' : 'العربية'}</span>
              </button>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-[#D69A3A] tracking-wider uppercase">
              {ui.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm text-[#E4DBD0]/80">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {isRtl ? 'الرئيسية' : 'Home'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('menu')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {isRtl ? 'القائمة الكاملة' : 'Menu Collection'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('featured')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {isRtl ? 'الأكثر طلبًا' : 'Popular Dishes'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('branches')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {isRtl ? 'فروع الرياض' : 'Riyadh Branches'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('story')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {isRtl ? 'عن سَفرة' : 'About Sofrah'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {isRtl ? 'الأسئلة الشائعة' : 'FAQ'}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-[#D69A3A] tracking-wider uppercase">
              {ui.contactInfo}
            </h4>
            <div className="space-y-3 text-sm text-[#E4DBD0]/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#9A3040] shrink-0" />
                <span>{city}, {country}</span>
              </div>
              {phone && (
                <div className="flex items-center gap-2" dir="ltr">
                  <Phone className="w-4 h-4 text-[#9A3040] shrink-0" />
                  <a href={`tel:${phone}`} className="hover:text-white font-mono">
                    {phone}
                  </a>
                </div>
              )}
              {email && (
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#9A3040] shrink-0" />
                  <a href={`mailto:${email}`} className="hover:text-white">
                    {email}
                  </a>
                </div>
              )}
              {data.hours && (
                <p className="text-xs text-[#E4DBD0]/60 pt-2 border-t border-white/10">
                  {isRtl ? `ساعات الاستقبال: ${data.hours}` : `Hours: ${data.hours}`}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E4DBD0]/50">
          <p>{ui.copyright}</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <span>{ui.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
