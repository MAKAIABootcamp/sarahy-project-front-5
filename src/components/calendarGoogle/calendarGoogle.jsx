import { async } from "@firebase/util";
import React from "react";
import { useState } from "react";
import ApiCalendar from "react-google-calendar-api";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { addNewDate } from "../../services/addNewDate";
import Swal from "sweetalert2";
import "./calendarGoogle.scss";
import logoSarahy from "./logoNegro.png";
import { useNavigate } from "react-router-dom";

Modal.setAppElement("#root");


const CalendarGoogle = ({ isOpen, onRequestCloset }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const createNewDate = async (serviceId, newService) => {
    const serviceNew = await addNewDate(serviceId, newService);
    return serviceNew;
  };

  const onSubmit = async (data) => {
    const name = data.name;
    const contact = data.contact;
    const fecha = data.date;
    const hora = data.hour;
    const email = data.email; 

    const formatoFechaInicial = fecha + "T" + hora + ":00";
    const formatoFechaFinal = fecha + "T" + hora + ":00";
    const fechaHoraInicial = new Date(formatoFechaInicial);
    const fechaHoraFinal = new Date(formatoFechaFinal);
    fechaHoraInicial.setHours(fechaHoraInicial.getHours());
    fechaHoraFinal.setHours(fechaHoraFinal.getHours());
    const formatoFechaInicialRestada = fechaHoraInicial.toISOString();
    const formatoFechaFinalRestada = fechaHoraFinal.toISOString();


    const newDate = {
      name: name,
      contact: contact,
      email: email, 
      fecha: fecha,
      hora: hora,
      state: false, 

    };

    console.log(newDate)
    createNewDate("datesCalendar", newDate);
    Swal.fire({
      icon: 'success',
      title: 'Solicitud de cita exitosa',
      text: 'Espera la confimación de la cita',
    })
    console.log('creado')
  };

  // const llevarHome = () => {
  //    navigate("/");
  //   window.scrollTo(0, 0);
  // }


  return (
    <Modal
      isOpen={isOpen}
      onRequestCloset={onRequestCloset}
      className="modal__calendarGoogle"
    >
      <div className="container__modal">
        <button className="btn__closeCalendar" onClick={onRequestCloset}>
          X
        </button>

          <form onSubmit={handleSubmit(onSubmit)} className="form__calendar">
            <article className="article">
              <figure className="fig">
                <img className="img" src={logoSarahy} alt="" />
              </figure>
              <h2 className="title">Completa los siguientes campos</h2>
            </article>

            <label className="label">
              <span className="span">Nombre/Apellido</span>
              <input
                className="input"
                name="name"
                type="text"
                placeholder=""
                {...register("name", { required: true })}
              />
            </label>

            <label className="label">
              <span className="span">Contacto</span>
              <input
                className="input"
                name="contact"
                type="number"
                placeholder=""
                {...register("contact", { required: true })}
              />
            </label>

            <label className="label">
              <span className="span">Correo</span>
              <input
                className="input"
                name="email"
                type="email"
                placeholder=""
                {...register("email", { required: true })}
              />
            </label>

            <label className="label">
              <span className="span">Fecha de la cita</span>
              <input
                className="input"
                name="date"
                type="date"
                placeholder=""
                {...register("date", { required: true })}
              />
            </label>

            <label className="label">
              <span className="span">Hora</span>
              <input
                className="input"
                name="hour"
                type="time"
                placeholder=""
                {...register("hour", { required: true })}
              />
            </label>

            <button className="btn__createDate" type="submit" onClick={onSubmit}>Crear evento</button>
            {/* <button onClick={listEvents}>Listar eventos</button> */}
          </form>
        

      </div>
    </Modal>
  );
};

export default CalendarGoogle;
