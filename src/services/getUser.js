import { collection, doc, getDoc, getDocs, orderBy, query, setDoc,  where } from "firebase/firestore";
import { firestore } from "../firebase/firebaseConfig";

const collectionName = "users";

export const createAnUserInCollection = async (uid, newUser) => {
    try {
        const newUserRef = doc(firestore, collectionName, uid);
        await setDoc(newUserRef, newUser);
        return {
            ok: true,
            user: {
                id: uid,
                ...newUser
            }
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}
