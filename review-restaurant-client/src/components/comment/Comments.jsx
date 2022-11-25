import React from "react";
import CommentsDisplay from "./CommentsDisplay";

const Comments = ({post})=>{

    return(
       <div className="Comments"
            style={{fontSize:"15px",
                display: "flex",
                flexDirection: "column",
                gap: "1rem"
            }} >
           {
               post.comments.map((comment) =>{
                   return <CommentsDisplay key = {comment._id}
                                           comment={comment}
                                           post={post}
                   />
               })
           }

       </div>
    )
}

export default Comments