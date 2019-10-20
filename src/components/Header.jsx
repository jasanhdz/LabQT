import React from 'react';
import './styles/header.css';
import BuapBlue from '../images/buap_blue.png';
import FcqMin from '../images/fcq_logo.png';

const Header = props => {
  const styles = {
    p: {
      marginiLeft: 4,
      color: '#bde5ff',
      fontWeight: 600,
      alignSelf: 'center'
    },
    fccmin: {
      width: 54,
      height: 71,
      backgroundColor: '#bde5ff',
      backgroundBlendMode: 'multiply',
    }
  }
  return (
    <div className="header">
    <div className="wrapper">
      <div style={{display: 'flex'}}>
        <img src={BuapBlue} alt="buap_blue" />
        <div style={{display: 'flex'}}>
          <img src={FcqMin} alt="fccmin" style={styles.fccmin} />
            <p style={styles.p}>Facultad de <br />Cs. Quimicas </p>
        </div>
      </div>

      <nav className="menu" id="listMenu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Example</a>
        </li>
        <li>
          <a href="/">Example</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
        <li>
          <a href="/">Perfil</a>
        </li>
      </nav>
      <span className="icon icon-menu" id="burguerMenu"></span>
      
    </div>
  </div>
  );
};

export default Header;