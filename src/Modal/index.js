import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'
//Viendo si funciona con GitHub
function Modal( {children} ) {
    return ReactDOM.createPortal(
        <div className='ModalBackground'>
            {children}
        </div>,
        document.getElementById('modal')
    )
}

export { Modal }