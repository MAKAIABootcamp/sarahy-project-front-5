import React from "react";
import "./profile.scss";
import arrowRight from "../../assets/image/flechaDerecha.png";
import photoProfile from "../../assets/image/fotoHombre.jpg";
import iconEdit from "../../assets/image/Edit.png";
import logoBlack from "../../assets/image/logoSarahyBlack.png";
import facebook from "../../assets/image/face.png";
import instagram from "../../assets/image/ig.png";
import whatsapp from "../../assets/image/wpp.png";


const Profile = () => {
  return (
    <>
    <section className="title__profile">
        <h2 className="title">Perfil</h2>
        <hr className="line__profile" />
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
                    <span className="span">Nombre</span>
                    <span className="span">Juanito Pérez</span>
                    <img src={iconEdit} alt="" />
                </div>
                <hr className="line__profile"/>

                <div className="edit__item">
                    <span className="span">Contacto</span>
                    <span className="span">3003652020</span>
                    <img src={iconEdit} alt="" />
                </div>
                <hr className="line__profile"/>

                <div className="edit__item">
                    <span className="span">Edad</span>
                    <span className="span">32</span>
                    <img src={iconEdit} alt="" />
                </div>
                <hr className="line__profile"/>

                <div className="edit__item">
                    <span className="span">Cuidad</span>
                    <span className="span">Medellín</span>
                    <img src={iconEdit} alt="" />
                </div>
                <hr className="line__profile"/>

                <div className="edit__item">
                    <span className="span">Dirección</span>
                    <span className="span">Cra 56 # 30-30</span>
                    <img src={iconEdit} alt="" />
                </div>
                <hr className="line__profile"/>

            </section>

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
                <div className="data__price">
                    <span className="span__data">Baby Shower</span>
                    <span className="span__data">20/11/2023</span>
                    <span className="span__data">$4'500.000</span>
                </div>
                <div className="data__price">
                    <span className="span__data">Baby Shower</span>
                    <span className="span__data">20/11/2023</span>
                    <span className="span__data">$4'500.000</span>
                </div>
            </section>

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


            <section className="show__comments">
                <span className="title">Déjanos tus comentarios</span>
                <form action="" className="form__comments">
                    <article className="article__form">
                    <label htmlFor="" className="label">Evento:</label>
                    <input type="text" placeholder="Ingresa el tipo de evento" className="input"/>
                    </article>

                    <article className="article__form">
                    <label htmlFor="" className="label">Comentario:</label>
                    <input type="text" placeholder="Escribe tu comentario" className="input"/>
                    </article>

                    <article className="article__form">
                    <label htmlFor="" className="label">Calificación:</label>
                   
                    </article>
                    
                    <button className="btn__comments">Enviar comentario</button>
                
                </form>

               
            </section>


        </section>
    </section>

    {/* <section className="footer">
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
        
    </section> */}
    </>
  );
};

export default Profile;
