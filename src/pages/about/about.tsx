import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sun,
  ShieldCheck,
  Leaf,
  Wallet,
  Users,
  Target,
  Eye,
  Lightbulb,
  Home,
  Zap,
  Handshake,
} from "lucide-react";

import SEO from "../../components/SEO";
import { useLanguage } from "../../context/LanguageContext.tsx";

export default function About() {
  const { language } = useLanguage();
  const hindi = language === "hi";

  const seoTitle = hindi
    ? "हमारे बारे में | SolarPro - रूफटॉप सोलर समाधान"
    : "About SolarPro | Residential Rooftop Solar Solutions";

  const seoDescription = hindi
    ? "SolarPro के बारे में जानें। हम घरेलू रूफटॉप सोलर, सोलर सिस्टम की जानकारी और पीएम सूर्य घर योजना से संबंधित मार्गदर्शन प्रदान करने पर ध्यान देते हैं।"
    : "Learn about SolarPro and our focus on residential rooftop solar solutions, solar guidance and helping households understand the PM Surya Ghar Yojana.";

  const seoKeywords = hindi
    ? [
        "SolarPro के बारे में",
        "रूफटॉप सोलर समाधान",
        "घरेलू सोलर सिस्टम",
        "सोलर पैनल इंस्टॉलेशन",
        "पीएम सूर्य घर योजना",
      ]
    : [
        "About SolarPro",
        "residential rooftop solar",
        "solar panel solutions",
        "solar installation Uttar Pradesh",
        "PM Surya Ghar Yojana",
      ];

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: seoTitle,
    description: seoDescription,
    inLanguage: hindi ? "hi-IN" : "en-IN",
    url: "https://YOUR-DOMAIN.com/about",
    isPartOf: {
      "@type": "WebSite",
      name: "SolarPro",
      url: "https://YOUR-DOMAIN.com",
    },
  };

  const values = [
    {
      icon: ShieldCheck,
      title: hindi ? "गुणवत्ता पर ध्यान" : "Quality Focus",
      description: hindi
        ? "सोलर सिस्टम के चयन और इंस्टॉलेशन में गुणवत्ता और उपयुक्तता को प्राथमिकता देना।"
        : "Prioritising quality and suitability when selecting and installing solar systems.",
    },
    {
      icon: Lightbulb,
      title: hindi ? "सही जानकारी" : "Clear Guidance",
      description: hindi
        ? "ग्राहकों को सोलर सिस्टम, लागत और उपलब्ध योजनाओं की स्पष्ट जानकारी देना।"
        : "Helping households understand solar systems, costs and applicable government schemes.",
    },
    {
      icon: Handshake,
      title: hindi ? "ग्राहक-केंद्रित सोच" : "Customer First",
      description: hindi
        ? "हर घर की जरूरत और बजट के अनुसार उपयुक्त समाधान पर ध्यान देना।"
        : "Focusing on solutions that consider each household's needs and budget.",
    },
    {
      icon: Leaf,
      title: hindi ? "स्वच्छ ऊर्जा" : "Clean Energy",
      description: hindi
        ? "नवीकरणीय ऊर्जा को अपनाने और स्वच्छ भविष्य की दिशा में योगदान देना।"
        : "Encouraging renewable energy adoption for a cleaner energy future.",
    },
  ];

  const solutions = [
    {
      icon: Home,
      title: hindi ? "घरेलू रूफटॉप सोलर" : "Residential Rooftop Solar",
      description: hindi
        ? "घरों की छतों के लिए उपयुक्त सोलर सिस्टम के विकल्प।"
        : "Solar system options designed around residential rooftop requirements.",
      link: "/residential-solar",
    },
    {
      icon: Sun,
      title: hindi ? "पीएम सूर्य घर योजना" : "PM Surya Ghar Yojana",
      description: hindi
        ? "योजना की पात्रता, सब्सिडी और आवेदन प्रक्रिया की जानकारी।"
        : "Information about scheme eligibility, subsidy and the application process.",
      link: "/pm-surya-ghar",
    },
    {
      icon: Zap,
      title: hindi ? "सोलर सिस्टम मार्गदर्शन" : "Solar System Guidance",
      description: hindi
        ? "सिस्टम क्षमता और घरेलू बिजली की जरूरतों को समझने में सहायता।"
        : "Guidance to understand system capacity and household electricity needs.",
      link: "/contact",
    },
  ];

  const principles = [
    hindi
      ? "ग्राहक की जरूरत को समझना"
      : "Understand the customer's requirements",
    hindi
      ? "उपयुक्त सोलर विकल्पों की जानकारी देना"
      : "Explain suitable solar system options",
    hindi
      ? "लागत और उपलब्ध सहायता स्पष्ट करना"
      : "Clarify costs and applicable assistance",
    hindi
      ? "इंस्टॉलेशन प्रक्रिया में मार्गदर्शन देना"
      : "Provide guidance through the installation process",
  ];

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        path="/about"
        keywords={seoKeywords}
      />

      <main className="overflow-hidden bg-white text-slate-800">
        {/* HERO */}
        <section className="relative overflow-hidden bg-slate-50">
          <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-green-100/70 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />

          <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
            <div>
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-green-200 bg-green-50 px-5 py-3 font-semibold text-green-700">
                <Sun size={20} />
                {hindi ? "SolarPro के बारे में" : "ABOUT SOLARPRO"}
              </div>

              <h1 className="text-5xl font-extrabold leading-[1.12] tracking-tight text-blue-950 sm:text-6xl lg:text-[68px]">
                {hindi ? (
                  <>
                    सौर ऊर्जा की ओर
                    <br />
                    <span className="text-green-600">एक बेहतर कदम</span>
                  </>
                ) : (
                  <>
                    Helping You
                    <br />
                    <span className="text-green-600">Go Solar</span>
                  </>
                )}
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
                {hindi
                  ? "SolarPro का उद्देश्य घरों को रूफटॉप सोलर के विकल्पों, सही जानकारी और उपलब्ध सरकारी योजनाओं को समझने में मदद करना है।"
                  : "At SolarPro, our focus is on helping households explore rooftop solar solutions with clear information, suitable options and guidance on applicable government schemes."}
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 font-bold text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-1 hover:bg-green-700"
                >
                  {hindi ? "हमसे संपर्क करें" : "Talk to Our Team"}
                  <ArrowRight size={20} />
                </Link>

                <Link
                  to="/projects"
                  className="inline-flex items-center gap-3 rounded-full border border-blue-950/20 bg-white px-8 py-4 font-bold text-blue-950 transition hover:bg-slate-50"
                >
                  {hindi ? "प्रोजेक्ट देखें" : "Explore Projects"}
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
                      ? "घर की छत पर सोलर पैनल"
                      : "Solar panels installed on a residential rooftop"
                  }
                  className="h-[380px] w-full object-cover sm:h-[480px]"
                  fetchPriority="high"
                />
              </div>

              <div className="absolute -bottom-7 left-5 right-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl sm:left-10 sm:right-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                    <Sun size={30} />
                  </div>

                  <div>
                    <h2 className="font-bold text-blue-950">
                      {hindi
                        ? "स्मार्ट ऊर्जा का विकल्प"
                        : "A Smarter Energy Choice"}
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                      {hindi
                        ? "अपने घर के लिए सोलर को समझें"
                        : "Explore solar for your home"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="font-bold tracking-widest text-green-600">
                {hindi ? "हमारा परिचय" : "WHO WE ARE"}
              </p>

              <h2 className="mt-4 text-4xl font-extrabold leading-tight text-blue-950 sm:text-5xl">
                {hindi
                  ? "हर घर तक सौर ऊर्जा की जानकारी"
                  : "Making Solar Easier to Understand"}
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                {hindi
                  ? "सोलर सिस्टम लगवाना एक महत्वपूर्ण निर्णय है। इसमें सिस्टम की क्षमता, छत की स्थिति, बिजली की खपत, लागत और उपलब्ध सरकारी सहायता जैसी कई बातें समझना जरूरी है।"
                  : "Choosing a solar system is an important household decision. It involves understanding system capacity, rooftop conditions, electricity consumption, installation costs and applicable government assistance."}
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                {hindi
                  ? "SolarPro इन सभी पहलुओं को सरल तरीके से समझाने और ग्राहकों को उनकी जरूरत के अनुसार विकल्प तलाशने में मदद करने पर ध्यान देता है।"
                  : "SolarPro aims to make these aspects easier to understand and help customers explore options that suit their individual requirements."}
              </p>

              <div className="mt-8 space-y-4">
                {[
                  hindi
                    ? "घरेलू सोलर सिस्टम की जानकारी"
                    : "Residential solar system information",
                  hindi
                    ? "योजना और सब्सिडी संबंधी मार्गदर्शन"
                    : "Government scheme and subsidy guidance",
                  hindi
                    ? "जरूरत के अनुसार समाधान"
                    : "Solutions based on household needs",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 font-semibold text-blue-950"
                  >
                    <CheckCircle2
                      size={22}
                      className="shrink-0 text-green-600"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=85&w=700&auto=format&fit=crop"
                  alt={
                    hindi
                      ? "सौर पैनल और स्वच्छ ऊर्जा"
                      : "Solar panels and renewable energy"
                  }
                  className="h-64 w-full object-cover sm:h-80"
                  loading="lazy"
                />
              </div>

              <div className="mt-10 overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=85&w=700&auto=format&fit=crop"
                  alt={
                    hindi
                      ? "सोलर पैनल से बिजली उत्पादन"
                      : "Electricity generation using solar panels"
                  }
                  className="h-64 w-full object-cover sm:h-80"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* MISSION AND VISION */}
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <p className="font-bold tracking-widest text-green-600">
                {hindi ? "हमारा उद्देश्य" : "OUR PURPOSE"}
              </p>

              <h2 className="mt-4 text-4xl font-extrabold text-blue-950 sm:text-5xl">
                {hindi ? "हम किस दिशा में काम करते हैं" : "What Drives Us"}
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                {hindi
                  ? "हमारा ध्यान सोलर ऊर्जा को समझने और अपनाने की प्रक्रिया को सरल बनाने पर है।"
                  : "We want to make understanding and exploring solar energy a simpler experience for households."}
              </p>
            </div>

            <div className="grid gap-7 md:grid-cols-2">
              <article className="rounded-[28px] border border-slate-100 bg-white p-8 shadow-sm sm:p-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                  <Target size={32} />
                </div>

                <h3 className="mt-7 text-2xl font-extrabold text-blue-950">
                  {hindi ? "हमारा मिशन" : "Our Mission"}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {hindi
                    ? "घरेलू उपभोक्ताओं को सोलर सिस्टम, उसकी लागत, क्षमता और उपलब्ध सरकारी योजनाओं के बारे में सरल और उपयोगी जानकारी देना, ताकि वे सोच-समझकर निर्णय ले सकें।"
                    : "To provide households with clear and useful information about solar systems, costs, capacity and applicable government schemes, helping them make informed decisions."}
                </p>
              </article>

              <article className="rounded-[28px] border border-slate-100 bg-white p-8 shadow-sm sm:p-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-950">
                  <Eye size={32} />
                </div>

                <h3 className="mt-7 text-2xl font-extrabold text-blue-950">
                  {hindi ? "हमारा विजन" : "Our Vision"}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {hindi
                    ? "एक ऐसे भविष्य की दिशा में योगदान देना जहां अधिक घर स्वच्छ ऊर्जा के विकल्पों को समझें और अपनी जरूरतों के अनुसार सोलर ऊर्जा अपनाने में सक्षम हों।"
                    : "To contribute towards a future where more households understand clean energy options and can explore solar power according to their needs."}
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="font-bold tracking-widest text-green-600">
              {hindi ? "हमारे मूल्य" : "OUR VALUES"}
            </p>

            <h2 className="mt-4 text-4xl font-extrabold text-blue-950 sm:text-5xl">
              {hindi
                ? "हमारे काम करने के सिद्धांत"
                : "Principles Behind Our Work"}
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              {hindi
                ? "हमारा प्रयास है कि हर ग्राहक को उपयोगी जानकारी और उपयुक्त विकल्प मिलें।"
                : "Our approach is built around useful information and suitable choices for every customer."}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:border-green-200 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-blue-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* SOLUTIONS */}
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="font-bold tracking-widest text-green-600">
                  {hindi ? "हमारी सेवाएं" : "WHAT WE FOCUS ON"}
                </p>

                <h2 className="mt-4 text-4xl font-extrabold text-blue-950 sm:text-5xl">
                  {hindi
                    ? "सोलर से जुड़े समाधान"
                    : "Explore Our Solar Solutions"}
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                  {hindi
                    ? "अपने घर के लिए सोलर सिस्टम और उपलब्ध विकल्पों के बारे में जानें।"
                    : "Explore solar systems and information relevant to your household."}
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-bold text-green-700 hover:text-green-800"
              >
                {hindi ? "संपर्क करें" : "Get in Touch"}
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-10 grid gap-7 md:grid-cols-3">
              {solutions.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-green-600">
                      <Icon size={28} />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-blue-950">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {item.description}
                    </p>

                    <Link
                      to={item.link}
                      className="mt-7 inline-flex items-center gap-2 font-bold text-green-700 hover:text-green-800"
                    >
                      {hindi ? "और जानें" : "Learn More"}
                      <ArrowUpRight size={18} />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* OUR APPROACH */}
        <section className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[30px]">
              <img
                src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=85&w=1200&auto=format&fit=crop"
                alt={
                  hindi
                    ? "सोलर पैनल इंस्टॉलेशन का उदाहरण"
                    : "Example of a rooftop solar installation"
                }
                className="h-[430px] w-full object-cover"
                loading="lazy"
              />
            </div>

            <div>
              <p className="font-bold tracking-widest text-green-600">
                {hindi ? "हमारा तरीका" : "OUR APPROACH"}
              </p>

              <h2 className="mt-4 text-4xl font-extrabold leading-tight text-blue-950 sm:text-5xl">
                {hindi
                  ? "सही जानकारी से सही निर्णय तक"
                  : "From Clear Information to Better Decisions"}
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                {hindi
                  ? "हमारा मानना है कि सोलर सिस्टम चुनने से पहले ग्राहक को अपनी जरूरत, विकल्प और संभावित लागत समझनी चाहिए।"
                  : "We believe customers should understand their needs, available options and potential costs before choosing a solar system."}
              </p>

              <div className="mt-8 space-y-5">
                {principles.map((item, index) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-700">
                      {index + 1}
                    </div>

                    <p className="pt-2 font-semibold text-blue-950">{item}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/how-it-works"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-green-600 px-7 py-4 font-bold text-white transition hover:bg-green-700"
              >
                {hindi ? "प्रक्रिया जानें" : "See How It Works"}
                <ArrowRight size={19} />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 pb-20 lg:px-10">
          <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[35px] bg-blue-950 px-7 py-16 text-center sm:px-12">
            <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-green-500/20 blur-3xl" />
            <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/15 text-green-400">
                <Users size={34} />
              </div>

              <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold text-white sm:text-5xl">
                {hindi
                  ? "अपने घर के लिए सोलर विकल्प जानें"
                  : "Let's Explore Solar for Your Home"}
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
                {hindi
                  ? "हमसे संपर्क करें और अपने घर की जरूरतों के अनुसार सोलर सिस्टम के विकल्पों की जानकारी प्राप्त करें।"
                  : "Get in touch to explore rooftop solar options based on your home's requirements."}
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-green-500 px-8 py-4 font-bold text-white transition hover:bg-green-600"
              >
                {hindi ? "हमसे बात करें" : "Contact Our Team"}
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
