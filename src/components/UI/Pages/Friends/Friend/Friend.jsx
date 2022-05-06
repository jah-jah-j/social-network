import React from 'react';
import s from './Friend.module.css'
import MyButton from '../../../MyButton/MyButton'

const Friend = ({state}) => {
  return <div className={s.friendCard}>
    <div className={s.avatar}><img src={state.avatar} alt="friend photo"/></div>
    <span className={s.friendName}>{state.name}</span>
    <span className={s.status}>{state.isOnline ? 'Online' : 'Offline'}</span>
    <MyButton text="View Profile"/>
  </div>
}

export default Friend;
