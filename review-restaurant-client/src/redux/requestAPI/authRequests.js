import {postDataAPI} from "../../utils/fetchData"
import {loginSuccess,loginFail,logoutSuccess} from "../authSlice"
import {notifyLoading,notifySuccess,notifyError} from "../notifySlice"
import { toast } from "react-toastify";

export const register = async (data,dispatch,navigate) => {
    dispatch(notifyLoading())

    try{

        const res = await postDataAPI("auth/signup",data);
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
        console.log(res.data)
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

const customErrMessage = (err) =>{
    const msg = Array.isArray(err.response.data.message) ? err.response.data.message[0] : err.response.data.message;
    return msg
}