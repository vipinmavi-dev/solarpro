import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Phone,
  MessageCircle,
  MapPin,
  Sun,
  Zap,
  ShieldCheck,
  Send,
  Headphones,
  Clock,
  Home,
  Building2,
} from "lucide-react";

import SEO from "../../components/SEO";
import { useLanguage } from "../../context/LanguageContext.tsx";

const WHATSAPP_NUMBER = "917055889083";
const PHONE_NUMBER = "+917055889083";

interface EnquiryForm {
  name: string;
  phone: string;
  city: string;
  systemType: string;
  message: string;
}

export default function Contact() {
  const { language } = useLanguage();
  const hindi = language === "hi";

  const [form, setForm] = useState<EnquiryForm>({
    name: "",
    phone: "",
    city: "",
    systemType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const title = hindi
    ? "संपर्क करें | SolarPro रूफटॉप सोलर समाधान"
    : "Contact Us | SolarPro Rooftop Solar Solutions";

  const description = hindi
    ? "रूफटॉप सोलर सिस्टम, इंस्टॉलेशन और PM सूर्य घर योजना के बारे में जानकारी के लिए SolarPro से संपर्क करें।"
    : "Contact SolarPro for rooftop solar enquiries, installation guidance and information about the PM Surya Ghar scheme.";

  const updateField = (field: keyof EnquiryForm, value: string) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      "Hello SolarPro, I would like to enquire about solar installation.",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `City / PIN Code: ${form.city}`,
      `Requirement: ${form.systemType || "Not specified"}`,
      `Message: ${form.message || "Please contact me."}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title={title}
        description={description}
        path="/contact"
        keywords={
          hindi
            ? [
                "सोलर कंपनी से संपर्क",
                "रूफटॉप सोलर इंस्टॉलेशन",
                "PM सूर्य घर योजना",
                "सोलर पैनल पूछताछ",
              ]
            : [
                "contact solar company",
                "rooftop solar enquiry",
                "solar panel installation",
                "PM Surya Ghar solar enquiry",
              ]
        }
      />

      <main className="overflow-hidden bg-white text-slate-800">
        {/* HERO */}
        <section className="relative bg-slate-50">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-green-100/70 blur-3xl" />

          <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-10 lg:py-24">
            <div>
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-green-200 bg-green-50 px-5 py-3 font-semibold text-green-700">
                <MessageCircle size={19} />
                {hindi ? "हमसे संपर्क करें" : "GET IN TOUCH"}
              </div>

              <h1 className="text-5xl font-extrabold leading-[1.12] tracking-tight text-blue-950 sm:text-6xl lg:text-[68px]">
                {hindi ? (
                  <>
                    चलिए शुरू करते हैं
                    <br />
                    आपका <span className="text-green-600">सोलर सफर</span>
                  </>
                ) : (
                  <>
                    Let's Start Your
                    <br />
                    <span className="text-green-600">Solar Journey</span>
                  </>
                )}
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
                {hindi
                  ? "अपने घर या व्यवसाय के लिए सोलर सिस्टम की जानकारी चाहिए? अपनी जरूरत बताएं, हमारी टीम से संपर्क करें।"
                  : "Looking for a solar solution for your home or business? Tell us what you need and get in touch with our team."}
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 font-bold text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-1 hover:bg-green-700"
                >
                  <MessageCircle size={20} />
                  {hindi ? "WhatsApp पर बात करें" : "Chat on WhatsApp"}
                </a>

                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center gap-3 rounded-full border border-blue-950/20 bg-white px-8 py-4 font-bold text-blue-950 transition hover:bg-slate-100"
                >
                  <Phone size={19} />
                  {hindi ? "कॉल करें" : "Call Us"}
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm font-medium text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-green-600" />
                  {hindi ? "सोलर मार्गदर्शन" : "Solar Guidance"}
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-green-600" />
                  {hindi ? "उपयुक्त समाधान" : "Suitable Solutions"}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[32px] shadow-2xl shadow-blue-950/10">
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=85&w=1200&auto=format&fit=crop"
                  alt={
                    hindi
                      ? "सोलर सलाह और ग्राहक सहायता"
                      : "Solar consultation and customer support"
                  }
                  className="h-[420px] w-full object-cover sm:h-[500px]"
                  fetchPriority="high"
                />
              </div>

              <div className="absolute -bottom-7 left-5 right-5 rounded-2xl border border-slate-100 bg-white p-6 shadow-xl sm:left-10 sm:right-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                    <Headphones size={29} />
                  </div>
                  <div>
                    <p className="font-bold text-blue-950">
                      {hindi
                        ? "हम आपकी सहायता के लिए हैं"
                        : "We're Here to Help"}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      {hindi
                        ? "अपनी सोलर जरूरतों पर चर्चा करें"
                        : "Let's discuss your solar requirements"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT OPTIONS */}
        <section className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="font-bold tracking-widest text-green-600">
              {hindi ? "संपर्क के विकल्प" : "CONTACT OPTIONS"}
            </p>

            <h2 className="mt-4 text-4xl font-extrabold text-blue-950 sm:text-5xl">
              {hindi ? "हमसे जुड़ने के तरीके" : "How Can We Help You?"}
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              {hindi
                ? "अपनी सुविधा के अनुसार हमसे संपर्क करें।"
                : "Choose the way that works best for you."}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
                <Phone size={30} />
              </div>

              <h3 className="mt-7 text-xl font-extrabold text-blue-950">
                {hindi ? "फोन करें" : "Call Us"}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {hindi
                  ? "सोलर सिस्टम और इंस्टॉलेशन के बारे में बात करें।"
                  : "Talk to us about solar systems and installation."}
              </p>

              <p className="mt-5 font-bold text-green-700">+91 70558 89083</p>

              <span className="mt-5 inline-flex items-center gap-2 font-bold text-blue-950">
                {hindi ? "अभी कॉल करें" : "Call Now"}
                <ArrowUpRight size={18} />
              </span>
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
                <MessageCircle size={30} />
              </div>

              <h3 className="mt-7 text-xl font-extrabold text-blue-950">
                WhatsApp
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {hindi
                  ? "अपनी जरूरत लिखकर हमें WhatsApp पर भेजें।"
                  : "Send your requirements directly through WhatsApp."}
              </p>

              <p className="mt-5 font-bold text-green-700">+91 70558 89083</p>

              <span className="mt-5 inline-flex items-center gap-2 font-bold text-blue-950">
                {hindi ? "मैसेज भेजें" : "Send a Message"}
                <ArrowUpRight size={18} />
              </span>
            </a>

            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                <MapPin size={30} />
              </div>

              <h3 className="mt-7 text-xl font-extrabold text-blue-950">
                {hindi ? "आपका स्थान" : "Your Location"}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {hindi
                  ? "अपना शहर या पिन कोड साझा करें ताकि हम आपके क्षेत्र में उपलब्धता बता सकें।"
                  : "Share your city or PIN code so we can discuss service availability in your area."}
              </p>

              <span className="mt-5 inline-flex items-center gap-2 font-bold text-green-700">
                {hindi ? "स्थान की जानकारी दें" : "Share Your Location"}
                <ArrowRight size={18} />
              </span>
            </div>
          </div>
        </section>

        {/* ENQUIRY FORM */}
        <section className="bg-slate-50 py-24">
          <div className="mx-auto grid max-w-[1400px] gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
            <div className="pt-4">
              <p className="font-bold tracking-widest text-green-600">
                {hindi ? "पूछताछ फॉर्म" : "SEND AN ENQUIRY"}
              </p>

              <h2 className="mt-4 text-4xl font-extrabold leading-tight text-blue-950 sm:text-5xl">
                {hindi ? (
                  <>
                    हमें अपनी जरूरत
                    <span className="text-green-600"> बताएं</span>
                  </>
                ) : (
                  <>
                    Tell Us About Your
                    <span className="text-green-600"> Requirements</span>
                  </>
                )}
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                {hindi
                  ? "नीचे दिया गया फॉर्म भरें। सबमिट करने पर आपकी जानकारी WhatsApp में मैसेज के रूप में खुलेगी, जिसे आप भेज सकते हैं।"
                  : "Fill in the form below. When you submit, your details will open as a pre-filled WhatsApp message for you to send."}
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-green-600 shadow-sm">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-950">
                      {hindi ? "आपकी जरूरत के अनुसार" : "Based on Your Needs"}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {hindi
                        ? "अपने घर या व्यवसाय की जानकारी साझा करें।"
                        : "Share details about your home or business."}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-green-600 shadow-sm">
                    <Sun size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-950">
                      {hindi
                        ? "सोलर सिस्टम की जानकारी"
                        : "Solar System Guidance"}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {hindi
                        ? "सिस्टम क्षमता और उपलब्ध विकल्पों पर चर्चा करें।"
                        : "Discuss system capacity and available options."}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-green-600 shadow-sm">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-950">
                      {hindi ? "आसान संपर्क" : "Easy Enquiry"}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {hindi
                        ? "अपनी जानकारी सीधे WhatsApp पर भेजें।"
                        : "Send your enquiry directly through WhatsApp."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-slate-100 bg-white p-6 shadow-xl sm:p-10">
              <div className="mb-8">
                <h3 className="text-2xl font-extrabold text-blue-950">
                  {hindi ? "सोलर पूछताछ फॉर्म" : "Solar Enquiry Form"}
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  {hindi
                    ? "कृपया नीचे अपनी जानकारी भरें।"
                    : "Please provide your details below."}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold text-blue-950"
                  >
                    {hindi ? "आपका नाम" : "Your Name"} *
                  </label>

                  <input
                    id="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(event) =>
                      updateField("name", event.target.value)
                    }
                    placeholder={hindi ? "अपना नाम लिखें" : "Enter your name"}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-bold text-blue-950"
                    >
                      {hindi ? "मोबाइल नंबर" : "Mobile Number"} *
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      pattern="[0-9+\s()-]{10,16}"
                      value={form.phone}
                      onChange={(event) =>
                        updateField("phone", event.target.value)
                      }
                      placeholder="98765 43210"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="city"
                      className="mb-2 block text-sm font-bold text-blue-950"
                    >
                      {hindi ? "शहर / पिन कोड" : "City / PIN Code"} *
                    </label>

                    <input
                      id="city"
                      type="text"
                      required
                      autoComplete="postal-code"
                      value={form.city}
                      onChange={(event) =>
                        updateField("city", event.target.value)
                      }
                      placeholder={hindi ? "अपना शहर लिखें" : "Enter your city"}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="systemType"
                    className="mb-2 block text-sm font-bold text-blue-950"
                  >
                    {hindi ? "आपकी जरूरत" : "What Do You Need?"}
                  </label>

                  <select
                    id="systemType"
                    value={form.systemType}
                    onChange={(event) =>
                      updateField("systemType", event.target.value)
                    }
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-700 outline-none transition focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                  >
                    <option value="">
                      {hindi ? "अपनी जरूरत चुनें" : "Select your requirement"}
                    </option>
                    <option value="Residential Solar">
                      {hindi ? "घरेलू सोलर सिस्टम" : "Residential Solar"}
                    </option>
                    <option value="Commercial Solar">
                      {hindi ? "व्यावसायिक सोलर सिस्टम" : "Commercial Solar"}
                    </option>
                    <option value="PM Surya Ghar Scheme">
                      {hindi ? "PM सूर्य घर योजना" : "PM Surya Ghar Scheme"}
                    </option>
                    <option value="Solar Panels and Equipment">
                      {hindi
                        ? "सोलर पैनल और उपकरण"
                        : "Solar Panels & Equipment"}
                    </option>
                    <option value="Solar System Maintenance">
                      {hindi ? "सोलर सिस्टम की देखभाल" : "Solar Maintenance"}
                    </option>
                    <option value="Other">{hindi ? "अन्य" : "Other"}</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold text-blue-950"
                  >
                    {hindi
                      ? "आपका संदेश (वैकल्पिक)"
                      : "Your Message (Optional)"}
                  </label>

                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(event) =>
                      updateField("message", event.target.value)
                    }
                    placeholder={
                      hindi
                        ? "अपनी जरूरत या सवाल बताएं..."
                        : "Tell us about your requirements..."
                    }
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-full bg-green-600 px-8 py-4 font-bold text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-1 hover:bg-green-700"
                >
                  <Send size={19} />
                  {hindi
                    ? "WhatsApp पर पूछताछ भेजें"
                    : "Send Enquiry on WhatsApp"}
                  <ArrowRight size={19} />
                </button>

                {submitted && (
                  <p
                    role="status"
                    className="rounded-xl bg-green-50 p-4 text-sm leading-6 text-green-800"
                  >
                    {hindi
                      ? "WhatsApp नई टैब में खुलना चाहिए। कृपया वहां अपना संदेश भेजें।"
                      : "WhatsApp should have opened in a new tab. Please send your message there."}
                  </p>
                )}

                <p className="text-center text-xs leading-5 text-slate-400">
                  {hindi
                    ? "आपकी जानकारी WhatsApp संदेश में शामिल होगी। यह फॉर्म वेबसाइट पर डेटा स्टोर नहीं करता।"
                    : "Your details are included in a WhatsApp message. This form does not store data on the website."}
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="px-5 py-20 lg:px-10">
          <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[35px] bg-blue-950 px-7 py-16 text-center text-white sm:px-12">
            <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-green-500/20 blur-3xl" />

            <div className="relative">
              <Zap size={42} className="mx-auto text-green-400" />

              <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold sm:text-5xl">
                {hindi
                  ? "आज ही अपने सोलर सफर की शुरुआत करें"
                  : "Take the First Step Towards Solar Energy"}
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
                {hindi
                  ? "अपने घर या व्यवसाय के लिए सोलर समाधान पर चर्चा करने के लिए हमसे संपर्क करें।"
                  : "Get in touch to discuss a solar solution for your home or business."}
              </p>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-green-500 px-8 py-4 font-bold text-white transition hover:bg-green-600"
              >
                <MessageCircle size={20} />
                {hindi ? "WhatsApp पर संपर्क करें" : "Contact on WhatsApp"}
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
