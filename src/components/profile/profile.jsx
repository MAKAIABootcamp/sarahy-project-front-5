import React, { useEffect, useState } from "react";
import "./profile.scss";
import arrowRight from "../../assets/image/flechaDerecha.png";
import iconEdit from "../../assets/image/Edit.png";
import perfil from "../../assets/image/perfilDefault.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { getAuth, updateProfile } from "firebase/auth";
import { firestore } from "../../firebase/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { userDataLogged, userLogged } from "../../redux/store/auth/authReducer";
import { useNavigate } from "react-router-dom";
import { getUserFromCollection } from "../../services/getUser";
import Swal from "sweetalert2";


const Profile = () => {

    const [sectionPerfil, setSectiosPerfil] = useState("Editar perfil")
    const user = useSelector((state) => state.aunthentication.userLogged)
    console.log(user)


    const dispatch = useDispatch()

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
            // const auth = getAuth();
            // await updateProfile(auth.currentUser, {
            //     displayName: name,
            //     number: number,
            //     age: edad,
            //     city: ciudad,
            //     address: direccion,
            // });

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
                                src={(user && user.user && user.user.photo) || user.photo || perfil}
                                alt="Foto perfil"
                            />
                        </figure>
                        <div className="data__profile">
                            <h4 className="name">{user.name || user.user.name}</h4>
                            <span>{user.email || user.user.email}</span>
                            <span>{user.number || user.user.number ? user.number || user.user.number : user.email}</span>
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
                                            placeholder={user.name || user.user.name ? user.name || user.user.name : user.email || user.user.email}
                                            {...register("name")}
                                            className="input__profile"
                                            autoFocus
                                            focus
                                        />
                                    ) : (
                                        <span className="span">{user.name || user.user.name ? user.name || user.user.name : user.email || user.user.email}</span>
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
                                                placeholder={user.number || user.user.number ? user.number || user.user.number : user.email || user.user.email}
                                                {...register("number")}
                                                className="input__profile"
                                            />
                                        ) : (
                                            <span className="span">{user.number || user.user.number ? user.number || user.user.number : user.email || user.user.email}</span>
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
                                            placeholder={user.age || user.user.age ? user.age || user.user.age : ""}
                                            {...register("Edad")}
                                            className="input__profile"

                                        />
                                    ) : (
                                        <span className="span">{user.age || user.user.age ? user.age || user.user.age : "Edad"}</span>
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
                                            placeholder={user.city || user.user.city ? user.city || user.user.city : ""}
                                            {...register("ciudad")}
                                            className="input__profile"
                                        />
                                    ) : (
                                        <span className="span">{user.city || user.user.city ? user.city || user.user.city : "Ciudad"}</span>
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
                                            placeholder={user.address || user.user.address ? user.address || user.user.address : ""}
                                            {...register("Direccion")}
                                            className="input__profile"
                                        />
                                    ) : (
                                        <span className="span">{user.address || user.user.address ? user.address || user.user.address : "Dirección"}</span>
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

                    {sectionSeleccionada === "Ver eventos" && (
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
                    )}
                    {sectionSeleccionada === "Comentarios" && (
                        <section className="show__comments">
                            <span className="title">Déjanos tus comentarios</span>
                            <form action="" className="form__comments">
                                <article className="article__form">
                                    <label htmlFor="" className="label">Evento:</label>
                                    <input type="text" placeholder="Ingresa el tipo de evento" className="input" />
                                </article>

                                <article className="article__form">
                                    <label htmlFor="" className="label">Comentario:</label>
                                    <input type="text" placeholder="Escribe tu comentario" className="input" />
                                </article>

                                <article className="article__form">
                                    <label htmlFor="" className="label">Calificación:</label>

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
