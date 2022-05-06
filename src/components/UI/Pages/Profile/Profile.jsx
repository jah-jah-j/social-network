import React, {useEffect, useState} from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    props.state.profile.then(setProfile)
  }, [])

  return (
    <div>
      <div className={s.coverImage}>
      </div>
      <div className="container">
        {profile && <ProfileInfo profile={profile}/>}
        <MyPostsContainer store={props.store}/>
      </div>
    </div>
  );
};

export default Profile;
