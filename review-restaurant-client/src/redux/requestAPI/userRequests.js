import {getDataAPI,patchDataAPI}from "../../utils/fetchData"
import {notifyLoading,notifySuccess,notifyError} from "../notifySlice"
import {getUserSuccess,getUserFail,updateUser} from "../userSlice"
import {updateCurrentUser} from "../authSlice";
import {imageUpload} from "../../utils/imageUpload";
import {updatePost} from "../postSlice";

export const search = async (key) =>{
    const res = await getDataAPI(`users/search?key=${key}`);
    return res.data
}

export const getProfileUser = async (id, dispatch,navigate ) => {
    dispatch(notifyLoading())

    try{
        const res = await  getDataAPI(`users/${id}`)

        await dispatch(getUserSuccess(res.data))


        dispatch(notifySuccess())
        navigate(`/profile/${id}`)
    }
    catch (err){
        dispatch(getUserFail())
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

export const followUser = async (user,currentUser,dispatch,access_token) =>{

    try{
        const newUser = {...currentUser,following: [...currentUser.following, user]}

        const res = await patchDataAPI(`users/${user._id}/follow`,
            { currentUserId: currentUser._id})

        dispatch(updateCurrentUser(newUser))
        dispatch(notifySuccess(res.data.message))

    }catch (err){
        dispatch(notifyError(err.response.data.message));
    }
}

export const unfollowUser = async (user,currentUser,dispatch,access_token) =>{

    try{
        const newUser = {...currentUser,following: currentUser.following.filter(follow => follow._id !== user._id)}

        const res = await patchDataAPI(`users/${user._id}/unfollow`,
                { currentUserId: currentUser._id})

        dispatch(updateCurrentUser(newUser))

        dispatch(notifySuccess(res.data.message))

    }catch (err){
        dispatch(notifyError(err.response.data.message));
    }
}