import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebaseConfig";
import Swal from "sweetalert2";

export const addNewService = async (serviceId, newService) => {
  try {
    const { name } = newService; 
    const serviceRef = doc(firestore, "services", serviceId);

    const updateObject = {}; 

    updateObject[name] = newService;

    await updateDoc(serviceRef, updateObject); 
    console.log("Nuevo servicio agregado con éxito.");
    location.reload()
  } catch (error) {
    console.error("Error al agregar el nuevo servicio:", error);
  }
};


