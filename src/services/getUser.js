import { collection, doc, getDoc, getDocs, orderBy, query, setDoc,  where } from "firebase/firestore";
import { firestore } from "../firebase/firebaseConfig";

const collectionName = "users";

//Crear un usuario en la collection users
export const createAnUserInCollection = async (uid, newUser) => {
    try {
        const newUserRef = doc(firestore, collectionName, uid);
        await setDoc(newUserRef, newUser);
        return {
            ok: true,
            user: {
                id: uid,
                admi: false, 
                quote: [], 
                chat: [], 
                ...newUser
            }
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

//Obtenemos un usuario en la colección users
export const getUserFromCollection = async (uid) => {
    try {
        const userRef = doc(firestore, collectionName, uid);
        const user = await getDoc(userRef);
        if (user.exists()) {
            console.log("Document data:", user.data());
            return {
                id: user.id,
                ...user.data()
            }
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
            return null;
        }
    } catch (error) {
        console.log(error);
        return null;
    }

}