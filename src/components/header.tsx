import { useState } from "react";
import { Link } from "react-router-dom";
import { Sun, Phone, ArrowRight, Menu, X, Languages } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/about" },
    // { label: t("services"), href: "/services" },
    { label: t("scheme"), href: "/pm-surya-ghar" },
    { label: t("projects"), href: "/projects" },
    { label: t("howItWorks"), href: "/how-it-works" },
    { label: t("products"), href: "/solar-products" },
    { label: t("contact"), href: "/contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hi" : "en");
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-5 px-5 py-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-yellow-300">
            <Sun size={34} />
          </span>
          <span>
            <span className="block text-3xl font-extrabold leading-none text-blue-950">
              Solar<span className="text-green-600">Pro</span>
            </span>
            <span className="mt-1 block text-xs text-slate-500">
              Clean Energy. Bright Future.
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-[17px] font-medium text-slate-700 transition hover:text-green-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+917055889083"
            className="flex items-center gap-2 font-semibold text-blue-950"
          >
            <Phone size={21} />
            <span>
              <span className="block">+91</span>
              <span>7055889083</span>
            </span>
          </a>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-3 font-semibold text-blue-950 hover:bg-slate-50"
            aria-label="Change website language"
          >
            <Languages size={18} />
            {language === "en" ? "हिंदी" : "English"}
          </button>

          <Link
            to="/contact"
            className="flex items-center gap-3 rounded-full bg-green-600 px-7 py-5 text-lg font-semibold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700"
          >
            {t("quote")}
            <ArrowRight size={21} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-blue-950 lg:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-medium text-slate-700 hover:text-green-600"
              >
                {item.label}
              </Link>
            ))}

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 py-2 text-left font-semibold text-blue-950"
            >
              <Languages size={18} />
              {language === "en" ? "हिंदी में देखें" : "View in English"}
            </button>

            <a href="tel:+917055889083" className="font-semibold text-blue-950">
              +91 7055889083
            </a>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-green-600 px-6 py-3 text-center font-semibold text-white"
            >
              {t("quote")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
