import React, {useState} from "react";
import './InputComment.scss'
import {useDispatch, useSelector} from "react-redux";
import {createComment} from "../../../redux/requestAPI/commentRequest"

const InputComment = ({children,post, onReply,setOnReply})=>{

    const [content,setContent] = useState('');

    const {currentUser} = useSelector(state => state.auth?.login);
    const dispatch = useDispatch();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(!content.trim()) {
            if(setOnReply) return setOnReply(false);
            return ;
        }

        setContent("");

        const newComment = {
            content,
            likes:[],
            user: currentUser,
            createdAt:new Date().toISOString(),
            reply: onReply && onReply.commentId,
            tag: onReply && onReply.user
        }

       await createComment(post,newComment,currentUser,dispatch);
        if(setOnReply) return setOnReply(false)
    }

    return(
        <form className="CommentInput" onSubmit={handleSubmit}>
            {children}
            <input type="text" placeholder="Viết bình luận..."
                   value={content}
                   onChange={(e)=>setContent(e.target.value)}
            />

            <button type="submit" className='postBtn' >Đăng</button>

        </form>
    )
}

export default InputComment