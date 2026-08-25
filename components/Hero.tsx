"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";

export default function Hero() {
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    const handleScroll = () => setParallax(window.scrollY * 0.25);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="
        relative w-full min-h-[100vh] flex flex-col items-center justify-center
        bg-gradient-to-b 
from-sky-300 
via-cyan-300 
via-purple-300 
via-pink-300 
to-sky-600





        overflow-hidden
      "
    >
      {/* استایل‌های اختصاصی گرافیکی */}
      <style>
        {`
          @keyframes waveUpDown {
            0%   { transform: translateY(0); }
            50%  { transform: translateY(-35px); }
            100% { transform: translateY(0); }
          }

          .wave-slow { animation: waveUpDown 7s ease-in-out infinite; }
          .wave-medium { animation: waveUpDown 5s ease-in-out infinite; }
          .wave-fast { animation: waveUpDown 3.5s ease-in-out infinite; }

          @keyframes floatBubble {
            0%   { transform: translateY(0) translateX(0); opacity: 0.3; }
            50%  { transform: translateY(-50px) translateX(25px); opacity: 0.9; }
            100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          }

          @keyframes glowPulse {
            0%   { opacity: 0.3; transform: scale(1); }
            50%  { opacity: 0.9; transform: scale(1.15); }
            100% { opacity: 0.3; transform: scale(1); }
          }

          @keyframes cardFloat {
            0%   { transform: translateY(0); }
            50%  { transform: translateY(-12px); }
            100% { transform: translateY(0); }
          }

          .bubble {
            animation: floatBubble 9s ease-in-out infinite;
          }

          .bubble-delay-1 { animation-delay: 1.5s; }
          .bubble-delay-2 { animation-delay: 3s; }
          .bubble-delay-3 { animation-delay: 4.5s; }
          .bubble-delay-4 { animation-delay: 6s; }

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
        className="absolute inset-0 opacity-40 z-[1]"
        style={{
          backgroundImage: "url('/images/hero-bg-cartoon.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${parallax}px)`,
        }}
      />

      {/* لایه نئونی گرافیکی */}
      <div className="pointer-events-none absolute inset-0 z-[2] mix-blend-screen">
        <div className="hero-glow absolute -top-32 left-10 w-64 h-64 bg-cyan-300 blur-3xl opacity-80 rounded-full" />
        <div className="hero-glow absolute top-10 right-0 w-72 h-72 bg-sky-500 blur-3xl opacity-80 rounded-full" />
        <div className="hero-glow absolute bottom-0 left-1/3 w-80 h-80 bg-blue-700 blur-3xl opacity-70 rounded-full" />
        <div className="hero-glow absolute bottom-20 right-20 w-56 h-56 bg-purple-400 blur-3xl opacity-70 rounded-full" />
      </div>

      {/* حباب‌های شناور روی صفحه */}
      <div className="pointer-events-none absolute inset-0 z-[3]">
        <div className="bubble bubble-delay-1 absolute bottom-10 left-10 w-10 h-10 rounded-full bg-white/60 backdrop-blur-md border border-white/80" />
        <div className="bubble bubble-delay-2 absolute bottom-24 right-16 w-14 h-14 rounded-full bg-cyan-100/80 backdrop-blur-md border border-cyan-200/90" />
        <div className="bubble bubble-delay-3 absolute top-32 left-1/4 w-8 h-8 rounded-full bg-sky-50/90 backdrop-blur-md border border-sky-100/90" />
        <div className="bubble bubble-delay-4 absolute top-20 right-1/3 w-12 h-12 rounded-full bg-purple-100/80 backdrop-blur-md border border-purple-200/90" />
      </div>

      {/* کارت گلس‌مورفیسم مرکزی */}
      <div className="relative z-[20] flex flex-col items-center text-center px-4 mt-24 md:mt-32">
        <div
          className="
            card-float
            relative max-w-3xl w-full mx-auto
            bg-white/25 border border-white/40
            rounded-3xl shadow-[0_25px_80px_rgba(15,23,42,0.75)]
            backdrop-blur-2xl px-6 md:px-10 py-8 md:py-12
          "
        >
          {/* عنوان اصلی */}
          <h1
            className="
              text-yellow-100 text-4xl md:text-6xl lg:text-7xl font-mx-auto
              drop-shadow-[0_18px_40px_rgba(0,0,0,0.9)]
              animate-[subtitleFade_4s_ease-in-out_infinite]
              font-[var(--font-body)]
            "
          >
            رفتینگ زاینده‌رود
          </h1>

          {/* زیرعنوان کوچک بالای متن */}
          <p
            className="
              mt-4 text-xs md:text-sm tracking-[0.25em]
              uppercase text-cyan-100/90 font-[var(--font-button)]
            "
          >
              ‌
          </p>

          {/* متن توضیح */}
          <p
            className="
              text-emerald-900 text-base md:text-lg mt-6 max-w-2xl mx-auto
              drop-shadow-[0_10px_24px_rgba(0,0,0,0.7)]
              animate-[subtitleFade_4s_ease-in-out_infinite]
              font-[var(--font-body)]
            "
          >
            لذت تفریح روی موج‌های خروشان زاینده‌رود، با لیدرهای حرفه‌ای و قایق‌های ایمن
            در فضایی کاملاً شاد، پرانرژی و دوستانه.  
            هر تور، یک خاطره‌ی تازه و یک داستان برای تعریف کردن.
          </p>

          {/* ردیف ویژگی‌ها — نسخه شادتر و نئونی‌تر */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:gap-4 text-xs md:text-sm font-[var(--font-body)]">

            {/* لیدرهای حرفه‌ای و مجرب */}
            <span
              className="
                px-4 py-2 rounded-full
                bg-gradient-to-r from-sky-400/70 via-cyan-300/70 to-sky-300/70
                border border-cyan-200/60
                text-black shadow-[0_4px_12px_rgba(0,150,255,0.45)]
                backdrop-blur-xl
              "
            >
              لیدرهای حرفه‌ای و مجرب
            </span>

            {/* تجهیزات ایمن و استاندارد */}
            <span
              className="
                px-4 py-2 rounded-full
                bg-gradient-to-r from-emerald-400/70 via-green-300/70 to-lime-300/70
                border border-green-200/60
                text-black shadow-[0_4px_12px_rgba(0,255,120,0.45)]
                backdrop-blur-xl
              "
            >
              تجهیزات ایمن و استاندارد
            </span>

            {/* فضای شاد و دوستانه */}
            <span
              className="
                px-4 py-2 rounded-full
                bg-gradient-to-r from-pink-400/70 via-fuchsia-400/70 to-purple-400/70
                border border-pink-200/60
                text-black shadow-[0_4px_12px_rgba(255,80,200,0.45)]
                backdrop-blur-xl
              "
            >
              فضای شاد و دوستانه
            </span>

          </div>

          {/* دکمه‌ها */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {/* رزرو سریع تور - زرد نئونی */}
            <button
              className="
                px-10 py-4
                bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-300
                text-yellow-900
                rounded-2xl shadow-xl hover:scale-110 hover:-translate-y-1
                transition-all duration-300 ease-out
                animate-[buttonPulse_2.5s_ease-in-out_infinite]
                font-[var(--font-button)]
              "
            >
              رزرو سریع تور
            </button>

            {/* مشاهده تورها - سبز نئونی */}
            <button
              className="
                px-8 py-3
                bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400
                text-emerald-950
                rounded-2xl shadow-lg hover:scale-105 hover:-translate-y-0.5
                transition-all duration-300 ease-out
                font-[var(--font-button)]
              "
            >
              مشاهده تورها
            </button>
          </div>
        </div>
      </div>

      {/* موج‌ها - نسخه ریسپانسیو */}
      <div className="absolute bottom-0 left-0 w-full z-[5] pointer-events-none">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-[80px] md:h-[140px] wave-slow"
          preserveAspectRatio="none"
        >
          <path
            fill="#4aa8ff"
            fillOpacity="0.95"
            d="M0,64L48,69.3C96,75,192,85,288,112C384,139,480,181,576,176C672,171,768,117,864,112C960,107,1056,149,1152,170.7C1248,192,1344,192,1392,192L1440,192V320H0Z"
          />
        </svg>
      </div>

      <div className="absolute bottom-[-20px] left-0 w-full z-[4] pointer-events-none">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-[70px] md:h-[120px] wave-medium"
          preserveAspectRatio="none"
        >
          <path
            fill="#6bc8ff"
            fillOpacity="0.9"
            d="M0,140C200,180 360,100 520,150C700,200 860,120 1040,160C1220,200 1320,140 1440,170V320H0Z"
          />
        </svg>
      </div>

      <div className="absolute bottom-[-40px] left-0 w-full z-[3] pointer-events-none">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-[90px] md:h-[160px] wave-fast"
          preserveAspectRatio="none"
        >
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
/* ----------------------------------------------------
   پارت ۲ — سکشن تورها (Tour Section)
---------------------------------------------------- */

export function ToursSection() {
  return (
    <section
      className="
        relative w-full py-24 md:py-32
        bg-gradient-to-b from-sky-500 via-sky-400 to-sky-300
        overflow-hidden
      "
    >
      {/* موج‌های تزئینی بالای سکشن */}
      <div className="absolute top-0 left-0 w-full pointer-events-none opacity-70">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-[80px] md:h-[120px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="0.35"
            d="M0,64L48,69.3C96,75,192,85,288,112C384,139,480,181,576,176C672,171,768,117,864,112C960,107,1056,149,1152,170.7C1248,192,1344,192,1392,192L1440,192V0H0Z"
          />
        </svg>
      </div>

      {/* عنوان سکشن */}
      <div className="relative z-[10] text-center px-6">
        <h2
          className="
            text-white text-4xl md:text-6xl font-extrabold
            drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]
            font-[var(--font-title)]
          "
        >
          تورهای ویژه زاینده‌رود
        </h2>

        <p
          className="
            text-white/90 text-lg md:text-xl mt-4
            font-[var(--font-body)]
            drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]
          "
        >
          انتخاب کن، رزرو کن، و یک روز فوق‌العاده بساز!
        </p>
      </div>

      {/* کارت‌ها */}
      <div
        className="
          relative z-[20]
          mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          gap-10 px-6 md:px-12 lg:px-20
        "
      >
        {/* کارت ۱ */}
        <div
          className="
            group card-float
            bg-white/20 backdrop-blur-xl
            border border-white/40
            rounded-3xl p-6 md:p-8
            shadow-[0_20px_60px_rgba(0,0,0,0.35)]
            transition-all duration-300
            hover:scale-[1.03] hover:-translate-y-2
          "
        >
          <div className="text-center">
            <h3
              className="
                text-white text-2xl md:text-3xl font-bold
                drop-shadow-[0_6px_20px_rgba(0,0,0,0.5)]
                font-[var(--font-title)]
              "
            >
              تور خانوادگی
            </h3>

            <p
              className="
                text-white/90 mt-4 text-sm md:text-base
                font-[var(--font-body)]
              "
            >
              مناسب خانواده‌ها، کاملاً ایمن، با لیدرهای حرفه‌ای و فضای شاد.
            </p>

            <button
              className="
                mt-6 px-8 py-3
                bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-300
                text-yellow-900 font-[var(--font-button)]
                rounded-2xl shadow-lg
                transition-all duration-300
                group-hover:scale-110
              "
            >
              رزرو تور
            </button>
          </div>
        </div>

        {/* کارت ۲ */}
        <div
          className="
            group card-float
            bg-white/20 backdrop-blur-xl
            border border-white/40
            rounded-3xl p-6 md:p-8
            shadow-[0_20px_60px_rgba(0,0,0,0.35)]
            transition-all duration-300
            hover:scale-[1.03] hover:-translate-y-2
          "
        >
          <div className="text-center">
            <h3
              className="
                text-white text-2xl md:text-3xl font-bold
                drop-shadow-[0_6px_20px_rgba(0,0,0,0.5)]
                font-[var(--font-title)]
              "
            >
              تور دوستانه
            </h3>

            <p
              className="
                text-white/90 mt-4 text-sm md:text-base
                font-[var(--font-body)]
              "
            >
              مناسب جمع‌های دوستانه، پرانرژی، هیجان‌انگیز و کاملاً شاد.
            </p>

            <button
              className="
                mt-6 px-8 py-3
                bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400
                text-emerald-950 font-[var(--font-button)]
                rounded-2xl shadow-lg
                transition-all duration-300
                group-hover:scale-110
              "
            >
              مشاهده تور
            </button>
          </div>
        </div>

        {/* کارت ۳ */}
        <div
          className="
            group card-float
            bg-white/20 backdrop-blur-xl
            border border-white/40
            rounded-3xl p-6 md:p-8
            shadow-[0_20px_60px_rgba(0,0,0,0.35)]
            transition-all duration-300
            hover:scale-[1.03] hover:-translate-y-2
          "
        >
          <div className="text-center">
            <h3
              className="
                text-white text-2xl md:text-3xl font-bold
                drop-shadow-[0_6px_20px_rgba(0,0,0,0.5)]
                font-[var(--font-title)]
              "
            >
              تور حرفه‌ای
            </h3>

            <p
              className="
                text-white/90 mt-4 text-sm md:text-base
                font-[var(--font-body)]
              "
            >
              مخصوص افراد حرفه‌ای، مسیرهای سخت‌تر، هیجان بیشتر، لیدرهای متخصص.
            </p>

            <button
              className="
                mt-6 px-8 py-3
                bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-300
                text-blue-900 font-[var(--font-button)]
                rounded-2xl shadow-lg
                transition-all duration-300
                group-hover:scale-110
              "
            >
              اطلاعات بیشتر
            </button>
          </div>
        </div>
      </div>

      {/* موج‌های پایین سکشن */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none opacity-70">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-[80px] md:h-[120px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="0.35"
            d="M0,224L48,213.3C96,203,192,181,288,165.3C384,149,480,139,576,154.7C672,171,768,213,864,218.7C960,224,1056,192,1152,170.7C1248,149,1344,139,1392,133.3L1440,128V320H0Z"
          />
        </svg>
      </div>
    </section>
  );
}
