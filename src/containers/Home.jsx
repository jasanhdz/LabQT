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

import ModalCotainer from '../widgets/containers/modal.jsx';
import Modal from '../widgets/components/modal.jsx'

class Home extends React.Component {
  constructor() {
    super();
    this.db = firebase.firestore();
    this.db.settings({});
    this.state = {}
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

  createPost(uid, uriProfile, userName, titulo, contenido, url) {
    return this.db.collection('posts').add({ 
      uid: uid,
      author: userName,
      uriProfile: uriProfile,
      title: titulo,
      description: contenido,
      file: url,
      date: firebase.firestore.FieldValue.serverTimestamp(),
    })
      .then(refDoc => {
        console.log(`Id del Post => ${refDoc.id}`);
      })
      .catch(error => {
        console.log(error);
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

  closeModal = e => {
    this.props.dispatch({
      type: 'CLOSE_MODAL',
    })
  }

  openModal = e => {
    this.props.dispatch({
      type: 'OPEN_MODAL'
    })
  }

  refInputText = event => {
    this.text = event;
  }

  refInputTextArea = event => {
    this.textarea = event;
  }

  sendSubmit = e => {
    e.preventDefault()
    console.log(this.props.uriProfile)
    if (this.text || this.textarea) {
      console.log(this.text.value)
      console.log(this.textarea.value)
    }
    
    if (this.props.user) {
      this.createPost(
        this.props.user.get('uid'),
        this.props.user.get('userName'),
        this.props.user.get('uriProfile'),
        this.textarea.value,
        this.text.value,
        "una url"
      )

      this.props.dispatch({
        type: 'CLOSE_MODAL'
      })

    } else {
      console.log('Debes estar autenticado');
    }
  }

  uploadPostFile(file, uid) {
    this.refStorage = firebase.storage().ref(`imgsPosts/${uid}/${file.name}`);
    this.task = this.refStorage.put(file)
    this.task.on('state_changed', snapshot => {
      this.props.dispatch({
        type: 'IS_LOADING',
        payload: {
          value: true
        }
      });

      let porcentaje = snapshot.bytesTransferred / snapshot.totalBytes * 100;
      // cambiar el tamaño y color con el procentaje cargado del file
      this.props.dispatch({
        type: 'UPLOAD_PROGRESS',
        payload: {
          width: `${porcentaje}%`,
        }
      })
    },
      err => {
        console.log(`Ha ocurrido un error` + err);
      },
      () => {
        this.task.snapshot.ref.getDownloadURL()
          .then(url => {
            this.props.dispatch({
              type: 'IS_LOADING',
              payload: {
                value: false
              }
            });
            console.log(url),
            sessionStorage.setItem('imgNewPost', url)
          })
          .catch(err => {
          console.log(`Error obteniendo la downloadURL => ${err}`)
        })
      }
    )

  }

  loadingFile = e => {
    const file = e.target.files[0];
    console.log(file);
    if (this.props.user) {
      this.uploadPostFile(file, this.props.user.get('uid'))
    } else {
      alert('No puedes subir un archivo, porque no estás Autenticado');
    }
  }

  render() {
    console.log('aqi....' + this.props.isLoading);
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
        {
          this.props.modalIsVisible &&
          <ModalCotainer>
              <Modal
                closeModal={this.closeModal}
                uriProfile={this.props.uriProfile}
                refInputText={this.refInputText}
                refInputTextArea={this.refInputTextArea}
                sendSubmit={this.sendSubmit}
                ChangeLoadingFile={this.loadingFile}
                styleLoadFilePost={this.props.uploadWidth}
                isLoading={this.props.isLoading}
              />
          </ModalCotainer>
        }
        <Help />
        <Paint
          openModal={this.openModal}  
        />
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
    modalIsVisible: state.get('modal').get('modalPost'),
    uriProfile: state.get('data').get('user').get('uriProfile'),
    uploadWidth: state.get('modal').get('uploadWidth'),
    isLoading: state.get('isLoading').get('active')
  }
}

export default connect(mapStateToProps)(Home);
