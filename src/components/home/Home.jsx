import React from 'react'
import './home.scss';

const Home = () => {
  return (
    <>
        <header className="header__home">
            <div className='header__info'>
                <span className='slogan'>Tu momento, nuestra pasión</span>
                <div className='header__icons'>
                    <img src="" alt="icono buscar" />
                    <img src="" alt="icono perfil" />
                </div>
            </div>
            <div className="header__logo">
                <img src="" alt="logo" />
                <nav className="header__nav">
                    <ul className='header__list'>
                        <li className='header__list--item'>Inicio</li>
                        <li className='header__list--item'>Eventos</li>
                        <li className='header__list--item'>Servicios</li>
                        <li className='header__list--item'>Ubicaciones</li>
                        <li className='header__list--item'>Trabaja con nosotros</li>
                    </ul>
                </nav>
            </div>
        </header>
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
                        <h3>La boda de tus sueños</h3>
                        <p>Somos expertos en hacer eventos memorables, pensamos en cada detalle para que tu boda sea perfecta</p>
                    </div>
                    <div className="event__collage">
                        <img src="" alt="Imagen de descripcion del evento" />
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}

export default Home;