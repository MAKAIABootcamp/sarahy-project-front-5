import { doc, setDoc} from "firebase/firestore";
import { firestore } from "../firebase/firebaseConfig";

export const addUserFireStore = async (userName, password, email) => 
{ try 
    { 
        const userData = { name: userName, password: password, email: email, admin: false, quote: [] }; 
        const userRef = doc(firestore, 'users', email); 
        await setDoc(userRef, userData); console.log('Usuario agregado con éxito.'); 
    
    } 
    
    catch (error) 
    
    { console.error('Error al agregar el usuario: ', error); 
    
    } 

};