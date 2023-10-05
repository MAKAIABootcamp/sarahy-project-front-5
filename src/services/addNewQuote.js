import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { firestore } from "../firebase/firebaseConfig";

export const addNewQuote = async (userId, newElement) => {
  try {
    // obtiene la referencia del documento del usuario
    const userRef = doc(firestore, "users", userId);
    // actualiza el campo "quote" con el nuevo elemento usando arrayUnion
    await updateDoc(userRef, {
      quote: arrayUnion(newElement)
    });
    console.log("Nuevo elemento agregado con éxito.");
  } catch (error) {
    console.error("Error al agregar el nuevo elemento:", error);
  }
};
