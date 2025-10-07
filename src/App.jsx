import { useState } from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [language, setLanguage] = useState("es");

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 min-h-screen flex flex-col">
      <Navbar language={language} setLanguage={setLanguage} />
      <HeroSection language={language} />
      <Features language={language} />
      <Benefits language={language} />
      <Pricing language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;
