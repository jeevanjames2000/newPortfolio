import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";

import Contact from "./pages/contact";
import Notfound from "./pages/404";
import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  const loadAds = () => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.log("adsense error", error.message);
    }
  };

  useEffect(() => {
    loadAds();
  }, []);
  return (
    <>
      <Helmet>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6960670108371447"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="pub-6960670108371447"
        data-ad-slot="6960670108371447"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
