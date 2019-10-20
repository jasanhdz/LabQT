import React from 'react';
import HomeLayout from '../components/home-layout.jsx';
import Header from '../components/Header.jsx';
import Chat from './Chat.jsx';

class Home extends React.Component {
  render() {
    return (
      <HomeLayout>
        <Header />
        <Chat />
      </HomeLayout>
    )
  }
};

export default Home;