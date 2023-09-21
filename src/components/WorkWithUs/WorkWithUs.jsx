import React from 'react';
import './WorkWhit.scss'
import logo from "../../assets/image/logo-blanco.png";
import fondo from "../../assets/image/fondoAliados.png";
import logoIzquierda from '../../assets/image/gotaIzquierda.png'
import logoDerecha from '../../assets/image/gotaDerecha.png'
import logoRecomendaciones from '../../assets/image/logoIdentificador.png'
import imagenContactanos from '../../assets/image/imagenContactanos.png'
import { useForm  } from 'react-hook-form';

const WorkWhithUs = () => {
    const {register, reset, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        reset()
    }


    return (
        <main className='main__allies'>
            <img src={fondo} alt="" className='imagen__aliados' />
            <div className="header__transparent">
                <nav clasName="header__navbar">
                    <ul className='header__navbar--lista'>
                        <li className='navbar__items' onClick={() => { navigate("/") }}>Incio</li>
                        <li className='navbar__items' >Eventos sociales</li>
                        <li className='navbar__items'>Eventos empresariales</li>
                        <li className='navbar__items--logo'>{<img src={logo} className='logo__item--img' />}</li>
                        <li className='navbar__items'>Seamos aliados</li>
                        <li className='navbar__items'>Contáctanos</li>
                        <li className='navbar__items'>Cotiza aquí</li>
                    </ul>
                </nav>
            </div>

            <section className='main__info'>
                <img src={logoIzquierda} alt="" className='logoIzquierda' />
                <div className="container__intro">
                    <h1 className='main__title__home'>Trabaja con nostros</h1>
                    <p className="main__parrafo">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                </div>
                <img src={logoDerecha} alt="" className='logoDerecha' />
            </section>



            <section className="recomendaciones">
                <div className="recuadro__recomendaciones">
                    <span className='span__recomendaciones--aliados'>¿Por qué aliarte con nosotros?</span>
                    <div className="tarjeta__recuadro">
                        <img src={logoRecomendaciones} alt="logo" className='logo__recomendaciones' />
                        <span className="descripcion__tarjeta">
                            Una alianza con Eventos Éxito te brindará acceso a una década de experiencia en la industria de eventos, permitiéndote aprovechar nuestra experiencia probada y ofrecer a tus clientes un servicio de clase mundial.
                        </span>
                    </div>
                    <div className="tarjeta__recuadro">
                        <img src={logoRecomendaciones} alt="logo" className='logo__recomendaciones' />

                        <span className="descripcion__tarjeta">

                            En Eventos Éxito, la atención al detalle es nuestra prioridad. Al unirte a nosotros, podrás ofrecer a tus clientes eventos impecables y personalizados que reflejarán la excelencia y el compromiso de tu empresa
                        </span>
                    </div>
                    <div className="tarjeta__recuadro">
                        <img src={logoRecomendaciones} alt="logo" className='logo__recomendaciones' />

                        <span className="descripcion__tarjeta">
                            Nuestra red de proveedores y contactos en la industria nos permite ofrecer soluciones integrales para eventos a precios competitivos. Una alianza con nosotros te permitirá ofrecer a tus clientes una relación calidad-precio inigualable, fortaleciendo así tu posición en el mercado.
                        </span>
                    </div>
                </div>
            </section>


            <section className="form__contactar">
                <figure className="imagen__visible">
                    <img src={imagenContactanos} alt="" className="img__form--contacto" />
                </figure>
                <div className="info__form">
                    <form action="" className="form__contacto--cliente" onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="form__titulo">Contactanos</h1>
                        <input type="text" className="input__form--nombre" placeholder='Nombre y apellidos' name='nombre '{...register("nombre")}/>
                        <input type="number" className="input__form--celular" placeholder='Celular' {...register("celular")}/>
                        <input type="email" className="input__form--email" placeholder='E-mail' {...register("email")}/>
                        <textarea name="" id="" cols="30" rows="7" placeholder='Cuentános como ser aliados' className='input__form--textarea' {...register("mensaje")} ></textarea>
                        <button className='btn__form--enviar'>Enviar</button>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default WorkWhithUs;