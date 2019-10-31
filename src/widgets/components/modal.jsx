import React from 'react';
import './modal.css';
import Avatar from '../../assets/profile-2.png';

function ModalLogin(props) {
  return (
    <div className="Overlay">
      <div className="Modal">
        {/* estructura del Modal */}
        <div className="Wrapper">
          <div className="Wrapper__Header">
            <span onClick={props.closeModal} className="Wrapper__Header--Close">X</span>
            <img className="Form__Avatar" src={props.uriProfile ? props.uriProfile : Avatar} alt=""/>
          </div>
          <form onSubmit={props.sendSubmit} className="Form__Container">
            <input ref={props.refInputText} name="title"
              className="Form__Container--Title"
              placeholder="Añadir título"
              type="text" />
            <textarea
              className="Form__Container--Description"
              placeholder="¿Qué estas pensando?"
              name="content"
              ref={props.refInputTextArea}
              cols="30" rows="10" />
            <input className="Form__Container--File" type="file" />
            <button className="Form__Container--Submit" type="submit">Publicar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ModalLogin;