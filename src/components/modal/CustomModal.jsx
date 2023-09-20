import React from 'react';
import Header from '../header/Header';
import './modal.scss';
import capacidad from '../../assets/image/personasCapacidad.png';
import Map from '../map/Map';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import sliderBodas from '../../assets/image/boda.jpg';
import sliderBufet from '../../assets/image/bufet.jpg';

import Modal from "react-modal";

const CustomModal = ({ isOpen, onRequestClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal custom-modal">
      <button onClick={onRequestClose} className="btn__salir"></button>
      <div className="div__modal">
        <div className='div__info'>
          <span className='slogan'>Tu momento, nuestra pasión</span>
          <div className='equis' onClick={onRequestClose}>X</div>
        </div>
      </div>
      <Swiper className="mySwiper">
        <SwiperSlide><img src={sliderBufet} alt="" /></SwiperSlide>
        <SwiperSlide><img src={sliderBodas} alt="" /></SwiperSlide>
        <SwiperSlide><img src={sliderBodas} alt="" /></SwiperSlide>
        <SwiperSlide><img src={sliderBodas} alt="" /></SwiperSlide>
        <SwiperSlide><img src={sliderBodas} alt="" /></SwiperSlide>
        <SwiperSlide><img src={sliderBodas} alt="" /></SwiperSlide>
      </Swiper>
      <section className="informacion__modal">
        <div className='informacion__modal--titulo'>
          <h1 className='titulo__modal'>
            CONVENIO BOSTON
          </h1>
          <img src={capacidad} alt="" className='imagen__modal--icono' />
          <span className='capacidad__modal'>
            120 comensales
          </span>
        </div>
        <div className='informacion__modal--mapa'>
          <Map />
        </div>
      </section>
    </Modal>
  )
}

export default CustomModal;