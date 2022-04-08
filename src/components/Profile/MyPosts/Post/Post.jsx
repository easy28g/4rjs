import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return(
        <div>
            <div className={s.item}>
                <img src='https://yt3.ggpht.com/ytc/AKedOLQf5MBcFSDzo2FeZIXSqafCvdRMGjW2C-0j8RpD=s900-c-k-c0x00ffffff-no-rj'></img>
                {props.messages}
                <div>
                    <span>Like</span> {props.likes}
                </div>
            </div>

        </div>
    );
}

export default Post;