import Comments from "./Comments";
import React from "react";
import CommentCard from "./comment-card/CommentCard";

const CommentsDisplay = ({comment,post})=>{

    return(
        <div className="CommentDisplay">
            <CommentCard comment = {comment} post = {post}/>
        </div>
    )
}
export default CommentsDisplay