import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return(
        <div>

        <div>
            My posts
            <div>
              <textarea></textarea>
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