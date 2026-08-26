"use client";

import { useState } from "react";

const TOURS = [
  {
    id: 1,
    title: "تور رفتینگ زاینده‌رود — هیجان متوسط",
    level: "متوسط",
    price: 1200000,
    duration: "۴ ساعت",
    image: "/img/tour1.jpg",
  },
  {
    id: 2,
    title: "تور رفتینگ حرفه‌ای — موج‌های خروشان",
    level: "بالا",
    price: 1800000,
    duration: "یک‌روز کامل",
    image: "/img/tour2.jpg",
  },
  {
    id: 3,
    title: "تور رفتینگ + طبیعت‌گردی",
    level: "متوسط",
    price: 2100000,
    duration: "یک‌روز کامل",
    image: "/img/tour3.jpg",
  },
  {
    id: 4,
    title: "تور VIP — مسیرهای ویژه",
    level: "خیلی بالا",
    price: 3500000,
    duration: "یک‌روز کامل",
    image: "/img/tour4.jpg",
  },
];

export default function ToursPage() {
  const [levelFilter, setLevelFilter] = useState<string>("همه");
  const [priceFilter, setPriceFilter] = useState<number>(0);

  const filteredTours = TOURS.filter((tour) => {
    const levelMatch = levelFilter === "همه" || tour.level === levelFilter;
    const priceMatch = priceFilter === 0 || tour.price <= priceFilter;
    return levelMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 pt-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* عنوان صفحه */}
        <h1 className="text-4xl font-bold text-slate-900 mb-6">
          تورهای فعال Zrafting
        </h1>

        {/* فیلترها */}
        <div className="bg-white/70 backdrop-blur-xl border border-slate-200 shadow-xl rounded-3xl p-6 mb-10 flex flex-col md:flex-row gap-6">

          {/* فیلتر سطح هیجان */}
          <div className="flex-1">
            <label className="text-sm font-semibold text-slate-700 mb-2 block">
              سطح هیجان
            </label>
            <select
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
              onChange={(e) => setLevelFilter(e.target.value)}
            >
              <option>همه</option>
              <option>متوسط</option>
              <option>بالا</option>
              <option>خیلی بالا</option>
            </select>
          </div>

          {/* فیلتر قیمت */}
          <div className="flex-1">
            <label className="text-sm font-semibold text-slate-700 mb-2 block">
              سقف قیمت (تومان)
            </label>
            <select
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
              onChange={(e) => setPriceFilter(Number(e.target.value))}
            >
              <option value={0}>بدون محدودیت</option>
              <option value={1500000}>تا 1,500,000</option>
              <option value={2000000}>تا 2,000,000</option>
              <option value={3000000}>تا 3,000,000</option>
            </select>
          </div>
        </div>

        {/* کارت‌های تور */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredTours.map((tour, i: number) => (
            <div
              key={tour.id}
              className="group bg-white/70 backdrop-blur-xl border border-slate-200 shadow-xl rounded-3xl overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all"
            >
              <div className="relative h-40">
                <img
                  src={tour.image}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-all"
                />
                <div className="absolute top-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                  سطح: {tour.level}
                </div>
              </div>

              <div className="p-5 flex flex-col gap-3">
                <h3 className="text-lg font-bold text-slate-900">{tour.title}</h3>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-600 font-semibold">
                    {tour.price.toLocaleString()} تومان
                  </span>
                  <span className="text-xs text-slate-600">{tour.duration}</span>
                </div>

                <button className="mt-3 w-full px-4 py-2.5 rounded-xl bg-blue-600 text-white text-xs hover:bg-blue-700 transition-all">
                  رزرو این تور
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
