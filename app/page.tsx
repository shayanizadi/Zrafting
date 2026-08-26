"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* -----------------------------------------------------------
   🎨 Light Theme Colors
----------------------------------------------------------- */

const COLORS = {
  primary: "#e8edf5",
  text: "#0f172a",
  accent: "#3b82f6",
  accentSoft: "#93c5fd",
  accentDark: "#2563eb",
  bg: "#f8fafc",
  cardBg: "rgba(255,255,255,0.85)",
  cardBorder: "rgba(148,163,184,0.35)",
  glassLight: "rgba(255,255,255,0.7)",
  glassBorder: "rgba(148,163,184,0.35)",
  yellow: "#facc15",
  green: "#4ade80",
};

/* -----------------------------------------------------------
   📌 Hero Slider Data
----------------------------------------------------------- */

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
   🎬 Hero Slider (Final Fixed Version)
----------------------------------------------------------- */

function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [index]);

  const nextSlide = () => {
    setFade(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
      setFade(false);
    }, 350);
  };

  const prevSlide = () => {
    setFade(true);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
      setFade(false);
    }, 350);
  };

  const current = SLIDES[index];

  return (
    <section className="relative w-full h-[420px] md:h-[520px] overflow-hidden rounded-b-3xl">

      {/* تصویر اسلاید */}
      <img
        src={current.src}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-[900ms] ${
          fade ? "opacity-0 scale-[1.03]" : "opacity-100 scale-[1]"
        }`}
      />

      {/* گرادینت خوانایی متن */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/10" />

      {/* لایه نوری */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/20 mix-blend-soft-light" />

      {/* محتوای روی بنر */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20">

        {/* تگ بالا */}
        <div className="inline-flex items-center gap-2 mb-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
          <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
          <span className="text-xs text-white">{current.tag}</span>
        </div>

        {/* باکس شیشه‌ای متن */}
        <div
          className="max-w-xl rounded-3xl p-5 md:p-6 shadow-lg"
          style={{
            background: COLORS.glassLight,
            border: `1px solid ${COLORS.glassBorder}`,
            backdropFilter: "blur(18px)",
          }}
        >
          <h1 className="font-title text-2xl md:text-4xl text-slate-900 mb-3 leading-snug">
            {current.title}
          </h1>

          <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-5">
            {current.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="btn-primary text-xs md:text-sm">
              رزرو سریع تور
            </button>
            <button className="px-6 py-2 rounded-full border border-slate-300 text-slate-800 text-xs md:text-sm hover:bg-slate-100 transition-all">
              مشاهده تورها
            </button>
          </div>
        </div>

        {/* اندیکاتورها */}
        <div className="mt-6 flex items-center gap-3">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === index
                  ? "bg-[var(--color-accent)] scale-125"
                  : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* دکمه‌های قبلی/بعدی */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-md border border-white/30 transition-all"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-md border border-white/30 transition-all"
      >
        ›
      </button>
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

        {/* سکشن‌های بعدی اینجا اضافه می‌شوند */}
      </main>

      <Footer />
    </>
  );
}
