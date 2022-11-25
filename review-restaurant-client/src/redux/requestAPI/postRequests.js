import {createPostFail,createPostSuccess,updatePost} from "../postSlice"
import {getDataAPI,postDataAPI,patchDataAPI} from "../../utils/fetchData"
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

        dispatch(createPostSuccess(res.data))

        dispatch(notifySuccess(res.data.message))

    }catch (err){
        const msg = customErrMessage(err)
        dispatch(createPostFail());
        dispatch(notifyError(msg));
        toast.error(msg);
    }

}

export const likePost = async (post, currentUserId,dispatch) =>{
    const newPost = {...post,likes: [...post.likes, currentUserId]}
    dispatch(updatePost(newPost))

    try{
        await patchDataAPI(`posts/${post._id}/like`,
            { currentUserId: currentUserId})

    }catch (err){
        const msg = customErrMessage(err)
        dispatch(notifyError(msg));
    }
}

export const unLikePost = async (post, currentUserId,dispatch) =>{
    const newPost = {...post,likes: post.likes.filter(like => like !== currentUserId)}
    dispatch(updatePost(newPost))

    try{
        await patchDataAPI(`posts/${post._id}/unlike`,
            { currentUserId: currentUserId})

    }catch (err){
        const msg = customErrMessage(err)
        dispatch(notifyError(msg));
    }
}


const customErrMessage = (err) =>{
    const msg = Array.isArray(err.response.data.message) ? err.response.data.message[0] : err.response.data.message;
    return msg
}