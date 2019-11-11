import React from 'react';
import Layout from '../../components/Layout.jsx';
import Header from '../../components/Header.jsx';
import Chat from '../../containers/Chat.jsx';
import Footer from '../../components/Footer.jsx';
import '../../components/styles/document.css';

import Menu_Before from '../../components/menu_before.jsx';
import Help from '../../components/options/Help.jsx';

const header = [
  {
    title: 'Inicio',
    link: '/'
  },
  {
    title: 'Programas',
    link: '/programas'
  },
  {
    title: 'Ciencia',
    link: '/ciencia'
  },  
]

const Servicios = props => {
  return (
    <Layout>
    <Header
        links={header}
    />
      <div className="Document_Wrapper">
        <h1 className="Title">Laboratorio de Química Teoríca</h1>
        <div className="info_container">
          <p className="info_services">EL Laboratorio de Química Teoríca brinda servicios y apoyo acedemico y de investigación, atraves del desarrollo de tesis de Licenciatura, Maestría, y Doctorado. Así como Servicio Social y Prácticas Profesionales</p>
        </div>
        <div className="services__container">
            <h3>Servicios</h3>
            <p><a href="https://icuap.buap.mx/sites/default/files/documentos/CATALOGO_ICUAP_2019_rev_1.pdf#toolbar=0">Catálogo de Servicios del ICUAP</a></p>
          <ul>
            <li>Análisis de la calidad de biodiésel según las normas internacionales</li>
            <li>Análisis del contenido metálico en alimentos (hasta en partes por millón)</li>
            <li>Análisis del contenido de metales en agua (hasta en partes por millón)</li>
            <li>Análisis del contenido de metales en cualquier sólido (hasta en partes por millón)</li>
            <li>Convertidores catalíticos para la industria automotriz</li>
            <li>Producción de biodiésel a partir de aceites en combustibles</li>
          </ul>
        </div>
        
        <ul>
          <p><strong>Integrantes:</strong></p>
          <ul>
          <li className="small">CVU</li>
          </ul>
          <details className="Details">
            <summary>
            Andrea Moreno Ceballos
            </summary>
            <iframe
              src="https://firebasestorage.googleapis.com/v0/b/labqt-a31fa.appspot.com/o/cvu_labqt%2FCVU-Andrea_Moreno.pdf?alt=media&token=1312b7f3-eff3-4b3d-9c06-516b3da62d98"
              type="application/pdf"
              className="Document"
            />
          </details>
          <details className="Details">
            <summary>
            Valeria Estefania Iniesta Chávez
            </summary>
            <iframe
              src="https://firebasestorage.googleapis.com/v0/b/labqt-a31fa.appspot.com/o/cvu_labqt%2FCVU_Valeria_Chavez.pdf?alt=media&token=ad4ab73a-e507-488d-9cbe-b0df22d162fe"
              type="application/pdf"
              className="Document"
            />
          </details>
          <details className="Details">
            <summary>
              Norma Ángelica Caballero Concha 
            </summary>
            <iframe
              src="https://firebasestorage.googleapis.com/v0/b/labqt-a31fa.appspot.com/o/cvu_labqt%2FCVU_Norma%20Caballero_Ejecutivo_2019.pdf?alt=media&token=eb559de2-0a9e-4fa7-828c-3674d9536d29"
              type="application/pdf"
              className="Document"
            />
          </details>
          <details className="Details">
            <summary>
            Maricruz Rangel Galván
            </summary>
            <iframe
              src="https://firebasestorage.googleapis.com/v0/b/labqt-a31fa.appspot.com/o/cvu_labqt%2FCVU_Maricruz_Rangel.pdf?alt=media&token=1804b6b4-4ab2-4214-811c-a146972e941a"
              type="application/pdf"
              className="Document"
            />
          </details>
          <details className="Details">
            <summary>
              María Eugenia Castro Sánchez
            </summary>
            <iframe
              src="https://firebasestorage.googleapis.com/v0/b/labqt-a31fa.appspot.com/o/cvu_labqt%2FCVU_MaEugeniaCastro.pdf?alt=media&token=d68c9d19-6fbe-480a-8350-2203f3b9c64d"
              className="Document"
            />
          </details>
          <details className="Details">
            <summary>
            M.C Lisset Noriega
            </summary>
            <iframe
              src="https://firebasestorage.googleapis.com/v0/b/labqt-a31fa.appspot.com/o/cvu_labqt%2FCVU_Lisset_Noriega.pdf?alt=media&token=2233b55a-1814-4922-b17d-41aaa982b9e6"
              type="application/pdf"
              className="Document"
            />
          </details>
          <details className="Details">
            <summary>
              Eliud Morales Davila
            </summary>
            <iframe
              src="https://firebasestorage.googleapis.com/v0/b/labqt-a31fa.appspot.com/o/cvu_labqt%2FCVU_Eliud_Morales_Davila.pdf?alt=media&token=b6dd3ea0-a3ac-4503-b7d5-5326b79cabb1"
              type="application/pdf"
              className="Document"
            />
          </details>
        </ul>
        <ul>
          <ul>
          <li className="small">CV</li>
          </ul>
          <details className="Details">
            <summary>
            Dr. Francisco Javier Meléndez Bustamante
            </summary>
            <iframe
              src="https://firebasestorage.googleapis.com/v0/b/labqt-a31fa.appspot.com/o/cvu_labqt%2FCV-FranciscoJ_Melendez.pdf?alt=media&token=171c9b37-cc92-4151-900d-1b03b3f4ef87"
              type="application/pdf"
              className="Document"
            />
          </details>
          <details className="Details">
            <summary>
            Violeta Rangel Galván
            </summary>
            <iframe
              src="https://firebasestorage.googleapis.com/v0/b/labqt-a31fa.appspot.com/o/cvu_labqt%2FCV_Violeta_Rangel.pdf?alt=media&token=34cc827d-a5d5-41fa-94cb-90031ad03423"
              type="application/pdf"
              className="Document"
            />
          </details>
          <details className="Details">
            <summary>
            José Manuel Pérez Aguilar
            </summary>
            <iframe
              src="https://firebasestorage.googleapis.com/v0/b/labqt-a31fa.appspot.com/o/cvu_labqt%2FCV_JoseManuelPerez-Aguilar.pdf?alt=media&token=bd9bb018-75b9-452f-b044-1cc9045f3483"
              type="application/pdf"
              className="Document"
            />
          </details>
          <details className="Details">
            <summary>
              Rafael Flores Larrañaga.
            </summary>
            <iframe
              src="https://firebasestorage.googleapis.com/v0/b/labqt-a31fa.appspot.com/o/cvu_labqt%2FCV%20Rafael_Flores.pdf?alt=media&token=270401a8-8db2-4619-ae34-dd3defb0d167"
              type="application/pdf"
              className="Document"
            />
          </details>
        </ul>
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

export default Servicios;