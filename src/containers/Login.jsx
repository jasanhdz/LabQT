import React from 'react';
import LoginComponent from '../components/Login.jsx';
import HomeLayout from '../components/home-layout.jsx';
import Header from '../components/Header.jsx';
import About from '../components/About.jsx';

class Login extends React.Component {
  constructor() {
    super();
    this.db = firebase.firestore();
    const settings = { timestampsInSnapshots: true } 
    this.db.settings(settings);

    this.state = {
      focusActive: true,
      registry: true,
      login: false
    }
  }

  handleFocus = event => {
    this.setState({
      focusActive: 'Labelactive'
    })
  }
  removeFocus = event => {
    this.setState({
      focusActive: null,
    })
  }

  // Métodos para acceder a los Servicios de Firebase
  // **** Servicios de Autenticación ****
  // Autentication for Google

  authAccoundGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    
    firebase.auth().signInWithPopup(provider)
    .then(result => {
        this.setState({
          uriProfile: result.user.photoURL,
          modalVisibility: false,
          user: result.user.displayName
        })
        
        console.log(result.user.displayName, 'usuarioLogin');
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
      this.setState({
        uriProfile: result.user.photoURL,
        modalVisibility: false,
        user: result.user.displayName
      })

      console.log(result.user, 'usuarioLogin');
    })

    .catch(error => {
      console.error(error);
      alert('Error al authenticarce con Facebook');
    })
  }

  // Autenticación con Email y Password
  autEmailPass(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(result => {
      if(result.user.emailVerified) {
        // alert(`Bienvenido ${result.user.displayName}`);
        this.setState({
          ImgProfile: true,
          user: result.user.displayName,
          modalVisibility: false
        })
      } else {
        firebase.auth().signOut();
        alert(`Por favor realiza la verificación de la cuenta`)
      }
    })
  }

  /******* Crear Cuenta con Email y Password *******/
  crearAcountEmailPass(email, passsword, names) {
    firebase.auth().createUserWithEmailAndPassword(email, passsword) 
    .then(result => {
      result.user.updateProfile({
        displayName: names
      })

      const configuration = {
        url : 'http://localhost:3000/'
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


  refInputValueEmailLogin = event => {
    this.inputLoginEmail = event;
  }
  refInputValueNamesLogin = event => {
    this.inputLoginNames = event;
  }
  refInputValuePasswordLogin = event => {
    this.inputLoginPassword = event;
  }

  loginWithGoogle = event => {
    this.authAccoundGoogle()
    console.log('vamos')
  }

  loginWithFacebook = event => {
    this.authAccoundFacebook();
  }
  
  handleClickRegistry = event => {
    this.setState({
      registry: true,
      login: false
    })
  }

  onSubmit = event => {
    event.preventDefault();
    this.email = this.inputLoginEmail.value;
    this.password = this.inputLoginPassword.value;
    this.autEmailPass(this.email, this.password);
    window.location.href = "http://localhost:3000/";
  }

  render() {
    return (
      <HomeLayout>
        <Header />
        <LoginComponent
          
        />
        <About />
      </HomeLayout>
    );
  }
};

export default Login;