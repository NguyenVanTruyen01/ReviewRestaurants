import React, {useEffect, useState} from "react";
import {getDataAPI} from "../../utils/fetchData";

const SearchUsers = () =>{
    const [key,setKey] = useState("");
    const [searchUsers, setSearchUsers] = useState([]);

    useEffect( ()=>{
        if(key){
             getDataAPI(`users/search?key=${key}`)
                 .then(res => setSearchUsers(res.data.users))
                 .catch(err => setSearchUsers([]))
        }
        else {
            setSearchUsers([])
        }

    },[key])

    return (
        <>
            <form>
                <input
                    type="text"
                    className="half-radius"
                    placeholder="Enter your location"
                    value={key}
                    onInput={e => setKey(e.target.value)}
                />
                <button type="submit" className="btn-default">
                    Search Food
                    <span />
                </button>
            </form>
            <div className= 'users'>
                {
                    searchUsers ? searchUsers.map(user =>{
                        return (
                            <div> {user._id} </div>
                        )
                    }) : ""
                }
            </div>
        </>

    )
}

export default SearchUsers