import React from 'react'
import logo from "../../assets/image/logo-blanco.png";
import logoIzquierda from "../../assets/image/gotaIzquierda.png";
import logoDerecha from "../../assets/image/gotaDerecha.png";
import logoNegro from "./assets/logoNegro.png";
import prueba from "./assets/prueba.jpg";
import primeraComunion from "./assets/primeraComunion.jpg";
import babyShower from "./assets/babyShower.jpg";
import boda from "./assets/boda.jpg";
import socialesPrincipal from "./assets/socialesPrincipal.jpg";
import quinceAños from "./assets/quinceAños.jpg";
import './socialEvents.scss'

import testimonio1 from '../../assets/image/testimonio1.png'
import testimonio2 from '../../assets/image/testimonio2.png'
import testimonio3 from '../../assets/image/testimonio3.png'
import corazon1 from '../../assets/image/corazon1.png'
import CollageEvents from '../collageEvents/Collage';
import { typEvent } from "./hookTypEvent";

const SocialEvents = () => {
  return (
    <main className="main__home">
    {/* <div className="header__transparent">
      <nav className="header__navbar">
        <ul className="header__navbar--lista">
          <li
            className="navbar__items"
            onClick={() => {
              navigate("/");
            }}
          >
            Incio
          </li>
          <li className="navbar__items">Eventos sociales</li>
          <li className="navbar__items">Eventos empresariales</li>
          <li className="navbar__items--logo">
            {<img src={logo} className="logo__item--img" />}
          </li>
          <li className="navbar__items">Seamos aliados</li>
          <li className="navbar__items">Contáctanos</li>
          <li
            className="navbar__items"
            onClick={() => {
              navigate("/quote");
            }}
          >
            Cotiza aquí
          </li>
        </ul>
      </nav>
    </div> */}
    <img src={socialesPrincipal} alt="" className="imgSocial__intro" />
    <section className="main__info">
      <img src={logoIzquierda} alt="" className="logoIzquierda" />
      <div className="container__intro">
        <h1 className="main__title__home">Eventos Sociales</h1>
        <p className="main__parrafo">Celebra tus momentos especiales con Celebraciones Sarahy, donde nos encargamos de todos los detalles para crear experiencias inolvidables en eventos sociales. Desde bodas hasta fiestas, nuestro equipo profesional hará que tus sueños se hagan realidad. ¡Haz tu evento social extraordinario con nosotros!
        </p>
      </div>
      <img src={logoDerecha} alt="" className="logoDerecha" />
    </section>

    <section className="tipe__events">
      <span className="title__events">TODOS LOS EVENTOS SOCIALES PARA TI</span>
      <div className="cards__events">
        <article className="details__event">
          <figure className="fig">
            <img src={boda} alt="" className="img" />
          </figure>
          <span className="span">BODAS</span>
        </article>
        <article className="details__event">
          <figure className="fig">
            <img src={quinceAños} alt="" className="img" />
          </figure>
          <span className="span">QUINCE AÑOS</span>
        </article>
        <article className="details__event">
          <figure className="fig">
            <img src={primeraComunion} alt="" className="img" />
          </figure>
          <span className="span">PRIMERA COMUNIÓN</span>
        </article>
        <article className="details__event">
          <figure className="fig">
            <img src={babyShower} alt="" className="img" />
          </figure>
          <span className="span">BABY SHOWER</span>
        </article>
      </div>
    </section>

    <section className="data__events">
      <span className="title__data">
        ¿CÓMO CELEBRACIONES SARAHY HACE ESPECIAL Y UNICO TU EVENTO?
      </span>
      <div className="div__events">
        <div className="div__data">
          <article className="logo__title">
            <figure className="fig">
              <img src={logoNegro} alt="" className="img" />
            </figure>
            <span className="span">Esperiencia personalizada</span>
          </article>
          <p className="paragraph"> Celebraciones Sarahy se destaca al adaptar cada evento social a los gustos y necesidades individuales, asegurando que cada celebración sea única y significativa.
          
          </p>
        </div>

        <div className="div__data">
          <article className="logo__title">
            <figure className="fig">
              <img src={logoNegro} alt="" className="img" />
            </figure>
            <span className="span">Profesionalismo y creatividad</span>
          </article>
          <p className="paragraph">
          El equipo combina profesionalismo con creatividad excepcional para ofrecer eventos sorprendentes y memorables que destacan entre la multitud.
          </p>
        </div>

        <div className="div__data">
          <article className="logo__title">
            <figure className="fig">
              <img src={logoNegro} alt="" className="img" />
            </figure>
            <span className="span">Atención a los detalles</span>
          </article>
          <p className="paragraph">
          Celebraciones Sarahy se enfoca en la atención meticulosa a cada detalle, desde la decoración hasta la logística, garantizando la ejecución sin problemas de cada evento social.
          </p>
        </div>
      </div>
    </section>

    <section className="galery">
          <div className="logo__titleGalery">
          <figure className="fig">
              <img src={logoNegro} alt="" className="img" />
          </figure>
          <span className="span">Galería</span>
          <button className="button__companies">Haz tu cotización </button>
          </div>
          <div className="event__collagePlus">
              <CollageEvents imagenes={typEvent} className="description__img" />
            </div>

          {/* <figure className="collage__galery">
          <img src={prueba} alt="" className="img" />
          </figure> */}
    </section>

    {/* <section className="comentarios">
                    <h2 className='comentarios__title'>TESTIMONIOS</h2>
                    <hr className='hr__services' />
                    <div className="container__cards--coments">
                        <div className='container__comen'>
                            <img src={testimonio1} alt="imagen de comentario" className='img__comentario' />
                            <span className="testimonio">
                                Realizarón la boda de mis sueños muchas gracias...
                            </span>
                            <div className="container__calificacion">
                                <img src={corazon1} alt="star-calificacion" className='star-calificacion' />
                                <img src={corazon1} alt="star-calificacion" className='star-calificacion' />
                                <img src={corazon1} alt="star-calificacion" className='star-calificacion' />
                                <img src={corazon1} alt="star-calificacion" className='star-calificacion' />
                                <img src={corazon1} alt="star-calificacion" className='star-calificacion' />
                            </div>
                        </div>
                        <div className='container__comen'>
                            <img src={testimonio2} alt="imagen de comentario" className='img__comentario' />
                            <span className="testimonio">
                                Excelente servicio, me agradaron mucho las personas de logistica son muy amables y la pagina es perfecta los quiero
                            </span>
                            <div className="container__calificacion">
                                <img src={corazon1} alt="star-calificacion" className='star-calificacion' />
                                <img src={corazon1} alt="star-calificacion" className='star-calificacion' />
                                <img src={corazon1} alt="star-calificacion" className='star-calificacion' />
                                <img src={corazon1} alt="star-calificacion" className='star-calificacion' />
                                <img src={corazon1} alt="star-calificacion" className='star-calificacion' />
                            </div>
                        </div>
                        <div className='container__comen'>
                            <img src={testimonio3} alt="imagen de comentario" className='img__comentario' />
                            <span className="testimonio">
                              Los recomiendo demasiado los mejores en prestar este tipo de servicios
                            </span>
                            <div className="container__calificacion">
                                <img src={corazon1} alt="star-calificacion" className='star-calificacion' />
                                <img src={corazon1} alt="star-calificacion" className='star-calificacion' />
                                <img src={corazon1} alt="star-calificacion" className='star-calificacion' />
                                <img src={corazon1} alt="star-calificacion" className='star-calificacion' />
                                <img src={corazon1} alt="star-calificacion" className='star-calificacion' />
                            </div>
                        </div>
                    </div>
                </section> */}

  </main>
  )
}

export default SocialEvents