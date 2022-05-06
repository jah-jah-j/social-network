import React from 'react';
import s from './Friends.module.css'
import Friend from './Friend/Friend'
import FriendsNav from './FriendsNav/FriendsNav'

const Friends = (props) => {

  const friendCards = props.state.map(friend => <Friend key={friend.id} state={friend}/>)

  return <div className={s.friends}>
    <FriendsNav/>
    <div className={s.friendsCards}>
      {friendCards}
    </div>
  </div>
};

export default Friends;
