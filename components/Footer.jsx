export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* لوگو و توضیح */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 via-sky-400 to-green-400 flex items-center justify-center shadow-lg">
              <span className="text-black font-bold text-xl">Z</span>
            </div>
            <h2 className="text-2xl font-bold tracking-wide text-black">Zrafting</h2>
          </div>

          <p className="text-black/70 text-sm leading-relaxed">
            لذت هیجان روی موج‌های خروشان زاینده‌رود  
            در فضایی کاملاً شاد، پرانرژی و متفاوت.
          </p>
        </div>

        {/* اطلاعات تماس */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-black">اطلاعات تماس</h3>

          {/* شماره تماس */}
          <div className="flex items-center gap-3 text-black">
            <svg width="20" height="20" fill="currentColor">
              <path d="M3 2l4-1 3 7-3 1c1 3 3 5 6 6l1-3 7 3-1 4c-7 2-15-6-17-14z" />
            </svg>
            <span className="font-semibold">شماره تماس:</span>
            <a href="tel:+989138930426" className="hover:text-yellow-600 transition-all">
              +98 913 893 0426
            </a>
          </div>

          {/* واتساپ */}
          <div className="flex items-center gap-3 text-black">
            <svg width="20" height="20" fill="currentColor">
              <path d="M10 1a9 9 0 0 0-7 14l-1 4 4-1a9 9 0 1 0 4-17zm0 2a7 7 0 1 1-6 10l1-1 2 1c4 2 9-3 7-7l-1-2-2-1z" />
            </svg>
            <a
              href="https://wa.me/989138930426"
              className="font-semibold hover:text-green-600 transition-all"
              target="_blank"
            >
              واتساپ
            </a>
          </div>

          {/* تلگرام */}
          <div className="flex items-center gap-3 text-black">
            <svg width="20" height="20" fill="currentColor">
              <path d="M2 10l16-6-3 12-5-3-3 3v-4z" />
            </svg>
            <a
              href="https://t.me/M0426"
              className="font-semibold hover:text-sky-600 transition-all"
              target="_blank"
            >
              تلگرام
            </a>
          </div>

          {/* اینستاگرام */}
          <div className="flex items-center gap-3 text-black">
            <svg width="20" height="20" fill="currentColor">
              <path d="M7 2h6a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm3 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm5-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            </svg>
            <a
              href="https://www.instagram.com/z.rafting/"
              className="font-semibold hover:text-red-600 transition-all"
              target="_blank"
            >
              اینستاگرام
            </a>
          </div>
        </div>

        {/* آدرس */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-black">آدرس</h3>

          <div className="flex items-center gap-3 text-black">
            <svg width="20" height="20" fill="currentColor">
              <path d="M10 1a7 7 0 0 0-7 7c0 5 7 11 7 11s7-6 7-11a7 7 0 0 0-7-7zm0 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
            </svg>
            <p className="leading-relaxed">
              لطفاً آدرس دقیق را ارسال کنید تا اینجا ثبت شود.
            </p>
          </div>
        </div>

        {/* ای‌نماد */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-black">نماد اعتماد</h3>

          <div className="bg-white p-3 rounded-xl w-fit shadow-lg border border-slate-300">
            <a
              referrerPolicy="origin"
              target="_blank"
              href="https://trustseal.enamad.ir/?id=524557&Code=ZM9kxQpuDkzeiq0ethJgBLcvXdj4FwXS"
            >
              <img
                referrerPolicy="origin"
                src="https://trustseal.enamad.ir/logo.aspx?id=524557&Code=ZM9kxQpuDkzeiq0ethJgBLcvXdj4FwXS"
                alt="Enamad"
                className="w-28 h-auto cursor-pointer rounded-lg"
              />
            </a>
          </div>
        </div>
      </div>

      {/* کپی‌رایت */}
      <div className="w-full border-t border-slate-200 py-4 text-center text-black/70 text-sm">
        © 2026 Zrafting — تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
}
