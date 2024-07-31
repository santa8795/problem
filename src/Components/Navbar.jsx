import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="py-2 bg-body-tertiary border-bottom">
      <div className="container d-flex flex-wrap">
        <ul className="nav me-auto fs-5 fw-bold">
          <li className="nav-item">
            <Link to="/" className="nav-link link-body-emphasis px-2 active" aria-current="page">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/skill" className="nav-link link-body-emphasis px-2">Skill</Link>
          </li>
        </ul>
        <div className="nav fs-3 fw-bold">
          <b>PortFolio</b>
        </div>
      </div>
    </nav>
  );
}
