import React, { useEffect, useState } from 'react'
import './quoteGenerated.scss'
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable'
import { PDFViewer } from '@react-pdf/renderer';
import Chat from '../chat/Chat';
import { addAdminMessageToChat } from '../../services/addMessage';
import { addMessageToExistingChat } from '../../services/addMessageToExistingChat ';
import ModalCalendar from '../../components/modalCalendar/modalCalendar';
import { useNavigate } from 'react-router-dom';
import CalendarGoogle from '../../components/calendarGoogle/calendarGoogle';
import { useSelector } from 'react-redux';
import logoIzquierda from "../../assets/image/gotaIzquierda.png";
import logoDerecha from "../../assets/image/gotaDerecha.png";
import imgCotizacion from './cotizacion.jpg'

const QuoteGenerated = () => {
 
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Los meses empiezan desde 0
  const day = currentDate.getDate();

  const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;


  const quoteInfo = useSelector(state => state.aunthentication.quoteData);

  console.log(quoteInfo);

  // useEffect(() => 
  // {

  //   const addMessager = async () =>
  //   {
  //     await addMessageToExistingChat('rp17lp3q3x2s426z4m8fo', 'NUEVA XXXXXX PRUEBAAAAAAAAAA');
  //   }
  //   addMessager();
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const navigate = useNavigate()

  useEffect(() => {

    const addMessager = async () => {
      await addMessageToExistingChat('rp17lp3q3x2s426z4m8fo', 'NUEVA XXXXXX PRUEBAAAAAAAAAA');
    }
    addMessager();

  }, [])

  let total = 0;
  const data = quoteInfo.selectedServices;

  const generatePDF = () => {
    const doc = new jsPDF();
  
    doc.text(55, 20, "Tu cotización con Celebraciones Sarahy ");
    const columns = ["Servicio", "Detalle", "Descripción", "Valor"];
  
    // Crear un array con los datos de cada fila
    const bodyData = [];
  
    data.forEach((item) => {
      // Agregar una fila para el servicio principal
      bodyData.push([
        item.name,
        item.services[0].nameService,
        item.services[0].description,
        `$${item.services[0].price}`,
      ]);
  
      // Agregar filas adicionales para los subservicios si los hay
      for (let i = 1; i < item.services.length; i++) {
        bodyData.push(["", item.services[i].nameService, item.services[i].description, `$${item.services[i].price}`]);
      }
    });
  
    // Agregar una fila final con el total general
    bodyData.push(["", "", "Total", `$${quoteInfo.total}`]);
  
    doc.autoTable({
      startY: 30,
      head: [columns],
      body: bodyData,
    });
  
  
    doc.save("cotizacion.pdf");
  };

  const serviceRows = [];

  data.forEach((item, index) => {
    // Agregar una fila para el servicio principal
    const serviceRow = (
      <tr key={index}>
        <td rowSpan={item.services.length}>{item.name}</td>
        <td>{item.services[0].nameService}</td>
        <td>{item.services[0].description}</td>
        <td>{item.services[0].price}</td>
      </tr>
    );

    serviceRows.push(serviceRow);

    // Agregar filas adicionales para los subservicios si los hay
    for (let i = 1; i < item.services.length; i++) {
      const subServiceRow = (
        <tr key={`${index}-${i}`}>
          <td>{item.services[i].nameService}</td>
          <td>{item.services[i].description}</td>
          <td className="price">
            <span className="money"></span>
            {Number(item.services[i].price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {/* Formatea el precio con comas para unidades de mil */}
          </td>
        </tr>
      );

      serviceRows.push(subServiceRow);
    }
  });



  return (

    <main className="main__home">
            <Chat headerImg={'imgCompanies__intro'}/>

    <img src={imgCotizacion} alt="" className="imgCompanies__intro" />
    <section className="main__info dark:bg-neutral-800">
      <img src={logoIzquierda} alt="" className="logoIzquierda" />
      <div className="container__intro">
        <h1 id='styleGeneratedQuoteTytle' className="main__title__home dark:text-neutral-100">Cotización</h1>
        <p id='idStyeleParrafoGenerated' className="main__parrafo dark:text-neutral-300">
        Le invitamos a revisar detenidamente la cotización y, si tiene alguna pregunta, no dude en ponerse en contacto con Celebraciones Sarahy. Estamos aquí para ayudarle.
        </p>
      </div>
      <img src={logoDerecha} alt="" className="logoDerecha" />
    </section>

    <section className="sectionQuote">
      <Chat />
      <div className="containerQuote">
      
        <section className='dataQuote'>

          <article className='infoQuote'>

            <section className='introductionQuoteDate'>
              <span className='titleQuoteGenerate'>Megarecreación, Celebraciones Sarahy </span>
              <p>Cra. 50 C N. 64-62</p>
              <p>3574755 - 5827982 - 3163048505 - Medellín</p>
            </section>

            <section className='dateUserQuote'>

              <div className='dateQuoteGenerate'>
                <span className='billTitleQuote'><p>FACTURA</p></span>
                <div>
                  <span className='numberQuoteLeft'>
                    <b>Número:</b>
                    <b>Fecha:</b>
                  </span>

                  <span className='numberQuoteRight'>
                    <p>23F0165</p>
                    <p>{formattedDate}</p>
                  </span>
                </div>
              </div>

              <div className='infoUserQuote'>
                <span className='infoUserQuote__name'>
                  <b>Nombre: </b>
                  <b>Dirección: </b>
                  <b>Contacto: </b>
                  <b>NIF: </b>
                </span>

                <span className='infoUserQuote__data'>
                  <p>{quoteInfo.name}</p>
                  <p>C.C. Medellín local 01</p>
                  <p>{quoteInfo.contacto}</p>
                  <p>***</p>
                </span>
              </div>

            </section>

            <table>
              <thead>
                <tr>
                  <th>Servicio</th>
                  <th>Detalle</th>
                  <th>Descripción</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>

                {serviceRows}
                <tr className='totalmyQuote'>
                  <td className='totalQuote' colSpan="3">Total</td>
                  <td className='totalValueQuote'>${Number(quoteInfo.total).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                </tr>
              </tbody>
            </table>


            <section className='listQuote'>

            </section>

          </article>
          <div className='container__btns'>
          <span className='containerUpDown'>
            
          </span>
            <span className='downloadQuote' onClick={() => generatePDF()}>Descargar cotización </span>
            <div className='container__btns__calendar'>
              <button className='btn__scheduleDate' onClick={openModal}>Agendar cita</button>
              <CalendarGoogle isOpen={modal} onRequestCloset={closeModal} className="modal" />
            </div>
          </div>

        </section>

      </div>
    </section>



    </main>

    
  )
}


export default QuoteGenerated;