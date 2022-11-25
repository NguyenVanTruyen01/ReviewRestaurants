import React , {useState,useEffect}from "react";
import {Avatar} from "@mantine/core";
import {Link} from "react-router-dom";
import moment from "moment";
import './CommentCard.scss'
import {useDispatch, useSelector} from "react-redux";
import CommentMenu from "../comment-menu/CommentMenu";
import { Textarea } from '@mantine/core';
import {updateComment} from "../../../redux/requestAPI/commentRequest"

const CommentCard = ({comment,post})=>{

    const {currentUser} = useSelector(state => state.auth?.login)
    const dispatch = useDispatch();

    const [content,setContent] = useState("");
    const [readMore,setReadMore] = useState(false)

    const [isLike,setIsLike] = useState(false);
    const [onEdit,setOnEdit] = useState(false)

    useEffect(()=>{
        setContent(comment.content)
    },[comment])

    const styleCard = {
        opacity: comment._id ? 1: 0.5,
        pointerEvents : comment._id ? 'inherit' : 'none'
    }

    const handleLike = ()=>{
        setIsLike(true)
    }

    const handleUnLike = () => {
        setIsLike(false)
    }

    const handleUpdate = async () =>{
       if(comment.content !== content.trim()){
            await updateComment({comment,post,content,currentUser,dispatch})
            setOnEdit(false)
       }else {
           setOnEdit(false)
       }
    }

    return (

        <div className="CommentCard" style={styleCard}>
            <Link className= "comment-header">
                <div>
                    <Avatar
                        src={"https://res.cloudinary.com/dehtpa6ba/image/upload/v1668596070/review_restaurants/album1_spet5e.jpg"}
                        radius="xl"
                        size={40}
                    />
                    <h6>{comment.user.userName}</h6>
                </div>

                <CommentMenu post = {post}
                             comment = {comment}
                             auth = {currentUser}
                             setOnEdit = {setOnEdit}
                />

            </Link>

            <div className="comment_content">
                <div className="flex-fill">
                    {
                        onEdit ?
                            <div>
                                <div className="choose-edit">
                                    <span onClick={()=>handleUpdate()}>Update</span>
                                    <span onClick={()=>setOnEdit(false)}>Cancel</span>
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
                            content.length <150 ? content :
                                readMore ? content + ' ':
                                    content.slice(0,150) + '...'
                        }
                        </span>

                                {
                                    content.length >150 &&
                                    <span
                                        style={{color: "crimson", cursor:"pointer"}}
                                        className="readMore" onClick={()=>setReadMore(!readMore)}>
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
                                    <i className="fas fa-thumbs-up"
                                       style={{color: "blue"}}
                                       onClick={()=>handleUnLike()}
                                    ></i>
                                    :
                                    <i className="fal fa-thumbs-up"
                                       style={{color: "blue"}}
                                    onClick={()=>handleLike()}></i>

                            }

                            {comment.likes.length} like
                        </small>

                        <small>
                            <i className="fal fa-reply"></i>
                            reply
                        </small>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default CommentCard