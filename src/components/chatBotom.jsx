import React from 'react';
import './styles/btnchat.css';

const ChatBotom = props => {
  return (
    <button
      type="button"
      className="Btn__chat"
      onClick={props.handleClick}
    >
      Chat
    </button>
  );
};

export default ChatBotom;