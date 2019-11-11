import React from 'react';
import Header from '../../components/Header.jsx';
import Layout from '../../components/Layout.jsx';
import Footer from '../../components/Footer.jsx';

import Menu_Before from '../../components/menu_before.jsx';
import Help from '../../components/options/Help.jsx';
import Chat from '../../containers/Chat.jsx';

class Programas extends React.Component {
  constructor() {
    super()
    this.header = [
      {
        title: 'Inicio',
        link: '/'
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
  }

  render() {
    return (
      <Layout>
        <Header
          links={this.header}
          history={this.props.history}
        />
        <div className="Document_Wrapper">
          <h1>Programas</h1>
          <details open className="Details">
            <summary>
              CIENCIA EN TUS MANOS
            </summary>
            <h4>La Ciencia en tus Manos XVI</h4>
            <p><strong>Convocatoria</strong></p>
            <p>
              Con la finalidad de promover la investigación y el interés por los estudios de posgrado entre los estudiantes de licenciatura de la Benemérita Universidad Autónoma de Puebla, la Vicerrectoría de Investigación y Estudios de Posgrado emite la convocatoria del programa:
            </p>
            <p className="center" style={{color: "#219cca"}}><strong>La Ciencia en tus Manos</strong></p>
            <p>
            Los estudiantes podrán realizar una estancia de investigación durante 8 semanas en las unidades académicas y de investigación de nuestra Institución, colaborando dentro de proyectos de gran actualidad bajo la supervisión de un investigador miembro en activo del Padrón de Investigadores de la BUAP. De esta forma los jóvenes encontrarán una experiencia invaluable que les ayudará a definir su vocación científica, ampliando sus conocimientos y sus opciones para futuras etapas en su formación profesional.
            </p>
            <p><strong>Fechas:</strong></p>
            <ul>
              <li>Registro en línea: del 12 al 29 de abril de 2016.</li>
              <li>Recepción de solicitudes: hasta el 29 de abril de 2016 a las 14:00 horas.</li>
              <li>Resultados de la selección: los aceptados se darán a conocer el 6 de mayo de 2016.</li>
              <li>Duración de la Estancia: del 9 de Mayo al 1 de Julio de 2016.</li>
            </ul>

            <p><strong>Requisitos</strong></p>
            <ul>
              <li>Podrán participar todos los estudiantes de licenciatura que se encuentren inscritos.</li>
              <li>Hayan concluido el quinto semestre del plan de estudios de la licenciatura al momento de realizar la estancia.</li>
              <li>No contar en su historial académico con más de tres recursos.</li>
              <li>Tengan un promedio general mínimo de 8.5 para las DES de Ciencias Exactas, Ciencias Naturales e Ingeniería y Tecnología y de 9.0 para las demás DES</li>
            </ul>

            <p><strong>Solicitudes</strong></p>
            <p>Los interesados que cumplan con los requisitos establecidos deberán hacer su registro en línea desde el sitio de la VIEP, donde completaran la información que se pide para poder imprimir su solicitud de participación, además de preparar los siguientes documentos.</p>
            <ol>
              <li><strong>Solicitud de participación en formato oficial</strong>, firmada por el estudiante y el investigador (original y copia).</li>
              <li><strong>Copia de Póliza oficial de inscripción</strong> al semestre o ciclo en curso.</li>
              <li><strong>Constancia de calificaciones:</strong> kardex legalizado o kardex simple sellado por la secretaría académica de su facultad o escuela, desglosado por semestre o ciclo y que indique el promedio general obtenido hasta el momento.</li>
              <li><strong>Carta de motivos personales</strong> del estudiante donde indique claramente sus razones para participar en este programa, señalando la forma en que se relaciona su carrera con el área disciplinaria en la que desea realizar su estancia. Así como, el deseo de obtener una beca de la VIEP.</li>
              <li><strong>Copia de identificación oficial</strong> (credencial de elector, pasaporte, cartilla militar).</li>
              <li><strong>Copia de comprobante de domicilio.</strong></li>
              <li><strong>Carta de aceptación del investigador</strong>, perteneciente al padrón de investigadores de la BUAP con quien pretende realizar la estancia, en la que indique su aceptación y donde se comprometa a tenerlo bajo su tutela durante el tiempo que dura el programa.</li>
              <li><strong>Descripción del proyecto</strong> a desarrollar con el investigador, donde se incluya.</li>
              <li><strong>Carta de recomendación personalizada</strong> expedida por algún profesor que conozca el desempeño académico del estudiante en la que comente de la manera más amplia posible sobre las características positivas y negativas del aspirante que, a su consideración, sean relevantes para juzgar de forma objetiva la aptitud y potencial del aspirante para realizar su estancia en la unidad de su elección.</li>
            </ol>
          </details>
          <details open className="Details">
            <summary>
            Verano de la Investigación Científica
            </summary>
            <h4 className="h4Center">Cartel</h4>
            <iframe
              src="https://firebasestorage.googleapis.com/v0/b/labqt-a31fa.appspot.com/o/Programas%2Fdgdc-vic25-cartel.pdf?alt=media&token=2b5d8a46-6355-422c-abb2-05109bfedce9"
              type="application/pdf"
              className="Document"
            />
            <h4 className="h4Center">Convocatoria</h4>
            <iframe
              src="https://firebasestorage.googleapis.com/v0/b/labqt-a31fa.appspot.com/o/Programas%2Fdgdc-vic25-convocatoria.pdf?alt=media&token=b80b33bb-1f82-4f53-af7f-899ad8c0d520"
              type="application/pdf"
              className="Document"
            
            />
            <ul>
              <li>Sitio del Programa <a target="_blank" href="https://amc.edu.mx/amc/index.php/">https://amc.edu.mx/amc/index.php/</a></li>
            </ul>
          </details>
          <details className="Details">
            <summary>
            Programa Delfín
            </summary>
            <h3>XXIII Verano de la Investigación Científica y Tecnológica del Pacífico</h3>
            <p>Avisos</p>
            <p>Consulta la información para participar en este programa.</p>
            <h4 className="h4Center">Convocatoria</h4>
            <iframe
              src="https://firebasestorage.googleapis.com/v0/b/labqt-a31fa.appspot.com/o/Programas%2Fdgdc-victp23-convocatoria.pdf?alt=media&token=d9648264-f02f-44b6-b32f-a341bbd8f403"
              className="Document"
             />
            <ul>
              <li>Sitio del Programa <a target="_blank" href="https://www.programadelfin.org.mx/">https://www.programadelfin.org.mx/</a></li>
            </ul>
          </details>
        </div>
        <Footer />
        <Menu_Before
          history={this.props.history}
          // refMenuBefore={this.refMenuBefore}
        >
        <Help />
        {/* <Paint /> */}
        <Chat
          history={this.props.history}
        />
        </Menu_Before>
      </Layout>
    );
  }
};

export default Programas;