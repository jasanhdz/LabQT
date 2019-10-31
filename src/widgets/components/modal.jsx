import React from 'react';
import './modal.css';
import Avatar from '../../assets/profile-2.png';
import LoadingSpinner from './Loading.jsx';

function Modal(props) {
  return (
    <div className="Overlay">
        {
          props.isLoading && <LoadingSpinner isLoading={props.isLoading}/>
        }
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
            <input
              className={props.styleLoadFilePost <= 0 ? "Form__Container--File" : "Form__Container--File uploadStyleSuccess"}
              type="file"
              onChange={props.ChangeLoadingFile}
              style={props.styleLoadFilePost <= 0 ? {width: "100%"} : {width: props.styleLoadFilePost}}
            />
            <button className="Form__Container--Submit" type="submit">Publicar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal;