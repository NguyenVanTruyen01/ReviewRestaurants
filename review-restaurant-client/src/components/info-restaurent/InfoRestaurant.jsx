import React, {useEffect} from "react";
import "./InfoRestaurant.scss"
import image from "../../assets/images/resources/profile-image.jpg"
import { AspectRatio } from '@mantine/core';
import { Rating, Button } from '@mantine/core';

const InfoRestaurant = ()=>{

    useEffect(()=>{
        const root = document.querySelector(".slider");
        const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
        const marqueeContent = document.querySelector("ul.marquee-content");

        root.style.setProperty("--marquee-elements", marqueeContent.children.length);

        for(let i=0; i<marqueeElementsDisplayed; i++) {
            marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
        }
    })

    return (
        <>
            <div className="restaurant-in4">

                <div className="introduction">
                    <div className="introduction-content">
                        <div className="title"> Giới thiệu</div>
                        <span className="introduction-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </span>
                    </div>

                    <div className="image-grid">
                        <img className="image-grid-col-2 image-grid-row-2" src={image}
                             alt="architecture"/>
                        <img src={image} alt="architecture"/>
                        <img src={image} alt="architecture"/>
                        <img src={image} alt="architecture"/>
                        <img src={image} alt="architecture"/>
                    </div>

                </div>

                <div className="slider">
                    <div className="marquee">
                        <ul className="marquee-content">
                            <li><i className="fab fa-github"></i></li>
                            <li><i className="fab fa-codepen"></i></li>
                            <li><i className="fab fa-free-code-camp"></i></li>
                            <li><i className="fab fa-dev"></i></li>
                            {/*<li><i className="fab fa-react"></i></li>*/}
                            {/*<li><i className="fab fa-vuejs"></i></li>*/}
                            {/*<li><i className="fab fa-angular"></i></li>*/}
                            {/*<li><i className="fab fa-node"></i></li>*/}
                            {/*<li><i className="fab fa-wordpress"></i></li>*/}
                            {/*<li><i className="fab fa-aws"></i></li>*/}
                            {/*<li><i className="fab fa-docker"></i></li>*/}
                            {/*<li><i className="fab fa-android"></i></li>*/}
                        </ul>
                    </div>
                </div>

                <div className="info-component">

                    <div className="rating-detail i4-cart">
                        <div className="title">Đánh giá</div>
                        <Rating size="xl" className= "rating" defaultValue={3} />
                        <div className="count-report">
                            <div className="item">
                                <i className="fas fa-flag"></i>
                            </div>
                            <span>2 đánh giá</span>

                        </div>

                        <div className="title">Phù hợp</div>
                        <div className="character">
                            <span  className="character-item">Sống ảo</span>
                            <span  className="character-item">Hẹn hò</span>
                            <span  className="character-item">Làm việc</span>
                            <span  className="character-item">Đọc sách</span>
                            <span  className="character-item">Chill</span>
                        </div>

                    </div>

                    <div className="info-detail i4-cart">
                        <div className="title">Thông tin chi tiết</div>
                        <div className="price">
                            <div className="item">
                                <i className="fas fa-dollar-sign"></i>
                            </div>
                            <span>30.000đ - 60.000đ</span>
                        </div>
                        <div className="time">
                            <div className="item">
                                <i className="far fa-clock"></i>
                            </div>

                            <span>07:00 - 23:00</span>
                        </div>

                        <div className="telephone">
                            <div className="item">
                                <i className="fas fa-phone-alt"></i>
                            </div>

                            <span>0777360973</span>
                        </div>

                        <div className="facebook">
                            <div className="item">
                                <i className="fab fa-facebook-f"></i>
                            </div>
                            <span>0777360973</span>
                        </div>

                        <div className="instagram">
                            <div className="item">
                                <i className="fab fa-instagram"></i>
                            </div>
                            <span>0777360973</span>
                        </div>

                    </div>

                    <div className="address-detail i4-cart">
                        <div className="title">Địa chỉ cụ thể</div>
                        <AspectRatio ratio={16 / 9}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3063874233135!2d-74.04668908358428!3d40.68924937933441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sru!4v1644262070010!5m2!1sen!2sru"
                                title="Google map"
                                frameBorder="0"
                            />
                        </AspectRatio>
                    </div>

                </div>

            </div>


        </>
    )
}

export default InfoRestaurant