import React from "react";
import "./styles/chat.css";
import { IoIosCloseCircle, IoMdInformationCircle } from 'react-icons/io';

function fetchMessages(msg, index, user) {
  if (msg.get('author') === user) {
    return <p className="Me_Message" key={index}>{msg.get('message')}</p>
  } else {
    return <p className="Your_Message" key={index}>{msg.get('message')}</p>
  }
}

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
          {props.messages.map((msg, index) => {
            return fetchMessages(msg, index, props.authUser)
          })
          }
        </ul>
      </div>
      <form onSubmit={props.handleSubmit} className="Container_Message">
        <textarea id="textarea"
          className="Container_Message--input"
          type="text"
          placeholder="Send"
          onChange={props.handleMessage}
          value={props.inputMessage}
          ref={props.refTextArea}
        />
        <button type="submit" className="Send">Send</button>
      </form>
    </div>
  );
};

export default ChatLayout;
