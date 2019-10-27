import React from 'react';
import LoginComponent from '../components/Login.jsx';
import HomeLayout from '../components/home-layout.jsx';
import Header from '../components/Header.jsx';
import About from '../components/About.jsx';
import { firebaseConfig } from '../firebase/Configuration/';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor() {
    super();
    this.db = firebase.firestore();
    // const settings = { timestampsInSnapshots: true } 
    this.db.settings({});
  }

  // Métodos para acceder a los Servicios de Firebase
  // **** Servicios de Autenticación ****
  // Autentication for Google

  authAccoundGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    
    firebase.auth().signInWithPopup(provider)
      .then(result => {
        this.props.dispatch({
          type: 'LOGIN',
          payload: {
            uriProfile: result.user.photoURL,
            userName: result.user.displayName,
          }
        })
        this.props.history.push('/');
    })
    .catch(error => {
      console.error(error);
      alert('Error al authenticarce con Google');
    })
  }

   // Auntenticación con Facebook 
   authAccoundFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => {

        this.props.history.push('/');
      // window.location.href = firebaseConfig.url
      console.log(result.user, 'usuarioLogin');
    })
    .catch(error => {
      console.error(error);
      alert('Error al authenticarce con Facebook');
    })
  }

  // Autenticación con Email y Password
  authEmailPass(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(result => {
      if (result.user.emailVerified) {

        this.props.history.push('/');
      } else {
        firebase.auth().signOut();
        alert(`Por favor realiza la verificación de la cuenta`)
      }
    })
  }

// Referencia al cambio de el value de los input
  refInputEmail = event => {
    this.inputEmail = event;
  }
  refInputPassword = event => {
    this.inputPassword = event;
  }
// Fin de referencia a los input

  handleSubmit = e => {
    e.preventDefault();
    console.log('Enter');
    this.email = this.inputEmail.value;
    this.password = this.inputPassword.value;
    console.log(this.email);
    console.log(this.password);
    this.authEmailPass(this.email, this.password);
    
  }

  loginWhitGoogle = e => {
    console.log('enter');
    this.authAccoundGoogle();
  }

  loginWithFacebook = e => {
    console.log('enter');
    this.authAccoundFacebook()
  }
  
  render() {
    return (
      <HomeLayout>
        <Header />
        <LoginComponent
          setRefEmail={this.refInputEmail}
          setRefPass={this.refInputPassword}
          handleSubmit={this.handleSubmit}
          loginWhitGoogle={this.loginWhitGoogle}
          loginWithFacebook={this.loginWithFacebook}
        />
        <About />
      </HomeLayout>
    );
  }
};

export default connect()(Login);