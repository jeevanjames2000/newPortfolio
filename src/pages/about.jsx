import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";
import Adsense from "./Adsense";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "about");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`About | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
        <meta
          name="google-adsense-account"
          content="ca-pub-6960670108371447"
        ></meta>
      </Helmet>
      <Adsense
        style={{ display: "block", width: "1200px", height: "280px" }}
        slot="6960670108371447"
      />
      <div className="page-content">
        <NavBar active="about" />
        <div className="content-wrapper">
          <div className="about-logo-container">
            <div className="about-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="about-container">
            <div className="about-main">
              <div className="about-right-side">
                <div className="title about-title">{INFO.about.title}</div>

                <div className="subtitle about-subtitle">
                  {INFO.about.description}
                </div>
              </div>

              <div className="about-left-side">
                {/* J:\portfolio\public\front-end-developer.jpg */}
                <div className="about-image-container">
                  <div className="about-image-wrapper">
                    <img src="work.webp" alt="about" className="about-image" />
                  </div>
                </div>

                <div className="about-socials">
                  <Socials />
                </div>
              </div>
            </div>
            <div className="about-socials-mobile">
              <Socials />
            </div>
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
