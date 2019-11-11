import React from 'react';
import Layout from '../../components/Layout.jsx';
import Header from '../../components/Header.jsx';
import Chat from '../../containers/Chat.jsx';
import Footer from '../../components/Footer.jsx';
import '../../components/styles/document.css';

import Menu_Before from '../../components/menu_before.jsx';
import Help from '../../components/options/Help.jsx';
// import Paint from '../components/options/escribir.jsx'; 

const  header = [
    {
      title: 'Inicio',
      link: '/'
    },
    {
      title: 'Servicios',
      link: '/servicios'
    },
    {
      title: 'Programas',
      link: '/programas'
    },  
]

const Ciencia = props => {
  return (
    <Layout>
    <Header
        links={header}
    />
      <div className="Document_Wrapper">
        <h2 className="center">Ciencia</h2>
        <div className="Ciencia_img_container">
          <a href="http://www.lacienciaparatodos.mx/" target="_blank">
            <img src="https://firebasestorage.googleapis.com/v0/b/labqt-a31fa.appspot.com/o/Programas%2Fmartesenlaciencia-2019.png?alt=media&token=822adebc-669f-4944-b749-76317dcdbf20" alt=""/>
          </a>
          <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/labqt-a31fa.appspot.com/o/Programas%2Fciencia.pdf?alt=media&token=42b07805-f204-48a3-bcff-6cb3dbb76659">
            <img src="https://firebasestorage.googleapis.com/v0/b/labqt-a31fa.appspot.com/o/Programas%2Fanuncio-divulgacion-leamosxvi.png?alt=media&token=297da151-01b2-4131-b9fa-1dacd42dc8ad" alt=""/>
          </a>
        </div>
        <details open className="Details">
        <summary>
        XVI Concurso Leamos la Ciencia para Todos 2018-2020 - Fondo de Cultura Económica
        </summary>
          <h3>Dirección General de Divulgación Científica</h3>
          <iframe 
              src="https://firebasestorage.googleapis.com/v0/b/labqt-a31fa.appspot.com/o/Programas%2Fciencia.pdf?alt=media&token=42b07805-f204-48a3-bcff-6cb3dbb76659"
              className="Document"
             />
        </details>
        
    </div>
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

export default Ciencia;