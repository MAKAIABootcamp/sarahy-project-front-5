import React from 'react'
import './wedding.scss'
import matrimonio from '../../assets/image/matrimonio1.0.png'
import estrellas from '../../assets/image/estrellas.png'

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

// imagenes slider de home
import sliderBodas from '../../assets/image/boda.jpg'
import sliderCumpleaños from '../../assets/image/cumpleaños.jpg'
import sliderEmpresariales from '../../assets/image/empresariales1.jpg'
import sliderGrados from '../../assets/image/grados.jpg'
import sliderBufet from '../../assets/image/bufet.jpg'
import sliderAniversarios from '../../assets/image/bufet.jpg'

const Wedding = () => {
  return (
    <main className='main__Wedding'>
      <section className='wedding__section'>
        <h1 className='wedding__title'>Matrimonio</h1>
        <img src={matrimonio} alt="" className='wedding__img' />
      </section>
      <section className='wedding__description'>
        <span className='wedding__description-span'>
          Nuestro objetivo es unirnos a la familia, en el momento que nos encuentres,
          Ofrecemos un servicio de bodas excepcionales, llenas de amor y emociones auténticas, que dejarán una huella imborrable en todos los corazones presentes.
        </span>
        <h2 className='wedding__description-title'>Servicios de Planificación de Bodas</h2>
        <img src={estrellas} alt="estrellas" className='wedding__description-img' />
        <div className='container__items'>
          <div className='item1'>
            <span className='span__item'>Planificación y coordinación</span>
            <span className='span__item'>Decoración y diseño</span>
            <span className='span__item'>Catering y bebidas</span>
            <span className='span__item'>Música y entretenimiento</span>
            <span className='span__item'>Fotografía y videografía</span>
          </div>
          <div className='item2'>
            <span className='span__item'>Flores y arreglos florales</span>
            <span className='span__item'>Pastel y postres</span>
            <span className='span__item'>Transporte</span>
            <span className='span__item'>Servicios de belleza</span>
            <span className='span__item'>Regalos y recuerdos</span>
          </div>
        </div>
      </section>

      <section className="wedding__slider">
        <h2 className='wedding__slider-title'>Tipos de boda</h2>
        <div className='div__slider'>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}

            modules={[FreeMode, Pagination]}
            className="mySwiper">

            <SwiperSlide> <img src={sliderBodas} alt="" className='wedding__slider-img' /> <span>BODA NORMAL</span> </SwiperSlide>
            <SwiperSlide> <img src={sliderBodas} alt="" className='wedding__slider-img' /> <span>BODA NORMAL</span> </SwiperSlide>
            <SwiperSlide> <img src={sliderBodas} alt="" className='wedding__slider-img' /> <span>BODA NORMAL</span> </SwiperSlide>
            <SwiperSlide> <img src={sliderBodas} alt="" className='wedding__slider-img' /> <span>BODA NORMAL</span> </SwiperSlide>
            <SwiperSlide> <img src={sliderBodas} alt="" className='wedding__slider-img' /> <span>BODA NORMAL</span> </SwiperSlide>
            <SwiperSlide> <img src={sliderBodas} alt="" className='wedding__slider-img' /> <span>BODA NORMAL</span> </SwiperSlide>

          </Swiper>
        </div>
        <button className='btn__slider'>Haz tu cotización</button>
      </section>

      <section className="recomendaciones">
        <h2 className='recomendaciones-title'>Recursos y recomendaciones para bodas</h2>
        <div className="recuadro__recomendaciones">
          <div className="tarjeta__recuadro">
            <span className="numero__tarjeta">1</span>
            <span className="titulo__tarjeta">Planifica con tiempo</span>
            <span className="descripcion__tarjeta">
              Comienza la planificación con al menos un año de anticipación para evitar el estrés de última hora
            </span>
          </div>
          <div className="tarjeta__recuadro">
            <span className="numero__tarjeta">2</span>
            <span className="titulo__tarjeta"> Establece un presupuesto realista</span>
            <span className="descripcion__tarjeta">

              Determina cuánto puedes gastar y ajústate a ello para evitar sorpresas financieras.
            </span>
          </div>
          <div className="tarjeta__recuadro">
            <span className="numero__tarjeta">3</span>
            <span className="titulo__tarjeta"> Elige una fecha significativa</span>
            <span className="descripcion__tarjeta">
              Elige una fecha significativa
              Escoge una fecha que sea especial para ti y tu pareja.
            </span>
          </div>
          <div className="tarjeta__recuadro">
            <span className="numero__tarjeta">4</span>
            <span className="titulo__tarjeta">Investiga a tus proveedores</span>
            <span className="descripcion__tarjeta">

              Asegúrate de contratar a profesionales de confianza.
            </span>
          </div>
          <div className="tarjeta__recuadro">
            <span className="numero__tarjeta">5</span>
            <span className="titulo__tarjeta"> Personaliza tu boda</span>
            <span className="descripcion__tarjeta">

              Agrega toques personales que reflejen tu personalidad y estilo.
            </span>
          </div>
          <div className="tarjeta__recuadro">
            <span className="numero__tarjeta">6</span>
            <span className="titulo__tarjeta"> Practica el cronograma</span>
            <span className="descripcion__tarjeta">

              Realiza un ensayo general para que todo fluya sin problemas el día de la boda.
            </span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Wedding;