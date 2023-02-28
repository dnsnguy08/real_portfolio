import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import airflowIcon from "../assets/img/skills/airflow.svg";
import bqIcon from "../assets/img/skills/bigquery.svg";
import cssIcon from "../assets/img/skills/CSS3.svg";
import htmlIcon from "../assets/img/skills/html5.svg";
import jsIcon from "../assets/img/skills/javascript.svg";
import jenkinsIcon from "../assets/img/skills/Jenkins_logo.svg";
import jiraIcon from "../assets/img/skills/jira.svg";
import lookerIcon from "../assets/img/skills/looker.svg";
import mongoIcon from "../assets/img/skills/mongodb.svg";
import mysqlIcon from "../assets/img/skills/mysql.svg";
import pythonIcon from "../assets/img/skills/python.svg";
import reactIcon from "../assets/img/skills/react.svg";
import sqlIcon from "../assets/img/skills/sql.svg";

export const Skills = () => {
  const responsive = {
    largeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 1024, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                I am a self starter and I'm proud of the skills that I've
                developed throughout my career. Below are a few technologies
                that I'm familiar with. For futher details, please review my
                Resume and feel free to connect with me for more information.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={jsIcon} alt="image" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={reactIcon} alt="image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={htmlIcon} alt="image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={cssIcon} alt="image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={pythonIcon} alt="image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={sqlIcon} alt="image" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={airflowIcon} alt="image" />
                  <h5>Airflow</h5>
                </div>
                <div className="item" id="looker">
                  <img src={lookerIcon} alt="image" />
                  <h5 id="looker-text">Looker</h5>
                </div>
                <div className="item">
                  <img src={bqIcon} alt="image" />
                  <h5>BigQuery</h5>
                </div>
                <div className="item">
                  <img src={jiraIcon} alt="image" />
                  <h5>Jira</h5>
                </div>
                <div className="item">
                  <img src={jenkinsIcon} alt="image" />
                  <h5>Jenkins</h5>
                </div>
                <div className="item">
                  <img src={mongoIcon} alt="image" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={mysqlIcon} alt="image" />
                  <h5>MySQL</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
