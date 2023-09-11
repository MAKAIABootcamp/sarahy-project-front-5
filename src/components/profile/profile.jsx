import React from "react";
import "./profile.scss";
import arrowRight from "../../assets/images/flechaDerecha.png";
import photoProfile from "../../assets/images/fotoHombre.jpg";
import iconEdit from "../../assets/images/Edit.png";

const Profile = () => {
  return (
    <>
    <section className="title__profile">
        <h2 className="title">Perfil</h2>
        <hr className="line" />
      </section>

    <section className="main__profile">
      <section className="container__profile">
            <section className="introduction__profile">
            <figure className="fig__profile">
                <img className="img" src={photoProfile} alt="Foto perfil" />
            </figure>
            <div className="data__profile">
                <h4 className="name">Juanito Pérez</h4>
                <span>juanito@gmail.com</span>
                <span>3203003030</span>
            </div>
            </section>

            <section className="items__profile">
            <div className="item">
                <span>Editar perfil</span>
                <img src={arrowRight} alt="" />
            </div>

            <div className="item">
                <span>Ver cotizaciones</span>
                <img src={arrowRight} alt="" />
            </div>

            <div className="item">
                <span>Ver eventos</span>
                <img src={arrowRight} alt="" />
            </div>

            <div className="item">
                <span>Comentarios</span>
                <img src={arrowRight} alt="" />
            </div>
            </section>
        </section>

        <section className="container__details">

            <section className="edit__profile">

                <span className="title">Datos personales</span>
                <div className="edit__item">
                    <span>Nombre</span>
                    <span>Juanito Pérez</span>
                    <img src={iconEdit} alt="" />
                </div>
                <hr className="line__profile"/>

                <div className="edit__item">
                    <span>Contacto</span>
                    <span>3003652020</span>
                    <img src={iconEdit} alt="" />
                </div>
                <hr className="line__profile"/>

                <div className="edit__item">
                    <span>Edad</span>
                    <span>32</span>
                    <img src={iconEdit} alt="" />
                </div>
                <hr className="line__profile"/>

                <div className="edit__item">
                    <span>Cuidad</span>
                    <span>Medellín</span>
                    <img src={iconEdit} alt="" />
                </div>
                <hr className="line__profile"/>

                <div className="edit__item">
                    <span>Dirección</span>
                    <span>Cra 56 # 30-30</span>
                    <img src={iconEdit} alt="" />
                </div>
                <hr className="line__profile"/>

            </section>


        </section>
    </section>

    
    </>
  );
};

export default Profile;
