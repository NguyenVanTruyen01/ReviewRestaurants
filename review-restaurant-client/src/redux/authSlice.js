import {createSlice} from "@reduxjs/toolkit"

const authSlice = createSlice({
    name :"AUTH",
    initialState: {
        login: {
            currentUser: null,
            access_token: null
        }
    },
    reducers: {
        loginSuccess: (state,action)=>{
            state.login.currentUser = action.payload.user;
            state.login.access_token = action.payload.access_token;
        },
        loginFail: (state) =>{
            state.login.currentUser = null;
            state.login.access_token = null;
        },
        logoutSuccess: (state) => {
            state.login.currentUser = null;
            state.login.access_token = null;
        },
    }
})

export  const {
    loginSuccess,
    loginFail,
    logoutSuccess,

} = authSlice.actions

export default authSlice.reducer;