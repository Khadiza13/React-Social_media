import { createContext, useReducer} from "react";

export const PostList=createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer=(currPostList,action)=>{
    let newPostList=currPostList;
    if(action.type==="DELETE_POST"){
      newPostList=currPostList.filter((post)=>post.id!==action.payload.postId);
    }
    else if (action.type === "ADD_POST") {
      newPostList = [action.payload, ...currPostList];
    }
    return newPostList;
};
const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer,DEFAULT_POST_LIST);
    const addPost=(userId, postTitle, postBody, tags)=>{
      dispatchPostList({
        type: "ADD_POST",
        payload: {
          id: Date.now(),
          title: postTitle,
          body: postBody,
          userId: userId,
          tags: tags,
        },
      });
    };
    const deletePost=(postId)=>{
        dispatchPostList({
          type:"DELETE_POST",
          payload: {
            postId,
          },
        });
    };
    return (
        <PostList.Provider value={{ postList, addPost, deletePost }}>
          {children}
        </PostList.Provider>
      );
};

const DEFAULT_POST_LIST = [
    {
      id: "1",
      title: "Tour Loading",
      body: "Hi Friends, I am going to Saint Martin for my vacations. Hope to enjoy a lot.",
      userId: "Seyam06",
      tags: ["#vacation", "#Saimt-Martin", "#Enjoying"],
    },
    {
      id: "2",
      title: "Eid Mubarak",
      body: "Wishing a very happy Eid Mubarak to all of my family and friends",
      userId: "kamal33",
      tags: ["#Eid", "#Happy"],
    },
    {
        id: "3",
        title: "Excited",
        body: "Going to start my last year of graduation",
        userId: "Fatema44",
        tags: ["#Graduation", "#Excited"],
      },
  ];
export default PostListProvider;