import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const ProjectCard = ({ project }) => {
  const fontStyle = { fontWeight: 'bold', padding: '20px', background: '#e2e2e2', borderRadius: '15px' };
  const { id, name, message, message1, alt, imageLink, git, deploy, languages } = project;
  return (
    <Col md={6}>
      <Card className='card shadow-lg p-4 mb-4 bg-white rounded'>
        <Card.Img variant='top' src={imageLink} style={{ width: '100%' }} height='300' alt={alt} />
        <Card.Body style={{ height: '300px' }}>
          <Card.Title as='h5'>{name}</Card.Title>
          <Card.Text>
            <div>{message}</div>
            <div>{message1}</div>
          </Card.Text>
          <CardButtons deploy={deploy} git={git} id={id} />
          <hr />
          <p style={fontStyle}>{languages}</p>
        </Card.Body>
      </Card>
    </Col>
  );
};

const CardButtons = ({ deploy, git, id }) => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    switch (id) {
      case 3:
      case 2:
      case 7:
        setVisible(false);
        break;
      default:
        break;
    }
  }, []);

  return (
    <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
      {visible && (
        <a style={{ width: '100%' }} href={deploy} target='_blank' className='btn btn-outline-secondary mr-3'>
          <i className='fas fa-external-link-alt' /> deploy
        </a>
      )}
      <a style={{ width: '100%' }} href={git} target='_blank' className='btn btn-outline-secondary'>
        <i className='fab fa-github' /> github
      </a>
    </div>
  );
};

export default ProjectCard;
