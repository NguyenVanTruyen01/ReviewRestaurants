import {
    createPostFail,
    createPostSuccess,
    getPostsFail,
    getPostsSuccess,
    updateListPost,
    updatePost
} from "../postSlice"
import {getDataAPI, postDataAPI, patchDataAPI, deleteDataAPI} from "../../utils/fetchData"
import {notifyLoading,notifySuccess,notifyError} from "../notifySlice"
import { toast } from "react-toastify";
import {imageUpload} from "../../utils/imageUpload"

export const createPost = async (currentID,restaurantID, rating,content,images,dispatch, token)=>{
    try {
        dispatch(notifyLoading())
        let media = []
        if(images.length > 0){
            media = await imageUpload(images);
        }

        const res = await postDataAPI("posts", {
            user : currentID,
            idRestaurant: restaurantID,
            ratingRes: rating,
            content: content,
            images: media
        }, token);

        // const newListPost = [...listPost,res.data.posts]
        // console.log(listPost,newListPost)

        dispatch(createPostSuccess(res.data.posts))

        dispatch(notifySuccess(res.data.message))

    }catch (err){
        const msg = customErrMessage(err)
        dispatch(createPostFail());
        dispatch(notifyError(msg));
        toast.error(msg);
    }

}

export const getPosts = async (dispatch) =>{
    dispatch(notifyLoading())

    try{
        const posts = await  getDataAPI(`posts`)

        dispatch(getPostsSuccess(posts.data))

        dispatch(notifySuccess())
    }
    catch (err){
        dispatch(getPostsFail())
        dispatch(notifyError())
    }
}

export const likePost = async (post, currentUser,dispatch) =>{
    const newPost = {...post,likes: [...post.likes, currentUser]}
    dispatch(updatePost(newPost))

    try{
        await patchDataAPI(`posts/${post._id}/like`,
            { currentUserId: currentUser._id})

    }catch (err){
        const msg = customErrMessage(err)
        dispatch(notifyError(msg));
    }
}

export const unLikePost = async (post, currentUser,dispatch) =>{
    const newPost = {...post,likes: post.likes.filter(like => like._id !== currentUser._id)}
    dispatch(updatePost(newPost))

    try{
        await patchDataAPI(`posts/${post._id}/unlike`,
            { currentUserId: currentUser._id})

    }catch (err){
        const msg = customErrMessage(err)
        dispatch(notifyError(msg));
    }
}

export const removePost = async (post, currentUser,listPost,dispatch) =>{

    const newListPost = [...listPost.filter(p => p._id !== post._id)]
    console.log({listPost,newListPost})
    try {
        await deleteDataAPI(`posts/${post._id}`,{currentUserId: currentUser._id}, null)
        dispatch(updateListPost(newListPost))

    }catch (err){
        const msg = customErrMessage(err)
        dispatch(notifyError(msg));
    }
}

const customErrMessage = (err) =>{
    const msg = Array.isArray(err.response.data.message) ? err.response.data.message[0] : err.response.data.message;
    return msg
}