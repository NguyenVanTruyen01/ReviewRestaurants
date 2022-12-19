import React, {useCallback, useEffect, useState} from "react";
import {Modal, Rating, SimpleGrid, Textarea, useMantineTheme,Tooltip } from "@mantine/core";
import {useDispatch, useSelector} from "react-redux";
import {createPost} from "../../redux/requestAPI/postRequests";
import {getDataAPI} from "../../utils/fetchData";

import { Input } from '@mantine/core';
import { IconSearch,IconX } from '@tabler/icons';
import { debounce } from "lodash"
import "./PostReviews.scss"

const PostReviews = ({openModal,setOpenModal})=>{

    const [key, setKey] = useState('');
    const [visible, setVisible] = useState(false);
    const [searchUsers, setSearchUsers] = useState([]);

    const [restaurant,setRestaurant] = useState(null)

    const openDropdown = ()=> {
        setVisible(true);
    }

    function fetchDropdownOptions(key) {
        if (key) {
            getDataAPI(`users/search?key=${key}`)
                .then((res) => setSearchUsers(res.data.users.filter((res => res.role === "RESTAURANT" ))))
                .catch((err) => setSearchUsers([]));
        } else {
            setSearchUsers([])
        }
    }

    const debounceDropDown = useCallback(debounce((nextValue) => fetchDropdownOptions(nextValue), 1000), [])

    function handleInputOnchange(e) {
        const { value } = e.target;
        setKey(value);
        debounceDropDown(value);
    }



    //=======================================================

    const theme = useMantineTheme();

    const dispatch = useDispatch();

    const {currentUser, access_token} = useSelector(state => state.auth?.login);

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
        const media =  await createPost( currentUser._id,restaurant._id, rating, content,images,dispatch, access_token);
        setOpenModal(!openModal)
    }


    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            size={"50%"}
            opened={openModal}
            onClose={() => setOpenModal(!openModal)}
            title="Viết đánh giá"
        >

            <div className="header-modal">
                <img src= {currentUser ? currentUser?.avatar:
                    "https://res.cloudinary.com/dehtpa6ba/image/upload/v1668596070/review_restaurants/album1_spet5e.jpg"
                }
                />
                <span>{currentUser?.userName}</span>
            </div>

            <div className="content-modal">

                <div className="list-restaurant">
                      <span style={{fontWeight: "bold", fontSize: "18px"}}
                      >Địa điểm
                         <Input
                             value={key}
                             icon={<IconSearch size={18}
                                               style={{ cursor:"pointer", opacity: 0.5}}
                             />}
                             placeholder="Tìm kiếm địa điểm"
                             onClick={openDropdown}
                             onChange={(e)=>handleInputOnchange(e)}
                             rightSection={
                                 <Tooltip label="Xóa tìm kiếm"
                                          onClick={()=>{
                                              setKey("");
                                              setVisible(false)
                                              setSearchUsers([])
                                              setRestaurant(null)
                                          }}
                                          position="top-end" withArrow>
                                     <div>
                                         <IconX size={18} style={{ cursor:"pointer", opacity: 0.5 }} />
                                     </div>
                                 </Tooltip>

                             }
                         />

                    </span>

                    {
                        restaurant &&
                        <div className='show-restaurant'>
                            <img src= {restaurant.role === "RESTAURANT" ?
                                restaurant.infoRestaurant.images[0].url : restaurant.avatar
                            }
                                 alt=""/>

                            <div className="in4-restaurant">
                                <div className="name-restaurant">{restaurant.userName}</div>

                                <small className= "address-restaurant">
                                    {restaurant.address}
                                </small>
                            </div>

                        </div>
                    }


                    {
                        visible &&
                        <div className="users">

                            {searchUsers.length > 0 ?
                                searchUsers.map((user) => {
                                    return (
                                        <div className='restaurant-card'
                                             onClick= {()=>{
                                                 setVisible(false)
                                                 setKey(user.userName)
                                                 setRestaurant(user)
                                             }}
                                        >
                                            <img src= { user.role === "RESTAURANT" &&
                                                user.infoRestaurant.images.length > 0 ? user.infoRestaurant.images[0].url  : user.avatar
                                            }
                                                 alt=""/>

                                            <div className="in4-restaurant">
                                                <div className="name-restaurant">{user.userName}</div>

                                                <small className= "address-restaurant">
                                                    {user.address}
                                                </small>
                                            </div>

                                        </div>)
                                }) :
                                <div>Không tìm thấy địa điểm</div>
                            }

                        </div>
                    }


                </div>

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
    )
}
export default PostReviews