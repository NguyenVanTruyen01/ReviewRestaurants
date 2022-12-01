import React from "react";
import ListPost from "../../components/listpost/ListPost"
import {useSelector} from "react-redux";
import Post from "../../components/post/Post";
import Header from "../../components/main/Header";
import './ExplorePage.scss'

const ExplorePage = () =>{

    const {listPost} = useSelector(state => state.post)

    return (

        <div className= "ExplorePage">
            <Header/>

            <div className="PageContent">

                <div className="ExploreReview">
                    {
                        listPost.length > 0 ?
                            listPost.map(post =>  <Post key = {post._id} post={ post} />) :
                            <h1>Chưa có bài review nào</h1>
                    }
                </div>

                <div className="ExploreRestaurant">
                    <div className='title'>Địa điểm nổi bật</div>

                    <div className="list-restaurants">
                        <div className='restaurant-card'>
                            <img src="https://toidicafe.vn/static/images/place/mi-ca-phe/mi-ca-phe-avatar.jpg?w=60&h=60" alt=""/>

                            <div className="in4-restaurant">
                                <div className="name-restaurant"> Nguyen Van Truyen</div>

                                <small className= "address-restaurant">
                                    13 Nguyễn Trãi, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh
                                </small>
                            </div>
                        </div>

                        <div className='restaurant-card'>
                            <img src="https://toidicafe.vn/static/images/place/mi-ca-phe/mi-ca-phe-avatar.jpg?w=60&h=60" alt=""/>

                            <div className="in4-restaurant">
                                <div className="name-restaurant"> Nguyen Van Truyen</div>

                                <small className= "address-restaurant">
                                    13 Nguyễn Trãi, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh
                                </small>
                            </div>
                        </div>

                        <div className='restaurant-card'>
                            <img src="https://toidicafe.vn/static/images/place/mi-ca-phe/mi-ca-phe-avatar.jpg?w=60&h=60" alt=""/>

                            <div className="in4-restaurant">
                                <div className="name-restaurant"> Nguyen Van Truyen</div>

                                <small className= "address-restaurant">
                                    13 Nguyễn Trãi, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh
                                </small>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    )
}

export default ExplorePage
