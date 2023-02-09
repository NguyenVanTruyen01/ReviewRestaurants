import React, {useEffect, useState} from "react";
import "./InfoRestaurant.scss"
import image from "../../assets/images/resources/profile-image.jpg"
import { AspectRatio } from '@mantine/core';
import { Rating } from '@mantine/core';
import {useSelector} from "react-redux";
import UpdateRestaurantModal from "../../modals/update_restaurant/UpdateRestaurantModal";
import { Image } from 'antd';
import SliderImages from "../slider-images/SliderImages";

const InfoRestaurant = ({user,posts})=>{

    const [visible, setVisible] = useState(false);

    const {currentUser,access_token} = useSelector(state => state.auth?.login)

    const [openModal,setOpenModal] =  useState(false);

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
                        <div className="update-in4Res">
                            <div className="title"> Giới thiệu</div>
                            {
                                currentUser && currentUser._id === user._id &&
                                <i className="fal fa-edit"
                                   onClick={()=>setOpenModal(!openModal)}
                                ></i>
                            }
                        </div>

                        {
                            currentUser &&
                            <UpdateRestaurantModal
                                openModal = {openModal}
                                setOpenModal = {setOpenModal}
                                currentUser = {currentUser}
                            />
                        }

                        <span className="introduction-text">
                            {user.infoRestaurant?.introduce}
                        </span>
                    </div>

                    <div className="image-grid">
                        <Image.PreviewGroup>
                        {

                            user.infoRestaurant.images.slice(0, 5).map((image,index) =>{
                                if(index === 0){
                                    return (
                                            <div className="image-grid-col-2 image-grid-row-2">
                                                <Image
                                                       key={index}
                                                       src={user.infoRestaurant.images[0].url}
                                                       alt="architecture"/>
                                            </div>
                                        )


                                }
                                return   <Image
                                            src={user.infoRestaurant.images[index].url}
                                            key={index}
                                            alt="architecture"/>
                            })
                        }
                        </Image.PreviewGroup>

                    </div>

                </div>

                <div className="slider">
                    <div className="marquee">
                        <ul className="marquee-content">

                            {
                                user.infoRestaurant.utilities.map((uti) =>{
                                    if(uti===1){
                                      return <li>
                                          <i className="fas fa-wifi"></i>
                                          <span>Wifi miễn phí</span>
                                      </li>
                                    }
                                    if(uti===2){
                                        return <li>
                                            <i className="fas fa-car"></i>
                                            <span>Giữ xe miễn phí</span>
                                        </li>
                                    }

                                    if(uti===3){
                                        return <li>
                                            <i className="fas fa-paw"></i>
                                            <span>Mang thú cưng</span>
                                        </li>
                                    }
                                    if(uti===4){
                                        return <li>
                                            <i className="fas fa-credit-card"></i>
                                            <span>Thanh toán bằng thẻ</span>
                                        </li>
                                    }
                                    if(uti===5){
                                        return <li>
                                            <i className="fas fa-wind"></i>
                                            <span>Điều hòa</span>
                                        </li>
                                    }
                                    if(uti===6){
                                        return <li>
                                            <i className="fas fa-cloud-sun"></i>
                                            <span>Bàn ngoài trời</span>
                                        </li>
                                    }
                                    if(uti===7){
                                        return <li>
                                            <i className="fas fa-baby"></i>
                                            <span>Chỗ chơi trẻ em</span>
                                        </li>
                                    }
                                    if(uti===8){
                                        return <li>
                                            <i className="fas fa-smoking"></i>
                                            <span>Khu vực hút thuốc</span>
                                        </li>
                                    }
                                    if(uti===9){
                                        return <li>
                                            <i className="fas fa-futbol"></i>
                                            <span>Chiếu bóng đá</span>
                                        </li>
                                    }
                                    if(uti===10){
                                        return <li>
                                            <i className="fas fa-truck"></i>
                                            <span>Giao hàng</span>
                                        </li>
                                    }
                                    if(uti===11){
                                        return <li>
                                            <i className="fas fa-hamburger"></i>
                                            <span>Mang đồ ăn ngoài</span>
                                        </li>
                                    }
                                    if(uti===12){
                                        return <li>
                                            <i className="fas fa-cookie-bite"></i>
                                            <span>Ăn vặt</span>
                                        </li>
                                    }

                                })
                            }

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
                        <Rating size="xl" className= "rating"
                                readOnly
                                defaultValue={user.rating.reduce((a, b) => a + b, 0) / user.rating.length} />
                        <div className="count-report">
                            <div className="item">
                                <i className="fas fa-flag"></i>
                            </div>

                                <span>{posts.filter((post) => post.idRestaurant._id === user._id).length} đánh giá</span>

                            </div>

                        <div className="title">Phù hợp</div>
                        <div className="character">
                            {
                                user.infoRestaurant.characteristics.map((character)=>{
                                    if(character === 1){
                                       return <span  className="character-item">Sống ảo</span>
                                    }
                                    if(character === 2){
                                        return  <span  className="character-item">Hẹn hò</span>
                                    }
                                    if(character === 3){
                                        return <span  className="character-item">Làm việc</span>
                                    }
                                    if(character === 4){
                                        return <span  className="character-item">Đọc sách</span>
                                    }
                                    if(character === 5){
                                        return <span  className="character-item">Chill</span>
                                    }
                                })
                            }


                        </div>

                    </div>

                    <div className="info-detail i4-cart">
                        <div className="title">Thông tin chi tiết</div>
                        <div className="price">
                            <div className="item">
                                <i className="fas fa-dollar-sign"></i>
                            </div>
                            <div className="menu">
                                <span>{user.infoRestaurant.minPrice.toLocaleString('de-DE')}đ - {user.infoRestaurant.maxPrice.toLocaleString('de-DE')}đ </span>
                                <a  onClick= {()=>setVisible(true)}>Xem menu</a>
                                <SliderImages
                                    images={user.infoRestaurant?.menu}
                                    visible = {visible}
                                    setVisible = {setVisible}
                                />
                            </div>
                        </div>
                        <div className="time">
                            <div className="item">
                                <i className="far fa-clock"></i>
                            </div>

                            <span>{user.infoRestaurant.openTime} - {user.infoRestaurant.closeTime}</span>
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
                            <a href={user.infoRestaurant?.facebook}
                               target="_blank"
                               style={{textOverflow: "ellipsis"}}
                            >{user.userName}</a>
                        </div>

                        <div className="instagram">
                            <div className="item">
                                <i className="fab fa-instagram"></i>
                            </div>
                            <a href={user.infoRestaurant?.instagram}
                               target="_blank"
                            >{user.userName}</a>
                        </div>

                    </div>

                    <div className="address-detail i4-cart">
                        <div className="title">Địa chỉ cụ thể</div>
                        <AspectRatio ratio={16 / 9}>

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5271385827245!2d106.690822614317!3d10.770879462242485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3c316fda3b%3A0xa20bae2de1f1b39f!2zMTMgxJAuIE5ndXnhu4VuIFRyw6NpLCBQaMaw4budbmcgUGjhuqFtIE5nxakgTMOjbywgUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1670491133607!5m2!1svi!2s"
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