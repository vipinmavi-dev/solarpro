import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sun,
  Menu,
  X,
  Phone,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  House,
  HandCoins,
  Settings,
  Headset,
  Leaf,
  Calculator,
  MapPin,
  //   Zap,
  ShieldCheck,
  //   ChevronDown,
} from "lucide-react";

const WHATSAPP_NUMBER = "+91 7055889083"; // Replace with vendor's number

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "PM Surya Ghar", href: "/pm-surya-ghar" },
  { label: "Our Projects", href: "/projects" },
  { label: "Solar Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?w=700&q=85",
    title: "Residential Solar Installation",
    location: "Meerut, Uttar Pradesh",
    capacity: "3 kW System",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=700&q=85",
    title: "Rooftop Solar Project",
    location: "Ghaziabad, Uttar Pradesh",
    capacity: "5 kW System",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=700&q=85",
    title: "Modern Home Solar",
    location: "Noida, Uttar Pradesh",
    capacity: "4 kW System",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <span className="text-sm font-bold uppercase tracking-widest text-green-600">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 leading-7 text-slate-500">{description}</p>
    </div>
  );
}

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [monthlyBill, setMonthlyBill] = useState("2000");
  const [city, setCity] = useState("Meerut");
  const [estimatedSavings, setEstimatedSavings] = useState<number | null>(null);

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello, I am interested in rooftop solar installation under PM Surya Ghar Yojana. Please share more details."
  )}`;

  const calculateSavings = () => {
    const bill = Number(monthlyBill);

    if (!bill || bill <= 0) {
      setEstimatedSavings(null);
      return;
    }

    // Illustrative estimate only; actual savings depend on
    // system size, consumption, tariff and solar generation.
    setEstimatedSavings(Math.round(bill * 0.8));
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-700 text-yellow-300">
              <Sun size={30} />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold leading-none text-blue-950">
                Solar<span className="text-green-600">Pro</span>
              </h1>
              <p className="mt-1 text-[10px] font-medium text-slate-500">
                Clean Energy. Bright Future.
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-semibold text-slate-700 transition hover:text-green-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href="tel:+917055889083"
              className="flex items-center gap-2 font-bold text-blue-950"
            >
              <Phone size={18} />
              +91 7055889083
            </a>
            <Link
              to="/contact"
              className="rounded-full bg-green-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700"
            >
              Get Free Quote <ArrowRight className="ml-1 inline" size={16} />
            </Link>
          </div>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="rounded-lg p-2 text-blue-950 lg:hidden"
            aria-label="Toggle navigation"
          >
            {mobileMenu ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {mobileMenu && (
          <nav className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileMenu(false)}
                className="block border-b border-slate-100 py-3 font-semibold text-slate-700"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenu(false)}
              className="mt-4 block rounded-xl bg-green-600 p-3 text-center font-bold text-white"
            >
              Get Free Quote
            </Link>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="relative min-h-[650px] bg-blue-50">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=2000&q=90"
            alt="Solar panels installed on a rooftop"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/10" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-bold text-green-700">
              <Sun size={16} /> Powering a Greener India
            </span>

            <h1 className="mt-7 text-5xl font-extrabold leading-[1.12] tracking-tight text-blue-950 sm:text-6xl">
              Power Your Home
              <br />
              with Solar <span className="text-green-600">Energy</span>
            </h1>

            <p className="mt-6 max-w-lg text-xl leading-8 text-slate-600">
              Save on electricity bills and contribute to a cleaner, greener
              future with reliable rooftop solar solutions.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Reduce your electricity bills",
                "Clean and renewable energy",
                "Government subsidy for eligible homes",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="shrink-0 text-green-600" size={21} />
                  <span className="font-semibold text-blue-950">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-green-600 px-7 py-4 font-bold text-white shadow-xl shadow-green-600/20 transition hover:-translate-y-1 hover:bg-green-700"
              >
                Get Free Site Survey{" "}
                <ArrowRight className="ml-2 inline" size={18} />
              </Link>

              <Link
                to="/about"
                className="rounded-full border-2 border-blue-800 px-7 py-4 font-bold text-blue-900 transition hover:bg-blue-900 hover:text-white"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Scheme Card */}
          <div className="mx-auto w-full max-w-lg rounded-3xl border border-white/80 bg-white/95 p-5 shadow-2xl backdrop-blur sm:p-7">
            <div className="flex items-center justify-between gap-3">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-green-600">
                  Government Scheme
                </span>
                <h2 className="mt-2 text-3xl font-extrabold leading-tight text-blue-950">
                  PM Surya Ghar
                  <br />
                  Muft Bijli Yojana
                </h2>
              </div>

              <img
                src="/images/pm-narendra-modi.png"
                alt="Prime Minister Narendra Modi"
                className="h-32 w-28 rounded-2xl object-cover object-top sm:h-40 sm:w-32"
              />
            </div>

            <div className="mt-5 rounded-2xl bg-blue-950 p-5 text-white">
              <p className="text-sm font-semibold text-blue-200">
                UP CENTRAL + STATE SUBSIDY
              </p>
              <h3 className="mt-1 text-4xl font-extrabold text-green-400 sm:text-5xl">
                ₹1,08,000*
              </h3>
              <p className="mt-2 text-sm text-blue-100">
                Potential combined assistance for eligible residential
                households in Uttar Pradesh.
              </p>
            </div>

            <div className="mt-5 space-y-3">
              {[
                "Central subsidy up to ₹78,000",
                "UP state assistance up to ₹30,000",
                "Apply through the official portal",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                >
                  <CheckCircle2 size={19} className="shrink-0 text-green-600" />
                  {item}
                </div>
              ))}
            </div>

            <a
              href="https://pmsuryaghar.gov.in/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-4 font-bold text-white transition hover:bg-blue-800"
            >
              Know More About Scheme <ArrowRight size={18} />
            </a>

            <p className="mt-3 text-xs leading-5 text-slate-400">
              *Subject to eligibility, scheme guidelines and availability of
              state assistance. Verify current benefits before applying.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Strip */}
      <section className="relative z-10 mx-auto -mt-7 max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-2 gap-5 rounded-2xl border border-slate-100 bg-white p-6 shadow-xl md:grid-cols-5">
          {[
            { icon: House, title: "Residential", sub: "Solar Solutions" },
            { icon: HandCoins, title: "Attractive", sub: "Subsidy Benefits" },
            { icon: Settings, title: "Professional", sub: "Installation" },
            { icon: Headset, title: "Lifetime", sub: "Support" },
            { icon: Leaf, title: "A Greener", sub: "Tomorrow" },
          ].map(({ icon: Icon, title, sub }) => (
            <div key={title} className="flex items-center gap-3">
              <Icon className="shrink-0 text-green-600" size={34} />
              <div>
                <p className="font-bold text-blue-950">{title}</p>
                <p className="text-sm text-slate-500">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Savings Calculator */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8">
        <div className="rounded-3xl bg-blue-950 p-7 text-white shadow-xl sm:p-10">
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-white/10 p-3">
              <Calculator size={35} className="text-yellow-400" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl">
                Solar Savings Calculator
              </h2>
              <p className="mt-1 text-sm text-blue-200">
                Discover your potential savings
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="bill"
                className="mb-2 block text-sm font-semibold"
              >
                Monthly Electricity Bill (₹)
              </label>
              <input
                id="bill"
                type="number"
                min="1"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(e.target.value)}
                placeholder="e.g. 2000"
                className="w-full rounded-xl border border-white/20 bg-white px-4 py-4 font-semibold text-slate-900 outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="mb-2 block text-sm font-semibold"
              >
                Your City
              </label>
              <select
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full rounded-xl border border-white/20 bg-white px-4 py-4 font-semibold text-slate-900 outline-none"
              >
                <option>Meerut</option>
                <option>Ghaziabad</option>
                <option>Noida</option>
                <option>Agra</option>
                <option>Delhi</option>
                <option>Other</option>
              </select>
            </div>

            <button
              onClick={calculateSavings}
              className="w-full rounded-xl bg-green-500 px-6 py-4 font-bold text-white transition hover:bg-green-600"
            >
              Calculate My Savings{" "}
              <ArrowRight className="ml-2 inline" size={18} />
            </button>

            {estimatedSavings !== null && (
              <div className="rounded-xl border border-green-400/30 bg-green-400/10 p-5">
                <p className="text-sm text-blue-200">
                  Illustrative monthly savings estimate for {city}
                </p>
                <p className="mt-1 text-3xl font-extrabold text-green-400">
                  ₹{estimatedSavings.toLocaleString("en-IN")}
                </p>
                <p className="mt-2 text-xs text-blue-200">
                  This is a rough illustration, not a system-specific savings
                  quotation. Actual savings depend on your roof, system size,
                  tariff and consumption.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-sm font-bold uppercase tracking-widest text-green-600">
            Make the Switch
          </span>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight text-blue-950">
            Your Roof Can Do More Than You Think.
          </h2>
          <p className="mt-5 leading-8 text-slate-500">
            Generate your own clean electricity, reduce dependence on
            conventional power and make better use of your rooftop space.
          </p>

          <div className="mt-8 space-y-5">
            {[
              [
                "Lower Electricity Bills",
                "Generate power right from your rooftop.",
              ],
              [
                "Professional Installation",
                "Get support from site survey to commissioning.",
              ],
              [
                "Long-Term Support",
                "Get assistance with maintenance and service.",
              ],
            ].map(([title, description]) => (
              <div key={title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <ShieldCheck size={23} />
                </div>
                <div>
                  <h3 className="font-bold text-blue-950">{title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/services"
            className="mt-9 inline-flex w-fit items-center gap-2 font-bold text-green-700 hover:text-green-800"
          >
            Explore Our Services <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-slate-50 px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Work"
            title="Solar Projects"
            description="Explore examples of rooftop solar installations and clean-energy solutions."
          />

          <div className="grid gap-7 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm font-bold text-green-600">
                    {project.capacity}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-blue-950">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                    <MapPin size={16} /> {project.location}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full border-2 border-blue-800 px-7 py-3 font-bold text-blue-900 hover:bg-blue-900 hover:text-white"
            >
              View All Projects <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 rounded-3xl bg-blue-950 p-8 text-white sm:p-12 md:flex-row">
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Switch to Solar and Save Big!
            </h2>
            <p className="mt-3 text-blue-200">
              Take the first step towards a brighter, greener future.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 rounded-full bg-yellow-400 px-8 py-4 font-extrabold text-blue-950 hover:bg-yellow-300"
          >
            Get a Free Quote <ArrowRight className="ml-2 inline" size={18} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-5 py-14 text-slate-400 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-extrabold text-white">
              Solar<span className="text-green-400">Pro</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-7">
              Reliable rooftop solar solutions for homes and businesses. Let's
              build a cleaner future together.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white">Quick Links</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="hover:text-green-400"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white">Contact Us</h3>
            <a
              href="tel:+917055889083"
              className="mt-4 flex items-center gap-3 text-sm hover:text-white"
            >
              <Phone size={17} /> +91 7055889083
            </a>
            <p className="mt-4 flex items-center gap-3 text-sm">
              <MapPin size={17} /> Meerut, Uttar Pradesh
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-bold text-white hover:bg-green-700"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-xs">
          © {new Date().getFullYear()} SolarPro. All rights reserved.
          <p className="mt-2">
            Scheme assistance is subject to official eligibility and approval.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-green-600 px-5 py-4 font-bold text-white shadow-2xl shadow-green-900/30 transition hover:scale-105 hover:bg-green-700"
      >
        <MessageCircle size={25} />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </a>
    </main>
  );
}
