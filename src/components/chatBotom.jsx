import React from 'react';
import './styles/btnchat.css';
import ChatLogo from '../assets/menu/chat2.png';

const ChatBotom = props => {
  return (
    <span
      className="Chat_Logo_Container"
      onClick={props.handleClick}
    >
        <img
          type="img"
          src={ChatLogo}
          className="Btn__chat"
        />
    </span>
  );
};

export default ChatBotom;