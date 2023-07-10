import React from 'react'
import { Container } from 'react-bootstrap'
import './App.css';

const About = () => {
  return (
    <Container fluid className='about text-center bg-dark text-light py-5'>
      <h1 className='py-3'>About Me</h1>
      <h2 className='text-primary pb-3'>MERN stack Developer !</h2>
        <div className='px-5 about-para justify-content-space'>
          Hi there! My name is <span className='text-primary'>Chaitali</span> , and I'm a frontend developer with a passion for creating beautiful and responsive user interfaces.
          I've been learning and working with React for the past 6 months, and I'm excited to continue building my skills in this amazing technology.
          As a frontend developer, my goal is to create intuitive and engaging experiences for users.
          I believe that a great user interface can make all the difference in how people interact with a product or service, and that's what motivates me to keep learning and growing in my career.
        </div>
    </Container>
  )
}

export default About
