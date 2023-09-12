import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../firebase/firebaseConfig";
import { createAnUserInCollection, getUserFromCollection } from "../../../services/getUser";
import { setError, userDataLogged, userLogged } from "./authReducer";

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
      });
      const createdUser = await createAnUserInCollection(user.uid, newUser);
      // console.log("respuesta firebase", user);
      // console.log("respuesta firestore", createdUser);
      // console.log("respuesta firestore user", createdUser.user);

      dispatch(userLogged(true));
      dispatch(userDataLogged(createdUser.user));
      dispatch(setError(false));
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
  return async(dispatch) => {
      try {
          const { user } = await signInWithEmailAndPassword(auth, loggedUser.email, loggedUser.password);
          const foundUser = await getUserFromCollection(user.uid);
          console.log("respuesta firebase", user);
          console.log("respuesta firestore", foundUser);

          dispatch(userLogged(true));
          dispatch(userDataLogged(foundUser));
          dispatch(setError(false));
      } catch (error) {
          console.log(error);
          dispatch(setError({
              error: true,
              code: error.code,
              message: error.message
          }))
      }
  }
}
