import React from 'react';
import HomeLayout from '../components/home-layout.jsx';
import Header from '../components/Header.jsx';
import About from '../components/About.jsx';
import SubHeader from '../components/subHeader.jsx';
import { connect } from 'react-redux';
import Chat from './Chat.jsx';
import Publication from './Publications.jsx';

class Home extends React.Component {
  constructor() {
    super();
    this.db = firebase.firestore();
    this.db.settings({});
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

  windowListener() {
    this.consulta = window.matchMedia('(max-width: 900px)');
    this.consulta.addListener(() => {
      if (this.consulta.matches) {
        console.log('Se cumplio la condición');
      } else {
        console.log('no se cumplio la condición');
      }
    });
  }

  async componentDidMount() {
    this.windowListener();
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // console.log(user.displayName);
        this.props.dispatch({
          type: 'LOADING_USER',
          payload: {
            userName: user.displayName,
            email: user.email,
            uriProfile: user.photoURL,
            emailVerified: user.emailVerified,
            uid: user.uid,
          }
        });
      }
    })
  }

  render() {
    console.log(this.props.user);
    return (
      <HomeLayout>
        <Header />
        <SubHeader />
        <Publication />
        <About />
        <Chat
          
        />
      </HomeLayout>
    )
  }
};

function mapStateToProps(state, props) {
  return {
    user: state.get('data').get('user'),
  }
}

export default connect(mapStateToProps)(Home);
