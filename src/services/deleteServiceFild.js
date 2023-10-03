import { doc, updateDoc, deleteField } from "firebase/firestore";
import { firestore } from "../firebase/firebaseConfig";
import Swal from "sweetalert2";

export const deleteServiceField = async (serviceId, fieldPath) => {
    try {
      const serviceRef = doc(firestore, "services", serviceId);
      const updateData = {
        [fieldPath]: deleteField(), 
      };
      await updateDoc(serviceRef, updateData);
      console.log("Campo eliminado con éxito.");
      Swal.fire({
        icon: 'success',
        title: 'Servicio eliminado exitosamente',
        showConfirmButton: false,
        timer: 1500
      })
      // location.reload()
    } catch (error) {
      console.error("Error al eliminar el campo:", error);
    }
};
