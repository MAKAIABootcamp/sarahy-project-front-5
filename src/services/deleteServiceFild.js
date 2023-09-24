import { doc, updateDoc, deleteField } from "firebase/firestore";
import { firestore } from "../firebase/firebaseConfig";

export const deleteServiceField = async (serviceId, fieldPath) => {
    try {
      const serviceRef = doc(firestore, "services", serviceId);
      const updateData = {
        [fieldPath]: deleteField(), 
      };
      await updateDoc(serviceRef, updateData);
      console.log("Campo eliminado con éxito.");
    } catch (error) {
      console.error("Error al eliminar el campo:", error);
    }
};
