import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebaseConfig";


export const editDate = async (serviceId, fieldPath, newValue) => {
    try {
      
      const serviceRef = doc(firestore, "dates", serviceId);

      await updateDoc(serviceRef, {
        [fieldPath]: newValue,
      });
      console.log("Cita editada con éxito.");
    //   location.reload()
    } catch (error) {
      console.error("Error al editar el campo:", error);
    }
  };