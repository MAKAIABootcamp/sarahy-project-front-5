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

const QuoteGenerated = () => {

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
  const data = [
    { servicio: 'Catering', description: 'Llena tu mesa de la mejor comida.', quantity: 1, price: 25000 },
    { servicio: 'Photography', description: 'Llena tu fiesta con los mejores recuerdos.', quantity: 5, price: 50000 },
    { servicio: 'Music', description: 'Llena tu fiesta con la mejor Músic.', quantity: 1, price: 125000 },
    { servicio: 'Decor', description: 'Llena tu Fiesta de la mejor decoración.', quantity: 1, price: 200000 },
  ];

  const generatePDF = () => {
    const doc = new jsPDF();


    doc.text(55, 20, 'Tu cotización con Celebraciones Sarahy ');
    const columns = ['Servicio', 'Descripción', 'Cantidad', 'Valor'];

    // Crear un array con los datos de cada fila
    const bodyData = data.map((item) => {
      // Calcular el valor total para este servicio
      const itemTotal = item.quantity * item.price;

      return [item.servicio, item.description, item.quantity, `$${itemTotal.toFixed(2)}`];
    });

    // Agregar una fila final con el total general
    bodyData.push(['', '', '', '']);
    bodyData.push(['Total', '', '', `$${total.toFixed(2)}`]);

    doc.autoTable({
      startY: 30,
      head: [columns],
      body: bodyData,
    });



    doc.text(55, 80, 'Nombre del Usuario. ');



    doc.save('cotizacion.pdf');
  };

  return (
    <section className="sectionQuote">
      <Chat />
      <img id='miHeader' className='backGroundHeader' src="https://i.ibb.co/fXLf97G/image-127.png" alt="Fondo de Wedding" />

      <main className="containerQuote">
        <span className="titleQuote">Tu cotización</span>
        <span className="lineTitle"></span>
        <p className="textQuote">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque quibusdam veritatis laudantium vitae corporis voluptates. Eveniet repudiandae dolorum similique quisquam quasi necessitatibus quia, enim deserunt quae nulla nemo mollitia.
        </p>


        <section className='dataQuote'>

          <article className='infoQuote'>

            <section className='introductionQuoteDate'>
              <span className='titleQuoteGenerate'>Megarecreación, Celebraciones Sarahy </span>
              <p>Cra. 50 C N. 64-62</p>
              <p>3574755- 5827982-3163048505 Medellín</p>
              <p>15373081-1</p>
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
                    <p>22/09/2023</p>
                  </span>
                </div>
              </div>

              <div className='infoUserQuote'>
                <span className='infoUserQuote__name'>
                  <b>Nombre: </b>
                  <b>Dirección</b>
                  <b>C.P. y Ciudad</b>
                  <b>NIF: </b>
                </span>

                <span className='infoUserQuote__data'>
                  <p>Paula Muñoz</p>
                  <p>C.C. Medellín local 01</p>
                  <p> 3102912026-</p>
                  <p>22 de septiembre</p>
                </span>
              </div>

            </section>

            <table>
              <thead>
                <tr>
                  <th>Servicio</th>
                  <th>Descripción</th>
                  <th>Cantidad</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  // Calcula el valor total para este servicio
                  const itemTotal = item.quantity * item.price;
                  // Agrega el valor total al total general
                  total += itemTotal;

                  return (
                    <tr key={index}>
                      <td>{item.servicio}</td>
                      <td>{item.description}</td>
                      <td>{item.quantity}</td>
                      <td>${itemTotal.toFixed(2)}</td>
                    </tr>
                  );
                })}
                <tr className='totalmyQuote'>
                  <td className='totalQuote' colSpan="3">Total</td>
                  <td className='totalValueQuote'>${total.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>


            <section className='listQuote'>

            </section>

          </article>
          <div className='container__btns'>

          <span className='downloadQuote' onClick={() => generatePDF()}>Descargar cotización </span>
          <div className='container__btns__calendar'>
            <button className='btn__scheduleDate' onClick={openModal}>Agendar cita</button>
            <CalendarGoogle isOpen={modal} onRequestCloset={closeModal} className="modal" />
          </div>
          </div>

        </section>

      </main>
    </section>
  )
}


export default QuoteGenerated;