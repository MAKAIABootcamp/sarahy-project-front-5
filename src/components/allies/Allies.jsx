import React from 'react';
import aliados from '../../assets/image/aliados.png';
import './allies.scss'
import logo from "../../assets/image/logo-blanco.png";
import fondo from "../../assets/image/aliados2.jpg";
import logoIzquierda from '../../assets/image/gotaIzquierda.png'
import logoDerecha from '../../assets/image/gotaDerecha.png'
import logoRecomendaciones from '../../assets/image/logoIdentificador.png'
import imagenContactanos from '../../assets/image/imagenContactanos.png'
import { useForm  } from 'react-hook-form';
import Chat from '../../page/chat/Chat';

const Allies = () => {
    const {register, reset, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        reset()
    }


    return (
        <main className='main__allies dark:!bg-neutral-700'>
                            <Chat headerImg={'idAliados'}/>
            <img id='idAliados' src={fondo} alt="" className='imagen__aliados' />
           

            <section className='main__info dark:!bg-neutral-700'>
                <img src={logoIzquierda} alt="" className='logoIzquierda' />
                <div className="container__intro dark:!bg-neutral-700">
                    <h1 className='main__title__home dark:!text-neutral-100'>Seamos aliados</h1>
                    <p className="main__parrafo dark:!text-neutral-200">
                    En Sarahy Celebraciones, ayudamos a las microempresas a superar desafíos en la planificación de eventos al brindarles acceso a nuestra experiencia y recursos. Nuestra alianza te permite elevar la calidad de tus eventos. Completa el formulario para que podamos contactarte.
                    </p>

                </div>
                <img src={logoDerecha} alt="" className='logoDerecha' />
            </section>



            <section className="recomendaciones dark:!bg-neutral-700">
                <div className="recuadro__recomendaciones dark:!bg-neutral-700">
                    <span className='span__recomendaciones--aliados dark:!text-neutral-200'>¿Por qué aliarte con nosotros?</span>
                    <div className="tarjeta__recuadro">
                        <img src={logoRecomendaciones} alt="logo" className='logo__recomendaciones' />
                        <span className="descripcion__tarjeta dark:!text-neutral-300">
                        Celebraciones Sarahy es experta en eventos, beneficiando a empresas que desean eventos excepcionales para clientes o empleados.
                        </span>
                    </div>
                    <div className="tarjeta__recuadro dark:!bg-neutral-700">
                        <img src={logoRecomendaciones} alt="logo" className='logo__recomendaciones' />

                        <span className="descripcion__tarjeta dark:!text-neutral-300">

                        Celebraciones Sarahy se destaca por personalizar eventos a medida según las necesidades de los clientes, atrayendo así a otras empresas en busca de soluciones únicas.
                        </span>
                    </div>
                    <div className="tarjeta__recuadro dark:!bg-neutral-700">
                        <img src={logoRecomendaciones} alt="logo" className='logo__recomendaciones' />

                        <span className="descripcion__tarjeta dark:!text-neutral-300">
                        La colaboración con Celebraciones Sarahy permite a otras empresas externalizar la planificación de eventos, ahorrando tiempo y recursos para enfocarse en su negocio principal.
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
                        <input type="text" className="input__form--nombre" placeholder='Nombre y apellidos' name='nombre '{...register("nombre")}/>
                        <input type="number" className="input__form--celular" placeholder='Celular' {...register("celular")}/>
                        <input type="email" className="input__form--email" placeholder='E-mail' {...register("email")}/>
                        <textarea name="" id="" cols="30" rows="7" placeholder='Cuentános como ser aliados' className='input__form--textarea' {...register("mensaje")} ></textarea>
                        <button className='btn__form--enviar dark:!bg-neutral-300 dark:!text-neutral-700 '>Enviar</button>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Allies;