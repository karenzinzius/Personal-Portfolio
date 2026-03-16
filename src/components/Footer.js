import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/navIcon1.svg";
import navIcon2 from "../assets/img/navIcon2.svg";
import navIcon3 from "../assets/img/navIcon3.svg";
import { useState } from "react";

export const Footer = () => {
  const [showPhonePopup, setShowPhonePopup] = useState(false);

  return (
    <footer className="footer">
      <Container>
        {/* Social icons row */}
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/karenzinzius/">
            <img src={navIcon1} alt="LinkedIn" />
          </a>
          <a href="https://github.com/karenzinzius">
            <img src={navIcon2} alt="GitHub" />
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setShowPhonePopup(true);
            }}
          >
            <img src={navIcon3} alt="Phone" />
          </a>
        </div>

        {/* Main row: logo left, year right */}
        <div className="footer-main-row">
          <div className="footer-logo-wrapper">
            <img src={logo} alt="Logo" />
          </div>
          <div className="footer-year">
            <p>© 2026 Karen M. Zinzius</p>
            <p>All rights reserved</p>
          </div>
        </div>

        {/* Phone popup */}
        {showPhonePopup && (
          <div className="phone-popup">
            <div className="phone-popup-box">
              <p>Call +49 157 83513882?</p>
              <div className="popup-buttons">
                <a href="tel:+4915783513882" className="call-btn">Call</a>
                <button className="cancel-btn" onClick={() => setShowPhonePopup(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </footer>
  );
};