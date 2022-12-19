import React, {useState, useRef, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { Modal, useMantineTheme ,Textarea ,Button, SimpleGrid } from '@mantine/core';
import "./PostShareModal.scss"
import {createPost} from "../../redux/requestAPI/postRequests"
import { Rating } from '@mantine/core';

const PostShareModal = ({user, listPost})=>{
    const theme = useMantineTheme();

    const dispatch = useDispatch();

    const {currentUser, access_token} = useSelector(state => state.auth?.login);


    const [openModal,setOpenModal] =  useState(false);


    const [rating,setRating] = useState(0);

    const [content,setContent] = useState("");

    const [images,setImages] = useState([]);

    const deleteImages = (index) =>{
       const newArr = [...images]
        newArr.splice(index,1);
       setImages(newArr)
    }

    const handleOnChangeImage = (e)=>{
        const files = [...e.target.files]
        console.log(...e.target.files)

        let err = "";
        let newImages = [];

        files.forEach((file)=>{
            if(!file) return err = "File does not exist"
            if(file.type !== "image/jpeg" && file.type !== "image/png" && file.type !== "image/jpg")
                return err = "Image format is incorrect"
            return newImages.push(file)
        })

        if(err){
            console.log(err)
        }
        else

            setImages([...images, ...newImages]);

    }

    const handleSharePost = async ()=>{
       const media =  await createPost(listPost, currentUser._id,user._id, rating, content,images,dispatch, access_token);
       setOpenModal(!openModal)
    }

    return (
        <div className="PostShare-Con">
            <div className="PostShare">
                <div className="postshare-top" onClick={()=>setOpenModal(!openModal)}>
                    <img src={currentUser ? currentUser?.avatar :
                        "https://res.cloudinary.com/dehtpa6ba/image/upload/v1668596070/review_restaurants/album1_spet5e.jpg"
                    } />
                        <div>
                        <button >
                            {currentUser.userName}
                            {
                                currentUser._id !== user._id ?
                                    `, Hãy đánh giá về địa điểm này?` :
                                    `, Bạn đang nghĩ gì?`

                            }
                        </button>

                        <div className="attachments">
                            <ul>
                                <li>
                            <span className="add-loc">
                                <i className="fas fa-map-marker-alt" style={{color:"#dc3545"}}></i>
                            </span>
                                </li>
                                <li>
                                    <i className="fa fa-music"></i>
                                </li>
                                <li>
                                    <i className="fa fa-image"></i>
                                </li>
                                <li>
                                    <i className="fas fa-video"></i>
                                </li>
                                <li>
                                    <i className="fa fa-camera"></i>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <button className="btn-post" onClick={()=>setOpenModal(!openModal)}>Đăng</button>

            </div>

            <div className="banner">
                <div className="banner-img"><img
                    src="https://ik.imagekit.io/reviewcafe/Online_Review-cuate_wG_WzURJF.svg"/>
                </div>
                {
                    currentUser._id !== user._id ?
                        <div className="banner-content">
                            <span className="title">Bạn đã từng đến đây?</span>
                            <span>Chia sẻ trải nghiệm và cảm nhận của bản thân cho mọi người cùng biết
                        <i className="fas fa-heart" style={{color:"red"}}></i></span>
                            <span>Những review chất lượng sẽ được xuất hiện ở bảng tin đấy!</span>
                        </div>
                        :
                        <div className="banner-content">
                            <span className="title">Hôm nay bạn đã đi đâu?</span>
                            <span>Chia sẻ trải nghiệm và cảm nhận của bản thân về địa điểm bạn tới cho mọi người cùng biết
                        <i className="fas fa-heart" style={{color:"red"}}></i></span>
                            <span>Những review chất lượng sẽ được xuất hiện ở bảng tin đấy!</span>
                        </div>
                }

            </div>

            <Modal
                overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
                overlayOpacity={0.55}
                overlayBlur={3}
                size={"50%"}
                closeOnClickOutside={true}
                opened={openModal}
                onClose={() => setOpenModal(!openModal)}
                title="Tạo bài viết"
            >

                <div className="header-modal">
                    <img src= {currentUser ? currentUser?.avatar:
                        "https://res.cloudinary.com/dehtpa6ba/image/upload/v1668596070/review_restaurants/album1_spet5e.jpg"
                    }
                    />
                    <span>{currentUser.userName}</span>
                </div>

                <div className="content-modal">

                    <span style={{fontWeight: "bold", fontSize: "18px"}}
                    >Đánh giá của bạn về {user.userName}</span>

                    <div>
                        <span>Xếp hạng</span>
                        <Rating size="lg" defaultValue={0} onChange={setRating}/>
                    </div>

                    <div>
                        <span>Đánh giá </span>
                        <Textarea
                            placeholder="Bạn đang nghĩ gì?"
                            withAsterisk
                            onChange={(e)=>setContent(e.target.value)}
                        />
                    </div>


                </div>

                <SimpleGrid
                    cols={4}
                    breakpoints={[
                        { maxWidth: 980, cols: 3, spacing: 'md' },
                        { maxWidth: 755, cols: 2, spacing: 'sm' },
                        { maxWidth: 600, cols: 1, spacing: 'sm' },
                    ]}
                    className="show-img"
                >
                    {
                        images.map((img,index) => {
                            return (
                                <div key={index}
                                     className="grid-img"
                                     id="file_img"
                                     style={{width: "128px", height: "128px"}} >

                                    <img src={URL.createObjectURL(img)}
                                         alt={"images"}
                                         style={{objectFit: "cover",width: "128px", height: "128px"}}
                                    />
                                    <span
                                        className="delete-img"
                                        onClick={()=>deleteImages(index)}
                                    ><i className="fas fa-times"></i></span>
                                </div>
                            )

                        })
                    }
                </SimpleGrid>


                <div className="input_image">
                    <label>
                        <i className="fa fa-image"></i>
                        <input type="file" name = "file" id={"file"}
                               multiple accept="image/*"
                               onChange={handleOnChangeImage}/>
                    </label>

                </div>


                <div className= "btn-post"
                     onClick={handleSharePost}
                > Đăng </div>

            </Modal>
        </div>

        )
    }

export default PostShareModal


// //Share man hinh
// const handleStream = ()=>{
//     setStream(true);
//     if(navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia){
//         navigator.mediaDevices.getDisplayMedia({video: true})
//             .then(mediaStream =>{
//                 videoRef.current.srcObject = mediaStream
//                 videoRef.current.play()
//                 const track = mediaStream.getTracks();
//                 setTracks(track[0]);
//             })
//             .catch((err) => console.log(err))
//     }
// }