import React from 'react';
import './price.scss'

const Price = () => {
    return (
        <main className='price__main'>
            <section className="price__info">
                <h1 className="price__title">
                    Cotización
                </h1>
                <hr className="price__line" />
                <p className='price__text'>
                    Es un placer proporcionarte la cotización personalizada para tu evento, la cual hemos preparado cuidadosamente para satisfacer tus requerimientos y expectativas. Por favor, revisa la cotización y un asesor se comunicará contigo en breve para discutir todos los detalles y responder a cualquier consulta que puedas tener.
                </p>
            </section>
            <section className="price__principal">
                <div className="recuadro__factura">
                        <div className="datos__cliente">
                            <h5 className='price__fecha'>
                                Fecha
                            </h5>
                            <span className='price__ciudad'>
                                Medellín - Colombia
                            </span>
                            <h5 className="price__nombre--cotizacion">
                                Cotizacion para evento de bodas
                            </h5>
                        <div />


                        <div className="cliente">
                                <div className="container__cliente--cotizacion">
                                    <h5 className="nombre">Cliente:</h5>
                                    <span className='nombre__cliente'> [nombre cliente]</span>
                                </div>
                                <div className="container__cliente--cotizacion">
                                    <h5 className="fecha__evento">Fecha del evento:</h5>
                                    <span className='fecha__evento__cliente'>
                                        [fecha evento]
                                    </span>
                                   
                                </div>
                                <div className="container__cliente--cotizacion">
                                    <h5 className="ubicacion__evento">Ubicacion:</h5>
                                    <span className='ubicacion__evento--cliente'>
                                        [ubicacion evento]
                                    </span>       
                                </div>


                        </div>


                        <div className='datos__precio'>
                                <p className="infoSeleccion">
                                    De acuerdo al número de invitados ## y la locacion seleccionada se proporciona los precios de los servicios requeridos para tu evento.
                                </p>
                                <div className="servicios">
                                    <p className="servicios__seleccionados">Servicio</p>
                                    <p className="nombre__servicios">
                                        Fotografía digital con photobook
                                    </p>
                                </div>
                                <div className="precio__total">
                                    <p className="precio__total__seleccionados">Precio</p>
                                    <p className="precio__total__cliente">
                                        $400.00
                                    </p>
                                </div>

                        </div>

                        <div className="conclusion__documento">
                                <p>
                                    Por favor, ten en cuenta que esta es solo una cotización inicial. Los precios pueden variar según tus preferencias y necesidades específicas. Estamos disponibles para discutir cualquier ajuste que desees hacer o para responder a cualquier pregunta que puedas tener.
                                        <br />
                                        <br />
                                        <br />

                                    ¡Esperamos tener la oportunidad de trabajar contigo y hacer que tu boda sea un evento verdaderamente memorable!
                                        <br />

                                    Atentamente,
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                    [Tu Nombre]
                                    Celebraciones Sarahy
                                </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Price;