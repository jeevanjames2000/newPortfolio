import React, { useState, useEffect } from "react";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faHackerrank,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import AllProjects from "../components/projects/allProjects";
import { SocialIcon } from "react-social-icons";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";
const Homepage = () => {
  const [stayLogo, setStayLogo] = useState(false);
  const [logoSize, setLogoSize] = useState(80);
  const [oldLogoSize, setOldLogoSize] = useState(80);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let scroll = Math.round(window.pageYOffset, 2);

      let newLogoSize = 80 - (scroll * 4) / 10;

      if (newLogoSize < oldLogoSize) {
        if (newLogoSize > 40) {
          setLogoSize(newLogoSize);
          setOldLogoSize(newLogoSize);
          setStayLogo(false);
        } else {
          setStayLogo(true);
        }
      } else {
        setLogoSize(newLogoSize);
        setStayLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [logoSize, oldLogoSize]);

  const currentSEO = SEO.find((item) => item.page === "home");

  const logoStyle = {
    display: "flex",
    position: stayLogo ? "fixed" : "relative",
    top: stayLogo ? "3vh" : "auto",
    zIndex: 999,
    border: stayLogo ? "1px solid white" : "none",
    borderRadius: stayLogo ? "50%" : "none",
    boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <NavBar active="home" />
        <div className="content-wrapper">
          <div className="homepage-logo-container">
            <div style={logoStyle}>
              <Logo width={logoSize} link={false} />
            </div>
          </div>

          <div className="homepage-container">
            <div className="homepage-first-area">
              <div className="homepage-first-area-left-side">
                <div className="title homepage-title">
                  {INFO.homepage.title}
                </div>

                <div className="subtitle homepage-subtitle">
                  {INFO.homepage.description}
                </div>
              </div>

              <div className="homepage-first-area-right-side">
                <div className="homepage-image-container">
                  {/* J:\portfolio\public\front-end-developer.jpg */}
                  <div className="homepage-image-wrapper">
                    <img
                      src="frontend.jpg"
                      alt="about"
                      className="homepage-image"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="homepage-socials" style={{ gap: 5 }}>
              <a href={INFO.socials.github} target="_blank" rel="noreferrer">
                <SocialIcon
                  network="github"
                  style={{ height: 30, width: 30 }}
                />
              </a>

              <a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
                <SocialIcon
                  network="linkedin"
                  style={{ height: 30, width: 30 }}
                />
              </a>

              <a
                href={INFO.socials.hackerrank}
                target="_blank"
                rel="noreferrer"
              >
                <SocialIcon
                  url="https://www.hackerrank.com/profile/jeevanjames2000"
                  style={{ height: 30, width: 30 }}
                />
              </a>
              <a href={INFO.socials.leetcode} target="_blank" rel="noreferrer">
                <SocialIcon
                  url="https://leetcode.com/u/jeevanjames2000/"
                  style={{ height: 30, width: 30 }}
                />
              </a>
            </div>

            <div className="homepage-projects">
              <AllProjects />
            </div>

            <div className="page-footer">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
