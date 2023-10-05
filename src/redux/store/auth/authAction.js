
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../../../firebase/firebaseConfig";
import {
  createAnUserInCollection,
  getUserFromCollection,
} from "../../../services/getUser";
import { setError, userDataLogged, userLogged } from "./authReducer";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";

export const createAnUser = (newUser) => {



  return async (dispatch) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        newUser.email,
        newUser.password
      );
      await updateProfile(auth.currentUser, {
        displayName: newUser.displayName,
        photoURL: newUser.photoURL,
        admi: false, 
        quote: []
      });
      const createdUser = await createAnUserInCollection(user.uid, newUser);
      // console.log("respuesta firebase", user);
      // console.log("respuesta firestore", createdUser);
      // console.log("respuesta firestore user", createdUser.user);
      console.log(createdUser)

      // dispatch(userLogged(true));
      // dispatch(userDataLogged(createdUser));
      // dispatch(setError(false));
    } catch (error) {
      console.log(error);
      dispatch(
        setError({
          error: true,
          code: error.code,
          message: error.message,
        })
      );
    }
  };
};

export const loginWithEmailAndPassword = (loggedUser) => {

  return async (dispatch) => {
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        loggedUser.email,
        loggedUser.password
      );
      const foundUser = await getUserFromCollection(user.uid);
      console.log("respuesta firebase", user);
      console.log("respuesta firestore", foundUser);

      dispatch(userLogged(true));
      dispatch(userDataLogged(foundUser));
      dispatch(setError(false));
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Ingreso exitoso',
        showConfirmButton: false,
        timer: 1500
      })
      
    } catch (error) {
      console.log(error);
      dispatch(
        setError({
          error: true,
          code: error.code,
          message: error.message,
        })
      );
    }
  };
};

export const loginGoogle = () => {
  return async (dispatch) => {
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);
      const contizacionUser = await getUserFromCollection(user.uid)
      console.log(user);
      const dataUser = {
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        photo: user.photoURL,
        number: user.phoneNumber,
        admi: false, 
        quote: contizacionUser.quote, 
        chat: [], 
      };
      const createdUser = await createAnUserInCollection(dataUser.uid, dataUser);
 
      console.log(dataUser);
      dispatch(userLogged(true));
      dispatch(userDataLogged(createdUser));
      dispatch(setError(false));
     
    } catch (error) {
      console.log(error.code);
      dispatch(
        setError({
          error: true,
          code: error.code,
          message: error.message,
        })
      );
    }
  };
};

export const loginFacebook = () => {
  return async (dispatch) => {
    try {
      const provider = new FacebookAuthProvider();
      const userFace = await signInWithPopup(auth, provider);
      const dataUserFace = {
        nombre: userFace.user.displayName,
        email: userFace.user.email,
        uid: userFace.user.uid,
        foto: userFace.user.photoURL,
        numero: userFace.user.phoneNumber,
      };
      dispatch(userLogged(true));
      dispatch(userDataLogged(dataUserFace));
      dispatch(setError(false));
      
    } catch (error) {
      console.log(error.code);
    }
  };
};