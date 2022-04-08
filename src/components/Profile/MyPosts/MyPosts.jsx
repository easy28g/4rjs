import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return(
        <div  className={s.postBlock}>
            <h3>My posts </h3> 
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
         
        </div>

        <div className={s.posts}>
            <Post messages='Hi! How are you?' likes='15' />
            <Post messages='It is my first post.' likes='20' />
        </div>

        </div>
    );
}

export default MyPosts;