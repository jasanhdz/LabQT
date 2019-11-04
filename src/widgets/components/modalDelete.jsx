import React from 'react';
import './modal.css';

const ModalDelete = props => {
  return (
  <div className="Overlay">
    <div className="Modal DeletePost">
        <div className="ModalDelete__Container">
          <h3 className="ModalDelete__TYPE">¿Desea Eliminar está publicación?</h3>
          <div className="ModalDelete__Form">
            <button onClick={props.deletePost} className="Delete">Eliminar</button>
            <button onClick={props.cancel} className="Cancel">Cancelar</button>
          </div>
        </div>
    </div>
  </div>
  );
}

export default ModalDelete;