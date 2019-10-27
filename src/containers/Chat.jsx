import React from 'react';
import Layout from '../components/Layout.jsx';
import ChatLayout from '../components/chat-layout.jsx';
import ChatBotom from '../components/chatBotom.jsx';
import { connect } from 'react-redux';

class Chat extends React.Component {
  constructor() {
    super() 
    this.db = firebase.firestore();
    this.db.settings({})
  }

  createMessage(uid, userName, email, message) {
    return this.db.collection('messages').add({
      uid: uid,
      author: userName,
      emailUser: email,
      message: message,
      date: firebase.firestore.FieldValue.serverTimestamp(),
    })
      .then(refDoc => {
        console.log(`Id del message => ${refDoc.id}`)
      })
      .catch(error => {
        console.log(error);
    })
  }

  closeChat = e => {
    console.log('click', e);
    this.props.dispatch({
      type: 'CLOSE_CHAT',
      payload: {
        chatVisibility: false,
        chatBtn: true
      }
    })
  }

  refTextArea = e => {
    this.textarea = e;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = this.props.message;
    const user = firebase.auth().currentUser;

    if (user) {
      if (newMessage !== "") {
        this.createMessage(
          user.uid,
          user.displayName,
          user.email,
          newMessage
        )
        this.props.dispatch({
          type: 'SEND_MESSAGE',
          payload: {
            newMessage
          }
        })
        this.textarea.focus();
      } else {
        this.textarea.focus();
        console.log('No puedes enviar un mensaje vacío :p');
      }
    } else {
      console.log("Debes estar authenticado")
    }
  }

  updateMessage = (e) => {
    this.props.dispatch({
      type: 'UPDATE_MESSAGE',
      payload: {
        message: e.target.value
      }
    });
  }

  handleClick = e => {
    console.log('poner chat');
    this.props.dispatch({
      type: 'OPEN_CHAT',
      payload: {
        chatVisibility: true,
        chatBtn: false
      }
    })
  }

  LoadingChat() {
    if (this.props.chatIsVisibility) {
      return (
        <ChatLayout
            closeChat={this.closeChat}
            messages={this.props.messages}
            handleSubmit={this.handleSubmit}
            handleMessage={this.updateMessage}
            inputMessage={this.props.message}
            refTextArea={this.refTextArea}
            authUser={this.props.authUser}
         />
      );
    }
    if (this.props.btnChat) {
      return (
        <ChatBotom
          handleClick={this.handleClick}
        />
      );
    }
  }

  render() {
    console.log(`Es aqui bro -> ${this.props.authUser}`);
    return (
      <Layout>
        {this.LoadingChat()}
      </Layout>
    );
  }
};

function mapStateToProps(state, props) {
  return {
    chatIsVisibility: state.get('modal').get('chatVisibility'),
    messages: state.get('data').get('messages'),
    message: state.get('data').get('message'),
    btnChat: state.get('modal').get('chatBtn'),
    authUser: state.get('data').get('user').get('userName')
  }
}

export default connect(mapStateToProps)(Chat);

