import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sun,
  Zap,
  BatteryCharging,
  PanelsTopLeft,
  Cable,
  Settings,
  ShieldCheck,
  Filter,
  Home,
  Building2,
  Wrench,
} from "lucide-react";

import SEO from "../../components/SEO";
import { useLanguage } from "../../context/LanguageContext.tsx";

type Category = "all" | "panels" | "inverters" | "batteries" | "accessories";

interface Product {
  id: number;
  name: string;
  category: Exclude<Category, "all">;
  image: string;
  description: {
    en: string;
    hi: string;
  };
  features: {
    en: string[];
    hi: string[];
  };
  icon: typeof Sun;
}

export default function SolarProducts() {
  const { language } = useLanguage();
  const hindi = language === "hi";

  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const title = hindi
    ? "सोलर पैनल, इन्वर्टर और उपकरण | SolarPro"
    : "Solar Panels, Inverters & Equipment | SolarPro";

  const description = hindi
    ? "सोलर पैनल, इन्वर्टर, बैटरी, माउंटिंग स्ट्रक्चर और अन्य रूफटॉप सोलर उपकरणों के बारे में जानें।"
    : "Explore solar panels, inverters, batteries, mounting structures and essential rooftop solar equipment for residential and commercial systems.";

  const products: Product[] = [
    {
      id: 1,
      name: hindi
        ? "मोनोक्रिस्टलाइन सोलर पैनल"
        : "Monocrystalline Solar Panels",
      category: "panels",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=85&w=900&auto=format&fit=crop",
      description: {
        en: "Solar modules designed to convert sunlight into electricity for rooftop solar systems.",
        hi: "रूफटॉप सोलर सिस्टम के लिए सूर्य की रोशनी को बिजली में बदलने वाले सोलर मॉड्यूल।",
      },
      features: {
        en: [
          "Residential and commercial use",
          "Multiple capacity options",
          "Designed for outdoor installation",
        ],
        hi: [
          "घरेलू और व्यावसायिक उपयोग",
          "अलग-अलग क्षमता के विकल्प",
          "बाहरी इंस्टॉलेशन के लिए डिजाइन",
        ],
      },
      icon: PanelsTopLeft,
    },
    {
      id: 2,
      name: hindi ? "सोलर इन्वर्टर" : "Solar Inverters",
      category: "inverters",
      image:
        "https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=85&w=900&auto=format&fit=crop",
      description: {
        en: "Inverters convert the DC electricity produced by solar panels into usable AC electricity.",
        hi: "इन्वर्टर सोलर पैनलों से मिलने वाली DC बिजली को उपयोगी AC बिजली में बदलता है।",
      },
      features: {
        en: [
          "Grid-connected options",
          "Hybrid inverter options",
          "System monitoring support varies by model",
        ],
        hi: [
          "ग्रिड-कनेक्टेड विकल्प",
          "हाइब्रिड इन्वर्टर विकल्प",
          "मॉडल के अनुसार सिस्टम मॉनिटरिंग",
        ],
      },
      icon: Zap,
    },
    {
      id: 3,
      name: hindi ? "सोलर बैटरी" : "Solar Batteries",
      category: "batteries",
      image:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=85&w=900&auto=format&fit=crop",
      description: {
        en: "Battery storage options for compatible solar systems that require stored energy.",
        hi: "उन सोलर सिस्टम के लिए बैटरी स्टोरेज विकल्प जिन्हें बिजली स्टोर करने की जरूरत होती है।",
      },
      features: {
        en: [
          "Energy storage options",
          "Different storage capacities",
          "Compatibility depends on inverter",
        ],
        hi: [
          "ऊर्जा स्टोरेज के विकल्प",
          "अलग-अलग स्टोरेज क्षमता",
          "इन्वर्टर के अनुसार अनुकूलता",
        ],
      },
      icon: BatteryCharging,
    },
    {
      id: 4,
      name: hindi ? "माउंटिंग स्ट्रक्चर" : "Mounting Structures",
      category: "accessories",
      image:
        "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=85&w=900&auto=format&fit=crop",
      description: {
        en: "Structures and mounting components used to secure solar panels on suitable rooftops.",
        hi: "उपयुक्त छतों पर सोलर पैनलों को सुरक्षित तरीके से लगाने के लिए स्ट्रक्चर और माउंटिंग उपकरण।",
      },
      features: {
        en: [
          "Rooftop-specific design",
          "Suitable mounting materials",
          "Installation requirements vary by site",
        ],
        hi: [
          "छत के अनुसार डिजाइन",
          "उपयुक्त माउंटिंग सामग्री",
          "साइट के अनुसार इंस्टॉलेशन की जरूरतें",
        ],
      },
      icon: Settings,
    },
    {
      id: 5,
      name: hindi ? "सोलर केबल और कनेक्टर" : "Solar Cables & Connectors",
      category: "accessories",
      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=85&w=900&auto=format&fit=crop",
      description: {
        en: "Electrical cables and connectors used for solar system connections.",
        hi: "सोलर सिस्टम के विद्युत कनेक्शन के लिए उपयोग होने वाली केबल और कनेक्टर।",
      },
      features: {
        en: [
          "Solar-compatible components",
          "Correct sizing is important",
          "Professional installation recommended",
        ],
        hi: [
          "सोलर के अनुकूल उपकरण",
          "सही साइज चुनना जरूरी",
          "प्रोफेशनल इंस्टॉलेशन की सलाह",
        ],
      },
      icon: Cable,
    },
    {
      id: 6,
      name: hindi ? "सोलर प्रोटेक्शन उपकरण" : "Solar Protection Equipment",
      category: "accessories",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=85&w=900&auto=format&fit=crop",
      description: {
        en: "Electrical protection and isolation components selected according to system design.",
        hi: "सिस्टम डिजाइन के अनुसार चुने जाने वाले विद्युत सुरक्षा और आइसोलेशन उपकरण।",
      },
      features: {
        en: [
          "Protection components",
          "System-specific selection",
          "Professional electrical installation",
        ],
        hi: [
          "सुरक्षा उपकरण",
          "सिस्टम के अनुसार चयन",
          "प्रोफेशनल इलेक्ट्रिकल इंस्टॉलेशन",
        ],
      },
      icon: ShieldCheck,
    },
  ];

  const categories: {
    id: Category;
    label: string;
  }[] = [
    { id: "all", label: hindi ? "सभी उपकरण" : "All Products" },
    { id: "panels", label: hindi ? "सोलर पैनल" : "Solar Panels" },
    { id: "inverters", label: hindi ? "इन्वर्टर" : "Inverters" },
    { id: "batteries", label: hindi ? "बैटरी" : "Batteries" },
    { id: "accessories", label: hindi ? "एक्सेसरीज" : "Accessories" },
  ];

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return products;

    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory, hindi]);

  return (
    <>
      <SEO
        title={title}
        description={description}
        path="/solar-products"
        keywords={
          hindi
            ? [
                "सोलर पैनल",
                "सोलर इन्वर्टर",
                "सोलर बैटरी",
                "सोलर उपकरण",
                "रूफटॉप सोलर सिस्टम",
              ]
            : [
                "solar panels",
                "solar inverters",
                "solar batteries",
                "solar mounting structures",
                "rooftop solar equipment",
              ]
        }
      />

      <main className="overflow-hidden bg-white text-slate-800">
        {/* HERO */}
        <section className="relative bg-slate-50">
          <div className="absolute -right-20 -top-24 h-96 w-96 rounded-full bg-green-100/70 blur-3xl" />

          <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
            <div>
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-green-200 bg-green-50 px-5 py-3 font-semibold text-green-700">
                <Sun size={19} />
                {hindi ? "सोलर उत्पाद और उपकरण" : "SOLAR PRODUCTS & EQUIPMENT"}
              </div>

              <h1 className="text-5xl font-extrabold leading-[1.12] tracking-tight text-blue-950 sm:text-6xl lg:text-[68px]">
                {hindi ? (
                  <>
                    सही उपकरण
                    <br />
                    बेहतर <span className="text-green-600">सोलर सिस्टम</span>
                  </>
                ) : (
                  <>
                    Quality Components,
                    <br />
                    Better <span className="text-green-600">Solar Systems</span>
                  </>
                )}
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
                {hindi
                  ? "सोलर पैनल से लेकर इन्वर्टर और अन्य जरूरी उपकरणों तक, अपने रूफटॉप सोलर सिस्टम के लिए सही कंपोनेंट्स समझें।"
                  : "From solar panels and inverters to essential accessories, explore the components that make up a rooftop solar system."}
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 font-bold text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-1 hover:bg-green-700"
                >
                  {hindi ? "उत्पाद की जानकारी लें" : "Enquire About Products"}
                  <ArrowRight size={20} />
                </Link>

                <Link
                  to="/residential-solar"
                  className="inline-flex items-center gap-3 rounded-full border border-blue-950/20 bg-white px-8 py-4 font-bold text-blue-950 transition hover:bg-slate-100"
                >
                  {hindi ? "सोलर समाधान देखें" : "Explore Solar Solutions"}
                  <ArrowUpRight size={19} />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[32px] shadow-2xl shadow-blue-950/10">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=85&w=1200&auto=format&fit=crop"
                  alt={
                    hindi
                      ? "सोलर पैनल और ऊर्जा उपकरण"
                      : "Solar panels and energy equipment"
                  }
                  className="h-[420px] w-full object-cover sm:h-[510px]"
                  fetchPriority="high"
                />
              </div>

              <div className="absolute -bottom-7 left-5 right-5 rounded-2xl border border-slate-100 bg-white p-6 shadow-xl sm:left-10 sm:right-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                    <Zap size={29} />
                  </div>
                  <div>
                    <p className="font-bold text-blue-950">
                      {hindi
                        ? "एक संपूर्ण सोलर सिस्टम"
                        : "A Complete Solar System"}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      {hindi
                        ? "सही कंपोनेंट्स का सही संयोजन"
                        : "The right combination of components"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT CATEGORIES */}
        <section className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="font-bold tracking-widest text-green-600">
                {hindi ? "हमारे उत्पाद" : "OUR PRODUCTS"}
              </p>

              <h2 className="mt-4 text-4xl font-extrabold text-blue-950 sm:text-5xl">
                {hindi
                  ? "सोलर सिस्टम के मुख्य उपकरण"
                  : "Explore Solar Components"}
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-slate-600">
                {hindi
                  ? "सोलर सिस्टम के अलग-अलग कंपोनेंट्स और उनके उपयोग के बारे में जानें।"
                  : "Understand the different components of a solar system and what each one does."}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Filter size={19} className="mr-1 text-slate-400" />

              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-full px-5 py-3 text-sm font-bold transition ${
                    activeCategory === category.id
                      ? "bg-green-600 text-white shadow-lg shadow-green-600/20"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-green-500 hover:text-green-700"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => {
              const Icon = product.icon;

              return (
                <article
                  key={product.id}
                  className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                    <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-green-600 shadow-md">
                      <Icon size={25} />
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="text-xl font-extrabold text-blue-950">
                      {product.name}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {product.description[hindi ? "hi" : "en"]}
                    </p>

                    <div className="mt-6 space-y-3">
                      {product.features[hindi ? "hi" : "en"].map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <CheckCircle2
                            size={18}
                            className="mt-0.5 shrink-0 text-green-600"
                          />
                          <span className="text-sm text-slate-600">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="mt-7 inline-flex items-center gap-2 border-t border-slate-100 pt-5 font-bold text-green-700 transition hover:gap-4"
                    >
                      {hindi ? "पूछताछ करें" : "Make an Enquiry"}
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* SYSTEM COMPONENTS */}
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <p className="font-bold tracking-widest text-green-600">
                {hindi ? "सिस्टम को समझें" : "UNDERSTANDING THE SYSTEM"}
              </p>

              <h2 className="mt-4 text-4xl font-extrabold text-blue-950 sm:text-5xl">
                {hindi
                  ? "सोलर सिस्टम कैसे काम करता है?"
                  : "How Solar Components Work Together"}
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                {hindi
                  ? "सोलर सिस्टम के कंपोनेंट्स मिलकर सूर्य की रोशनी को उपयोगी बिजली में बदलते हैं।"
                  : "Solar components work together to convert sunlight into usable electricity."}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: PanelsTopLeft,
                  title: hindi ? "सोलर पैनल" : "Solar Panels",
                  description: hindi
                    ? "सूर्य की रोशनी से DC बिजली उत्पन्न करते हैं।"
                    : "Generate DC electricity from sunlight.",
                },
                {
                  icon: Zap,
                  title: hindi ? "इन्वर्टर" : "Inverter",
                  description: hindi
                    ? "DC बिजली को उपयोगी AC बिजली में बदलता है।"
                    : "Converts DC electricity into usable AC electricity.",
                },
                {
                  icon: BatteryCharging,
                  title: hindi ? "बैटरी (वैकल्पिक)" : "Battery (Optional)",
                  description: hindi
                    ? "अनुकूल सिस्टम में अतिरिक्त ऊर्जा स्टोर करती है।"
                    : "Stores energy in compatible systems when storage is required.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-sm"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                      <Icon size={31} />
                    </div>

                    <h3 className="mt-6 text-xl font-extrabold text-blue-950">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* PRODUCT SELECTION */}
        <section className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[30px] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=85&w=1200&auto=format&fit=crop"
                alt={
                  hindi ? "सोलर पैनल इंस्टॉलेशन" : "Solar panel installation"
                }
                className="h-[430px] w-full object-cover"
                loading="lazy"
              />
            </div>

            <div>
              <p className="font-bold tracking-widest text-green-600">
                {hindi ? "सही उत्पाद चुनें" : "CHOOSING THE RIGHT PRODUCTS"}
              </p>

              <h2 className="mt-4 text-4xl font-extrabold leading-tight text-blue-950 sm:text-5xl">
                {hindi
                  ? "हर सिस्टम के लिए सही कंपोनेंट्स जरूरी हैं"
                  : "The Right Components Matter"}
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                {hindi
                  ? "उपकरण चुनते समय सिस्टम की क्षमता, छत की स्थिति, बिजली की खपत, बजट और भविष्य की जरूरतों को ध्यान में रखना चाहिए।"
                  : "Product selection should consider system capacity, rooftop conditions, electricity consumption, budget and future requirements."}
              </p>

              <div className="mt-8 space-y-4">
                {[
                  hindi
                    ? "सिस्टम क्षमता और बिजली की जरूरत"
                    : "System capacity and energy requirements",
                  hindi
                    ? "उपकरणों की तकनीकी अनुकूलता"
                    : "Technical compatibility between components",
                  hindi
                    ? "वारंटी और निर्माता की शर्तें"
                    : "Warranty and manufacturer terms",
                  hindi
                    ? "साइट के अनुसार इंस्टॉलेशन आवश्यकताएं"
                    : "Installation requirements for your site",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={21}
                      className="shrink-0 text-green-600"
                    />
                    <span className="font-semibold text-blue-950">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-green-600 px-7 py-4 font-bold text-white transition hover:bg-green-700"
              >
                {hindi ? "उत्पाद सलाह लें" : "Get Product Guidance"}
                <ArrowRight size={19} />
              </Link>
            </div>
          </div>
        </section>

        {/* RESIDENTIAL / COMMERCIAL */}
        <section className="bg-blue-950 py-20 text-white">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="font-bold tracking-widest text-green-400">
                {hindi ? "आपके लिए समाधान" : "SOLUTIONS FOR YOU"}
              </p>

              <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">
                {hindi
                  ? "आपकी जरूरत के अनुसार सोलर"
                  : "Solar for Your Requirements"}
              </h2>
            </div>

            <div className="grid gap-7 md:grid-cols-2">
              <article className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
                <Home size={35} className="text-green-400" />

                <h3 className="mt-6 text-2xl font-extrabold">
                  {hindi ? "घरेलू सोलर सिस्टम" : "Residential Solar Systems"}
                </h3>

                <p className="mt-4 leading-7 text-blue-100">
                  {hindi
                    ? "घर की छत और बिजली की खपत के अनुसार उपयुक्त सोलर उपकरण चुनें।"
                    : "Choose solar components according to your home's rooftop and electricity usage."}
                </p>

                <Link
                  to="/residential-solar"
                  className="mt-7 inline-flex items-center gap-3 font-bold text-green-400 transition hover:gap-5"
                >
                  {hindi ? "अधिक जानें" : "Learn More"}
                  <ArrowRight size={19} />
                </Link>
              </article>

              <article className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
                <Building2 size={35} className="text-green-400" />

                <h3 className="mt-6 text-2xl font-extrabold">
                  {hindi
                    ? "व्यावसायिक सोलर सिस्टम"
                    : "Commercial Solar Systems"}
                </h3>

                <p className="mt-4 leading-7 text-blue-100">
                  {hindi
                    ? "दुकानों, कार्यालयों और व्यवसायों की ऊर्जा जरूरतों के लिए सिस्टम विकल्प समझें।"
                    : "Explore system options for the energy requirements of shops, offices and businesses."}
                </p>

                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center gap-3 font-bold text-green-400 transition hover:gap-5"
                >
                  {hindi ? "संपर्क करें" : "Contact Us"}
                  <ArrowRight size={19} />
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 py-20 lg:px-10">
          <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[35px] bg-slate-50 px-7 py-16 text-center sm:px-12">
            <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-green-100 blur-3xl" />

            <div className="relative">
              <Wrench size={42} className="mx-auto text-green-600" />

              <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold text-blue-950 sm:text-5xl">
                {hindi
                  ? "अपने सोलर सिस्टम के लिए सही उपकरण चुनें"
                  : "Let's Find the Right Components for Your Solar System"}
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
                {hindi
                  ? "अपनी जरूरतें बताएं और अपने घर या व्यवसाय के लिए उपयुक्त उपकरणों की जानकारी लें।"
                  : "Tell us what you need and get guidance on suitable components for your home or business."}
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 font-bold text-white transition hover:bg-green-700"
              >
                {hindi ? "पूछताछ करें" : "Make an Enquiry"}
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
