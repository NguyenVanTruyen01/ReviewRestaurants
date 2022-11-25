import React from "react";
import {useDispatch} from "react-redux";
import {deleteComment} from "../../../redux/requestAPI/commentRequest"

const CommentMenu = ({post,comment,auth,setOnEdit}) =>{

    const dispatch = useDispatch()

    const handleRemove =async () => {
        if(post.user._id === auth._id || comment.user._id === auth._id){
          await  deleteComment({post, auth, comment,dispatch})
        }
    }

    const MenuItem = () => {
        return(
            <>
                <div className="dropdown-item" onClick={() => setOnEdit(true)}>
                    <i className="fal fa-edit"></i> Edit
                </div>
                <div className="dropdown-item" onClick={handleRemove}>
                    <i className="fas fa-trash-alt"></i> Remove
                </div>
            </>
        )
    }

    return (
        <div className="menu">
            {
                (post.user._id === auth._id || comment.user._id === auth._id) &&
                <div className="nav-item dropdown">
                    <i className="fas fa-ellipsis-h"></i>
                    {
                        MenuItem()
                    }

                    {/*<div className="dropdown-menu" aria-labelledby="moreLink">*/}
                    {/*    {*/}
                    {/*        post.user._id === auth._id*/}
                    {/*            ? comment.user._id === auth._id*/}
                    {/*                ? MenuItem()*/}
                    {/*                : <div className="dropdown-item" onClick={handleRemove}>*/}
                    {/*                    <i className="fas fa-trash-alt"></i> Remove*/}
                    {/*                </div>*/}
                    {/*            : comment.user._id === auth._id && MenuItem()*/}
                    {/*    }*/}
                    {/*</div>*/}

                </div>
            }

        </div>
    )
}

export default CommentMenu