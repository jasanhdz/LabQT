import React from 'react';
import Layout from '../components/Layout.jsx';
import ChatLayout from '../components/chat-layout.jsx';

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
    }
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

  render() {
    return (
      <Layout>
        <ChatLayout
          messages={this.state.messages}
          handleSubmit={this.handleSubmit}
          handleMessage={this.updateMessage}
          inputMessage={this.state.message}
        />
      </Layout>
    );
  }
};

export default Chat;