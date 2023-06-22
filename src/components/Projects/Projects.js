import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import takenotes from "../../Assets/Projects/Takenotes.svg";
import movienight from "../../Assets/Projects/movienight.svg";
import coolBeans from "../../Assets/Projects/Coolbeans.svg";
import pawfriends from "../../Assets/Projects/pawfriends.svg";
import weather from "../../Assets/Projects/weatherapp.svg";
import employeetracker from "../../Assets/Projects/employeetracker.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few things I've worked on previously.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coolBeans}
              isBlog={false}
              title="Cool Beans"
              description="Full-stack MERN E-commerce application for coffee enthusiasts. Collaborated on building a feature-rich platform which includes the Stripe API for seamless payment"
              ghLink="https://github.com/calebcarnett/Cool-Beans"
              demoLink="https://cool-beans-ecommerce.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pawfriends}
              isBlog={false}
              title="Paw Friends"
              description="Full-stack MVC application facilitating pet adoption. Codeveloped and deployed an MVC-based application allowing users to use full CRUD operations."
              ghLink="https://github.com/calebcarnett/pawfriends"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movienight}
              isBlog={false}
              title="Movie Night"
              description="Co-created a web app that fetches movie facts and trailers using Youtube and OMDB RESTful APIs, allowing users to search for movies and TV shows, and save their search history."
              ghLink="https://github.com/calebcarnett/Movie-Night"
              demoLink="https://calebcarnett.github.io/Movie-Search-Application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employeetracker}
              isBlog={false}
              title="Employee Tracker"
              description="TrackMyEmployees is a content management system(CMS) to manage a company's employee database ran on the command line in a computer terminal, using Node.js, Inquirer, and MySQL."
              ghLink="https://github.com/calebcarnett/TrackMyEmployees"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={takenotes}
              isBlog={false}
              title="Take Notes"
              description="This is a web application that is designed write and save your study notes! Study notes are saved to your local storage."
              ghLink="https://github.com/calebcarnett/Take-Notes"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Tracker"
              description="This project challenged me to use third party APIS and use CSS knowledge of flexboxes to create a responsive design without using a CSS framework. "
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://calebcarnett.github.io/Weather-App/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
