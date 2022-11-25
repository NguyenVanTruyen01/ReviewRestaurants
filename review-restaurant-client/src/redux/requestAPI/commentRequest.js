import {postDataAPI,patchDataAPI} from "../../utils/fetchData"
import {updatePost} from "../postSlice";
import {notifyError,notifySuccess} from "../notifySlice";
import {EditData} from "../globalHandle/globalHandle";

export const createComment = async (post,newComment,currentUser,dispatch)=>{

    const newPost = {...post,comments: [...post.comments,newComment]}
    dispatch(updatePost(newPost))

    try {

        const data = {...newComment,postId: post._id}
        const res = await postDataAPI(`comments`,data)

        const newData = {...res.data.comment,user: currentUser}
        const newPost = {...post,comments: [...post.comments,newData]}
        dispatch(updatePost(newPost))

        dispatch(notifySuccess(res.data.message))

    }catch (err){
        const msg = customErrMessage(err)
        dispatch(notifyError(msg));
    }
}

export const updateComment = async ({comment,post,content,currentUser,dispatch}) => {

    const newComment = EditData(post.comments,comment._id, {...comment,content} )
    const newPost = {...post,comments: newComment}

    try {

        const res =  await patchDataAPI(`comments/${comment._id}`,{content, currentUserId: currentUser._id})
        dispatch(updatePost(newPost))

    }catch (err){
        const msg = customErrMessage(err)
        dispatch(notifyError(msg));
    }

    console.log(newPost)
}

const customErrMessage = (err) =>{
    const msg = Array.isArray(err.response.data.message) ? err.response.data.message[0] : err.response.data.message;
    return msg
}