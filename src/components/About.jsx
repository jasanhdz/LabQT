import React from 'react';
import { Link } from 'react-router-dom';
require('dotenv').config

const About = () => {
  return (
    <footer id="footer" className="Footer">
      <Link to={process.env.PUBLIC_URL + '/uso'}>Terminos de uso</Link>
      <Link to={process.env.PUBLIC_URL + '/privacidad'}>Declaración de privacidad</Link>
      <Link to={process.env.PUBLIC_URL + '/ayuda'}>Centro de ayuda</Link>
    </footer>
  );
};

export default About;
