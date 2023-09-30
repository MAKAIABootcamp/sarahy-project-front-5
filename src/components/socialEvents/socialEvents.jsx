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
    <main className="main__home " >
  
    <img src={socialesPrincipal} alt="" className="imgSocial__intro" />
    <section className="main__info dark:bg-neutral-800">
      <img src={logoIzquierda} alt="" className="logoIzquierda" />
      <div className="container__intro">
        <h1 className="main__title__home dark:text-neutral-200">Eventos Sociales</h1>
        <p className="main__parrafo dark:text-neutral-300">Celebra tus momentos especiales con Celebraciones Sarahy, donde nos encargamos de todos los detalles para crear experiencias inolvidables en eventos sociales. Desde bodas hasta fiestas, nuestro equipo profesional hará que tus sueños se hagan realidad. ¡Haz tu evento social extraordinario con nosotros!
        </p>
      </div>
      <img src={logoDerecha} alt="" className="logoDerecha" />
    </section>

    <section className="tipe__events dark:bg-neutral-600">
      <span className="title__events dark:text-neutral-300">TODOS LOS EVENTOS SOCIALES PARA TI</span>
      <div className="cards__events">
        <article className="details__event">
          <figure className="fig">
            <img src={boda} alt="" className="img" />
          </figure>
          <span className="span dark:text-neutral-200">BODAS</span>
        </article>
        <article className="details__event">
          <figure className="fig">
            <img src={quinceAños} alt="" className="img" />
          </figure>
          <span className="span dark:text-neutral-200">QUINCE AÑOS</span>
        </article>
        <article className="details__event">
          <figure className="fig">
            <img src={primeraComunion} alt="" className="img" />
          </figure>
          <span className="span dark:text-neutral-200">PRIMERA COMUNIÓN</span>
        </article>
        <article className="details__event">
          <figure className="fig">
            <img src={babyShower} alt="" className="img" />
          </figure>
          <span className="span dark:text-neutral-200">BABY SHOWER</span>
        </article>
      </div>
    </section>

    <section className="data__events dark:bg-neutral-800">
      <span className="title__data dark:text-neutral-200">
        ¿CÓMO CELEBRACIONES SARAHY HACE ESPECIAL Y UNICO TU EVENTO?
      </span>
      <div className="div__events">
        <div className="div__data">
          <article className="logo__title">
            <figure className="fig">
              <img src={logoNegro} alt="" className="img dark:bg-neutral-100" />
            </figure>
            <span className="span dark:text-neutral-300">Esperiencia personalizada</span>
          </article>
          <p className="paragraph dark:text-neutral-300"> Celebraciones Sarahy se destaca al adaptar cada evento social a los gustos y necesidades individuales, asegurando que cada celebración sea única y significativa.
          
          </p>
        </div>

        <div className="div__data">
          <article className="logo__title">
            <figure className="fig">
              <img src={logoNegro} alt="" className="img dark:bg-neutral-100" />
            </figure>
            <span className="span dark:text-neutral-300">Profesionalismo y creatividad</span>
          </article>
          <p className="paragraph dark:text-neutral-300">
          El equipo combina profesionalismo con creatividad excepcional para ofrecer eventos sorprendentes y memorables que destacan entre la multitud.
          </p>
        </div>

        <div className="div__data">
          <article className="logo__title">
            <figure className="fig">
              <img src={logoNegro} alt="" className="img dark:bg-neutral-100" />
            </figure>
            <span className="span dark:text-neutral-300">Atención a los detalles</span>
          </article>
          <p className="paragraph dark:text-neutral-300">
          Celebraciones Sarahy se enfoca en la atención meticulosa a cada detalle, desde la decoración hasta la logística, garantizando la ejecución sin problemas de cada evento social.
          </p>
        </div>
      </div>
    </section>

    <section className="galery dark:bg-neutral-800">
          <div className="logo__titleGalery">
          <figure className="fig">
              <img src={logoNegro} alt="" className="img dark:bg-neutral-100  dark:rounded-lg " />
          </figure>
          <span className="span dark:text-neutral-200">Galería</span>
          <button className="button__companies dark:bg-neutral-100 dark:text-neutral-800">Haz tu cotización </button>
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