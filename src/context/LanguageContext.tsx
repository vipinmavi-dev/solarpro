import { createContext, useContext, useState, type ReactNode } from "react";

const translations = {
  en: {
    home: "Home",
    about: "About Us",
    services: "Services",
    scheme: "PM Surya Ghar",
    projects: "Our Projects",
    howItWorks: "How It Works",
    products: "Solar Products",
    contact: "Contact",
    quote: "Get Free Quote",
    heroBadge: "Powering a Greener India",
    heroTitle: "Power Your Home with Solar Energy",
    heroDescription:
      "Save on electricity bills and contribute to a cleaner, greener future with reliable rooftop solar solutions.",
    benefit1: "Reduce your electricity bills",
    benefit2: "Clean and renewable energy",
    benefit3: "Expert installation and support",
    governmentScheme: "GOVERNMENT SCHEME",
    schemeTitle: "PM Surya Ghar Muft Bijli Yojana",
    subsidyLabel: "UP CENTRAL + STATE SUBSIDY",
    subsidyDescription:
      "Potential combined assistance for eligible residential households in Uttar Pradesh.",
    centralSubsidy: "Central subsidy up to ₹78,000",
    stateSubsidy: "UP state assistance up to ₹30,000",
    chat: "Chat on WhatsApp",
  },
  hi: {
    home: "होम",
    about: "हमारे बारे में",
    services: "सेवाएँ",
    scheme: "पीएम सूर्य घर",
    projects: "हमारे प्रोजेक्ट",
    howItWorks: "यह कैसे काम करता है",
    products: "सोलर उत्पाद",
    contact: "संपर्क करें",
    quote: "मुफ़्त कोटेशन पाएँ",
    heroBadge: "हरित भारत की ओर एक कदम",
    heroTitle: "सौर ऊर्जा से अपने घर को रोशन करें",
    heroDescription:
      "विश्वसनीय रूफटॉप सोलर समाधान के साथ बिजली का बिल बचाएँ और स्वच्छ, हरित भविष्य में योगदान दें।",
    benefit1: "बिजली के बिल में बचत",
    benefit2: "स्वच्छ और नवीकरणीय ऊर्जा",
    benefit3: "विशेषज्ञ इंस्टॉलेशन और सहायता",
    governmentScheme: "सरकारी योजना",
    schemeTitle: "पीएम सूर्य घर मुफ्त बिजली योजना",
    subsidyLabel: "केंद्र और उत्तर प्रदेश राज्य की सहायता",
    subsidyDescription:
      "उत्तर प्रदेश में पात्र घरेलू उपभोक्ताओं के लिए संभावित संयुक्त वित्तीय सहायता।",
    centralSubsidy: "केंद्र सरकार की सब्सिडी ₹78,000 तक",
    stateSubsidy: "उत्तर प्रदेश राज्य की सहायता ₹30,000 तक",
    chat: "व्हाट्सऐप पर बात करें",
  },
} as const;

type Language = keyof typeof translations;
type TranslationKey = keyof typeof translations.en;

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: TranslationKey) => translations[language][key];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
