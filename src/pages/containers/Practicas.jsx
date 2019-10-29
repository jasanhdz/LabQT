import React from 'react';
import Layout from '../../components/Layout.jsx';
import Header from '../../components/Header.jsx';
import Chat from '../../containers/Chat.jsx';
import Footer from '../../components/About.jsx';
import Publication from '../../containers/Publications.jsx';

const  header = [
  {
    title: 'Inicio',
    link: '/'
  },
  {
    title: 'Servicio Social',
    link: '/servicio-social'
  },
  {
    title: 'Prácticas Profesionales',
    link: '/practicas'
  },
  {
    title: 'Ciencia',
    link: '/ciencia'
  },
  {
    title: 'Desarrollo de Proyectos',
    link: '/proyectos'
  },
]

const Practicas = props => {
  return (
    <Layout>
    <Header
        links={header}
    />
    <Publication />
    <Footer />
    <Chat />
  </Layout>
  );

};

export default Practicas;