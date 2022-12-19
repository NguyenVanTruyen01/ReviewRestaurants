import React, {useEffect, useState} from "react";
import ListPost from "../../components/listpost/ListPost"
import {useSelector} from "react-redux";
import Post from "../../components/post/Post";
import Header from "../../components/main/Header";
import './ExplorePage.scss'
import axios from "axios";
import {useNavigate} from "react-router-dom";

const ExplorePage = () =>{

    const navigate = useNavigate()

    const {listPost} = useSelector(state => state.post)
    const [restaurants,setRestaurant] = useState([])

    function getMultipleRandom(arr, num) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());

        return shuffled.slice(0, num);
    }

    useEffect(()=>{

        const getListRestaurant = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/users`);
                const restaurants  = getMultipleRandom(res.data.users,5)
                console.log(restaurants)
                setRestaurant(restaurants);

            } catch (err) {
                console.log(err);
            }
        };
        getListRestaurant();

    }, [])

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

                    {
                        restaurants && restaurants.length > 0 ?
                            <div className="list-restaurants">

                                {
                                    restaurants.map((res,index) => {
                                        return(
                                            <div className='restaurant-card' key={index}
                                                 onClick={()=> navigate(`/profile/${res._id}`)}
                                            >
                                                <div className="image">
                                                    <img src= { res.role === "RESTAURANT" && res.infoRestaurant.images.length > 0 ?
                                                        res.infoRestaurant.images[0]?.url : res.avatar}
                                                         alt=""/>
                                                </div>


                                                <div className="in4-restaurant">
                                                    <div className="name-restaurant"> {res.userName}</div>

                                                    <small className= "address-restaurant">
                                                        {res.address}
                                                    </small>
                                                </div>
                                            </div>
                                        )
                                    })


                                }

                            </div>
                            :
                            <div>Chưa có địa điểm phù hợp</div>
                    }


                </div>
            </div>

        </div>

    )
}

export default ExplorePage
