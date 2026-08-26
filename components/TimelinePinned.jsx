"use client";

export default function TimelinePinned() {
  const steps = [
    { icon: "🔥", title: "انتخاب تور", desc: "تور مورد علاقه‌ات را انتخاب کن." },
    { icon: "📝", title: "رزرو سریع", desc: "اطلاعات اولیه را وارد کن." },
    { icon: "📞", title: "تماس پشتیبانی", desc: "کارشناسان ما با شما تماس می‌گیرند." },
    { icon: "🎧", title: "آموزش قبل از تور", desc: "آموزش کامل قبل از شروع." },
    { icon: "🌊", title: "شروع هیجان", desc: "رفتینگ روی موج‌های خروشان!" },
  ];

  return (
    <div className="hidden lg:block fixed left-4 top-32 w-52 z-40">
      <div className="sticky top-32 bg-white/90 backdrop-blur-xl border border-slate-200 shadow-xl rounded-3xl p-5">
        <h3 className="text-lg font-bold text-slate-900 mb-4">مراحل تور</h3>

        <div className="flex flex-col gap-6">
          {steps.map((s, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl shadow-md">
                {s.icon}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900">{s.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
