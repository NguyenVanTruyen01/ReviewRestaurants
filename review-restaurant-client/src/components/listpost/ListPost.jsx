import React from "react";
import Post from "../post/Post";

const ListPost = ({posts, user})=>{

    return (
        <>

            <div className="ListPost" style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px"
            }}>

                {
                    posts.filter((post => {
                        return post.user._id === user._id || post.idRestaurant._id === user._id
                    })).map(post =>  <Post post={ post} />)
                    // posts.map((post)=>{
                    //     return <Post post={ post} />
                    // })
                }


            </div>

        </>

    )
}

export default ListPost