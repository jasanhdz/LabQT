import React from 'react';
import HomeLayout from '../components/home-layout.jsx';
import Header from '../components/Header.jsx';
import Chat from './Chat.jsx';
import Footer from '../components/Footer.jsx';
import Login from '../components/Login.jsx';
import About from '../components/About.jsx';
import SingUp from '../components/Signup.jsx';
import Post from './Post.jsx';
import { firebaseConfig } from './../Firebase/Configuration'
import SubHeader from '../components/subHeader.jsx';

class Home extends React.Component {
  constructor() {
    super();
    this.db = firebase.firestore();
    const settings = { timestampsInSnapshots: true }
    this.db.settings(settings);

    this.state = {
      modalPostActive: true,
      modalVisibility: true,
      ImgProfile: false,
    }
  }

  async checkAllPost() {
    await this.db.collection('posts')
    .orderBy('date', 'asc')
    .orderBy('title', 'asc')
    .onSnapshot(querySnapshot => {
     if(querySnapshot) {
       let data = [];
         querySnapshot.forEach(element => {
           data.push(element.data());
       })
       this.setState({
         payload: data,
         
       })
       // console.log('Soy yo :)', this.state.payload);
     } else {
       console.log('No hay Posts............... :(');
     }
   })
 }

 async checkPostByUser(emailUser) {
  await this.db.collection('posts')
  .orderBy('date', 'asc')
  .where('author', '==', emailUser)
  .onSnapshot(querySnapshot => {
    if(querySnapshot) {
      let data = [];
        querySnapshot.forEach(element => {
          data.push(element.data());
      })
      this.setState({
        payload: data,
        
      })
      // console.log('Soy yo :)', this.state.payload);
    } else {
      console.log('No hay Posts............... :(');
    }
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
  
    // Observador del cambio de Sesión en el browser
    async componentDidMount() {
      firebase.auth().onAuthStateChanged(user => {
        if(user) {
          // console.log('existe un usuario');
          // console.log(user.photoURL, 'aqui.....');
          if(user.photoURL) {
              this.setState({
                uriProfile: user.photoURL,
                user: user.displayName
              })
          } 
        }
      })
      await this.checkAllPost();
  }
  
  // Llamamos a la función Salir de sesión desde el botón SignOut que se carga al hacer Login.
  Signout = event => {
    const user = firebase.auth().currentUser;
    if(user) {
      return firebase.auth().signOut().then(() => {
        this.setState({
          ImgProfile: false,
          uriProfile: null,
          user: null
        })
        alert(`Salimos de la sesión correctamente!`);
      })
    } else {
      alert('No tenemos niguna sesión actualmente!');
    }
  }


  handleClickModal = e => {
    console.log('Me hiciste un Click :O');
    this.setState({
      modalVisibility: true
    });
  }

  closeModal = event => {
    this.setState({
      modalVisibility: false
    })
    console.log('click', this.state.modalVisibility);
  }

  render() {
    return (
      <HomeLayout>
        <Header />
        {/* <Login /> */}
        {/* <SingUp /> */}
        <SubHeader
          closeModal={this.handleClickModal}
        />
        {/* <Chat /> */}
        <Post
          modalVisibility={this.state.modalVisibility}
          modalPostActive={this.state.modalPostActive}
          closeModal={this.closeModal}
          payload={this.state.payload}
        />
        <About />
        {/* <Footer /> */}
      </HomeLayout>
    )
  }
};

export default Home;