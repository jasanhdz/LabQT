import React from 'react';
import './styles/footer.css';
import logoBuap from '../assets/images/logo_buap.png';
// import logoReact from '../images/react-logo.png'

const Footer = props => {
  return (
    <footer className="footer">
      <form className="form">

        <div className="item logos">
          
          <div className="Footer_container">
            <img src={logoBuap} alt="logobuap" width="170px" height="45px" />
          </div>
          
            {/* <img src={logoReact} alt="logoReact" width="16%" height="27%" /> */}
          <p className="direction">Laboratorio de Química Teórica
          Facultad de Ciencias Químicas<br />
          Benemérita Universidad Autónoma de Puebla<br />
          Edificio FCQ 10 Ciudad Universitaria, Puebla, Puebla México 72570
          </p>
            
          <p className="email">Email:<br /> profesorsfcq@buap.com.mx </p>

        </div>
              
        {/* <div className="item information">
          <p>Boletin</p>
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>

        <div className="item description">
          <p>Comentarios</p>
          <textarea name="comentarios" id="" cols="30" rows="10"></textarea>
          <button className="btn sbm" type="submit">Enviar</button>
        </div> */}

      </form>
  </footer>
  );
};

export default Footer;