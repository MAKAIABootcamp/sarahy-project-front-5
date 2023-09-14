import React from 'react'
import './eventCompany.scss'
import CardEventSocial from '../../components/cardEventSocial/CardEventSocial'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'


const EventCompany = () => {
  return (
    
    <section className='eventSocial'>
        
    <Header/>
     <main className='containerEventSocial'>
            <span className="titleSocial">Eventos Empresariales</span>
            <span className="lineTitle"></span>

            <section className='listsEventsSocial'>


                <CardEventSocial  imageIcon={'https://i.ibb.co/tLVgT4X/image-90.png'} image={'https://i.ibb.co/s2BrTvD/image-9.png'}  text={'Reconoce y celebra los logros destacados en nuestras galas de premiación.'} name={'Gala de Premiación'}   />

                <CardEventSocial  imageIcon={'https://i.ibb.co/nsD0fZ5/image-91.png'} image={'https://i.ibb.co/Fw5YBH4/image-14-2.png'}  text={'Celebra tu fiesta de quince años de una forma inolvidable.'} name={'Quinceañeros'}    />
                
                <CardEventSocial  imageIcon={'https://i.ibb.co/QDt9Pgz/image-92.png'} image={'https://i.ibb.co/KK2yF5r/image-17-1.png'}  text={'Eleva tus eventos a un nivel superior con cenas de gala llenas de elegancia y sofisticación.'} name={'Cena de Gala'}   />

                <CardEventSocial  imageIcon={'https://i.ibb.co/0jDLjL2/image-93.png'} image={'https://i.ibb.co/48QgYND/image-30.png'}  text={'Fomenta el aprendizaje y la innovación en nuestras conferencias de alto nivel.'} name={'Conferencias'}   />

                <CardEventSocial  imageIcon={'https://i.ibb.co/0jDLjL2/image-93.png'} image={'https://i.ibb.co/48QgYND/image-30.png'}  text={'Fomenta el aprendizaje y la innovación en nuestras conferencias de alto nivel.'} name={'Eventos Especiales'}   />

            </section>

     </main>
    <Footer/>


</section>

  )
}

export default EventCompany