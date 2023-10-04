import React, { useEffect, useState } from 'react'
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
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import { collection, getDocs } from "firebase/firestore";
import { firestore } from '../../firebase/firebaseConfig';
import Chat from '../../page/chat/Chat';

const SocialEvents = () => {
  const [comentarios, setComentarios] = useState([]);

  const traerComentarios = async () => {
    try {
        const comentarios = [];
        const querySnapshot = await getDocs(collection(firestore, "comments"));

        querySnapshot.forEach((doc) => {
            const comentarioData = doc.data();
            comentarios.push(comentarioData);
        });

        setComentarios(comentarios);
    } catch (error) {
        console.error("Error al traer comentarios:", error);
    }
}

useEffect(() => {
    traerComentarios();
}, []);

  return (
    <main className="main__home dark:!bg-neutral-700" >
                              <Chat headerImg={'idEvents'}/>

    <img id='idEvents' src={socialesPrincipal} alt="" className="imgSocial__intro" />
    <section className="main__info dark:bg-neutral-700">
      <img src={logoIzquierda} alt="" className="logoIzquierda" />
      <div className="container__intro">
        <h1 className="main__title__home dark:text-neutral-200">Eventos Sociales</h1>
        <p className="main__parrafo dark:text-neutral-300">Celebraciones Sarahy organiza eventos sociales memorables, desde bodas hasta fiestas, cuidando cada detalle. Nuestro equipo profesional hará realidad tus sueños, haciendo tu evento extraordinario.

        </p>
      </div>
      <img src={logoDerecha} alt="" className="logoDerecha" />
    </section>

    <section className="tipe__events dark:!bg-neutral-700">
      <span className="title__events dark:text-neutral-300">Todos los eventos sociales para ti</span>
      <div className="cards__events dark:!bg-neutral-700">
        <article className="details__event">
          <figure className="fig">
            <img src={boda} alt="" className="img" />
          </figure>
          <span className="span dark:text-neutral-200">Bodas</span>
        </article>
        <article className="details__event">
          <figure className="fig">
            <img src={quinceAños} alt="" className="img" />
          </figure>
          <span className="span dark:text-neutral-200">Quince años</span>
        </article>
        <article className="details__event">
          <figure className="fig">
            <img src={primeraComunion} alt="" className="img" />
          </figure>
          <span className="span dark:text-neutral-200">Primera comunión</span>
        </article>
        <article className="details__event">
          <figure className="fig">
            <img src={babyShower} alt="" className="img" />
          </figure>
          <span className="span dark:text-neutral-200">Baby shower</span>
        </article>
      </div>
    </section>

    <section className="data__events dark:bg-neutral-700">
      <span className="title__data dark:text-neutral-200">
        ¿Cómo Celebraciones Sarahy hace especial y unico tu evento?
      </span>
      <div className="div__events">
        <div className="div__data">
          <article className="logo__title">
            <figure className="fig">
              <img src={logoNegro} alt="" className="img dark:bg-neutral-100" />
            </figure>
            <span className="span dark:text-neutral-300">Esperiencia personalizada</span>
          </article>
          <p className="paragraph dark:text-neutral-300">Celebraciones Sarahy personaliza cada evento social para que sea único y significativo.
          
          </p>
        </div>

        <div className="div__data dark:!bg-neutral-700">
          <article className="logo__title">
            <figure className="fig">
              <img src={logoNegro} alt="" className="img dark:bg-neutral-100" />
            </figure>
            <span className="span dark:text-neutral-300">Profesionalismo y creatividad</span>
          </article>
          <p className="paragraph dark:text-neutral-300">
          El equipo combina profesionalismo con creatividad excepcional para ofrecer eventos memorables. 
          </p>
        </div>

        <div className="div__data dark:!bg-neutral-700">
          <article className="logo__title">
            <figure className="fig">
              <img src={logoNegro} alt="" className="img dark:bg-neutral-100" />
            </figure>
            <span className="span dark:text-neutral-300">Atención a los detalles</span>
          </article>
          <p className="paragraph dark:text-neutral-300">
          Celebraciones Sarahy cuida cada detalle para garantizar eventos sociales sin problemas y perfectamente ejecutados.
          </p>
        </div>
      </div>
    </section>

    <section className="galery dark:bg-neutral-700">
          <div className="logo__titleGalery">
          <figure className="fig">
              <img src={logoNegro} alt="" className="img dark:bg-neutral-100  dark:rounded-lg " />
          </figure>
          <span className="span dark:!text-neutral-200">Galería</span>
          <button className="button__companies dark:!bg-neutral-100 dark:!text-neutral-800">Haz tu cotización </button>
          </div>
          <div className="event__collagePlus">
              <CollageEvents imagenes={typEvent} className="description__img" />
            </div>

          {/* <figure className="collage__galery">
          <img src={prueba} alt="" className="img" />
          </figure> */}
    </section>

    <section className="comentarios dark:bg-neutral-700">
                    <h2 className='comentarios__title dark:text-neutral-200'>Testimonios</h2>
                    <hr className='hr__services' />
                    <div className="container__cards--coments">
                        <Swiper
                            slidesPerView={3}
                            className="swiper-container3 dark:opacity-70"
                            spaceBetween={30}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            loop={true}

                        >
                            {comentarios.map((comentario, index) => (
                                <SwiperSlide key={index} className='dark:!bg-neutral-700'>
                                    <div className="container__comen dark:!bg-neutral-700">
                                        <figure className="contenedor__imagen--comentario dark:!bg-neutral-800">
                                            <img src={comentario.photo} alt="imagen de comentario" className="img__comentario" />
                                        </figure>
                                        <div className="testimonio">
                                            <span className='span dark:!text-neutral-200' >{comentario.comment}</span>
                                            
                                            <div className="container__calificacion">
                                                {Array.from({ length: Math.min(comentario.qualification, 5) }, (_, i) => (
                                                    <img key={i} src={corazon1} alt="star-calificacion" className="star-calificacion" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

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