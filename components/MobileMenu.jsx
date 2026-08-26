// components/MobileMenu.jsx
export default function MobileMenu({ open, setOpen }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-[#0a1a2f] text-white p-6 transform transition-transform duration-300 z-50 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        className="text-2xl mb-6"
        onClick={() => setOpen(false)}
      >
        ✕
      </button>

      <nav className="flex flex-col gap-6 text-lg">
        <a href="/">خانه</a>
        <a href="/about">درباره ما</a>
        <a href="/tours">تورها</a>
        <a href="/gallery">گالری</a>
        <a href="/tickets">فروش بلیط</a>
        <a href="/contact">ارتباط با ما</a>
      </nav>
    </div>
  );
}
