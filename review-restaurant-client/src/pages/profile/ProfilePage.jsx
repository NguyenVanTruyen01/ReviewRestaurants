import React, {useEffect, useState} from "react";
import PostShareModal from "../../modals/postshare/PostShareModal";
import ListPost from "../../components/listpost/ListPost";
import "./ProfilePage.scss"
import {Modal,useMantineTheme, Rating, SimpleGrid, Textarea} from '@mantine/core';
import InfoRestaurant from "../../components/info-restaurent/InfoRestaurant";
import {useDispatch, useSelector} from "react-redux";
import Header from "../../components/main/Header";
import {changeCoverPicture, changeAvatar} from "../../redux/requestAPI/userRequests"
import axios from "axios";
import {useParams} from "react-router-dom";
import LoadingPage from "../loading/LoadingPage";

const ProfilePage = ()=>{

    const {id} = useParams()
    const [user, setUser] = useState(undefined);

    //------------------------------------------------

    const theme = useMantineTheme();

    const {currentUser,access_token} = useSelector(state => state.auth?.login)
    // const {user} = useSelector(state => state.user )
    const {listPost} = useSelector(state => state.post)

    const dispatch = useDispatch();

    // Đóng mở modal thay đổi avatar
    const [openModalChangeAvatar, setOpenModalChangeAvatar] = useState(false)

    //Lưu ảnh bìa khi thay đổi
    const [images,setImages] = useState([]);

    //Lưu avatar khi thay đổi
    const [imagesAvatar,setImagesAvatar] = useState([]);

    const [onChangeCover,setOnChangeCover] = useState(false)

    const [onChangeAvatar,setOnChangeAvatar] = useState(false)

    const handleOnChangeImage = (e)=>{
        e.preventDefault()
        const files = [...e.target.files]
        console.log(...e.target.files)

        let err = "";

        if(!files[0]) return err = "File does not exist"
        if(files[0].type !== "image/jpeg" && files[0].type !== "image/png" && files[0].type !== "image/jpg")
            return err = "Image format is incorrect"

        if(err){
            console.log(err)
        }
        else{
            setImages(files);
            //Hiển thị modal submit ảnh bìa
            setOnChangeCover(true)
        }
        e.target.value = null;

    }

    const handleSummitCoverPicture = async ()=>{

        await changeCoverPicture(currentUser, user, images, dispatch, access_token)

        //Đóng modal summit ảnh bài khi đã lưu ảnh bìa vừa thay đổi
        setOnChangeCover(false)
        setImages([])
    }

    const handleOnChangeAvatar = (e)=>{
        e.preventDefault()
        const files = [...e.target.files]

        let err = "";

        if(!files[0]) return err = "File does not exist"
        if(files[0].type !== "image/jpeg" && files[0].type !== "image/png" && files[0].type !== "image/jpg")
            return err = "Image format is incorrect"

        if(err){
            console.log(err)
        }
        else{
            setImagesAvatar(files);
            setOnChangeAvatar(true)
        }
        e.target.value = null;

    }

    const handleSummitAvatar= async ()=>{

        await changeAvatar(currentUser, user, imagesAvatar, dispatch, access_token)

        setOnChangeAvatar(false)
        setOpenModalChangeAvatar(false)
        setImagesAvatar([])
    }

    useEffect(() => {
        const getListReataurant = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/users/${id}`);
                setUser(res.data.user);
            } catch (err) {
                console.log(err);
            }
        };
        getListReataurant();
    }, [dispatch,onChangeAvatar,onChangeCover]);

    return(
        <>
            {
                user ?
                <div className="ProfilePage">

                    <Header></Header>

                    <div className="profile-container">

                        {
                            onChangeCover &&
                            <div className= "change-coverPicture-modal">
                                <div className="content">
                                    Thay đổi ảnh bìa của bạn
                                </div>

                                <div className="group-btn">
                                    <button type="button"
                                            className="cancel"
                                            onClick={()=> {
                                                setOnChangeCover(false);
                                                setImages([])
                                            }}
                                    >Hủy</button>
                                    <button type="button"
                                            className="save"
                                            onClick={()=>handleSummitCoverPicture()}
                                    >Lưu thay đổi</button>
                                </div>
                            </div>
                        }

                        <div className="container" >

                            <div className="user-profile">

                                <figure>

                                    {
                                        currentUser._id === user._id &&
                                        <div className="edit-pp"
                                        >
                                            <label className="fileContainer" >
                                                <i className="fa fa-camera"></i>
                                                <input type="file"
                                                       onChange={handleOnChangeImage} />
                                            </label>
                                        </div>
                                    }


                                    <img className="cover-img"
                                         src={ onChangeCover ? URL.createObjectURL(images[0]) :
                                             user.coverPicture
                                             // || "https://res.cloudinary.com/dehtpa6ba/image/upload/v1668594732/review_restaurants/profile-image_u5v1gv.jpg"
                                         }
                                         alt=""/>

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
                                                 style={{background: "#ffffff"}}
                                                 src= {user.avatar }/>

                                            {
                                                currentUser._id ===  user._id ?
                                                    <div className="edit-dp"
                                                         onClick={()=>setOpenModalChangeAvatar(true)}
                                                    >
                                                        <label className="fileContainer">
                                                            <i className="fa fa-camera"></i>
                                                        </label>
                                                    </div> : ""
                                            }

                                            <Modal
                                                overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
                                                overlayOpacity={0.55}
                                                overlayBlur={3}
                                                size="lg"
                                                closeOnClickOutside={true}
                                                opened={openModalChangeAvatar}
                                                onClose={() => setOpenModalChangeAvatar(!openModalChangeAvatar)}
                                            >
                                                <div className="modal-changeAvatar">
                                                    <div className="title">
                                                        Thay đổi ảnh đại diện
                                                    </div>

                                                    <div className="author-changeAvatar">
                                                        <div className="profile-author-change">
                                                            <img className="avatar" alt="author"
                                                                 style={{background: "#ffffff"}}
                                                                 src= { onChangeAvatar ? URL.createObjectURL(imagesAvatar[0]) :
                                                                     user.avatar
                                                                 }/>

                                                            <div className="edit-dp"
                                                            >
                                                                <label className="fileContainer">
                                                                    <i className="fa fa-camera"></i>
                                                                    <input type="file"
                                                                           onChange={handleOnChangeAvatar}/>
                                                                </label>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div className= "group-action">
                                                        <div className="group-btn">
                                                            <button type="button"
                                                                    className="cancel"
                                                                    onClick={()=> {
                                                                        setOnChangeAvatar(false)
                                                                        setOpenModalChangeAvatar(false)
                                                                    }}

                                                            >Hủy</button>
                                                            <button type="button"
                                                                    className="save"
                                                                    onClick={()=>handleSummitAvatar()}
                                                            >Lưu thay đổi</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Modal>

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

                            {
                                user.role === "RESTAURANT" &&
                                <InfoRestaurant posts = {listPost}  user = {user} />
                            }

                            <ListPost posts = {listPost} user = {user}/>

                        </div>
                    </div>

                </div> : <LoadingPage/>
            }

        </>

    )
}

export default ProfilePage