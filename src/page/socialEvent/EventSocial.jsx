import React from 'react'
import './eventSocial.scss'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const EventSocial = () => {
  return (
    <section className='eventSocial'>
        
        <Header/>
         <main className='containerEventSocial'>
                <span className="titleSocial">Eventos Sociales</span>
                <span className="lineTitle"></span>

                <section className='listsEvents'>

                </section>

         </main>
        <Footer/>


    </section>
  )
}

export default EventSocial;