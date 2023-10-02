import React from 'react';
import './WorkWhit.scss'
import logo from "../../assets/image/logo-blanco.png";
import fondo from "../../assets/image/fondoAliados.png";
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
        <main className='main__allies dark:!bg-neutral-700'>
            <img src={fondo} alt="" className='imagen__aliados' />

            <section className='main__info dark:!bg-neutral-700'>
                <img src={logoIzquierda} alt="" className='logoIzquierda' />
                <div className="container__intro">
                    <h1 className='main__title__home dark:!text-neutral-100'>Trabaja con nosotros</h1>
                    <p className="main__parrafo dark:!text-neutral-200">
                        En Sarahy Celebraciones, estamos siempre en busca de talento apasionado y creativo en el mundo de los eventos. Si compartes nuestra pasión por la planificación y organización de eventos excepcionales, te invitamos a considerar unirte a nuestro equipo. Si estás interesado, llena el formulario al final y nos pondremos en contacto contigo.
                    </p>
                </div>
                <img src={logoDerecha} alt="" className='logoDerecha' />
            </section>

            <section className="recomendaciones dark:!bg-neutral-700">
                <div className="recuadro__recomendaciones dark:!bg-neutral-700">
                    <span className='span__recomendaciones--aliados dark:!text-neutral-200'>¿Por qué aliarte con nosotros?</span>
                    <div className="tarjeta__recuadro dark:!bg-neutral-700">
                        <img src={logoRecomendaciones} alt="logo" className='logo__recomendaciones' />
                        <span className="descripcion__tarjeta dark:!text-neutral-300">
                            Nuestra empresa cuenta con años de experiencia en la planificación y ejecución de eventos excepcionales. Nos enorgullece nuestro alto nivel de profesionalismo y capacidad para llevar a cabo eventos memorables.
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
                            Valoramos a cada cliente y ofrecemos un enfoque personalizado en cada proyecto. Nos esforzamos por comprender tus necesidades y deseos específicos, asegurando que cada detalle se ajuste a tu visión.
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
                        <h1 className="form__titulo dark:!text-neutral-200">Contactanos</h1>
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