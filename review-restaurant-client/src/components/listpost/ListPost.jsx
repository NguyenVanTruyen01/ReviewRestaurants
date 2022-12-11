import React, {useEffect} from "react";
import Post from "../post/Post";
import {useSelector} from "react-redux";

const ListPost = ({posts, user})=>{
    return (
        <>
            {
                posts ?
                    <div className="ListPost" style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px"
                    }}>
                        {
                            posts.filter((post => {
                                return post.user._id === user._id || post.idRestaurant._id === user._id
                            })).map(post =>  <Post post={ post} />)
                        }

                    </div>
                    :
                    <h1>Không có bài đánh giá</h1>

            }

        </>

    )
}

export default ListPost