import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; // Import routing components
import "./index.css";
import { LanguageProvider } from "./context/LanguageContext.tsx";
import Header from "./components/header.tsx";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/home/home.tsx";
import About from "./pages/about/about.tsx";
import ResidentialSolar from "./pages/residentialSolar/ResidentialSolar.tsx"; // Import the ResidentialSolar component
import PMSuryaGhar from "./pages/PMSuryaGhar/PMSuryaGhar.tsx"; // Import the PMSuryaGhar component
import HowItWorks from "./pages/howItWorks/howItWorks.tsx"; // Import the HowItWorks component
import Projects from "./pages/ourProjects/ourProjects.tsx"; // Import the OurProjects component
import SolarProducts from "./pages/solarProducts/solarProducts.tsx"; // Import the SolarProducts component
import Contact from "./pages/contact/contact.tsx"; // Import the Contact component

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Header /> {/* Wrap the app in BrowserRouter */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/residential-solar" element={<ResidentialSolar />} />
            <Route path="/pm-surya-ghar" element={<PMSuryaGhar />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/solar-products" element={<SolarProducts />} />
            <Route path="/contact" element={<Contact />} />
            {/* Set Home as the default route */}
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  </StrictMode>
);
