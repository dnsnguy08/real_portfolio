import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import cms from "../assets/img/projects/CMS.png";
import petSearch from "../assets/img/projects/petSearch.png";
import pokemonBattle from "../assets/img/projects/pokemonBattle.png";
import redditClone from "../assets/img/projects/reddit-clone.png";
import bookSearch from "../assets/img/projects/SearchBooks.png";
import weatherDashboard from "../assets/img/projects/WeatherDashboard.jpg";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "Travel Forum (Reddit-Clone)",
      description: "React, Typescript, Next.js, Firebase",
      imgUrl: redditClone,
      repoUrl: "https://github.com/dnsnguy08/reddit_clone",
    },
    {
      title: "Book Search",
      description: "MERN Stack",
      imgUrl: bookSearch,
      repoUrl: "https://github.com/dnsnguy08/search_for_books",
    },
    {
      title: "Pet Play Date",
      description: "MERN Stack",
      imgUrl: petSearch,
      repoUrl: "https://github.com/project-3-collab/Pawsitive-Pals",
    },
    {
      title: "Content Management System (CMS)",
      description: "Javascript, Inquirer, MySQL",
      imgUrl: cms,
      repoUrl: "https://github.com/dnsnguy08/employee_tracker",
    },
    {
      title: "Weather Dashboard",
      description: "Javascript, JQuery, third-party APIs",
      imgUrl: weatherDashboard,
      repoUrl: "https://github.com/dnsnguy08/weather_forecast_search",
    },
    {
      title: "Pokemon Battle Game",
      description: "Javascript, JQuery, third-party APIs",
      imgUrl: pokemonBattle,
      repoUrl: "https://github.com/dnsnguy08/Pokemon-Battle",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              {/* <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav> */}
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
