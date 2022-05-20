import React from 'react';
import s from './ProfileInfo.module.css';
import ContactsLinks from './ContactsLinks/ContactsLinks'
import defaultUser from '../../../../../assets/images/samurai-warrior.webp'


const ProfileInfo = ({profile}) => {

  return (
    <div className={s.contentUser}>
      <img
        src={profile.photos.large || defaultUser}
        alt="" className={s.avatar}
        width="60px"/>
      <div className={s.userName}>{profile.fullName}</div>
      <div className={s.aboutProfile}>{profile.aboutMe}</div>
      <div className={s.contacts}>
        <ContactsLinks names={Object.keys(profile.contacts)} links={Object.values(profile.contacts)}/>
      </div>
    </div>
  )
};

export default ProfileInfo;
