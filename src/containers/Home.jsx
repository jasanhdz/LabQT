import React from 'react';
import HomeLayout from '../components/home-layout.jsx';
import Header from '../components/Header.jsx';

class Home extends React.Component {
  render() {
    return (
      <HomeLayout>
        <Header />
        <h1>Hola Mundo</h1>
      </HomeLayout>
    )
  }
};

export default Home;