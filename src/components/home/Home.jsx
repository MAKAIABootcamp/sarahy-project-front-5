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
import service_catering from '../../assets/image/service_catering.jpg'
import service_decoracion from '../../assets/image/service_decoracion.jpg'
import service_fotos from '../../assets/image/service_foto.jpg'
import service_animacion from '../../assets/image/service_animacion.jpg'
import service_musica from '../../assets/image/service_musica.jpg'
import service_iluminacion from '../../assets/image/service_iluminacion.jpg'


import corazon1 from '../../assets/image/corazon1.png'
import loguito from '../../assets/image/loguito.png'
import gota from '../../assets/image/gota.png'
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
import sliderTipo1 from '../../assets/image/matrimonioAdorno.jpg'
import sliderAniversarios from '../../assets/image/bufet.jpg'
import { collection, getDocs } from "firebase/firestore";




import { useNavigate } from 'react-router-dom';
import CustomModal from '../modalLocations/CustomModal';
import Collage from '../collage/Collage';
import { typEvent } from './hookTypEvent';
import { addUserFireStore } from '../../services/addUserNew';
import { addNewService } from '../../services/addNewService';
import 'swiper/swiper-bundle.css';
import { firestore } from '../../firebase/firebaseConfig';
import { ubicaciones } from './hookUbicaciones';
import { element } from 'prop-types';
import Chat from '../../page/chat/Chat';
import useScreenSize from '../../services/screen';




const Home = () => {

    const [comentarios, setComentarios] = useState([]);
    const [modal, setModal] = useState(false);
    const [selectedElement, setSelectedElement] = useState({});
    const { width, height } = useScreenSize();

    const openModal = (element) => {
        setSelectedElement(element);
        setModal(true);
    };

    const closeModal = () => {
        setSelectedElement(null);
        setModal(false);
    };

    const navigate = useNavigate()


    const [eventoSeleccionado, setEventoSeleccionado] = useState("Bodas")

    const handleEventoClick = (evento) => {
        setEventoSeleccionado(evento);
    };

    useEffect(() => {
        const addUserme = async () => {

            await addUserFireStore('Ball', 'lauenfhkjshgbwvh2874dio43nud3', 'ball@gmail.com')
            console.log('USUARIO CREADO. ');

        }
        addUserme();
    }, [])


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
        <>
            <main className="main__home dark:bg-neutral-700" >
                {/* <Chat /> */}
                <Chat headerImg={'homeIMG'} />
                <div className='imagen__home--res'>
                </div>
                <section id='homeIMG' className='slider__home dark:!bg-neutral-700'>
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
                        className="mySwiper dark:!bg-neutral-700" >


                        <SwiperSlide className='dark:bg-neutral-400'><img src={sliderBodas} alt="imagen de bodas" /> </SwiperSlide>
                        <SwiperSlide className='dark:bg-neutral-400'><img src={sliderCumpleaños} alt="imagen de bodas" /></SwiperSlide>
                        <SwiperSlide className='dark:bg-neutral-400'><img src={sliderAniversarios} alt="imagen de bodas" /></SwiperSlide>
                        <SwiperSlide className='dark:bg-neutral-400'><img src={sliderEmpresariales} alt="imagen de bodas" /></SwiperSlide>
                        <SwiperSlide className='dark:bg-neutral-400'><img src={sliderGrados} alt="imagen de bodas" /></SwiperSlide>
                        <SwiperSlide className='dark:bg-neutral-400'><img src={sliderTipo1} alt="imagen de bodas" /></SwiperSlide>
                    </Swiper>
                </section>

                <section className='main__info dark:bg-neutral-700' >
                    <img src={logoIzquierda} alt="" className='logoIzquierda' />
                    <div className="container__intro">
                        <h1 className='main__title__home dark:text-neutral-100'>Bienvenido a</h1>
                        <h4 className='main__subtitle dark:text-neutral-300' >Celebraciones Sarahy</h4>
                        <p className="main__parrafo dark:text-neutral-300">
                            Únete a nosotros en Celebraciones Sarahy y haz de tus eventos una experiencia excepcional. ¡Déjanos hacer realidad tus celebraciones de ensueño y transformar cada detalle en un recuerdo inolvidable que perdurará para siempre!
                        </p>

                    </div>
                    <img src={logoDerecha} alt="" className='logoDerecha' />
                </section>
                    <section className="eventos__mobile">
                        <div className="container__card--mobile">
                            <img src="https://www.zankyou.com.mx/images/mag-card-c/ad8/8ade/878/623/-/mx/wp-content/uploads/2018/05/antonio-saucedo.jpg" alt="" className="card__mobile" />
                            <span className="span__evento--mobile">
                                Bodas
                            </span>
                        </div>
                        <div className="container__card--mobile">
                            <img src="https://primicia.com.ve/wp-content/uploads/2022/09/xv_-anos_chicas_tips_eventos.jpg" alt="" className="card__mobile" />
                            <span className="span__evento--mobile">
                                Quince años
                            </span>
                        </div>
                        <div className="container__card--mobile">
                            <img src="https://www.esneca.com/wp-content/uploads/eventos-sociales.jpg" alt="" className="card__mobile" />
                            <span className="span__evento--mobile">
                                Eventos sociales
                            </span>
                        </div>
                        <div className="container__card--mobile">
                            <img src="https://creativando.es/wp-content/uploads/2018/08/tipos-de-eventos-4.jpg" alt="" className="card__mobile" />
                            <span className="span__evento--mobile">
                                Eventos empresariales
                            </span>
                        </div>
                    </section>
                <section className="typeEvent__home" id='Tipos-Eventos'>
                    <div className="btns dark:text-neutral-700" >

                        <button className={`btn__event dark:!bg-neutral-400 dark:!text-neutral-900 ${eventoSeleccionado == "Bodas" ? "selected" : ""}`}
                            onClick={() => handleEventoClick("Bodas")}>
                            Bodas
                        </button>
                        <button className={`btn__event dark:!bg-neutral-400 dark:!text-neutral-900 ${eventoSeleccionado === "Quinces" ? "selected" : ""}`} onClick={() => handleEventoClick("Quinces")}>
                            Quince Años
                        </button>
                        <button className={`btn__event dark:!bg-neutral-400 dark:!text-neutral-900 ${eventoSeleccionado === "Cumpleaños" ? "selected" : ""}`} onClick={() => handleEventoClick("Cumpleaños")}>
                            Primeras comuniones
                        </button>
                        <button className={`btn__event dark:!bg-neutral-400 dark:!text-neutral-900 ${eventoSeleccionado === "Empresariales" ? "selected" : ""}`} onClick={() => handleEventoClick("Empresariales")}>
                            Empresariales
                        </button>
                        <button className={`btn__event dark:!bg-neutral-400 dark:!text-neutral-900 ${eventoSeleccionado === "Educativos" ? "selected" : ""}`} onClick={() => handleEventoClick("Educativos")}>
                            Educativos
                        </button>
                    </div>
                    {eventoSeleccionado && (
                        <div className="event__info dark:!bg-neutral-700">
                            <div className="event__description dark:text-neutral-300">
                                <h2 className="description__title">{typEvent[eventoSeleccionado].title}</h2>
                                <p className="description__parrafo">{typEvent[eventoSeleccionado].description}</p>
                                <button className="description__btn dark:!bg-neutral-400 dark:text-neutral-100" onClick={() => {navigate("/quote"); window.scrollTo(0, 400);}}>Haz tu cotización</button>
                            </div>
                            <div className="event__collage">
                                <Collage imagenes={typEvent[eventoSeleccionado].imagenes} className="description__img" />
                            </div>
                        </div>
                    )}
                </section>

                <section className="services dark:bg-neutral-700">
                    <h2 className='services__title dark:text-neutral-300' >Conoce nuestros servicios</h2>

                    {width < 600 ? (
                        <div className='container__cards--services'>
                        <Swiper
                            className="my-swiper-2 dark:bg-neutral-700"
                            slidesPerView={3}
                            spaceBetween={10}
                            // autoplay={{
                            //     delay: 1000,
                            //     disableOnInteraction: false,
                            // }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            // loop={true}

                        >

                            <SwiperSlide className=' swiperCard dark:!bg-neutral-700'>
                                <div className="card__services dark:!bg-neutral-300">
                                    <h3 className='card__services--title '>CATERING</h3>
                                    <img src={service_catering} alt="Imagen del servicio ofrecido" className='img__services' />
                                 

                                </div>
                            </SwiperSlide>

                         
                            <SwiperSlide>
                                <div className="card__services dark:!bg-neutral-300">
                                    <h3 className='card__services--title '>DECORACIÓN</h3>
                                    <img src={service_decoracion} alt="Imagen del servicio ofrecido" className='img__services' />
                                   
                                </div>
                            </SwiperSlide>

            
                            <SwiperSlide>
                                <div className="card__services dark:bg-neutral-300">
                                    <h3 className='card__services--title '>FOTOGRAFÍA</h3>
                                    <img src={service_fotos} alt="Imagen del servicio ofrecido" className='img__services' />
                                  
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card__services dark:bg-neutral-300">
                                    <h3 className='card__services--title '>ANIMACIÓN</h3>
                                    <img src={service_animacion} alt="Imagen del servicio ofrecido" className='img__services' />
                                   
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card__services dark:bg-neutral-300">
                                    <h3 className='card__services--title '>MÚSICA Y DJS</h3>
                                    <img src={service_musica} alt="Imagen del servicio ofrecido" className='img__services' />
                                  
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card__services dark:bg-neutral-300">
                                    <h3 className='card__services--title '>ILUMINACIÓN</h3>
                                    <img src={service_iluminacion} alt="Imagen del servicio ofrecido" className='img__services' />
    
                                </div>
                            </SwiperSlide>
                        </Swiper>


                        
                    </div>

                    ): (
                        <div className='container__cards--services'>
                        <Swiper
                            className="my-swiper-2 dark:bg-neutral-700"
                            slidesPerView={4}
                            spaceBetween={30}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                        // loop={true}
                        >

                            <SwiperSlide className=' swiperCard dark:!bg-neutral-700'>
                                <div className="card__services dark:!bg-neutral-300">
                                    <h3 className='card__services--title '>CATERING</h3>
                                    <img src={service_catering} alt="Imagen del servicio ofrecido" className='img__services' />
                                 

                                </div>
                            </SwiperSlide>

                         
                            <SwiperSlide>
                                <div className="card__services dark:!bg-neutral-300">
                                    <h3 className='card__services--title '>DECORACIÓN</h3>
                                    <img src={service_decoracion} alt="Imagen del servicio ofrecido" className='img__services' />
                                   
                                </div>
                            </SwiperSlide>

            
                            <SwiperSlide>
                                <div className="card__services dark:bg-neutral-300">
                                    <h3 className='card__services--title '>FOTOGRAFÍA</h3>
                                    <img src={service_fotos} alt="Imagen del servicio ofrecido" className='img__services' />
                                  
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card__services dark:bg-neutral-300">
                                    <h3 className='card__services--title '>ANIMACIÓN</h3>
                                    <img src={service_animacion} alt="Imagen del servicio ofrecido" className='img__services' />
                                   
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card__services dark:bg-neutral-300">
                                    <h3 className='card__services--title '>MÚSICA Y DJS</h3>
                                    <img src={service_musica} alt="Imagen del servicio ofrecido" className='img__services' />
                                  
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card__services dark:bg-neutral-300">
                                    <h3 className='card__services--title '>ILUMINACIÓN</h3>
                                    <img src={service_iluminacion} alt="Imagen del servicio ofrecido" className='img__services' />
    
                                </div>
                            </SwiperSlide>
                        </Swiper>


                        
                    </div>

                    )}
                    
                </section>

                <section className="encantados dark:bg-neutral-700">
                    <div className="gota">
                        <img src={gota} alt="" className="gota__img" />
                    </div>
                    <div className="encatados__info">
                        <h2 className='encantados__title dark:text-neutral-200'>¡Encantados de verte aquí! </h2>
                        <div className="logo__subtitulo dark:text-neutral-300">
                            <img src={loguito} alt="" className='encantado__subtitulo--img dark:bg-neutral-300 rounded-xl' />
                            <h4 className='encantado__subtitulo'>En Sarahy encontrarás... </h4>
                        </div>
                        <p className="encantados__descripcion dark:text-neutral-300">
                            Aquí podrás encontrar los mejores precios y productos de calidad para tus eventos especiales, somos los profesionales que buscabas.
                        </p>
                    </div>

                </section>

                <section className='beneficios dark:bg-neutral-700'>
                    <h1 className='beneficios__title dark:text-neutral-200'>Beneficios de realizar tu evento con Celebraciones Sarahy</h1>
                    <div className="container__beneficios">
                        <div className='beneficio__card card__beneficio--1'>
                            <img src={marrano} alt="" className="icnono__beneficios" />
                            <span className='card__beneficio--title dark:text-neutral-300'>
                                Descuentos
                            </span>
                            <p className="card__beneficios--p dark:text-neutral-400">
                                Obtén descuentos exclusivos en servicios y productos para eventos con nuestros proveedores asociados.
                            </p>
                        </div>

                        <div className='beneficio__card card__beneficio--2'>
                            <img src={celGota} alt="" className="icnono__beneficios" />
                            <span className='card__beneficio--title dark:text-neutral-300'>
                                Ahorro de Tiempo
                            </span>
                            <p className="card__beneficios--p dark:text-neutral-400">
                                Te liberamos de preocupaciones organizativas para que disfrutes al máximo tu día.
                            </p>
                        </div>

                        <div className='beneficio__card'>
                            <img src={relojArena} alt="" className="icnono__beneficios " />
                            <span className='card__beneficio--title dark:text-neutral-300'>
                                Innovación Tecnológica
                            </span>
                            <p className="card__beneficios--p dark:text-neutral-400">
                                Empleamos tecnología de vanguardia para eficiencia en la gestión de eventos y seguimiento del proceso.
                            </p>
                        </div>

                    </div>
                </section>

                <section className="ubicacion dark:bg-neutral-800 dark:opacity-70">
                    <div className="ubicacion__transparencia">
                        <span className="ubicacion__title--transparencia">
                            Locaciones
                        </span>
                    </div>

                    <div className="container__locaciones">
                        {ubicaciones.map((element, index) => (
                            <div className="card__ubicacion" key={index}>
                                <div className='card__separacion--ubicacion'>
                                    <img src={loguito} alt="" className="loguito__ubicacion" />
                                    <h3 className="nombre__ubicacion">{element.nombre}</h3>
                                </div>
                                <button className="verDetalles__ubicacion" onClick={() => openModal(element)}>Ver detalles</button>
                                <CustomModal isOpen={modal} onRequestClose={closeModal} data={selectedElement} />
                            </div>
                        ))}
                    </div>

                    <div className="barra__grande--ubicacion">
                        <div className="container__barra">
                            <img src={loguito} alt="" className="loguito__ubicacion--barra" />
                            <h3 className="ubicacion__barra">
                                ¡Recuerda! Tenemos servicio a domicilio
                            </h3>
                        </div>
                    </div>
                </section>

                <section className="quieneSomos dark:bg-neutral-700">
                    <div className="circuloSomos">
                        <img src={circulo} alt="" className="circulo__somos--img" />
                    </div>
                    <div className="descripcion dark:text-neutral-300">
                        Somos una empresa especializada en la organización de diversos eventos, como cumpleaños, bodas, eventos corporativos, conferencias y más. Ofrecemos servicios completos de planificación, diseño y producción para hacer que su evento sea inolvidable.
                    </div>
                </section>

                <section className="comentarios dark:bg-neutral-700">
                    <h2 className='comentarios__title dark:text-neutral-200'>Testimonios</h2>
                    <hr className='hr__services' />
                    <div className="container__cards--coments">
                        <Swiper
                            slidesPerView={3}
                            className="swiper-container3 dark:opacity-70"
                            spaceBetween={10}
                            autoplay={{
                                delay: 3000,
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
                                <SwiperSlide key={index} className="slider3 dark:!bg-neutral-700">
                                    <div className="container__comen dark:bg-neutral-700" >
                                        <figure className="contenedor__imagen--comentario">
                                            <img src={comentario.photo} alt="imagen de comentario" className="img__comentario" />
                                        </figure>
                                        <div className="testimonio">
                                            <span className='span' >{comentario.comment}</span>

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
            </main >
        </>
    )

}
export default Home;