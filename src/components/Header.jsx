import React from "react";
import "./styles/header.css";
import BuapBlue from "../assets/images/buap_blue.png";
import react from "../assets/images/react-logo.png";
import { Link } from 'react-router-dom';
import BurgerMenu from '../assets/menu/menu_white.png';
import { connect } from "react-redux";
require('dotenv').config();


class Header extends React.Component {

   burgerMenuClick = e => {
    this.headerMenu.classList.toggle('active');
     this.burgerButton.classList.toggle('active');
     if (this.props.chatButton) {
       this.props.chatButton.classList.toggle('before');
     }
  }

  refHeaderMenu = e => {
    this.headerMenu = e;
  }

  refBurgerButton = e => {
    this.burgerButton = e;
  }

  logOut = e => {
    if (this.props.user) {
      firebase.auth().signOut()
        .then(() => {
          this.props.history.push(process.env.PUBLIC_URL + '/');
        })
        .catch(error => {
          alert(error);
      })
    } else {
      alert('No haz iniciado sesión :p');
    }
  }

  render() {
    console.log('0000000000000');
    console.log(this.props.chatButton);
    return (
      <div className="header">
  
        <div className="Logos">
          <img className="BuapLogo" src={BuapBlue} alt="" set="" />
          
          <div className="Content__QT">
            <img src={react} alt="" className="React"/>
            <p className="Logo__Name">Laboratorio de <br />
              Química Teorica
            </p>
          </div>
  
        </div>
  
        <span ref={this.refBurgerButton} onClick={this.burgerMenuClick} className="Burger__Menu">
          <img src={BurgerMenu}></img>
          </span>
  
        <nav ref={this.refHeaderMenu} className="menu" id="listMenu">
          {
            this.props.links.map((link, index) => {
              return (
                <li key={index}>
                  <Link to={process.env.PUBLIC_URL + link.link}>{link.title}</Link>
                </li>
              )
            })
          }
            <li>
              <a href={process.env.PUBLIC_URL + "#footer"}>Más...</a>
          </li>
          <li onClick={this.logOut}>Logout</li>
        </nav>
    
      </div>
    );
  }
};

function mapStateToProps(state, action) {
  return {
    chatButton: state.get('modal').get('htmlbutton'),
    user: state.get('data').get('user').get('uid')
  }
}

export default connect(mapStateToProps)(Header);
