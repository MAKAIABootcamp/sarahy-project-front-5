import React from 'react'
import './birthday.scss'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const Birthday = () => {
  return (
    <section className='bithdayContainer'>

        <Header/>

        <main className='containerBirthday'>
            <span className='titleBrith'>Cumpleaños</span>
            <figure className='nameBirthday'>
                <img className='nameBirthday__img' src="https://res.cloudinary.com/dibw7aluj/image/upload/v1694553628/unsplash_yZIVw5vgxTI_soz6j3.png" alt="Imagen de Cumpleaños" />
            </figure>

            <section className='birthInfo'>

                <span className = 'birthInfo__title'>Servicios para cumpleaños</span>
                <div className = 'birthInfo__list'>

                    <span className = 'birthLeft'>

                        <span>Decoración</span>
                        <span>Entretenimiento</span>
                        <span>Fotografía y Videografía</span>

                    </span>
                    <span class = 'birthSeparator'></span>
                    <span className = 'birthRight'>
                        <span>Pastelería y Repostería</span>
                        <span>Servicio de bar y conteles</span>
                        <span>Invitaciones y papelería</span>
                    </span>
                </div>
                
                <figure className='birthInfo__icons'>

                    <img src="https://i.ibb.co/6Jzd6B2/Star-1.png" alt="star" />
                    <span>Mucho Más</span>
                    <img src="https://i.ibb.co/6Jzd6B2/Star-1.png" alt="star" />

                </figure>
                
                <span className = 'divitioLine'></span>

            </section>

            <section className='types'>

                <span className='types__title'>Tipos de Cumpleaños</span>
                <figure className='types__figure'>
                    
                    <img className='typeImg' src="https://i.ibb.co/9rnFGTP/unsplash-q2b5-B0-Rlj4.png" alt="Tipos de Cumpleaños" />
                    <div className='infoType'>
                        <span className='typeOne'><b>Cumpleaños Sorpresa</b></span>
                        <span className='typeDetail'>Fiestas organizadas en secreto para sorprender gratamente al cumpleañero con la presencia de amigos y familiares.</span>
                    </div>
                </figure> 

                <span className='types__button'>
                    Haz tu cotización
                </span>

            </section>

            <section className='union'>
                <span className='ryC'>Recursos y Consejos</span>


                <section className='recursos'>

                    <div className='recursos__up'>
                        <article>
                            <span>1</span>
                            <b>Establecer Presupuesto</b>
                            <p>Define un presupuesto claro desde el principio para evitar gastos innecesarios y asegurarte de que el evento sea asequible</p>
                        </article>
                        <article>
                        <span>2</span>
                            <b>Elige un tema</b>
                            <p>Considera un tema para la fiesta que refleje los intereses o pasatiempos del cumpleañero, lo que puede darle cohesión a la decoración y la atmósfera.</p>
                    
                        </article>
                        <article>
                        <span>3</span>
                            <b>Invitaciones</b>
                            <p>Envía invitaciones con anticipación, ya sea en papel o electrónicas, para que los invitados tengan tiempo de planificar su asistencia.</p>
                    
                        </article>
                    </div>

                    <span className = 'divitioLine'></span>
                    <div className='recursos__up'>

                    <article>
                            <span>4</span>
                            <b>Investiga a tus proveedores</b>
                            <p>Asegúrate de contratar a profesionales de confianza</p>
                        </article>
                        <article>
                        <span>5</span>
                            <b>Personaliza tu boda</b>
                            <p>Agrega toques personales que reflejen tu personalidad y estilo</p>
                    
                        </article>
                        <article>
                        <span>6</span>
                            <b>Practica el cronograma</b>
                            <p>Realiza un ensayo general para que todo fluya sin problemas el día de la boda</p>
                    
                        </article>

                    </div>

                </section>
            </section>

           

            
        </main>

        <Footer/>

    </section>
  )
}

export default Birthday