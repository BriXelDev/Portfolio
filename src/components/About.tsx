import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const About: React.FC = () => {
  return (
    <ScrollAnimation animation="slideUp">
      <section id="about" className="section">
        <div className="content">
          <h2>Sobre mí</h2>
          <p>
            Soy Brian, Ingeniero de Software con enfoque en desarrollo web, APIs RESTful y sistemas distribuidos. 
            Me encanta crear soluciones simples para problemas complejos y trabajar con tecnologías modernas como 
            Python, Flask, Docker y PostgreSQL.
          </p>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default About;
