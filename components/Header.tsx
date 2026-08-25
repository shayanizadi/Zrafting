"use client";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-[100] bg-white/70 backdrop-blur-md shadow-sm font-[IRANYekanRound]">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-sky-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
            Z
          </div>
          <span className="text-sky-900 text-sm font-bold">
            رفتینگ زاینده‌رود
          </span>
        </div>

        <nav className="hidden sm:flex items-center gap-4 text-sm text-sky-900">
          <button>تورها</button>
          <button>مسیرها</button>
          <button>قوانین ایمنی</button>
          <button>گالری</button>
          <button>تماس</button>
        </nav>
      </div>
    </header>
  );
}
