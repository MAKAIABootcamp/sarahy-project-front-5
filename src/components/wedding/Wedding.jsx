import React from 'react'
import './wedding.scss'
import matrimonio from '../../assets/image/matrimonio1.0.png'
import estrellas from '../../assets/image/estrellas.png'

const Wedding = () => {
  return (
    <main className='main__Wedding'>
        <section className='wedding__section'>
          <h1 className='wedding__title'>Matrimonio</h1>
          <img src={matrimonio} alt="" className='wedding__img'/>
        </section>
        <section className='wedding__description'>
          <span className='wedding__description-span'> 
            Nuestro objetivo es unirnos a la familia, en el momento que nos encuentres,
            Ofrecemos un servicio de bodas excepcionales, llenas de amor y emociones auténticas, que dejarán una huella imborrable en todos los corazones presentes.
          </span>
          <h2 className='wedding__description-title'>Servicios de Planificación de Bodas</h2>
          <img src={estrellas} alt="estrellas" className='wedding__description-img'/>
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
    </main>
  )
}

export default Wedding;