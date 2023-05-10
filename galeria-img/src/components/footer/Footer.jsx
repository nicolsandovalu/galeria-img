// src/components/Footer.jsx

import React from 'react';
import './Footer.css';
// import { Badge } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='text-center'>
      <p>Galería de imágenes creada con React y  Bootstrap</p>
   
      <span className="badge text-bg-warning">Hecho por Nicol Sandoval</span>
    </footer>
  );
};

export default Footer;