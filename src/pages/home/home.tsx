import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  CheckCircle2,
  Sun,
  Zap,
  ShieldCheck,
  Wallet,
  Leaf,
  Home as HomeIcon,
  Calculator,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

import SEO from "../../components/SEO";
import { useLanguage } from "../../context/LanguageContext.tsx";

const projects = [
  {
    image: "https://gayatrikenergy.com/images/solar-rooftop.webp",
    title: "Residential Rooftop Solar",
    location: "Meerut, Uttar Pradesh",
    capacity: "3 kW",
  },
  {
    image:
      "https://bluebirdsolar.com/cdn/shop/articles/solar-systm-instllation-cost_3969c58c-2836-4ffb-9423-bd0e485a55ff_1000x.jpg?v=1782107579",
    title: "Solar Panel Installation",
    location: "Ghaziabad, Uttar Pradesh",
    capacity: "5 kW",
  },
  {
    image:
      "https://rr-solar.ontimeweb.in/images/residential_solar_project_1.png",
    title: "Home Solar Energy System",
    location: "Noida, Uttar Pradesh",
    capacity: "4 kW",
  },
];

export default function Home() {
  const { language, t } = useLanguage();

  const [systemSize, setSystemSize] = useState(3);
  const [pmImageLoaded, setPmImageLoaded] = useState(true);

  const estimatedSavings = systemSize * 1200;
  const estimatedYearlySavings = estimatedSavings * 12;

  const hindi = language === "hi";

  // SEO metadata
  const seoTitle = hindi
    ? "उत्तर प्रदेश में सोलर पैनल इंस्टॉलेशन | SolarPro"
    : "Solar Panel Installation in Uttar Pradesh | SolarPro";

  const seoDescription = hindi
    ? "घर पर रूफटॉप सोलर पैनल लगवाएं। पीएम सूर्य घर योजना, सरकारी सब्सिडी, सोलर सिस्टम और बिजली बिल में बचत की जानकारी प्राप्त करें।"
    : "Explore residential rooftop solar installation, PM Surya Ghar Yojana subsidy information, solar savings and solar solutions in Uttar Pradesh with SolarPro.";

  const seoKeywords = hindi
    ? [
        "सोलर पैनल इंस्टॉलेशन",
        "पीएम सूर्य घर योजना",
        "रूफटॉप सोलर",
        "उत्तर प्रदेश सोलर सब्सिडी",
        "घरेलू सोलर सिस्टम",
        "मेरठ सोलर पैनल",
      ]
    : [
        "solar panel installation",
        "rooftop solar Uttar Pradesh",
        "PM Surya Ghar Yojana",
        "solar subsidy India",
        "residential solar system",
        "solar installation Meerut",
      ];

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: seoTitle,
    description: seoDescription,
    inLanguage: hindi ? "hi-IN" : "en-IN",
    isPartOf: {
      "@type": "WebSite",
      name: "SolarPro",
    },
  };

  return (
    <>
      {/* SEO */}
      <SEO
        title={seoTitle}
        description={seoDescription}
        path="/"
        keywords={seoKeywords}
      />

      <Helmet
        htmlAttributes={{
          lang: hindi ? "hi-IN" : "en-IN",
        }}
      >
        <script type="application/ld+json">{JSON.stringify(homeSchema)}</script>
      </Helmet>

      <main className="overflow-hidden bg-white text-slate-800">
        {/* HERO SECTION */}
        <section className="relative min-h-[680px] lg:min-h-[740px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=85&w=2000&auto=format&fit=crop')",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/65" />

          <div className="relative mx-auto grid max-w-[1500px] items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-10 lg:py-24">
            {/* HERO CONTENT */}
            <div className="max-w-3xl">
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-green-200 bg-green-50 px-5 py-3 font-semibold text-green-700">
                <Sun size={21} />
                {t("heroBadge")}
              </div>

              <h1 className="text-5xl font-extrabold leading-[1.12] tracking-tight text-blue-950 sm:text-6xl lg:text-[76px]">
                {hindi ? (
                  <>
                    सौर ऊर्जा से
                    <br />
                    अपने घर को
                    <span className="text-green-600"> रोशन करें</span>
                  </>
                ) : (
                  <>
                    Power Your Home
                    <br />
                    with Solar
                    <span className="text-green-600"> Energy</span>
                  </>
                )}
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
                {t("heroDescription")}
              </p>

              <div className="mt-8 space-y-4">
                {[t("benefit1"), t("benefit2"), t("benefit3")].map(
                  (benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-3 font-semibold text-blue-950"
                    >
                      <CheckCircle2
                        size={25}
                        className="shrink-0 text-green-600"
                      />
                      {benefit}
                    </div>
                  )
                )}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 font-bold text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-1 hover:bg-green-700"
                >
                  {t("quote")}
                  <ArrowRight size={20} />
                </Link>

                <Link
                  to="/pm-surya-ghar"
                  className="inline-flex items-center gap-3 rounded-full border border-blue-950/20 bg-white/80 px-8 py-4 font-bold text-blue-950 transition hover:bg-white"
                >
                  {hindi ? "योजना के बारे में जानें" : "Explore Scheme"}
                  <ArrowUpRight size={19} />
                </Link>
              </div>
            </div>

            {/* GOVERNMENT SCHEME CARD */}
            <div className="mx-auto w-full max-w-[620px] rounded-[30px] border border-white bg-white/95 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur-sm sm:p-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-bold tracking-wider text-green-600">
                    {t("governmentScheme")}
                  </p>

                  <h2 className="mt-4 text-3xl font-extrabold leading-tight text-blue-950 sm:text-4xl">
                    {t("schemeTitle")}
                  </h2>
                </div>

                {pmImageLoaded ? (
                  <img
                    src="/images/pm-narendra-modi.jpg"
                    alt="Prime Minister Narendra Modi"
                    onError={() => setPmImageLoaded(false)}
                    className="h-28 w-24 shrink-0 rounded-xl object-cover object-top"
                  />
                ) : (
                  <div className="flex h-28 w-24 shrink-0 flex-col items-center justify-center rounded-xl bg-slate-100 text-center text-xs text-slate-500">
                    <ShieldCheck size={25} />
                    <span className="mt-2">PM Surya Ghar</span>
                  </div>
                )}
              </div>

              <div className="mt-9 rounded-3xl bg-blue-950 p-6 sm:p-7">
                <p className="font-bold text-blue-200">{t("subsidyLabel")}</p>

                <p className="mt-1 text-5xl font-extrabold tracking-tight text-green-400 sm:text-6xl">
                  ₹1,08,000*
                </p>

                <p className="mt-3 text-sm leading-6 text-blue-100 sm:text-base">
                  {t("subsidyDescription")}
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 font-semibold text-slate-700">
                  <CheckCircle2 className="shrink-0 text-green-600" size={23} />
                  {t("centralSubsidy")}
                </div>

                <div className="flex items-center gap-3 font-semibold text-slate-700">
                  <CheckCircle2 className="shrink-0 text-green-600" size={23} />
                  {t("stateSubsidy")}
                </div>
              </div>

              <p className="mt-5 border-t border-slate-100 pt-4 text-xs leading-5 text-slate-500">
                *Subject to current government guidelines, eligibility, approved
                system capacity and applicable state assistance. Please verify
                before applying.
              </p>

              <Link
                to="/pm-surya-ghar"
                className="mt-5 inline-flex items-center gap-2 font-bold text-green-700 hover:text-green-800"
              >
                {hindi ? "पूरी योजना देखें" : "Know More About the Scheme"}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* SOLAR SAVINGS CALCULATOR */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto grid max-w-[1250px] items-center gap-14 px-5 lg:grid-cols-2 lg:px-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
                <Calculator size={17} />
                {hindi ? "सोलर कैलकुलेटर" : "SOLAR SAVINGS CALCULATOR"}
              </div>

              <h2 className="mt-6 text-4xl font-extrabold leading-tight text-blue-950 sm:text-5xl">
                {hindi
                  ? "जानें आप कितनी बचत कर सकते हैं"
                  : "Calculate Your Solar Savings"}
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                {hindi
                  ? "अपने लिए सोलर सिस्टम की क्षमता चुनें और संभावित मासिक बचत देखें।"
                  : "Choose a solar system size to get an illustrative estimate of your potential monthly electricity savings."}
              </p>

              <div className="mt-8">
                <label className="mb-4 block font-bold text-blue-950">
                  {hindi ? "सिस्टम क्षमता चुनें" : "Select Solar System Size"}
                </label>

                <div className="flex flex-wrap gap-3">
                  {[1, 2, 3, 4, 5, 6, 8, 10].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSystemSize(size)}
                      aria-pressed={systemSize === size}
                      className={`rounded-xl border px-5 py-3 font-bold transition ${
                        systemSize === size
                          ? "border-green-600 bg-green-600 text-white"
                          : "border-slate-200 bg-white text-slate-700 hover:border-green-500"
                      }`}
                    >
                      {size} kW
                    </button>
                  ))}
                </div>
              </div>

              <p className="mt-6 text-sm text-slate-500">
                {hindi
                  ? "यह एक अनुमान है। वास्तविक बचत आपके उपयोग, धूप, सिस्टम और बिजली दरों पर निर्भर करेगी।"
                  : "Illustrative estimate only. Actual savings depend on usage, sunlight, system performance and electricity tariffs."}
              </p>
            </div>

            <div className="rounded-[30px] bg-blue-950 p-8 text-white shadow-xl sm:p-10">
              <div className="flex items-center gap-3 text-blue-200">
                <Zap className="text-green-400" />
                {hindi ? "आपकी अनुमानित बचत" : "YOUR ESTIMATED SAVINGS"}
              </div>

              <p className="mt-8 text-sm font-semibold text-blue-200">
                {hindi ? "मासिक बचत" : "Monthly Savings"}
              </p>

              <p className="mt-2 text-5xl font-extrabold text-green-400">
                ₹{estimatedSavings.toLocaleString("en-IN")}
              </p>

              <div className="my-8 border-t border-white/15" />

              <p className="text-sm font-semibold text-blue-200">
                {hindi ? "वार्षिक बचत" : "Yearly Savings"}
              </p>

              <p className="mt-2 text-3xl font-bold">
                ₹{estimatedYearlySavings.toLocaleString("en-IN")}
              </p>

              <div className="mt-8 rounded-2xl bg-white/10 p-5">
                <p className="text-sm text-blue-100">
                  {hindi ? "चयनित सिस्टम क्षमता" : "Selected System Capacity"}
                </p>
                <p className="mt-1 text-2xl font-bold">{systemSize} kW</p>
              </div>

              <Link
                to="/contact"
                className="mt-8 flex items-center justify-center gap-3 rounded-full bg-green-500 px-6 py-4 font-bold text-white transition hover:bg-green-600"
              >
                {hindi ? "मुफ़्त सर्वे बुक करें" : "Book Free Site Survey"}
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="relative z-10 mx-auto -mt-2 max-w-[1400px] px-5 py-12 lg:px-10">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Wallet,
                title: hindi ? "बिजली बिल में बचत" : "Lower Electricity Bills",
                desc: hindi
                  ? "हर महीने बिजली के खर्च में कमी"
                  : "Save more on your monthly bills",
              },
              {
                icon: Leaf,
                title: hindi ? "स्वच्छ ऊर्जा" : "Clean Energy",
                desc: hindi
                  ? "पर्यावरण के अनुकूल ऊर्जा"
                  : "A greener and cleaner tomorrow",
              },
              {
                icon: ShieldCheck,
                title: hindi ? "विश्वसनीय समाधान" : "Reliable Solutions",
                desc: hindi
                  ? "गुणवत्तापूर्ण सोलर सिस्टम"
                  : "Quality solar products and systems",
              },
              {
                icon: HomeIcon,
                title: hindi ? "घर के लिए सोलर" : "Residential Solar",
                desc: hindi
                  ? "आपके घर के अनुसार समाधान"
                  : "Solutions designed for your home",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <item.icon size={25} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-blue-950">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="py-20">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="font-bold tracking-widest text-green-600">
                  {hindi ? "हमारा काम" : "OUR WORK"}
                </p>

                <h2 className="mt-3 text-4xl font-extrabold text-blue-950 sm:text-5xl">
                  {hindi ? "हमारे सोलर प्रोजेक्ट" : "Recent Solar Projects"}
                </h2>

                <p className="mt-4 text-slate-500">
                  {hindi
                    ? "घरों और व्यवसायों के लिए सोलर समाधान।"
                    : "Solar solutions for homes and businesses."}
                </p>
              </div>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 font-bold text-green-700 hover:text-green-800"
              >
                {hindi ? "सभी प्रोजेक्ट देखें" : "View All Projects"}
                <ArrowRight size={19} />
              </Link>
            </div>

            <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-64 overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <span className="absolute right-4 top-4 rounded-full bg-green-600 px-4 py-2 text-sm font-bold text-white">
                      {project.capacity}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-950">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-500">
                      {project.location}
                    </p>

                    <Link
                      to="/projects"
                      className="mt-5 inline-flex items-center gap-2 font-bold text-green-700"
                    >
                      {hindi ? "और जानें" : "Explore Project"}
                      <ArrowUpRight size={17} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-5 text-xs text-slate-400">
              {hindi
                ? "नोट: ये केवल उदाहरण के लिए दिखाए गए प्रोजेक्ट हैं। वास्तविक ग्राहक प्रोजेक्ट से बदलें।"
                : "Note: These are illustrative portfolio examples, not verified customer installations. Replace with actual completed projects before publishing."}
            </p>
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
                  ? "आज ही सोलर ऊर्जा की ओर कदम बढ़ाएँ"
                  : "Make the Switch to Solar Energy Today"}
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
                {hindi
                  ? "अपने घर के लिए सही सोलर सिस्टम और संभावित बचत जानने के लिए हमसे संपर्क करें।"
                  : "Talk to our team to find the right rooftop solar solution for your home and understand your potential savings."}
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-green-500 px-8 py-4 font-bold text-white transition hover:bg-green-600"
              >
                {t("quote")}
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* FLOATING WHATSAPP */}
        <a
          href="https://wa.me/917055889083?text=Hello%2C%20I%20want%20to%20know%20about%20rooftop%20solar%20installation."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-green-600 px-5 py-4 font-bold text-white shadow-xl transition hover:scale-105 hover:bg-green-700"
        >
          <MessageCircle size={24} />
          <span className="hidden sm:inline">{t("chat")}</span>
        </a>
      </main>
    </>
  );
}
