// eslint-disable-next-line no-unused-vars
import React, { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import DnaLoader from "./components/DnaLoader";
const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
// const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Contact = lazy(() => import("./components/Contact"));
const StarsCanvas = lazy(() => import("./components/canvas/StarsCanvas"));

const App = () => {
  const dnaSpinner = {
    height: "180",
    width: "180",
    divClassName:
      "fixed inset-0 z-50 flex justify-center items-center bg-black opacity-100",
    wrapperClassName: "",
    wrapperStyle: {},
  };

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary select-none">
        <Suspense fallback={<DnaLoader spinnerProps={dnaSpinner} />}>
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
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
