import {createSlice} from "@reduxjs/toolkit"
import {EditData} from "./globalHandle/globalHandle";

const postSlice = createSlice({
    name :"POST",
    initialState: {
        post:null,
        listPost:null
    },
    reducers: {
        createPostFail: (state) =>{
            state.post = null;
        },
        createPostSuccess: (state,action) => {
            state.post= action.payload.posts;
            state.listPost = [...state.listPost, action.payload.posts]
        },
        getPostsSuccess: (state,action) => {
            state.listPost= action.payload.posts;
        },
        getPostsFail: (state) =>{
            state.listPost = null;
        },
        updatePost: (state,action)=>{
            state.listPost = EditData(state.listPost,action.payload._id,action.payload)
        }

    }
})

export  const {
    createPostFail,
    createPostSuccess,
    getPostsSuccess,
    getPostsFail,
    updatePost

} = postSlice.actions

export default postSlice.reducer;