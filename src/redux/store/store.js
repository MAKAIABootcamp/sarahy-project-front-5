import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authReducer";

const store = configureStore({
    reducer: {
        aunthentication: authReducer,
    }, 
  });
  
export default store;
