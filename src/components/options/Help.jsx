import React from 'react';
import HelpLogo from '../../assets/menu/ayuda.png';
import './help.css';

const Help = () => {
  return (
    <span>
      <img className="Ayuda" src={HelpLogo} alt="Ayuda"/>
    </span>
  );
}

export default Help;