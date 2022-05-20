import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = ({profile}) => {

  return (
    <div className={s.contentUser}>
      <img
        src={profile.photos.large}
        alt="" className={s.avatar}
        width="60px"/>
      <div className={s.userName}>{profile.fullName}</div>
      <div className={s.contacts}>
        <span>Контакты:</span>
        <ContactLink />
        profile.contacts.website && <a href={profile.contacts.website}
                                        className={s.contact}>website
                                      </a>
        profile.contacts.vk && <a href={profile.contacts.vk}
                                        className={s.contact}>vk
                                      </a>
        profile.contacts.twitter && <a href={profile.contacts.twitter}
                                        className={s.contact}>twitter
                                      </a>
        profile.contacts.instagram && <a href={profile.contacts.instagram}
                                        className={s.contact}>instagram
                                      </a>
        profile.contacts.website && <a href={profile.contacts.website}
                                        className={s.contact}>{profile.contacts.website}
                                      </a>
        profile.contacts.website && <a href={profile.contacts.website}
                                        className={s.contact}>{profile.contacts.website}
                                      </a>
      </div>

    </div>
  );
};

export default ProfileInfo;
