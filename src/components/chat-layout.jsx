import React from "react";
import "./styles/chat.css";
// import { IoIosCloseCircle, IoMdInformationCircle } from 'react-icons/io';

function fetchMessages(msg, index, user) {
  if (msg.get('author') === user) {
    return (
      <div key={index} className="Me_Message" >
        <p>{msg.get('message')}</p>
        <p className="Message_Hour">{msg.get('hour')}</p>
      </div>
    )
  } else {
    return (
      <div key ={index} className = "Your_Message">
        <p className="Message_Author">{msg.get('author')}</p>
        <p> {msg.get('message')}</p >
        <p className="Message_Hour">{msg.get('hour')}</p>
      </div>
    )
  }
  // content.scrollTo = content.scrollHeight;
  // document.getElementById('content').scrollHeight
}


const ChatLayout = props => {
  return (
    <div className="Chat_Container">
      <div className="Container_Header">
        <p
          onClick={props.closeChat}
          className="CloseChat"
        >X</p>
        {/* <IoIosCloseCircle
        /> */}
        <p className="CloseChat">:</p>
        {/* <IoMdInformationCircle
        /> */}
      </div>
      <div id="content" ref={props.refContainerMessages} className="Container_Messages">
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
