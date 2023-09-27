import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebaseConfig";
import Swal from "sweetalert2";


export const addNewDate = async (serviceId, newService) => {
  try {

    const { name } = newService; 
    const serviceRef = doc(firestore, "dates", serviceId);

    const updateObject = {}; 

    updateObject[name] = newService;

    await updateDoc(serviceRef, updateObject); 
    Swal.fire({
      icon: "success",
      title: "Cita creada exitosamente",
      showConfirmButton: false,
      timer: 1500,
    });
    
    console.log("Nueva cita agregada con éxito.");
    location.reload()
    
  } catch (error) {
    console.error("Error al agregar la nueva cita:", error);
  }
};