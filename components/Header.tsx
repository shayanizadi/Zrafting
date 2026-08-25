"use client";

import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const desktopMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        desktopMenuRef.current &&
        !desktopMenuRef.current.contains(e.target as Node)
      ) {
        setDesktopMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className="
        w-full fixed top-0 left-0 z-[50]
        flex items-center justify-between
        px-6 md:px-12 py-4
        backdrop-blur-xl bg-white/20
        border-b border-white/30
      "
    >
      {/* لوگو */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-cyan-300 shadow-lg" />

        <span
          className="
            text-black text-3xl md:text-4xl
            font-[var(--font-nastaligh-en)]
            drop-shadow-[0_2px_6px_rgba(255,255,255,0.4)]
          "
        >
          Zrafting
        </span>
      </div>

      {/* منوی دسکتاپ */}
      <nav className="hidden md:flex items-center gap-10 text-black font-[var(--font-vazir)]">
        {/* تورها با منوی کشویی */}
        <div
          className="relative"
          ref={desktopMenuRef}
          onMouseEnter={() => setDesktopMenuOpen(true)}
        >
          <button className="hover:text-cyan-600 transition">تورها</button>

          {desktopMenuOpen && (
            <div
              className="
                absolute left-0 top-10
                bg-white/60 backdrop-blur-xl border border-white/70
                rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                p-4 w-56
              "
            >
              <button className="block w-full text-right py-2 hover:text-cyan-600">
                تور خانوادگی
              </button>
              <button className="block w-full text-right py-2 hover:text-cyan-600">
                تور دوستانه
              </button>
              <button className="block w-full text-right py-2 hover:text-cyan-600">
                تور حرفه‌ای
              </button>
            </div>
          )}
        </div>

        <button className="hover:text-cyan-600 transition">گالری</button>
        <button className="hover:text-cyan-600 transition">تماس با ما</button>
        <button className="hover:text-cyan-600 transition">بلیط‌ها</button>
        <button className="hover:text-cyan-600 transition">اقامتگاه</button>
      </nav>

      {/* دکمه‌های دسکتاپ */}
      <div className="hidden md:flex items-center gap-4">
        <button
          className="
            px-5 py-2 rounded-xl
            bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-500
            text-black text-xl
            font-[var(--font-nastaligh-en)]
            shadow-[0_4px_12px_rgba(0,150,255,0.45)]
            hover:scale-110 hover:-translate-y-1
            transition-all duration-300 ease-out
          "
        >
          Sign In
        </button>

        <button
          className="
            px-6 py-2 rounded-xl
            bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-500
            text-black text-xl
            font-[var(--font-nastaligh-en)]
            shadow-[0_4px_12px_rgba(255,80,200,0.45)]
            hover:scale-110 hover:-translate-y-1
            transition-all duration-300 ease-out
          "
        >
          Sign Up
        </button>
      </div>

      {/* دکمه موبایل */}
      <button
        className="md:hidden text-black text-3xl"
        onClick={() => setMobileMenuOpen(true)}
      >
        ☰
      </button>

      {/* پنل موبایل حرفه‌ای */}
      <div
        className={`
          fixed top-0 right-0 h-full w-72
          bg-white text-black
          shadow-[0_10px_40px_rgba(0,0,0,0.25)]
          border-l border-gray-200
          p-6 flex flex-col
          transition-transform duration-300 ease-out
          md:hidden
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* هدر منوی موبایل */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-xl font-[var(--font-vazir)]">منو</span>

          <button
            className="text-2xl font-[var(--font-vazir)]"
            onClick={() => setMobileMenuOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* آیتم‌های منو */}
        <nav className="flex flex-col gap-4 font-[var(--font-vazir)] text-lg">
          <button className="text-right hover:text-cyan-600 transition">
            تورها
          </button>
          <button className="text-right hover:text-cyan-600 transition">
            گالری
          </button>
          <button className="text-right hover:text-cyan-600 transition">
            تماس با ما
          </button>
          <button className="text-right hover:text-cyan-600 transition">
            بلیط‌ها
          </button>
          <button className="text-right hover:text-cyan-600 transition">
            اقامتگاه
          </button>
        </nav>

        {/* دکمه‌های انگلیسی */}
        <div className="mt-8 flex flex-col gap-3">
          <button
            className="
              w-full py-3 rounded-xl
              bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-500
              text-black text-xl
              font-[var(--font-nastaligh-en)]
              shadow-[0_4px_12px_rgba(0,150,255,0.45)]
            "
          >
            Sign In
          </button>

          <button
            className="
              w-full py-3 rounded-xl
              bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-500
              text-black text-xl
              font-[var(--font-nastaligh-en)]
              shadow-[0_4px_12px_rgba(255,80,200,0.45)]
            "
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
