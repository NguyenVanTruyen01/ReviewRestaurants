import {createSlice} from "@reduxjs/toolkit"

const postSlice = createSlice({
    name :"POST",
    initialState: {
            posts:null
    },
    reducers: {
        createPostFail: (state) =>{
            state.posts = null;
        },
        createPostSuccess: (state,action) => {
            state.posts= action.payload.posts;
        }
    }
})

export  const {
    createPostFail,
    createPostSuccess,

} = postSlice.actions

export default postSlice.reducer;