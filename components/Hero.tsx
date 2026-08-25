"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";

export default function Hero() {
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    const handleScroll = () => setParallax(window.scrollY * 0.2);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="
        relative w-full h-[100vh] flex flex-col items-center justify-center
        bg-gradient-to-b from-sky-200 via-sky-300 to-sky-500
        overflow-hidden
      "
    >
      {/* استایل‌های اختصاصی گرافیکی */}
      <style>
        {`
          @keyframes waveUpDown {
            0%   { transform: translateY(0); }
            50%  { transform: translateY(-40px); }
            100% { transform: translateY(0); }
          }

          .wave-slow { animation: waveUpDown 6s ease-in-out infinite; }
          .wave-medium { animation: waveUpDown 4.5s ease-in-out infinite; }
          .wave-fast { animation: waveUpDown 3.5s ease-in-out infinite; }

          @keyframes floatBubble {
            0%   { transform: translateY(0) translateX(0); opacity: 0.4; }
            50%  { transform: translateY(-40px) translateX(20px); opacity: 0.9; }
            100% { transform: translateY(0) translateX(0); opacity: 0.4; }
          }

          @keyframes glowPulse {
            0%   { opacity: 0.3; transform: scale(1); }
            50%  { opacity: 0.8; transform: scale(1.1); }
            100% { opacity: 0.3; transform: scale(1); }
          }

          @keyframes cardFloat {
            0%   { transform: translateY(0); }
            50%  { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }

          .bubble {
            animation: floatBubble 8s ease-in-out infinite;
          }

          .bubble-delay-1 {
            animation-delay: 1.5s;
          }

          .bubble-delay-2 {
            animation-delay: 3s;
          }

          .bubble-delay-3 {
            animation-delay: 4.5s;
          }

          .hero-glow {
            animation: glowPulse 6s ease-in-out infinite;
          }

          .card-float {
            animation: cardFloat 5s ease-in-out infinite;
          }
        `}
      </style>

      {/* هدر */}
      <Header />

      {/* بک‌گراند کارتونی با پارالاکس */}
      <div
        className="absolute inset-0 opacity-35 z-[1]"
        style={{
          backgroundImage: "url('/images/hero-bg-cartoon.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${parallax}px)`,
        }}
      />

      {/* لایه نئونی گرافیکی */}
      <div className="pointer-events-none absolute inset-0 z-[2] mix-blend-screen">
        {/* هاله‌های نئونی */}
        <div className="hero-glow absolute -top-32 left-10 w-64 h-64 bg-cyan-300 blur-3xl opacity-60 rounded-full" />
        <div className="hero-glow absolute top-10 right-0 w-72 h-72 bg-sky-500 blur-3xl opacity-60 rounded-full" />
        <div className="hero-glow absolute bottom-0 left-1/3 w-80 h-80 bg-blue-700 blur-3xl opacity-50 rounded-full" />
      </div>

      {/* حباب‌های شناور روی صفحه */}
      <div className="pointer-events-none absolute inset-0 z-[3]">
        <div className="bubble bubble-delay-1 absolute bottom-10 left-10 w-10 h-10 rounded-full bg-white/40 backdrop-blur-md border border-white/60" />
        <div className="bubble bubble-delay-2 absolute bottom-24 right-16 w-14 h-14 rounded-full bg-cyan-100/50 backdrop-blur-md border border-cyan-200/70" />
        <div className="bubble bubble-delay-3 absolute top-32 left-1/4 w-8 h-8 rounded-full bg-sky-50/60 backdrop-blur-md border border-sky-100/80" />
      </div>

      {/* کارت گلس‌مورفیسم مرکزی */}
      <div className="relative z-[20] flex flex-col items-center text-center px-4 mt-32">
        <div
          className="
            card-float
            relative max-w-3xl w-full mx-auto
            bg-white/15 border border-white/30
            rounded-3xl shadow-[0_25px_80px_rgba(15,23,42,0.55)]
            backdrop-blur-2xl px-8 py-10
          "
        >
          {/* عنوان اصلی */}
          <h1
            className="
              text-white text-5xl md:text-6xl lg:text-7xl font-extrabold
              drop-shadow-[0_18px_40px_rgba(0,0,0,0.7)]
              animate-[titleFloat_3s_ease-in-out_infinite]
              font-[var(--font-title)]
            "
          >
            رفتینگ زاینده‌رود
          </h1>

          {/* زیرعنوان کوچک بالای متن */}
          <p
            className="
              mt-4 text-sm md:text-base tracking-[0.25em]
              uppercase text-sky-100/80 font-[var(--font-button)]
            "
          >
            Adventure • Fun • Waves
          </p>

          {/* متن توضیح */}
          <p
            className="
              text-white text-lg md:text-xl mt-6 max-w-2xl mx-auto
              drop-shadow-[0_10px_24px_rgba(0,0,0,0.55)]
              animate-[subtitleFade_4s_ease-in-out_infinite]
              font-[var(--font-body)]
            "
          >
            لذت تفریح روی موج‌های خروشان زاینده‌رود، با لیدرهای حرفه‌ای و قایق‌های ایمن
            در فضایی کاملاً شاد، پرانرژی و دوستانه.  
            تجربه‌ای که هر بار، یک داستان جدید برای تعریف کردن می‌سازد.
          </p>

          {/* ردیف آیکون‌های کوچک ویژگی‌ها */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs md:text-sm text-sky-50 font-[var(--font-body)]">
            <span className="px-4 py-2 rounded-full bg-sky-900/40 border border-sky-200/40 shadow-md">
              لیدرهای حرفه‌ای و مجرب
            </span>
            <span className="px-4 py-2 rounded-full bg-sky-900/40 border border-sky-200/40 shadow-md">
              تجهیزات ایمن و استاندارد
            </span>
            <span className="px-4 py-2 rounded-full bg-sky-900/40 border border-sky-200/40 shadow-md">
              فضای شاد و دوستانه
            </span>
          </div>

          {/* دکمه‌ها */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              className="
                px-10 py-4 bg-white text-sky-800
                rounded-2xl shadow-xl hover:scale-110 hover:-translate-y-1
                transition-all duration-300 ease-out
                animate-[buttonPulse_2.5s_ease-in-out_infinite]
                font-[var(--font-button)]
              "
            >
              رزرو سریع تور
            </button>

            <button
              className="
                px-8 py-3 bg-sky-900/80 text-sky-50
                rounded-2xl shadow-lg hover:bg-sky-800 hover:scale-105 hover:-translate-y-0.5
                transition-all duration-300 ease-out
                font-[var(--font-button)]
              "
            >
              مشاهده تورها
            </button>
          </div>
        </div>
      </div>

      {/* موج‌ها */}
      <div className="absolute bottom-[40px] left-0 w-full z-[10] wave-slow">
        <svg viewBox="0 0 1440 320" className="w-full h-[140px]" preserveAspectRatio="none">
          <path
            fill="#4aa8ff"
            fillOpacity="0.95"
            d="M0,64L48,69.3C96,75,192,85,288,112C384,139,480,181,576,176C672,171,768,117,864,112C960,107,1056,149,1152,170.7C1248,192,1344,192,1392,192L1440,192V320H0Z"
          />
        </svg>
      </div>

      <div className="absolute bottom-[10px] left-0 w-full z-[15] wave-medium">
        <svg viewBox="0 0 1440 320" className="w-full h-[120px]" preserveAspectRatio="none">
          <path
            fill="#6bc8ff"
            fillOpacity="0.9"
            d="M0,140C200,180 360,100 520,150C700,200 860,120 1040,160C1220,200 1320,140 1440,170V320H0Z"
          />
        </svg>
      </div>

      <div className="absolute bottom-[-40px] left-0 w-full z-[20] wave-fast">
        <svg viewBox="0 0 1440 320" className="w-full h-[160px]" preserveAspectRatio="none">
          <path
            fill="#7cc9ff"
            fillOpacity="0.95"
            d="M0,224L48,213.3C96,203,192,181,288,165.3C384,149,480,139,576,154.7C672,171,768,213,864,218.7C960,224,1056,192,1152,170.7C1248,149,1344,139,1392,133.3L1440,128V320H0Z"
          />
        </svg>
      </div>
    </section>
  );
}
