import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const ProjectCard = ({ project }) => {
  const fontStyle = { fontWeight: "bold" };
  const { name, message, alt, imageLink, git, deploy, languages } = project;
  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Img variant="top" src={imageLink} height="300" alt={alt} />
        <Card.Body height="300">
          <Card.Title as="h5">{name}</Card.Title>
          <Card.Text>{message}</Card.Text>
          <CardButtons deploy={deploy} git={git} />
          <hr />
          <p style={fontStyle}>👏Languages : {languages}</p>
        </Card.Body>
      </Card>
    </Col>
  );
};

const CardButtons = ({ deploy, git }) => {
  return (
    <>
      <a
        href={deploy}
        target="_blank"
        className="btn btn-outline-secondary mr-3"
      >
        <i className="fas fa-external-link-alt" /> deploy
      </a>
      <a href={git} target="_blank" className="btn btn-outline-secondary">
        <i className="fab fa-github" /> github
      </a>
    </>
  );
};

export default ProjectCard;
