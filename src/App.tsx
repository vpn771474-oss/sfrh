import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { getRestaurantData, MenuItem, Offer } from './data/restaurantData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedFood } from './components/FeaturedFood';
import { MenuSection } from './components/MenuSection';
import { OrderingExperience } from './components/OrderingExperience';
import { PopularCombinations } from './components/PopularCombinations';
import { BranchesSection } from './components/BranchesSection';
import { RestaurantStory } from './components/RestaurantStory';
import { EditorialKitchen } from './components/EditorialKitchen';
import { OffersSection } from './components/OffersSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ItemDetailModal } from './components/ItemDetailModal';
import { OrderDrawer, CartItem } from './components/OrderDrawer';
import { AnimatePresence } from 'motion/react';

function RestaurantApp() {
  const { lang, isRtl } = useLanguage();
  const data = getRestaurantData(lang);

  const [selectedItemForModal, setSelectedItemForModal] = useState<MenuItem | null>(null);
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState<boolean>(false);
  const [orderMethodPreference, setOrderMethodPreference] = useState<'delivery' | 'pickup' | 'dine-in'>('delivery');
  const [targetBranch, setTargetBranch] = useState<string | undefined>(undefined);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Add item to cart from modal
  const handleAddToCart = (
    item: MenuItem,
    quantity: number,
    selectedOptions: string[],
    addOns: string[]
  ) => {
    const basePrice = parseFloat(item.price) || 0;
    const addOnsTotal = addOns.reduce((sum, addOnName) => {
      const found = item.addOns?.find((a) => a.name === addOnName);
      return sum + (found?.price || 0);
    }, 0);
    const itemUnitPrice = basePrice + addOnsTotal;

    const newItemId = `${item.id}-${Date.now()}`;
    const newCartItem: CartItem = {
      id: newItemId,
      item,
      quantity,
      options: selectedOptions,
      addOns,
      price: itemUnitPrice
    };

    setCartItems((prev) => [...prev, newCartItem]);
    setIsOrderDrawerOpen(true);
  };

  // Quick add single item from menu card
  const handleQuickAdd = (item: MenuItem) => {
    const basePrice = parseFloat(item.price) || 0;
    const existing = cartItems.find((ci) => ci.item.id === item.id && ci.addOns.length === 0);

    if (existing) {
      setCartItems((prev) =>
        prev.map((ci) => (ci.id === existing.id ? { ...ci, quantity: ci.quantity + 1 } : ci))
      );
    } else {
      const newCartItem: CartItem = {
        id: `${item.id}-${Date.now()}`,
        item,
        quantity: 1,
        options: item.options ? [item.options[0]] : [],
        addOns: [],
        price: basePrice
      };
      setCartItems((prev) => [...prev, newCartItem]);
    }
  };

  // Quick add from Special Offers
  const handleSelectOffer = (offer: Offer) => {
    const fakeMenuItem: MenuItem = {
      id: offer.id,
      enabled: true,
      name: offer.title,
      category: 'offers',
      description: offer.description,
      image: offer.image,
      price: offer.price,
      currency: isRtl ? 'ر.س' : 'SAR',
      featured: false,
      popular: true,
      spicy: false
    };
    handleQuickAdd(fakeMenuItem);
    setIsOrderDrawerOpen(true);
  };

  // Update item quantity in cart
  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((ci) => {
          if (ci.id === id) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  // Remove item from cart
  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.id !== id));
  };

  // Clear entire cart
  const handleClearCart = () => {
    setCartItems([]);
  };

  // Open ordering drawer with specific method
  const handleOpenOrder = (method: 'delivery' | 'pickup' | 'dine-in' = 'delivery') => {
    setOrderMethodPreference(method);
    setIsOrderDrawerOpen(true);
  };

  // Open ordering drawer for specific branch
  const handleOpenOrderForBranch = (branchName: string) => {
    setOrderMethodPreference('pickup');
    setTargetBranch(branchName);
    setIsOrderDrawerOpen(true);
  };

  const handleScrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={`min-h-screen bg-[#FFF9F0] text-[#121212] selection:bg-[#9A3040] selection:text-white ${isRtl ? 'font-arabic' : 'font-english'}`}>
      {/* 01: FLOATING BLACK GLASS CAPSULE NAVBAR */}
      <Navbar
        onOpenOrder={() => handleOpenOrder('delivery')}
        orderCount={totalItemCount}
      />

      <main>
        {/* 02: HERO (MASSIVE WARM WHITE SPACE, EYEBROW, HUGE ARABIC/ENGLISH HEADLINE, 2 PILL BUTTONS, FOOD VISUALS) */}
        <Hero
          onOpenOrder={() => handleOpenOrder('delivery')}
          onExploreMenu={handleScrollToMenu}
        />

        {/* 03: FEATURED / MOST POPULAR DISHES */}
        <FeaturedFood
          onSelectItem={(item) => setSelectedItemForModal(item)}
          onOpenOrder={() => handleOpenOrder('delivery')}
        />

        {/* 04: EDITORIAL MENU SECTION (AT LEAST 30 ITEMS) */}
        <MenuSection
          onSelectItem={(item) => setSelectedItemForModal(item)}
          onQuickAdd={handleQuickAdd}
        />

        {/* 05: ORDERING OPTIONS & 4-STEP CONCEPTUAL FLOW WITH EXTENDED GLASS-BLACK RECTANGLE */}
        <OrderingExperience
          onOpenOrder={(method) => handleOpenOrder(method || 'delivery')}
        />

        {/* 06: POPULAR COMBINATIONS ("ماذا تختار؟") */}
        <PopularCombinations
          onOpenOrder={() => handleOpenOrder('delivery')}
        />

        {/* 07: BRANCHES SECTION */}
        <BranchesSection
          onOpenOrderForBranch={handleOpenOrderForBranch}
        />

        {/* 08: RESTAURANT STORY & BRAND PRINCIPLES */}
        <RestaurantStory />

        {/* 09: FOOD EDITORIAL SECTION (DARK #101010) */}
        <EditorialKitchen
          onExploreMenu={handleScrollToMenu}
        />

        {/* 10: OPTIONAL SPECIAL OFFERS */}
        <OffersSection
          onSelectOffer={handleSelectOffer}
        />

        {/* 11: FAQ ACCORDION */}
        <FAQSection />

        {/* 12: CONTACT & CLOSING SECTION ("جعت؟") */}
        <ContactSection
          onOpenOrder={() => handleOpenOrder('delivery')}
        />
      </main>

      {/* 13: FOOTER */}
      <Footer />

      {/* ITEM DETAIL MODAL */}
      <AnimatePresence>
        {selectedItemForModal && (
          <ItemDetailModal
            item={selectedItemForModal}
            onClose={() => setSelectedItemForModal(null)}
            onAddToCart={handleAddToCart}
          />
        )}
      </AnimatePresence>

      {/* INTERACTIVE DEMONSTRATION ORDER DRAWER */}
      <AnimatePresence>
        {isOrderDrawerOpen && (
          <OrderDrawer
            isOpen={isOrderDrawerOpen}
            onClose={() => setIsOrderDrawerOpen(false)}
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onClearCart={handleClearCart}
            initialMethod={orderMethodPreference}
            initialBranch={targetBranch}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <RestaurantApp />
    </LanguageProvider>
  );
}

export default App;
