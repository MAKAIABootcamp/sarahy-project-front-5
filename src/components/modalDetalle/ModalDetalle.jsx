import React, { useEffect, useState } from 'react'
import Modal from "react-modal";
import './modalDetalle.scss';

const ModalDetalle = ({ isOpen, onRequestClose, data }) => {
    const [elementoSeleccionado, setElementoSeleccionado] = useState();

    useEffect(() => {
        setElementoSeleccionado(data);
    }, [data]);

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal__detalles">
            <div className='equis2' onClick={onRequestClose}>X</div>
            <h1>
                El tipo de evento es: {elementoSeleccionado ? elementoSeleccionado.type__Event : ''}
                    <br />
                    El nombre de la persona organizadora es : {elementoSeleccionado ? elementoSeleccionado.name__Event : ''}
                    <br />
                    La fecha del evento es: {elementoSeleccionado ? elementoSeleccionado.date : ''}
                    <br />  
                    el email de la persona es: {elementoSeleccionado ? elementoSeleccionado.email:''}
                    <br />
                    La iluminacion del evento es: {elementoSeleccionado ? elementoSeleccionado.ilumination : ''}
                    <br />
                    El tipo de musica es: {elementoSeleccionado ? elementoSeleccionado.music: ''}
                    <br />
                    El costo del evento es: {elementoSeleccionado ? elementoSeleccionado.total : ''}
                    <br />
                    El cupo del evento es: {elementoSeleccionado ? elementoSeleccionado.quota__Event : ''}
                    <br />
                    El total del evento es: {elementoSeleccionado ? elementoSeleccionado.Total : ''}

            </h1>
        </Modal>
    );
}

export default ModalDetalle;