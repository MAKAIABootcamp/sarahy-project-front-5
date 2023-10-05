import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebaseConfig";


export const editServiceField = async (serviceId, fieldPath, newValue) => {
    try {
      
      const serviceRef = doc(firestore, "services", serviceId);

      await updateDoc(serviceRef, {
        [fieldPath]: newValue,
      });
      console.log("Campo editado con éxito.");
      // location.reload()
    } catch (error) {
      console.error("Error al editar el campo:", error);
    }
  };

  
// export const editServiceField = async (serviceId, fieldPath, newValue) => {
//   try {
//     const { name } = newValue;
//     const serviceRef = doc(firestore, "services", serviceId);
    
//     const updateObject = {}; 

//     updateObject[name] = newValue;

//     await updateDoc(serviceRef, {
//       [fieldPath]: updateObject,
//     });
//     console.log("Campo editado con éxito.");
//   } catch (error) {
//     console.error("Error al editar el campo:", error);
//   }
// };

