import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {

  return (
    <div className={s.contentUser}>
      <img
        src="https://img1.goodfon.com/wallpaper/nbig/4/2a/wow-varkraft-illidan.jpg"
        alt="" className={s.avatar}
        width="60px"/>
      <div className={s.userName}>{props.profile.name}</div>
      <a href={`mailto:${props.profile.email}`} className={s.userName}>{props.profile.email}</a>
    </div>
  );
};

export default ProfileInfo;
