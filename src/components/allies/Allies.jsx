import React from 'react';
import aliados from '../../assets/image/aliados.png';
import './allies.scss'

const Allies = () => {
    return (
        <main className='main__allies'>
            <h1 className='main__allies--title'>Seamos aliados</h1>
            <hr className='linea__allies--title'/>
            <section className="allies__principal">
                <img src={aliados} alt="" className='img__aliados'/>
                <span className='span__aliados'>En celebraciones Sarahy, creemos en el poder de las celebraciones</span>
                <p className='p__aliados'>
                    Si tu empresa busca nuevas oportunidades para crecer y ofrecer experiencias excepcionales a tus clientes, ¡estamos listos para explorar juntos las posibilidades de una alianza exitosa! ¡Hagamos que los eventos sean inolvidables, trabajando juntos hacia el éxito!
                </p>
                <hr className='hr__linea' />
            </section>
            <section className="datos">
                <form className='form__datos'>
                    <h2 className='h2__datos'>Dejanos tus datos y nos pondremos en contacto</h2>

                    <div className='container__inputs'>
                        <label className='label__allies'>Nombre</label>
                        <input type="text" className='input__allies' />
                    </div>    

                    <div className='container__inputs'>
                        <label className='label__allies'>Correo electronico</label>
                        <input type="text" className='input__allies' />                  
                    </div>

                    <div className='container__inputs'>
                        <label className='label__allies'>Contacto</label>
                        <input type="text" className='input__allies' />
                    </div>

                    <div className='container__inputs'>
                        <label className='label__allies'>Ciudad</label>
                        <input type="text" className='input__allies' />
                    </div>


                    <div className='container__inputs2'>
                        <label className='label__allies--final'>
                            Cuantanos por que quieres aliarte con nostros
                        </label>
                        <input type="text" className='input__allies--final' />
                    </div>

                    <button className='button__allies'>Enviar</button>

                </form>
            </section>

            <section className="recomendaciones">
                <div className="recuadro__recomendaciones">
                    <span className='span__recomendaciones--aliados'>¿Por qué aliarte con nosotros?</span>
                    <hr className='linea__allies' />
                    <div className="tarjeta__recuadro">
                        <span className="numero__tarjeta">1</span>
                        <span className="descripcion__tarjeta">
                        Una alianza con Eventos Éxito te brindará acceso a una década de experiencia en la industria de eventos, permitiéndote aprovechar nuestra experiencia probada y ofrecer a tus clientes un servicio de clase mundial.
                        </span>
                    </div>
                    <div className="tarjeta__recuadro">
                        <span className="numero__tarjeta">2</span>
                      
                        <span className="descripcion__tarjeta">

                        En Eventos Éxito, la atención al detalle es nuestra prioridad. Al unirte a nosotros, podrás ofrecer a tus clientes eventos impecables y personalizados que reflejarán la excelencia y el compromiso de tu empresa
                        </span>
                    </div>
                    <div className="tarjeta__recuadro">
                        <span className="numero__tarjeta">3</span>
                       
                        <span className="descripcion__tarjeta">
                        Nuestra red de proveedores y contactos en la industria nos permite ofrecer soluciones integrales para eventos a precios competitivos. Una alianza con nosotros te permitirá ofrecer a tus clientes una relación calidad-precio inigualable, fortaleciendo así tu posición en el mercado.
                        </span>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Allies;