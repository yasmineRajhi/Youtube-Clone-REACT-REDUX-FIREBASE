import React, { useEffect,useState } from "react";
import Comment from "./Comment";
import './_comments.scss'
import { useDispatch,useSelector} from "react-redux";
import {  addComment, getCommentsOfVideoById} from "../../Redux/Actions/Comments.action";

const Comments = ({videoId,totalComments}) => {

  const dispatch = useDispatch()

  useEffect(() => {
     dispatch(getCommentsOfVideoById(videoId))
  }, [videoId, dispatch])
  const comments = useSelector(state => state.commentList.comments)

  
  const [text, setText] = useState('')

  const _comments = comments?.map(
    comment => comment.snippet.topLevelComment.snippet
 )
 const handleComment = e => {
  e.preventDefault()
  if (text.length === 0) return

  dispatch(addComment(videoId, text))

  setText('')
}


  return (
    <div className="comments">
      <p>{totalComments} comments</p>
      <div className="comments_form d-flex w-100 my-2">
        <img
          src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
          alt="avatar"
          className="rounded-circle mr-3"
        />
        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input type="text" placeholder="write a comment..."
          value={text}
          onChange={e => setText(e.target.value)}/>
          <button className="border-0 p-2">Comment</button>
        </form>
      </div>
      <div className="comments_list">
        {_comments?.map((comment, i) => (
          <Comment comment={comment} key={i}/>
        ))}
      </div>
    </div>
  );
};

export default Comments;
