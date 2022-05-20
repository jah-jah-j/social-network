import React from 'react';
import s from './Users.module.css'
import User from './User/User'
import UsersNav from './UsersNav/UsersNav'

const Users = ({follow, unfollow, state, setCurrentPage, pages}) => {

  return (
    <div className={s.users}>
      <UsersNav currentPage={state.currentPage}
                pages={pages}
                setCurrentPage={setCurrentPage}
      />
      <div className={s.usersCards}>
        {
          state.users.map(u =>
            <User key={u.id} user={u}
                  follow={() => follow(u.id)}
                  unfollow={() => unfollow(u.id)}
            />)
        }
      </div>
    </div>
  );
};

export default Users;
