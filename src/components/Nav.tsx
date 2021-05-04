import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="navbar-nav">
        <NavLink exact to="/" className="nav-item nav-link">Accueil</NavLink>
        <NavLink to="/users" className="nav-item nav-link">Utilisateurs</NavLink>
      </div>
    </nav>
  );
}

export { Nav }