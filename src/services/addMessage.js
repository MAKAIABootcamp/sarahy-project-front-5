import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { firestore } from "../firebase/firebaseConfig";

// Función para agregar un mensaje del usuario a un chat existente
export const addAdminMessageToChat = async (idChat, message) => {
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

    // Genera un ID de chat aleatorio
    const randomChatId = generateRandomChatId();

    // Crea el objeto del mensaje
    const messageObject = {
      author: "user",
      message: message,
    };

    // Actualiza el campo myChats con el nuevo mensaje
    const updatedChats = chatData.myChats.concat({
      idChat: idChat,
      myMessage: [messageObject],
    });

    // Actualiza el documento del chat con el campo myChats actualizado
    await updateDoc(chatRef, {
      myChats: updatedChats,
    });

    console.log("Mensaje del usuario agregado con éxito.");
  } catch (error) {
    console.error("Error al agregar el mensaje del usuario:", error);
  }
};

// Función para generar un ID de chat aleatorio
const generateRandomChatId = () => {
  // Genera un ID único, puedes usar una lógica específica si lo deseas
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};
