import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ClipboardList,
  Search,
  Ruler,
  FileCheck,
  Sun,
  Wrench,
  Zap,
  Gauge,
  Headphones,
  ShieldCheck,
  Home,
  MessageCircle,
} from "lucide-react";

import SEO from "../../components/SEO";
import { useLanguage } from "../../context/LanguageContext.tsx";

export default function HowItWorks() {
  const { language } = useLanguage();
  const hindi = language === "hi";

  const title = hindi
    ? "सोलर इंस्टॉलेशन प्रक्रिया कैसे काम करती है | SolarPro"
    : "How Solar Installation Works | SolarPro";

  const description = hindi
    ? "सोलर पैनल लगवाने की पूरी प्रक्रिया समझें। शुरुआती बातचीत, साइट सर्वे, सिस्टम डिजाइन, इंस्टॉलेशन और नेट मीटरिंग तक।"
    : "Understand the complete rooftop solar installation journey, from initial consultation and site survey to system design, installation and net metering.";

  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: hindi ? "पहली बातचीत" : "Initial Consultation",
      description: hindi
        ? "अपनी बिजली की खपत, मासिक बिल और सोलर से जुड़ी जरूरतों के बारे में हमारी टीम से बात करें।"
        : "Tell our team about your electricity usage, monthly bill and rooftop solar requirements.",
      detail: hindi
        ? "आपकी जरूरतों और बजट को समझकर शुरुआती मार्गदर्शन दिया जाता है।"
        : "We understand your requirements and budget before suggesting possible solutions.",
    },
    {
      number: "02",
      icon: Search,
      title: hindi ? "साइट सर्वे" : "Site Assessment",
      description: hindi
        ? "छत की जगह, धूप, छाया, दिशा और उपलब्ध बिजली कनेक्शन की जांच की जाती है।"
        : "The rooftop area, sunlight exposure, shading, orientation and existing electrical connection are assessed.",
      detail: hindi
        ? "इससे सिस्टम की उपयुक्त क्षमता और इंस्टॉलेशन की संभावनाएं समझने में मदद मिलती है।"
        : "This helps determine suitable system capacity and installation requirements.",
    },
    {
      number: "03",
      icon: Ruler,
      title: hindi ? "सिस्टम डिजाइन और कोटेशन" : "System Design & Quotation",
      description: hindi
        ? "साइट की स्थिति और बिजली की जरूरत के अनुसार पैनल, इन्वर्टर और अन्य उपकरणों का चयन किया जाता है।"
        : "Panels, inverter and other components are selected according to your energy needs and site conditions.",
      detail: hindi
        ? "आपको प्रस्तावित सिस्टम, अनुमानित लागत और काम का विवरण बताया जाता है।"
        : "You receive a proposal explaining the suggested system, estimated cost and scope of work.",
    },
    {
      number: "04",
      icon: FileCheck,
      title: hindi ? "दस्तावेज और मंजूरी" : "Documentation & Approvals",
      description: hindi
        ? "जहां लागू हो, बिजली वितरण कंपनी की तकनीकी मंजूरी और योजना से संबंधित प्रक्रिया पूरी की जाती है।"
        : "Where applicable, the required DISCOM feasibility approval and scheme-related formalities are completed.",
      detail: hindi
        ? "योजना के तहत आवेदन करने वाले ग्राहकों को आधिकारिक पोर्टल की प्रक्रिया का पालन करना होता है।"
        : "Customers applying under the government scheme must follow the official portal process.",
    },
    {
      number: "05",
      icon: Wrench,
      title: hindi ? "सोलर इंस्टॉलेशन" : "Solar Installation",
      description: hindi
        ? "स्वीकृत डिजाइन के अनुसार स्ट्रक्चर, सोलर पैनल, इन्वर्टर और वायरिंग लगाई जाती है।"
        : "The mounting structure, solar panels, inverter and wiring are installed according to the approved design.",
      detail: hindi
        ? "इंस्टॉलेशन के दौरान सुरक्षा और उपकरणों की सही फिटिंग पर ध्यान दिया जाता है।"
        : "Installation focuses on safe mounting, proper connections and equipment placement.",
    },
    {
      number: "06",
      icon: Gauge,
      title: hindi ? "टेस्टिंग और कमीशनिंग" : "Testing & Commissioning",
      description: hindi
        ? "सिस्टम की जांच करके कनेक्शन, सुरक्षा और बिजली उत्पादन से संबंधित जरूरी परीक्षण किए जाते हैं।"
        : "The system is checked for connections, safety and proper operation before commissioning.",
      detail: hindi
        ? "सिस्टम को चालू करने से पहले जरूरी जांच और परीक्षण पूरे किए जाते हैं।"
        : "Necessary checks are completed before the system is put into operation.",
    },
    {
      number: "07",
      icon: Zap,
      title: hindi ? "नेट मीटरिंग और हैंडओवर" : "Net Metering & Handover",
      description: hindi
        ? "जहां लागू हो, DISCOM की प्रक्रिया के अनुसार नेट मीटरिंग पूरी की जाती है और ग्राहक को सिस्टम की जानकारी दी जाती है।"
        : "Where applicable, net metering is completed through the DISCOM process and the customer receives system guidance.",
      detail: hindi
        ? "आपको सिस्टम के उपयोग, निगरानी और सामान्य रखरखाव के बारे में बताया जाता है।"
        : "You are guided on system operation, monitoring and routine maintenance.",
    },
  ];

  const benefits = [
    {
      icon: ClipboardList,
      title: hindi ? "स्पष्ट प्रक्रिया" : "Clear Process",
      description: hindi
        ? "हर चरण की जानकारी और आगे होने वाले काम की समझ।"
        : "Understand each stage and what happens next.",
    },
    {
      icon: ShieldCheck,
      title: hindi ? "सुरक्षा पर ध्यान" : "Safety Focus",
      description: hindi
        ? "सही उपकरण और सुरक्षित इंस्टॉलेशन प्रक्रिया।"
        : "Appropriate equipment and safe installation practices.",
    },
    {
      icon: Headphones,
      title: hindi ? "ग्राहक मार्गदर्शन" : "Customer Guidance",
      description: hindi
        ? "सिस्टम के उपयोग और रखरखाव की जानकारी।"
        : "Guidance on system operation and maintenance.",
    },
  ];

  const faqs = [
    {
      question: hindi
        ? "सोलर इंस्टॉलेशन में कितना समय लगता है?"
        : "How long does solar installation take?",
      answer: hindi
        ? "समय सिस्टम के आकार, साइट की स्थिति, उपकरणों की उपलब्धता और जरूरी मंजूरियों पर निर्भर करता है। साइट सर्वे के बाद अनुमानित समय बताया जा सकता है।"
        : "The timeline depends on system size, site conditions, equipment availability and required approvals. An estimated schedule can be shared after the site assessment.",
    },
    {
      question: hindi
        ? "क्या इंस्टॉलेशन से पहले साइट सर्वे जरूरी है?"
        : "Is a site survey required before installation?",
      answer: hindi
        ? "हां, सही सिस्टम डिजाइन और छत की उपयुक्तता समझने के लिए साइट सर्वे उपयोगी और महत्वपूर्ण है।"
        : "Yes. A site survey is important for understanding rooftop suitability and preparing an appropriate system design.",
    },
    {
      question: hindi
        ? "क्या SolarPro सरकारी सब्सिडी के लिए आवेदन कर सकता है?"
        : "Can SolarPro help with government subsidy applications?",
      answer: hindi
        ? "हम आवेदन प्रक्रिया की सामान्य जानकारी देने में मदद कर सकते हैं। योजना के लिए आवेदन और पात्रता की पुष्टि आधिकारिक पोर्टल और संबंधित DISCOM के माध्यम से होती है।"
        : "We can provide general guidance about the application process. Scheme applications and eligibility are handled through the official portal and the relevant DISCOM.",
    },
    {
      question: hindi ? "नेट मीटरिंग क्या है?" : "What is net metering?",
      answer: hindi
        ? "नेट मीटरिंग में ग्रिड से ली गई और ग्रिड में भेजी गई बिजली का हिसाब निर्धारित नियमों के अनुसार रखा जाता है। इसकी उपलब्धता और नियम स्थानीय DISCOM पर निर्भर करते हैं।"
        : "Net metering records electricity imported from and exported to the grid according to applicable rules. Availability and requirements depend on the local DISCOM.",
    },
  ];

  return (
    <>
      <SEO
        title={title}
        description={description}
        path="/how-it-works"
        keywords={
          hindi
            ? [
                "सोलर इंस्टॉलेशन प्रक्रिया",
                "घर पर सोलर पैनल कैसे लगवाएं",
                "रूफटॉप सोलर इंस्टॉलेशन",
                "सोलर साइट सर्वे",
              ]
            : [
                "solar installation process",
                "how rooftop solar works",
                "residential solar installation",
                "solar site survey",
                "solar commissioning",
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
                {hindi ? "हमारी कार्य प्रक्रिया" : "OUR WORKING PROCESS"}
              </div>

              <h1 className="text-5xl font-extrabold leading-[1.12] tracking-tight text-blue-950 sm:text-6xl lg:text-[68px]">
                {hindi ? (
                  <>
                    सोलर लगवाना
                    <br />
                    अब <span className="text-green-600">आसान</span> है
                  </>
                ) : (
                  <>
                    Going Solar,
                    <br />
                    Made <span className="text-green-600">Simple</span>
                  </>
                )}
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
                {hindi
                  ? "पहली बातचीत से लेकर सोलर सिस्टम चालू होने तक, हर चरण को समझें। हम पूरी प्रक्रिया को स्पष्ट और आसान बनाने में आपकी मदद करते हैं।"
                  : "From your first conversation to switching on your solar system, understand every stage of the journey. We help make the process clear and straightforward."}
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 font-bold text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-1 hover:bg-green-700"
                >
                  {hindi ? "सर्वे बुक करें" : "Request a Site Survey"}
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

              <div className="mt-10 flex flex-wrap gap-6 text-sm font-semibold text-slate-600">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-green-600" />
                  {hindi ? "सात स्पष्ट चरण" : "7 Clear Steps"}
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-green-600" />
                  {hindi ? "शुरू से अंत तक मार्गदर्शन" : "End-to-End Guidance"}
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[32px] shadow-2xl shadow-blue-950/10">
                <img
                  src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=85&w=1200&auto=format&fit=crop"
                  alt={
                    hindi
                      ? "घर की छत पर सोलर पैनल इंस्टॉलेशन"
                      : "Residential rooftop solar installation"
                  }
                  className="h-[420px] w-full object-cover sm:h-[510px]"
                  fetchPriority="high"
                />
              </div>

              <div className="absolute -bottom-7 left-5 right-5 rounded-2xl border border-slate-100 bg-white p-6 shadow-xl sm:left-10 sm:right-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                    <Home size={29} />
                  </div>
                  <div>
                    <p className="font-bold text-blue-950">
                      {hindi
                        ? "आपकी छत, आपका सोलर सिस्टम"
                        : "Your Rooftop, Your Solar System"}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      {hindi
                        ? "आपकी जरूरत के अनुसार समाधान"
                        : "A solution based on your requirements"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS OVERVIEW */}
        <section className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="font-bold tracking-widest text-green-600">
              {hindi ? "हमारी प्रक्रिया" : "OUR PROCESS"}
            </p>

            <h2 className="mt-4 text-4xl font-extrabold text-blue-950 sm:text-5xl">
              {hindi
                ? "पहली बातचीत से सोलर चालू होने तक"
                : "From First Contact to Solar Power"}
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              {hindi
                ? "हमारी सात चरणों वाली प्रक्रिया आपको हर जरूरी कदम समझने में मदद करती है।"
                : "Our seven-step process helps you understand every important part of your solar installation journey."}
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
                      <Icon size={27} />
                    </div>

                    <span className="text-4xl font-extrabold text-slate-100">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-extrabold text-blue-950">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>

                  <div className="mt-5 border-t border-slate-100 pt-5">
                    <p className="text-sm font-semibold leading-6 text-green-700">
                      {step.detail}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* VISUAL PROCESS */}
        <section className="bg-slate-50 py-24">
          <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 lg:grid-cols-2 lg:px-10">
            <div className="overflow-hidden rounded-[30px] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=85&w=1200&auto=format&fit=crop"
                alt={
                  hindi
                    ? "सोलर पैनल और इन्वर्टर सिस्टम"
                    : "Solar panels and rooftop solar equipment"
                }
                className="h-[420px] w-full object-cover"
                loading="lazy"
              />
            </div>

            <div>
              <p className="font-bold tracking-widest text-green-600">
                {hindi ? "सही समाधान" : "THE RIGHT SOLUTION"}
              </p>

              <h2 className="mt-4 text-4xl font-extrabold leading-tight text-blue-950 sm:text-5xl">
                {hindi
                  ? "हर घर की जरूरत अलग होती है"
                  : "Every Home Has Different Energy Needs"}
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                {hindi
                  ? "सोलर सिस्टम चुनते समय सिर्फ छत का आकार नहीं, बल्कि बिजली की खपत, दिन के समय उपयोग, छाया और भविष्य की जरूरतों को भी समझना जरूरी है।"
                  : "Choosing a solar system involves more than rooftop size. Electricity consumption, daytime usage, shading and future requirements all matter."}
              </p>

              <div className="mt-8 space-y-5">
                {[
                  hindi
                    ? "बिजली के बिल और खपत का आकलन"
                    : "Review of electricity bills and usage",
                  hindi
                    ? "छत की जगह और धूप की उपलब्धता"
                    : "Rooftop space and sunlight assessment",
                  hindi
                    ? "उपयुक्त सिस्टम क्षमता का सुझाव"
                    : "Recommendation of suitable system capacity",
                  hindi
                    ? "लागत और उपलब्ध विकल्पों की जानकारी"
                    : "Explanation of costs and available options",
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
                to="/residential-solar"
                className="mt-9 inline-flex items-center gap-3 font-bold text-green-700 transition hover:gap-5"
              >
                {hindi
                  ? "रेजिडेंशियल सोलर के बारे में जानें"
                  : "Explore Residential Solar"}
                <ArrowRight size={19} />
              </Link>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="font-bold tracking-widest text-green-600">
              {hindi ? "हमारा दृष्टिकोण" : "OUR APPROACH"}
            </p>

            <h2 className="mt-4 text-4xl font-extrabold text-blue-950 sm:text-5xl">
              {hindi
                ? "आपके लिए एक आसान अनुभव"
                : "A Simpler Experience for You"}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-sm"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                    <Icon size={30} />
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
        </section>

        {/* GOVERNMENT SCHEME */}
        <section className="bg-blue-950 py-20 text-white">
          <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 lg:grid-cols-2 lg:px-10">
            <div>
              <p className="font-bold tracking-widest text-green-400">
                {hindi ? "सरकारी योजना" : "GOVERNMENT SCHEME"}
              </p>

              <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
                {hindi
                  ? "पीएम सूर्य घर योजना के बारे में जानें"
                  : "Learn About PM Surya Ghar Yojana"}
              </h2>

              <p className="mt-5 leading-8 text-blue-100">
                {hindi
                  ? "पात्र घरेलू उपभोक्ता आधिकारिक योजना के तहत रूफटॉप सोलर के लिए केंद्रीय वित्तीय सहायता प्राप्त कर सकते हैं। आवेदन और मंजूरी निर्धारित सरकारी प्रक्रिया के अनुसार होती है।"
                  : "Eligible residential consumers may receive central financial assistance for rooftop solar under the scheme. Applications and approvals follow the prescribed government process."}
              </p>

              <Link
                to="/pm-surya-ghar"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-green-500 px-8 py-4 font-bold text-white transition hover:bg-green-600"
              >
                {hindi ? "योजना की जानकारी देखें" : "Explore Scheme Details"}
                <ArrowRight size={20} />
              </Link>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/15 text-green-400">
                <Sun size={32} />
              </div>

              <p className="mt-7 text-sm font-bold tracking-widest text-blue-200">
                {hindi ? "अधिकतम केंद्रीय सब्सिडी" : "MAXIMUM CENTRAL SUBSIDY"}
              </p>

              <p className="mt-3 text-5xl font-extrabold text-green-400">
                ₹78,000
              </p>

              <p className="mt-4 text-sm leading-7 text-blue-100">
                {hindi
                  ? "सामान्य राज्यों में पात्र घरेलू रूफटॉप सोलर सिस्टम के लिए लागू नियमों के अधीन।"
                  : "For eligible residential rooftop solar systems in general states, subject to applicable guidelines."}
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-[1000px] px-5 lg:px-10">
            <div className="mb-12 text-center">
              <p className="font-bold tracking-widest text-green-600">
                {hindi ? "अक्सर पूछे जाने वाले सवाल" : "COMMON QUESTIONS"}
              </p>

              <h2 className="mt-4 text-4xl font-extrabold text-blue-950 sm:text-5xl">
                {hindi ? "आपके सवालों के जवाब" : "Frequently Asked Questions"}
              </h2>
            </div>

            <div className="space-y-5">
              {faqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-blue-950">
                    {faq.question}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 py-20 lg:px-10">
          <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[35px] bg-blue-950 px-7 py-16 text-center sm:px-12">
            <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-green-500/20 blur-3xl" />
            <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />

            <div className="relative">
              <Sun size={42} className="mx-auto text-green-400" />

              <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold text-white sm:text-5xl">
                {hindi
                  ? "क्या आप सोलर की शुरुआत करना चाहते हैं?"
                  : "Ready to Start Your Solar Journey?"}
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
                {hindi
                  ? "अपनी जरूरतों पर चर्चा करें और अपने घर के लिए उपयुक्त सोलर समाधान समझें।"
                  : "Let's discuss your requirements and explore a suitable solar solution for your home."}
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-green-500 px-8 py-4 font-bold text-white transition hover:bg-green-600"
              >
                {hindi ? "आज ही संपर्क करें" : "Get in Touch"}
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
