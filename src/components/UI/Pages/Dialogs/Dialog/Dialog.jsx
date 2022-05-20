import React from 'react';
import {NavLink} from 'react-router-dom'
import s from './../Dialogs.module.css'

const Dialog = ({state}) => {
  return <NavLink
    to={'/dialogs/' + state.id}
    className={s.dialog}>
    <img className={s.dialogAva}
         src={state.avatar}
         alt="img"
    />{state.name}</NavLink>
};

export default Dialog;
