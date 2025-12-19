import React from 'react';
import type { Certificate } from '../types';
import { certificates } from '../data/certificates';

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="section">
      <div className="content">
        <h2>Certificados</h2>
        <div className="certificate-list">
          {certificates.map((cert: Certificate, index: number) => (
            <div key={index} className="certificate-card">
              <h3>{cert.title}</h3>
              <p>{cert.institution} · {cert.year}</p>
              <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
                Ver certificado
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
