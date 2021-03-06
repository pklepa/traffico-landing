import { useRef } from "react";
import { ThemeProvider } from "styled-components";

import theme from "./assets/themes/theme";
import GlobalStyle from "./assets/themes/globalStyles";

import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ApplySection from "./components/ApplySection";
import FAQSection from "./components/FAQSection";
import PartnersSection from "./components/PartnersSection";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";

function App() {
  const aboutRef = useRef(null);
  const applyRef = useRef(null);
  const faqRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Navbar
          aboutRef={aboutRef}
          applyRef={applyRef}
          faqRef={faqRef}
          contactRef={contactRef}
        />
        <HeroSection contactRef={contactRef} />

        <AboutSection aboutRef={aboutRef} />
        <ApplySection applyRef={applyRef} />
        <FAQSection faqRef={faqRef} />
        <PartnersSection />
        <ContactSection
          aboutRef={aboutRef}
          applyRef={applyRef}
          faqRef={faqRef}
          contactRef={contactRef}
        />

        <Footer />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
