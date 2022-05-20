import React from 'react';
import s from './User.module.css'
import MyButton from '../../../../UI-commons/MyButton/MyButton'
import userDefault from '../../../../../assets/images/user.webp'
import {NavLink} from 'react-router-dom'

const User = ({user, follow, unfollow}) => {


  return <div className={s.userCard}>
    <div className={s.avatar}>
      <img src={user.photos.small ? user.photos.small : userDefault} alt="user photo"/>
      <NavLink to={`/profile/${user.id}`}/>
    </div>

    <span className={s.userName}>{user.name}</span>
    <span className={s.location}>{'${user.location.cityName}, ${user.location.country}'}</span>
    <span className={s.status}>{user.status ? user.status : 'Пользователь не установил статус'}</span>

    {user.isFollow
      ? <MyButton onClick={unfollow} text="UNFOLLOW"/>
      : <MyButton onClick={follow} text="FOLLOW"/>}
  </div>
}

export default User;
