import React, { useState, useEffect, useRef } from 'react';
import './chat.scss';
import { useNavigate } from 'react-router-dom';
import { addAdminMessageToChat } from '../../services/addMessage';
import { addMessageToExistingChat } from '../../services/addMessageToExistingChat ';

const Chat = () => {
    const [customChatId, setCustomChatId] = useState('');
    const [statuChat, setStatuChat] = useState(false);
    const generateRandomChatId = () => {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      };
    useEffect(() => {
        const generatedChatId = generateRandomChatId();
        setCustomChatId(generatedChatId);
      }, []);
    const addMessager = async (message) =>
    {
        if (statuChat)
        {
            await addMessageToExistingChat(customChatId, message);
        }
        else
        {

            await addAdminMessageToChat(customChatId, message);
            setStatuChat(true);

        }
    }
    const defaultMessage = {text: 'Si tienes más dudas, recuerda: ', option1: '\n1. Duda de Evento', option2: '\n2. Duda de Servicio',  option3: '\n3. Duda de Ubicación',  option4: '\n4. Duda de Cotización', action: '/wedding'};
    const messagesContainerRef = useRef(null);
    const navigate = useNavigate();
    window.addEventListener('load', () => {
        const header = document.getElementById('miHeader');
        const footer = document.getElementById('miFooter'); 

        const headerHeight = header ? header.clientHeight : 0;
        const footerHeight = footer ? footer.clientHeight : 0;

        const chatMaxHeight = window.innerHeight - headerHeight - footerHeight;


        const componente = document.querySelector('.chat');
        const altura = componente.clientHeight;
        const limiteSuperior = parseInt(componente.style.top);
        const limiteInferior = parseInt(componente.style.bottom);

        window.addEventListener('scroll', () => {
            var ratio = getVisibleHeightRatio("miHeader");
            // console.log(ratio * headerHeight);
            const chat = document.querySelector('.chat');
            const chatHeight = chat.clientHeight;
            const tH = ratio * headerHeight + 200;
            const topH = window.innerHeight - chatHeight;
            var hF = getVisibleHeightRatio("miFooter");
            // console.log(ratio * headerHeight);
            const tF = hF * headerHeight + 50;
            if (ratio * headerHeight + chatHeight >= window.innerHeight) {
                chat.style.position = 'absolute';
                chat.style.top = `${tH}px`; 
                chat.style.right = '0';  
            } else {

                if (hF <0) {

                    chat.style.position = 'fixed';
                    chat.style.bottom = '0px';
                    chat.style.right = '0px';
                    chat.style.top = `${topH}px`; 
                }
                else
                {
                    // console.log('Sí existeee.')
                    
                        chat.style.position = 'fixed';
                        chat.style.top = `${topH-hF * footerHeight-5}px`;                      
                        console.log('Bottom de: ', hF * footerHeight)
                        chat.style.right = '0';  
                     
                }
                
            }







        });

        function getVisibleHeightRatio(id) {
         
            let element = document.getElementById(id);
            let totalHeight = element.clientHeight;
            let top = element.getBoundingClientRect().top;
            let bottom = element.getBoundingClientRect().bottom;
            let visibleHeight = Math.min(bottom, window.innerHeight) - Math.max(top, 0);
         
            let ratio = visibleHeight / totalHeight;
           
            return ratio;
        }



    });

    const [mode, setMode] = useState('auto'); 
    const [minimized, setMinimized] = useState(true);
    const [inputMessage, setInputMessage] = useState('');
    const [initialMessageSent, setInitialMessageSent] = useState(false);

    const [chatBotMessages, setChatBotMessages] = useState([]);
    const [adminMessages, setAdminMessages] = useState([]);

    useEffect(() => {
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
 
            return {text: 'Hola, estoy para resolver tus dudas. Elige una opción: ', option1: '\n1. Duda de Evento', option2: '\n2. Duda de Servicio',  option3: '\n3. Duda de Ubicación',  option4: '\n4. Duda de Cotización', action: '/wedding'};
        }

        const choice = parseInt(userMessage);

        if (choice >= 1 && choice <= 4) {
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
