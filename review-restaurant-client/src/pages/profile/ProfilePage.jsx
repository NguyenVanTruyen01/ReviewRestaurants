import React, {useEffect, useState} from "react";
import PostShareModal from "../../modals/postshare/PostShareModal";
import ListPost from "../../components/listpost/ListPost";
import "./ProfilePage.scss"
import { Rating } from '@mantine/core';
import InfoRestaurant from "../../components/info-restaurent/InfoRestaurant";
import {useSelector} from "react-redux";

const ProfilePage = ()=>{

    const {currentUser} = useSelector(state => state.auth?.login)
    const {user} = useSelector(state => state.user )
    const {listPost} = useSelector(state => state.post)

    return(
        <>
            <div className="container" >

                <div className="user-profile">

                        <figure>

                            {
                                currentUser._id === user._id ?
                                    <div className="edit-pp">
                                        <label className="fileContainer">
                                            <i className="fa fa-camera"></i>
                                            <input type="file"/>
                                        </label>
                                    </div>
                                    : ""
                            }

                            <img className="cover-img"
                                 src="https://res.cloudinary.com/dehtpa6ba/image/upload/v1668594732/review_restaurants/profile-image_u5v1gv.jpg" alt=""/>

                            <ul className="profile-controls">
                                <li><a href="#" title="" data-toggle="tooltip" data-original-title="Follow"><i
                                        className="fa fa-star"></i></a></li>

                            </ul>

                            <Rating className= "rating"
                                    readOnly
                                    defaultValue={user.rating.reduce((a, b) => a + b, 0) / user.rating.length} />

                            <div className="profile-author">
                                <div className="profile-author-thumb">
                                    <img className="avatar" alt="author"
                                         src="https://res.cloudinary.com/dehtpa6ba/image/upload/v1668596070/review_restaurants/album1_spet5e.jpg"/>
                                    {
                                        currentUser._id ===  user._id ?
                                        <div className="edit-dp">
                                            <label className="fileContainer">
                                                <i className="fa fa-camera"></i>
                                                <input type="file"/>
                                            </label>
                                        </div> : ""
                                    }
                                </div>
                            </div>

                        </figure>
                </div>

                <div className="user-profile-bottom">
                    <div className="author-content">
                        <a className="h4 author-name" > {user.userName}</a>
                        <div className="address"><i className="fas fa-map-marker-alt"></i>{user.address}</div>
                    </div>

                    <ol className="folw-detail">
                        <li><span>Bài đăng</span>
                            <a>101</a>
                        </li>
                        <li><span>Người theo dõi</span>
                            <a>1.3K</a>
                        </li>
                        <li><span>Đang theo dõi</span>
                            <a>22</a>
                        </li>
                    </ol>
                </div>

                <PostShareModal user = {user}/>

                <InfoRestaurant posts = {listPost}  user = {user} />

                <ListPost posts = {listPost} user = {user}/>

            </div>

        </>

    )
}

export default ProfilePage