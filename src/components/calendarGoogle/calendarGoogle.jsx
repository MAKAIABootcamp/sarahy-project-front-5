import { async } from "@firebase/util";
import React from "react";
import { useState } from "react";
import ApiCalendar from "react-google-calendar-api";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { addNewDate } from "../../services/addNewDate";
import Swal from "sweetalert2";


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
      const response = await createAnEvent(formatoFechaInicialRestada, formatoFechaFinalRestada);
      console.log(response);
    
      const newDate = {
        name: name,
        contact: contact,   
        fecha: fecha,
        hora: hora,
        dateGoogle: response,
      }

      createNewDate("datesCalendar", newDate);
  
      Swal.fire({
        icon: 'success',
        title: 'Cita creada exitosamente',
        showConfirmButton: false,
        timer: 1500
      });

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
    <Modal isOpen={isOpen} onRequestCloset={onRequestCloset} className="modal" >
      <button onClick={onRequestCloset}>X</button>
  
      {isLoggedIn && (
        <form onSubmit={handleSubmit(onSubmit)} className="form__calendar">
        <div>
          <label>
            <span>Nombre/Apellido</span>
            <input
              name="name"
              type="text"
              placeholder=""
              {...register("name", { required: true })}
            />
          </label>
        </div>
        <div>
          <label>
            <span>Contacto</span>
            <input
              name="contact"
              type="number"
              placeholder=""
              {...register("contact", { required: true })}
            />
          </label>
        </div>
        <div>
          <label>
            <span>Fecha de la cita</span>
            <input
              name="date"
              type="date"
              placeholder=""
              {...register("date", { required: true })}
            />
          </label>
        </div>
        <div>
          <label>
            <span>Hora</span>
            <input
              name="hour"
              type="time"
              placeholder=""
              {...register("hour", { required: true })}
            />
          </label>
        </div>
        <button type="submit">Crear evento</button>
        {/* <button onClick={listEvents}>Listar eventos</button> */}

      </form>
      
      )}

      {!isLoggedIn && (
         <div className="btn__inicioCalendar">
         <button onClick={() => handleItemClick("sign-in")}>
           Inicio de sesión
         </button>
         {/* <button onClick={() => handleItemClick("sign-out")}>Cierre de sesión</button> */}
         
       </div>
      )}
     
    </Modal>
  );
};

export default CalendarGoogle;



  //Funcion cambiar formato fecha-hora
  // function convertirFechaHora(fecha, hora) {
  //   const [fechaPartes] = fecha.split("-");
  //   const [horaPartes] = hora.split(":");

  //   const fechaHoraInicial = new Date(
  //       parseInt(fechaPartes[0]), // Año
  //       parseInt(fechaPartes[1]) - 1, // Mes (restar 1 ya que los meses son indexados desde 0)
  //       parseInt(fechaPartes[2]), // Día
  //       parseInt(horaPartes[0]), // Hora
  //       parseInt(horaPartes[1]) // Minutos
  //     );

  // const fechaHoraFinal = new Date(fechaHoraInicial);
  // fechaHoraFinal.setTime(fechaHoraFinal.getTime() + 3600 * 1000); // 3600 segundos * 1000 milisegundos
  // const formatoDeseadoInicial = fechaHoraInicial.toISOString().slice(0, -5);
  // const formatoDeseadoFinal = fechaHoraFinal.toISOString().slice(0, -5);

  // return { fechaHoraInicial: formatoDeseadoInicial, fechaHoraFinal: formatoDeseadoFinal };
  // }
