import { doc, getDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebaseConfig";

// Función para agregar un mensaje a un chat existente por su idChat
export const addMessageToExistingChat = async (idChat, message) => {
  try {
    const chatId = '7r5KdKz8pJNRvgyNQ6Gi'; // ID del documento de chat

    const chatRef = doc(firestore, "chats", chatId);

    // Obtén el documento actual
    const chatDoc = await getDoc(chatRef);
    if (!chatDoc.exists()) {
      console.error("El documento del chat no existe.");
      return;
    }

    const chatData = chatDoc.data();

    // Encuentra el objeto con el idChat proporcionado
    const existingChatObject = chatData.myChats.find((chat) => chat.idChat === idChat);

    if (existingChatObject) {
      // Crea el objeto del mensaje
      const messageObject = {
        author: "user",
        message: message,
      };

      // Agrega el mensaje al arreglo myMessage del objeto encontrado
      existingChatObject.myMessage.push(messageObject);

      // Actualiza el documento del chat
      await updateDoc(chatRef, {
        myChats: chatData.myChats,
      });

      console.log("Mensaje del usuario agregado con éxito al chat existente.");
    } else {
      console.error("El chat con el id proporcionado no fue encontrado.");
    }
  } catch (error) {
    console.error("Error al agregar el mensaje del usuario:", error);
  }
};
