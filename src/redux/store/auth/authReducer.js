import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const initialState = {
    isLogged: false,
    userLogged: null,
    quoteData: null, // Agregamos una propiedad para almacenar los datos generados en Quote.jsx
    error: null
}

const authSlice = createSlice({
    name: 'aunthentication',
    initialState,
    reducers: {
        userLogged: (state, action) => {
            state.isLogged = action.payload;
        },
        userDataLogged: (state, action) => {
            state.userLogged = action.payload;
        },

        setError: (state, action) => {
            state.error = action.payload;
        },
        updateQuoteData: (state, action) => {
            state.quoteData = action.payload; // Esta acción actualiza los datos generados en Quote.jsx
        }

    }
})

export const { userLogged, userDataLogged,updateQuoteData, setError } = authSlice.actions;
export default authSlice.reducer;

