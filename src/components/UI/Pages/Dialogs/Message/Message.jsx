import React from 'react';
import {NavLink} from 'react-router-dom'
import s from './../Dialogs.module.css'

const Message = (props) => {
  if (props.state.isMe) {
    return <NavLink to={'/dialogs/' + props.state.id} className={s.myMessage}>{props.state.message}</NavLink>
  }

  return <NavLink to={'/dialogs/' + props.state.id} className={s.message}>{props.state.message}</NavLink>

};

export default Message;
