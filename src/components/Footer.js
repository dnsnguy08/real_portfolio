import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import githubIcon from "../assets/img/github-mark-white.svg";
import logo from "../assets/img/myLogo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon" id="footer-icons">
              <a
                href="https://www.linkedin.com/in/dennis-nguyen-a19bb9b6/"
                target="_blank"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/dnsnguy08" target="_blank">
                <img src={githubIcon} alt="" />
              </a>
              <a
                href="https://www.facebook.com/dennis.nguyen.100?mibextid=LQQJ4d"
                target="_blank"
              >
                <img src={navIcon2} alt="" />
              </a>
            </div>
            <div className="align-items-center" id="footer-txt">
              <p>Copyright 2023. All Rights Reserved.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
