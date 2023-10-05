import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import './modal.scss';
import capacidad from '../../assets/image/personasCapacidad.png';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import "swiper/css";
import sliderBodas from '../../assets/image/boda.jpg';
import sliderBufet from '../../assets/image/bufet.jpg';

import Modal from "react-modal";
import { set } from 'lodash';
import Maps from '../map/Maps';



const CustomModal = ({ isOpen, onRequestClose, data }) => {
  const [elemento, setelemento] = useState()

  useEffect(() => {
    setelemento(data)
  }, [data]);

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal6 custom-modal" >
      <button onClick={onRequestClose} className="btn__salir"></button>
      <div className="div__modal">
        <div className='div__info'>
          <span className='slogan'>Tu momento, nuestra pasión</span>
          <span class="material-symbols-outlined equis" onClick={onRequestClose}>
            close
          </span>
        </div>
      </div>
      <Swiper className="mySwiper"
           autoplay={{
            delay: 5000,
            disableOnInteraction: false,
        }}  
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide><img src="https://cdn0.matrimonio.com.co/vendor/6672/3_2/960/jpg/img-20200130-wa0030_10_106672-166249390749574.jpeg" alt="" className='imagen__slider--modal' /></SwiperSlide>
        <SwiperSlide><img src="https://cdn0.matrimonio.com.co/vendor/5632/3_2/960/jpeg/whatsapp-image-2022-07-19-at-10-02-04-am_10_145632-165824304121413.jpeg" alt="" className='imagen__slider--modal'/></SwiperSlide>
        <SwiperSlide><img src="https://cdn0.matrimonio.com.co/vendor/6672/3_2/960/jpg/img-20190622-wa0025_10_106672-166249419933345.jpeg" alt="" className='imagen__slider--modal' /></SwiperSlide>
        <SwiperSlide><img src="https://www.tusanagustin.com/assets/media/landings-renovadas/002-salones-de-fiestas-medellin/salones-de-fiestas-medellin-tu-san-agustin-slider-principal-new.jpg" alt="" className='imagen__slider--modal' /></SwiperSlide>
        <SwiperSlide><img src="https://cdn0.matrimonio.com.co/vendor/8665/3_2/960/jpg/dsc-2758_10_128665-165056101221390.jpeg" alt="" className='imagen__slider--modal' /></SwiperSlide>
        <SwiperSlide><img src="https://cdn0.matrimonio.com.co/vendor/8665/3_2/960/jpg/img-0022_10_128665-165067291251017.jpeg" alt="" className='imagen__slider--modal' /></SwiperSlide>
      </Swiper>
      <section className="informacion__modal">
        <div className='informacion__modal--titulo'>
          <h1 className='titulo__modal'>
            {elemento ? elemento.nombre : ''}
          </h1>
          <img src={capacidad} alt="" className='imagen__modal--icono' />
          <span className='capacidad__modal'>
            {elemento ? elemento.capacidad : ''} Personas
          </span>
        </div>
        {/* <iframe className='informacion__modal--mapa' src={elemento ? elemento.html : ''} >

        </iframe> */}
        <Maps elemento={elemento} />
      </section>
    </Modal>
  )
}


export default CustomModal;