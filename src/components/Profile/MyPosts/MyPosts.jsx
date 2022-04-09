import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    // perenesli v index.js 
    // let postsData = [
    //     {id:1, message:"Hi! How are you?", likesCount: 15},
    //     {id:2, message:"It is my first post.", likesCount: 20},
    // ];
    
    let postsElement = props.posts.map( p => <Post messages={p.message} likes={p.likesCount} id={p.id}/>)

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
            {/* <Post messages={postsData[0].message} likes={postsData[0].likesCount} id={postsData[0].id}/>
            <Post messages={postsData[1].message} likes={postsData[1].likesCount} id={postsData[1].id}/> */}

            {postsElement}

        </div>

        </div>
    );
}

export default MyPosts;