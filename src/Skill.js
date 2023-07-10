import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';

const Skills = () => {
  return (
    <Container fluid className='skill-f pb-5'>
    <div className="skills-container">
      <h1 className='text-center text-light py-5'>Skills</h1>
      <div className="skills-list">
        <div className="skill">
          <i className="fas fa-code"></i>
          <h2 className='text-primary'>Web Development</h2>
          <p>
            I have experience in building responsive web applications using HTML, CSS, and JavaScript. I'm proficient in front-end frameworks like React , CodeIgniter, CorePhp and have knowledge of back-end technologies such as Node.js. Express.js
          </p>
        </div>
        <div className="skill">
          <i className="fas fa-paint-brush"></i>
          <h2 className='text-primary'>UI/UX Design</h2>
          <p>
            I have a keen eye for design and enjoy creating user-friendly interfaces. I use tools like Sketch and Figma to create wireframes, prototypes, Wordpress, Shopify and visually appealing designs.
          </p>
        </div>
        <div className="skill">
          <i className="fas fa-database"></i>
          <h2 className='text-primary'>Database Management</h2>
          <p>
            I'm experienced in working with databases like MongoDB and MySQL. I can design and optimize database schemas, write efficient queries, and ensure data integrity.
          </p>
        </div>
      </div>
      
      
    </div>
    </Container>
  );
};

export default Skills;
