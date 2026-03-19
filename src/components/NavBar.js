import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/navIcon1.svg";
import navIcon2 from "../assets/img/navIcon2.svg";
import navIcon3 from "../assets/img/navIcon3.svg";
import { useTranslation } from "react-i18next";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [showPhonePopup, setShowPhonePopup] = useState(false);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <div className="logo-wrapper">
            <img src={logo} alt="logo" />
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav"> 
          <span className="navbar-toggler-icon"></span> 
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              {t("nav.home")}
            </Nav.Link>

            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              {t("nav.skills")}
            </Nav.Link>

            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              {t("nav.projects")}
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/karenzinzius/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/karenzinzius">
                <img src={navIcon2} alt="" />
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowPhonePopup(true);
                }}
              >
                {" "}
                <img src={navIcon3} alt="" />
              </a>
            </div>

            <a href="#connect">
              <button className="vvd">
                <span>{t("nav.connect")}</span>
              </button>
            </a>

            {/* 🌍 LANGUAGE SWITCH */}
            <div className="lang-switch">
              <button
                className={i18n.language === "de" ? "active" : ""}
                onClick={() => i18n.changeLanguage("de")}
              >
                DE
              </button>
              <button
                className={i18n.language === "en" ? "active" : ""}
                onClick={() => i18n.changeLanguage("en")}
              >
                EN
              </button>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>

      {showPhonePopup && (
        <div className="phone-popup">
          <div className="phone-popup-box">
            <p>{t("nav.callPrompt")}</p>
            <div className="popup-buttons">
              <a href="tel:+4915783513882" className="call-btn">
                {t("nav.call")}
              </a>
              <button
                className="cancel-btn"
                onClick={() => setShowPhonePopup(false)}
              >
                {t("nav.cancel")}
              </button>
            </div>
          </div>
        </div>
      )}
    </Navbar>
  );
};
