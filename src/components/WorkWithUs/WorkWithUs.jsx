import React from 'react';
import './WorkWhit.scss'
import logo from "../../assets/image/logo-blanco.png";
import fondo from "../../assets/image/aliados2.jpg";
import logoIzquierda from '../../assets/image/gotaIzquierda.png'
import logoDerecha from '../../assets/image/gotaDerecha.png'
import logoRecomendaciones from '../../assets/image/logoIdentificador.png'
import imagenContactanos from '../../assets/image/imagenContactanos.png'
import { useForm } from 'react-hook-form';

const WorkWhithUs = () => {
    const { register, reset, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        reset()
    }

    return (
        <main className='main__workUs dark:!bg-neutral-700'>
            <img src={fondo} alt="" className='imagen__aliados' />

            <section className='main__info dark:!bg-neutral-700'>
                <img src={logoIzquierda} alt="" className='logoIzquierda' />
                <div className="container__intro">
                    <h1 className='main__title__home dark:!text-neutral-100'>Trabaja con nosotros</h1>
                    <p className="main__parrafo dark:!text-neutral-200">
                    Celebraciones Sarahy busca constantemente talento apasionado y creativo en la industria de eventos y te invita a unirte a su equipo si compartes esa pasión. Puedes expresar tu interés completando el formulario proporcionado.
                    </p>
                </div>
                <img src={logoDerecha} alt="" className='logoDerecha' />
            </section>

            <section className="recomendaciones dark:!bg-neutral-700">
            <span className='span__recomendaciones--aliados dark:!text-neutral-200'>¿Por qué trabajar con nosotros?</span>
                <div className="recuadro__recomendaciones dark:!bg-neutral-700">
                    
                    <div className="tarjeta__recuadro dark:!bg-neutral-700">
                        <img src={logoRecomendaciones} alt="logo" className='logo__recomendaciones' />
                        <span className="descripcion__tarjeta dark:!text-neutral-300">
                        Tenemos años de experiencia en la planificación y ejecución de eventos excepcionales, destacando por nuestro profesionalismo y la creación de eventos memorables.
                        </span>
                    </div>
                    <div className="tarjeta__recuadro dark:!bg-neutral-700">
                        <img src={logoRecomendaciones} alt="logo" className='logo__recomendaciones' />
                        <span className="descripcion__tarjeta dark:!text-neutral-300">
                            En cada evento, desatamos nuestra creatividad sin límites. Nos encanta pensar fuera de la caja y crear experiencias únicas que sorprendan y deleiten a nuestros clientes y sus invitados.
                        </span>
                    </div>
                    <div className="tarjeta__recuadro dark:!bg-neutral-700">
                        <img src={logoRecomendaciones} alt="logo" className='logo__recomendaciones' />
                        <span className="descripcion__tarjeta dark:!text-neutral-300">
                        Valoramos a nuestros clientes y brindamos un enfoque personalizado, comprendiendo sus necesidades y asegurando que cada detalle se adapte a su visión en cada proyecto.
                        </span>
                    </div>
                </div>
            </section>

            <section className="form__contactar dark:!bg-neutral-700">
                <figure className="imagen__visible">
                    <img src={imagenContactanos} alt="" className="img__form--contacto" />
                </figure>
                <div className="info__form dark:!bg-neutral-700">
                    <form action="" className="form__contacto--cliente dark:!bg-neutral-700" onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="form__titulo dark:!text-neutral-200">Contáctanos</h1>
                        <input type="text" className="input__form--nombre" placeholder='Nombre y apellidos' name='nombre' {...register("nombre")} />
                        <input type="number" className="input__form--celular" placeholder='Celular' {...register("celular")} />
                        <input type="email" className="input__form--email" placeholder='E-mail' {...register("email")} />
                        <textarea name="" id="" cols="30" rows="7" placeholder='Cuéntanos cómo ser aliados' className='input__form--textarea' {...register("mensaje")}></textarea>
                        <button className='btn__form--enviar dark:!bg-neutral-300 dark:!text-neutral-900'>Enviar</button>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default WorkWhithUs;