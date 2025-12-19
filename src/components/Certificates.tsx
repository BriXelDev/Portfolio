import React from 'react';
import type { Certificate } from '../types';
import { certificates } from '../data/certificates';
import ScrollAnimation from './ScrollAnimation';

const Certificates: React.FC = () => {
  return (
    <ScrollAnimation animation="slideUp">
      <section id="certificates" className="section">
        <div className="content">
          <h2>Certificados</h2>
          <div className="certificate-list">
            {certificates.map((cert: Certificate, index: number) => (
              <ScrollAnimation key={index} animation="slideUp" delay={index * 100}>
                <div className="certificate-card">
                  <h3>{cert.title}</h3>
                  <p>{cert.institution} · {cert.year}</p>
                  <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
                    Ver certificado
                  </a>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Certificates;
