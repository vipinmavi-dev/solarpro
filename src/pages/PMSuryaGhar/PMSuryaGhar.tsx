import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sun,
  Wallet,
  FileText,
  UserCheck,
  ClipboardCheck,
  Building2,
  Landmark,
  IndianRupee,
  Info,
  ShieldCheck,
  Zap,
  Home,
} from "lucide-react";

import SEO from "../../components/SEO";
import { useLanguage } from "../../context/LanguageContext.tsx";

export default function PMSuryaGhar() {
  const { language } = useLanguage();
  const hindi = language === "hi";

  const title = hindi
    ? "पीएम सूर्य घर मुफ्त बिजली योजना | SolarPro"
    : "PM Surya Ghar Muft Bijli Yojana | SolarPro";

  const description = hindi
    ? "पीएम सूर्य घर योजना की पात्रता, केंद्रीय सब्सिडी, उत्तर प्रदेश में संभावित अतिरिक्त सहायता और आवेदन प्रक्रिया की जानकारी प्राप्त करें।"
    : "Understand PM Surya Ghar Yojana eligibility, central subsidy, potential additional assistance in Uttar Pradesh and the rooftop solar application process.";

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    inLanguage: hindi ? "hi-IN" : "en-IN",
    url: "https://YOUR-DOMAIN.com/pm-surya-ghar",
    isPartOf: {
      "@type": "WebSite",
      name: "SolarPro",
      url: "https://YOUR-DOMAIN.com",
    },
  };

  const eligibility = [
    {
      icon: UserCheck,
      title: hindi ? "भारतीय नागरिक" : "Indian Citizen",
      desc: hindi
        ? "आवेदक को भारतीय नागरिक होना चाहिए।"
        : "The applicant must be an Indian citizen.",
    },
    {
      icon: Home,
      title: hindi ? "उपयुक्त छत" : "Suitable Rooftop",
      desc: hindi
        ? "घर की छत पर सोलर पैनल लगाने के लिए उपयुक्त जगह होनी चाहिए।"
        : "The household should have a suitable rooftop for solar panel installation.",
    },
    {
      icon: Zap,
      title: hindi ? "वैध बिजली कनेक्शन" : "Valid Electricity Connection",
      desc: hindi
        ? "घर में संबंधित बिजली वितरण कंपनी का वैध बिजली कनेक्शन होना चाहिए।"
        : "The household must have a valid electricity connection with the local DISCOM.",
    },
    {
      icon: ShieldCheck,
      title: hindi ? "पहले सब्सिडी न ली हो" : "No Previous Solar Subsidy",
      desc: hindi
        ? "योजना के लागू नियमों के अनुसार उसी सिस्टम के लिए पहले अन्य सब्सिडी नहीं ली होनी चाहिए।"
        : "The household must meet the scheme's conditions regarding previous solar subsidies.",
    },
  ];

  const applicationSteps = [
    {
      number: "01",
      title: hindi ? "पोर्टल पर रजिस्ट्रेशन" : "Register on the Portal",
      desc: hindi
        ? "राष्ट्रीय पोर्टल पर अपना राज्य, बिजली वितरण कंपनी और उपभोक्ता खाता नंबर दर्ज करें।"
        : "Visit the National Portal and enter your state, electricity distribution company and consumer account number.",
    },
    {
      number: "02",
      title: hindi ? "सोलर आवेदन करें" : "Submit Solar Application",
      desc: hindi
        ? "पोर्टल पर लॉगिन करके रूफटॉप सोलर के लिए आवेदन और आवश्यक विवरण जमा करें।"
        : "Log in to the portal and submit your rooftop solar application with the required details.",
    },
    {
      number: "03",
      title: hindi ? "DISCOM की मंजूरी" : "DISCOM Feasibility Approval",
      desc: hindi
        ? "स्थानीय बिजली वितरण कंपनी से तकनीकी व्यवहार्यता की मंजूरी प्राप्त करें।"
        : "Obtain technical feasibility approval from your local electricity distribution company.",
    },
    {
      number: "04",
      title: hindi ? "वेंडर चुनें और इंस्टॉलेशन" : "Select Vendor and Install",
      desc: hindi
        ? "पोर्टल पर उपलब्ध पंजीकृत वेंडर चुनें और स्वीकृत प्रक्रिया के अनुसार सिस्टम लगवाएं।"
        : "Choose a registered vendor through the portal and get the system installed according to the approved process.",
    },
    {
      number: "05",
      title: hindi ? "नेट मीटर और निरीक्षण" : "Net Meter and Inspection",
      desc: hindi
        ? "इंस्टॉलेशन के बाद आवश्यक सिस्टम विवरण जमा करें और DISCOM निरीक्षण व मीटर प्रक्रिया पूरी कराएं।"
        : "Submit the required installation details and complete the DISCOM inspection and metering process.",
    },
    {
      number: "06",
      title: hindi ? "सब्सिडी प्राप्त करें" : "Receive Eligible Subsidy",
      desc: hindi
        ? "आवश्यक स्वीकृति और दस्तावेज पूरे होने पर पात्र सब्सिडी निर्धारित प्रक्रिया से बैंक खाते में भेजी जाती है।"
        : "After the required approvals and documentation, eligible subsidy is transferred to the beneficiary's bank account through the prescribed process.",
    },
  ];

  const documents = [
    hindi
      ? "बिजली का उपभोक्ता खाता नंबर"
      : "Electricity consumer account number",
    hindi ? "रजिस्टर्ड मोबाइल नंबर" : "Registered mobile number",
    hindi ? "बैंक खाते का विवरण" : "Bank account details",
    hindi
      ? "आवश्यक पहचान और आवेदन विवरण"
      : "Required identity and application details",
    hindi
      ? "पोर्टल द्वारा मांगे गए अन्य दस्तावेज"
      : "Any additional documents requested by the portal",
  ];

  return (
    <>
      <SEO
        title={title}
        description={description}
        path="/pm-surya-ghar"
        keywords={
          hindi
            ? [
                "पीएम सूर्य घर योजना",
                "सोलर सब्सिडी",
                "उत्तर प्रदेश सोलर सब्सिडी",
                "रूफटॉप सोलर योजना",
              ]
            : [
                "PM Surya Ghar Yojana",
                "rooftop solar subsidy",
                "solar subsidy Uttar Pradesh",
                "PM Surya Ghar eligibility",
                "solar application process",
              ]
        }
      />

      <main className="overflow-hidden bg-white text-slate-800">
        {/* HERO */}
        <section className="relative bg-slate-50">
          <div className="absolute -right-20 -top-28 h-96 w-96 rounded-full bg-green-100/70 blur-3xl" />

          <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
            <div>
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-green-200 bg-green-50 px-5 py-3 font-semibold text-green-700">
                <Landmark size={20} />
                {hindi ? "भारत सरकार की योजना" : "GOVERNMENT OF INDIA SCHEME"}
              </div>

              <h1 className="text-5xl font-extrabold leading-[1.12] tracking-tight text-blue-950 sm:text-6xl lg:text-[68px]">
                {hindi ? (
                  <>
                    पीएम सूर्य घर
                    <br />
                    <span className="text-green-600">मुफ्त बिजली</span>
                    <br />
                    योजना
                  </>
                ) : (
                  <>
                    PM Surya Ghar
                    <br />
                    <span className="text-green-600">Muft Bijli</span>
                    <br />
                    Yojana
                  </>
                )}
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
                {hindi
                  ? "घरेलू उपभोक्ताओं को रूफटॉप सोलर अपनाने में सहायता देने वाली केंद्र सरकार की योजना। पात्रता, सब्सिडी और आवेदन प्रक्रिया को समझें।"
                  : "A central government initiative designed to help residential households adopt rooftop solar. Understand eligibility, subsidy support and the application process."}
              </p>

              <div className="mt-8 space-y-4">
                {[
                  hindi
                    ? "पात्र घरेलू उपभोक्ताओं के लिए केंद्रीय वित्तीय सहायता"
                    : "Central financial assistance for eligible households",
                  hindi
                    ? "3 kW या उससे अधिक पर केंद्रीय सब्सिडी अधिकतम ₹78,000"
                    : "Central subsidy capped at ₹78,000 for systems of 3 kW or above",
                  hindi
                    ? "राष्ट्रीय पोर्टल के माध्यम से आवेदन"
                    : "Application through the National Portal",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 font-semibold text-blue-950"
                  >
                    <CheckCircle2
                      size={23}
                      className="shrink-0 text-green-600"
                    />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://pmsuryaghar.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 font-bold text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-1 hover:bg-green-700"
                >
                  {hindi ? "आधिकारिक पोर्टल पर जाएं" : "Visit Official Portal"}
                  <ArrowUpRight size={20} />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 rounded-full border border-blue-950/20 bg-white px-8 py-4 font-bold text-blue-950 transition hover:bg-slate-100"
                >
                  {hindi ? "सहायता लें" : "Get Assistance"}
                  <ArrowRight size={19} />
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
                      : "Rooftop solar panels on a residential home"
                  }
                  className="h-[420px] w-full object-cover sm:h-[510px]"
                  fetchPriority="high"
                />
              </div>

              <div className="absolute -bottom-7 left-5 right-5 rounded-2xl border border-slate-100 bg-white p-6 shadow-xl sm:left-10 sm:right-10">
                <p className="font-bold text-slate-500">
                  {hindi
                    ? "अधिकतम केंद्रीय सब्सिडी"
                    : "MAXIMUM CENTRAL SUBSIDY"}
                </p>
                <p className="mt-2 text-4xl font-extrabold text-green-600 sm:text-5xl">
                  ₹78,000
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  {hindi
                    ? "सामान्य राज्यों में पात्र घरेलू रूफटॉप सोलर सिस्टम के लिए"
                    : "For eligible residential rooftop solar systems in general states"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CENTRAL SUBSIDY */}
        <section className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="font-bold tracking-widest text-green-600">
              {hindi ? "केंद्रीय सब्सिडी" : "CENTRAL SUBSIDY"}
            </p>

            <h2 className="mt-4 text-4xl font-extrabold text-blue-950 sm:text-5xl">
              {hindi
                ? "कितनी सब्सिडी मिल सकती है?"
                : "How Much Central Subsidy Can You Get?"}
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              {hindi
                ? "सामान्य राज्यों में पात्र घरेलू उपभोक्ताओं के लिए केंद्रीय वित्तीय सहायता की दरें।"
                : "Central Financial Assistance rates for eligible residential consumers in general states."}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                capacity: "1 kW",
                amount: "₹30,000",
                desc: hindi ? "1 kW सिस्टम के लिए" : "For a 1 kW system",
              },
              {
                capacity: "2 kW",
                amount: "₹60,000",
                desc: hindi ? "2 kW सिस्टम के लिए" : "For a 2 kW system",
              },
              {
                capacity: "3 kW या अधिक",
                amount: "₹78,000",
                desc: hindi
                  ? "अधिकतम केंद्रीय सब्सिडी"
                  : "Maximum central subsidy",
              },
            ].map((item) => (
              <article
                key={item.capacity}
                className="rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                  <IndianRupee size={28} />
                </div>

                <p className="mt-6 font-bold text-slate-500">{item.capacity}</p>

                <p className="mt-3 text-4xl font-extrabold text-blue-950">
                  {item.amount}
                </p>

                <p className="mt-3 text-sm text-slate-500">{item.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-5 text-sm leading-7 text-blue-950">
            <Info size={22} className="mt-1 shrink-0 text-blue-700" />
            <p>
              {hindi
                ? "केंद्रीय सब्सिडी की गणना लागू दिशा-निर्देशों और स्वीकृत सिस्टम क्षमता के अनुसार होती है। वास्तविक पात्रता और राशि की पुष्टि आधिकारिक पोर्टल से करें।"
                : "Central subsidy is calculated according to applicable guidelines and approved system capacity. Confirm your actual eligibility and amount through the official portal."}
            </p>
          </div>
        </section>

        {/* UP ADDITIONAL ASSISTANCE */}
        <section className="bg-slate-50 py-24">
          <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 lg:grid-cols-2 lg:px-10">
            <div>
              <p className="font-bold tracking-widest text-green-600">
                {hindi
                  ? "उत्तर प्रदेश के उपभोक्ताओं के लिए"
                  : "FOR UTTAR PRADESH HOUSEHOLDS"}
              </p>

              <h2 className="mt-4 text-4xl font-extrabold leading-tight text-blue-950 sm:text-5xl">
                {hindi
                  ? "अतिरिक्त राज्य सहायता की जानकारी"
                  : "Explore Additional State Assistance"}
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                {hindi
                  ? "UPNEDA की प्रकाशित जानकारी में पात्र घरेलू उपभोक्ताओं के लिए ₹15,000 प्रति kW, अधिकतम ₹30,000 तक अतिरिक्त राज्य सहायता का उल्लेख है। इसकी उपलब्धता, आवेदन की शर्तें और वर्तमान स्थिति की पुष्टि जरूरी है।"
                  : "Published UPNEDA information describes additional state assistance of ₹15,000 per kW, up to ₹30,000, for eligible residential consumers. Current availability, application conditions and applicable limits must be verified before making a claim."}
              </p>

              <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-sm font-bold text-slate-500">
                  {hindi
                    ? "प्रकाशित राज्य सहायता"
                    : "PUBLISHED STATE ASSISTANCE"}
                </p>
                <p className="mt-2 text-4xl font-extrabold text-green-600">
                  ₹15,000 / kW
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  {hindi
                    ? "अधिकतम ₹30,000 तक, लागू शर्तों के अधीन"
                    : "Up to ₹30,000, subject to applicable conditions"}
                </p>
              </div>

              <a
                href="https://www.upneda.org.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-green-600 px-7 py-4 font-bold text-white transition hover:bg-green-700"
              >
                {hindi ? "UPNEDA वेबसाइट देखें" : "Visit UPNEDA Website"}
                <ArrowUpRight size={19} />
              </a>
            </div>

            <div className="rounded-[30px] bg-blue-950 p-8 text-white shadow-xl sm:p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-green-400">
                <Wallet size={32} />
              </div>

              <h3 className="mt-7 text-2xl font-extrabold">
                {hindi
                  ? "संभावित संयुक्त सहायता"
                  : "Potential Combined Assistance"}
              </h3>

              <p className="mt-3 text-sm leading-7 text-blue-100">
                {hindi
                  ? "यदि केंद्रीय और राज्य दोनों सहायता आपके आवेदन पर लागू हों और उपलब्ध हों, तो कुल सहायता अधिक हो सकती है।"
                  : "If both central and state assistance apply to your application and remain available, the combined support may be higher."}
              </p>

              <p className="mt-7 text-5xl font-extrabold text-green-400">
                ₹1,08,000*
              </p>

              <p className="mt-3 text-sm leading-6 text-blue-100">
                {hindi
                  ? "₹78,000 केंद्रीय + संभावित ₹30,000 राज्य सहायता"
                  : "₹78,000 central + potential ₹30,000 state assistance"}
              </p>

              <div className="mt-7 border-t border-white/15 pt-5 text-xs leading-6 text-blue-200">
                {hindi
                  ? "*यह अधिकतम संभावित संयुक्त राशि का उदाहरण है, सुनिश्चित लाभ नहीं। राज्य सहायता की वर्तमान उपलब्धता, पात्रता, बजट और आवेदन शर्तें संबंधित सरकारी एजेंसी से जांचें।"
                  : "*This is an illustrative maximum combined amount, not a guaranteed benefit. Verify current state assistance availability, eligibility, budget and application conditions with the relevant government agency."}
              </div>
            </div>
          </div>
        </section>

        {/* ELIGIBILITY */}
        <section className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="font-bold tracking-widest text-green-600">
              {hindi ? "पात्रता" : "ELIGIBILITY"}
            </p>

            <h2 className="mt-4 text-4xl font-extrabold text-blue-950 sm:text-5xl">
              {hindi ? "कौन आवेदन कर सकता है?" : "Who Can Apply?"}
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              {hindi
                ? "आवेदन करने से पहले योजना की बुनियादी पात्रता शर्तें समझें।"
                : "Understand the basic eligibility requirements before submitting an application."}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {eligibility.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-green-600">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-blue-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* APPLICATION PROCESS */}
        <section className="bg-blue-950 py-24 text-white">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <p className="font-bold tracking-widest text-green-400">
                {hindi ? "आवेदन प्रक्रिया" : "APPLICATION PROCESS"}
              </p>

              <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">
                {hindi ? "आवेदन कैसे करें?" : "How to Apply"}
              </h2>

              <p className="mt-5 leading-8 text-blue-100">
                {hindi
                  ? "राष्ट्रीय पोर्टल के माध्यम से आवेदन से लेकर सब्सिडी प्राप्त करने तक की सामान्य प्रक्रिया।"
                  : "An overview of the process, from registration on the National Portal to receiving eligible subsidy."}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {applicationSteps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl border border-white/10 bg-white/5 p-7"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-lg font-extrabold text-white">
                    {step.number}
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-blue-100">
                    {step.desc}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="https://pmsuryaghar.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-green-500 px-8 py-4 font-bold text-white transition hover:bg-green-600"
              >
                {hindi ? "अभी आवेदन शुरू करें" : "Start Your Application"}
                <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* DOCUMENTS */}
        <section className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="font-bold tracking-widest text-green-600">
                {hindi ? "जरूरी जानकारी" : "BEFORE YOU APPLY"}
              </p>

              <h2 className="mt-4 text-4xl font-extrabold text-blue-950 sm:text-5xl">
                {hindi
                  ? "आवेदन के लिए क्या तैयार रखें?"
                  : "What Should You Keep Ready?"}
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                {hindi
                  ? "आवेदन के दौरान पोर्टल पर कुछ जानकारी और दस्तावेज मांगे जा सकते हैं। आवेदन शुरू करने से पहले इन्हें तैयार रखें।"
                  : "The portal may ask for certain information and documents during the application. Keep these details ready before you begin."}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <FileText size={25} />
                </div>
                <h3 className="text-xl font-bold text-blue-950">
                  {hindi ? "जानकारी और दस्तावेज" : "Information and Documents"}
                </h3>
              </div>

              <div className="mt-7 space-y-5">
                {documents.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={21}
                      className="mt-0.5 shrink-0 text-green-600"
                    />
                    <span className="text-sm leading-6 text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-7 border-t border-slate-100 pt-5 text-xs leading-6 text-slate-500">
                {hindi
                  ? "अंतिम दस्तावेज सूची और फॉर्मेट आधिकारिक पोर्टल पर जांचें।"
                  : "Check the official portal for the final document list and required formats."}
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
              {[
                {
                  q: hindi
                    ? "क्या योजना में ₹78,000 की सब्सिडी मिलती है?"
                    : "Is ₹78,000 subsidy available under the scheme?",
                  a: hindi
                    ? "सामान्य राज्यों में पात्र घरेलू रूफटॉप सोलर सिस्टम के लिए केंद्रीय सब्सिडी अधिकतम ₹78,000 तक है। वास्तविक राशि सिस्टम क्षमता और लागू नियमों पर निर्भर करती है।"
                    : "For eligible residential rooftop solar systems in general states, central subsidy is capped at ₹78,000. The actual amount depends on system capacity and applicable guidelines.",
                },
                {
                  q: hindi
                    ? "क्या उत्तर प्रदेश में अतिरिक्त सब्सिडी भी मिल सकती है?"
                    : "Can households in Uttar Pradesh receive additional subsidy?",
                  a: hindi
                    ? "UPNEDA की प्रकाशित जानकारी में अतिरिक्त राज्य सहायता का उल्लेख है। लेकिन इसकी वर्तमान उपलब्धता और पात्रता की पुष्टि आवेदन से पहले संबंधित सरकारी एजेंसी से करें।"
                    : "UPNEDA has published information about additional state assistance. However, verify current availability and eligibility with the relevant government agency before applying.",
                },
                {
                  q: hindi
                    ? "क्या पहले सोलर लगवाकर बाद में सब्सिडी के लिए आवेदन कर सकते हैं?"
                    : "Can I install solar first and apply for subsidy later?",
                  a: hindi
                    ? "ऐसा करने से पहले आधिकारिक पोर्टल की प्रक्रिया और DISCOM की मंजूरी संबंधी निर्देश जांचें। निर्धारित प्रक्रिया का पालन करना जरूरी है।"
                    : "Check the official portal's process and DISCOM approval requirements before installation. Following the prescribed process is important.",
                },
                {
                  q: hindi
                    ? "सब्सिडी किसे मिलती है?"
                    : "Who receives the subsidy?",
                  a: hindi
                    ? "पात्रता और आवश्यक प्रक्रिया पूरी होने पर सब्सिडी लाभार्थी उपभोक्ता के बैंक खाते में निर्धारित प्रक्रिया के अनुसार भेजी जाती है।"
                    : "After eligibility and required procedures are completed, the subsidy is transferred to the beneficiary consumer's bank account through the prescribed process.",
                },
              ].map((faq) => (
                <article
                  key={faq.q}
                  className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-blue-950">{faq.q}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {faq.a}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* OFFICIAL LINKS */}
        <section className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10">
          <div className="rounded-[30px] border border-slate-100 bg-white p-8 shadow-sm sm:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <Landmark size={28} />
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-blue-950">
                  {hindi
                    ? "आधिकारिक जानकारी कहां देखें?"
                    : "Where to Find Official Information"}
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  {hindi
                    ? "आवेदन, पात्रता, सब्सिडी और नवीनतम नियमों के लिए सरकारी वेबसाइटों का ही उपयोग करें।"
                    : "Use official government websites for applications, eligibility, subsidy details and updated guidelines."}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://pmsuryaghar.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-blue-950 px-6 py-3 font-bold text-white transition hover:bg-blue-900"
              >
                PM Surya Ghar Portal <ArrowUpRight size={17} />
              </a>

              <a
                href="https://www.upneda.org.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 font-bold text-blue-950 transition hover:bg-slate-50"
              >
                UPNEDA <ArrowUpRight size={17} />
              </a>
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
                  ? "सोलर इंस्टॉलेशन के बारे में सहायता चाहिए?"
                  : "Need Help With Your Solar Installation?"}
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
                {hindi
                  ? "अपने घर की जरूरतों और उपलब्ध विकल्पों को समझने के लिए हमारी टीम से संपर्क करें।"
                  : "Contact our team to discuss your household requirements and explore available options."}
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-green-500 px-8 py-4 font-bold text-white transition hover:bg-green-600"
              >
                {hindi ? "हमसे संपर्क करें" : "Contact Our Team"}
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
