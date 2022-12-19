import {postDataAPI,patchDataAPI,deleteDataAPI} from "../../utils/fetchData"
import {updatePost} from "../postSlice";
import {notifyError,notifySuccess} from "../notifySlice";
import {EditData,DeleteData} from "../globalHandle/globalHandle";

export const createComment = async (post,newComment,currentUser,dispatch)=>{

    const newPost = {...post,comments: [...post.comments,newComment]}
    dispatch(updatePost(newPost))

    try {

        const data = {...newComment,postId: post._id, postUserId: post.user._id}
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

}

export const likeComment = async ({comment,post,currentUser,dispatch}) =>{
    const newComment = {...comment, likes: [...comment.likes, currentUser]}
    console.log(newComment)
    const newComments = EditData(post.comments,comment._id,  newComment )
    const newPost = {...post,comments: newComments}

    try {

        const res = await patchDataAPI(`comments/${comment._id}/like`,{currentUserId:currentUser._id})
        console.log(res.data)
        dispatch(updatePost(newPost))

    }catch (err){
        const msg = customErrMessage(err)
        dispatch(notifyError(msg));
    }

}

export const unlikeComment = async ({comment,post,currentUser,dispatch})=>{

    const newComment = {...comment,likes: DeleteData(comment.likes,currentUser._id)}

    const newComments = EditData(post.comments,comment._id,newComment)

    const newPost = {...post,comments: newComments}



    try {
        const res = await patchDataAPI(`comments/${comment._id}/unlike`,{currentUserId:currentUser._id})
        console.log(res.data)
        dispatch(updatePost(newPost))
    }catch (err){
        const msg = customErrMessage(err)
        dispatch(notifyError(msg));
    }

}

export const deleteComment = async ({post, auth, comment,dispatch}) =>{

    const deleteArr = [...post.comments.filter((cm) => cm.reply === comment._id), comment]
    const newPost = {
         ...post,
        comments: post.comments.filter(cm => !deleteArr.find(da => cm._id === da._id))
    }

    try {
         deleteArr.forEach(item => {
                deleteDataAPI(`comments/${item._id}`,{currentUserId: auth._id}, null)
         })
        dispatch(updatePost(newPost))

    }catch (err){
        const msg = customErrMessage(err)
        dispatch(notifyError(msg));
    }
}

const customErrMessage = (err) =>{
    const msg = Array.isArray(err.response.data.message) ? err.response.data.message[0] : err.response.data.message;
    return msg
}