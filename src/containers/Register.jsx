import React from 'react';
import SignUp from '../components/Signup.jsx';
import HomeLayout from '../components/home-layout.jsx';
import Header from '../components/Header.jsx';
import About from '../components/About.jsx';
import { firebaseConfig } from '../firebase/Configuration'

class Register extends React.Component {
  constructor() {
    super() 
    this.state = {
      focusActive: true,
    }
  }


/******* Crear Cuenta con Email y Password *******/
  createAcountEmailPass(email, passsword, name) {
  firebase.auth().createUserWithEmailAndPassword(email, passsword) 
  .then(result => {
    result.user.updateProfile({
      displayName: name
    })

    const configuration = {
      url : firebaseConfig.url
    }

    result.user.sendEmailVerification(configuration)
    .catch(error => {
      console.error(error);
      alert(error.message, 4000);
    })
    
    firebase.auth().signOut();

    alert(`Bienvenido ${name} debes realizar el proceso de verification.`);
    setTimeout(() => {
      window.location.href = firebaseConfig.redirect
    }, 100);
  })
  .catch(error => {
    console.error(error);
    alert(error.message, 4000);
  })
  }

  handleSubmitRegistry = event => {
    event.preventDefault();
    this.email = this.inputLoginEmail.value;
    this.name = this.inputLoginName.value;
    this.password = this.inputLoginPassword.value;
    console.log(this.password, 'encriptado!');
    this.createAcountEmailPass(this.email, this.password, this.name);
  }

  // Obtenemos el valor de los input
  refInputValueName = event => {
    this.inputLoginName = event;
  }

  refInputValueEmail = event => {
    this.inputLoginEmail = event;
  }

  refInputValuePassword = event => {
    this.inputLoginPassword = event;
  }
// Terminamos de obtener el valor de los input

  render() {
    return (
      <HomeLayout>
        <Header />
        <SignUp
          handleSubmitRegistry={this.handleSubmitRegistry}
          setRefName={this.refInputValueName}
          setRefEmail={this.refInputValueEmail}
          setRefPass={this.refInputValuePassword}
        />
        <About />
      </HomeLayout>
    );
  }
}

export default Register;