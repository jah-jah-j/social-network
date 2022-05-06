import React from 'react';
import {NavLink} from 'react-router-dom'
import s from './../Dialogs.module.css'

const Dialog = (props) => {
  return <NavLink
    to={'/dialogs/' + props.state.id}
    className={s.dialog}>
    <img className={s.dialogAva}
         src={props.state.avatar}
         alt="img"
    />{props.state.name}</NavLink>
};

export default Dialog;
