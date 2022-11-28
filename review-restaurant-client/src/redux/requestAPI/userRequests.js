import {getDataAPI,patchDataAPI}from "../../utils/fetchData"
import {notifyLoading,notifySuccess,notifyError} from "../notifySlice"
import {getUserSuccess,getUserFail,updateUser} from "../userSlice"
import {getPostsSuccess,getPostsFail} from "../postSlice"
import {imageUpload} from "../../utils/imageUpload";

export const search = async (key) =>{
    const res = await getDataAPI(`users/search?key=${key}`);
    return res.data
}

export const getProfileUser = async (id, dispatch,navigate ) => {
    dispatch(notifyLoading())

    try{
        const res = await  getDataAPI(`users/${id}`)
        const posts = await  getDataAPI(`posts`)
        dispatch(getUserSuccess(res.data))
        dispatch(getPostsSuccess(posts.data))

        dispatch(notifySuccess())
        navigate(`/profile/${id}`)
    }
    catch (err){
        dispatch(getUserFail())
        dispatch(getPostsFail())
        dispatch(notifyError())
    }
}

export const changeCoverPicture = async (currentUser, user, images, dispatch, access_token) =>{
    try {
        dispatch(notifyLoading())
        let media = []
        if(images.length > 0){
            media = await imageUpload(images);
        }

        const newUser = {...user, coverPicture: media[0].url}
        const res = await patchDataAPI(`users/${currentUser._id}`,{
            "_id": currentUser._id,
            "coverPicture": newUser.coverPicture
        })
        dispatch(updateUser(newUser))
        dispatch(notifySuccess())

    }catch (err){
        dispatch(notifyError(err.messages))
    }
}

export const changeAvatar = async (currentUser, user, imagesAvatar, dispatch, access_token) =>{
    try {
        dispatch(notifyLoading())
        let media = []
        if(imagesAvatar.length > 0){
            media = await imageUpload(imagesAvatar);
        }

        const newUser = {...user, avatar: media[0].url}
        const res = await patchDataAPI(`users/${currentUser._id}`,{
            "_id": currentUser._id,
            "avatar": newUser.avatar
        })
        dispatch(updateUser(newUser))
        dispatch(notifySuccess())

    }catch (err){
        dispatch(notifyError(err.messages))
    }
}

