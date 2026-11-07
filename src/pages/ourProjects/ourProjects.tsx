import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Zap,
  Sun,
  Home,
  Building2,
  Filter,
  CalendarDays,
} from "lucide-react";

import SEO from "../../components/SEO";
import { useLanguage } from "../../context/LanguageContext.tsx";

type ProjectCategory = "all" | "residential" | "commercial";

interface Project {
  id: number;
  name: string;
  location: string;
  capacity: string;
  category: Exclude<ProjectCategory, "all">;
  image: string;
  description: {
    en: string;
    hi: string;
  };
  type: {
    en: string;
    hi: string;
  };
}

export default function Projects() {
  const { language } = useLanguage();
  const hindi = language === "hi";

  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const title = hindi
    ? "सोलर प्रोजेक्ट्स और इंस्टॉलेशन | SolarPro"
    : "Our Solar Projects & Installations | SolarPro";

  const description = hindi
    ? "रेजिडेंशियल और कमर्शियल रूफटॉप सोलर प्रोजेक्ट्स के उदाहरण देखें। क्षमता, स्थान और सोलर इंस्टॉलेशन के बारे में जानें।"
    : "Explore illustrative residential and commercial rooftop solar project examples, including system capacity, location and installation details.";

  const projects: Project[] = [
    {
      id: 1,
      name: hindi ? "आवासीय रूफटॉप सोलर" : "Residential Rooftop Solar",
      location: hindi ? "मेरठ, उत्तर प्रदेश" : "Meerut, Uttar Pradesh",
      capacity: "3 kW",
      category: "residential",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=85&w=1000&auto=format&fit=crop",
      description: {
        en: "A sample rooftop solar setup designed for everyday household electricity requirements.",
        hi: "दैनिक घरेलू बिजली की जरूरतों को ध्यान में रखकर तैयार किया गया एक उदाहरणात्मक रूफटॉप सोलर सिस्टम।",
      },
      type: {
        en: "Residential",
        hi: "आवासीय",
      },
    },
    {
      id: 2,
      name: hindi ? "बिजनेस रूफटॉप सोलर" : "Business Rooftop Solar",
      location: hindi ? "गाजियाबाद, उत्तर प्रदेश" : "Ghaziabad, Uttar Pradesh",
      capacity: "5 kW",
      category: "commercial",
      image:
        "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=85&w=1000&auto=format&fit=crop",
      description: {
        en: "An illustrative rooftop solar solution for a small business looking to reduce grid electricity consumption.",
        hi: "ग्रिड बिजली की खपत कम करने की इच्छा रखने वाले छोटे व्यवसाय के लिए एक उदाहरणात्मक रूफटॉप सोलर समाधान।",
      },
      type: {
        en: "Commercial",
        hi: "व्यावसायिक",
      },
    },
    {
      id: 3,
      name: hindi ? "होम सोलर सिस्टम" : "Home Solar System",
      location: hindi ? "नोएडा, उत्तर प्रदेश" : "Noida, Uttar Pradesh",
      capacity: "4 kW",
      category: "residential",
      image:
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=85&w=1000&auto=format&fit=crop",
      description: {
        en: "A sample residential solar installation concept for a family home.",
        hi: "एक परिवार के घर के लिए उदाहरणात्मक आवासीय सोलर इंस्टॉलेशन कॉन्सेप्ट।",
      },
      type: {
        en: "Residential",
        hi: "आवासीय",
      },
    },
    {
      id: 4,
      name: hindi ? "कमर्शियल सोलर समाधान" : "Commercial Solar Solution",
      location: hindi ? "मेरठ, उत्तर प्रदेश" : "Meerut, Uttar Pradesh",
      capacity: "10 kW",
      category: "commercial",
      image:
        "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=85&w=1000&auto=format&fit=crop",
      description: {
        en: "An illustrative larger rooftop system concept for commercial electricity requirements.",
        hi: "व्यावसायिक बिजली की जरूरतों के लिए एक बड़े रूफटॉप सिस्टम का उदाहरणात्मक कॉन्सेप्ट।",
      },
      type: {
        en: "Commercial",
        hi: "व्यावसायिक",
      },
    },
    {
      id: 5,
      name: hindi ? "छत पर सोलर पैनल" : "Residential Solar Panels",
      location: hindi ? "बागपत, उत्तर प्रदेश" : "Baghpat, Uttar Pradesh",
      capacity: "2 kW",
      category: "residential",
      image:
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=85&w=1000&auto=format&fit=crop",
      description: {
        en: "A sample compact rooftop solar concept for a smaller household.",
        hi: "छोटे परिवार की जरूरतों के लिए एक कॉम्पैक्ट रूफटॉप सोलर सिस्टम का उदाहरण।",
      },
      type: {
        en: "Residential",
        hi: "आवासीय",
      },
    },
    {
      id: 6,
      name: hindi ? "व्यावसायिक रूफटॉप सिस्टम" : "Commercial Rooftop System",
      location: hindi
        ? "मुजफ्फरनगर, उत्तर प्रदेश"
        : "Muzaffarnagar, Uttar Pradesh",
      capacity: "8 kW",
      category: "commercial",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=85&w=1000&auto=format&fit=crop",
      description: {
        en: "An illustrative solar solution concept for a business premises with suitable rooftop space.",
        hi: "उपयुक्त छत वाली व्यावसायिक इमारत के लिए उदाहरणात्मक सोलर समाधान।",
      },
      type: {
        en: "Commercial",
        hi: "व्यावसायिक",
      },
    },
  ];

  const filters: {
    id: ProjectCategory;
    label: string;
  }[] = [
    {
      id: "all",
      label: hindi ? "सभी प्रोजेक्ट्स" : "All Projects",
    },
    {
      id: "residential",
      label: hindi ? "आवासीय" : "Residential",
    },
    {
      id: "commercial",
      label: hindi ? "व्यावसायिक" : "Commercial",
    },
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter, hindi]);

  return (
    <>
      <SEO
        title={title}
        description={description}
        path="/projects"
        keywords={
          hindi
            ? [
                "सोलर प्रोजेक्ट्स",
                "रूफटॉप सोलर इंस्टॉलेशन",
                "आवासीय सोलर",
                "कमर्शियल सोलर",
                "उत्तर प्रदेश सोलर",
              ]
            : [
                "solar projects",
                "rooftop solar installations",
                "residential solar projects",
                "commercial solar projects",
                "solar installations Uttar Pradesh",
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
                {hindi ? "हमारे सोलर प्रोजेक्ट्स" : "OUR SOLAR PROJECTS"}
              </div>

              <h1 className="text-5xl font-extrabold leading-[1.12] tracking-tight text-blue-950 sm:text-6xl lg:text-[68px]">
                {hindi ? (
                  <>
                    सोलर समाधान
                    <br />
                    जो <span className="text-green-600">काम आएं</span>
                  </>
                ) : (
                  <>
                    Solar Solutions
                    <br />
                    Built for <span className="text-green-600">Real Needs</span>
                  </>
                )}
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
                {hindi
                  ? "आवासीय और व्यावसायिक रूफटॉप सोलर सिस्टम के उदाहरण देखें। हर प्रोजेक्ट की जरूरत और क्षमता अलग हो सकती है।"
                  : "Explore examples of residential and commercial rooftop solar systems. Every project can have different requirements and system capacities."}
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 font-bold text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-1 hover:bg-green-700"
                >
                  {hindi ? "अपना प्रोजेक्ट शुरू करें" : "Discuss Your Project"}
                  <ArrowRight size={20} />
                </Link>

                <Link
                  to="/residential-solar"
                  className="inline-flex items-center gap-3 rounded-full border border-blue-950/20 bg-white px-8 py-4 font-bold text-blue-950 transition hover:bg-slate-100"
                >
                  {hindi ? "सोलर समाधान देखें" : "Explore Solutions"}
                  <ArrowUpRight size={19} />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[32px] shadow-2xl shadow-blue-950/10">
                <img
                  src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=85&w=1200&auto=format&fit=crop"
                  alt={
                    hindi
                      ? "बड़ी छत पर सोलर पैनल"
                      : "Solar panels installed on a rooftop"
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
                        ? "हर जरूरत के लिए सोलर"
                        : "Solar for Different Needs"}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      {hindi
                        ? "आवासीय और व्यावसायिक समाधान"
                        : "Residential and commercial solutions"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECT FILTER AND GRID */}
        <section className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="font-bold tracking-widest text-green-600">
                {hindi ? "प्रोजेक्ट गैलरी" : "PROJECT GALLERY"}
              </p>

              <h2 className="mt-4 text-4xl font-extrabold text-blue-950 sm:text-5xl">
                {hindi ? "हमारे सोलर समाधान" : "Explore Our Solar Solutions"}
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-slate-600">
                {hindi
                  ? "विभिन्न प्रकार की छतों और बिजली की जरूरतों के लिए सोलर सिस्टम के उदाहरण।"
                  : "Illustrative solar system examples for different rooftop types and electricity requirements."}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Filter size={19} className="mr-1 text-slate-400" />

              {filters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`rounded-full px-5 py-3 text-sm font-bold transition ${
                    activeFilter === filter.id
                      ? "bg-green-600 text-white shadow-lg shadow-green-600/20"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-green-500 hover:text-green-700"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.name} - ${project.capacity}`}
                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-green-700 shadow-sm">
                    {project.type[hindi ? "hi" : "en"]}
                  </div>

                  <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full bg-blue-950 px-4 py-2 text-sm font-bold text-white">
                    <Zap size={16} className="text-green-400" />
                    {project.capacity}
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-extrabold text-blue-950">
                    {project.name}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                    <MapPin size={17} className="text-green-600" />
                    {project.location}
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    {project.description[hindi ? "hi" : "en"]}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-sm font-bold text-slate-500">
                      {hindi ? "सिस्टम क्षमता" : "System Capacity"}
                    </span>

                    <span className="font-extrabold text-green-700">
                      {project.capacity}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-800">
            {hindi
              ? "नोट: इस डेमो गैलरी में दिए गए प्रोजेक्ट, स्थान और क्षमताएं उदाहरणात्मक हैं। इन्हें SolarPro के वास्तविक ग्राहक इंस्टॉलेशन या सत्यापित प्रोजेक्ट न समझें। वास्तविक प्रोजेक्ट प्रकाशित करने से पहले ग्राहक की अनुमति और सही विवरण जोड़ें।"
              : "Note: Projects, locations and capacities in this demo gallery are illustrative examples. They should not be interpreted as actual SolarPro customer installations or verified projects. Add verified project details and customer permission before publishing real installations."}
          </p>
        </section>

        {/* PROJECT TYPES */}
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <p className="font-bold tracking-widest text-green-600">
                {hindi ? "हमारे समाधान" : "OUR SOLUTIONS"}
              </p>

              <h2 className="mt-4 text-4xl font-extrabold text-blue-950 sm:text-5xl">
                {hindi
                  ? "अलग-अलग जरूरतों के लिए सिस्टम"
                  : "Solutions for Different Requirements"}
              </h2>
            </div>

            <div className="grid gap-7 md:grid-cols-2">
              <article className="rounded-3xl bg-white p-8 shadow-sm sm:p-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                  <Home size={31} />
                </div>

                <h3 className="mt-7 text-2xl font-extrabold text-blue-950">
                  {hindi ? "आवासीय सोलर" : "Residential Solar"}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {hindi
                    ? "घर की बिजली की जरूरतों को ध्यान में रखकर तैयार किए गए रूफटॉप सोलर समाधान।"
                    : "Rooftop solar solutions designed around household electricity requirements."}
                </p>

                <Link
                  to="/residential-solar"
                  className="mt-7 inline-flex items-center gap-3 font-bold text-green-700 transition hover:gap-5"
                >
                  {hindi ? "अधिक जानें" : "Learn More"}
                  <ArrowRight size={19} />
                </Link>
              </article>

              <article className="rounded-3xl bg-white p-8 shadow-sm sm:p-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                  <Building2 size={31} />
                </div>

                <h3 className="mt-7 text-2xl font-extrabold text-blue-950">
                  {hindi ? "कमर्शियल सोलर" : "Commercial Solar"}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {hindi
                    ? "दुकानों, कार्यालयों और अन्य व्यावसायिक परिसरों के लिए जरूरत के अनुसार सोलर सिस्टम।"
                    : "Solar systems designed for shops, offices and other commercial premises."}
                </p>

                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center gap-3 font-bold text-green-700 transition hover:gap-5"
                >
                  {hindi ? "अपनी जरूरत बताएं" : "Discuss Your Requirements"}
                  <ArrowRight size={19} />
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* WHY SOLAR */}
        <section className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="font-bold tracking-widest text-green-600">
                {hindi ? "सोलर के फायदे" : "WHY SOLAR"}
              </p>

              <h2 className="mt-4 text-4xl font-extrabold leading-tight text-blue-950 sm:text-5xl">
                {hindi
                  ? "अपने घर या व्यवसाय को सौर ऊर्जा से जोड़ें"
                  : "Power Your Home or Business with Solar"}
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                {hindi
                  ? "सही तरीके से डिजाइन किया गया सोलर सिस्टम ग्रिड बिजली पर निर्भरता कम करने और लंबे समय तक स्वच्छ ऊर्जा का उपयोग करने में मदद कर सकता है।"
                  : "A properly designed solar system can help reduce reliance on grid electricity and support long-term use of clean energy."}
              </p>

              <div className="mt-8 space-y-4">
                {[
                  hindi
                    ? "बिजली बिल में संभावित बचत"
                    : "Potential electricity bill savings",
                  hindi
                    ? "स्वच्छ और नवीकरणीय ऊर्जा"
                    : "Clean and renewable energy",
                  hindi
                    ? "अपनी बिजली खपत पर बेहतर नियंत्रण"
                    : "Better control over energy consumption",
                  hindi
                    ? "लंबे समय का ऊर्जा समाधान"
                    : "A long-term energy solution",
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
            </div>

            <div className="overflow-hidden rounded-[30px] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=85&w=1200&auto=format&fit=crop"
                alt={hindi ? "सोलर ऊर्जा सिस्टम" : "Solar energy system"}
                className="h-[430px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 pb-20 lg:px-10">
          <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[35px] bg-blue-950 px-7 py-16 text-center sm:px-12">
            <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-green-500/20 blur-3xl" />
            <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />

            <div className="relative">
              <Sun size={42} className="mx-auto text-green-400" />

              <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold text-white sm:text-5xl">
                {hindi
                  ? "क्या अगला सोलर प्रोजेक्ट आपका होगा?"
                  : "Could Your Home Be Our Next Solar Project?"}
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
                {hindi
                  ? "अपने घर या व्यवसाय के लिए सोलर विकल्पों पर चर्चा करने के लिए हमसे संपर्क करें।"
                  : "Get in touch to discuss solar options for your home or business."}
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-green-500 px-8 py-4 font-bold text-white transition hover:bg-green-600"
              >
                {hindi ? "संपर्क करें" : "Contact Us"}
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
