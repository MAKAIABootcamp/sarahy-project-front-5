// react
import React, { useEffect, useState } from 'react'
import './home.scss';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';

// imagenes
import servicios1 from '../../assets/image/servicios1.png'
import servicios2 from '../../assets/image/decoracion.png'
import servicios3 from '../../assets/image/catering.png'
import corazon1 from '../../assets/image/corazon1.png'
import loguito from '../../assets/image/loguito.png'
import gota from '../../assets/image/gota.png'
import testimonio1 from '../../assets/image/testimonio1.png'
import testimonio2 from '../../assets/image/testimonio2.png'
import testimonio3 from '../../assets/image/testimonio3.png'
import logoIzquierda from '../../assets/image/gotaIzquierda.png'
import logoDerecha from '../../assets/image/gotaDerecha.png'
import marrano from '../../assets/image/marrano.png'
import relojArena from '../../assets/image/relojArena.png'
import celGota from '../../assets/image/celGota.png'
import circulo from '../../assets/image/circuloSomos.png'
import sliderBodas from '../../assets/image/boda.jpg'
import sliderCumpleaños from '../../assets/image/cumpleaños.jpg'
import sliderEmpresariales from '../../assets/image/empresariales1.jpg'
import sliderGrados from '../../assets/image/grados.jpg'
import sliderBufet from '../../assets/image/bufet.jpg'
import sliderAniversarios from '../../assets/image/bufet.jpg'




import { useNavigate } from 'react-router-dom';
import CustomModal from '../modal/CustomModal';
import Collage from '../collage/Collage';
import { typEvent } from './hookTypEvent';


const Home = () => {

    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };

    const navigate = useNavigate()

    const coordenadas = {
        boston: [6.181351558809866, -75.63979898219357],
        martin: [6.257171994676571, -75.56078624930181],
        milagrosa: [6.238439649830454, -75.5553639364111],
        playa: [6.247105551200784, -75.55793605912363],
    }
    const [coordenadasBoston, setCoordenadasBoston] = useState(coordenadas.boston);
    const [coordenadasMartin, setCoordenadasMartin] = useState(coordenadas.martin);
    const [coordenadasMilagrosa, setCoordenadasMilagrosa] = useState(coordenadas.milagrosa);
    const [coordenadasPlaya, setCoordenadasPlaya] = useState(coordenadas.playa);

    const [eventoSeleccionado, setEventoSeleccionado] = useState("Bodas")

      const handleEventoClick = (evento) => {
        setEventoSeleccionado(evento);
      };



    return (
        <>
            <main className="main__home">
                <section className='slider__home'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper" >


                        <SwiperSlide><img src={sliderBodas} alt="imagen de bodas" /> </SwiperSlide>

                        <SwiperSlide><img src={sliderCumpleaños} alt="imagen de bodas" /></SwiperSlide>
                        <SwiperSlide><img src={sliderAniversarios} alt="imagen de bodas" /></SwiperSlide>
                        <SwiperSlide><img src={sliderEmpresariales} alt="imagen de bodas" /></SwiperSlide>
                        <SwiperSlide><img src={sliderGrados} alt="imagen de bodas" /></SwiperSlide>
                        <SwiperSlide><img src={sliderBufet} alt="imagen de bodas" /></SwiperSlide>
                    </Swiper>
                </section>

                <section className='main__info'>
                    <img src={logoIzquierda} alt="" className='logoIzquierda' />
                    <div className="container__intro">
                        <h1 className='main__title__home'>Bienvenido a</h1>
                        <h4 className='main__subtitle'>Celebraciones Sarahy</h4>
                        <p className="main__parrafo">
                            Somos expertos en hacer eventos memorables. Con una pasión por la perfección y una atención meticulosa a cada detalle, nuestro objetivo es convertir tu boda en un día inolvidable. Desde la elección del lugar hasta la decoración, la gastronomía y la música, nos enorgullece crear experiencias únicas que reflejen tus sueños y deseos. Confía en nosotros para convertir tu día especial en un recuerdo que atesorarás para toda la vida.
                        </p>

                    </div>
                    <img src={logoDerecha} alt="" className='logoDerecha' />
                </section>

                <section className="typeEvent__home">
        <div className="btns">
          
          <button className={`btn__event ${eventoSeleccionado === "Bodas" ? "selected" : ""}`}
           onClick={() => handleEventoClick("Bodas")}>
            Bodas
          </button>
          <button className={`btn__event ${eventoSeleccionado === "Quinces" ? "selected" : ""}`} onClick={() => handleEventoClick("Quinces")}>
            Quinces
          </button>
          <button className={`btn__event ${eventoSeleccionado === "Cumpleaños" ? "selected" : ""}`} onClick={() => handleEventoClick("Cumpleaños")}>
            Cumpleaños
          </button>
          <button className={`btn__event ${eventoSeleccionado === "Empresariales" ? "selected" : ""}`} onClick={() => handleEventoClick("Empresariales")}>
            Empresariales
          </button>
          <button className={`btn__event ${eventoSeleccionado === "Educativos" ? "selected" : ""}`} onClick={() => handleEventoClick("Educativos")}>
            Educativos
          </button>
        </div>
        {eventoSeleccionado && (
          <div className="event__info">
            <div className="event__description">
              <h2 className="description__title">{typEvent[eventoSeleccionado].title}</h2>
              <p className="description__parrafo">{typEvent[eventoSeleccionado].description}</p>
              <button className="description__btn">Haz tu cotización</button>
            </div>
            <div className="event__collage">
              <Collage imagenes={typEvent[eventoSeleccionado].imagenes} className="description__img" />
            </div>
          </div>
        )}
      </section>




                <section className="services">
                    <h2 className='services__title'>CONOCE NUESTROS SERVICIOS</h2>
                    <div className='container__cards--services'>

                        <div className="card__services">
                            <h3 className='card__services--title'>FOTOGRAFÍA</h3>
                            <img src={servicios1} alt="Imagen del servicio ofrecido" className='img__services' />
                            <span className='card__services--span'>
                                Guardar los mejores momentos de tu evento con fotografias y videos de la mejor calidad.
                            </span>
                            <button className="service__btn">Ver más</button>
                        </div>

                        <div className="card__services">
                            <h3 className='card__services--title'>DECORACIÓN</h3>
                            <img src={servicios2} alt="Imagen del servicio ofrecido" className='img__services' />
                            <span className='card__services--span'>
                                Transformamos espacios en escenarios de ensueño con nuestra decoración experta
                            </span>
                            <button className="service__btn">Ver más</button>
                        </div>

                        <div className="card__services">
                            <h3 className='card__services--title'>CATERING</h3>
                            <img src={servicios3} alt="Imagen del servicio ofrecido" className='img__services' />
                            <span className='card__services--span'>
                                Deléitate con nuestro exquisito servicio de catering y saborea el éxito de tu evento
                            </span>
                            <button className="service__btn">Ver más</button>
                        </div>
                    </div>

                </section>


                <section className="encantados">
                    <div className="gota">
                        <img src={gota} alt="" className="gota__img" />
                    </div>
                    <div className="encatados__info">
                        <h2 className='encantados__title'>¡Encantados de verte aquí! </h2>
                        <div className="logo__subtitulo">
                            <img src={loguito} alt="" className='encantado__subtitulo--img' />
                            <h4 className='encantado__subtitulo'>En Sarahy encontrarás... </h4>
                        </div>
                        <p className="encantados__descripcion">
                            Aqui podrás encontrar los mejores precios y productos de calidad para tus eventos especiales, somos los profesionales que buscabas.
                        </p>
                    </div>

                </section>

                <section className='beneficios'>
                    <h1 className='beneficios__title'>BENEFICIOS DE REALIZAR TU EVENTO CON NOSOTROS</h1>
                    <div className="container__beneficios">
                        <div className='beneficio__card card__beneficio--1'>
                            <img src={marrano} alt="" className="icnono__beneficios" />
                            <span className='card__beneficio--title'>
                                Descuentos
                            </span>
                            <p className="card__beneficios--p">
                                Accede a descuentos exclusivos en servicios y productos relacionados con eventos a través de nuestras asociaciones con proveedores.
                            </p>
                        </div>

                        <div className='beneficio__card card__beneficio--2'>
                            <img src={celGota} alt="" className="icnono__beneficios" />
                            <span className='card__beneficio--title'>
                                Ahorro de Tiempo
                            </span>
                            <p className="card__beneficios--p">
                                Ahorramos tiempo valioso al manejar todas las tareas de organización, desde la logística hasta la coordinación, para que puedas concentrarte en disfrutar de tu día.
                            </p>
                        </div>

                        <div className='beneficio__card'>
                            <img src={relojArena} alt="" className="icnono__beneficios" />
                            <span className='card__beneficio--title'>
                                Innovación Tecnológica
                            </span>
                            <p className="card__beneficios--p">
                                tilizamos las últimas tecnologías para brindarte soluciones modernas y eficientes en la gestión de eventos y seguimiento del proceso
                            </p>
                        </div>

                    </div>
                </section>

                <section className="ubicacion">
                    <div className="ubicacion__transparencia">
                        <span className="ubicacion__title--transparencia">
                            LOCACIONES
                        </span>
                    </div>

                    <div className="container__locaciones">
                        <div className="card__ubicacion">
                            <div className='card__separacion--ubicacion'>
                                <img src={loguito} alt="" className="loguito__ubicacion" />
                                <h3 className="nombre__ubicacion">CONVENIO BOSTON</h3>
                            </div>
                            <button className="verDetalles__ubicacion" onClick={openModal}>VER DETALLES</button>
                            <CustomModal isOpen={modal} onRequestClose={closeModal} cordenada={coordenadasBoston} />
                        </div>

                        <div className="card__ubicacion">
                            <div className='card__separacion--ubicacion'>
                                <img src={loguito} alt="" className="loguito__ubicacion" />
                                <h3 className="nombre__ubicacion">SALON SAN MARTIN</h3>
                            </div>
                            <button className="verDetalles__ubicacion">VER DETALLES</button>
                        </div>

                        <div className="card__ubicacion">
                            <div className='card__separacion--ubicacion'>
                                <img src={loguito} alt="" className="loguito__ubicacion" />
                                <h3 className="nombre__ubicacion">VILLA MANUELA LA MILAGROSA </h3>
                            </div>
                            <button className="verDetalles__ubicacion">VER DETALLES</button>
                        </div>

                        <div className="card__ubicacion">
                            <div className='card__separacion--ubicacion'>
                                <img src={loguito} alt="" className="loguito__ubicacion" />
                                <h3 className="nombre__ubicacion">PLAYA REAL</h3>
                            </div>
                            <button className="verDetalles__ubicacion">VER DETALLES</button>
                        </div>

                        <div className="card__ubicacion">
                            <div className='card__separacion--ubicacion'>
                                <img src={loguito} alt="" className="loguito__ubicacion" />
                                <h3 className="nombre__ubicacion">CONVENIO BOSTON</h3>
                            </div>
                            <button className="verDetalles__ubicacion">VER DETALLES</button>
                        </div>

                        <div className="card__ubicacion">
                            <div className='card__separacion--ubicacion'>
                                <img src={loguito} alt="" className="loguito__ubicacion" />
                                <h3 className="nombre__ubicacion">CONVENIO BOSTON</h3>
                            </div>
                            <button className="verDetalles__ubicacion" onClick={openModal} >VER DETALLES</button>
                            <CustomModal isOpen={modal} onRequestClose={closeModal} cordenada={coordenadasBoston} />

                        </div>
                    </div>

                    <div className="barra__grande--ubicacion">
                        <div className="container__barra">
                            <img src={loguito} alt="" className="loguito__ubicacion--barra" />
                            <h3 className="ubicacion__barra">
                                SERVICIO A DOMICILIO
                            </h3>
                        </div>
                        <button className="ver__barra">VER DETALLES</button>
                    </div>


                </section>

                <section className="quieneSomos">
                    <div className="circuloSomos">
                        <img src={circulo} alt="" className="circulo__somos--img" />
                    </div>
                    <div className="descripcion">
                        Somos una empresa creada para prestación de servicios a nivel regional especializada en la organización de todo tipo de eventos .
                        Fiestas de cumpleaños, Bodas, Reuniones y eventos corporativos, Recepciones, Conferencias, Eventos deportivos; Ofrecemos planificación de eventos, diseño y producción. Sea lo que sea que necesite, disponemos de lo necesario para hacer que su evento sea inolvidable
                    </div>
                </section>


                <section className="comentarios">
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
                </section>
            </main >
        </>
    )

}
export default Home;