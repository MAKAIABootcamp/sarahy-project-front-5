import React from 'react'
import './domicilio.scss'
import ubicacion from '../../assets/image/sercicioDomicilio.png'
import mapa from '../../assets/image/map.png'

const Domicilio = () => {
    return (
        <main className='main__domicilio'>
            <section className='domicilio__info'>
                <h1 className='domicilio__info--title'>
                    Servicio a domicilio
                </h1>
                <hr className='domicilio__info--line' />
            </section>
            <section className="imagen__ubicacion">
              
                <img src={ubicacion} alt="" className='domicilio__ubicacion--imagen' />
            </section>
            <section className='ubicacion__info'>
                <p className='ubicacion__titulo'>
                    Este lugar es un verdadero tesoro en el corazón de la ciudad, que combina lo moderno con lo accesible de una manera excepcional. En su interior, encontrarás una pista de iluminación LED de última generación que transforma el espacio en un entorno cautivador y contemporáneo. La iluminación LED no solo añade un toque de sofisticación, sino que también garantiza una visibilidad inigualable, creando una atmósfera acogedora y atractiva en cualquier momento del día.
                    <br />
                    <br />
                    La sillería Tiffany que adorna este lugar es un testimonio de su compromiso con la excelencia y la comodidad. Cada silla Tiffany es una obra maestra de diseño y artesanía, proporcionando a los visitantes una experiencia de asiento cómoda y elegante. Ya sea que estés disfrutando de un evento especial, participando en una conferencia o simplemente buscando un rincón para relajarte, la sillería Tiffany asegura que te sientas mimado y a gusto en todo momento.
                    <br />
                    <br />
                    En definitiva, este lugar ofrece un ambiente moderno y dinámico, acompañado de detalles de lujo como la iluminación LED y la sillería Tiffany. Su accesibilidad y ubicación privilegiada lo hacen ideal para quienes buscan una experiencia excepcional en la ciudad.
                </p>

                <img src={mapa} alt="" className='ubicacion__mapa' />
            </section>
            <section className="iconos__ubicacion">
                <div className="container__iconos--ubicaciones">
                    <span class="material-symbols-outlined">
                        local_parking
                    </span>
                    <span className='name__icon'>Parqueadero</span>
                </div>

                <div className="container__iconos--ubicaciones">
                    <span class="material-symbols-outlined">
                        accessible
                    </span>
                    <span className='name__icon'>Accesibilidad</span>
                </div>

                <div className="container__iconos--ubicaciones">
                    <span class="material-symbols-outlined">
                        wc
                    </span>
                    <span className='name__icon'>Baños</span>
                </div>

                <div className="container__iconos--ubicaciones">
                    <span class="material-symbols-outlined">
                        nature_people
                    </span>
                    <span className='name__icon'>Aire libre</span>
                </div>

                <div className="container__iconos--ubicaciones">
                    <span class="material-symbols-outlined">
                        volume_up
                    </span>
                    <span className='name__icon'>Sonido multimedia</span>
                </div>

                <div className="container__iconos--ubicaciones">
                    <span class="material-symbols-outlined">
                        wifi
                    </span>
                    <span className='name__icon'>Wifi</span>
                </div>

                <div className="container__iconos--ubicaciones">
                    <span class="material-symbols-outlined">
                        security
                    </span>
                    <span className='name__icon'>Seguridad privada</span>
                </div>


            </section>
            <button className='domicilio__vermas'>Ver mas ubicaciones</button>
        </main>
    )

}

export default Domicilio;