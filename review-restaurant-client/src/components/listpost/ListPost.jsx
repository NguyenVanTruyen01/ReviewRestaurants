import React from "react";
import Post from "../post/Post";

const ListPost = ()=>{
    return (
        <>

            <div className="ListPost" style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px"
            }}>

                <Post></Post>
                <Post></Post>
                <Post></Post>

            </div>

        </>

    )
}

export default ListPost