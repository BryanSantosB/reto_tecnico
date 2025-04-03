import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary shadow">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/buses">
          <i className="bi bi-house-door-fill fs-4 me-2"></i>
        </Link>
        
        <button 
          className="navbar-toggler border-secondary" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavDropdown" 
          aria-controls="navbarNavDropdown" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link 
                className="nav-link dropdown-toggle d-flex align-items-center" 
                to="/buses" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                <i className="bi bi-bus-front me-2"></i>
                Bus
              </Link>
              <ul className="dropdown-menu dropdown-menu-dark border-secondary">
                <li>
                  <Link className="dropdown-item d-flex align-items-center" to="/buses">
                    <i className="bi bi-list-ul me-2"></i>
                    Lista de buses
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item d-flex align-items-center" to="/buses/create">
                    <i className="bi bi-plus-circle me-2"></i>
                    Crear bus
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item d-flex align-items-center" to="/buses/search">
                    <i className="bi bi-search me-2"></i>
                    Buscar bus
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/dashboard">
                <i className="bi bi-speedometer2 me-2"></i>
                Dashboard
              </Link>
            </li>
          </ul>
          
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/settings">
                <i className="bi bi-gear me-2"></i>
                Configuración
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-info d-flex align-items-center" to="/logout">
                <i className="bi bi-box-arrow-right me-2"></i>
                Salir
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Header;