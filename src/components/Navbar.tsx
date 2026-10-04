import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getRestaurantData } from '../data/restaurantData';
import { Menu, X, ShoppingBag, Globe, ArrowLeft, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenOrder: () => void;
  orderCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrder, orderCount }) => {
  const { lang, toggleLang, isRtl } = useLanguage();
  const data = getRestaurantData(lang);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-5 sm:pt-6 pointer-events-none transition-all duration-300">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        aria-label="التنقل الرئيسي"
        className={`pointer-events-auto w-full max-w-[1420px] h-[72px] sm:h-[78px] rounded-full glass-black px-5 sm:px-8 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'shadow-[0_24px_55px_rgba(0,0,0,0.4)] scale-[0.99] border-white/20' : 'shadow-[0_18px_45px_rgba(0,0,0,0.28)]'
        }`}
      >
        {/* Brand / Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col text-start focus:outline-none group cursor-pointer"
        >
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight group-hover:text-[#E8DCCB] transition-colors">
            {data.name}
          </span>
          <span className="text-[11px] text-[#E8DCCB]/75 tracking-wide font-normal -mt-0.5">
            {data.subtitle}
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#E4DBD0]/90">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-white transition-colors cursor-pointer"
          >
            {isRtl ? 'الرئيسية' : 'Home'}
          </button>
          <button
            onClick={() => scrollTo('menu')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            {isRtl ? 'القائمة' : 'Menu'}
          </button>
          <button
            onClick={() => scrollTo('featured')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            {isRtl ? 'الأكثر طلبًا' : 'Popular'}
          </button>
          <button
            onClick={() => scrollTo('combinations')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            {isRtl ? 'الخيارات' : 'Combos'}
          </button>
          <button
            onClick={() => scrollTo('branches')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            {isRtl ? 'فروعنا' : 'Branches'}
          </button>
          <button
            onClick={() => scrollTo('story')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            {isRtl ? 'عن سَفرة' : 'About'}
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            {isRtl ? 'تواصل معنا' : 'Contact'}
          </button>
        </div>

        {/* CTA Pills, Language Switcher, Cart */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Toggle Button (Clean glassy pill) */}
          <button
            onClick={toggleLang}
            className="inline-flex items-center gap-1.5 px-3.5 h-[40px] sm:h-[42px] rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs sm:text-[13px] font-semibold tracking-wide transition-all duration-200 cursor-pointer active:scale-95 shadow-sm"
            title={isRtl ? 'Switch to English' : 'التحويل للعربية'}
            aria-label="تبديل اللغة"
          >
            <Globe className="w-3.5 h-3.5 text-[#D69A3A]" />
            <span className="font-sans uppercase">{isRtl ? 'EN' : 'عربي'}</span>
          </button>

          {/* White / Sand Pill: Explore Menu */}
          <button
            onClick={() => scrollTo('menu')}
            className="hidden md:inline-flex items-center justify-center px-5 h-[42px] sm:h-[44px] rounded-full bg-[#FFF9F0] text-[#101010] text-[14px] font-semibold hover:bg-white hover:shadow-md transition-all duration-200 cursor-pointer active:scale-95"
          >
            {data.ui.exploreMenu}
          </button>

          {/* Burgundy Pill: Order Now */}
          <button
            onClick={onOpenOrder}
            className="inline-flex items-center gap-2 justify-center px-5 sm:px-6 h-[42px] sm:h-[44px] rounded-full bg-[#9A3040] text-white text-[14px] font-semibold hover:bg-[#852735] hover:shadow-[0_10px_25px_rgba(154,48,64,0.35)] transition-all duration-200 cursor-pointer active:scale-95 relative"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>{data.ui.orderNow}</span>
            {orderCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-white text-[#9A3040] text-xs font-bold flex items-center justify-center">
                {orderCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors focus:outline-none cursor-pointer"
            aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-40 bg-black/65 backdrop-blur-md pointer-events-auto flex flex-col justify-start pt-28 px-5 pb-8"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="glass-black border border-white/15 rounded-[32px] p-6 text-white max-w-md w-full mx-auto shadow-2xl space-y-6 text-start"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex flex-col text-start">
                  <span className="font-bold text-lg block">{data.name}</span>
                  <span className="text-xs text-[#E8DCCB]/60">{data.city}</span>
                </div>

                {/* Language button in mobile drawer */}
                <button
                  onClick={toggleLang}
                  className="px-3 py-1.5 rounded-full bg-white/15 text-xs font-semibold text-white flex items-center gap-1.5 border border-white/20"
                >
                  <Globe className="w-3.5 h-3.5 text-[#D69A3A]" />
                  <span>{isRtl ? 'English' : 'عربي'}</span>
                </button>
              </div>

              <div className="flex flex-col space-y-3 text-base font-medium text-[#E4DBD0]">
                <button
                  onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false); }}
                  className="text-start py-2 hover:text-[#D69A3A] transition-colors"
                >
                  {isRtl ? 'الرئيسية' : 'Home'}
                </button>
                <button
                  onClick={() => scrollTo('menu')}
                  className="text-start py-2 hover:text-[#D69A3A] transition-colors"
                >
                  {isRtl ? 'القائمة الكاملة' : 'Full Menu'}
                </button>
                <button
                  onClick={() => scrollTo('featured')}
                  className="text-start py-2 hover:text-[#D69A3A] transition-colors"
                >
                  {isRtl ? 'الأكثر طلبًا' : 'Popular Dishes'}
                </button>
                <button
                  onClick={() => scrollTo('combinations')}
                  className="text-start py-2 hover:text-[#D69A3A] transition-colors"
                >
                  {isRtl ? 'خيارات وتوليفات سَفرة' : 'Signature Combos'}
                </button>
                <button
                  onClick={() => scrollTo('branches')}
                  className="text-start py-2 hover:text-[#D69A3A] transition-colors flex items-center justify-between"
                >
                  <span>{isRtl ? 'فروعنا في الرياض' : 'Riyadh Branches'}</span>
                  <MapPin className="w-4 h-4 text-[#D69A3A]" />
                </button>
                <button
                  onClick={() => scrollTo('story')}
                  className="text-start py-2 hover:text-[#D69A3A] transition-colors"
                >
                  {isRtl ? 'عن سَفرة' : 'About Sofrah'}
                </button>
                <button
                  onClick={() => scrollTo('faq')}
                  className="text-start py-2 hover:text-[#D69A3A] transition-colors"
                >
                  {isRtl ? 'الأسئلة الشائعة' : 'FAQ'}
                </button>
                <button
                  onClick={() => scrollTo('contact')}
                  className="text-start py-2 hover:text-[#D69A3A] transition-colors flex items-center justify-between"
                >
                  <span>{isRtl ? 'تواصل معنا' : 'Contact'}</span>
                  <Phone className="w-4 h-4 text-[#9A3040]" />
                </button>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenOrder(); }}
                  className="w-full h-12 rounded-full bg-[#9A3040] text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#852735] transition-colors shadow-md"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{data.ui.orderNow}</span>
                </button>
                <button
                  onClick={() => scrollTo('menu')}
                  className="w-full h-12 rounded-full bg-[#E8DCCB] text-[#121212] font-semibold flex items-center justify-center gap-2"
                >
                  <span>{data.ui.exploreMenu}</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
