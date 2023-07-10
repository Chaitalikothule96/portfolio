import React from 'react';
import { AiFillGithub, AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Container, Row, Col, Button } from 'react-bootstrap';
import myImage from './my-img.jpg';
import './App.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const handleDownloadCV = () => {
    // Replace 'path/to/resume.pdf' with the actual URL or path of your PDF file
    const resumeUrl = './resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <Container fluid className='home pt-5'>
      <Row className="justify-content-center py-5">
        <Col xs={12} md={6} lg={4}>
          <div>
            <h2 className="title text-light">Hello, It's Me</h2>
            <h1 className="name text-primary">CHAITALI</h1>
            <h2 className='text-light'>MERN stack Developer Programme</h2>
            <span className="location text-light">@Skill Safari - Coimbatore</span>
            <div className="d-flex my-2">
              <div><a href="https://github.com/Chaitalikothule96"><AiFillGithub className="icon" /></a></div>
              <div><a href="https://instagram.com"><AiOutlineInstagram className="icon" /></a></div>
              <div><a href="https://linkedin.com"><AiFillLinkedin className="icon" /></a></div>
            </div>
            <div className="mt-3">
              <Button variant="primary" onClick={handleDownloadCV}>Download CV</Button>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4} className="text-center my-auto">
          <img src={myImage} alt="My Image" className="image" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
