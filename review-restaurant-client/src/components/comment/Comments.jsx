import React, {useEffect, useState} from "react";
import CommentsDisplay from "./CommentsDisplay";

const Comments = ({post})=>{

    const [comments,setComments] = useState([])
    const [showComments, setShowComments] = useState([])

    const [next,setNext] = useState(2)

    const [replyComments,setReplyComments] = useState([])

    useEffect(() => {
        const newComment = post.comments.filter(cm => !cm.reply)
        setComments(newComment);
        setShowComments((newComment.slice(newComment.length - next)))
    },[post.comments,next])

    useEffect(()=>{
        const newRep = post.comments.filter(cm => cm.reply)
        setReplyComments(newRep);
    }, [post.comments])

    return(
        <div className="Comments"
             style={{fontSize:"15px",
                 display: "flex",
                 flexDirection: "column",
                 gap: "1rem"
             }} >

            {
                showComments.map((comment,index) =>{
                    return <CommentsDisplay key = {index}
                                            comment={comment}
                                            post={post}
                                            replyComments = {replyComments.filter(item => item.reply === comment._id)}
                    />
                })
            }

            {
                comments.length - next > 0
                    ?
                    <div style={{cursor:"pointer", color: "crimson", margin:"auto"}}
                         onClick={()=>setNext(next+10)}
                    >  "Xem thêm bình luận"</div>
                    :   comments.length > 2 &&
                    <div style={{cursor:"pointer", color: "crimson", margin:"auto"}}
                         onClick={()=>setNext(2)}
                    >  "Ẩn bớt bình luận"</div>
            }

        </div>
    )
}

export default Comments












// import React, {useEffect, useState} from "react";
// import CommentsDisplay from "./CommentsDisplay";
//
// const Comments = ({post})=>{
//
//     const [comments,setComments] = useState([])
//     const [showComments, setShowComments] = useState([])
//
//     const [next,setNext] = useState(2)
//
//     const [replyComments,setReplyComments] = useState([])
//
//     useEffect(() => {
//         const newComment = post.comments.filter(cm => !cm.reply)
//         setComments(newComment);
//         setShowComments((newComment.slice(newComment.length - next)))
//     },[post.comments,next])
//
//     useEffect(()=>{
//         const newRep = post.comments.filter(cm => cm.reply)
//         setReplyComments(newRep);
//     }, [post.comments])
//
//     return(
//        <div className="Comments"
//             style={{fontSize:"15px",
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "1rem"
//             }} >
//
//            {
//                showComments.map((comment,index) =>{
//                    return <CommentsDisplay key = {index}
//                                            comment={comment}
//                                            post={post}
//                                            replyComments = {replyComments.filter(item => item.reply === comment._id)}
//                    />
//                })
//            }
//
//            {
//                comments.length - next > 0
//                ?
//                    <div style={{cursor:"pointer", color: "crimson", margin:"auto"}}
//                         onClick={()=>setNext(next+10)}
//                    >  "Xem thêm bình luận"</div>
//                    :   comments.length > 2 &&
//                    <div style={{cursor:"pointer", color: "crimson", margin:"auto"}}
//                         onClick={()=>setNext(2)}
//                    >  "Ẩn bớt bình luận"</div>
//            }
//
//        </div>
//     )
// }
//
// export default Comments