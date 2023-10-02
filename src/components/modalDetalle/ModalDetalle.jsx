import React, { useEffect, useState } from 'react'
import Modal from "react-modal";
import './modalDetalle.scss';
import { PDFViewer } from '@react-pdf/renderer';
import { Document, Page, Text, View } from "@react-pdf/renderer";

const ModalDetalle = ({ isOpen, onRequestClose, data }) => {
    const [elementoSeleccionado, setElementoSeleccionado] = useState();

    const data1 = [
        { servicio: 'Catering', description: 'Llena tu mesa de la mejor comida.', quantity: 1, price: 25000 },
        { servicio: 'Photography', description: 'Llena tu fiesta con los mejores recuerdos.', quantity: 1, price: 50000 },
        { servicio: 'Music', description: 'Llena tu fiesta con la mejor Músic.', quantity: 1, price: 125000 },
        { servicio: 'Decor', description: 'Llena tu Fiesta de la mejor decoración.', quantity: 1, price: 200000 },
    ];

    const total = data1.reduce((acc, item) => acc + item.quantity * item.price, 0);

    useEffect(() => {
        setElementoSeleccionado(data);
    }, [data]);


console.log(elementoSeleccionado.name)

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal__detalles">
            <div className='equis2 dark:text-neutral-100' onClick={onRequestClose}>X</div>


            <Document>
                <Page className="sectionQuote">
                    <View className="containerQuote">
                        <Text className="textQuote">
                        Una cotización es una estimación de costos que se proporciona para un producto o servicio, pero su precio final puede cambiar debido a diversos factores, como cambios en las especificaciones, la cantidad requerida, los impuestos y otros costos variables
                        </Text>

                        <View className="data1Quote">
                            <View className="infoQuote">
                                <View className="introductionQuoteDate">
                                    <Text className="titleQuoteGenerate">Megarecreación, Celebraciones Sarahy</Text>
                                    <Text>Cra. 50 C N. 64-62</Text>
                                    <Text>3574755- 5827982-3163048505 Medellín</Text>
                                    <Text>15373081-1</Text>
                                </View>

                                <View className="dateUserQuote">
                                    <View className="dateQuoteGenerate">
                                        <View className="billTitleQuote">
                                            <Text>FACTURA</Text>
                                        </View>
                                        <View className="numberQuoteLeft">
                                            <Text>Número:</Text>
                                            <Text>Fecha:</Text>
                                        </View>
                                        <View className="numberQuoteRight">
                                            <Text>23F0165</Text>
                                            <Text>22/09/2023</Text>
                                        </View>
                                    </View>

                                    <View className="infoUserQuote">
                                        <View className="infoUserQuote__name">
                                            <Text>Nombre:</Text>
                                            <Text>Dirección</Text>
                                            <Text>C.P. y Ciudad</Text>
                                            <Text>NIF:</Text>
                                        </View>

                                        <View className="infoUserQuote__data1">
                                            <Text>Paula Muñoz</Text>
                                            <Text>C.C. Medellín local 01</Text>
                                            <Text>3102912026-</Text>
                                            <Text>22 de septiembre</Text>
                                        </View>
                                    </View>
                                </View>

                                <View className="table">
                                    <View className="totalmyQuote">
                                        <Text>Total</Text>
                                        <Text>${total.toFixed(2)}</Text>
                                    </View>
                                </View>
                            </View>

                            <Text className="downloadQuote">DESCARGAR COTIZACIÓN</Text>
                        </View>
                    </View>
                </Page>
            </Document>


        </Modal>
    )
};


export default ModalDetalle;