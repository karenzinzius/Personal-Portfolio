import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/navIcon1.svg";
import navIcon2 from "../assets/img/navIcon2.svg";
import navIcon3 from "../assets/img/navIcon3.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [showPhonePopup, setShowPhonePopup] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
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
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
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
                <span>Let's Connect</span>
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
      {showPhonePopup && (
        <div className="phone-popup">
          <div className="phone-popup-box">
            <p>Call +49 157 83513882?</p>
            <div className="popup-buttons">
              <a href="tel:+4915783513882" className="call-btn">
                Call
              </a>
              <button
                className="cancel-btn"
                onClick={() => setShowPhonePopup(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </Navbar>
  );
};
