import React, { useState, useEffect } from "react";
import { Avatar } from "@mantine/core";
import { Link } from "react-router-dom";
import moment from "moment";
import './CommentCard.scss'
import { useDispatch, useSelector } from "react-redux";
import CommentMenu from "../comment-menu/CommentMenu";
import { Textarea } from '@mantine/core';
import InputComment from "../comment-input/InputComment"
import { updateComment, likeComment, unlikeComment } from "../../../redux/requestAPI/commentRequest"

import { getProfileUser } from "../../../redux/requestAPI/userRequests";

const CommentCard = ({ children, comment, post, commentId }) => {

    const { currentUser } = useSelector(state => state.auth?.login)
    const dispatch = useDispatch();

    const [content, setContent] = useState("");
    const [readMore, setReadMore] = useState(false)

    const [isLike, setIsLike] = useState(false);
    const [onEdit, setOnEdit] = useState(false);
    const [loadLike, setLoadLike] = useState(false);

    const [onReply, setOnReply] = useState(false)

    useEffect(() => {
        setContent(comment.content)
        setIsLike(false)
        setOnReply(false)
        if (currentUser && comment.likes.find(like => like._id === currentUser?._id)) {
            setIsLike(true)
        }

    }, [comment])

    const styleCard = {
        opacity: comment._id ? 1 : 0.5,
        pointerEvents: comment._id ? 'inherit' : 'none'
    }

    const handleLike = async () => {
        if (currentUser) {
            if (loadLike) return;
            setIsLike(true)

            setLoadLike(true)
            await likeComment({ comment, post, currentUser, dispatch });
            setLoadLike(false)
        }
        else return;
    }

    const handleUnLike = async () => {
        if (currentUser) {
            if (loadLike) return;
            setIsLike(false)

            setLoadLike(true)
            await unlikeComment({ comment, post, currentUser, dispatch });
            setLoadLike(false)
        }
        else return;
    }

    const handleUpdate = async () => {
        if (currentUser) {
            if (comment.content !== content.trim()) {
                await updateComment({ comment, post, content, currentUser, dispatch })
                setOnEdit(false)
            } else {
                setOnEdit(false)
            }
        } else return;
    }

    const handleReply = async () => {
        if (currentUser) {
            if (onReply) return setOnReply(false)
            setOnReply({ ...comment, commentId })
        }
        else return;

    }

    return (

        <div className="CommentCard" style={styleCard}>
            <Link className="comment-header">
                <div>
                    <Avatar
                        src={comment.user.avatar ? comment.user.avatar :
                            "https://res.cloudinary.com/dehtpa6ba/image/upload/v1668596070/review_restaurants/album1_spet5e.jpg"}
                        radius="xl"
                        size={40}
                    />
                    <h6>{comment.user.userName}</h6>
                </div>

                {
                    currentUser &&
                    <CommentMenu post={post}
                        comment={comment}
                        auth={currentUser}
                        onEdit={onEdit}
                        setOnEdit={setOnEdit}
                    />
                }


            </Link>

            <div className="comment_content">
                <div className="flex-fill">
                    {
                        onEdit ?
                            <div>
                                <div className="choose-edit">
                                    <span onClick={() => handleUpdate()}>Update</span>
                                    <span onClick={() => setOnEdit(false)}>Cancel</span>
                                </div>
                                <Textarea
                                    size="md"
                                    withAsterisk
                                    value={content}
                                    autosize
                                    minRows={2}
                                    onChange={(e) => setContent(e.target.value)}
                                />
                            </div>

                            :
                            <div>
                                <span>
                                    {
                                        comment.tag && comment.tag._id !== comment.user._id &&
                                        <Link to={`/profile/${comment?.tag._id}`}
                                            style={{ marginRight: "6px", color: "blue" }}
                                            onClick={() => getProfileUser(comment?.tag._id)}
                                        >
                                            @{comment?.tag.userName}
                                        </Link>
                                    }
                                    {

                                        content.length < 150 ? content :
                                            readMore ? content + ' ' :
                                                content.slice(0, 150) + '...'
                                    }
                                </span>

                                {
                                    content.length > 150 &&
                                    <span
                                        style={{ color: "crimson", cursor: "pointer" }}
                                        className="readMore" onClick={() => setReadMore(!readMore)}>
                                        {readMore ? " Ẩn bớt" : " Xem thêm"}
                                    </span>
                                }
                            </div>

                    }


                    <div className="comment-footer">
                        <small>
                            {moment(comment.createdAt).fromNow()}
                        </small>

                        <small>
                            {
                                isLike ?
                                    <i class="fas fa-heart"
                                        style={{ color: "ef8744" }}
                                        onClick={() => handleUnLike()}
                                    ></i>
                                    :
                                    <i class="far fa-heart"
                                        style={{ color: "#ef8744" }}
                                        onClick={() => handleLike()}></i>

                            }

                            {comment.likes.length} like
                        </small>

                        <small onClick={() => handleReply()}>
                            <i className="fal fa-reply"></i>
                            {
                                onReply ? 'cancel' : 'reply'
                            }
                        </small>
                    </div>


                </div>


                {
                    onReply &&
                    <div style={{ marginTop: "6px" }}>
                        <InputComment post={post}
                            onReply={onReply}
                            setOnReply={setOnReply}
                        >
                            <Link to={`/profile/${onReply?.user._id}`}
                                style={{ marginRight: "6px", color: "blue" }}
                                onClick={() => getProfileUser(onReply?.user._id)}
                            >
                                @{onReply?.user.userName}
                            </Link>
                        </InputComment>
                    </div>
                }

                {children}

            </div>

        </div >
    )
}

export default CommentCard


