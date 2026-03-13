import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/navIcon1.svg";
import navIcon2 from "../assets/img/navIcon2.svg";
import navIcon3 from "../assets/img/navIcon3.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
           <Col md={4} className="footer-logo">
              <img src={logo} alt="Logo" />
            </Col>
          <Col xs={12} md={4} className="footer-icons text-center">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/karenzinzius/"><img src={navIcon1} alt="Icon" /></a>
              <a href='https://github.com/karenzinzius'><img src={navIcon2} alt="Icon" /></a>
              <a href="Tel:+4915783513882"><img src={navIcon3} alt="Icon" /></a>
            </div>
          </Col>
          <Col xs={12} md={4} className="footer-text text-center text-md-end text-sm-end text-xs-end">
            <p>© 2026 Karen M. Zinzius</p>
            <p>All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}