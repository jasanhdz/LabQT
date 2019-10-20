import React from "react";
import "./styles/chat.css";

const ChatLayout = props => {
  return (
    <div className="Chat_Container">
      <div className="Container_Header">
        <p>x</p>
        <p>:</p>
      </div>
      <div className="Container_Messages">
        <ul>
          {props.messages.map(msg => (
            <li key={msg.id}>{msg.message}</li>
          ))}
        </ul>
      </div>
      <form onSubmit={props.handleSubmit} className="Container_Message">
        <input
          className="Container_Message--input"
          type="text"
          placeholder="Send"
          onChange={props.handleMessage}
          value={props.inputMessage}
        />
      </form>
    </div>
  );
};

export default ChatLayout;
