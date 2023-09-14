import React from 'react'
import './eventSocial.scss'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CardEventSocial from '../../components/cardEventSocial/CardEventSocial'

const EventSocial = () => {
  return (
    <section className='eventSocial'>
        
        <Header/>
         <main className='containerEventSocial'>
                <span className="titleSocial">Eventos Sociales</span>
                <span className="lineTitle"></span>

                <section className='listsEventsSocial'>


                    <CardEventSocial  imageIcon={'https://i.ibb.co/wQQWs9w/Layer-3.png'} image={'https://i.ibb.co/8cpdmPY/image-10.png'}  text={'Organizamos y Diseñamos bodas inolvidables a tu medida.'} name={'Body'}   />

                    <CardEventSocial  imageIcon={'https://i.ibb.co/j5fsbdV/Rectangle-2.png'} image={'https://i.ibb.co/8cpdmPY/image-10.png'}  text={'Celebra tu fiesta de quince años de una forma inolvidable.'} name={'Quinceañeros'}    />
                    
                    <CardEventSocial  imageIcon={'https://i.ibb.co/M24yv7Z/Layer-3-1.png'} image={'https://i.ibb.co/stkGR4z/image-11.png'}  text={'Organizamos momentos dulces para futuras mamás.'} name={'Baby Shower'}   />

<CardEventSocial  imageIcon={'https://i.ibb.co/kxyPX19/Rectangle-2-1.png'} image={'https://i.ibb.co/CvbSC50/image-14.png'}  text={'Celebra tu día especial con una fiesta única.'} name={'Cumpleaños'}   />

<CardEventSocial  imageIcon={'https://i.ibb.co/djTTsZK/image-79-1.png'} image={'https://i.ibb.co/K5Bp0rm/image-17.png'}  text={'Celebra el amor y la unión con eventos de aniversario llenos de magia.'} name={'Aniversario'}   />

<CardEventSocial  imageIcon={'https://i.ibb.co/3shKBHb/Vector-1.png'} image={'https://i.ibb.co/xJMW490/image-20.png'}  text={'Haz de Halloween una gran fiesta de diversión y el misterio con nuestra ayuda'} name={'Halloween'}   />

                </section>

         </main>
        <Footer/>


    </section>
  )
}

export default EventSocial;