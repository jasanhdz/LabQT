import React from 'react';
import SignUp from '../components/Signup.jsx';
import HomeLayout from '../components/home-layout.jsx';
import Header from '../components/Header.jsx';
import About from '../components/About.jsx';

class Register extends React.Component {
  constructor() {
    super() 
    this.state = {
      focusActive: true,
    }
  }


/******* Crear Cuenta con Email y Password *******/
  crearAcountEmailPass(email, passsword, names) {
  firebase.auth().createUserWithEmailAndPassword(email, passsword) 
  .then(result => {
    result.user.updateProfile({
      displayName: names
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

    alert(`Bienvenido ${names} debes realizar el proceso de verification.`);

  })
  .catch(error => {
    console.error(error);
    alert(error.message, 4000);
  })
  }

  handleSubmitRegistry = event => {
    event.preventDefault();
    this.email = this.inputLoginEmail.value;
    this.name = this.inputLoginNames.value;
    this.password = this.inputLoginPassword.value;
    console.log(this.password, 'encriptado!');
    this.crearAcountEmailPass(this.email, this.password, this.name);
    window.location.href = 'http://localhost:3000/login';
  }
  render() {
    return (
      <HomeLayout>
        <Header />
        <SignUp
           handleSubmitRegistry={this.handleSubmitRegistry} 
           closeModal={this.closeModal}
           handleFocus={this.handleFocus}
           focusActive={this.state.focusActive}
           removeFocus={this.removeFocus}
           handleClick={this.clickOverlay}
           setRefEmail={this.refInputValueEmailLogin}
           setRefPass={this.refInputValuePasswordLogin}
           setRefNames={this.refInputValueNamesLogin}
           handleLogin={this.handleClickLogin}
        />
        <About />
      </HomeLayout>
    );
  }
}

export default Register;