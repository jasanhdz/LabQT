import React from 'react';
import '../components/styles/post.css'; 
import Delete from '../assets/dash.png';

const validationPost = (post, index) => {
  console.log(post.get('deletePost'));
  if (post.get('file') !== null) {
      // Si existe algún archivo
    if (!post.get('title') || post.get('file').includes('.jpg') || post.get('file').includes('.png')) {
          // Renderea Solo imagenes
            return (
              <div key={index} className="Container__Item">
                {
                  post.get('authorPost') &&
                    <div className="DeleteBTN__Container">
                      <img onClick={post.get('deletePost')} className="Delete__Btn" src={Delete} alt=""/>
                    </div>
                }
                {post.get('title') ? <h1 className="Item__Title">{post.get('title')}</h1> : null }
                <p className="Item__Content">{post.get('description')}</p>
                <a className="Item__Link" target="_blank" href={post.get('file')}>Descargar Archivo</a>
                <img className="Item__Img" src={post.get('file')} alt="imagen" />
                <div className="Item__Details">
                  <p>{post.get('author')}</p>
                  <p>{`${post.get('date')} ${post.get('hour')}`}</p>
                </div>
              </div>
            );
    } else {
        // Renderear Cualquier Tipo de Archivo que no sea una imagen.
        return (
          <div key={index} className="Container__Item">
            {
                post.get('authorPost') &&
                    <div className="DeleteBTN__Container">
                      <img onClick={post.get('deletePost')} className="Delete__Btn" src={Delete} alt=""/>
                    </div>
              }
            <h1 className="Item__Title">{post.get('title')}</h1>
            <p className="Item__Content">{post.get('description')}</p>
            <a className="Item__Link" target="_blank" href={post.get('file')}>Descargar Archivo</a>
            <div className="Item__Details">
              <p>{post.get('author')}</p>
              <p>{`${post.get('date')} ${post.get('hour')}`}</p>
            </div>
          </div>
        );
        }  
  } else if (!post.get('title') && !post.get('file')) {
      // Solo Descripción 
        return (
          <div key={index} className="Container__Item">
          {
              post.get('authorPost') &&
                  <div className="DeleteBTN__Container">
                    <img onClick={post.get('deletePost')} className="Delete__Btn" src={Delete} alt=""/>
                  </div>
          }
          <p className="Item__Content">{post.get('description')}</p>
          <div className="Item__Details">
            <p>{post.get('author')}</p>
            <p>{`${post.get('date')} ${post.get('hour')}`}</p>
          </div>
        </div>
        );
  }
    else if (post.get('file') === null) {
      return (
        <div key={index} className="Container__Item">
          {
              post.get('authorPost') &&
                  <div className="DeleteBTN__Container">
                    <img onClick={post.get('deletePost')} className="Delete__Btn" src={Delete} alt=""/>
                  </div>
          }
          <h1 className="Item__Title">{post.get('title')}</h1>
          <p className="Item__Content">{post.get('description')}</p>
          <div className="Item__Details">
            <p>{post.get('author')}</p>
            <p>{`${post.get('date')} ${post.get('hour')}`}</p>
          </div>
        </div>
      );
  }
}

const Post = props => {
  return props.posts.map(validationPost)
}  


export default Post;

//   const db = firebase.firestore();
//   db.settings({});

// const deleteDocument = documentID => {
//   return db.collection('posts').doc(documentID).delete()
//     .then(() => {
//       console.log('Docuemento eliminado satisfactoriamente :p');
//     }).catch(error => {
//       console.log('Error removiendo el docuemento' + error);
//   })
// }

  // const deletePost = id => {
  //   return () => {
  //     console.log(id)
  //     // deleteDocument(id)
  //   }
  // }
