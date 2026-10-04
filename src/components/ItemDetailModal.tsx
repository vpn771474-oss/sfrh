import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MenuItem } from '../data/restaurantData';
import { X, Flame, Plus, Minus, Check, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ItemDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem, quantity: number, selectedOptions: string[], addOns: string[]) => void;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({ item, onClose, onAddToCart }) => {
  const { isRtl } = useLanguage();

  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState<string>(item.options?.[0] || '');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const toggleAddOn = (name: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(name) ? prev.filter((a) => a !== name) : [...prev, name]
    );
  };

  const handleAdd = () => {
    onAddToCart(item, quantity, selectedOption ? [selectedOption] : [], selectedAddOns);
    onClose();
  };

  // Calculate dynamic price
  const basePrice = parseFloat(item.price) || 0;
  const addOnsTotal = selectedAddOns.reduce((sum, addOnName) => {
    const found = item.addOns?.find((a) => a.name === addOnName);
    return sum + (found?.price || 0);
  }, 0);
  const totalPrice = ((basePrice + addOnsTotal) * quantity).toFixed(0);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white rounded-[32px] sm:rounded-[36px] overflow-hidden max-w-2xl w-full shadow-2xl border border-[#E4DBD0] text-start flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#E8DCCB]/40 shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className={`absolute top-4 ${
              isRtl ? 'left-4' : 'right-4'
            } w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer`}
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges */}
          <div
            className={`absolute top-4 ${
              isRtl ? 'right-4' : 'left-4'
            } flex items-center gap-2`}
          >
            {item.spicy && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#9A3040] text-white text-xs font-semibold">
                <Flame className="w-3.5 h-3.5" />
                <span>{isRtl ? 'سبايسي' : 'Spicy'}</span>
              </span>
            )}
            {item.new && (
              <span className="px-3 py-1 rounded-full bg-[#D69A3A] text-[#121212] text-xs font-bold">
                {isRtl ? 'جديد' : 'New'}
              </span>
            )}
          </div>

          <div className="absolute bottom-4 right-6 left-6 flex items-baseline justify-between text-white">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              {item.name}
            </h3>
            {item.calories && (
              <span className="text-xs bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
                {item.calories}
              </span>
            )}
          </div>
        </div>

        {/* Scrollable details */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <p className="text-[#68615B] text-base leading-relaxed">
            {item.description}
          </p>

          {item.details && (
            <div className="p-4 rounded-2xl bg-[#FFF9F0] border border-[#E4DBD0] text-xs text-[#596044] font-medium flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D69A3A] shrink-0" />
              <span>{item.details}</span>
            </div>
          )}

          {/* Options */}
          {item.options && item.options.length > 0 && (
            <div className="space-y-3">
              <label className="block text-sm font-bold text-[#121212]">
                {isRtl ? 'الحجم / النوع:' : 'Size / Style:'}
              </label>
              <div className="flex flex-wrap gap-2.5">
                {item.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSelectedOption(opt)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer border ${
                      selectedOption === opt
                        ? 'bg-[#101010] text-white border-[#101010]'
                        : 'bg-white text-[#121212] border-[#E4DBD0] hover:border-[#9A3040]'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add-ons */}
          {item.addOns && item.addOns.length > 0 && (
            <div className="space-y-3">
              <label className="block text-sm font-bold text-[#121212]">
                {isRtl ? 'إضافات مقترحة:' : 'Suggested Add-ons:'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {item.addOns.map((addOn) => {
                  const isSelected = selectedAddOns.includes(addOn.name);
                  return (
                    <button
                      key={addOn.name}
                      onClick={() => toggleAddOn(addOn.name)}
                      className={`p-3 rounded-2xl text-xs font-medium flex items-center justify-between transition-colors cursor-pointer border text-start ${
                        isSelected
                          ? 'bg-[#FFF9F0] border-[#9A3040] text-[#9A3040]'
                          : 'bg-white border-[#E4DBD0] text-[#121212] hover:border-[#101010]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected
                              ? 'bg-[#9A3040] border-[#9A3040] text-white'
                              : 'border-[#E4DBD0]'
                          }`}
                        >
                          {isSelected && <Check className="w-2.5 h-2.5" />}
                        </div>
                        <span>{addOn.name}</span>
                      </div>
                      <span className="font-bold">+{addOn.price} {item.currency}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer with quantity and add button */}
        <div className="p-6 sm:p-8 bg-[#FFF9F0] border-t border-[#E4DBD0] flex items-center justify-between gap-4 shrink-0">
          {/* Quantity Selector */}
          <div className="flex items-center gap-3 bg-white border border-[#E4DBD0] rounded-full px-3 py-1.5 shadow-sm">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#FFF9F0] text-[#121212] transition-colors cursor-pointer"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="text-base font-bold w-6 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#FFF9F0] text-[#121212] transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Add button */}
          <button
            onClick={handleAdd}
            className="flex-1 h-12 rounded-full bg-[#9A3040] text-white font-semibold text-sm sm:text-base hover:bg-[#852735] transition-all flex items-center justify-between px-6 shadow-md cursor-pointer"
          >
            <span>{isRtl ? 'أضف إلى الطلب' : 'Add to Order'}</span>
            <span>{totalPrice} {item.currency}</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
