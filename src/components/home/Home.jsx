// react
import React, { useEffect, useState } from 'react'
import './home.scss';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// imagenes
import logo from "../../assets/image/logo-blanco.png";
import bodas from '../../assets/image/boda.png'
import servicios1 from '../../assets/image/servicios1.png'
import servicios2 from '../../assets/image/decoracion.png'
import servicios3 from '../../assets/image/catering.png'
import corazon1 from '../../assets/image/corazon1.png'
import sliderBodas from '../../assets/image/boda.jpg'
import sliderCumpleaños from '../../assets/image/cumpleaños.jpg'
import sliderEmpresariales from '../../assets/image/empresariales1.jpg'
import sliderGrados from '../../assets/image/grados.jpg'
import sliderBufet from '../../assets/image/bufet.jpg'
import sliderAniversarios from '../../assets/image/bufet.jpg' 
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


import { useNavigate } from 'react-router-dom';
import CustomModal from '../modal/CustomModal';


const Home = () => {

    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(true);
      };
    
      const closeModal = () => {
        setModal(false);
      };

    const navigate = useNavigate()
    // useEffect( () => 
    // {
    //     const getServiceAll = async () => 
    //     {
    //         const date = await getService('photography');
            
    //         if(date)
    //         {
    //             console.log('Los Servicios de foto son: ', date);
    //         }
    //         else
    //         {
    //             console.log('Acción fallida.')
    //         }
    //     }

    //     const addService = async () => 
    //     {
    //         const nuevoServicio = {
    //             description: "Graba ese momento para un futuro. ",
    //             image: "URL de la nueva imagen",
    //             name: "Captura Históricas",
    //             price: 110000,
    //           };
              
    //         await addNewService('photography', nuevoServicio);
            

        

        // const editService = async () => 
        // {
        //     await editServiceField("photography", "Fotolibro30x40.description", "Nuevo título para prueba.");
        // } 

        // const deleteService = async() => 
        // {
        //     await deleteServiceField("photography", "Movie");
        // }


        // const addQuote = async() => 
        // {
        //     const quote = {event: "Cumpleaños", servicios: [1, 2, 3, 4], total: 58900 }
        //     await addNewQuote("JlQjLzQgnyNH27JozbhUv28atw22", quote);
        // }

        // deleteService();


    // },[])
    return (
        <>
            <main className="main__home">
                <div className="header__transparent">
                    <nav clasName="header__navbar">
                        <ul className='header__navbar--lista'>
                            <li className='navbar__items'>Incio</li>
                            <li className='navbar__items'>Eventos sociales</li>
                            <li className='navbar__items'>Eventos empresariales</li>
                            <li className='navbar__items--logo'>{<img src={logo} className='logo__item--img' />}</li>
                            <li className='navbar__items'>Seamos aliados</li>
                            <li className='navbar__items'>Contactanos</li>
                            <li className='navbar__items'>Cotiza aquí</li>
                        </ul>
                    </nav>
                </div>
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
                    <img src={logoIzquierda} alt="" className='logoIzquierda'/>
                    <div className="container__intro">
                        <h1 className='main__title__home'>Bienvenido a</h1>
                        <h4 className='main__subtitle'>Celebraciones Sarahy</h4>
                        <p className="main__parrafo">
                            Somos expertos en hacer eventos memorables. Con una pasión por la perfección y una atención meticulosa a cada detalle, nuestro objetivo es convertir tu boda en un día inolvidable. Desde la elección del lugar hasta la decoración, la gastronomía y la música, nos enorgullece crear experiencias únicas que reflejen tus sueños y deseos. Confía en nosotros para convertir tu día especial en un recuerdo que atesorarás para toda la vida
                        </p>

                    </div>
                    <img src={logoDerecha} alt="" className='logoDerecha'/>
                </section>

                <section className='typeEvent__home'>
                    <div className="btns">
                        <button className="btn__event" onClick={() => navigate('/bodas')}> Bodas</button>
                        <button className="btn__event">Quince años</button>
                        <button className="btn__event">Cumpleaños</button>
                        <button className="btn__event">Empresariales</button>
                        <button className="btn__event">Educativos</button>
                    </div>

                    <div className='event__info'>
                        <div className='event__description'>
                            <h2 className='description__title'>LA BODA DE TUS SUEÑOS</h2>
                            <p className='description__parrafo'>
                                Somos expertos en crear eventos memorables y nos enorgullece hacer que tu boda sea perfecta en cada detalle. Desde la elección del lugar hasta la decoración y el menú, dedicamos toda nuestra pasión para que tu día sea inolvidable
                            </p>
                            <button className="description__btn">
                                Haz tu cotización
                            </button>
                        </div>
                        <div className="event__collage">
                            <img src={bodas} className='description__img' alt="Imagen de descripcion del evento" />
                        </div>
                    </div>

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
                        <h2 className='encantados__title'>Encantados de verte aqui </h2>
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
                            <img src={marrano} alt="" className="icnono__beneficios"/>
                            <span className='card__beneficio--title'>
                                Descuentos
                            </span>
                            <p className="card__beneficios--p">
                                Accede a descuentos exclusivos en servicios y productos relacionados con eventos a través de nuestras asociaciones con proveedores.
                            </p>
                        </div>

                        <div className='beneficio__card card__beneficio--2'>
                            <img src={celGota} alt="" className="icnono__beneficios"/>
                            <span className='card__beneficio--title'>
                                Ahorro de Tiempo
                            </span>
                            <p className="card__beneficios--p">
                                Ahorramos tiempo valioso al manejar todas las tareas de organización, desde la logística hasta la coordinación, para que puedas concentrarte en disfrutar de tu día.
                            </p>
                        </div>

                        <div className='beneficio__card'>
                            <img src={relojArena} alt="" className="icnono__beneficios"/>
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
                            <CustomModal isOpen={modal} onRequestClose={closeModal} />
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
                            <button className="verDetalles__ubicacion">VER DETALLES</button>
                        </div>

                        <div className="card__ubicacion">
                            <div className='card__separacion--ubicacion'>
                                <img src={loguito} alt="" className="loguito__ubicacion" />
                                <h3 className="nombre__ubicacion">CONVENIO BOSTON</h3>
                            </div>
                            <button className="verDetalles__ubicacion" onClick={openModal} >VER DETALLES</button>
                            <CustomModal isOpen={modal} onRequestClose={closeModal} />

                        </div>
                    </div>
                    
                    <div className="barra__grande--ubicacion">
                        <div className="container__barra">
                            <img src={loguito} alt="" className="loguito__ubicacion--barra" />
                            <h3 className="ubicacion__barra">
                                Servicio a domicilio
                            </h3>
                        </div>
                            <button className="ver__barra">VER DETALLES</button>
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