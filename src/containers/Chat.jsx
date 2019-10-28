import React from 'react';
import Layout from '../components/Layout.jsx';
import ChatLayout from '../components/chat-layout.jsx';
import ChatBotom from '../components/chatBotom.jsx';
import { connect } from 'react-redux';
import { obtenerFecha, obtenerHora } from '../widgets/util/date-format';
require('dotenv').config();

class Chat extends React.Component {
  constructor() {
    super() 
    this.db = firebase.firestore();
    this.db.settings({})
  }

  async checkAllPost() {
    await this.db.collection('messages')
    .orderBy('date', 'asc')
    .onSnapshot(querySnapshot => {
     if(querySnapshot) {
       let data = [];
       querySnapshot.forEach(element => {
         data.push({
           author: element.data().author,
           date: obtenerFecha(element.data().date.toDate()),
           hour: obtenerHora(element.data().date.toDate()),
           emailUser: element.data().emailUser,
           message: element.data().message,
           uid: element.data().uid
         });
        })
       console.log(data);
       this.props.dispatch({
         type: 'LOADING_MESSAGES',
         payload: data,
       })
       if (this.props.chatIsVisibility) {
        console.log(this.containerMessages.scrollTop || 0);
        console.log(this.containerMessages.scrollHeight || 0);
        this.containerMessages.scrollTop = this.containerMessages.scrollHeight;
      }
     } else {
       console.log('No hay Posts............... :(');
     }
   })
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
    if (this.props.chatIsVisibility) {
      this.textarea.focus();
    }
  }

  refContainerMessages = e => {
    this.containerMessages = e;
    if (this.props.chatIsVisibility) {
      console.log(this.containerMessages.scrollTop || 0);
      console.log(this.containerMessages.scrollHeight || 0);
      this.containerMessages.scrollTop = this.containerMessages.scrollHeight;
    }
    // if (this.containerMessages.scrollTop !== null && this.containerMessages.scrollHeight !== null) {
    // }
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
        this.containerMessages.scrollTop = this.containerMessages.scrollHeight;
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
    if (this.props.authUser) {
      this.props.dispatch({
        type: 'OPEN_CHAT',
        payload: {
          chatVisibility: true,
          chatBtn: false
        }
      })
    } else {
      console.log('Debes estár autenticado para poder acceder al chat');
      alert('Debes estár autenticado para poder acceder al chat');
      // this.props.history.push(process.env.PUBLIC_URL + '/');
      window.location.href = process.env.PUBLIC_URL + '/login';
    }
  }

  async componentDidMount() {
    await this.checkAllPost();
  }


  LoadingChat() {
    // console.log(`Es aqui bro -> ${this.props.authUser}`);

    if (this.props.chatIsVisibility) {
      return (
        <ChatLayout
          closeChat={this.closeChat}
          messages={this.props.messages}
          handleSubmit={this.handleSubmit}
          handleMessage={this.updateMessage}
          inputMessage={this.props.message}
          refTextArea={this.refTextArea}
          refContainerMessages={this.refContainerMessages}
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
    return this.LoadingChat();
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

