import {createPostFail,createPostSuccess} from "../postSlice"
import {getDataAPI,postDataAPI} from "../../utils/fetchData"
import {notifyLoading,notifySuccess,notifyError} from "../notifySlice"
import { toast } from "react-toastify";
import {imageUpload} from "../../utils/imageUpload"

export const createPost = async (currentID,restaurantID,content,images,dispatch, token)=>{

    try {
        dispatch(notifyLoading())
        let media = []
        if(images.length > 0){
            media = await imageUpload(images);
        }
        const res = await postDataAPI("posts", {
            user : currentID,
            idRestaurant: restaurantID,
            content: content,
            images: media
        }, token);

        dispatch(createPostSuccess(res.data.posts))
        dispatch(notifySuccess(res.data.message))

    }catch (err){
        const msg = customErrMessage(err)
        dispatch(createPostFail());
        dispatch(notifyError(msg));
        toast.error(msg);
    }

}

const customErrMessage = (err) =>{
    const msg = Array.isArray(err.response.data.message) ? err.response.data.message[0] : err.response.data.message;
    return msg
}