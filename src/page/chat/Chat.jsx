import React, { useState, useEffect, useRef } from 'react';
import './chat.scss';
import { useNavigate } from 'react-router-dom';
import { addAdminMessageToChat } from '../../services/addMessage';

const Chat = () => {
    const addMessager = async (message) =>
    {
      await addAdminMessageToChat(message);
    }
    const defaultMessage = {text: 'Si tienes más dudas, recuerda: ', option1: '\n1. Duda de Evento', option2: '\n2. Duda de Servicio',  option3: '\n3. Duda de Ubicación',  option4: '\n4. Duda de Cotización', action: '/wedding'};
    const messagesContainerRef = useRef(null); // Ref para el contenedor de mensajes
    const navigate = useNavigate();
    window.addEventListener('load', () => {
        const header = document.getElementById('miHeader'); // Reemplaza 'miHeader' con el ID de tu encabezado.
        const footer = document.getElementById('miFooter'); // Reemplaza 'miFooter' con el ID de tu pie de página.

        const headerHeight = header ? header.clientHeight : 0;
        const footerHeight = footer ? footer.clientHeight : 0;

        // Calcula la altura total a la que se puede colocar el chat.
        const chatMaxHeight = window.innerHeight - headerHeight - footerHeight;

        // // Ahora, con la altura máxima calculada, puedes ajustar la altura del chat.
        // const chat = document.querySelector('.chat');
        // if (chat) {
        //   chat.style.top = headerHeight + 'px';
        // }

        // Obtenemos el elemento que tiene la clase .componente
        const componente = document.querySelector('.chat');
        // Obtenemos la altura del componente
        const altura = componente.clientHeight;
        // Obtenemos el límite superior del componente
        const limiteSuperior = parseInt(componente.style.top);
        // Obtenemos el límite inferior del componente
        const limiteInferior = parseInt(componente.style.bottom);

        // Creamos una función que se ejecuta cada vez que se hace scroll en la página
        window.addEventListener('scroll', () => {
            var ratio = getVisibleHeightRatio("miHeader");
            console.log(ratio * headerHeight);
            const chat = document.querySelector('.chat');
            const chatHeight = chat.clientHeight;
            const tH = ratio * headerHeight + 200;
            const topH = window.innerHeight - chatHeight;
            var hF = getVisibleHeightRatio("miFooter");
            console.log(ratio * headerHeight);
            const tF = hF * headerHeight + 50;
            if (ratio * headerHeight + chatHeight >= window.innerHeight) {
                // Cambia a 'position: absolute' cuando la altura del encabezado más la altura de .chat supera la altura de la ventana
                chat.style.position = 'absolute';
                chat.style.top = `${tH}px`; // Puedes ajustar esto según tus necesidades
                chat.style.right = '0';  // Puedes ajustar esto según tus necesidades
            } else {
                // Vuelve a 'position: fixed' cuando sea igual o menor

                if (hF <0) {

                    chat.style.position = 'fixed';
                    chat.style.bottom = '0px';
                    chat.style.right = '0px';
                    chat.style.top = `${topH}px`; // Puedes ajustar esto según tus necesidades
                }
                else
                {
                    console.log('Sí existeee.')
                    
                        // Cambia a 'position: absolute' cuando la altura del encabezado más la altura de .chat supera la altura de la ventana
                        chat.style.position = 'fixed';
                        chat.style.top = `${topH-hF * footerHeight-5}px`;                        // chat.style.bottom = `${hF * footerHeight}px`; // Puedes ajustar esto según tus necesidades
                        console.log('Bottom de: ', hF * footerHeight)
                        chat.style.right = '0';  // Puedes ajustar esto según tus necesidades
                     
                }
                
            }







        });

        function getVisibleHeightRatio(id) {
            // Obtenemos el elemento por su id
            var element = document.getElementById(id);
            // Obtenemos la altura total del elemento
            var totalHeight = element.clientHeight;
            // Obtenemos la posición del borde superior e inferior del elemento con respecto al borde superior de la ventana
            var top = element.getBoundingClientRect().top;
            var bottom = element.getBoundingClientRect().bottom;
            // Calculamos la altura visible del elemento
            var visibleHeight = Math.min(bottom, window.innerHeight) - Math.max(top, 0);
            // Calculamos la proporción de la altura visible con respecto a la altura total
            var ratio = visibleHeight / totalHeight;
            // Devolvemos el resultado
            return ratio;
        }



    });

    const [mode, setMode] = useState('auto'); // Puede ser 'auto' o 'admin'
    const [minimized, setMinimized] = useState(false);
    const [inputMessage, setInputMessage] = useState('');
    const [initialMessageSent, setInitialMessageSent] = useState(false);

    // Crear objetos para almacenar mensajes por separado para el ChatBot y el Administrador
    const [chatBotMessages, setChatBotMessages] = useState([]);
    const [adminMessages, setAdminMessages] = useState([]);

    useEffect(() => {
        // Cuando el componente se monta, envía el mensaje inicial si no se ha enviado antes.
        if (!initialMessageSent) {
            const initialResponse = getAutoResponse('');
            setChatBotMessages([...chatBotMessages, { text: initialResponse, type: 'auto' }]);
            setInitialMessageSent(true);
        }
    }, [initialMessageSent, chatBotMessages]);

    const toggleChatMode = () => {
        setMode(mode === 'auto' ? 'admin' : 'auto');
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    };

    const handleMinimize = () => {
        setMinimized(!minimized);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputMessage.trim() === '') return;

        const userMessage = { text: inputMessage, type: 'user' };

        if (mode === 'auto') {
            const autoResponse = getAutoResponse(inputMessage);
            const botMessage = { text: autoResponse, type: 'auto' };
            setChatBotMessages([...chatBotMessages, userMessage, botMessage]);
        } else {
            setAdminMessages([...adminMessages, userMessage]);
            addMessager(inputMessage);
        }

        setInputMessage('');

        setTimeout(() => {
            if (messagesContainerRef.current) {
                messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
            }
        }, 100);
        
    };

    const getAutoResponse = (userMessage) => {
        if (userMessage.trim() === '') {
            // Mensaje inicial con opciones
            return {text: 'Hola, estoy para resolver tus dudas. Elige una opción: ', option1: '\n1. Duda de Evento', option2: '\n2. Duda de Servicio',  option3: '\n3. Duda de Ubicación',  option4: '\n4. Duda de Cotización', action: '/wedding'};
        }

        // Parsea el mensaje del usuario para obtener la elección
        const choice = parseInt(userMessage);

        if (choice >= 1 && choice <= 4) {
            // Responder de manera personalizada según la elección
            switch (choice) {
                case 1:
                    return {result1: 'Has seleccionado Duda de Evento.', result2: 'Ve a Eventos. ', result3: 'Click Aquí. ', action: '/wedding'};
                case 2:
                    return {result1: 'Has seleccionado Duda de Servicios.', result2: 'Ve a Servicios. ', result3: 'Click Aquí. ', action: '/wedding'};
                case 3:
                    return {result1: 'Has seleccionado Duda de Ubicaciones.', result2: 'Ve a Ubicaciones. ', result3: 'Click Aquí. ', action: '/wedding'};
                case 4:
                    return {result1: 'Has seleccionado Duda de Cotización.', result2: 'Ve a Cotizar. ', result3: 'Click Aquí. ', action: '/quote'};
            }
        } else {
            // Opción inválida, proporciona nuevamente las opciones
            return 'No entiendo tu elección. Por favor, elige una opción válida:';
        }
    };

    return (
        <div className={`chat ${minimized ? 'minimized' : ''}`}>
            <div className="chat-header">
                <div className="chat-avatar">
                    <img
                        src={mode === 'auto' ? 'https://uxwing.com/wp-content/themes/uxwing/download/internet-network-technology/robot-line-icon.png' : 'https://static.thenounproject.com/png/3324336-200.png'}
                        alt={mode === 'auto' ? 'Robot' : 'Administrador'}
                    />
                </div>
                <div className="chat-title">
                    {mode === 'auto' ? 'ChatBot' : 'Administrador'}
                </div>
                <div className="chat-toggle" onClick={toggleChatMode}>
                    <i className={`fa ${mode === 'auto' ? 'fa-user' : 'fa-robot'}`}></i>
                    <img className='minimi' src="https://cdn.icon-icons.com/icons2/1883/PNG/512/twocirclingarrows_120593.png" alt="Cambiar Modo" />
                </div>
                <div className="chat-minimize" onClick={handleMinimize}>
                    <i className="fa fa-minus"></i>
                    <img className='minimi' src='https://cdn-icons-png.flaticon.com/512/93/93631.png' alt='Minimizar' />
                </div>
            </div>
            <div className="chat-messages" ref={messagesContainerRef}>
                {/* Usar chatBotMessages o adminMessages según el modo */}
                
                {mode === 'auto'
                    ? chatBotMessages.map((message, index) => (
                        <div  key={index} className={`message ${message.type}`}>
                            { message.text.action ? 
                            
                                    (message.text.option1 ?  
                                    (
                                        <span>
                                            
                                            <span>{message.text.text}</span>
                                            <span>{message.text.option1}</span>
                                            <span>{message.text.option2}</span>
                                            <span>{message.text.option3}</span>
                                            <span>{message.text.option4}</span>

                                        </span>
                                        

                                        
                                    ): message.text.result1 ?  
                                        (
                                        
                                            <span>

                                                <span>{message.text.result1}</span>
                                                <span>{message.text.result2}</span>
                                                <span className='optionClick' onClick={() =>navigate(message.text.action)}>{message.text.result3}</span>


                                            </span>
                                            
                                            
                                            

                                        ):message.text.text )  : message.text}

                        </div>
                    ))
                    : adminMessages.map((message, index) => (
                        <div key={index} className={`message ${message.type}`}>
                            {message.text}
                        </div>
                    ))}

                    { chatBotMessages.map((message, index) => (message.text.result1 && <span key={index} className='message auto'>                                            
                                            <span>{defaultMessage.text}</span>
                                            <span>{defaultMessage.option1}</span>
                                            <span>{defaultMessage.option2}</span>
                                            <span>{defaultMessage.option3}</span>
                                            <span>{defaultMessage.option4}</span></span>))}


            </div>
            <div className="chat-input">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Escribe un mensaje..."
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                    />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default Chat;
