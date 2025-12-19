import type { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'InventAPI - API de Inventario',
    description: 'API REST para gestionar productos, con Redis para cacheo y Swagger para documentación.',
    technologies: 'Flask, PostgreSQL, Redis, Docker',
    githubUrl: 'https://github.com/BriXelDev/InventAPI'
  },
  {
    title: 'InventarioSCOMM - API visual para manejar inventario',
    description: 'API REST para gestionar manejo eficiente de productos con sistema visual integrado. Incluye autenticación por roles, listo para escalar en la nube si así se desea.',
    technologies: 'Python, HTML, JavaScript, CSS, Docker',
    githubUrl: 'https://github.com/BriXelDev/InventarioSCOMM'
  },
  {
    title: 'Calculadora Dual - Básica y Científica',
    description: 'Calculadora online que sirve para realizar muchos cálculos básicos y científicos.',
    technologies: 'JavaScript, HTML, CSS',
    githubUrl: 'https://github.com/BriXelDev/Calculadora',
    liveUrl: 'https://startling-gnome-fb8be1.netlify.app/'
  },
  {
    title: 'Soli-Librería - Donde cada libro ilumina tu día',
    description: 'Plataforma web para compartir libros y fomentar la lectura en la comunidad.',
    technologies: 'TypeScript, React, Java, Maven, Spring Boot, PostgreSQL, AWS, Google Cloud, Azure',
    githubUrl: 'https://gitlab.com/soli-tarios/Soli/-/tree/main'
  }
];
