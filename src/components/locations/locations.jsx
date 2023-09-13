import React from 'react'
import './locations.scss'
import salon1 from '../../assets/images/salon1.png'

function Locations() {
  return (
    <>
      <section className="title__locations">
        <h2 className="title">Ubicaciones</h2>
        <hr className="line__locations" />
      </section>

      <section className='introduction__locations'>
        <p className='paragraph'>Descubre nuestras exclusivas ubicaciones, diseñadas para dar vida a tus eventos con escenarios únicos y versátiles que se adaptan a tus sueños y necesidades.</p>
      </section>

      <section className='section__locations'>
        <div className='container__locations'>
            <figure className='figure'>
            <img src={salon1} alt="" className='img' />
            </figure>

            <article className='article'>
                <span className='title'>Convenio Boston</span>
                <p className='paragraph'>Esta ubicación ofrece una moderna pista LED y silletería Tiffany, además de una excelente accesibilidad desde cualquier parte de la ciudad. Ideal para quienes buscan un ambiente moderno y dinámico Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
                <button className='button__article'>Ver más</button>
            </article>
        </div>
        <hr className='line__locations'/>

        <div className='container__locations2'>
            <figure className='figure'>
            <img src={salon1} alt="" className='img' />
            </figure>

            <article className='article'>
                <span className='title'>Convenio Boston</span>
                <p className='paragraph'>Esta ubicación ofrece una moderna pista LED y silletería Tiffany, además de una excelente accesibilidad desde cualquier parte de la ciudad. Ideal para quienes buscan un ambiente moderno y dinámico Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
                <button className='button__article'>Ver más</button>
            </article>
        </div>
        <hr className='line__locations'/>

        <div className='container__locations'>
            <figure className='figure'>
            <img src={salon1} alt="" className='img' />
            </figure>

            <article className='article'>
                <span className='title'>Convenio Boston</span>
                <p className='paragraph'>Esta ubicación ofrece una moderna pista LED y silletería Tiffany, además de una excelente accesibilidad desde cualquier parte de la ciudad. Ideal para quienes buscan un ambiente moderno y dinámico Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
                <button className='button__article'>Ver más</button>
            </article>
        </div>
        <hr className='line__locations'/>

      </section>

    </>
  )
}

export default Locations