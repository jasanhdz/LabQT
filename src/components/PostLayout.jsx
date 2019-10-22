import React from 'react';


const PostLayout = props => {
  return (
    <div>
      <p className="PublicationMessage">Publicaciones de el Laboratorio</p>
      {props.children};
    </div>
  )
};

export default PostLayout