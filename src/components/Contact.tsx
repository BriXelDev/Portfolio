import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const Contact: React.FC = () => {
  return (
    <ScrollAnimation animation="slideUp">
      <section id="contact" className="section">
        <div className="content">
          <h2>Contacto</h2>
          <p>
            ¿Te interesa trabajar conmigo o colaborar en algún proyecto? Puedes escribirme a{' '}
            <strong>brixeldev@gmail.com</strong> o a través de mi{' '}
            <a href="https://github.com/BriXelDev" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>.
          </p>
          <p>
            También puedes mandar un mensaje de WhatsApp al <strong>+52 55 1306 1566</strong>.
          </p>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Contact;
