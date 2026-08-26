"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0a1a2f] text-white mt-20 pt-10 pb-6 px-6 md:px-20">

      {/* بخش بالا */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

        {/* ستون 1 */}
        <div>
          <h3 className="font-title text-xl mb-3">RaftingCo</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            برگزارکننده تورهای حرفه‌ای رفتینگ در بهترین رودخانه‌های ایران.
            امنیت، هیجان و تجربه‌ای فراموش‌نشدنی را برای شما فراهم می‌کنیم.
          </p>
        </div>

        {/* ستون 2 */}
        <div>
          <h3 className="font-title text-xl mb-3">دسترسی سریع</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li><a href="/" className="hover:text-[var(--color-accent)]">خانه</a></li>
            <li><a href="/tours" className="hover:text-[var(--color-accent)]">تورهای ما</a></li>
            <li><a href="/gallery" className="hover:text-[var(--color-accent)]">گالری</a></li>
            <li><a href="/tickets" className="hover:text-[var(--color-accent)]">فروش بلیط</a></li>
            <li><a href="/contact" className="hover:text-[var(--color-accent)]">ارتباط با ما</a></li>
          </ul>
        </div>

        {/* ستون 3 */}
        <div>
          <h3 className="font-title text-xl mb-3">ارتباط با ما</h3>
          <p className="text-sm opacity-90 mb-2">📞 0912xxxxxxx</p>
          <p className="text-sm opacity-90 mb-2">📍 تهران</p>
          <p className="text-sm opacity-90 mb-2">💬 واتساپ: 0912xxxxxxx</p>
        </div>
      </div>

      {/* خط جداکننده */}
      <div className="border-t border-white/20 pt-6 text-center">
        <p className="text-sm opacity-70">
          © 2026 RaftingCo — تمامی حقوق محفوظ است
        </p>
      </div>
    </footer>
  );
}
