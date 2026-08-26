"use client";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 w-full max-w-md">
        
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
          ورود به حساب کاربری
        </h2>

        <div className="flex flex-col gap-4">
          
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

          <button className="mt-2 w-full px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all text-sm shadow-md">
            ورود
          </button>

          <p className="text-xs text-slate-600 text-center mt-2">
            حساب نداری؟{" "}
            <a href="/signup" className="text-blue-600 font-semibold">
              ثبت‌نام کن
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
