import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getRestaurantData, MenuItem } from '../data/restaurantData';
import { Search, Flame, Plus, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectItem, onQuickAdd }) => {
  const { lang, isRtl } = useLanguage();
  const data = getRestaurantData(lang);
  const { ui } = data;

  const [selectedCategory, setSelectedCategory] = useState<string>('popular');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [spicyOnly, setSpicyOnly] = useState<boolean>(false);
  const [addedItemNotice, setAddedItemNotice] = useState<string | null>(null);

  const categories = useMemo(() => {
    return data.menuCategories.filter((c) => c.enabled);
  }, [data]);

  const filteredItems = useMemo(() => {
    return data.menuItems.filter((item) => {
      if (!item.enabled) return false;

      // Category filter
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'popular') {
          if (!item.popular && item.category !== 'popular') return false;
        } else if (item.category !== selectedCategory) {
          return false;
        }
      }

      // Spicy filter
      if (spicyOnly && !item.spicy) {
        return false;
      }

      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.trim().toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc) return false;
      }

      return true;
    });
  }, [data, selectedCategory, searchQuery, spicyOnly]);

  const handleQuickAdd = (item: MenuItem, e: React.MouseEvent) => {
    e.stopPropagation();
    onQuickAdd(item);
    setAddedItemNotice(item.id);
    setTimeout(() => {
      setAddedItemNotice((prev) => (prev === item.id ? null : prev));
    }, 1500);
  };

  return (
    <section id="menu" className="w-full bg-[#FFF9F0] py-20 lg:py-28 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1450px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#9A3040]" />
            <span className="text-[13px] sm:text-[14px] font-semibold text-[#9A3040] tracking-wider uppercase">
              {isRtl ? 'قائمة سَفرة' : 'Sofrah Collection'}
            </span>
            <span className="w-2 h-2 rounded-full bg-[#9A3040]" />
          </div>

          <h2 className="text-[38px] sm:text-[50px] lg:text-[60px] font-semibold text-[#121212] tracking-tight leading-[1.14] mb-4">
            {isRtl ? 'نكهات محضرة بذوق' : 'Crafted With Intention'}
          </h2>

          <p className="text-[#68615B] text-base sm:text-lg leading-relaxed font-normal max-w-xl">
            {isRtl
              ? 'مجموعة متكاملة من الشاورما الأصيلة، البرجر الطازج، البروست المقرمش والمشروبات والحلويات التي تكتمل بها مائدتك.'
              : 'An expansive editorial menu spanning authentic shawarma, smashed Angus burgers, crunchy broasted chicken, and chilled accompaniments.'}
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2 overflow-x-auto pb-4 pt-1 no-scrollbar justify-start lg:justify-center">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.slug;
              return (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-[15px] font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#101010] text-white shadow-md scale-[1.02]'
                      : 'bg-white/80 hover:bg-[#E8DCCB]/60 text-[#121212] border border-[#E4DBD0]'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Search & Spicy filter controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-6 border-t border-[#E4DBD0]/60 max-w-4xl mx-auto">
            <div className="relative w-full sm:w-80">
              <input
                type="text"
                placeholder={ui.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full h-11 ${
                  isRtl ? 'pr-10 pl-4' : 'pl-10 pr-4'
                } rounded-full bg-white border border-[#E4DBD0] text-sm text-[#121212] placeholder-[#68615B]/60 focus:outline-none focus:border-[#9A3040] transition-colors`}
              />
              <Search
                className={`w-4 h-4 text-[#68615B] absolute ${
                  isRtl ? 'right-3.5' : 'left-3.5'
                } top-1/2 -translate-y-1/2`}
              />
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                onClick={() => setSpicyOnly(!spicyOnly)}
                className={`h-11 px-5 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors cursor-pointer border ${
                  spicyOnly
                    ? 'bg-[#9A3040] text-white border-[#9A3040]'
                    : 'bg-white text-[#68615B] border-[#E4DBD0] hover:border-[#9A3040]'
                }`}
              >
                <Flame className={`w-4 h-4 ${spicyOnly ? 'text-white' : 'text-[#9A3040]'}`} />
                <span>{ui.spicyOnly}</span>
              </button>

              <span className="text-xs text-[#68615B] hidden sm:inline">
                {filteredItems.length} {ui.itemsCount}
              </span>
            </div>
          </div>
        </div>

        {/* Menu Items Grid with Motion Layout */}
        {filteredItems.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item) => {
                const isAdded = addedItemNotice === item.id;
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -4 }}
                    key={item.id}
                    onClick={() => onSelectItem(item)}
                    className="group rounded-[28px] sm:rounded-[30px] bg-white border border-[#E4DBD0] overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between cursor-pointer"
                  >
                    {/* Image container */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E8DCCB]/30">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />

                      {/* Subtle badges */}
                      <div
                        className={`absolute top-4 ${
                          isRtl ? 'right-4' : 'left-4'
                        } flex items-center gap-2`}
                      >
                        {item.spicy && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#9A3040] text-white text-[11px] font-semibold shadow-sm">
                            <Flame className="w-3 h-3 text-orange-200" />
                            <span>{isRtl ? 'سبايسي' : 'Spicy'}</span>
                          </span>
                        )}
                        {item.new && (
                          <span className="px-3 py-1 rounded-full bg-[#D69A3A] text-[#121212] text-[11px] font-bold shadow-sm">
                            {isRtl ? 'جديد' : 'New'}
                          </span>
                        )}
                      </div>

                      {item.calories && (
                        <div
                          className={`absolute bottom-3 ${
                            isRtl ? 'left-3' : 'right-3'
                          } bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-0.5 rounded-full`}
                        >
                          {item.calories}
                        </div>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="p-6 text-start flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-xl sm:text-2xl font-bold text-[#121212] group-hover:text-[#9A3040] transition-colors leading-tight">
                            {item.name}
                          </h3>
                          {item.price && (
                            <div className="text-lg sm:text-xl font-bold text-[#101010] whitespace-nowrap">
                              {item.price}{' '}
                              <span className="text-xs font-normal text-[#68615B]">
                                {item.currency}
                              </span>
                            </div>
                          )}
                        </div>

                        {item.description && (
                          <p className="text-sm text-[#68615B] leading-relaxed line-clamp-2">
                            {item.description}
                          </p>
                        )}
                      </div>

                      {/* Action Bar */}
                      <div className="pt-2 border-t border-[#E4DBD0]/60 flex items-center justify-between">
                        <span className="text-xs text-[#68615B] font-medium">
                          {item.options ? `${item.options.length} ${ui.dishOptions}` : (isRtl ? 'وجبة مميزة' : 'Signature Plate')}
                        </span>

                        <button
                          onClick={(e) => handleQuickAdd(item, e)}
                          className={`h-9 px-4 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
                            isAdded
                              ? 'bg-[#596044] text-white'
                              : 'bg-[#101010] text-white hover:bg-[#9A3040]'
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>{ui.addedNotice}</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              <span>{item.cta || ui.quickAdd}</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-20 bg-white/50 rounded-[32px] border border-dashed border-[#E4DBD0] max-w-lg mx-auto p-8 space-y-4">
            <p className="text-lg font-semibold text-[#121212]">{ui.noResults}</p>
            <p className="text-sm text-[#68615B]">{isRtl ? 'جرب تغيير التصنيف أو مسح كلمات البحث لتصفح القائمة الكاملة.' : 'Try changing categories or clearing search keywords to explore all items.'}</p>
            <button
              onClick={() => {
                setSelectedCategory('popular');
                setSearchQuery('');
                setSpicyOnly(false);
              }}
              className="h-10 px-6 rounded-full bg-[#101010] text-white text-xs font-semibold hover:bg-[#9A3040] transition-colors"
            >
              {ui.resetFilters}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
