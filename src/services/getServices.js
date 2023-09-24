import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebaseConfig";

export const getService = async (serviceId) => {
  try {
    const serviceRef = doc(firestore, "services", serviceId);
    const serviceSnapshot = await getDoc(serviceRef);

    if (serviceSnapshot.exists()) {
      const serviceData = serviceSnapshot.data();
      console.log("Datos del servicio:", serviceData);
      return serviceData;
    } else {
      console.log("No existe el documento");
      return null;
    }
  } catch (error) {
    console.error("Error al obtener el servicio:", error);
    return null;
  }
};


