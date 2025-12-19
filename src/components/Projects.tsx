import React from 'react';
import type { Project } from '../types';
import { projects } from '../data/projects';
import ScrollAnimation from './ScrollAnimation';

const Projects: React.FC = () => {
  return (
    <ScrollAnimation animation="slideUp">
      <section id="projects" className="section alt">
        <div className="content">
          <h2>Proyectos</h2>
          <div className="project-list">
            {projects.map((project: Project, index: number) => (
              <ScrollAnimation key={index} animation="slideUp" delay={index * 100}>
                <div className="project-card">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p><strong>Tecnologías:</strong> {project.technologies}</p>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    Ver en {project.githubUrl.includes('gitlab') ? 'GitLab' : 'GitHub'}
                  </a>
                  {project.liveUrl && (
                    <>
                      {' '}
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        Ver online
                      </a>
                    </>
                  )}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Projects;
