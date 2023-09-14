import React from 'react'
import './services.scss'
import Header from '../../components/header/Header';
import OneService from '../../components/oneService/OneService';
import Footer from '../../components/footer/Footer';

const Services = () => {
  return (
    <section className='ourServices'>

        <Header/>

        <main className='containerServices'>

            <span className='titleServices'>Servicios</span>
            <p className='textServices'>En Eventos Éxito, nuestro compromiso es transformar tus ideas en realidades espectaculares. Te invitamos a descubrir una amplia gama de servicios excepcionales diseñados para hacer que tus eventos, ya sean sociales o empresariales, superen todas tus expectativas.</p>

            <section className='allServices'>
                <OneService image={'https://res.cloudinary.com/dibw7aluj/image/upload/v1694608926/image_63_qpae03.png'} title={'Catering'} text={'Deléitate con nuestro exquisito servicio de catering y saborea el éxito de tu evento'}/>
                <OneService image={'https://i.ibb.co/xGt7BZx/image-63-1.png'} title={'Catering'} text={'Deléitate con nuestro exquisito servicio de catering y saborea el éxito de tu evento'}/>
                <OneService image={'https://i.ibb.co/dQvxKwm/image-63-2.png'} title={'Catering'} text={'Deléitate con nuestro exquisito servicio de catering y saborea el éxito de tu evento'}/>
                <OneService image={' https://i.ibb.co/GWdKxh2/image-63-3.png'} title={'Catering'} text={'Deléitate con nuestro exquisito servicio de catering y saborea el éxito de tu evento'}/>
                <OneService image={'https://i.ibb.co/Krjw39T/image-63-4.png'} title={'Catering'} text={'Deléitate con nuestro exquisito servicio de catering y saborea el éxito de tu evento'}/>
                <OneService image={'https://i.ibb.co/hBLcnwv/image-63-5.png'} title={'Catering'} text={'Deléitate con nuestro exquisito servicio de catering y saborea el éxito de tu evento'}/>
                
            </section>

            <span className='titleGalery'>Galería</span>




            <section className='ourGallery'> 

                <figure>
                        <img src="https://i.ibb.co/FWcvtbR/image-70.png" alt="Fotos de Galería" />
                        <img src="https://i.ibb.co/fY490FD/image-72.png" alt="Fotos de Galería" />
                        <img src="https://i.ibb.co/3s9L9M4/image-73.png" alt="Fotos de Galería" />
                        <img src="https://i.ibb.co/hBLcnwv/image-63-5.png" alt="Fotos de Galería" />


                </figure>

            </section>


        </main>
        <Footer/>

    </section>
  )
}

export default Services;