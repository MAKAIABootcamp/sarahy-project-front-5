import React, { useEffect, useState } from "react";
import "./profile.scss";
import arrowRight from "../../assets/image/flechaDerecha.png";
import iconEdit from "../../assets/image/Edit.png";
import perfil from "../../assets/image/perfilDefault.jpg";
import { useDispatch, useSelector } from "react-redux";
import { set, useForm } from "react-hook-form";
import { getAuth, updateProfile } from "firebase/auth";
import { firestore } from "../../firebase/firebaseConfig";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { userDataLogged, userLogged } from "../../redux/store/auth/authReducer";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Profile = () => {

    const [sectionPerfil, setSectiosPerfil] = useState("Editar perfil")
    const user = useSelector((state) => state.aunthentication.userLogged)
    console.log(user)

    const [datoUsuario, setdatoUsuario] = useState({})

    const dispatch = useDispatch()

    const traerDatosFirestore = async () => {
        const userRef = doc(firestore, "users", user.id || user.user.id);
        const userNew1 = await getDoc(userRef);
        setdatoUsuario(userNew1.data())
        console.log(userNew1.data());
        
    }

    useEffect(() => {
      traerDatosFirestore()
    }, [])
    
    console.log(datoUsuario);

    const [sectionSeleccionada, setsectionSeleccionada] = useState("Editar perfil")

    const [editando, setEditando] = useState(false);

    const handleSeleccion = (evento) => {
        setsectionSeleccionada(evento)
        setSectiosPerfil(evento)
    }

    const navigate = useNavigate()

    const { register, reset, handleSubmit } = useForm()

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
            const auth = getAuth();
            await updateProfile(auth.currentUser, {
                displayName: name,
                number: number,
                age: edad,
                city: ciudad,
                address: direccion,
            });

            const userRef = doc(firestore, "users", user.id || user.user.id);
            await updateDoc(userRef, {
                name: name,
                number: number,
                age: edad,
                city: ciudad,
                address: direccion,
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
            navigate("/");
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
    }

    const comentarios = async (data) => {
        try {
            const evento = data.evento;
            const comentario = data.comentario;
            const calificacion = data.calificacion;
            console.log(evento, comentario, calificacion, "todos los datos");

            const docRef = await addDoc(collection(firestore, "comments"), {
                event: evento,
                comment: comentario,
                qualification: calificacion,
                photo:  user.photo || user.user.photo
            });
            console.log("documento ", docRef);
        } catch (error) {
            console.error("Error adding document: ", error);
            console.error(error.code);
            console.error(error.message);
        }
    }


    return (
        <>
            <section className="title__profile">
                <div className="div__header">
                </div>
                <h2 className="title">Perfil</h2>
                <hr className="line__profile" />
            </section>

            <section className="main__profile">
                <section className="container__profile">
                    <section className="introduction__profile">
                        <figure className="fig__profile">
                            <img
                                className="photProfile"
                                src={datoUsuario && datoUsuario.photo ? datoUsuario.photo : perfil}
                                alt="Foto perfil"
                            />
                        </figure>
                        <div className="data__profile">
                            <h4 className="name">{datoUsuario? datoUsuario.name: datoUsuario.email}</h4>
                            <span>{datoUsuario? datoUsuario.email: datoUsuario.number}</span>

                        </div>
                    </section>

                    <section className="items__profile">
                        <div className={`item ${sectionPerfil === "Editar perfil" ? "active" : ""}`}
                            onClick={() => handleSeleccion("Editar perfil")}
                        >
                            <span>Editar perfil</span>
                            <img src={arrowRight} alt="" />
                        </div>

                        <div className={`item ${sectionPerfil === "Ver cotizaciones" ? "active" : ""}`}
                            onClick={() => handleSeleccion("Ver cotizaciones")}
                        >
                            <span>Ver cotizaciones</span>
                            <img src={arrowRight} alt="" />
                        </div>

                        <div className={`item ${sectionPerfil === "Ver eventos" ? "active" : ""}`}
                            onClick={() => handleSeleccion("Ver eventos")}

                        >
                            <span>Ver eventos</span>
                            <img src={arrowRight} alt="" />
                        </div>

                        <div className={`item ${sectionPerfil === "Comentarios" ? "active" : ""}`}
                            onClick={() => handleSeleccion("Comentarios")}
                        >
                            <span>Comentarios</span>
                            <img src={arrowRight} alt="" />
                        </div>
                        <div className="item item__cerrar"
                            onClick={salir}
                        >
                            <span>Cerrar sesión</span>
                            <img src={arrowRight} alt="" />
                        </div>
                    </section>
                </section>

                <section className="container__details">

                    {
                        sectionSeleccionada === "Editar perfil" && (
                            <form className="edit__profile" onSubmit={handleSubmit(onSubmit)}>
                                <span className="title">Datos personales</span>

                                <div className="edit__item">
                                    <label className="span">Nombre</label>
                                    {editando ? (
                                        <input
                                            type="text"
                                            placeholder="juan perez"
                                            {...register("name")}
                                            className="input__profile"
                                            autoFocus
                                            focus
                                        />
                                    ) : (
                                        <span className="span">{datoUsuario? datoUsuario.name: datoUsuario.email}</span>
                                    )}
                                    <img
                                        src={iconEdit}
                                        alt=""
                                        className="editar__name"
                                        onClick={handleEditar}
                                    />
                                </div>

                                <hr className="line__profile" />

                                <div className="edit__item">
                                    <label className="span">Contacto</label>
                                    {
                                        editando ? (
                                            <input
                                                type="number"
                                                placeholder=""
                                                {...register("number")}
                                                className="input__profile"
                                            />
                                        ) : (
                                            <span className="span">{datoUsuario && datoUsuario.number ? datoUsuario.number : datoUsuario.email}</span>
                                        )
                                    }
                                    <img
                                        src={iconEdit}
                                        alt=""
                                        className="editar__contacto"
                                        onClick={handleEditar}
                                    />
                                </div>

                                <hr className="line__profile" />

                                <div className="edit__item">

                                    <label className="span">Edad</label>
                                    {editando ? (
                                        <input
                                            type="number"
                                            placeholder=""
                                            {...register("Edad")}
                                            className="input__profile"

                                        />
                                    ) : (
                                        <span className="span">{datoUsuario? datoUsuario.age:""}</span>
                                    )
                                    }
                                    <img
                                        src={iconEdit}
                                        alt=""
                                        className="editar__edad"
                                        onClick={handleEditar}
                                    />

                                </div>

                                <hr className="line__profile" />
                                <div className="edit__item">
                                    <label className="span">Ciudad</label>

                                    {editando ? (
                                        <input
                                            type="text"
                                            placeholder=""
                                            {...register("ciudad")}
                                            className="input__profile"
                                        />
                                    ) : (
                                        <span className="span">{datoUsuario? datoUsuario.city:""}</span>
                                    )
                                    }
                                    <img
                                        src={iconEdit}
                                        alt=""
                                        className="editar__ciudad"
                                        onClick={handleEditar}
                                    />
                                </div>
                                <hr className="line__profile" />
                                <div className="edit__item">
                                    <label className="span">Dirección</label>
                                    {editando ? (
                                        <input
                                            type="text"
                                            placeholder=""
                                            {...register("Direccion")}
                                            className="input__profile"
                                        />
                                    ) : (
                                        <span className="span"> {datoUsuario? datoUsuario.address:""}</span>
                                    )
                                    }
                                    <img
                                        src={iconEdit}
                                        alt=""
                                        className="editar__direccion"
                                        onClick={handleEditar}
                                    />
                                </div>
                                <hr className="line__profile" />
                                <button className="actualizar">Actualizar</button>
                            </form>

                        )}

                    {sectionSeleccionada === "Ver cotizaciones" && (
                        <section className="show__price">
                            <span className="title">Cotizaciones</span>

                            <div className="titles__price">
                                <span className="span__title">Evento</span>
                                <span className="span__title">Fecha</span>
                                <span className="span__title">Valor</span>
                            </div>

                            <div className="data__price">
                                <span className="span__data">Baby Shower</span>
                                <span className="span__data">20/11/2023</span>
                                <span className="span__data">$4'500.000</span>
                            </div>
                        </section>
                    )}

                    {/* {sectionSeleccionada === "Ver eventos" && (
                        <section className="show__events">
                            <span className="title">Historial de eventos</span>

                            <div className="titles__events">
                                <span className="span__title">Evento</span>
                                <span className="span__title">Fecha</span>
                                <span className="span__title">Valor</span>
                            </div>

                            <div className="data__events">
                                <span className="span__data">Baby Shower</span>
                                <span className="span__data">20/11/2023</span>
                                <span className="span__data">$4'500.000</span>
                            </div>
                            <div className="data__events">
                                <span className="span__data">Baby Shower</span>
                                <span className="span__data">20/11/2023</span>
                                <span className="span__data">$4'500.000</span>
                            </div>
                            <div className="data__events">
                                <span className="span__data">Baby Shower</span>
                                <span className="span__data">20/11/2023</span>
                                <span className="span__data">$4'500.000</span>
                            </div>
                        </section>
                    )} */}
                    {sectionSeleccionada === "Comentarios" && (
                        <section className="show__comments">
                            <span className="title">Déjanos tus comentarios</span>
                            <form action="" className="form__comments" onSubmit={handleSubmit(comentarios)}>


                                <article className="article__form">
                                    <label htmlFor="" className="label__evento" >Evento:</label>
                                    <input type="text" placeholder="Ingresa el tipo de evento" className="input" {...register("evento")} />
                                </article>

                                <article className="article__form">
                                    <label htmlFor="" className="label">Comentario:</label>
                                    <input type="text" placeholder="Escribe tu comentario" className="input" {...register("comentario")} />
                                </article>

                                <article className="article__form">
                                    <label htmlFor="calificacion" className="label">
                                        Calificación:
                                        ¿que tan bueno fue el servicio?
                                    </label>
                                    <select name="Calificacion" id="calificacion" {...register("calificacion")}>
                                        <option value="1">Poco</option>
                                        <option value="2">Algo</option>
                                        <option value="3">Moderado</option>
                                        <option value="4">Bastante</option>
                                        <option value="5">Mucho</option>
                                    </select>
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
