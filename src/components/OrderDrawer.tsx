import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getRestaurantData, MenuItem } from '../data/restaurantData';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowLeft, ArrowRight, Truck, Store, Utensils, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface CartItem {
  id: string;
  item: MenuItem;
  quantity: number;
  options: string[];
  addOns: string[];
  price: number;
}

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  initialMethod?: 'delivery' | 'pickup' | 'dine-in';
  initialBranch?: string;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  initialMethod = 'delivery',
  initialBranch
}) => {
  const { lang, isRtl } = useLanguage();
  const data = getRestaurantData(lang);
  const { ui } = data;

  const [orderMethod, setOrderMethod] = useState<'delivery' | 'pickup' | 'dine-in'>(initialMethod);
  const [selectedBranch, setSelectedBranch] = useState<string>(
    initialBranch || data.branches[0]?.name || (isRtl ? 'فرع النخيل' : 'Al Nakheel Branch')
  );
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = orderMethod === 'delivery' ? 12 : 0;
  const grandTotal = subtotal + deliveryFee;
  const currency = isRtl ? 'ر.س' : 'SAR';

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const handleConfirmOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;
    setOrderConfirmed(true);
  };

  const handleReset = () => {
    setOrderConfirmed(false);
    onClearCart();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex justify-start"
      onClick={onClose}
    >
      <motion.div
        initial={{ x: isRtl ? -350 : 350, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: isRtl ? -350 : 350, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-lg bg-white h-full shadow-2xl flex flex-col justify-between text-start overflow-hidden border-e border-[#E4DBD0]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#E4DBD0] flex items-center justify-between bg-[#FFF9F0]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#9A3040] flex items-center justify-center text-white shadow-sm">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#121212]">
                {isRtl ? 'طلب سَفرة التجريبي' : 'Sofrah Demo Order'}
              </h2>
              <span className="text-xs text-[#68615B]">
                {isRtl ? 'عرض توضيحي للهوية والخيارات' : 'Interactive Concept Showcase'}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white border border-[#E4DBD0] flex items-center justify-center text-[#121212] hover:bg-[#E8DCCB] transition-colors cursor-pointer"
            aria-label="إغلاق"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Confirmed State Dialog */}
        {orderConfirmed ? (
          <div className="p-8 flex-1 flex flex-col items-center justify-center text-center space-y-5 overflow-y-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-[#121212]">
              {ui.orderSuccess}
            </h3>

            <div className="p-5 rounded-2xl bg-[#FFF9F0] border border-[#E4DBD0] text-sm text-[#68615B] text-start space-y-2 w-full">
              <div className="flex justify-between font-bold text-[#121212] border-b border-[#E4DBD0]/60 pb-2">
                <span>{ui.deliveryMethod}</span>
                <span>
                  {orderMethod === 'delivery'
                    ? (isRtl ? 'توصيل' : 'Delivery')
                    : orderMethod === 'pickup'
                    ? (isRtl ? 'استلام من الفرع' : 'Branch Pickup')
                    : (isRtl ? 'محلي' : 'Dine-in')}
                </span>
              </div>
              {orderMethod === 'pickup' && (
                <div className="flex justify-between">
                  <span>{isRtl ? 'الفرع:' : 'Branch:'}</span>
                  <span className="font-semibold text-[#121212]">{selectedBranch}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>{isRtl ? 'عدد الأصناف:' : 'Items Count:'}</span>
                <span>{cartItems.length} {isRtl ? 'أطباق' : 'dishes'}</span>
              </div>
              <div className="flex justify-between font-bold text-[#9A3040] text-base pt-1">
                <span>{ui.total}</span>
                <span>{grandTotal} {currency}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed text-start flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>{ui.demoNotice}</span>
            </div>

            <button
              onClick={handleReset}
              className="w-full h-12 rounded-full bg-[#101010] text-white font-semibold text-sm hover:bg-[#9A3040] transition-colors cursor-pointer"
            >
              {ui.backToRestaurant}
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Method Segmented Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#68615B]">
                {ui.deliveryMethod}
              </label>
              <div className="grid grid-cols-3 gap-2 p-1.5 rounded-full bg-[#FFF9F0] border border-[#E4DBD0]">
                <button
                  type="button"
                  onClick={() => setOrderMethod('delivery')}
                  className={`h-9 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                    orderMethod === 'delivery'
                      ? 'bg-[#9A3040] text-white shadow-sm'
                      : 'text-[#68615B] hover:text-[#121212]'
                  }`}
                >
                  <Truck className="w-3.5 h-3.5" />
                  <span>{isRtl ? 'توصيل' : 'Delivery'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setOrderMethod('pickup')}
                  className={`h-9 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                    orderMethod === 'pickup'
                      ? 'bg-[#9A3040] text-white shadow-sm'
                      : 'text-[#68615B] hover:text-[#121212]'
                  }`}
                >
                  <Store className="w-3.5 h-3.5" />
                  <span>{isRtl ? 'استلام' : 'Pickup'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setOrderMethod('dine-in')}
                  className={`h-9 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                    orderMethod === 'dine-in'
                      ? 'bg-[#9A3040] text-white shadow-sm'
                      : 'text-[#68615B] hover:text-[#121212]'
                  }`}
                >
                  <Utensils className="w-3.5 h-3.5" />
                  <span>{isRtl ? 'محلي' : 'Dine In'}</span>
                </button>
              </div>
            </div>

            {/* Branch Selector if Pickup or Dine-in */}
            {(orderMethod === 'pickup' || orderMethod === 'dine-in') && (
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#68615B]">
                  {ui.pickupBranch}
                </label>
                <select
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className="w-full h-11 px-4 rounded-2xl bg-white border border-[#E4DBD0] text-sm text-[#121212] focus:outline-none focus:border-[#9A3040]"
                >
                  {data.branches.map((b) => (
                    <option key={b.id} value={b.name}>
                      {b.name} — {b.address}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Delivery address input if delivery */}
            {orderMethod === 'delivery' && (
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#68615B]">
                  {ui.addressLabel}
                </label>
                <input
                  type="text"
                  placeholder={ui.addressPlaceholder}
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  className="w-full h-11 px-4 rounded-2xl bg-white border border-[#E4DBD0] text-sm text-[#121212] focus:outline-none focus:border-[#9A3040]"
                />
              </div>
            )}

            {/* Cart Items List */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#121212]">
                  {isRtl ? `وجباتك المختارة (${cartItems.length})` : `Selected Dishes (${cartItems.length})`}
                </span>
                {cartItems.length > 0 && (
                  <button
                    onClick={onClearCart}
                    className="text-xs text-red-600 hover:underline cursor-pointer"
                  >
                    {isRtl ? 'تفريغ السلة' : 'Clear All'}
                  </button>
                )}
              </div>

              {cartItems.length === 0 ? (
                <div className="p-8 text-center rounded-3xl bg-[#FFF9F0] border border-dashed border-[#E4DBD0] space-y-3">
                  <p className="text-sm font-semibold text-[#121212]">
                    {ui.cartEmpty}
                  </p>
                  <p className="text-xs text-[#68615B]">
                    {ui.cartEmptyDesc}
                  </p>
                </div>
              ) : (
                <div className="space-y-3 max-h-64 overflow-y-auto pe-1">
                  {cartItems.map((cartItem) => (
                    <div
                      key={cartItem.id}
                      className="p-3.5 rounded-2xl border border-[#E4DBD0] bg-white flex items-center justify-between gap-3 text-start"
                    >
                      <img
                        src={cartItem.item.image}
                        alt={cartItem.item.name}
                        className="w-14 h-14 rounded-xl object-cover shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-[#121212] truncate">
                          {cartItem.item.name}
                        </h4>
                        <div className="text-[11px] text-[#68615B] space-x-1 truncate">
                          {cartItem.options.join(', ')}
                          {cartItem.addOns.length > 0 && ` + ${cartItem.addOns.join(', ')}`}
                        </div>
                        <span className="text-xs font-bold text-[#9A3040]">
                          {(cartItem.price * cartItem.quantity).toFixed(0)} {currency}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={() => onUpdateQuantity(cartItem.id, -1)}
                          className="w-7 h-7 rounded-full bg-[#FFF9F0] border border-[#E4DBD0] flex items-center justify-center text-xs hover:bg-[#E8DCCB] cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold w-4 text-center">
                          {cartItem.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(cartItem.id, 1)}
                          className="w-7 h-7 rounded-full bg-[#FFF9F0] border border-[#E4DBD0] flex items-center justify-center text-xs hover:bg-[#E8DCCB] cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => onRemoveItem(cartItem.id)}
                          className="w-7 h-7 rounded-full flex items-center justify-center text-red-500 hover:bg-red-50 cursor-pointer ms-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Customer Details Form */}
            {cartItems.length > 0 && (
              <div className="space-y-3 pt-3 border-t border-[#E4DBD0]">
                <label className="text-xs font-bold text-[#68615B]">
                  {ui.customerInfo}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder={ui.namePlaceholder}
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="h-10 px-3 rounded-xl border border-[#E4DBD0] text-xs focus:outline-none focus:border-[#9A3040]"
                  />
                  <input
                    type="tel"
                    placeholder={ui.phonePlaceholder}
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="h-10 px-3 rounded-xl border border-[#E4DBD0] text-xs focus:outline-none focus:border-[#9A3040]"
                    dir="ltr"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Footer Summary & Confirm Action */}
        {!orderConfirmed && (
          <div className="p-6 bg-[#FFF9F0] border-t border-[#E4DBD0] space-y-4">
            <div className="space-y-1.5 text-xs text-[#68615B]">
              <div className="flex justify-between">
                <span>{ui.subtotal}</span>
                <span>{subtotal.toFixed(0)} {currency}</span>
              </div>
              {orderMethod === 'delivery' && (
                <div className="flex justify-between">
                  <span>{ui.deliveryFee}</span>
                  <span>{deliveryFee} {currency}</span>
                </div>
              )}
              <div className="flex justify-between text-base font-bold text-[#121212] pt-2 border-t border-[#E4DBD0]">
                <span>{ui.total}</span>
                <span className="text-[#9A3040]">{grandTotal.toFixed(0)} {currency}</span>
              </div>
            </div>

            <button
              onClick={handleConfirmOrder}
              disabled={cartItems.length === 0}
              className="w-full h-13 rounded-full bg-[#9A3040] disabled:bg-[#9A3040]/40 text-white font-semibold text-sm hover:bg-[#852735] transition-all flex items-center justify-between px-6 shadow-md cursor-pointer disabled:cursor-not-allowed"
            >
              <span>{ui.confirmDemoOrder}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>

            <p className="text-[11px] text-center text-[#68615B]">
              {ui.demoNotice}
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};
