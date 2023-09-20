import React from 'react'
import './weddingPage.scss'
import ServiceWeddingPlan from '../../components/serviceWeddingPlan/ServiceWeddingPlan'
import OneClassWeddings from '../../components/oneClassWeddings/OneClassWeddings'
import OneTipWedding from '../../components/oneTipWedding/OneTipWedding'


const WeddingPage = () => {
  return (
    <main className='weddingPage'>

        <h1>Header</h1>

        <section className='introduction'>
            <figure className='decorWedding'>

                <img className = 'imgDecorWedding' src="https://i.ibb.co/92Lg4jd/image-119.png" alt="Imagen llamativa." />

            </figure>

            <div className='infoIntroduction'>

                <span className='titleIntroduction'>
                        Matrimonio
                </span>

                <p className='textDecorWedding'>

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum earum molestias doloribus odit recusandae, amet eveniet ex sunt eligendi, exercitationem repellat odio reiciendis adipisci autem nostrum nulla corrupti quisquam a!

                </p>

            </div>

            <figure className='decorWedding'>

            <img className = 'imgDecorWedding' src="https://i.ibb.co/92Lg4jd/image-119.png" alt="Imagen llamativa." />

            </figure>
        </section>

        <section className='servicesWeddingPlanning'>

            <span className='servicesWeddingPlanning__title'>
                SERVICIOS DE PLANIFICACIÓN DE BODAS
            </span>

            <article className='servicesWeddingPlanning__list'>

                <section>
    
                    <ServiceWeddingPlan image={'https://i.ibb.co/4VmJ76x/image-121.png'} text={'Coordinación y wedding planner'}/>
                    <ServiceWeddingPlan image={'https://i.ibb.co/JjjMSGs/image-121-2.png'} text={'Invitaciones'}/>
                    <ServiceWeddingPlan image={'https://i.ibb.co/T8K1CNb/image-121-4.png'} text={'Decoración'}/>
                    <ServiceWeddingPlan image={'https://i.ibb.co/QbQJpFK/image-121-6.png'} text={'Música y entretenimiento'}/>
                    <ServiceWeddingPlan image={'https://i.ibb.co/3k6P2n6/image-121-8.png'} text={'Transporte para novios'}/>
                    <ServiceWeddingPlan image={'https://i.ibb.co/sg4LV1T/image-121-10.png'} text={'Fotografía y vídeo'}/>

                </section>
    
                <section>
                    <ServiceWeddingPlan image={'https://i.ibb.co/vjDz1fn/image-121-1.png'} text={'Regalos y recuerdos'}/>
                    <ServiceWeddingPlan image={'https://i.ibb.co/Gk0Rw6J/image-121-3.png'} text={'Yugo de novia'}/>
                    <ServiceWeddingPlan image={'https://i.ibb.co/R2MFwTp/image-121-5.png'} text={'Catering'}/>
                    <ServiceWeddingPlan image={'https://i.ibb.co/LZmMfJm/image-121-7.png'} text={'Pastel de boda'}/>
                    <ServiceWeddingPlan image={'https://i.ibb.co/2dxynvV/image-121-9.png'} text={'Lugares de celebración'}/>
                    <ServiceWeddingPlan image={'https://i.ibb.co/T8K1CNb/image-121-4.png'} text={'Decoración'}/>

                </section>
            </article>

            <span className="servicesWeddingPlanning__button">Haz tu cotización</span>

        </section>

        <section className='classWedding'> 

            <span className='classWedding__title'>
                TIPOS DE BODAS
            </span>

            <div className='classWedding__list'>

                <OneClassWeddings image={'https://i.ibb.co/5639vLg/jakob-owens-4-BQPUDJx-Me8-unsplash-1.png'} title={'BODA TRADICIONAL'} />
                <OneClassWeddings image={'https://i.ibb.co/Kj0GW4Z/image-122.png'} title={'BODA CIVIL'} />
                <OneClassWeddings image={'https://i.ibb.co/3rQ7YWD/samantha-gades-odt2t81d-Zt-Q-unsplash-1.png'} title={'BODA RELIGIOSA'} />
                <OneClassWeddings image={'https://i.ibb.co/P4h7sGH/image-123.png'} title={'BODA AL AIRE LIBRE'} />

            </div>

        </section>

        <section className='tipsWedding'>

            <span className='tipsWedding__title'> 
                <p>RECURSOS Y CONSEJOS PARA BODAS</p>
            </span>

            <section className='tipsWedding__list'>

                <span className='listCardTipsWedding'>
                    <OneTipWedding image={'https://i.ibb.co/zxYWPDX/1.png'} />
                    <OneTipWedding image={'https://i.ibb.co/XFJkypm/2.png'}/>
                    <OneTipWedding image={'https://i.ibb.co/txSRN2c/3.png'} />
                </span>

                <span className='listCardTipsWedding'>
                    <OneTipWedding  image={'https://i.ibb.co/d079TT3/4.png'}/>
                    <OneTipWedding  image={'https://i.ibb.co/GdC4b7H/5.png'}/>
                    <OneTipWedding image={'https://i.ibb.co/Hhrr2jx/6.png'} />
                </span>

            </section>

        </section>

        <section className='galleryWedding'>

            <section className = 'galleryWedding__list'>
                <figure>
                    <img src="https://i.ibb.co/Kbtck8g/image-124.png" alt="Imagen de Galería de Boda" />
                </figure>
                <span>Galería</span>
            </section>

        </section>


    </main>
  )
}

export default WeddingPage;