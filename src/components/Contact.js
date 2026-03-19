import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [buttonText, setButtonText] = useState(t("contact.send"));
  const [status, setStatus] = useState({});
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText(t("contact.sending"));
    setSending(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(() => {
        setStatus({ success: true, message: t("contact.sent") });
        setButtonText(t("contact.sent"));
        form.current.reset();
        setTimeout(() => {
          setStatus({});
          setButtonText(t("contact.send"));
        }, 2000);
        setSending(false);
      })
      .catch(() => {
        setStatus({ success: false, message: t("contact.notSent") });
        setButtonText(t("contact.notSent"));
        setTimeout(() => {
          setStatus({});
          setButtonText(t("contact.send"));
        }, 2000);
        setSending(false);
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact"
                />
              )}
            </TrackVisibility>
          </Col>

          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <h2>{t("contact.title")}</h2>
                  <form ref={form} onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="firstName" placeholder={t("contact.firstName")} required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="lastName" placeholder={t("contact.lastName")} required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" name="email" placeholder={t("contact.email")} required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" name="phone" placeholder={t("contact.phone")} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" name="message" placeholder={t("contact.message")} required></textarea>
                        <button type="submit" disabled={sending}>
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p className={status.success ? "success" : "danger"}>{status.message}</p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};