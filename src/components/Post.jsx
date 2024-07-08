import { PostList } from "../store/post-list-store";
import { MdDeleteForever } from "react-icons/md";
import { useContext } from "react";

const Post=({post})=>{
    const { deletePost } = useContext(PostList);
return (
<div className="card" style={{width: "50rem"}}>
  <div className="card-body">
    <h5 className="card-title">{post.title}
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post.id)}>
    <MdDeleteForever />
          </span></h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{post.userId}</h6>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tag) =>(<a href="#" className="card-link">{tag}</a>))}
    <hr></hr>
    <span className="badge text-bg-primary hashtag">{post.reactions}</span> 
  </div>
</div>
    )
}
export default Post;