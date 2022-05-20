import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = ({profile}) => {
  return (
    <div>
      <div className={s.coverImage}>
      </div>
      <div className="container">
        <ProfileInfo profile={profile}/>
        <MyPostsContainer/>
      </div>
    </div>
  );
};

export default Profile;
