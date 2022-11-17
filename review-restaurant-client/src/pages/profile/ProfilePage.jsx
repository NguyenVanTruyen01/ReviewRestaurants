import React from "react";
import PostShareModal from "../../modals/postshare/PostShareModal";
import ListPost from "../../components/listpost/ListPost";
import "./ProfilePage.scss"
import { Rating } from '@mantine/core';
import InfoRestaurant from "../../components/info-restaurent/InfoRestaurant";

const ProfilePage = ()=>{
    return(
        <>
            <div className="container" >

                <div className="user-profile">
                        <figure>
                            <div className="edit-pp">
                                <label className="fileContainer">
                                    <i className="fa fa-camera"></i>
                                    <input type="file"/>
                                </label>
                            </div>

                            <img className="cover-img"
                                 src="https://res.cloudinary.com/dehtpa6ba/image/upload/v1668594732/review_restaurants/profile-image_u5v1gv.jpg" alt=""/>

                            <ul className="profile-controls">
                                <li><a href="#" title="" data-toggle="tooltip" data-original-title="Follow"><i
                                        className="fa fa-star"></i></a></li>

                            </ul>

                            <Rating className= "rating" defaultValue={3} />

                            <div className="profile-author">
                                <div className="profile-author-thumb">
                                    <img className="avatar" alt="author"
                                         src="https://res.cloudinary.com/dehtpa6ba/image/upload/v1668596070/review_restaurants/album1_spet5e.jpg"/>
                                        <div className="edit-dp">
                                            <label className="fileContainer">
                                                <i className="fa fa-camera"></i>
                                                <input type="file"/>
                                            </label>
                                        </div>
                                </div>
                            </div>

                        </figure>
                </div>

                <div className="user-profile-bottom">
                    <div className="author-content">
                        <a className="h4 author-name" href="about.html">The Shelter cafe & pub</a>
                        <div className="address"><i className="fa fa-map-marker"></i>891 Kha Vạn Cân, Phường Linh Tây, Tp. Thủ Đức, Thủ Đức, Thành phố Hồ Chí Minh 721400</div>
                    </div>

                    <ol className="folw-detail">
                        <li><span>Posts</span>
                            <a>101</a>
                        </li>
                        <li><span>Followers</span>
                            <a>1.3K</a>
                        </li>
                        <li><span>Following</span>
                            <a>22</a>
                        </li>
                    </ol>
                </div>

                <PostShareModal/>

                <InfoRestaurant />

                <ListPost/>
            </div>

        </>

    )
}

export default ProfilePage