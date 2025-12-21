import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <img src="/sources/menu.svg" alt="Menu Icon" className="menu-icon" />
      <h1>BriXelDev</h1>
      <nav>
        <ul>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
          <li><a href="#certificates">Certificados</a></li>
        </ul>
      </nav>
      <div className="github">
        <a href="https://github.com/BriXelDev" target="_blank" rel="noopener noreferrer">
          <img src="/sources/github-icon-1-logo-svgrepo-com.svg" alt="GitHub Logo" />
        </a>
      </div>
    </header>
  );
};

export default Header;
