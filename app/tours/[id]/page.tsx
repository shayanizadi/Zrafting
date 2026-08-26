"use client";

import { useParams } from "next/navigation";

const TOURS = [
  {
    id: 1,
    title: "تور رفتینگ زاینده‌رود — هیجان متوسط",
    level: "متوسط",
    price: 1200000,
    duration: "۴ ساعت",
    image: "/img/tour1.jpg",
    description:
      "این تور مناسب خانواده‌ها و گروه‌های دوستانه است. مسیرهای آرام‌تر، آموزش کامل قبل از شروع و عکس‌های حرفه‌ای.",
  },
  {
    id: 2,
    title: "تور رفتینگ حرفه‌ای — موج‌های خروشان",
    level: "بالا",
    price: 1800000,
    duration: "یک‌روز کامل",
    image: "/img/tour2.jpg",
    description:
      "این تور مخصوص عاشقان هیجان است. موج‌های خروشان، مسیرهای سخت‌تر و مربیان حرفه‌ای همراه شما هستند.",
  },
  {
    id: 3,
    title: "تور رفتینگ + طبیعت‌گردی",
    level: "متوسط",
    price: 2100000,
    duration: "یک‌روز کامل",
    image: "/img/tour3.jpg",
    description:
      "ترکیب رفتینگ، پیاده‌روی، عکاسی و طبیعت‌گردی. مناسب برای کسانی که تجربه‌ای متفاوت می‌خواهند.",
  },
  {
    id: 4,
    title: "تور VIP — مسیرهای ویژه",
    level: "خیلی بالا",
    price: 3500000,
    duration: "یک‌روز کامل",
    image: "/img/tour4.jpg",
    description:
      "تور VIP با مسیرهای خاص، مربیان اختصاصی، تجهیزات ویژه و تجربه‌ای کاملاً متفاوت.",
  },
];

export default function TourDetailsPage() {
  const params = useParams();
  const id = Number(params.id);

  const tour = TOURS.find((t) => t.id === id);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-bold">
        تور مورد نظر یافت نشد.
      </div>
    );
  }

  const handleBooking = async () => {
    await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "کاربر مهمان",
        phone: "بدون شماره",
        tourId: tour.id,
        people: 1,
      }),
    });

    window.location.href = "/signup";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 pt-24 px-6">
      <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-xl border border-slate-200 shadow-2xl rounded-3xl overflow-hidden">

        {/* تصویر تور */}
        <div className="relative h-64">
          <img
            src={tour.image}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
            سطح: {tour.level}
          </div>
        </div>

        {/* اطلاعات تور */}
        <div className="p-8 flex flex-col gap-6">

          <h1 className="text-3xl font-bold text-slate-900">{tour.title}</h1>

          <p className="text-slate-700 leading-relaxed text-sm md:text-base">
            {tour.description}
          </p>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white/60 backdrop-blur-xl border border-slate-200 rounded-2xl p-4 shadow-md">
              <span className="text-xs text-slate-500">قیمت</span>
              <p className="text-lg font-bold text-blue-600">
                {tour.price.toLocaleString()} تومان
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-xl border border-slate-200 rounded-2xl p-4 shadow-md">
              <span className="text-xs text-slate-500">مدت تور</span>
              <p className="text-lg font-bold text-slate-900">{tour.duration}</p>
            </div>

            <div className="bg-white/60 backdrop-blur-xl border border-slate-200 rounded-2xl p-4 shadow-md">
              <span className="text-xs text-slate-500">سطح هیجان</span>
              <p className="text-lg font-bold text-red-500">{tour.level}</p>
            </div>

          </div>

          <button
            onClick={handleBooking}
            className="mt-4 w-full px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all font-semibold shadow-md"
          >
            رزرو این تور
          </button>

        </div>
      </div>
    </div>
  );
}
