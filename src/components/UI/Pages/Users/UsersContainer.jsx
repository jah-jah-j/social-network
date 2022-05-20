import React from 'react';
import s from './Users.module.css'

const Users = (props) => {
  const userCards = props.state.map(user => <user key={user.id} state={user}/>)

  return <div className={s.users}>
    <usersNav/>
    <div className={s.usersCards}>
      {userCards}
    </div>
  </div>

};

export default Users;
