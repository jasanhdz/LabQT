import React from 'react';
import './styles/submenu.css';

const subHeader = props => {
  return (
    <div className="Menu_container">
      <ul className="SubMenu">
        <li onClick={props.oldPost}>Publicaciones Anteriores</li>
        <li onClick={props.previousPosts}>Ultimas noticias</li>
        <div>
        </div>
      </ul>
    </div>
  );
}

export default subHeader;