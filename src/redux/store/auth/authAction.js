import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../firebase/firebaseConfig";
import { createAnUserInCollection } from "../../../services/getUser";
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
      console.log("respuesta firebase", user);
      console.log("respuesta firestore", createdUser);
      console.log("respuesta firestore user", createdUser.user);

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
