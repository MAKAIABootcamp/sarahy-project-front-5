// Importar React, useState y useEffect desde 'react'
import React, { useState, useEffect } from 'react';
// Importar el componente ChatBot de 'react-simple-chatbot'
import ChatBot from 'react-simple-chatbot';
// Importar el archivo chatBot.scss desde './chatBot.scss'
import './chatBot.scss';

// Crear una función llamada ChatBot que reciba las props que necesites
const ChatBot = (props) => {
  // Crear un estado llamado minimized que sea un booleano que indique si el chat está minimizado o no. Inicialízalo en false
  const [minimized, setMinimized] = useState(false);
  // Crear un estado llamado mode que sea un string que indique si el chat está en modo chatbot o en modo administrador. Inicialízalo en 'chatbot'
  const [mode, setMode] = useState('chatbot');
  // Crear un estado llamado messages que sea un array que contenga los mensajes del chat. Inicialízalo con un mensaje de bienvenida del chatbot
  const [messages, setMessages] = useState([
    {
      sender: 'chatbot',
      text: 'Hola, soy el chatbot de Megarecreación. Estoy aquí para ayudarte con tus dudas sobre nuestros servicios. ¿Qué quieres saber?',
      options: [
        { value: 'Catering', label: 'Catering' },
        { value: 'Photography', label: 'Photography' },
        { value: 'Music', label: 'Music' },
        { value: 'Decor', label: 'Decor' },
      ],
    },
  ]);
  // Crear una función llamada toggleMinimized que cambie el valor del estado minimized usando el operador !
  const toggleMinimized = () => {
    setMinimized(!minimized);
  };
  // Crear una función llamada toggleMode que cambie el valor del estado mode entre 'chatbot' y 'administrador' usando un operador ternario
  const toggleMode = () => {
    setMode(mode === 'chatbot' ? 'administrador' : 'chatbot');
  };
  // Crear una función llamada sendMessage que reciba un mensaje del usuario y lo añada al estado messages. También debes hacer una llamada a la API del chatbot o del administrador para obtener una respuesta y añadirla al estado messages. Puedes usar fetch o axios para hacer la llamada a la API
  const sendMessage = (message) => {
    // Añadir el mensaje del usuario al estado messages
    setMessages([...messages, { sender: 'user', text: message }]);
    // Hacer la llamada a la API según el modo
    if (mode === 'chatbot') {
      // Usar fetch para hacer una petición POST a la API del chatbot
      fetch('https://api.chatbot.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          context: messages,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Añadir la respuesta del chatbot al estado messages
          setMessages([
            ...messages,
            { sender: 'chatbot', text: data.text, options: data.options },
          ]);
        })
        .catch((error) => {
          // Mostrar un mensaje de error en caso de falla
          console.error(error);
          setMessages([
            ...messages,
            { sender: 'chatbot', text: 'Lo siento, algo salió mal. Por favor, inténtalo de nuevo más tarde.' },
          ]);
        });
    } else {
      // Usar axios para hacer una petición POST a la API del administrador
      axios
        .post('https://api.administrador.com/', {
          message: message,
          context: messages,
        })
        .then((response) => {
          // Añadir la respuesta del administrador al estado messages
          setMessages([
            ...messages,
            { sender: 'administrador', text: response.data.text },
          ]);
        })
        .catch((error) => {
          // Mostrar un mensaje de error en caso de falla
          console.error(error);
          setMessages([
            ...messages,
            { sender: 'administrador', text: 'Lo siento, algo salió mal. Por favor, inténtalo de nuevo más tarde.' },
          ]);
        });
    }
  };
  // Crear un efecto usando useEffect que se ejecute cuando el estado mode cambie. Dentro del efecto, debes cambiar la foto del chat según el modo usando document.getElementById y .src
  useEffect(() => {
    // Obtener el elemento de la foto del chat por su id
    const chatPhoto = document.getElementById('chat-photo');
    // Cambiar el src de la foto según el modo
    if (mode === 'chatbot') {
      chatPhoto.src = '/robot.png';
    } else {
      chatPhoto.src = '/admin.png';
    }
  }, [mode]);
  // Retornar el JSX del componente ChatBot. Debe tener los siguientes elementos:
  return (
    <div className="chat-container">
      <div className="chat-header">
        <img id="chat-photo" src="/robot.png" alt="Chat photo" />
        <input
          id="mode-switch"
          type="checkbox"
          onChange={toggleMode}
          checked={mode === 'administrador'}
        />
        <label htmlFor="mode-switch" className="switch-label"></label>
        <input
          id="minimize-button"
          type="checkbox"
          onChange={toggleMinimized}
          checked={minimized}
        />
        <label htmlFor="minimize-button" className="minimize-label"></label>
      </div>
      <div className="chat-body">
        <ChatBot
          steps={messages.map((message) => ({
            id: message.sender + Math.random(),
            message: message.text,
            trigger: message.options
              ? message.options[0].value + Math.random()
              : null,
            options: message.options,
            user: message.sender === 'user',
          }))}
          userAvatar="/user.png"
        />
      </div>
      <div className="chat-footer">
        <input
          id="message-input"
          type="text"
          placeholder="Escribe tu mensaje aquí"
        />
        <button
          id="send-button"
          onClick={() =>
            sendMessage(document.getElementById('message-input').value)
          }
        >
          <i className="fa fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
};


export default ChatBot;