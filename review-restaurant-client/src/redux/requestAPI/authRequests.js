import {patchDataAPI, postDataAPI} from "../../utils/fetchData"
import {loginSuccess, loginFail, logoutSuccess, updateCurrentUser} from "../authSlice"
import {notifyLoading,notifySuccess,notifyError} from "../notifySlice"
import { toast } from "react-toastify";
import {imageUpload} from "../../utils/imageUpload";

export const register = async (data,images,dispatch,navigate) => {
    dispatch(notifyLoading())

    try{

        //save images on cloudinary
        let media = []
        if(images.length > 0){
            media = await imageUpload(images);
        }
        const newData = {...data, infoRestaurant :{ ...data.infoRestaurant, images: media}}

        const res = await postDataAPI("auth/signup", newData
        );
        dispatch(notifySuccess(res.data.message))
        toast.success(res.data.message)
        navigate("/login")

    }catch (err){
        const msg = customErrMessage(err)
        dispatch(notifyError(msg));
        toast.error(msg);
    }
}

export const login = async (data,dispatch,navigate)=>{
    dispatch(notifyLoading());

    try {

        const res = await postDataAPI('auth/login', data);
        console.log(res.data)
        dispatch(loginSuccess(res.data));
        dispatch(notifySuccess(res.data.message));
        toast.success(res.data.message);
        navigate('/')

    }catch (err){
        const msg = customErrMessage(err)
        dispatch(loginFail());
        dispatch(notifyError(msg));
        toast.error(msg);
    }
}

export const logout = async (token,id,dispatch,navigate) =>{
    dispatch(notifyLoading());
    try {

        const res = await postDataAPI("auth/logout",id,token);
        dispatch(logoutSuccess());
        dispatch(notifySuccess(res.data.message));
        toast.success(res.data.message);
        navigate('/login');

    }catch (err){
        const msg = customErrMessage(err)
        dispatch(notifyError(msg));
        toast.error(msg);
    }
}

export const updateInfoRestaurant = async (data,currentUser,images,dispatch) => {
    dispatch(notifyLoading())

    try{

        //save images on cloudinary
        let media = []
        if(images.length > 0){
            media = await imageUpload(images);
        }

        let userUpdate = {};

        if(images.length > 0){
            userUpdate = {...data,
                currentUserId: currentUser._id,
                infoRestaurant :{ ...data.infoRestaurant, images: media}}
        }else{
            userUpdate = {...data,
                currentUserId: currentUser._id,
                infoRestaurant :{ ...data.infoRestaurant, images: currentUser.infoRestaurant.images}}
        }

        console.log(userUpdate)
        const res = await patchDataAPI(`users/${currentUser._id}`, userUpdate
        );
        dispatch(updateCurrentUser(res.data.user))
        dispatch(notifySuccess(res.data.message))
        toast.success(res.data.message)

    }catch (err){
        const msg = customErrMessage(err)
        dispatch(notifyError(msg));
        toast.error(msg);
    }
}

const customErrMessage = (err) =>{
    const msg = Array.isArray(err.response.data.message) ? err.response.data.message[0] : err.response.data.message;
    return msg
}