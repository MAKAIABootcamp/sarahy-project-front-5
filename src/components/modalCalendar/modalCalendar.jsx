import React, { useState } from 'react'
import CalendarGoogle from '../calendarGoogle/calendarGoogle';
import './modalCalendar.scss'

const ModalCalendar = () => {

    const [modal, setModal] = useState(false);

    const openModal = () => {
      setModal(true);
    };
  
    const closeModal = () => {
      setModal(false);
    };

  return (
    <div>
        <button className='btn__scheduleDate' onClick={openModal}>Agendar cita</button>
        <CalendarGoogle isOpen={modal} onRequestCloset={closeModal} className="modal" />
    </div>
    
  )
}

export default ModalCalendar