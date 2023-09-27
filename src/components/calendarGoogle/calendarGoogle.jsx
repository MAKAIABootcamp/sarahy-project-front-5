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

Modal.setAppElement("#root");

const CLIENT_ID =
  "85285569975-pvlm6k6ug2gsmtdisoq601q8vdj80te1.apps.googleusercontent.com";
const API_KEY = "AIzaSyDv_prhIf6PiTY5BllrgxTK5mhhvs_gIis";

const config = {
  clientId: CLIENT_ID,
  apiKey: API_KEY,
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ],
};

const apiCalendar = new ApiCalendar(config);

const CalendarGoogle = ({ isOpen, onRequestCloset }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Crear evento
  const createAnEvent = async (dataInicial, dataFinal) => {
    try {
      // Define los detalles del evento
      const event = {
        summary: "Reunión con Celebraciones Sarahy",
        description: "Reunión con asesor comercial",
        start: {
          dateTime: dataInicial,
          timeZone: "America/Los_Angeles",
        },
        end: {
          dateTime: dataFinal,
          timeZone: "America/Los_Angeles",
        },
        attendees: [{ email: "mariapaulinap0531@gmail.com" }],
      };
      const response = await apiCalendar.createEvent(event);
     
      const infoDate = response.result.start.dateTime;
      window.open(response.result.htmlLink);
      return infoDate;
    } catch (error) {
      console.log(error);
    }
  };

  const createNewDate = async (serviceId, newService) => {
    const serviceNew = await addNewDate(serviceId, newService);
    return serviceNew;
  };

  const onSubmit = async (data) => {
    const name = data.name;
    const contact = data.contact;
    const fecha = data.date;
    const hora = data.hour;

    const formatoFechaInicial = fecha + "T" + hora + ":00";
    const formatoFechaFinal = fecha + "T" + hora + ":00";
    const fechaHoraInicial = new Date(formatoFechaInicial);
    const fechaHoraFinal = new Date(formatoFechaFinal);
    fechaHoraInicial.setHours(fechaHoraInicial.getHours());
    fechaHoraFinal.setHours(fechaHoraFinal.getHours());
    const formatoFechaInicialRestada = fechaHoraInicial.toISOString();
    const formatoFechaFinalRestada = fechaHoraFinal.toISOString();

    try {
      const response = await createAnEvent(
        formatoFechaInicialRestada,
        formatoFechaFinalRestada
      );
      console.log(response);

      const newDate = {
        name: name,
        contact: contact,
        fecha: fecha,
        hora: hora,
        dateGoogle: response,
      };

      createNewDate("datesCalendar", newDate);

    } catch (error) {
      console.log(error);
    }
  };

  const handleItemClick = async (name) => {
    if (name === "sign-in") {
      const response = await apiCalendar.handleAuthClick();
      console.log(response);
      setIsLoggedIn(true);
    } else if (name === "sign-out") {
      const response = apiCalendar.handleSignoutClick();
      console.log(response);
    }
  };

  //Listar todos los eventos
  const listEvents = async () => {
    const date = new Date();
    const newDate = date.setDate(date.getDate() + 10);

    try {
      // The user need to signIn with Handle AuthClick before
      const { result } = await apiCalendar.listEvents({
        timeMin: new Date().toISOString(),
        timeMax: new Date(newDate).toISOString(),
        showDeleted: true,
        maxResults: 10,
        orderBy: "updated",
      });

      console.log(result.items);
    } catch (error) {
      console.log(error);
    }
  };

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

        {isLoggedIn && (
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

            <button className="btn__createDate" type="submit">Crear evento</button>
            {/* <button onClick={listEvents}>Listar eventos</button> */}
          </form>
        )}

        {!isLoggedIn && (
          <div className="inicioCalendar">
            <article className="article">
              <figure className="fig">
                <img className="img" src={logoSarahy} alt="" />
              </figure>
              <h2 className="title">Agenda tu cita con Celebraciones Sarahy</h2>
            </article>

            <span className="span">
              Inicia sesión con Google para agendar tu cita
            </span>
            <button
              className="btn__inicioCalendar"
              onClick={() => handleItemClick("sign-in")}
            >
              Inicio de sesión
            </button>
            {/* <button onClick={() => handleItemClick("sign-out")}>Cierre de sesión</button> */}
          </div>
        )}
      </div>
    </Modal>
  );
};

export default CalendarGoogle;