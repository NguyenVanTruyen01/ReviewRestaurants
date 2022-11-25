import {getDataAPI}from "../../utils/fetchData"
import {notifyLoading,notifySuccess,notifyError} from "../notifySlice"
import {getUserSuccess,getUserFail} from "../userSlice"
import {getPostsSuccess,getPostsFail} from "../postSlice"

export const search = async (key) =>{
    const res = await getDataAPI(`users/search?key=${key}`);
    return res.data
}

export const getUser = async (id, dispatch,navigate ) => {
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

