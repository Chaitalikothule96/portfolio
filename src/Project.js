import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import project1Image from './my-img.jpg';
import project2Image from './my-img.jpg';
import project3Image from './my-img.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat fringilla nibh in bibendum.',
      image: project1Image,
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Sed gravida risus vel malesuada auctor. Ut dignissim aliquet magna, sed congue sapien varius nec.',
      image: project2Image,
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Pellentesque a nulla in nibh auctor sollicitudin. Maecenas eu lobortis mauris. Sed et dolor velit.',
      image: project3Image,
    },
  ];

  return (
    <Container fluid className="projects">
      <h1 className="text-center mb-5">Projects</h1>
      <Row>
        {projects.map((project) => (
          <Col key={project.id} xs={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
