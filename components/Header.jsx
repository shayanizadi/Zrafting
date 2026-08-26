// components/Header.jsx
"use client";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full px-4 py-3 bg-[#0a1a2f] text-white flex items-center justify-between fixed top-0 left-0 z-50 shadow-lg">
        <div className="text-xl font-bold tracking-wide">
          RaftingCo
        </div>

        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>

        <nav className="hidden md:flex gap-8 text-lg">
          <a href="/">خانه</a>
          <a href="/about">درباره ما</a>
          <a href="/tours">تورها</a>
          <a href="/gallery">گالری</a>
          <a href="/tickets">فروش بلیط</a>
          <a href="/contact">ارتباط با ما</a>
        </nav>
      </header>

      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
}
