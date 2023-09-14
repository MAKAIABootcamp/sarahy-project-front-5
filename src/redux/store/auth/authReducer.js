import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLogged: false,
    userLogged: null,
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
        }
    }
})

export const { userLogged, userDataLogged, setError } = authSlice.actions;
export default authSlice.reducer;

