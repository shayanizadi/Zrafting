"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TimelinePinned from "@/components/TimelinePinned";


/* -----------------------------------------------------------
   🎨 Theme & Helpers
----------------------------------------------------------- */

const COLORS = {
  primary: "#e8edf5",
  text: "#0f172a",
  accent: "#3b82f6",
  accentSoft: "#93c5fd",
  accentDark: "#2563eb",
  bg: "#f8fafc",
  cardBg: "rgba(255,255,255,0.9)",
  cardBorder: "rgba(148,163,184,0.35)",
  glassLight: "rgba(255,255,255,0.7)",
  glassBorder: "rgba(148,163,184,0.35)",
  yellow: "#facc15",
  green: "#4ade80",
  red: "#f97373",
};

const SLIDES = [
  {
    src: "/img/banner1.jpg",
    title: "رفتینگ حرفه‌ای در رودخانه‌های منتخب ایران",
    subtitle: "ترکیب امنیت، هیجان و طبیعت در یک روز به‌یادماندنی.",
    tag: "تورهای ویژه این هفته",
  },
  {
    src: "/img/banner2.jpg",
    title: "هیجان کنترل‌شده با مربیان حرفه‌ای",
    subtitle: "قبل از شروع تور، آموزش کامل و تجهیزات استاندارد دریافت می‌کنید.",
    tag: "امنیت در اولویت",
  },
  {
    src: "/img/banner3.jpg",
    title: "تجربه‌ای متفاوت برای دوستان و خانواده",
    subtitle: "تورهای گروهی، خانوادگی و ماجراجویانه برای همه سطح‌ها.",
    tag: "مناسب برای همه",
  },
];

/* -----------------------------------------------------------
   🎬 Hero Slider
----------------------------------------------------------- */

function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % SLIDES.length);
        setFade(false);
      }, 350);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (i: number) => {
    setFade(true);
    setTimeout(() => {
      setIndex(i);
      setFade(false);
    }, 350);
  };

  const current = SLIDES[index];

  return (
    <section className="relative w-full h-[420px] md:h-[520px] overflow-hidden rounded-b-3xl">
      <img
        src={current.src}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-[900ms] ${
          fade ? "opacity-0 scale-[1.05]" : "opacity-100 scale-[1]"
        }`}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/20 mix-blend-soft-light" />

      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20">
        <div className="inline-flex items-center gap-2 mb-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
          <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
          <span className="text-xs text-white">{current.tag}</span>
        </div>

        <div
          className="max-w-xl rounded-3xl p-5 md:p-6 shadow-lg"
          style={{
            background: COLORS.glassLight,
            border: `1px solid ${COLORS.glassBorder}`,
            backdropFilter: "blur(18px)",
          }}
        >
          <h1 className="text-2xl md:text-4xl text-slate-900 mb-3 leading-snug font-bold">
            {current.title}
          </h1>

          <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-5">
            {current.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="px-6 py-2.5 rounded-full bg-blue-600 text-white text-xs md:text-sm hover:bg-blue-700 transition-all shadow-md">
              رزرو سریع تور
            </button>
            <button className="px-6 py-2.5 rounded-full border border-slate-300 text-slate-800 text-xs md:text-sm hover:bg-slate-100 transition-all">
              مشاهده تورها
            </button>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === index
                  ? "bg-blue-500 scale-125"
                  : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -----------------------------------------------------------
   ✨ Intro Section
----------------------------------------------------------- */

function IntroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <svg width="18" height="18" fill="currentColor" className="text-blue-600">
                <path d="M2 9l4-6h8l4 6-4 6H6z" />
              </svg>
            </span>
            <span className="text-xs font-semibold text-blue-600">
              لذت هیجان روی موج‌های خروشان
            </span>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            چرا رفتینگ با Zrafting؟
          </h2>

          <p className="text-slate-700 leading-relaxed text-lg mb-6">
            لذت هیجان روی موج‌های خروشان زاینده‌رود در فضایی کاملاً شاد، پرانرژی و
            متفاوت.  
            ما ترکیبی از امنیت، هیجان، طبیعت و خنده را برای شما می‌سازیم تا هر تور
            تبدیل به یک خاطره‌ی ماندگار شود.
          </p>

          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md text-sm">
              رزرو سریع تور
            </button>
            <button className="px-6 py-3 rounded-xl border border-slate-300 text-slate-800 hover:bg-slate-100 transition-all text-sm">
              مشاهده تورهای فعال
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex-1 bg-white rounded-2xl p-4 shadow-md border border-slate-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center">
                  <svg width="18" height="18" fill="currentColor" className="text-green-600">
                    <path d="M7 14l-4-4 1.5-1.5L7 11l6.5-6.5L15 6z" />
                  </svg>
                </div>
                <span className="font-semibold text-slate-900 text-sm">
                  مربیان حرفه‌ای و مجرب
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                تیم مربیان ما دارای سال‌ها تجربه در رفتینگ حرفه‌ای هستند و آموزش کامل
                قبل از شروع تور ارائه می‌دهند.
              </p>
            </div>

            <div className="flex-1 bg-white rounded-2xl p-4 shadow-md border border-slate-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-full bg-yellow-100 flex items-center justify-center">
                  <svg width="18" height="18" fill="currentColor" className="text-yellow-500">
                    <path d="M9 1l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5z" />
                  </svg>
                </div>
                <span className="font-semibold text-slate-900 text-sm">
                  تجهیزات استاندارد و ایمن
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                جلیقه نجات، کلاه ایمنی، قایق‌های استاندارد و تجهیزات کامل برای امنیت
                شما فراهم شده است.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-md border border-slate-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center">
                <svg width="18" height="18" fill="currentColor" className="text-red-500">
                  <path d="M3 3h12v12H3z" />
                </svg>
              </div>
              <span className="font-semibold text-slate-900 text-sm">
                فضای شاد، گروهی و دوستانه
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              تورهای ما با تمرکز بر شادی، موسیقی، عکس‌های حرفه‌ای و فضای دوستانه طراحی
              شده‌اند تا همه احساس راحتی و لذت داشته باشند.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -----------------------------------------------------------
   🛶 Tour Cards Section (3 Cards)
----------------------------------------------------------- */

const TOURS = [
  {
    title: "تور رفتینگ زاینده‌رود — هیجان متوسط",
    level: "مناسب برای خانواده‌ها و گروه‌های دوستانه",
    price: "1,200,000 تومان",
    duration: "نیم‌روز (4 ساعت)",
    badge: "پرفروش‌ترین تور",
    image: "/img/tour1.jpg",
  },
  {
    title: "تور رفتینگ حرفه‌ای — موج‌های خروشان",
    level: "مناسب برای عاشقان هیجان و آدرنالین",
    price: "1,800,000 تومان",
    duration: "یک‌روز کامل",
    badge: "هیجان بالا",
    image: "/img/tour2.jpg",
  },
  {
    title: "تور رفتینگ + طبیعت‌گردی",
    level: "ترکیب رفتینگ، پیاده‌روی و عکاسی",
    price: "2,100,000 تومان",
    duration: "یک‌روز کامل",
    badge: "پکیج کامل",
    image: "/img/tour3.jpg",
  },
];

function TourCardsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            تورهای محبوب Zrafting
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            سه تور منتخب برای شروع تجربه رفتینگ؛ از سطح خانوادگی تا هیجان حرفه‌ای.
          </p>
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs text-slate-500">
          <svg width="18" height="18" fill="currentColor" className="text-blue-500">
            <path d="M3 9l4 4 8-8-1.5-1.5L7 10 4.5 7.5z" />
          </svg>
          <span>تمام تورها شامل بیمه و تجهیزات کامل هستند.</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {TOURS.map((tour, i) => (
          <div
            key={i}
            className="group bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-xl transition-all"
          >
            <div className="relative h-40 bg-slate-200">
              <img
                src={tour.image}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-all"
              />
              <div className="absolute top-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                {tour.badge}
              </div>
            </div>

            <div className="p-5 flex flex-col gap-3 flex-1">
              <h3 className="text-lg font-bold text-slate-900">{tour.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{tour.level}</p>

              <div className="flex items-center justify-between mt-2">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500">هزینه هر نفر</span>
                  <span className="text-sm font-semibold text-blue-600">
                    {tour.price}
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-slate-500">مدت تور</span>
                  <span className="text-sm font-semibold text-slate-800">
                    {tour.duration}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <button className="flex-1 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-xs hover:bg-blue-700 transition-all">
                  رزرو این تور
                </button>
                <button className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-xs hover:bg-slate-100 transition-all">
                  جزئیات بیشتر
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -----------------------------------------------------------
   ⭐ Features Section
----------------------------------------------------------- */

const FEATURES = [
  {
    iconColor: COLORS.green,
    title: "امنیت در اولویت",
    desc: "تمام تورها با بیمه، تجهیزات استاندارد و مربیان حرفه‌ای برگزار می‌شوند.",
  },
  {
    iconColor: COLORS.yellow,
    title: "فضای شاد و دوستانه",
    desc: "موسیقی، عکس‌های گروهی، شوخی و خنده؛ تورها فقط جدی و خشک نیستند!",
  },
  {
    iconColor: COLORS.accent,
    title: "پشتیبانی قبل و بعد از تور",
    desc: "از لحظه رزرو تا پایان تور، همراه شما هستیم.",
  },
  {
    iconColor: COLORS.red,
    title: "مسیرهای منتخب زاینده‌رود",
    desc: "انتخاب بهترین بخش‌های رودخانه برای ترکیب هیجان و امنیت.",
  },
];

function FeaturesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            ویژگی‌های اصلی Zrafting
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            چرا تورهای ما با بقیه متفاوت هستند؟
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {FEATURES.map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-5 shadow-md border border-slate-200 flex flex-col gap-3 hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: `${f.iconColor}22` }}>
              <svg width="18" height="18" fill="currentColor" style={{ color: f.iconColor }}>
                <path d="M3 9l4 4 8-8-1.5-1.5L7 10 4.5 7.5z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-slate-900">{f.title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -----------------------------------------------------------
   📸 Rafting Photos Section
----------------------------------------------------------- */

function PhotosSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            لحظه‌های خروشان روی موج‌ها
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            چند تصویر از فضای واقعی تورهای رفتینگ Zrafting.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200">
          <img src="/img/raft1.jpg" className="w-full h-56 object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-xs p-3">
            موج‌های خروشان و هیجان کنترل‌شده
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200">
          <img src="/img/raft2.jpg" className="w-full h-56 object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-xs p-3">
            گروه‌های شاد و دوستانه روی رودخانه
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200">
          <img src="/img/raft3.jpg" className="w-full h-56 object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-xs p-3">
            لحظه‌های ثبت‌شده توسط عکاس تور
          </div>
        </div>
      </div>
    </section>
  );
}

/* -----------------------------------------------------------
   ⚡ Fast Booking Section
----------------------------------------------------------- */

function FastBookingSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
              <svg width="18" height="18" fill="currentColor" className="text-green-600">
                <path d="M3 9l4 4 8-8-1.5-1.5L7 10 4.5 7.5z" />
              </svg>
            </span>
            <span className="text-xs font-semibold text-green-700">
              رزرو سریع و بدون پیچیدگی
            </span>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            همین حالا تور رفتینگ خودت را رزرو کن
          </h2>

          <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-6">
            فقط چند کلیک تا هیجان روی موج‌های زاینده‌رود فاصله داری.  
            اطلاعات تماس را وارد کن، تور مورد علاقه‌ات را انتخاب کن و ما با تو تماس
            می‌گیریم تا جزئیات را نهایی کنیم.
          </p>

          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md text-sm">
              رزرو سریع تور
            </button>
            <button className="px-6 py-3 rounded-xl border border-slate-300 text-slate-800 hover:bg-slate-100 transition-all text-sm">
              مشاوره قبل از رزرو
            </button>
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs text-slate-600">نام و نام خانوادگی</label>
              <input
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="مثلاً: شایان ایزدی"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs text-slate-600">شماره تماس</label>
              <input
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="مثلاً: 0913..."
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs text-slate-600">انتخاب نوع تور</label>
              <select className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>تور رفتینگ زاینده‌رود — هیجان متوسط</option>
                <option>تور رفتینگ حرفه‌ای — موج‌های خروشان</option>
                <option>تور رفتینگ + طبیعت‌گردی</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs text-slate-600">تعداد نفرات</label>
              <input
                type="number"
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="مثلاً: 4"
              />
            </div>

            <button className="mt-2 w-full px-6 py-3 rounded-xl bg-green-500 text-white hover:bg-green-600 transition-all text-sm shadow-md">
              ارسال درخواست رزرو
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -----------------------------------------------------------
   ⭐ Main Page
----------------------------------------------------------- */

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
      <Header />

      <main className="min-h-screen pt-20 bg-[var(--color-bg)] text-[var(--color-text)]">
        <HeroSlider />
        <IntroSection />
        <TourCardsSection />
        <FeaturesSection />
        <PhotosSection />
        <FastBookingSection />
      </main>

      <Footer />
    </>
  );
}
