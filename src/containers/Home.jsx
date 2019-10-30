import React from 'react';
import HomeLayout from '../components/home-layout.jsx';
import Header from '../components/Header.jsx';
import About from '../components/About.jsx';
import SubHeader from '../components/subHeader.jsx';
import { connect } from 'react-redux';
import Chat from './Chat.jsx';
import Menu_Before from '../components/menu_before.jsx';
import Publication from './Publications.jsx';

import Help from '../components/options/Help.jsx';
import Paint from '../components/options/escribir.jsx'; 

class Home extends React.Component {
  constructor() {
    super();
    this.db = firebase.firestore();
    this.db.settings({});
    this.header = [
      {
        title: 'Programas',
        link: '/servicio-social'
      },
      {
        title: 'Servicios',
        link: '/practicas'
      },
      {
        title: 'Ciencia',
        link: '/ciencia'
      },  
    ]
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
  
  refMenuBefore = e => {
    this.props.dispatch({
      type: 'REF_CHAT_BUTTON',
      payload: {
        htmlMenuBefore: e,
      }
    })
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
    console.log('aqi....' + this.props);
    console.log(this.props.history);
    return (
      <HomeLayout>
        <Header
          links={this.header}
          history={this.props.history}
        />
        <SubHeader />
        <Publication />
        <About />
        <Menu_Before
          history={this.props.history}
          refMenuBefore={this.refMenuBefore}
        >
        <Help />
        <Paint />
        <Chat
          history={this.props.history}
        />
        </Menu_Before>
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
