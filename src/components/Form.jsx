import { useRef, useContext } from "react";
import {PostList} from "../store/post-list-store";

const Form=()=>{
    const { addPost } = useContext(PostList);
  
    const userIdElement = useRef();
    const postTitleElement = useRef();
    const postBodyElement = useRef();
    const tagsElement = useRef();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const userId = userIdElement.current.value;
      const postTitle = postTitleElement.current.value;
      const postBody = postBodyElement.current.value;
      const tags = tagsElement.current.value.split(" ");
  
      userIdElement.current.value = "";
      postTitleElement.current.value = "";
      postBodyElement.current.value = "";
      tagsElement.current.value = "";
  
      addPost(userId, postTitle, postBody, tags);
    };
    return (
      <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label" style={{color:"darkblue"}}>
          User Id
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Your User Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label" style={{color:"darkblue"}}>
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label" style={{color:"darkblue"}}>
          Description
        </label>
        <textarea
          type="text"
          ref={postBodyElement}
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label" style={{color:"darkblue"}}>
          Your Hashtags 
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          ref={tagsElement}
          placeholder="Please enter tags using hashtag"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
    );
};
export default Form;