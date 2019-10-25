import React from 'react';
import Layout from '../components/Layout.jsx';
import ChatLayout from '../components/chat-layout.jsx';
import ChatBotom from '../components/chatBotom.jsx';

class Chat extends React.Component {
  constructor() {
    super() 
    this.state = {
      message: "",
      messages: [
        {
          id: 0,
          message: "Message 1",
        },
        {
          id: 1,
          message: "Message 2",
        }
      ],
      chatVisibility: false,
      chatBtn: true,
    }
  }

  closeChat = e => {
    console.log('click', e);
    this.setState({
      chatVisibility: false,
      chatBtn: true,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enter');
    let list = this.state.messages;
    const newMessage = {
      id: this.state.messages.length,
      message: this.state.message
    };
    list.push(newMessage);
    this.setState({
      messages: list,
    });
    this.setState({
      message: ''
    })
  }

  updateMessage = (e) => {
    this.setState({
      message: e.target.value
    });
  }

  handleClick = e => {
    console.log('poner chat');
    this.setState({ chatVisibility: true, chatBtn: false })
  }

  LoadingChat() {
    if (this.state.chatVisibility) {
      return (
        <ChatLayout
            closeChat={this.closeChat}
            messages={this.state.messages}
            handleSubmit={this.handleSubmit}
            handleMessage={this.updateMessage}
            inputMessage={this.state.message}
         />
      );
    }
    if (this.state.chatBtn) {
      return (
        <ChatBotom
          handleClick={this.handleClick}
        />
      );
    }
  }

  render() {
    return (
      <Layout>
        {this.LoadingChat()}
      </Layout>
    );
  }
};

export default Chat;