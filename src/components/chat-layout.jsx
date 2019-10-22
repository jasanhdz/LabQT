import React from "react";
import "./styles/chat.css";
import { IoIosCloseCircle, IoMdInformationCircle } from 'react-icons/io';

const ChatLayout = props => {
  return (
    <div className="Chat_Container">
      <div className="Container_Header">
        <IoIosCloseCircle
          onClick={props.closeChat}
          className="CloseChat"
        />
        <IoMdInformationCircle
          className="CloseChat"
        />
      </div>
      <div className="Container_Messages">
        <ul>
          {props.messages.map(msg => (
            <li key={msg.id}>{msg.message}</li>
          ))}
        </ul>
      </div>
      <form onSubmit={props.handleSubmit} className="Container_Message">
        <textarea
          className="Container_Message--input"
          type="text"
          placeholder="Send"
          onChange={props.handleMessage}
          value={props.inputMessage}
          autoFocus={true}
          type=""
        />
        <button className="Send">Send</button>
      </form>
    </div>
  );
};

export default ChatLayout;
