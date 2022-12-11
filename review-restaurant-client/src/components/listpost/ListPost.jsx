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
                        gap: "10px",
                        marginBottom: "20px"
                    }}>
                        <div className="title"
                        style={{paddingLeft: "16px"}}>Bài đánh giá</div>
                        {
                            posts.filter((post => {
                                return post.user._id === user._id || post.idRestaurant._id === user._id
                            })).length > 0 ?

                                posts.filter((post => {
                                    return post.user._id === user._id || post.idRestaurant._id === user._id
                                })).map(post =>  <Post post={ post} />)
                                :
                                <div style={{paddingLeft: "16px"}}>Chưa có bài đánh giá</div>
                        }

                    </div>
                    :
                    <h1 >Không có bài đánh giá</h1>

            }

        </>

    )
}

export default ListPost