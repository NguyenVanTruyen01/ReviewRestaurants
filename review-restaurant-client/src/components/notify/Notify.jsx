import React from "react";
import {useSelector,useDispatch} from "react-redux";
import Loading from "../../pages/loading/Loading"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notify = ()=>{

    const {notify} = useSelector(state => state)

    return (
        <div>
            {notify.loading && <Loading/>}
            <ToastContainer autoClose={2000} />
        </div>
    )
}

export default Notify