import React, {useState} from "react";
import {login} from "../../api/AuthAPI"

const Login = () =>{

    const [data,setData] = useState({
        email:"",
        password: ""
    });

    const handleChange = (e)=>{
        setData({...data,[e.target.name] : e.target.value})
        console.log(e.target.value)
    }


    const handleSummit = async (e)=>{
        e.preventDefault();
       const user = await login(data);
        console.log(user.data)
    }

    return(
        <div className= "LoginPage">
            <h1>Login</h1>
            <input name = "email" type= "email" onInput={handleChange}/>
            <input name = "password" type= "password" onInput={handleChange}/>
            <button type="button" onClick={handleSummit}>Login</button>
        </div>
    )
}

export default Login