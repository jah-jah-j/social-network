import React from 'react';
import s from '../Header.module.css'
import Loader from '../../../UI-commons/Loader/Loader'
import HeaderUser from '../HeaderUser/HeaderUser'
import {NavLink} from 'react-router-dom'

const UserInfo = ({auth}) => {
  return (
    <div className={s.login}>
      {
        auth.isFetching
          ? <Loader/>
          : auth.isAuth
            ? <HeaderUser login={auth.login}/>
            : <NavLink to="/login">Login</NavLink>
      }
    </div>
  );
};

export default UserInfo;
