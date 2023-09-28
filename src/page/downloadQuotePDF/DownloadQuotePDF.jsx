import React from 'react';
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";

const styles = {
    sectionQuote: {
      backgroundColor: '#F3F3F3',
      flexDirection: 'column',
    },
    containerQuote: {
      background: 'url("https://i.ibb.co/sFSLdg9/image-79.png")',
      backgroundSize: 'auto',
      backgroundPosition: 'center',
      flexDirection: 'column',
      margin: '5vw',
    },
    textQuote: {
      backgroundColor: '#FFF',
      textAlign: 'start',
      padding: '8vw',
      width: '90%',
      height: '90%',
    },
    titleQuoteGenerate: {
      fontFamily: 'Montserrat',
      fontSize: '25px',
    },
    billTitleQuote: {
      backgroundColor: 'gray',
      textAlign: 'center',
      paddingTop: '5%',
      paddingBottom: '5%',
      border: '1px solid',
      fontSize: '24px',
    },
    numberQuoteLeft: {
      flexDirection: 'column',
      paddingLeft: '0.5vw',
      width: '50%',
      height: '8vw',
      backgroundColor: 'rgb(217, 211, 211)',
      border: '1px solid',
      paddingTop: '1vw',
      gap: '1vw',
      fontSize: '16px',
    },
    numberQuoteRight: {
      flexDirection: 'column',
      width: '50%',
      height: '8vw',
      backgroundColor: 'rgb(235, 235, 235)',
      border: '1px solid',
      paddingLeft: '0.5vw',
      paddingTop: '1vw',
      gap: '1vw',
      fontSize: '16px',
    },
    infoUserQuote__name: {
      padding: '1.5vw',
      flexDirection: 'column',
      width: '25%',
      backgroundColor: 'rgb(217, 211, 211)',
      gap: '0.75vw',
      border: '1px solid',
      fontSize: '16px',
    },
    infoUserQuote__data: {
      border: '1px solid',
      padding: '1.5vw',
      flexDirection: 'column',
      width: '75%',
      backgroundColor: 'rgb(240, 234, 234)',
      gap: '0.75vw',
      fontSize: '16px',
    },
    table: {
      backgroundColor: '#f0f0f0',
      width: '100%',
      fontSize: '16px',
    },
    totalmyQuote: {
      backgroundColor: '#e6dbe4',
      fontWeight: 'bold',
      color: '#000000',
    },
  };

const DownloadQuote = () => {
  const data = [
    { servicio: 'Catering', description: 'Llena tu mesa de la mejor comida.', quantity: 1, price: 25000 },
    { servicio: 'Photography', description: 'Llena tu fiesta con los mejores recuerdos.', quantity: 1, price: 50000 },
    { servicio: 'Music', description: 'Llena tu fiesta con la mejor Músic.', quantity: 1, price: 125000 },
    { servicio: 'Decor', description: 'Llena tu Fiesta de la mejor decoración.', quantity: 1, price: 200000 },
  ];

  const total = data.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <Document>
      <Page size="A4" style={styles.sectionQuote}>
        <View style={styles.containerQuote}>
          <Text style={styles.textQuote}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque quibusdam veritatis laudantium vitae corporis voluptates. Eveniet repudiandae dolorum similique quisquam quasi necessitatibus quia, enim deserunt quae nulla nemo mollitia.
          </Text>

          <View style={styles.dataQuote}>
            <View style={styles.infoQuote}>
              <View style={styles.introductionQuoteDate}>
                <Text style={styles.titleQuoteGenerate}>Megarecreación, Celebraciones Sarahy</Text>
                <Text>Cra. 50 C N. 64-62</Text>
                <Text>3574755- 5827982-3163048505 Medellín</Text>
                <Text>15373081-1</Text>
              </View>

              <View style={styles.dateUserQuote}>
                <View style={styles.dateQuoteGenerate}>
                  <View style={styles.billTitleQuote}>
                    <Text>FACTURA</Text>
                  </View>
                  <View style={styles.numberQuoteLeft}>
                    <Text>Número:</Text>
                    <Text>Fecha:</Text>
                  </View>
                  <View style={styles.numberQuoteRight}>
                    <Text>23F0165</Text>
                    <Text>22/09/2023</Text>
                  </View>
                </View>

                <View style={styles.infoUserQuote}>
                  <View style={styles.infoUserQuote__name}>
                    <Text>Nombre:</Text>
                    <Text>Dirección</Text>
                    <Text>C.P. y Ciudad</Text>
                    <Text>NIF:</Text>
                  </View>

                  <View style={styles.infoUserQuote__data}>
                    <Text>Paula Muñoz</Text>
                    <Text>C.C. Medellín local 01</Text>
                    <Text>3102912026-</Text>
                    <Text>22 de septiembre</Text>
                  </View>
                </View>
              </View>

              <View style={styles.table}>
                <View style={styles.totalmyQuote}>
                  <Text>Total</Text>
                  <Text>${total.toFixed(2)}</Text>
                </View>
              </View>
            </View>

            <Text style={styles.downloadQuote}>DESCARGAR COTIZACIÓN</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default DownloadQuote;
