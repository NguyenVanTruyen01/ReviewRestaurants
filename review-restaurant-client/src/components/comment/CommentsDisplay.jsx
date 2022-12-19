import Comments from "./Comments";
import React, {useEffect, useState} from "react";
import CommentCard from "./comment-card/CommentCard";

const CommentsDisplay = ({comment,post,replyComments})=>{

    const [showRep,setShowRep] = useState([]);
    const [next,setNext] = useState(1);

    useEffect(() =>{
        setShowRep(replyComments.slice(replyComments.length - next))
    },[replyComments,next])

    return(
        <div className="CommentDisplay">
            <CommentCard comment = {comment} post = {post} commentId = {comment._id}>
                <div>
                    {
                        showRep.map((item,index) => (
                            item.reply &&
                            <CommentCard
                                key={index}
                                comment={item}
                                post={post}
                                commentId={comment._id}
                            ></CommentCard>

                        ))
                    }

                    {
                        replyComments.length - next > 0
                            ?
                            <div style={{cursor:"pointer", color: "crimson", margin:"auto"}}
                                 onClick={()=>setNext(next+10)}
                            >  "Xem thêm bình luận"</div>
                            :   replyComments.length > 1 &&
                            <div style={{cursor:"pointer", color: "crimson", margin:"auto"}}
                                 onClick={()=>setNext(1)}
                            >  "Ẩn bớt bình luận"</div>
                    }
                </div>
            </CommentCard>
        </div>
    )
}
export default CommentsDisplay