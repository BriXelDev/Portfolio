import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <img 
          src="/sources/menu.svg" 
          alt="Menu Icon" 
          className="menu-icon" 
          onClick={handleMenuClick}
          style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
        />
        <h1>BriXelDev</h1>
        <nav>
          <ul>
            <li><a href="#about">Sobre mí</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#certificates">Certificados</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
        <div className="github">
          <a href="https://github.com/BriXelDev" target="_blank" rel="noopener noreferrer">
            <img src="/sources/github-icon-1-logo-svgrepo-com.svg" alt="GitHub Logo" />
          </a>
        </div>
      </header>

      {/* Menú Lateral */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav>
          <ul>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
