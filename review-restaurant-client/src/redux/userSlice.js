import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name :"USER",
    initialState: {
        user: null,
    },
    reducers: {
        getUserSuccess: (state,action)=>{
            state.user = action.payload.user;
        },
        getUserFail: (state) =>{
            state.user= null;
        },
        updateUser: (state,action) =>{
            state.user = action.payload
        }

    }
})

export  const {
    getUserSuccess,
    getUserFail,
    updateUser

} = userSlice.actions

export default userSlice.reducer;