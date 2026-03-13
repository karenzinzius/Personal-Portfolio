import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    setSending(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(() => {
        setStatus({ success: true, message: "Sent!" });
        setButtonText("Sent!");

        form.current.reset();

        setTimeout(() => {
          setStatus({});
          setButtonText("Send");
        }, 2000);

        setSending(false)
      })
      .catch(() => {
        setStatus({ success: false, message: "Not sent!" });
        setButtonText("Not sent!");

        setTimeout(() => {
          setStatus({});
          setButtonText("Send");
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
                  <h2>Get In Touch</h2>

                  <form ref={form} onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="firstName" placeholder="First Name" required />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="lastName" placeholder="Last Name" required />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input type="email" name="email" placeholder="Email Address" required />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" name="phone" placeholder="Phone No." />
                      </Col>

                      <Col size={12} className="px-1">
                        <textarea rows="6" name="message" placeholder="Message" required></textarea>

                        <button type="submit" disabled={sending}>
                          <span>{buttonText}</span>
                        </button>
                      </Col>

                      {status.message && (
                        <Col>
                          <p className={status.success ? "success" : "danger"}>
                            {status.message}
                          </p>
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