import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import { projects } from "../../editable-stuff/config.js";

const Project = () => {
  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="p-5">
        <h2 className="display-4 pb-5 text-center">{projects.heading}</h2>
        <Row>
          {projects.projects.map((project, index) => {
            return <ProjectCard key={index} project={project} />;
          })}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
