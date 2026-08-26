"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);

  // متن تایپ‌شونده
  const fullText = "Zrafting | رفتینگ زاینده رود";
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setTyped(fullText.slice(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* لوگو */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-yellow-400 via-sky-300 to-green-300 flex items-center justify-center shadow-md">
            <span className="text-black font-bold text-lg">Z</span>
          </div>

          {/* عنوان بدون نستعلیق */}
          <h1 className="text-xl md:text-2xl font-bold text-black tracking-wide whitespace-nowrap">
            {typed}
            <span className="animate-pulse">|</span>
          </h1>
        </div>

        {/* منوی دسکتاپ */}
        <nav className="hidden md:flex items-center gap-8 text-black font-medium">

          <Link href="/" className="hover:text-yellow-500 transition-all hover:scale-105">
            خانه
          </Link>

          <div className="relative">
            <button
              onClick={() => setTourOpen(!tourOpen)}
              className="hover:text-sky-500 transition-all hover:scale-105"
            >
              تورها
            </button>

            {tourOpen && (
              <div className="absolute top-8 left-0 bg-white border border-slate-200 shadow-lg rounded-xl p-4 flex flex-col gap-3 w-40">
                <Link href="#" className="hover:text-yellow-500 transition-all">
                  منوی تور ۱
                </Link>
                <Link href="#" className="hover:text-green-500 transition-all">
                  منوی تور ۲
                </Link>
                <Link href="#" className="hover:text-red-500 transition-all">
                  منوی تور ۳
                </Link>
              </div>
            )}
          </div>

          <Link href="/gallery" className="hover:text-green-500 transition-all hover:scale-105">
            گالری
          </Link>

          <Link href="/contact" className="hover:text-red-500 transition-all hover:scale-105">
            ارتباط با ما
          </Link>

          <Link href="/about" className="hover:text-purple-500 transition-all hover:scale-105">
            درباره ما
          </Link>
        </nav>

        {/* دکمه موبایل */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 border border-slate-300"
          onClick={() => setOpen(!open)}
        >
          <span className="text-black text-xl">≡</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur-xl border-t border-slate-200 shadow-lg">
          <nav className="flex flex-col p-4 text-black font-medium gap-4">

            <Link href="/" onClick={() => setOpen(false)} className="hover:text-yellow-500">
              خانه
            </Link>

            <div className="flex flex-col gap-2">
              <span className="font-semibold text-sky-600">تورها</span>

              <Link href="#" className="hover:text-yellow-500 transition-all">
                منوی تور ۱
              </Link>
              <Link href="#" className="hover:text-green-500 transition-all">
                منوی تور ۲
              </Link>
              <Link href="#" className="hover:text-red-500 transition-all">
                منوی تور ۳
              </Link>
            </div>

            <Link href="/gallery" onClick={() => setOpen(false)} className="hover:text-green-500">
              گالری
            </Link>

            <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-red-500">
              ارتباط با ما
            </Link>

            <Link href="/about" onClick={() => setOpen(false)} className="hover:text-purple-500">
              درباره ما
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
