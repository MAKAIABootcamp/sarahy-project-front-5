import React from "react";
import "./profile.scss";
import arrowRight from "../../assets/images/flechaDerecha.png";
import photoProfile from "../../assets/images/fotoHombre.jpg";
import iconEdit from "../../assets/images/Edit.png";
import logoBlack from "../../assets/images/logoSarahyBlack.png";
import facebook from "../../assets/images/face.png";
import instagram from "../../assets/images/ig.png";
import whatsapp from "../../assets/images/wpp.png";


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

    <section className="footer">
        <div className="footer__information">
            <h5>CONTÁCTANOS</h5>
            <span>Celebraciones Sarahy</span>
            <span>Medellín-Colombia</span>
            <span>CEL: 3003003232</span>
            <span>E-MAIL:</span>
            <span>celebracionessarahy@gmail.com</span>
        </div>

        <div className="footer__information">
             <h5>INFORMACIÓN</h5>
            <span>Quienes somos</span>
            <span>Alíate con nosotros</span>
            <span>Trabaja con nosotros</span> 
        </div>

        <div className="followme">
        <h5>SIGUENOS</h5>
        <figure className="fig__logo">
            <img className="img__logo" src={logoBlack} alt="" />
        </figure>
        <article className="networks">
            <img className="img__network" src={facebook} alt="" />
            <img className="img__network" src={instagram} alt="" />
            <img className="img__network" src={whatsapp} alt="" />
        </article>
        </div>
        
    </section>
    </>
  );
};

export default Profile;
