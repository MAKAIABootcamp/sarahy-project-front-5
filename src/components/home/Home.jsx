import React from 'react'
import './home.scss';
import bodas from '../../assets/image/boda.png'
import logo from '../../assets/image/logo.png'
import lupa from '../../assets/image/lupa.png'
import perfil from '../../assets/image/perfil.png'
import servicios1 from '../../assets/image/servicios1.png'
import line from '../../assets/image/line.png'
import star from '../../assets/image/star.png'
import location1 from '../../assets/image/location1.png'
import corazon1 from '../../assets/image/corazon1.png'
import comentario1 from '../../assets/image/comentario1.png'


const Home = () => {
  return (
    <>
        
        <main className="main__home">
            <section className='slider__home'>
                <span>swiper</span>
            </section>
            <section className='main__info'>
                <h1 className='main__title__home'>Bienvenido a Celebraciones Sarahy</h1>
                <hr className='hr__home'/>
                <p className="main__parrafo">
                     Somos la elección perfecta para convertir tus sueños en realidad. Con más de una década de experiencia en la planificación y ejecución de eventos sociales, empresariales y educativos  de primer nivel, estamos aquí para hacer que tus ocasiones especiales sean inolvidables.
                </p>
            </section>
            <section className= 'typeEvent__home'>
                <div className="btns">
                    <button className="btn__event">bodas</button>
                    <button className="btn__event">Quince años</button>
                    <button className="btn__event">Primera comunión</button>
                    <button className="btn__event">Empresariales</button>
                    <button className="btn__event">Educativos</button>
                </div>

                <div className='event__info'>
                    <div className='event__description'>
                        <h2 className='description__title'>La boda de tus sueños</h2>
                        <p className='description__parrafo'>Somos expertos en hacer eventos memorables, pensamos en cada detalle para que tu boda sea perfecta</p>
                    </div>
                    <div className="event__collage">
                        <img src={bodas} className='description__img' alt="Imagen de descripcion del evento" />
                    </div>
                </div>
            </section>
            <section className="services">
                <h2 className='services__title'>Conoce más de nuestros servicios</h2>
                <hr className='hr__services'/>
                <div className='container__cards--services'>
                <div className="card__services">
                    <h3 className='card__services--title'>Fotografia</h3>
                    <img src={servicios1} alt="Imagen del servicio ofrecido" className='img__services'/>
                    <span className='card__services--span'>
                         Guardar los mejores momentos de tu evento
                    </span>
                </div>
                <div className="card__services">
                    <h3 className='card__services--title'>Fotografia</h3>
                    <img src={servicios1} alt="Imagen del servicio ofrecido" className='img__services'/>
                    <span className='card__services--span'>
                         Guardar los mejores momentos de tu evento
                    </span>
                </div>
                <div className="card__services">
                    <h3 className='card__services--title'>Fotografia</h3>
                    <img src={servicios1} alt="Imagen del servicio ofrecido" className='img__services'/>
                    <span className='card__services--span'>
                         Guardar los mejores momentos de tu evento
                    </span>
                </div>
                </div>
                    <button className="service__btn">
                        Ver mas
                    </button>
            </section>

            <section className="location">
                <div className="title">
                    <img src={star} alt="" className="star" />
                    <img src={line} alt="" className="line" />
                    <h2 className='location__title'>Ubicacion</h2>
                    <img src={line} alt="" className="line" />
                    <img src={star} alt="" className="star" />
                </div>
                <div className='container__card--location'>
                    <div className='card__location'>
                        <img src={location1} alt="imagen de la locación" className='img__location'/>
                        <span className='span__location'>Poblado</span>
                        <hr className="cuadro__location" />
                        <button className="btn__location">Ver mas</button>
                    </div>
                    <div className='card__location'>
                        <img src={location1} alt="imagen de la locación" className='img__location'/>
                        <span className='span__location'>Poblado</span>
                        <hr className="cuadro__location" />
                        <button className="btn__location">Ver mas</button>
                    </div>
                    <div className='card__location'>
                        <img src={location1} alt="imagen de la locación" className='img__location'/>
                        <span className='span__location'>Poblado</span>
                        <hr className="cuadro__location" />
                        <button className="btn__location">Ver mas</button>
                    </div>

                </div>
            </section>
            <section className="comentarios">
                    <h2 className='comentarios__title'>Testimonios</h2>
                    <hr className='hr__services'/>
                <div className="container__cards--coments">
                    <div className='container__comen'>
                        <img src={comentario1} alt="imagen de comentario" className='img__comentario'/>
                        <span className="testimonio">
                            Excelente servicio, me agradaron mucho las personas de logistica son muy amables y la pagina es perfecta los quiero
                        </span>
                        <div className="container__calificacion">
                            <img src={corazon1} alt="star-calificacion" />
                            <img src={corazon1} alt="star-calificacion" />
                            <img src={corazon1} alt="star-calificacion" />
                            <img src={corazon1} alt="star-calificacion" />
                            <img src={corazon1} alt="star-calificacion" />
                        </div>
                    </div>
                    <div className='container__comen'>
                        <img src={comentario1} alt="imagen de comentario" className='img__comentario'/>
                        <span className="testimonio">
                            Excelente servicio, me agradaron mucho las personas de logistica son muy amables y la pagina es perfecta los quiero
                        </span>
                        <div className="container__calificacion">
                            <img src={corazon1} alt="star-calificacion" />
                            <img src={corazon1} alt="star-calificacion" />
                            <img src={corazon1} alt="star-calificacion" />
                            <img src={corazon1} alt="star-calificacion" />
                            <img src={corazon1} alt="star-calificacion" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}

export default Home;