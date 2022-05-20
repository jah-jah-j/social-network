import React from 'react';
import {NavLink} from 'react-router-dom'
import s from './../Dialogs.module.css'

const Message = ({state}) => {
  if (state.isMe) {
    return <NavLink to={'/dialogs/' + state.id} className={s.myMessage}>{state.message}</NavLink>
  }

  return <NavLink to={'/dialogs/' + state.id} className={s.message}>{state.message}</NavLink>

};

export default Message;
