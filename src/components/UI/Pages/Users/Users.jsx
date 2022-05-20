import React from 'react';
import s from './Users.module.css'
import User from './User/User'
import UsersNav from './UsersNav/UsersNav'

class Users extends React.Component {

  usersCards = this.props.users.map(u =>
    <User key={u.id} state={u}
          follow={() => this.props.follow(u.id)}
          unfollow={() => this.props.unfollow(u.id)}
    />)

  render() {
    return <div className={s.users}>
      <UsersNav/>
      <div className={s.usersCards}>
        {this.usersCards}
      </div>
    </div>
  }
}
export default Users;
