import React, {useEffect, useState} from "react";
import {Image, Grid, SimpleGrid, Group,Avatar,Text, useMantineTheme } from '@mantine/core';
import './Post.scss'
import { Rating } from '@mantine/core';
import moment from "moment";
import {useSelector,useDispatch} from "react-redux";
import {likePost, removePost, unLikePost} from "../../redux/requestAPI/postRequests"

import Comments from "../comment/Comments";
import InputComment from "../comment/comment-input/InputComment";
import {Link} from "react-router-dom";

const PRIMARY_COL_HEIGHT = 300;
const Post = ({post})=>{

    const {currentUser} = useSelector(state => state.auth?.login)
    const listPost = useSelector(state => state.post?.listPost)

    const dispatch = useDispatch()

    const theme = useMantineTheme();
    const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

    const [isLike,setIsLike] = useState(false)
    const [loadLike,setLoadLike] = useState(false);
    const [showComment,setShowComment] = useState(false)

    useEffect(()=>{

        if(currentUser && post.likes.find(like => like._id === currentUser._id)){
            setIsLike(true)
        }else return;

    },[post.likes, currentUser?._id])

    const handleLike = async ()=>{
        if(currentUser) {

            if(loadLike) return;
            setIsLike(true)
            setLoadLike(true)
            await likePost(post,currentUser,dispatch)
            setLoadLike(false)

        }
        else return;
    }

    const handleUnLike = async ()=>{
        if(currentUser){

            if(loadLike) return;
            setIsLike(false)

            setLoadLike(true)
            await unLikePost(post,currentUser,dispatch)
            setLoadLike(false)

        }
        else return;
    }

    const handleRemovePost = async ()=>{
        if(currentUser)
            await removePost(post,currentUser,listPost,dispatch)
        else return
    }

    return(
        <>
            <div className="Post">

                {/*    ------------------Post Header----------------*/}

                <div className="HeaderPost">
                    <Group>
                        <Avatar
                            src={post.user.avatar}
                            radius="xl"
                            size={50}
                        />

                        <div style={{ flex: 1 }}>
                            <div style={{ display: "flex", alignItems:"center"}}>
                                <Link to={`/profile/${post.user._id}`} size="md" weight={600}>
                                    {post.user.userName}
                                </Link>
                                {
                                    post.user._id !== post.idRestaurant._id ?
                                        <>
                                            <i className="fas fa-caret-right" style={{marginLeft: "8px", marginRight : "8px"}}></i>
                                            <Link to={`/profile/${post.idRestaurant._id}`}  size="md" weight={500}>
                                                {post.idRestaurant.userName}
                                            </Link>
                                        </> : ""
                                }
                            </div>

                            <Text color="dimmed" size="xs">
                                {
                                    moment(post.createdAt).fromNow()
                                }
                            </Text>
                        </div>
                        {
                           currentUser && currentUser._id === post.user._id &&
                            <div>
                                {/*<div className="dropdown-item" >*/}
                                {/*    <i className="fal fa-edit"></i> Edit*/}
                                {/*</div>*/}
                                <div className="dropdown-item" onClick={()=>handleRemovePost()}>
                                    <i className="fas fa-trash-alt" style={{cursor:"pointer"}}></i>
                                </div>
                            </div>
                        }


                        <Rating defaultValue={+post.ratingRes} readOnly/>

                    </Group>
                </div>


                {/*    ------------------Post Content----------------*/}
                <div className="PostContent">
                    {/*    ------------------Content----------------*/}
                    <span size="md" >
                    {post.content}
                  </span>

                    {/*    ------------------Image----------------*/}
                    {
                        post.images.length > 0 ?
                            <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>

                                <Image
                                    height ={PRIMARY_COL_HEIGHT}
                                    radius="md"
                                    src= {post?.images[0].url}
                                    alt="Random unsplash image"
                                />
                                <Grid gutter="md">
                                    <Grid.Col>
                                        <Image
                                            height ={SECONDARY_COL_HEIGHT}
                                            radius="md"
                                            src= {post?.images[1].url}
                                            alt="Random unsplash image"
                                        />
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Image
                                            height ={SECONDARY_COL_HEIGHT}
                                            radius="md"
                                            src= {post?.images[2].url}
                                            alt="Random unsplash image"
                                        />
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Image
                                            height ={SECONDARY_COL_HEIGHT}
                                            radius="md"
                                            src={post?.images[3].url}
                                            alt="Random unsplash image"
                                        />
                                    </Grid.Col>
                                </Grid>
                            </SimpleGrid>
                            : ""
                    }


                    {/*    ------------------Post Footer----------------*/}
                    <div className="PostFooter">
                        <div className="action">
                            <div className= "action-like">
                              <span> {
                                  `${post.likes.length} thích`
                              }  </span>

                                {isLike ?
                                    <i className="fas fa-heart"
                                       onClick={()=>handleUnLike()}
                                       style={{color: "#fa6342"}}></i>
                                    :
                                    <i className="fal fa-heart"
                                       onClick={()=>handleLike()}
                                       style={{color: "#fa6342"}}></i>
                                }
                            </div>

                            <div className= "action-comment">
                                <span>{post.comments.length} bình luận</span>
                                <i className="fal fa-comment"
                                   onClick={()=>setShowComment(!showComment)}
                                   style={{color: "blue"}}></i>
                            </div>

                        </div>

                        <div className= "user-liked">
                            <Avatar.Group spacing="md">
                                <Avatar size="md"  src="https://res.cloudinary.com/dehtpa6ba/image/upload/v1668596070/review_restaurants/album1_spet5e.jpg" radius="xl" />
                                <Avatar size="md"  src="https://res.cloudinary.com/dehtpa6ba/image/upload/v1668596070/review_restaurants/album1_spet5e.jpg" radius="xl" />
                                <Avatar size="md"  src="https://res.cloudinary.com/dehtpa6ba/image/upload/v1668596070/review_restaurants/album1_spet5e.jpg" radius="xl" />
                                <Avatar size="md" radius="xl">+5</Avatar>
                            </Avatar.Group>
                            <span>Bạn và 5 người khác đã thích</span>
                        </div>


                    </div>

                    {
                        showComment &&
                           <>
                               <Comments post = {post}></Comments>
                               {
                                   currentUser &&
                                   <InputComment post={post}></InputComment>
                               }
                           </>
                    }

                </div>

            </div>
        </>
    )
}

export default Post















// import React, {useEffect, useState} from "react";
// import {Image, Grid, SimpleGrid, Group,Avatar,Text, useMantineTheme } from '@mantine/core';
// import './Post.scss'
// import { Rating } from '@mantine/core';
// import moment from "moment";
// import {useSelector,useDispatch} from "react-redux";
// import {likePost, unLikePost} from "../../redux/requestAPI/postRequests"
//
// import Comments from "../comment/Comments";
// import InputComment from "../comment/comment-input/InputComment";
//
// const PRIMARY_COL_HEIGHT = 300;
// const Post = ({post})=>{
//
//     const theme = useMantineTheme();
//     const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;
//
//     const [isLike,setIsLike] = useState(false)
//     const [loadLike,setLoadLike] = useState(false)
//
//     const {currentUser} = useSelector(state => state.auth?.login)
//
//     const dispatch = useDispatch();
//
//     useEffect(()=>{
//
//         if(currentUser && post.likes.find(like => like === currentUser._id)){
//             setIsLike(true)
//         }else return;
//
//     },[ post.likes, currentUser._id])
//
//     const handleLike = async ()=>{
//         if(currentUser) {
//
//             if(loadLike) return;
//             setIsLike(true)
//             setLoadLike(true)
//             await likePost(post,currentUser._id,dispatch)
//             setLoadLike(false)
//
//         }
//         else return;
//     }
//
//     const handleUnLike = async ()=>{
//         if(currentUser){
//
//             if(loadLike) return;
//             setIsLike(false)
//
//             setLoadLike(true)
//             await unLikePost(post,currentUser._id,dispatch)
//             setLoadLike(false)
//
//         }
//         else return;
//     }
//
//     return(
//       <>
//           <div className="Post">
//
//               {/*    ------------------Post Header----------------*/}
//
//               <div className="HeaderPost">
//                   <Group>
//                       <Avatar
//                           src={"https://res.cloudinary.com/dehtpa6ba/image/upload/v1668596070/review_restaurants/album1_spet5e.jpg"}
//                           radius="xl"
//                           size={50}
//                       />
//
//                       <div style={{ flex: 1 }}>
//                           <div style={{ display: "flex", alignItems:"center"}}>
//                               <Text size="md" weight={500}>
//                                   {post.user.userName}
//                               </Text>
//                               {
//                                   post.user._id !== post.idRestaurant._id ?
//                                       <>
//                                           <i className="fas fa-caret-right" style={{marginLeft: "8px", marginRight : "8px"}}></i>
//                                           <Text size="md" weight={500}>
//                                               {post.idRestaurant.userName}
//                                           </Text>
//                                       </> : ""
//                               }
//                           </div>
//
//                           <Text color="dimmed" size="xs">
//                               {
//                                   moment(post.createdAt).fromNow()
//                               }
//                           </Text>
//                       </div>
//
//                       <Rating defaultValue={+post.ratingRes} readOnly/>
//
//                   </Group>
//               </div>
//
//
//               {/*    ------------------Post Content----------------*/}
//               <div className="PostContent">
//                   {/*    ------------------Content----------------*/}
//                   <span size="md" >
//                     {post.content}
//                   </span>
//
//                   {/*    ------------------Image----------------*/}
//                   {
//                       post.images.length > 0 ?
//                           <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
//
//                               <Image
//                                   height ={PRIMARY_COL_HEIGHT}
//                                   radius="md"
//                                   src= {post?.images[0].url}
//                                   alt="Random unsplash image"
//                               />
//                               <Grid gutter="md">
//                                   <Grid.Col>
//                                       <Image
//                                           height ={SECONDARY_COL_HEIGHT}
//                                           radius="md"
//                                           src= {post?.images[1].url}
//                                           alt="Random unsplash image"
//                                       />
//                                   </Grid.Col>
//                                   <Grid.Col span={6}>
//                                       <Image
//                                           height ={SECONDARY_COL_HEIGHT}
//                                           radius="md"
//                                           src= {post?.images[2].url}
//                                           alt="Random unsplash image"
//                                       />
//                                   </Grid.Col>
//                                   <Grid.Col span={6}>
//                                       <Image
//                                           height ={SECONDARY_COL_HEIGHT}
//                                           radius="md"
//                                           src={post?.images[3].url}
//                                           alt="Random unsplash image"
//                                       />
//                                   </Grid.Col>
//                               </Grid>
//                           </SimpleGrid>
//                           : ""
//                   }
//
//
//                   {/*    ------------------Post Footer----------------*/}
//                   <div className="PostFooter">
//                       <div className="action">
//                           <div className= "action-like">
//                               <span> {
//                                  `${post.likes.length} thích`
//                               }  </span>
//
//                               {isLike ?
//                                   <i className="fas fa-heart"
//                                      onClick={()=>handleUnLike()}
//                                      style={{color: "#fa6342"}}></i>
//                                   :
//                                   <i className="fal fa-heart"
//                                      onClick={()=>handleLike()}
//                                      style={{color: "#fa6342"}}></i>
//                               }
//                           </div>
//
//                           <div className= "action-comment">
//                               <span>{post.comments.length} bình luận</span>
//                               <i className="fal fa-comment" style={{color: "blue"}}></i>
//                           </div>
//                       </div>
//
//                       <div className= "user-liked">
//                           <Avatar.Group spacing="md">
//                               <Avatar size="md"  src="https://res.cloudinary.com/dehtpa6ba/image/upload/v1668596070/review_restaurants/album1_spet5e.jpg" radius="xl" />
//                               <Avatar size="md"  src="https://res.cloudinary.com/dehtpa6ba/image/upload/v1668596070/review_restaurants/album1_spet5e.jpg" radius="xl" />
//                               <Avatar size="md"  src="https://res.cloudinary.com/dehtpa6ba/image/upload/v1668596070/review_restaurants/album1_spet5e.jpg" radius="xl" />
//                               <Avatar size="md" radius="xl">+5</Avatar>
//                           </Avatar.Group>
//                           <span>Bạn và 5 người khác đã thích</span>
//                       </div>
//
//
//                   </div>
//
//                   <Comments post = {post}></Comments>
//
//                   {
//                       currentUser &&
//                       <InputComment post={post}></InputComment>
//                   }
//
//               </div>
//
//           </div>
//       </>
//     )
// }
//
// export default Post