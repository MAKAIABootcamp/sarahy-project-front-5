import React, { useEffect, useState } from "react";
import "./profile.scss";
import arrowRight from "../../assets/image/flechaDerecha.png";
import iconEdit from "../../assets/image/Edit.png";
// import perfil from "../../assets/image/perfilDefault.jpg";
import { useDispatch, useSelector } from "react-redux";
import { set, useForm } from "react-hook-form";
import { getAuth, updateProfile } from "firebase/auth";
import { firestore } from "../../firebase/firebaseConfig";
import { addDoc, collection, doc, getDoc, getDocs, onSnapshot, updateDoc } from "firebase/firestore";
import { userDataLogged, userLogged } from "../../redux/store/auth/authReducer";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ModalDetalle from "../modalDetalle/ModalDetalle";
import uploadFile from "../../services/upLoadfile";
import ApiCalendar from "react-google-calendar-api";
import { Link } from 'react-router-dom';
import { editDate } from "../../services/editDate";
import PanelAdmi from "../panelAdmi/panelAdmi";

const perfil = "https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png"

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

const Profile = () => {

    const [sectionPerfil, setSectiosPerfil] = useState("Editar perfil")
    const user = useSelector((state) => state.aunthentication.userLogged)


    const [datoUsuario, setdatoUsuario] = useState({})
    const [stateCita, setStateCita] = useState([])

    const dispatch = useDispatch()

    const traerDatosFirestore = async () => {
        const userRef = doc(firestore, "users", user.id || user.user.id);
        const userNew1 = await getDoc(userRef);
        setdatoUsuario(userNew1.data())
    }

    useEffect(() => {
        traerDatosFirestore()
    }, [])

    const dataEventos = datoUsuario.quote
    console.log(dataEventos);


    const [sectionSeleccionada, setsectionSeleccionada] = useState("Editar perfil")

    const [editando, setEditando] = useState(false);

    const handleSeleccion = (evento) => {
        setsectionSeleccionada(evento)
        setSectiosPerfil(evento)
    }
    console.log(datoUsuario.admi, "admi o no");

    const [citas, setCitas] = useState([])
    useEffect(() => {
        if (datoUsuario.admi) {
            const citasRef = collection(firestore, "dates");
            const unsubscribe = onSnapshot(citasRef, (querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const citasData = doc.data();
                    setCitas(Object.values(citasData)); 
                });
            });

            return () => {

                unsubscribe();
            };
        }
    }, [datoUsuario.admi]);




    const [modal, setModal] = useState(false);
    const [selectedElement, setSelectedElement] = useState({});

    const openModal = (element) => {
        setSelectedElement(element);
        setModal(true);
    };

    const closeModal = () => {
        setSelectedElement(null);
        setModal(false);
    };


    const navigate = useNavigate()

    const { register, reset, handleSubmit, formState: { errors }  } = useForm()

    const handleEditar = () => {
        setEditando(true);
        focus()
    }



    const onSubmit = async (data) => {
        const name = data.name;
        const number = data.number;
        const edad = data.Edad
        const ciudad = data.ciudad
        const direccion = data.Direccion
        console.log(data, "los datos de data");


        try {

            const foto = await uploadFile(data.foto[0]);
            data.foto = foto;
            console.log(data, "esta es la url de la foton");
            console.log(foto, "o esta");

            const auth = getAuth();
            await updateProfile(auth.currentUser, {
                displayName: name,
                number: number,
                age: edad,
                city: ciudad,
                address: direccion,
                photoURL: foto,
            });

            const userRef = doc(firestore, "users", user.id || user.user.id);
            await updateDoc(userRef, {
                name: name,
                number: number,
                age: edad,
                city: ciudad,
                address: direccion,
                photo: foto,
            });

            const userId = user.id || (user.user && user.user.id) || user.user.uid || user.uid;
            const dataDb = doc(firestore, "users", userId);
            const userNew = await getDoc(dataDb);


            const dataUserUpdate = {
                name: userNew.data().name,
                email: userNew.data().email,
                number: userNew.data().number,
                photo: userNew.data().photo,
                city: userNew.data().city,
                address: userNew.data().address,
                age: userNew.data().age
            }
            dispatch(userLogged(dataUserUpdate));

            console.log("Perfil actualizado correctamente.");
            Swal.fire(
                'Haz actualizado tu perfil',
                'Espero que disfrutes tu experiencia',
                'success'
            )
            navigate("/");
            window.scrollTo(0, 0);
        } catch (error) {
            console.error("Error al actualizar el perfil:", error);
            console.error(error.code);
        }
    };

    const salir = () => {
        Swal.fire(
            'Haz cerrado sesión',
            'Espero vuelvas pronto',
            'success'
        )
        dispatch(userLogged(false));
        navigate("/");
        window.scrollTo(0, 0);
    }

    const comentarios = async (data) => {
        try {
            const evento = data.evento;
            const comentario = data.comentario;
            const calificacion = data.calificacion;
            const docRef = await addDoc(collection(firestore, "comments"), {
                event: evento,
                comment: comentario,
                qualification: calificacion,
                photo: datoUsuario.photo ? datoUsuario.photo : perfil
            });

            Swal.fire(
                'Comentario realizado con exito',
                'Espero que disfrutes tu experiencia',
                'success'
            )
            navigate("/");

        } catch (error) {
            console.error("Error adding document: ", error);
            console.error(error.code);
            console.error(error.message);
        }
    }

       //Crear evento
       const createAnEvent = async (dataInicial, dataFinal, correo) => {
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
            attendees: [{ email: "mariapaulinap0531@gmail.com", email: correo}],
          };
          const response = await apiCalendar.createEvent(event);
          console.log(response)
          
          console.log("hasta aqui da response")
        //   const infoDate = response.result.start.dateTime;
        const link = response.result.htmlLink
        return link 
        //   window.open(response.result.htmlLink);
        
        } catch (error) {
          console.log(error);
        }
      };

      

const handleItemClick = async (name, element) => {
    if (name === "sign-in") {
        const fecha = element.fecha; 
        const hora = element.hora; 
        const email = element.email; 
        const name = element.name; 
        const contact = element.contact; 

        const formatoFechaInicial = fecha + "T" + hora + ":00";
        const formatoFechaFinal = fecha + "T" + hora + ":00";
        const fechaHoraInicial = new Date(formatoFechaInicial);
        const fechaHoraFinal = new Date(formatoFechaFinal);
        fechaHoraInicial.setHours(fechaHoraInicial.getHours());
        fechaHoraFinal.setHours(fechaHoraFinal.getHours());
        const formatoFechaInicialRestada = fechaHoraInicial.toISOString();
        const formatoFechaFinalRestada = fechaHoraFinal.toISOString();
    
      const response = await apiCalendar.handleAuthClick();
     
      try {
        const urlCalendar = await createAnEvent(
            formatoFechaInicialRestada,
            formatoFechaFinalRestada, email
            )

            // const updatedStateCita = [...stateCita];
            // const index = citas.indexOf(element);
            // updatedStateCita[index] = true; 
            // setStateCita(updatedStateCita);
            
            Swal.fire({
                icon: 'success',
                title: 'Cita agendada en Google calendar exitosamente',
                footer: '<a target="_blank" href="'+ urlCalendar +'">Ir a Google Calendar</a>'
            })

            const editDatesState = async () => {
                const serviceId = "datesCalendar";
                const newDate = {
                    name: name,
                    contact: contact,
                    email: email, 
                    fecha: fecha,
                    hora: hora,
                    state: true, 
                }
                const service = await editDate(serviceId, name, newDate );

                return service;
              };

            editDatesState()
        

      } catch (error) {
        console.log(error)
      }
      
     
    } else if (name === "sign-out") {
      const response = apiCalendar.handleSignoutClick();
      console.log(response);
    }
  };

    return (
        <>
            <section className="title__profile dark:bg-neutral-700">
                <div className="div__header">
                </div>
                {/* <h2 className="title dark:text-neutral-100">Perfil</h2> */}

            </section>

            <section className="main__profile ">
                <section className="container__profile dark:bg-neutral-700  dark:rounded-none">
                    <section className="introduction__profile dark:bg-neutral-700">
                        <figure className="fig__profile dark:bg-neutral-700">
                            <img
                                className="photProfile"
                                src={datoUsuario && datoUsuario.photo ? datoUsuario.photo : perfil}
                                alt="Foto perfil"
                            />
                        </figure>
                        <div className="data__profile ">
                            <h4 className="name dark:text-neutral-100">{datoUsuario ? datoUsuario.name : datoUsuario.email}</h4>
                            <span className="dark:text-neutral-200">{datoUsuario ? datoUsuario.email : datoUsuario.number}</span>

                        </div>
                    </section>

                    <section className="items__profile">
                        <div className={`item ${sectionPerfil === "Editar perfil" ? "active dark:!text-neutral-900" : ""}`}
                            onClick={() => handleSeleccion("Editar perfil")}
                        >
                            <span className="dark:text-neutral-100">Editar perfil</span>
                            <img src={arrowRight} alt="" />
                        </div>

                        {!datoUsuario.admi && (
                            <div
                                className={`item ${sectionPerfil === "Ver cotizaciones" ? "active" : ""}`}
                                onClick={() => handleSeleccion("Ver cotizaciones")}
                            >
                                <span className="dark:text-neutral-100">Ver cotizaciones</span>
                                <img src={arrowRight} alt="" />
                            </div>
                        )}
                        {!datoUsuario.admi && (
                            <div className={`item ${sectionPerfil === "Comentarios" ? "active" : ""}`}
                                onClick={() => handleSeleccion("Comentarios")}
                            >
                                <span className="dark:text-neutral-100">Comentarios</span>
                                <img src={arrowRight} alt="" />
                            </div>
                        )}

                        {datoUsuario.admi && (
                            <div
                                className={`item ${sectionPerfil === "Citas" ? "active" : ""}`}
                                onClick={() => handleSeleccion("Citas")}
                            >
                                <span className="dark:text-neutral-100">Citas</span>
                                <img src={arrowRight} alt="" />
                            </div>
                        )}
                        {datoUsuario.admi && (
                            <div
                                className={`item ${sectionPerfil === "configuracion" ? "active" : ""}`}
                                onClick={() => handleSeleccion("configuracion")}
                            >
                                <span className="dark:text-neutral-100">Servicios</span>
                                <img src={arrowRight} alt="" />
                            </div>
                        )}
                        <div className="item item__cerrar"
                            onClick={salir}
                        >
                            <span className="dark:text-neutral-100">Cerrar sesión</span>
                            <img src={arrowRight} alt="" />
                        </div>
                    </section>
                </section>

                <section className="container__details dark:bg-neutral-700">

                    {
                        sectionSeleccionada === "Editar perfil" && (
                            <form className="edit__profile" onSubmit={handleSubmit(onSubmit)}>
                                <span className="title dark:text-neutral-100">Datos personales</span>

                                <div className="edit__item">
                                    <label className="spanL dark:text-neutral-100">Nombre:</label>
                                    {editando ? (
                                        <input
                                            type="text"
                                            placeholder={datoUsuario ? datoUsuario.name : "Pepito Perez"}
                                            {...register("name")}
                                            className="input__profile"
                                            autoFocus
                                        />
                                    ) : (
                                        <span className="spanI dark:text-neutral-100">{datoUsuario ? datoUsuario.name : datoUsuario.email}</span>
                                    )}
                                    <img
                                        src={iconEdit}
                                        alt=""
                                        className="editar__name dark:bg-neutral-100 dark:p-1 dark:rounded-md"
                                        onClick={handleEditar}
                                    />
                                </div>

                                <hr className="line__profile" />

                                <div className="edit__item">
                                    <label className="spanL dark:text-neutral-100">Contacto:</label>
                                    {
                                        editando ? (
                                            <input
                                                type="number"
                                                placeholder={datoUsuario ? datoUsuario.number : "3114587843"}
                                                {...register("number")}
                                                className="input__profile"
                                            />
                                        ) : (
                                            <span className="spanI dark:text-neutral-100">{datoUsuario && datoUsuario.number ? datoUsuario.number : datoUsuario.email}</span>
                                        )
                                    }
                                    <img
                                        src={iconEdit}
                                        alt=""
                                        className="editar__contacto dark:bg-neutral-100 dark:p-1 dark:rounded-md"
                                        onClick={handleEditar}
                                    />
                                </div>

                                <hr className="line__profile" />

                                <div className="edit__item">

                                    <label className="spanL dark:text-neutral-100">Edad:</label>
                                    {editando ? (
                                        <input
                                            type="number"
                                            placeholder={datoUsuario ? datoUsuario.age : "31"}
                                            {...register("Edad")}
                                            className="input__profile"

                                        />
                                    ) : (
                                        <span className="spanI dark:text-neutral-100">{datoUsuario ? datoUsuario.age : ""}</span>
                                    )
                                    }
                                    <img
                                        src={iconEdit}
                                        alt=""
                                        className="editar__edad dark:bg-neutral-100 dark:p-1 dark:rounded-md"
                                        onClick={handleEditar}
                                    />

                                </div>

                                <hr className="line__profile" />
                                <div className="edit__item">
                                    <label className="spanL dark:text-neutral-100">Ciudad:</label>

                                    {editando ? (
                                        <input
                                            type="text"
                                            placeholder={datoUsuario ? datoUsuario.city : "Medellín"}
                                            {...register("ciudad")}
                                            className="input__profile"
                                        />
                                    ) : (
                                        <span className="spanI dark:text-neutral-100">{datoUsuario ? datoUsuario.city : ""}</span>
                                    )
                                    }
                                    <img
                                        src={iconEdit}
                                        alt=""
                                        className="editar__ciudad dark:bg-neutral-100 dark:p-1 dark:rounded-md"
                                        onClick={handleEditar}
                                    />
                                </div>
                                <hr className="line__profile" />
                                <div className="edit__item">
                                    <label className="spanL dark:text-neutral-100">Dirección:</label>
                                    {editando ? (
                                        <input
                                            type="text"
                                            placeholder={datoUsuario ? datoUsuario.address : "cra 25 # 13-20"}
                                            {...register("Direccion")}
                                            className="input__profile"
                                        />
                                    ) : (
                                        <span className="spanI dark:text-neutral-100"> {datoUsuario ? datoUsuario.address : ""}</span>
                                    )
                                    }
                                    <img
                                        src={iconEdit}
                                        alt=""
                                        className="editar__direccion dark:bg-neutral-100 dark:p-1 dark:rounded-md"
                                        onClick={handleEditar}
                                    />
                                </div>
                                <hr className="line__profile" />

                                <div className="edit__item">
                                    <label className="spanL dark:text-neutral-100">Foto:</label>
                                    {editando ? (
                                        <input
                                            type="file"
                                            placeholder={datoUsuario ? datoUsuario.foto : ""}
                                            {...register("foto")}
                                            className="input__profile"
                                        />
                                    ) : (
                                        <span className="spanI dark:text-neutral-100">Imagen</span>
                                    )
                                    }
                                    <img
                                        src={iconEdit}
                                        alt=""
                                        className="editar__direccion dark:bg-neutral-100 dark:p-1 dark:rounded-md"
                                        onClick={handleEditar}
                                    />
                                </div>
                                <hr className="line__profile" />
                                <button className="actualizar dark:!text-neutral-900 dark:!bg-crema dark:hover-bg-neutral-500">Actualizar</button>
                            </form>

                        )}

                    {sectionSeleccionada === "Ver cotizaciones" && (
                        <section className="show__price">
                            <span className="title dark:text-neutral-100">Cotizaciones</span>
                            <div className="titles__price">
                                <span className="span__title">Evento</span>
                                <span className="span__title">Fecha</span>
                                <span className="span__title">Valor</span>
                                <span className="span__title">Detalles</span>
                            </div>
                            {dataEventos && dataEventos.length > 0 ? (
                                dataEventos.map((element, index) => (
                                    <div className="data__price" key={index}>
                                        <span className="span__data">{element.type__Event}</span>
                                        <span className="span__data">{element.date}</span>
                                        <span className="span__data">$ {element.total}</span>
                                        <span className="material-symbols-outlined verMas" onClick={() => openModal(element)}>
                                            open_in_new
                                        </span>
                                        <ModalDetalle isOpen={modal} onRequestClose={closeModal} data={selectedElement} />
                                    </div>
                                ))
                            ) : (
                                <div className="data__price">
                                    <span className="span__data">No hay cotizaciones</span>
                                </div>
                            )}
                        </section>
                    )}
                    {sectionSeleccionada === "Citas" && (
                        <section className="show__price">
                            <span className="title dark:text-neutral-100">Administra tus citas</span>
                            <div className="titles__price">
                                <span className="span__title">Nombre</span>
                                <span className="span__title">Fecha</span>
                                <span className="span__title">Hora</span>
                                <span className="span__title">Contacto</span>
                                <span className="span__title">Estado</span>
                                

                            </div>
                            {citas && citas.length === 0 ? (
                                <div className="data__price">
                                    <span className="span__data">No hay citas</span>
                                </div>
                            ) : (
                                citas.map((element, index) => (
                                    <div className="data__price" key={index}>
                                        <span className="span__data"> {element.name}</span>
                                        <span className="span__data"> {element.fecha}</span>
                                        <span className="span__data"> {element.hora}</span>
                                        <span className="span__data">{element.contact}</span>
                                       
                                       {(element.state === true )? (
                                        <button className="span__title" >Confirmada <span class="material-symbols-outlined">
                                        check
                                        </span></button>

                                       ): (
                                        <button className="span__title" onClick={() => handleItemClick("sign-in", element)}>Confirmación pendiente<span class="material-symbols-outlined">
                                        priority_high
                                        </span></button>
                                       )}
                                       
                                    </div>
                                ))
                            )}

                        </section>
                    )}
                    {sectionSeleccionada === "configuracion" && (
                        <section className="show__price">
                            <span className="title dark:text-neutral-100">Administra tus servicios</span>
                            <PanelAdmi />

                        </section>
                    )}

                    {sectionSeleccionada === "Comentarios" && (
                        <section className="show__comments">
                            <span className="title dark:text-neutral-100">Déjanos tus comentarios</span>
                            <form action="" className="form__comments dark:!bg-neutral-600" onSubmit={handleSubmit(comentarios)}>
  <article className="article__form">
    <label htmlFor="" className="label__evento">Evento:</label>
    <input type="text" placeholder="Ingresa el tipo de evento" className="input" {...register("evento")} />
  </article>

  <article className="article__form">
    <label htmlFor="" className="label__evento">Comentario:</label>
    <input type="text" placeholder="Escribe tu comentario" className="input" {...register("comentario", { required: true })} />
    {errors.comentario && <p className="text-red-500">Debes incluir un comentario</p>}
  </article>

  <article className="article__form calificacion__form">
    <label htmlFor="calificacion" className="label">
      <strong>Calificación: </strong>¿Qué tan bueno fue el servicio?
    </label>
    <select name="Calificacion" id="calificacion" {...register("calificacion", { required: true })}>
      <option value="1">Poco</option>
      <option value="2">Algo</option>
      <option value="3">Moderado</option>
      <option value="4">Bastante</option>
      <option value="5">Mucho</option>
    </select>
    {errors.calificacion && <p className="text-red-500">Debes calificar el servicio</p>}
  </article>

  <button className="btn__comments">Enviar comentario</button>
</form>
                        </section>
                    )}

                </section>
            </section>
        </>
    );
};

export default Profile;
