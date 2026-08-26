"use client";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 w-full max-w-md">
        
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
          ساخت حساب کاربری
        </h2>

        <div className="flex flex-col gap-4">
          
          <div className="flex flex-col gap-2">
            <label className="text-xs text-slate-600">نام و نام خانوادگی</label>
            <input
              type="text"
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="مثلاً: شایان ایزدی"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs text-slate-600">ایمیل</label>
            <input
              type="email"
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="مثلاً: example@gmail.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs text-slate-600">رمز عبور</label>
            <input
              type="password"
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="••••••••"
            />
          </div>

          <button className="mt-2 w-full px-6 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700 transition-all text-sm shadow-md">
            ثبت‌نام
          </button>

          <p className="text-xs text-slate-600 text-center mt-2">
            قبلاً ثبت‌نام کردی؟{" "}
            <a href="/signin" className="text-blue-600 font-semibold">
              وارد شو
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
