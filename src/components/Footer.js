import { Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/navIcon1.svg";
import navIcon2 from "../assets/img/navIcon2.svg";
import navIcon3 from "../assets/img/navIcon3.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  const [showPhonePopup, setShowPhonePopup] = useState(false);

  return (
    <footer className="footer">
      <Container>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/karenzinzius/">
            <img src={navIcon1} alt="" />
          </a>
          <a href="https://github.com/karenzinzius">
            <img src={navIcon2} alt="" />
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); setShowPhonePopup(true); }}>
            <img src={navIcon3} alt="" />
          </a>
        </div>

        <div className="footer-main-row">
          <div className="footer-logo-wrapper">
          <img src={logo} alt="Logo" />
        </div> 
        <div className="footer-year">
          <p>© 2026 Karen M. Zinzius</p>
          <p>{t("footer.rights")}</p>
          </div>
        </div>

        {showPhonePopup && (
        <div className="phone-popup">
          <div className="phone-popup-box">
            <p>{t("footer.callPrompt")}</p>
            <div className="popup-buttons">
              <a href="tel:+4915783513882" className="call-btn">
                {t("footer.call")}
              </a>
              <button
                className="cancel-btn"
                onClick={() => setShowPhonePopup(false)}
              >
                {t("footer.cancel")}
              </button>
            </div>
          </div>
        </div>
      )}
      </Container>
    </footer>
  );
};