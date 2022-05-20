import React from 'react';
import defaultUser from '../../../../assets/images/user.webp'
import s from './HeaderUser.module.css'

const HeaderUser = ({login}) => {
  return (
    <div>
      <img src={defaultUser} className={s.userPhoto} alt="user avatar"/>
      <span>{login}</span>
    </div>
  );
};

export default HeaderUser;
