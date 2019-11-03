import React from 'react';

class DeletePost extends React.Component {
  deletePost = id => {
    console.log("Hola")
  }
  render() {
    return (
      <button onClick={this.deletePost(this.props.id)}>Eliminar Post</button>
    );
  }
} 

export default DeletePost;