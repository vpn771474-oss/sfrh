export interface MenuItem {
  id: string;
  enabled: boolean;
  name: string;
  category: string;
  description: string;
  image: string;
  price: string;
  currency: string;
  featured: boolean;
  popular: boolean;
  spicy: boolean;
  new?: boolean;
  calories?: string;
  options?: string[];
  addOns?: { name: string; price: number }[];
  cta?: string;
  details?: string;
}

export interface MenuCategory {
  enabled: boolean;
  name: string;
  description: string;
  image?: string;
  slug: string;
  featured: boolean;
}

export interface Branch {
  id: string;
  enabled: boolean;
  name: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  image: string;
  mapUrl?: string;
  orderUrl?: string;
}

export interface Offer {
  id: string;
  enabled: boolean;
  title: string;
  description: string;
  image: string;
  price: string;
  oldPrice?: string;
  badge?: string;
  expiresAt?: string;
  cta?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CombinationItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  items: string[];
  tag: string;
}

export interface RestaurantData {
  name: string;
  shortName: string;
  subtitle: string;
  city: string;
  region: string;
  country: string;
  positioning: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  hours: string;
  isFictionalDisclaimer: string;
  
  socialLinks: {
    instagram: string;
    facebook: string;
    tiktok: string;
    x: string;
  };

  hero: {
    eyebrow: string;
    headline: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    mainVisual: {
      image: string;
      eyebrow: string;
      headline: string;
      tag: string;
    };
    secondaryVisual: {
      image: string;
      headline: string;
    };
    detailVisual: {
      image: string;
      headline: string;
    };
  };

  story: {
    eyebrow: string;
    headline: string;
    body: string;
    image: string;
    principles: { title: string; desc: string }[];
  };

  editorialKitchen: {
    eyebrow: string;
    headline: string;
    description: string;
    cta: string;
    image: string;
  };

  orderingMethods: {
    eyebrow: string;
    headline: string;
    methods: {
      id: string;
      title: string;
      description: string;
      icon: string;
    }[];
    steps: {
      step: string;
      title: string;
      desc: string;
    }[];
  };

  combinations: CombinationItem[];
  menuCategories: MenuCategory[];
  menuItems: MenuItem[];
  branches: Branch[];
  currentOffers: Offer[];
  faq: FAQItem[];
  contact: {
    headline: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };

  ui: {
    exploreMenu: string;
    orderNow: string;
    allDishes: string;
    searchPlaceholder: string;
    spicyOnly: string;
    itemsCount: string;
    quickAdd: string;
    addedNotice: string;
    dishOptions: string;
    noResults: string;
    resetFilters: string;
    subtotal: string;
    deliveryFee: string;
    total: string;
    cartEmpty: string;
    cartEmptyDesc: string;
    deliveryMethod: string;
    pickupBranch: string;
    selectBranchLabel: string;
    addressLabel: string;
    addressPlaceholder: string;
    customerInfo: string;
    namePlaceholder: string;
    phonePlaceholder: string;
    confirmDemoOrder: string;
    demoNotice: string;
    orderSuccess: string;
    orderSuccessDesc: string;
    backToRestaurant: string;
    openNow: string;
    directions: string;
    pickupFromThisBranch: string;
    comboCallout: string;
    comboBadge: string;
    quickLinks: string;
    contactInfo: string;
    backToTop: string;
    copyright: string;
    kitchenAccent: string;
    stepPrompt: string;
    readyPrompt: string;
    readySub: string;
  };
}

export const restaurantDataAr: RestaurantData = {
  name: "سَفرة",
  shortName: "سَفرة",
  subtitle: "مطعم سعودي عصري",
  city: "الرياض",
  region: "منطقة الرياض",
  country: "المملكة العربية السعودية",
  positioning: "طعم تعرفه، بطريقة تستحق التجربة.",
  phone: "+966 11 400 9000",
  whatsapp: "+966 50 123 4567",
  email: "hello@safra-demo.sa",
  address: "الرياض، المملكة العربية السعودية",
  hours: "يوميًا من 12:00 ظهرًا حتى 3:30 فجرًا",
  isFictionalDisclaimer: "سَفرة علامة مطعم تجريبية صُممت لأغراض التصميم وتجربة المستخدم وعرض الهوية البصرية فقط.",
  
  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "",
    tiktok: "https://tiktok.com",
    x: "https://x.com"
  },

  hero: {
    eyebrow: "شاورما • برجر • بروست",
    headline: "طعم تعرفه،\nبطريقة تستحق التجربة",
    description: "من الشاورما والبرجر إلى البروست والوجبات، نقدم قائمة تجمع بين الطعم المألوف والتقديم العصري.",
    primaryCta: "اطلب الآن",
    secondaryCta: "استكشف القائمة",
    mainVisual: {
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=85",
      eyebrow: "مختارات سَفرة",
      headline: "أطباق تحبها\nبطريقة مختلفة",
      tag: "الأكثر تميزاً"
    },
    secondaryVisual: {
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80",
      headline: "نكهة واضحة،\nوتفاصيل كثيرة"
    },
    detailVisual: {
      image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80",
      headline: "التفاصيل\nتفرق"
    }
  },

  story: {
    eyebrow: "عن سَفرة",
    headline: "نكهات نعرفها،\nبلمسة اليوم",
    body: "سَفرة علامة مطعم تجريبية صُممت لتقديم وجبات مألوفة مثل الشاورما والبرجر والبروست ضمن تجربة بصرية حديثة وبسيطة.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    principles: [
      { title: "نكهات واضحة", desc: "وصفات متوازنة تُبرز طعم اللحم والدجاج مع توابل مدروسة." },
      { title: "تفاصيل مرتبة", desc: "خبز محضر بعناية، صوصات موزونة وتقديم يعكس الرقي." },
      { title: "قائمة متنوعة", desc: "تجمع محبي الشاورما الكلاسيكية والبرجر العصري والبروست المقرمش." },
      { title: "تجربة بسيطة", desc: "واجهة واضحة وسريعة تضع الوجبة وصورتها في الصدارة." }
    ]
  },

  editorialKitchen: {
    eyebrow: "من المطبخ",
    headline: "كل طبق له لحظته",
    description: "من الشاورما الساخنة إلى البطاطس والصوصات، صُممت القائمة لتكون واضحة، مباشرة، ومليئة بالخيارات.",
    cta: "استكشف القائمة",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85"
  },

  orderingMethods: {
    eyebrow: "اطلب بالطريقة التي تناسبك",
    headline: "اختر كيف تريد\nأن تصل وجبتك",
    methods: [
      {
        id: "delivery",
        title: "توصيل",
        description: "طلبك يصل ساخنًا وطازجًا إلى باب بيتك أو مكتبك في وقت قياسي.",
        icon: "truck"
      },
      {
        id: "pickup",
        title: "استلام من الفرع",
        description: "اطلب مسبقًا واستلم وجبتك جاهزة دون انتظار في الفرع الأقرب لك.",
        icon: "store"
      },
      {
        id: "dine-in",
        title: "تناول في المطعم",
        description: "عش التجربة في أجواء فروعنا العصرية المريحة مع خدمتنا المباشرة.",
        icon: "utensils"
      }
    ],
    steps: [
      { step: "01", title: "اختر وجبتك", desc: "تصفح القائمة المتنوعة وحدد أطباقك المفضلة." },
      { step: "02", title: "أضف ما تحتاجه", desc: "خصص الإضافات والصوصات والخيارات الجانبية." },
      { step: "03", title: "اختر طريقة الاستلام", desc: "توصيل مباشر أو استلام فوري من الفرع." },
      { step: "04", title: "أكمل الطلب", desc: "متابعة فورية لحالة الطلب حتى الاستلام." }
    ]
  },

  combinations: [
    {
      id: "combo-shawarma",
      title: "كومبو الشاورما الكلاسيك",
      subtitle: "شاورما + بطاطس + مشروب",
      description: "ساندوتش شاورما دجاج أو لحم مع بطاطس ذهبية وصوص الثوم ومشروبك المنعش المفضل.",
      image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=1000&q=80",
      items: ["شاورما دجاج بالثوم", "بطاطس ذهبية مقرمشة", "صوص ثوم خاص", "مشروب غازي مثلج"],
      tag: "الأكثر طلبًا"
    },
    {
      id: "combo-burger",
      title: "كومبو برجر سَفرة المزدوج",
      subtitle: "برجر + بطاطس + مشروب",
      description: "برجر بقري مشوي مع جبنة شيدر ذائبة وصوص سَفرة الخاص بجانب بطاطس ومشروب غازي.",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=1000&q=80",
      items: ["برجر لحم سَفرة بالجبن", "بطاطس بالتوابل الخاصة", "صوص خاص", "مشروب غازي"],
      tag: "خيار الرواد"
    },
    {
      id: "combo-broast",
      title: "كومبو البروست المقرمش",
      subtitle: "بروست + سلطة + مشروب",
      description: "قطع دجاج مقرمشة بتتبيلة خاصة مع سلطة كولسلو طازجة وحمص وصوص ثوم ومشروب.",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1000&q=80",
      items: ["4 قطع بروست كرسبي", "سلطة كولسلو طازجة", "خبز وبطاطس وصوص ثوم", "مشروب غازي"],
      tag: "قرمشة أصلية"
    }
  ],

  menuCategories: [
    { enabled: true, name: "الأكثر طلبًا", slug: "popular", description: "الأطباق التي حازت على إعجاب الجميع", featured: true },
    { enabled: true, name: "الشاورما", slug: "shawarma", description: "شاورما أصيلة بخبز الصاج والفينو بتتبيلات خاصة", featured: true },
    { enabled: true, name: "البرجر", slug: "burger", description: "برجر اللحم الطازج والدجاج المقرمش بلمسة سَفرة", featured: true },
    { enabled: true, name: "البروست", slug: "broast", description: "دجاج متبل ومقرمش يقدم مع البطاطس والصوصات", featured: true },
    { enabled: true, name: "الوجبات", slug: "meals", description: "وجبات متكاملة مشبعة للشخص الواحد والمجموعات", featured: true },
    { enabled: true, name: "المقبلات", slug: "appetizers", description: "إضافات خفيفة ولذيذة ترافق وجبتك الأساسية", featured: false },
    { enabled: true, name: "البطاطس", slug: "fries", description: "بطاطس ذهبية مقلية بأنواع وصوصات متعددة", featured: false },
    { enabled: true, name: "الصوصات", slug: "sauces", description: "تشكيلة من صوصات سَفرة المعدة يومياً", featured: false },
    { enabled: true, name: "المشروبات", slug: "drinks", description: "مشروبات غازية وعصائر مثلجة منعشة", featured: false },
    { enabled: true, name: "الحلويات", slug: "desserts", description: "أطباق حلى خفيفة تختم بها وجبتك بطريقة مميزة", featured: false }
  ],

  menuItems: [
    {
      id: "item-01",
      enabled: true,
      name: "وجبة عربي دجاج",
      category: "popular",
      description: "شاورما دجاج مقطعة على الطريقة العربية تقدم مع البطاطس، المخلل، وصوص الثوم الخاص.",
      image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=1000&q=80",
      price: "28",
      currency: "ر.س",
      featured: true,
      popular: true,
      spicy: false,
      new: false,
      calories: "680 سعرة",
      options: ["عادي", "حار"],
      addOns: [{ name: "زيادة ثوم", price: 2 }, { name: "جبن ذائب", price: 4 }],
      cta: "اطلب الآن",
      details: "مقطعة إلى 6 قطع مع بطاطس ومخلل وصوص ثوم"
    },
    {
      id: "item-02",
      enabled: true,
      name: "بوكس شاورما مشكل",
      category: "popular",
      description: "تشكيلة من شاورما الدجاج واللحم بخبز الصاج مع 4 أنواع صوصات وبطاطس عائلية.",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1000&q=80",
      price: "68",
      currency: "ر.س",
      featured: true,
      popular: true,
      spicy: false,
      new: true,
      calories: "1420 سعرة",
      options: ["دجاج فقط", "لحم فقط", "مشكل دجاج ولحم"],
      addOns: [{ name: "صوص سَفرة الإضافي", price: 3 }, { name: "مشروب عائلي", price: 8 }],
      cta: "اطلب الآن"
    },
    {
      id: "item-03",
      enabled: true,
      name: "برجر سَفرة",
      category: "popular",
      description: "شريحة لحم بقري أنجوس مشوية مع صلصة سَفرة الخاصة، جبن شيدر، بصل مكرمل وخس طازج.",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80",
      price: "32",
      currency: "ر.س",
      featured: true,
      popular: true,
      spicy: false,
      new: false,
      calories: "620 سعرة",
      options: ["شريحة واحدة", "شريحتين"],
      addOns: [{ name: "بيكون بقري", price: 5 }, { name: "جبن إضافي", price: 4 }],
      cta: "اطلب الآن"
    },
    {
      id: "item-04",
      enabled: true,
      name: "دبل تشيز برجر",
      category: "popular",
      description: "شريحتان من اللحم البقري المشوي مغطاتان بطبقتين من الجبن الشيدر الذائب مع مخلل وصوص.",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=1000&q=80",
      price: "36",
      currency: "ر.س",
      featured: true,
      popular: true,
      spicy: false,
      new: false,
      calories: "780 سعرة",
      options: ["عادي", "مع مخلل إضافي"],
      addOns: [{ name: "صلصة هلابينو", price: 3 }],
      cta: "اطلب الآن"
    },
    {
      id: "item-05",
      enabled: true,
      name: "وجبة بروست",
      category: "popular",
      description: "أربع قطع من الدجاج المقرمش بالتتبيلة الأصلية مع البطاطس المقلية، الخبز وصوص الثوم.",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1000&q=80",
      price: "29",
      currency: "ر.س",
      featured: true,
      popular: true,
      spicy: false,
      new: false,
      calories: "890 سعرة",
      options: ["عادي", "حار سبايسي"],
      addOns: [{ name: "كولسلو", price: 4 }, { name: "ثوم زيادة", price: 2 }],
      cta: "اطلب الآن"
    },
    {
      id: "item-06",
      enabled: true,
      name: "شاورما دجاج",
      category: "shawarma",
      description: "شاورما دجاج متبلة ومشوية على السيخ العمودي، ملفوفة بخبز الصاج مع الثوم والمخلل.",
      image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=1000&q=80",
      price: "12",
      currency: "ر.س",
      featured: false,
      popular: true,
      spicy: false,
      calories: "340 سعرة",
      options: ["صغير", "صاروخ"],
      cta: "اطلب الآن"
    },
    {
      id: "item-07",
      enabled: true,
      name: "شاورما لحم",
      category: "shawarma",
      description: "شاورما لحم عجل فاخر متبل بتوابل شرقية مع صوص الطحينة، البقدونس وشرائح الطماطم.",
      image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=1000&q=80",
      price: "15",
      currency: "ر.س",
      featured: false,
      popular: true,
      spicy: false,
      calories: "390 سعرة",
      options: ["صغير", "صاروخ"],
      cta: "اطلب الآن"
    },
    {
      id: "item-08",
      enabled: true,
      name: "شاورما دجاج بالجبن",
      category: "shawarma",
      description: "شاورما دجاج ممزوجة بجبنة الموزاريلا والشيدر الذائبة ومحمصة على الجريل.",
      image: "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?auto=format&fit=crop&w=1000&q=80",
      price: "16",
      currency: "ر.س",
      featured: false,
      popular: false,
      spicy: false,
      calories: "460 سعرة",
      cta: "اطلب الآن"
    },
    {
      id: "item-09",
      enabled: true,
      name: "شاورما لحم بالجبن",
      category: "shawarma",
      description: "شاورما لحم متبلة مع مزيج الجبن الذائب والبصل المشوي على الصاج.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
      price: "19",
      currency: "ر.س",
      featured: false,
      popular: false,
      spicy: false,
      calories: "510 سعرة",
      cta: "اطلب الآن"
    },
    {
      id: "item-10",
      enabled: true,
      name: "شاورما سبايسي",
      category: "shawarma",
      description: "شاورما دجاج مع صلصة الشطة الحارة وشرائح الهلابينو لعشاق الطعم الناري.",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1000&q=80",
      price: "14",
      currency: "ر.س",
      featured: false,
      popular: true,
      spicy: true,
      calories: "360 سعرة",
      cta: "اطلب الآن"
    },
    {
      id: "item-11",
      enabled: true,
      name: "شاورما صاج",
      category: "shawarma",
      description: "رول شاورما رقيق بخبز الصاج المحمص والمقرمش مع الثوم والبطاطس الداخلية.",
      image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=1000&q=80",
      price: "13",
      currency: "ر.س",
      featured: false,
      popular: false,
      spicy: false,
      calories: "380 سعرة",
      cta: "اطلب الآن"
    },
    {
      id: "item-12",
      enabled: true,
      name: "شاورما عربي",
      category: "shawarma",
      description: "وجبة شاورما مقطعة إلى قطع صغيرة مع بطاطس مقلية، ثوم، مخلل، وصحن صوص جانبي.",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=80",
      price: "26",
      currency: "ر.س",
      featured: false,
      popular: true,
      spicy: false,
      calories: "670 سعرة",
      cta: "اطلب الآن"
    },
    {
      id: "item-13",
      enabled: true,
      name: "فتة شاورما",
      category: "shawarma",
      description: "طبقات من الخبز المحمص والأرز المبهر تعلوها شاورما الدجاج مع صوص الزبادي والثوم.",
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1000&q=80",
      price: "27",
      currency: "ر.س",
      featured: false,
      popular: false,
      spicy: false,
      calories: "590 سعرة",
      cta: "اطلب الآن"
    },
    {
      id: "item-14",
      enabled: true,
      name: "شاورما كرانشي",
      category: "shawarma",
      description: "شاورما دجاج مضاف إليها فتات الخبز المقرمش مع المايونيز الحار والجبن الذائب.",
      image: "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?auto=format&fit=crop&w=1000&q=80",
      price: "17",
      currency: "ر.س",
      featured: false,
      popular: true,
      spicy: false,
      new: true,
      calories: "480 سعرة",
      cta: "اطلب الآن"
    },
    {
      id: "item-15",
      enabled: true,
      name: "برجر لحم",
      category: "burger",
      description: "شريحة لحم بقري مشوية تقدم في خبز بريوش طري مع صوص كلاسيك وخس وطماطم.",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=80",
      price: "24",
      currency: "ر.س",
      featured: false,
      popular: false,
      spicy: false,
      calories: "520 سعرة",
      cta: "اطلب الآن"
    },
    {
      id: "item-16",
      enabled: true,
      name: "برجر دجاج",
      category: "burger",
      description: "صدر دجاج طازج مشوي بتتبيلة الأعشاب مع الخس وصلصة المايونيز بالليمون.",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=1000&q=80",
      price: "22",
      currency: "ر.س",
      featured: false,
      popular: false,
      spicy: false,
      calories: "460 سعرة",
      cta: "اطلب الآن"
    },
    {
      id: "item-17",
      enabled: true,
      name: "تشيز برجر",
      category: "burger",
      description: "برجر لحم كلاسيكي يعلوه شريحة من جبنة الشيدر الأمريكية الذائبة والمخلل.",
      image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=1000&q=80",
      price: "26",
      currency: "ر.س",
      featured: false,
      popular: true,
      spicy: false,
      calories: "570 سعرة",
      cta: "اطلب الآن"
    },
    {
      id: "item-18",
      enabled: true,
      name: "دبل تشيز",
      category: "burger",
      description: "شريحتان من اللحم البقري مع شريحتين من الجبن الذائب وصوص سَفرة المميز.",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=1000&q=80",
      price: "34",
      currency: "ر.س",
      featured: false,
      popular: true,
      spicy: false,
      calories: "760 سعرة",
      cta: "اطلب الآن"
    },
    {
      id: "item-19",
      enabled: true,
      name: "سموكي برجر",
      category: "burger",
      description: "لحم مشوي بنكهة الباربكيو المدخنة مع البصل المكرمل وجبنة الشيدر المعتقة.",
      image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=1000&q=80",
      price: "31",
      currency: "ر.س",
      featured: false,
      popular: false,
      spicy: false,
      calories: "640 سعرة",
      cta: "اطلب الآن"
    },
    {
      id: "item-20",
      enabled: true,
      name: "برجر سبايسي",
      category: "burger",
      description: "برجر لحم مع صلصة الشطة النارية، شرائح الفلفل الحار والجبن الذائب.",
      image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=1000&q=80",
      price: "28",
      currency: "ر.س",
      featured: false,
      popular: false,
      spicy: true,
      calories: "580 سعرة",
      cta: "اطلب الآن"
    },
    {
      id: "item-21",
      enabled: true,
      name: "برجر دجاج كرسبي",
      category: "burger",
      description: "قطعة دجاج مقرمشة ذهبية مع صوص المايونيز بالخردل وسلطة الكولسلو في خبز بريوش.",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=1000&q=80",
      price: "25",
      currency: "ر.س",
      featured: false,
      popular: true,
      spicy: false,
      calories: "610 سعرة",
      cta: "اطلب الآن"
    },
    {
      id: "item-22",
      enabled: true,
      name: "سلايدر سَفرة",
      category: "burger",
      description: "ثلاث قطع برجر سلايدر صغيرة متنوعة (لحم كلاسيك، دجاج كرسبي، ولحم مدخن).",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1000&q=80",
      price: "35",
      currency: "ر.س",
      featured: false,
      popular: false,
      spicy: false,
      new: true,
      calories: "690 سعرة",
      cta: "اطلب الآن"
    },
    {
      id: "item-23",
      enabled: true,
      name: "بروست عادي",
      category: "broast",
      description: "4 قطع دجاج طازجة مقلية حتى القرمشة مع البطاطس المقلية، صوص الثوم والخبز الطازج.",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1000&q=80",
      price: "24",
      currency: "ر.س",
      featured: false,
      popular: true,
      spicy: false,
      calories: "820 سعرة",
      cta: "اطلب الآن"
    },
    {
      id: "item-24",
      enabled: true,
      name: "بروست حار",
      category: "broast",
      description: "4 قطع دجاج متبلة ببهارات البروست الحارة مع بطاطس وصوص ثوم حار وخبز.",
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=1000&q=80",
      price: "25",
      currency: "ر.س",
      featured: false,
      popular: true,
      spicy: true,
      calories: "850 سعرة",
      cta: "اطلب الآن"
    },
    {
      id: "item-25",
      enabled: true,
      name: "وجبة بروست كاملة",
      category: "broast",
      description: "8 قطع دجاج مقرمشة تكفي شخصين مع بطاطس كبيرة، سلطة كولسلو، 3 صوصات وخبز.",
      image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=1000&q=80",
      price: "46",
      currency: "ر.س",
      featured: false,
      popular: false,
      spicy: false,
      calories: "1640 سعرة",
      cta: "اطلب الآن"
    },
    {
      id: "item-26",
      enabled: true,
      name: "تشيكن ستربس",
      category: "broast",
      description: "5 أصابع دجاج مقرمشة خالية من العظم مع البطاطس وصلصة الماسترد بالعسل.",
      image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=1000&q=80",
      price: "22",
      currency: "ر.س",
      featured: false,
      popular: true,
      spicy: false,
      calories: "540 سعرة",
      cta: "اطلب الآن"
    },
    {
      id: "item-27",
      enabled: true,
      name: "ناجتس دجاج",
      category: "broast",
      description: "6 قطع ناجتس مقلية ذهبية تقدم مع البطاطس المقرمشة وكاتشب سَفرة.",
      image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=1000&q=80",
      price: "18",
      currency: "ر.س",
      featured: false,
      popular: false,
      spicy: false,
      calories: "420 سعرة",
      cta: "اطلب الآن"
    },
    {
      id: "item-meals-01",
      enabled: true,
      name: "وجبة سَفرة المزدوجة",
      category: "meals",
      description: "ساندوتش شاورما مع برجر سنجل، بطاطس عائلية واثنين مشروب غازي.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80",
      price: "52",
      currency: "ر.س",
      featured: false,
      popular: true,
      spicy: false,
      calories: "1280 سعرة",
      cta: "اطلب الآن"
    },
    {
      id: "item-meals-02",
      enabled: true,
      name: "وجبة الأصحاب",
      category: "meals",
      description: "4 ساندوتشات شاورما صاج مع 2 برجر كرسبي، بطاطس لودد كبيرة و3 مشروبات.",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=80",
      price: "98",
      currency: "ر.س",
      featured: false,
      popular: false,
      spicy: false,
      calories: "2450 سعرة",
      cta: "اطلب الآن"
    },
    {
      id: "item-28",
      enabled: true,
      name: "حلقات بصل",
      category: "appetizers",
      description: "حلقات بصل مقرمشة بالبقسماط الذهبي تقدم ساخنة مع صوص الرانش.",
      image: "https://images.unsplash.com/photo-1639744091980-fc02181d1e44?auto=format&fit=crop&w=1000&q=80",
      price: "12",
      currency: "ر.س",
      featured: false,
      popular: false,
      spicy: false,
      calories: "310 سعرة",
      cta: "اطلب الآن"
    },
    {
      id: "item-29",
      enabled: true,
      name: "كولسلو",
      category: "appetizers",
      description: "سلطة ملفوف وجزر مقرمشة مع دريسنج المايونيز الكريمي الحلو.",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80",
      price: "8",
      currency: "ر.س",
      featured: false,
      popular: false,
      spicy: false,
      calories: "160 سعرة",
      cta: "اطلب الآن"
    },
    {
      id: "item-30",
      enabled: true,
      name: "بطاطس",
      category: "fries",
      description: "أصابع بطاطس طبيعية مقلية ومتبلة بملح البحر وتوابل سَفرة الخاصة.",
      image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=1000&q=80",
      price: "9",
      currency: "ر.س",
      featured: false,
      popular: true,
      spicy: false,
      calories: "320 سعرة",
      cta: "اطلب الآن"
    },
    {
      id: "item-31",
      enabled: true,
      name: "بطاطس بالجبن",
      category: "fries",
      description: "بطاطس ذهبية مغطاة بصوص جبنة الشيدر الساخنة ومزينة برشة بابريكا.",
      image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=1000&q=80",
      price: "14",
      currency: "ر.س",
      featured: false,
      popular: true,
      spicy: false,
      calories: "450 سعرة",
      cta: "اطلب الآن"
    },
    {
      id: "item-fries-03",
      enabled: true,
      name: "بطاطس سبايسي لودد",
      category: "fries",
      description: "بطاطس مغطاة بجبنة الشيدر، صوص الهلابينو الحار وقطع مخلل وبصل مقرمش.",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1000&q=80",
      price: "17",
      currency: "ر.س",
      featured: false,
      popular: false,
      spicy: true,
      calories: "520 سعرة",
      cta: "اطلب الآن"
    },
    {
      id: "item-32",
      enabled: true,
      name: "صوص الثوم",
      category: "sauces",
      description: "صلصة توم كلاسيكية غنية ومخفوقة بقوام ناعم ومثالي مع الشاورما والبروست.",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=80",
      price: "3",
      currency: "ر.س",
      featured: false,
      popular: true,
      spicy: false,
      calories: "95 سعرة",
      cta: "أضف"
    },
    {
      id: "item-33",
      enabled: true,
      name: "الصوص الحار",
      category: "sauces",
      description: "خلطة شطة حمراء حارة مع لمسة ليمون وثوم متبل.",
      image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=1000&q=80",
      price: "3",
      currency: "ر.س",
      featured: false,
      popular: false,
      spicy: true,
      calories: "45 سعرة",
      cta: "أضف"
    },
    {
      id: "item-34",
      enabled: true,
      name: "صوص الجبن",
      category: "sauces",
      description: "جبنة شيدر كريمية ذائبة ودافئة تتماشى مع البرجر والبطاطس المقرمشة.",
      image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=1000&q=80",
      price: "4",
      currency: "ر.س",
      featured: false,
      popular: false,
      spicy: false,
      calories: "120 سعرة",
      cta: "أضف"
    },
    {
      id: "item-35",
      enabled: true,
      name: "الصوص الخاص",
      category: "sauces",
      description: "توليفة سَفرة السرية تجمع بين المايونيز، الخردل الفرنسي، والأعشاب الطازجة.",
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1000&q=80",
      price: "4",
      currency: "ر.س",
      featured: false,
      popular: true,
      spicy: false,
      calories: "110 سعرة",
      cta: "أضف"
    },
    {
      id: "item-36",
      enabled: true,
      name: "بيبسي",
      category: "drinks",
      description: "مشروب بيبسي بارد ومنعش يقدم في علبة مثلجة.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80",
      price: "5",
      currency: "ر.س",
      featured: false,
      popular: true,
      spicy: false,
      calories: "150 سعرة",
      cta: "أضف"
    },
    {
      id: "item-37",
      enabled: true,
      name: "سفن أب",
      category: "drinks",
      description: "مشروب غازي بنكهة الليمون المنعشة وخالي من الكافيين.",
      image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=1000&q=80",
      price: "5",
      currency: "ر.س",
      featured: false,
      popular: false,
      spicy: false,
      calories: "140 سعرة",
      cta: "أضف"
    },
    {
      id: "item-38",
      enabled: true,
      name: "ميرندا حمضيات",
      category: "drinks",
      description: "نكهة الحمضيات المركزة المفضلة محلياً.",
      image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=1000&q=80",
      price: "5",
      currency: "ر.س",
      featured: false,
      popular: false,
      spicy: false,
      calories: "160 سعرة",
      cta: "أضف"
    },
    {
      id: "item-39",
      enabled: true,
      name: "مشروب غازي دايت",
      category: "drinks",
      description: "مشروب غازي دايت بدون سكر وبطعم منعش.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80",
      price: "5",
      currency: "ر.س",
      featured: false,
      popular: false,
      spicy: false,
      calories: "0 سعرة",
      cta: "أضف"
    },
    {
      id: "item-40",
      enabled: true,
      name: "حلى سَفرة",
      category: "desserts",
      description: "طبقات من البسكويت المحمص مع الكريمة المكرملة ورشة فستق حلبي.",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1000&q=80",
      price: "18",
      currency: "ر.س",
      featured: false,
      popular: true,
      spicy: false,
      calories: "380 سعرة",
      cta: "اطلب الآن"
    },
    {
      id: "item-41",
      enabled: true,
      name: "تشيز كيك",
      category: "desserts",
      description: "تشيز كيك نيويورك الكلاسيكي بقوام مخملي وصلصة توت العليق الطازجة.",
      image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1000&q=80",
      price: "19",
      currency: "ر.س",
      featured: false,
      popular: false,
      spicy: false,
      calories: "420 سعرة",
      cta: "اطلب الآن"
    },
    {
      id: "item-42",
      enabled: true,
      name: "حلى الشوكولاتة",
      category: "desserts",
      description: "كعكة شوكولاتة دافئة وداكنة مع قلب شوكولاتة ذائبة غنية.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80",
      price: "20",
      currency: "ر.س",
      featured: false,
      popular: true,
      spicy: false,
      new: true,
      calories: "460 سعرة",
      cta: "اطلب الآن"
    }
  ],

  branches: [
    {
      id: "b-nakheel",
      enabled: true,
      name: "فرع النخيل",
      city: "الرياض",
      address: "طريق الإمام سعود بن عبد العزيز، حي النخيل",
      phone: "+966 11 411 9001",
      hours: "12:00 م – 3:30 ص",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
      mapUrl: "https://maps.google.com/?q=Riyadh",
      orderUrl: ""
    },
    {
      id: "b-yasmin",
      enabled: true,
      name: "فرع الياسمين",
      city: "الرياض",
      address: "طريق أنس بن مالك، حي الياسمين",
      phone: "+966 11 411 9002",
      hours: "12:00 م – 3:30 ص",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
      mapUrl: "https://maps.google.com/?q=Riyadh",
      orderUrl: ""
    },
    {
      id: "b-malqa",
      enabled: true,
      name: "فرع الملقا",
      city: "الرياض",
      address: "طريق الأمير محمد بن سعد، حي الملقا",
      phone: "+966 11 411 9003",
      hours: "12:00 م – 4:00 ص",
      image: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1000&q=80",
      mapUrl: "https://maps.google.com/?q=Riyadh",
      orderUrl: ""
    }
  ],

  currentOffers: [
    {
      id: "offer-01",
      enabled: true,
      title: "عرض نهاية الأسبوع للعائلة",
      description: "بوكس شاورما مشكل مع 2 برجر سَفرة وبطاطس لودد بالجبن ومشروب عائلي.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80",
      price: "109",
      oldPrice: "138",
      badge: "عرض التوفير",
      expiresAt: "ساري طوال عطلة نهاية الأسبوع",
      cta: "اطلب العرض"
    },
    {
      id: "offer-02",
      enabled: true,
      title: "ثنائية البرجر والبروست",
      description: "برجر سَفرة مع وجبة 4 قطع بروست كرسبي واثنين مشروب وبطاطس.",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80",
      price: "56",
      oldPrice: "68",
      badge: "أكثر توفيراً",
      expiresAt: "عرض المساء المفضل",
      cta: "اطلب العرض"
    }
  ],

  faq: [
    {
      question: "كيف أطلب من سَفرة؟",
      answer: "يمكنك الطلب مباشرة عبر الضغط على زر 'اطلب الآن' في الموقع، واختيار الأصناف المفضلة وتحديد وسيلة الاستلام سواء للتوصيل أو الاستلام من أقرب فرع في الرياض."
    },
    {
      question: "هل يمكن الاستلام من الفرع؟",
      answer: "نعم بكل تأكيد، تتيح لك الخدمة تجهيز طلبك مسبقاً والاستلام مباشرة من فرعك المفضل (النخيل، الياسمين، الملقا) دون الحاجة للانتظار."
    },
    {
      question: "كيف أعرف فروع ومواقع سَفرة؟",
      answer: "تتواجد فروعنا حالياً في شمال الرياض (حي النخيل، حي الياسمين، وحي الملقا)، ويمكنك استعراض تفاصيل العناوين وساعات العمل وأرقام التواصل في قسم 'فروعنا'."
    },
    {
      question: "هل توجد خيارات إضافية للوجبة؟",
      answer: "نعم، يمكنك تخصيص وجبتك بإضافة الجبن الذائب، مضاعفة صوص الثوم، أو اختيار نكهة سبايسي حارة، بالإضافة إلى ترقية البطاطس إلى بطاطس لودد بالجبن."
    },
    {
      question: "كيف أعرف الأطباق الأكثر طلبًا؟",
      answer: "خصصنا قسم 'الأكثر طلبًا' في أعلى صفحة القائمة، ويضم وجبة عربي دجاج، بوكس الشاورما المشكل، برجر سَفرة الأنجوس، ودبل تشيز برجر مع وجبة البروست المقرمشة."
    },
    {
      question: "هل يمكن طلب الوجبات للتوصيل؟",
      answer: "نعم، التوصيل متاح لجميع أحياء الرياض المجاورة لفروعنا خلال ساعات العمل اليومية مع ضمان وصول الوجبات ساخنة وطازجة."
    }
  ],

  contact: {
    headline: "جعت؟",
    description: "اختر وجبتك واترك التفاصيل لنا.",
    primaryCta: "اطلب الآن",
    secondaryCta: "تواصل معنا"
  },

  ui: {
    exploreMenu: "استكشف القائمة",
    orderNow: "اطلب الآن",
    allDishes: "جميع الأصناف",
    searchPlaceholder: "ابحث عن وجبة أو صنف...",
    spicyOnly: "حار وسبايسي فقط",
    itemsCount: "صنف متاح",
    quickAdd: "أضف للطلب",
    addedNotice: "تمت الإضافة",
    dishOptions: "خيارات متاحة",
    noResults: "لم يتم العثور على أطباق مطابقة",
    resetFilters: "عرض جميع الأصناف",
    subtotal: "المجموع الفرعي:",
    deliveryFee: "رسوم التوصيل التقديرية:",
    total: "المجموع الكلي:",
    cartEmpty: "سلتك فارغة حالياً",
    cartEmptyDesc: "تصفح القائمة واختر من الشاورما أو البرجر أو البروست الشهي.",
    deliveryMethod: "نوع الطلب:",
    pickupBranch: "حدد الفرع في الرياض:",
    selectBranchLabel: "حدد الفرع",
    addressLabel: "عنوان التوصيل (الرياض):",
    addressPlaceholder: "مثال: حي الملقا، طريق أنس بن مالك",
    customerInfo: "بيانات التواصل:",
    namePlaceholder: "الاسم الكريم",
    phonePlaceholder: "رقم الجوال",
    confirmDemoOrder: "إتمام الطلب التجريبي",
    demoNotice: "تذكير: هذا طلب تجريبي وهمي لأغراض التصميم وعرض الواجهة فقط.",
    orderSuccess: "تم تسجيل الطلب التجريبي بنجاح",
    orderSuccessDesc: "عرض توضيحي للهوية والخيارات دون معالجة دفع حقيقية.",
    backToRestaurant: "العودة للمطعم",
    openNow: "مفتوح الآن",
    directions: "الاتجاهات",
    pickupFromThisBranch: "استلام من هذا الفرع",
    comboCallout: "توليفات متناغمة",
    comboBadge: "وجبة متكاملة",
    quickLinks: "روابط سريعة",
    contactInfo: "معلومات التواصل",
    backToTop: "العودة للأعلى",
    copyright: "© سَفرة — للاستخدام التجريبي والعرض البصري",
    kitchenAccent: "مفهوم سَفرة",
    stepPrompt: "خطوات سريعة",
    readyPrompt: "جاهز لتجربة طعم سَفرة اليوم؟",
    readySub: "خدمة تجريبية سريعة صُممت لأجمل تجربة تصفح واختيار."
  }
};

export const restaurantDataEn: RestaurantData = {
  name: "Sofrah",
  shortName: "Sofrah",
  subtitle: "Modern Saudi Casual Dining",
  city: "Riyadh",
  region: "Riyadh Province",
  country: "Saudi Arabia",
  positioning: "Familiar flavors, crafted for the modern palate.",
  phone: "+966 11 400 9000",
  whatsapp: "+966 50 123 4567",
  email: "hello@safra-demo.sa",
  address: "Riyadh, Kingdom of Saudi Arabia",
  hours: "Daily: 12:00 PM – 3:30 AM",
  isFictionalDisclaimer: "Sofrah is a demonstration restaurant brand created exclusively for UX, UI, and design showcase purposes.",
  
  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "",
    tiktok: "https://tiktok.com",
    x: "https://x.com"
  },

  hero: {
    eyebrow: "Shawarma • Burgers • Broasted",
    headline: "Familiar Flavors,\nElevated For Today",
    description: "From artisanal shawarma wraps and flame-grilled burgers to golden crispy broasted chicken, we bring authentic Saudi comfort foods into a sleek, editorial aesthetic.",
    primaryCta: "Order Now",
    secondaryCta: "Explore Menu",
    mainVisual: {
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=85",
      eyebrow: "Sofrah Signatures",
      headline: "Beloved classics,\nreimagined.",
      tag: "Top Choice"
    },
    secondaryVisual: {
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80",
      headline: "Bold flavor,\nrefined craft."
    },
    detailVisual: {
      image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80",
      headline: "Every detail\nmatters."
    }
  },

  story: {
    eyebrow: "About Sofrah",
    headline: "Comfort Classics,\nContemporary Soul",
    body: "Sofrah is an experimental Saudi dining brand designed to present familiar regional fast favorites — shawarma, burgers, and broasted chicken — through clean visual minimalism and culinary discipline.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    principles: [
      { title: "Distinctive Flavors", desc: "Balanced recipes highlighting prime meats and fragrant Saudi spices." },
      { title: "Refined Execution", desc: "Fresh artisanal bread, house-made sauces, and meticulous packaging." },
      { title: "Curated Variety", desc: "Bridging timeless street-food heritage with modern casual tastes." },
      { title: "Effortless Experience", desc: "A quiet, intuitive interface placing food photography at the core." }
    ]
  },

  editorialKitchen: {
    eyebrow: "From The Kitchen",
    headline: "Every Dish Has Its Moment",
    description: "From sizzling rotisserie shawarma to golden hand-cut fries and whipped toum garlic dip, every plate is crafted with purpose.",
    cta: "Explore The Menu",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85"
  },

  orderingMethods: {
    eyebrow: "Order On Your Terms",
    headline: "Choose How You Want\nYour Meal Delivered",
    methods: [
      {
        id: "delivery",
        title: "Fast Delivery",
        description: "Hot, crisp, and fresh right to your doorstep across Riyadh neighborhoods.",
        icon: "truck"
      },
      {
        id: "pickup",
        title: "Branch Pickup",
        description: "Order ahead and grab your meal instantly with zero waiting time.",
        icon: "store"
      },
      {
        id: "dine-in",
        title: "Dine In",
        description: "Immerse yourself in our contemporary spaces with welcoming hospitality.",
        icon: "utensils"
      }
    ],
    steps: [
      { step: "01", title: "Select Your Dish", desc: "Browse curated categories and pick your favorite comfort meals." },
      { step: "02", title: "Customize It", desc: "Tailor extra sauces, spice levels, and side pairings." },
      { step: "03", title: "Choose Method", desc: "Select fast home delivery or direct pickup from Riyadh branches." },
      { step: "04", title: "Enjoy Seamlessly", desc: "Track demo preparation and receive your meal with ease." }
    ]
  },

  combinations: [
    {
      id: "combo-shawarma",
      title: "Classic Shawarma Combo",
      subtitle: "Shawarma + Fries + Drink",
      description: "Tender seasoned chicken or beef shawarma with crisp sea-salt fries, garlic toum, and an ice-cold beverage.",
      image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=1000&q=80",
      items: ["Garlic Chicken Shawarma", "Golden Salted Fries", "Artisanal Toum Dip", "Chilled Soft Drink"],
      tag: "Most Popular"
    },
    {
      id: "combo-burger",
      title: "Sofrah Double Burger Combo",
      subtitle: "Burger + Fries + Drink",
      description: "Flame-grilled Angus patty with melted sharp cheddar, signature house sauce, seasoned fries, and soda.",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=1000&q=80",
      items: ["Double Cheeseburger", "Spiced Fries", "Signature House Dip", "Cold Soft Drink"],
      tag: "Chef's Cut"
    },
    {
      id: "combo-broast",
      title: "Crispy Broasted Combo",
      subtitle: "Broasted + Slaw + Drink",
      description: "Four-piece golden broasted chicken with crisp cabbage slaw, garlic dip, warm bun, and drink.",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1000&q=80",
      items: ["4-Piece Crispy Broast", "Creamy Coleslaw", "Fresh Bun & Garlic Sauce", "Soft Drink"],
      tag: "Original Crunch"
    }
  ],

  menuCategories: [
    { enabled: true, name: "Popular", slug: "popular", description: "The most celebrated signature dishes", featured: true },
    { enabled: true, name: "Shawarma", slug: "shawarma", description: "Authentic saj & pita wraps with secret seasoning", featured: true },
    { enabled: true, name: "Burgers", slug: "burger", description: "Fresh Angus beef & crispy chicken on brioche", featured: true },
    { enabled: true, name: "Broasted", slug: "broast", description: "Crispy pressure-fried chicken with golden skin", featured: true },
    { enabled: true, name: "Meals", slug: "meals", description: "Hearty feast boxes for individuals & groups", featured: true },
    { enabled: true, name: "Appetizers", slug: "appetizers", description: "Crispy rings, fresh slaws, and sides", featured: false },
    { enabled: true, name: "Fries", slug: "fries", description: "Hand-cut golden fries and melted cheese toppings", featured: false },
    { enabled: true, name: "Sauces", slug: "sauces", description: "Daily whipped garlic, harra spicy, and special dip", featured: false },
    { enabled: true, name: "Beverages", slug: "drinks", description: "Ice-cold sodas and citrus refreshers", featured: false },
    { enabled: true, name: "Desserts", slug: "desserts", description: "Sweet finales crafted with premium ingredients", featured: false }
  ],

  menuItems: [
    {
      id: "item-01",
      enabled: true,
      name: "Arabic Chicken Platter",
      category: "popular",
      description: "Sliced chicken shawarma served Arabic style with golden fries, pickled cucumbers, and garlic toum.",
      image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=1000&q=80",
      price: "28",
      currency: "SAR",
      featured: true,
      popular: true,
      spicy: false,
      new: false,
      calories: "680 kcal",
      options: ["Regular", "Spicy"],
      addOns: [{ name: "Extra Garlic Toum", price: 2 }, { name: "Melted Cheese", price: 4 }],
      cta: "Order Now",
      details: "Sliced into 6 pieces with fries, pickles and toum"
    },
    {
      id: "item-02",
      enabled: true,
      name: "Mixed Shawarma Box",
      category: "popular",
      description: "Assorted chicken and beef saj shawarma rolls with four artisan dips and family fries.",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1000&q=80",
      price: "68",
      currency: "SAR",
      featured: true,
      popular: true,
      spicy: false,
      new: true,
      calories: "1420 kcal",
      options: ["Chicken Only", "Beef Only", "Mixed Box"],
      addOns: [{ name: "Extra Sofrah Sauce", price: 3 }, { name: "Family Soda", price: 8 }],
      cta: "Order Now"
    },
    {
      id: "item-03",
      enabled: true,
      name: "Sofrah Signature Burger",
      category: "popular",
      description: "Flame-grilled Angus patty with melted sharp cheddar, caramelized onions, crisp lettuce, and secret sauce.",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80",
      price: "32",
      currency: "SAR",
      featured: true,
      popular: true,
      spicy: false,
      new: false,
      calories: "620 kcal",
      options: ["Single Patty", "Double Patty"],
      addOns: [{ name: "Beef Bacon", price: 5 }, { name: "Extra Cheddar", price: 4 }],
      cta: "Order Now"
    },
    {
      id: "item-04",
      enabled: true,
      name: "Double Cheeseburger",
      category: "popular",
      description: "Two smashed Angus beef patties layered with double American cheddar and house pickles.",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=1000&q=80",
      price: "36",
      currency: "SAR",
      featured: true,
      popular: true,
      spicy: false,
      new: false,
      calories: "780 kcal",
      options: ["Regular", "Extra Pickles"],
      addOns: [{ name: "Jalapeno Dip", price: 3 }],
      cta: "Order Now"
    },
    {
      id: "item-05",
      enabled: true,
      name: "Broasted Chicken Meal",
      category: "popular",
      description: "Four pieces of crispy pressure-fried chicken with golden fries, garlic dip, and warm bread.",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1000&q=80",
      price: "29",
      currency: "SAR",
      featured: true,
      popular: true,
      spicy: false,
      new: false,
      calories: "890 kcal",
      options: ["Original", "Spicy Fire"],
      addOns: [{ name: "Creamy Slaw", price: 4 }, { name: "Extra Toum", price: 2 }],
      cta: "Order Now"
    },
    {
      id: "item-06",
      enabled: true,
      name: "Chicken Shawarma Wrap",
      category: "shawarma",
      description: "Marinated rotisserie chicken wrapped in thin toasted saj with whipped toum and pickles.",
      image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=1000&q=80",
      price: "12",
      currency: "SAR",
      featured: false,
      popular: true,
      spicy: false,
      calories: "340 kcal",
      options: ["Standard", "Saroukh Large"],
      cta: "Order Now"
    },
    {
      id: "item-07",
      enabled: true,
      name: "Prime Beef Shawarma",
      category: "shawarma",
      description: "Tender spiced beef ribbons with sesame tahini, fresh parsley, and sumac onions in toasted bread.",
      image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=1000&q=80",
      price: "15",
      currency: "SAR",
      featured: false,
      popular: true,
      spicy: false,
      calories: "390 kcal",
      options: ["Standard", "Saroukh Large"],
      cta: "Order Now"
    },
    {
      id: "item-08",
      enabled: true,
      name: "Cheesy Chicken Shawarma",
      category: "shawarma",
      description: "Rotisserie chicken enveloped in melted mozzarella and cheddar, pressed on the flat-top grill.",
      image: "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?auto=format&fit=crop&w=1000&q=80",
      price: "16",
      currency: "SAR",
      featured: false,
      popular: false,
      spicy: false,
      calories: "460 kcal",
      cta: "Order Now"
    },
    {
      id: "item-09",
      enabled: true,
      name: "Cheesy Beef Shawarma",
      category: "shawarma",
      description: "Spiced beef shawarma fused with warm melted cheese and grilled onions on toasted flatbread.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
      price: "19",
      currency: "SAR",
      featured: false,
      popular: false,
      spicy: false,
      calories: "510 kcal",
      cta: "Order Now"
    },
    {
      id: "item-10",
      enabled: true,
      name: "Spicy Fire Shawarma",
      category: "shawarma",
      description: "Juicy chicken tossed in red chili shatta sauce, sliced jalapenos, and garlic sauce.",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1000&q=80",
      price: "14",
      currency: "SAR",
      featured: false,
      popular: true,
      spicy: true,
      calories: "360 kcal",
      cta: "Order Now"
    },
    {
      id: "item-11",
      enabled: true,
      name: "Saj Shawarma Roll",
      category: "shawarma",
      description: "Extra crispy saj flatbread wrapped tightly with seasoned chicken, fries, and creamy toum.",
      image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=1000&q=80",
      price: "13",
      currency: "SAR",
      featured: false,
      popular: false,
      spicy: false,
      calories: "380 kcal",
      cta: "Order Now"
    },
    {
      id: "item-12",
      enabled: true,
      name: "Arabic Shawarma Meal",
      category: "shawarma",
      description: "Bite-sized sliced saj shawarma rolls served with salted fries, pickles, and dipping sauces.",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=80",
      price: "26",
      currency: "SAR",
      featured: false,
      popular: true,
      spicy: false,
      calories: "670 kcal",
      cta: "Order Now"
    },
    {
      id: "item-13",
      enabled: true,
      name: "Shawarma Fatteh",
      category: "shawarma",
      description: "Crispy pita chips layered with spiced fragrant rice, chicken shawarma, garlic yogurt, and roasted nuts.",
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1000&q=80",
      price: "27",
      currency: "SAR",
      featured: false,
      popular: false,
      spicy: false,
      calories: "590 kcal",
      cta: "Order Now"
    },
    {
      id: "item-14",
      enabled: true,
      name: "Crunchy Shawarma",
      category: "shawarma",
      description: "Crisp toasted breadcrumbs blended with spicy mayo and cheese over juicy chicken shawarma.",
      image: "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?auto=format&fit=crop&w=1000&q=80",
      price: "17",
      currency: "SAR",
      featured: false,
      popular: true,
      spicy: false,
      new: true,
      calories: "480 kcal",
      cta: "Order Now"
    },
    {
      id: "item-15",
      enabled: true,
      name: "Classic Beef Burger",
      category: "burger",
      description: "Grilled Angus patty in a toasted brioche bun with crisp lettuce, fresh tomato, and classic relish.",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=80",
      price: "24",
      currency: "SAR",
      featured: false,
      popular: false,
      spicy: false,
      calories: "520 kcal",
      cta: "Order Now"
    },
    {
      id: "item-16",
      enabled: true,
      name: "Grilled Chicken Burger",
      category: "burger",
      description: "Herb-marinated grilled chicken breast with citrus aioli, butter lettuce, and ripe tomatoes.",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=1000&q=80",
      price: "22",
      currency: "SAR",
      featured: false,
      popular: false,
      spicy: false,
      calories: "460 kcal",
      cta: "Order Now"
    },
    {
      id: "item-17",
      enabled: true,
      name: "Classic Cheeseburger",
      category: "burger",
      description: "Juicy smashed beef patty with aged cheddar, house pickles, and Sofrah sauce on brioche.",
      image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=1000&q=80",
      price: "26",
      currency: "SAR",
      featured: false,
      popular: true,
      spicy: false,
      calories: "570 kcal",
      cta: "Order Now"
    },
    {
      id: "item-18",
      enabled: true,
      name: "Double Cheese Stack",
      category: "burger",
      description: "Two Angus beef patties with double melted cheddar cheese, caramelized onions, and relish.",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=1000&q=80",
      price: "34",
      currency: "SAR",
      featured: false,
      popular: true,
      spicy: false,
      calories: "760 kcal",
      cta: "Order Now"
    },
    {
      id: "item-19",
      enabled: true,
      name: "Smokey BBQ Burger",
      category: "burger",
      description: "Hickory-smoked barbecue glaze, crispy fried onion strings, and sharp white cheddar.",
      image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=1000&q=80",
      price: "31",
      currency: "SAR",
      featured: false,
      popular: false,
      spicy: false,
      calories: "640 kcal",
      cta: "Order Now"
    },
    {
      id: "item-20",
      enabled: true,
      name: "Spicy Jalapeno Burger",
      category: "burger",
      description: "Fiery chili glaze with pickled jalapenos, pepper jack cheese, and spicy chipotle mayo.",
      image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=1000&q=80",
      price: "28",
      currency: "SAR",
      featured: false,
      popular: false,
      spicy: true,
      calories: "580 kcal",
      cta: "Order Now"
    },
    {
      id: "item-21",
      enabled: true,
      name: "Crispy Chicken Brioche",
      category: "burger",
      description: "Golden fried chicken fillet with honey mustard slaw, crunchy pickles, and melted cheddar.",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=1000&q=80",
      price: "25",
      currency: "SAR",
      featured: false,
      popular: true,
      spicy: false,
      calories: "610 kcal",
      cta: "Order Now"
    },
    {
      id: "item-22",
      enabled: true,
      name: "Sofrah Trio Sliders",
      category: "burger",
      description: "Three mini gourmet sliders: Classic Angus, Crispy Chicken, and Smoky BBQ Beef.",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1000&q=80",
      price: "35",
      currency: "SAR",
      featured: false,
      popular: false,
      spicy: false,
      new: true,
      calories: "690 kcal",
      cta: "Order Now"
    },
    {
      id: "item-23",
      enabled: true,
      name: "Original Broasted Chicken",
      category: "broast",
      description: "Four pieces of golden fried fresh chicken with french fries, garlic dip, and soft dinner roll.",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1000&q=80",
      price: "24",
      currency: "SAR",
      featured: false,
      popular: true,
      spicy: false,
      calories: "820 kcal",
      cta: "Order Now"
    },
    {
      id: "item-24",
      enabled: true,
      name: "Spicy Broasted Chicken",
      category: "broast",
      description: "Four pieces of crispy chicken infused with cayenne & paprika, served with spicy garlic sauce.",
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=1000&q=80",
      price: "25",
      currency: "SAR",
      featured: false,
      popular: true,
      spicy: true,
      calories: "850 kcal",
      cta: "Order Now"
    },
    {
      id: "item-25",
      enabled: true,
      name: "Family Broasted Feast",
      category: "broast",
      description: "Eight pieces of crisp broasted chicken with jumbo fries, coleslaw, three sauces, and bread.",
      image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=1000&q=80",
      price: "46",
      currency: "SAR",
      featured: false,
      popular: false,
      spicy: false,
      calories: "1640 kcal",
      cta: "Order Now"
    },
    {
      id: "item-26",
      enabled: true,
      name: "Crispy Chicken Tenders",
      category: "broast",
      description: "Five tender chicken breast strips breaded to golden perfection, served with honey mustard.",
      image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=1000&q=80",
      price: "22",
      currency: "SAR",
      featured: false,
      popular: true,
      spicy: false,
      calories: "540 kcal",
      cta: "Order Now"
    },
    {
      id: "item-27",
      enabled: true,
      name: "Chicken Nuggets (6 pcs)",
      category: "broast",
      description: "Six tender chicken bites served hot and crisp with fries and signature ketchup dip.",
      image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=1000&q=80",
      price: "18",
      currency: "SAR",
      featured: false,
      popular: false,
      spicy: false,
      calories: "420 kcal",
      cta: "Order Now"
    },
    {
      id: "item-meals-01",
      enabled: true,
      name: "Sofrah Duo Feast",
      category: "meals",
      description: "Chicken shawarma roll, single Angus burger, loaded fries, and two chilled sodas.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80",
      price: "52",
      currency: "SAR",
      featured: false,
      popular: true,
      spicy: false,
      calories: "1280 kcal",
      cta: "Order Now"
    },
    {
      id: "item-meals-02",
      enabled: true,
      name: "Friends Gathering Box",
      category: "meals",
      description: "Four saj shawarmas, two crispy burgers, large loaded cheese fries, and three beverages.",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=80",
      price: "98",
      currency: "SAR",
      featured: false,
      popular: false,
      spicy: false,
      calories: "2450 kcal",
      cta: "Order Now"
    },
    {
      id: "item-28",
      enabled: true,
      name: "Crispy Onion Rings",
      category: "appetizers",
      description: "Sweet Spanish onions in panko batter, fried golden and served with ranch sauce.",
      image: "https://images.unsplash.com/photo-1639744091980-fc02181d1e44?auto=format&fit=crop&w=1000&q=80",
      price: "12",
      currency: "SAR",
      featured: false,
      popular: false,
      spicy: false,
      calories: "310 kcal",
      cta: "Order Now"
    },
    {
      id: "item-29",
      enabled: true,
      name: "Classic Coleslaw",
      category: "appetizers",
      description: "Crunchy shredded green cabbage and carrots in sweet creamy dressing.",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80",
      price: "8",
      currency: "SAR",
      featured: false,
      popular: false,
      spicy: false,
      calories: "160 kcal",
      cta: "Order Now"
    },
    {
      id: "item-30",
      enabled: true,
      name: "Sea Salt French Fries",
      category: "fries",
      description: "Hand-cut Idaho potatoes fried golden crisp, tossed with flaky sea salt and herbs.",
      image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=1000&q=80",
      price: "9",
      currency: "SAR",
      featured: false,
      popular: true,
      spicy: false,
      calories: "320 kcal",
      cta: "Order Now"
    },
    {
      id: "item-31",
      enabled: true,
      name: "Melted Cheese Fries",
      category: "fries",
      description: "Crispy fries smothered in velvety hot cheddar cheese sauce and dusted with paprika.",
      image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=1000&q=80",
      price: "14",
      currency: "SAR",
      featured: false,
      popular: true,
      spicy: false,
      calories: "450 kcal",
      cta: "Order Now"
    },
    {
      id: "item-fries-03",
      enabled: true,
      name: "Loaded Spicy Fries",
      category: "fries",
      description: "Fries topped with cheddar cheese, diced jalapenos, crispy onions, and fiery drizzle.",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1000&q=80",
      price: "17",
      currency: "SAR",
      featured: false,
      popular: false,
      spicy: true,
      calories: "520 kcal",
      cta: "Order Now"
    },
    {
      id: "item-32",
      enabled: true,
      name: "Garlic Toum Dip",
      category: "sauces",
      description: "Traditional Lebanese-style whipped garlic sauce, silky smooth and intensely fragrant.",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=80",
      price: "3",
      currency: "SAR",
      featured: false,
      popular: true,
      spicy: false,
      calories: "95 kcal",
      cta: "Add"
    },
    {
      id: "item-33",
      enabled: true,
      name: "Hot Harra Sauce",
      category: "sauces",
      description: "Crushed red chilies blended with lemon, garlic, and Middle Eastern spices.",
      image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=1000&q=80",
      price: "3",
      currency: "SAR",
      featured: false,
      popular: false,
      spicy: true,
      calories: "45 kcal",
      cta: "Add"
    },
    {
      id: "item-34",
      enabled: true,
      name: "Warm Cheese Dip",
      category: "sauces",
      description: "Melted smooth cheddar dip, perfect for fries and dipping burger bites.",
      image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=1000&q=80",
      price: "4",
      currency: "SAR",
      featured: false,
      popular: false,
      spicy: false,
      calories: "120 kcal",
      cta: "Add"
    },
    {
      id: "item-35",
      enabled: true,
      name: "Sofrah Special Sauce",
      category: "sauces",
      description: "House secret formula blending French Dijon mustard, herbs, and sweet relish.",
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1000&q=80",
      price: "4",
      currency: "SAR",
      featured: false,
      popular: true,
      spicy: false,
      calories: "110 kcal",
      cta: "Add"
    },
    {
      id: "item-36",
      enabled: true,
      name: "Pepsi Cola Can",
      category: "drinks",
      description: "Chilled classic cola served ice-cold in an aluminum can.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80",
      price: "5",
      currency: "SAR",
      featured: false,
      popular: true,
      spicy: false,
      calories: "150 kcal",
      cta: "Add"
    },
    {
      id: "item-37",
      enabled: true,
      name: "7UP Lemon Lime",
      category: "drinks",
      description: "Caffeine-free refreshing lemon-lime sparkling beverage.",
      image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=1000&q=80",
      price: "5",
      currency: "SAR",
      featured: false,
      popular: false,
      spicy: false,
      calories: "140 kcal",
      cta: "Add"
    },
    {
      id: "item-38",
      enabled: true,
      name: "Mirinda Citrus",
      category: "drinks",
      description: "Tangy citrus soda, a regional Saudi favorite.",
      image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=1000&q=80",
      price: "5",
      currency: "SAR",
      featured: false,
      popular: false,
      spicy: false,
      calories: "160 kcal",
      cta: "Add"
    },
    {
      id: "item-39",
      enabled: true,
      name: "Diet Pepsi",
      category: "drinks",
      description: "Zero-sugar, zero-calorie chilled sparkling cola.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80",
      price: "5",
      currency: "SAR",
      featured: false,
      popular: false,
      spicy: false,
      calories: "0 kcal",
      cta: "Add"
    },
    {
      id: "item-40",
      enabled: true,
      name: "Sofrah Dessert Bowl",
      category: "desserts",
      description: "Layered toasted butter biscuit crumbs with caramel cream and roasted pistachios.",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1000&q=80",
      price: "18",
      currency: "SAR",
      featured: false,
      popular: true,
      spicy: false,
      calories: "380 kcal",
      cta: "Order Now"
    },
    {
      id: "item-41",
      enabled: true,
      name: "New York Cheesecake",
      category: "desserts",
      description: "Classic velvety cream cheesecake with a tart raspberry compote coulis.",
      image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1000&q=80",
      price: "19",
      currency: "SAR",
      featured: false,
      popular: false,
      spicy: false,
      calories: "420 kcal",
      cta: "Order Now"
    },
    {
      id: "item-42",
      enabled: true,
      name: "Warm Chocolate Fondant",
      category: "desserts",
      description: "Rich dark chocolate sponge cake with a molten Belgian chocolate lava center.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80",
      price: "20",
      currency: "SAR",
      featured: false,
      popular: true,
      spicy: false,
      new: true,
      calories: "460 kcal",
      cta: "Order Now"
    }
  ],

  branches: [
    {
      id: "b-nakheel",
      enabled: true,
      name: "Al Nakheel Branch",
      city: "Riyadh",
      address: "Imam Saud Bin Abdulaziz Rd, Al Nakheel District",
      phone: "+966 11 411 9001",
      hours: "12:00 PM – 3:30 AM",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
      mapUrl: "https://maps.google.com/?q=Riyadh",
      orderUrl: ""
    },
    {
      id: "b-yasmin",
      enabled: true,
      name: "Al Yasmin Branch",
      city: "Riyadh",
      address: "Anas Ibn Malik Rd, Al Yasmin District",
      phone: "+966 11 411 9002",
      hours: "12:00 PM – 3:30 AM",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
      mapUrl: "https://maps.google.com/?q=Riyadh",
      orderUrl: ""
    },
    {
      id: "b-malqa",
      enabled: true,
      name: "Al Malqa Branch",
      city: "Riyadh",
      address: "Prince Mohammed Bin Saad Rd, Al Malqa District",
      phone: "+966 11 411 9003",
      hours: "12:00 PM – 4:00 AM",
      image: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1000&q=80",
      mapUrl: "https://maps.google.com/?q=Riyadh",
      orderUrl: ""
    }
  ],

  currentOffers: [
    {
      id: "offer-01",
      enabled: true,
      title: "Weekend Family Feast",
      description: "Mixed shawarma box with two Sofrah burgers, loaded cheese fries, and family beverage.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80",
      price: "109",
      oldPrice: "138",
      badge: "Value Combo",
      expiresAt: "Available all weekend",
      cta: "Order Offer"
    },
    {
      id: "offer-02",
      enabled: true,
      title: "Burger & Broast Duo",
      description: "Sofrah Angus burger with 4-piece crispy broasted chicken, fries, and two drinks.",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80",
      price: "56",
      oldPrice: "68",
      badge: "Best Value",
      expiresAt: "Evening Special",
      cta: "Order Offer"
    }
  ],

  faq: [
    {
      question: "How do I place an order with Sofrah?",
      answer: "Click the 'Order Now' button anywhere on the page to launch the interactive ordering drawer, select your favorite dishes, and choose between home delivery or pickup across Riyadh."
    },
    {
      question: "Can I pick up my order from a branch?",
      answer: "Yes, you can order ahead for instant pickup at any of our branches (Al Nakheel, Al Yasmin, Al Malqa) with zero waiting time."
    },
    {
      question: "Where are Sofrah branches located in Riyadh?",
      answer: "Our modern branches are located in North Riyadh: Al Nakheel, Al Yasmin, and Al Malqa districts. Check the 'Our Branches' section for exact addresses and timings."
    },
    {
      question: "Can I customize meal add-ons and spice levels?",
      answer: "Yes, you can tailor your shawarma or burger with melted cheese, extra toum garlic sauce, or switch to our fiery spicy shatta recipe."
    },
    {
      question: "What are your most popular signature items?",
      answer: "Our top-rated favorites include the Arabic Chicken Platter, Mixed Saj Shawarma Box, Angus Sofrah Burger, Double Cheeseburger, and Crispy Broasted Chicken."
    },
    {
      question: "Is delivery available across Riyadh?",
      answer: "Delivery is available throughout adjacent Riyadh neighborhoods during operational hours, ensuring meals arrive piping hot and crispy."
    }
  ],

  contact: {
    headline: "Hungry?",
    description: "Choose your favorite meal and leave the craft to us.",
    primaryCta: "Order Now",
    secondaryCta: "Get in Touch"
  },

  ui: {
    exploreMenu: "Explore Menu",
    orderNow: "Order Now",
    allDishes: "All Dishes",
    searchPlaceholder: "Search dishes or categories...",
    spicyOnly: "Spicy & Hot Only",
    itemsCount: "dishes available",
    quickAdd: "Add to Order",
    addedNotice: "Added",
    dishOptions: "options available",
    noResults: "No matching dishes found",
    resetFilters: "Show all dishes",
    subtotal: "Subtotal:",
    deliveryFee: "Estimated Delivery Fee:",
    total: "Grand Total:",
    cartEmpty: "Your cart is currently empty",
    cartEmptyDesc: "Browse our menu and choose from our shawarma, burgers, or crispy broasted chicken.",
    deliveryMethod: "Order Type:",
    pickupBranch: "Select Branch in Riyadh:",
    selectBranchLabel: "Select Branch",
    addressLabel: "Delivery Address (Riyadh):",
    addressPlaceholder: "e.g., Al Malqa District, Anas Ibn Malik Rd",
    customerInfo: "Customer Details:",
    namePlaceholder: "Your Name",
    phonePlaceholder: "Phone Number",
    confirmDemoOrder: "Place Demo Order",
    demoNotice: "Reminder: This is a demonstration order for design and showcase purposes only.",
    orderSuccess: "Demo Order Placed Successfully",
    orderSuccessDesc: "Showcase of ordering flow and brand identity without actual billing.",
    backToRestaurant: "Back to Restaurant",
    openNow: "Open Now",
    directions: "Directions",
    pickupFromThisBranch: "Pick up from this branch",
    comboCallout: "Harmonious Combinations",
    comboBadge: "Complete Combo",
    quickLinks: "Quick Links",
    contactInfo: "Contact Information",
    backToTop: "Back to Top",
    copyright: "© Sofrah — For Demonstration and Showcase Use",
    kitchenAccent: "Sofrah Philosophy",
    stepPrompt: "Quick Steps",
    readyPrompt: "Ready to experience Sofrah today?",
    readySub: "A seamless digital dining showcase crafted for speed and elegance."
  }
};

export const getRestaurantData = (lang: 'ar' | 'en' = 'ar'): RestaurantData => {
  return lang === 'en' ? restaurantDataEn : restaurantDataAr;
};

export const restaurantData = restaurantDataAr;
