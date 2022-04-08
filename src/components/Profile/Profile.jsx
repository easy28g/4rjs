import React from 'react';
import MyPosts from './MyPosts/MyPosts.jsx';
import classes from './Profile.module.css';

const Profile = () => {
    return(
        <div>
          <div>
            <img src='https://v-thailand.com/wp-content/uploads/2015/01/Plyazhi-Samui.jpg' />
          </div>
          <div>
            ava+description
          </div>
          <MyPosts />
        </div>
    );
}

export default Profile;