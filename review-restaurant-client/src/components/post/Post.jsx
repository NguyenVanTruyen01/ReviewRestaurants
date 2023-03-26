import React, { useEffect, useState } from "react";
import { Group, Avatar, Text, useMantineTheme } from '@mantine/core';
import './Post.scss'
import { Rating } from '@mantine/core';
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { likePost, removePost, unLikePost } from "../../redux/requestAPI/postRequests"

import Comments from "../comment/Comments";
import InputComment from "../comment/comment-input/InputComment";
import { Link } from "react-router-dom";
import SliderImages from "../slider-images/SliderImages";
import GridImages from "./grid_images/GridImages";

const PRIMARY_COL_HEIGHT = 300;
const Post = ({ post }) => {

    const [visible, setVisible] = useState(false);

    const { currentUser } = useSelector(state => state.auth?.login)
    const listPost = useSelector(state => state.post?.listPost)

    const dispatch = useDispatch()

    const theme = useMantineTheme();
    const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

    const [isLike, setIsLike] = useState(false)
    const [loadLike, setLoadLike] = useState(false);
    const [showComment, setShowComment] = useState(false)

    const handleLike = async () => {
        if (currentUser) {

            if (loadLike) return;
            setIsLike(true)
            setLoadLike(true)
            await likePost(post, currentUser, dispatch)
            setLoadLike(false)

        }
        else return;
    }

    const handleUnLike = async () => {
        if (currentUser) {

            if (loadLike) return;
            setIsLike(false)

            setLoadLike(true)
            await unLikePost(post, currentUser, dispatch)
            setLoadLike(false)

        }
        else return;
    }

    const handleRemovePost = async () => {
        if (currentUser)
            await removePost(post, currentUser, listPost, dispatch)
        else return
    }

    useEffect(() => {

        if (currentUser && post.likes.find(like => like._id === currentUser._id)) {
            setIsLike(true)
        } else return;

    }, [post.likes, currentUser?._id])


    return (
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
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <Link to={`/profile/${post.user._id}`}
                                    className="username_post"
                                    size="md"
                                    weight={600} >
                                    {post.user.userName}
                                </Link>
                                {
                                    post.user._id !== post.idRestaurant._id ?
                                        <>
                                            <i className="fas fa-caret-right" style={{ marginLeft: "8px", marginRight: "8px" }}></i>
                                            <Link to={`/profile/${post.idRestaurant._id}`}
                                                className="username_restaurant"
                                                size="md" weight={500}>
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
                            <div className="dropdown_actions">
                                {/*<div className="dropdown-item" >*/}
                                {/*    <i className="fal fa-edit"></i> Edit*/}
                                {/*</div>*/}
                                <div className="dropdown-item" onClick={() => handleRemovePost()}>
                                    <i className="fas fa-trash-alt" style={{ cursor: "pointer" }}></i>
                                </div>
                            </div>
                        }


                        <div className="rating_res">
                            <Rating defaultValue={+post.ratingRes}
                                readOnly />
                        </div>


                    </Group>
                </div>

                {/*    ------------------Post Content----------------*/}
                <div className="PostContent">

                    {/*    ------------------Content----------------*/}
                    <span size="md" >
                        {post.content}
                    </span>

                    {/*    ------------------Image----------------*/}
                    <SliderImages
                        images={post.images}
                        visible={visible}
                        setVisible={setVisible}
                    />

                    {
                        post.images.length > 0 && <GridImages
                            images={post.images}
                            setVisible={setVisible}
                        ></GridImages>
                    }


                    {/*    ------------------Post Footer----------------*/}
                    <div className="PostFooter">
                        <div className="action">
                            <div className="action-like">
                                <span> {
                                    `${post.likes.length} thích`
                                }  </span>

                                {isLike ?
                                    <i className="fas fa-heart"
                                        onClick={() => handleUnLike()}
                                        style={{ color: "#fa6342" }}></i>
                                    :
                                    <i className="fal fa-heart"
                                        onClick={() => handleLike()}
                                        style={{ color: "#fa6342" }}></i>
                                }
                            </div>

                            <div className="action-comment">
                                <span>{post.comments.length} bình luận</span>

                                <i class="fas fa-comment"
                                    onClick={() => setShowComment(!showComment)}
                                ></i>

                            </div>

                        </div>

                        <div className="user-liked">
                            <Avatar.Group spacing="md">
                                {
                                    post.likes && post.likes.length > 3 ?
                                        post.likes.slice(0, 3).map((like, index) => {
                                            return (<Avatar size="md" src={like.avatar} radius="xl" />)
                                        })
                                        :
                                        post.likes.map((like, index) => {
                                            return (<Avatar size="md" src={like.avatar} radius="xl" />)
                                        })
                                }

                                {
                                    post.likes.length > 3 &&
                                    <Avatar size="md" radius="xl" >+{post.likes.length - 3} </Avatar>
                                }

                            </Avatar.Group>

                            {
                                post.likes.length > 0 ?
                                    currentUser &&
                                        post.likes.find(like => like._id === currentUser._id) ?
                                        post.likes.length > 1 ?
                                            <span className="user">Bạn và {post.likes.length - 1} người khác đã thích</span>
                                            :
                                            <span className="user">Bạn đã thích</span>
                                        :
                                        <span className="user">{post.likes.length} người đã thích</span>
                                    : ""
                            }
                        </div>
                    </div>


                    {
                        showComment &&
                        <>
                            <Comments post={post}></Comments>
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

