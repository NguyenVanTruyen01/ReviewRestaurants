import React from 'react'
import Slider from 'react-slick';

import chillImage from "../../assets/images/home/category/chill.jpg"
import readBook from "../../assets/images/home/category/read-book.jpg"
import work from "../../assets/images/home/category/work.jpg"
import beautiful from "../../assets/images/home/category/beautiful.jpg"
import dating from "../../assets/images/home/category/dating.jpg"

import q1 from "../../assets/images/home/near/1.jpg"
import q2 from "../../assets/images/home/near/2.jpg"
import q3 from "../../assets/images/home/near/3.jpg"
import q4 from "../../assets/images/home/near/4.jpg"
import q5 from "../../assets/images/home/near/5.jpg"
import q6 from "../../assets/images/home/near/6.jpg"
import q7 from "../../assets/images/home/near/7.jpg"
import q8 from "../../assets/images/home/near/8.jpg"
import q9 from "../../assets/images/home/near/9.jpg"
import q10 from "../../assets/images/home/near/10.jpg"
import thuDuc from "../../assets/images/home/near/thu-duc.jpg"
import binhThanh from "../../assets/images/home/near/binh-thanh.jpg"
import './near.css';
import { useNavigate } from 'react-router-dom';



const Near = () => {
    function NextArrow(props) {
        const { className, style, onClick } = props;
        return <div className={className} style={{ ...style, display: 'block', }} onClick={onClick}></div>;
    }

    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return <div className={className} style={{ ...style, display: 'block', }} onClick={onClick} />;
    }

    const navigate = useNavigate();

    const searchParams = new URLSearchParams();

    const handleViewByCategory = (e, idRegion) => {
        e.preventDefault();
        searchParams.set('region', idRegion + "");
        navigate('/search?' + searchParams);
    };

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: false,
        // centerPadding: '0px',
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <div className="near-item">
                        <div className="near-item">
                            <img src={q1} alt="" className="w-100" />
                            <div className="feat-optz">
                                <h2 className="text-capitalize">
                                    <a href="" title onClick={(e) => handleViewByCategory(e, 'Qu???n 1')}>
                                        Qu???n 1
                                    </a>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="near-item">
                        <div className="near-item">
                            <img src={q2} alt="" className="w-100" />
                            <div className="feat-optz">
                                <h2 className="text-capitalize">
                                    <a href="restaurant-details.html" title onClick={(e) => handleViewByCategory(e, 'Qu???n 2')}>
                                        Qu???n 2
                                    </a>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="near-item">
                        <div className="near-item">
                            <img src={q3} alt="" className="w-100" />
                            <div className="feat-optz">
                                <h2 className="text-capitalize">
                                    <a href="" title onClick={(e) => handleViewByCategory(e, 'Qu???n 3')}>
                                        Qu???n 3
                                    </a>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="near-item">
                        <div className="near-item">
                            <img src={q4} alt="" className="w-100" />
                            <div className="feat-optz">
                                <h2 className="text-capitalize">
                                    <a href="" title onClick={(e) => handleViewByCategory(e, 'Qu???n 4')}>
                                        Qu???n 4
                                    </a>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="near-item">
                        <div className="near-item">
                            <img src={q5} alt="" className="w-100" />
                            <div className="feat-optz">
                                <h2 className="text-capitalize">
                                    <a href="" title onClick={(e) => handleViewByCategory(e, 'Qu???n 5')}>
                                        Qu???n 5
                                    </a>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="near-item">
                        <div className="near-item">
                            <img src={q6} alt="" className="w-100" />
                            <div className="feat-optz">
                                <h2 className="text-capitalize">
                                    <a href="" title onClick={(e) => handleViewByCategory(e, 'Qu???n 6')}>
                                        Qu???n 6
                                    </a>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="near-item">
                        <div className="near-item">
                            <img src={q7} alt="" className="w-100" />
                            <div className="feat-optz">
                                <h2 className="text-capitalize">
                                    <a href="" title onClick={(e) => handleViewByCategory(e, 'Qu???n 7')}>
                                        Qu???n 7
                                    </a>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="near-item">
                        <div className="near-item">
                            <img src={q8} alt="" className="w-100" />
                            <div className="feat-optz">
                                <h2 className="text-capitalize">
                                    <a href="" title onClick={(e) => handleViewByCategory(e, 'Qu???n 8')}>
                                        Qu???n 8
                                    </a>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="near-item">
                        <div className="near-item">
                            <img src={q9} alt="" className="w-100" />
                            <div className="feat-optz">
                                <h2 className="text-capitalize">
                                    <a href="" title onClick={(e) => handleViewByCategory(e, 'Qu???n 9')}>
                                        Qu???n 9
                                    </a>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="near-item">
                        <div className="near-item">
                            <img src={q10} alt="" className="w-100" />
                            <div className="feat-optz">
                                <h2 className="text-capitalize">
                                    <a href="" title onClick={(e) => handleViewByCategory(e, 'Qu???n 10')}>
                                        Qu???n 10
                                    </a>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="near-item">
                        <div className="near-item">
                            <img src={thuDuc} alt="" className="w-100" />
                            <div className="feat-optz">
                                <h2 className="text-capitalize">
                                    <a href="" title onClick={(e) => handleViewByCategory(e, 'TP Th??? ?????c')}>
                                        TP Th??? ?????c
                                    </a>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Near