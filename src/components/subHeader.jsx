import React from 'react';
import Chat from '../containers/Chat.jsx';
import './styles/submenu.css';

const subHeader = props => {
  return (
    <div className="Menu_container">
      <ul className="SubMenu">
        <li>Todos los post</li>
        <li>Ultimas noticias</li>
        <Chat />
        <div>
          <button className="Btn__chat"
            onClick={props.closeModal}
          >Publicar</button>
        </div>
      </ul>
    </div>
  );
}

export default subHeader;