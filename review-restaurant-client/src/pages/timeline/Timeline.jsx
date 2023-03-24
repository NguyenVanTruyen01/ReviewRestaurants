import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Post from "../../components/post/Post";
import Header from "../../components/main/Header/Header";
import '../explore/ExplorePage.scss'
import { useNavigate } from "react-router-dom";
import empty from '../../assets/images/empty.gif'

const TimelinePage = () => {

    const { currentUser } = useSelector((state) => state.auth.login);
    const { listPost } = useSelector(state => state.post)

    const timeline = listPost.filter(post => {
        for (let key in listPost) {
            if (post.user._id === currentUser._id
                || currentUser.following.find(follow => follow._id === post.user._id))
                return true;
        }
        return false;
    })

    const navigate = useNavigate()

    const [restaurants, setRestaurant] = useState([])

    function getMultipleRandom(arr, num) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());

        return shuffled.slice(0, num);
    }

    useEffect(() => {

        const getListRestaurant = async () => {
            try {
                const restaurants = getMultipleRandom(currentUser.following, 5);
                console.log(restaurants)
                setRestaurant(restaurants);

            } catch (err) {
                console.log(err);
            }
        };
        getListRestaurant();


    }, [])

    return (

        <div className="ExplorePage">
            <Header />
            {
                timeline.length > 0 ?
                    <div className="PageContent">

                        <div className="ExploreReview">
                            {
                                timeline.length > 0 ?
                                    timeline.map(post => <Post key={post._id} post={post} />) :
                                    <h1>Chưa có bài review nào</h1>
                            }
                        </div>

                        <div className="ExploreRestaurant">
                            <div className='title'>Đang theo dõi</div>

                            {
                                restaurants && restaurants.length > 0 ?
                                    <div className="list-restaurants">

                                        {
                                            restaurants.map((res, index) => {
                                                return (
                                                    <div className='restaurant-card' key={index}
                                                        onClick={() => navigate(`/profile/${res._id}`)}
                                                    >
                                                        <div className="image">
                                                            <img src={res.infoRestaurant.images.length > 0 ?
                                                                res.infoRestaurant.images[0]?.url : res.avatar}
                                                                alt="" />
                                                        </div>


                                                        <div className="in4-restaurant">
                                                            <div className="name-restaurant"> {res.userName}</div>

                                                            <small className="address-restaurant">
                                                                {res.address}
                                                            </small>
                                                        </div>
                                                    </div>
                                                )
                                            })


                                        }

                                    </div>
                                    :
                                    <div>Chưa theo dõi ai</div>
                            }


                        </div>
                    </div>
                    :
                    <div className="empty-data"
                        style={{
                            width: "100%",
                            background: "#ffffff",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "2rem"
                        }}>
                        <span className="title">Chưa có bài đăng nào !</span>
                        <img
                            style={{ width: "30%", margin: "auto" }}
                            src={empty} alt="" />
                    </div>
            }


        </div>

    )
}

export default TimelinePage
