import React from 'react';
import Layout from '../../components/Layout.jsx';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import Publication from '../../containers/Publications.jsx';

import Menu_Before from '../../components/menu_before.jsx';
import Help from '../../components/options/Help.jsx';
import Chat from '../../containers/Chat.jsx';

const header = [
  {
    title: 'Programas',
    link: '/servicio-social'
  },
  {
    title: 'Servicios',
    link: '/servicios'
  },
  {
    title: 'Ciencia',
    link: '/ciencia'
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
    <Menu_Before
          history={props.history}
          // refMenuBefore={this.refMenuBefore}
        >
        <Help />
        {/* <Paint /> */}
        <Chat
          history={props.history}
        />
      </Menu_Before>
  </Layout>
  );

};

export default Practicas;