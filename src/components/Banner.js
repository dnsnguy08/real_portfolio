import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import headerImg from "../assets/img/header-img.svg";
import profileImg from "../assets/img/profile.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0); // state starts at first word
  const [isDeleting, setIsDeleting] = useState(false); // state of word being deleted
  const toRotate = ["Full Stack", "Test", "Data"];
  const [text, setText] = useState("");
  const period = 1750; // transition time between each word
  const [delta, setDelta] = useState(300 - Math.random() * 100); // determine how fast letters appear

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]); // run effect after text is updated

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <Router>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                {`Hi I'm Dennis Nguyen`}
                <div className="wrap"> {text}</div>
                <div>Engineer</div>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <HashLink to="#connect">
                <button id="connectBtn" onClick={() => console.log("connect")}>
                  Let's Connect <ArrowRightCircle size={25} />
                </button>
              </HashLink>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={profileImg} alt="header img"></img>
            </Col>
          </Row>
        </Container>
      </section>
    </Router>
  );
};
