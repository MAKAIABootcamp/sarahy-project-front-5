import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebaseConfig";


export const editServiceField = async (serviceId, fieldPath, newValue) => {
    try {
      const serviceRef = doc(firestore, "services", serviceId);
      await updateDoc(serviceRef, {
        [fieldPath]: newValue,
      });
      console.log("Campo editado con éxito.");
    } catch (error) {
      console.error("Error al editar el campo:", error);
    }
  };
  

  