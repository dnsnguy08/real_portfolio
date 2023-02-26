import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import resume from "../assets/img/resume/DennisNResume.pdf";

export const Resume = () => {
  //   const content = "data:application/pdf;base64,<base64 PDF content string>";
  //   const linkSource = content;
  //   const downloadLink = document.createElement("a");
  //   const fileName = resume;
  //   downloadLink.href = linkSource;
  //   downloadLink.download = fileName;
  //   const handleClick = downloadLink.click();
  return (
    <section className="resume" id="resume">
      <Container>
        <Row>
          <Col>
            <div className="resume-bx">
              <h2>Resume</h2>
              <p>About Resume</p>
              <embed
                src={resume}
                className="resume align-self-center"
                allowFullScreen={true}
                frameBorder="0"
                type="application/pdf"
                // onClick={() => handleClick()}
              ></embed>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
