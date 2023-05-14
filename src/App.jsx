// eslint-disable-next-line no-unused-vars
import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  // Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import DnaLoader from "./components/DnaLoader";

const App = () => {
  const [loading, setLoading] = useState(true);

  const handleLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  return !loading ? (
    <BrowserRouter>
      <div className="relative z-0 bg-primary select-none">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  ) : (
    <DnaLoader />
  );
};

export default App;
