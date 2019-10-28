import React from 'react';
import PostLayout from '../components/PostLayout.jsx';
import { DATE_NOW } from '../widgets/util/date-format';

class Post extends React.Component {
  constructor() {
    super()
    this.db = firebase.firestore();
    const settings = {}
    this.db.settings(settings);
    this.state = {}
  }


  createPost(uid, emailUser, title, description, imageLink, videoLink) {
    return this.db.collection('posts').add({
      uid: uid,
      author: emailUser,
      title: title,
      description: description,
      imageLink: imageLink,
      videoLink: videoLink,
      date: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(refDoc => {
      console.log(`Id del post => ${refDoc.id}`)
    })
    .catch(error => {
      console.log(error);
    })
  }
  
  uploadPostImage(file, uid) {
    const refStorage = firebase.storage().ref(`imgsPosts/${uid}/${file.name}_${DATE_NOW}`)
    const task = refStorage.put(file)

    task.on('state_changed', 
    snapshot => {
      const porcentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
      // Pasarle el porcentaje a nuestra clase de CSS para que muestre los bytes cargado
      console.log(`${porcentage}%`);
      this.setState({
        style: {
          width: `${porcentage}%`,
          backgroundColor: 'rgb(74, 249, 100)'
        }
      })
      
    },
    err => {
      console.log('Ha ocurrido un error subiendo el archivo', err)
    },
    () => {
      task.snapshot.ref.getDownloadURL()
      .then(url => {
        sessionStorage.setItem('imgNewPost', url);
        alert('AHORA YA PUEDES PUBLICAR');
        console.log('sessionStorage', sessionStorage.getItem('imgNewPost'));
      }).catch(error => {
          alert('Ha ocurrido un error obteniendo la URL del Storage', error);
      })
    }
    
    )

  }

  setRefLoading = e => {
    this.inputPayloadPost = e;
  }
  
  loadingFile = e => {
    const file = e.target.files[0];
    console.log(file);
    const user = firebase.auth().currentUser;
    if(user) {
      this.uploadPostImage(file, user.uid);
    } else {
      alert('No puedes subir una imagen, porque no estás loggeado.');
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
    // console.log([e.target.name], e.target.value);
  }

  submitPost = async event => {
    event.preventDefault();
    console.log(this.state.title);
    console.log(this.state.description);
    console.log(this.state.linkVideo);
    
    
    await this.setState({
      imageLink: sessionStorage.getItem('imgNewPost') == 'null'
      ? null
      : sessionStorage.getItem('imgNewPost')
    })

    sessionStorage.setItem('imgNewPost', null);
    console.log('sessionStorage:' ,sessionStorage.getItem('imgNewPost'));

    console.log('imageLink' ,this.state.imageLink);

    const user = firebase.auth().currentUser;
    if(user) {
      this.createPost(
        user.uid,
        user.email,
        this.state.title,
        this.state.description,
        this.state.imageLink,
        this.state.linkVideo,
        
        )
        .then(resp => {
          console.log('Se ha realizado correctamente el Post')
          this.props.closeModal();
        })
        .catch('Error al realizar el Post');
      } else {
        alert('Por favor loggeate antes de publicar algó');
      }

  }

  render() {
    return (
      <PostLayout>
      </PostLayout>
    ); 
  }
};

export default Post;