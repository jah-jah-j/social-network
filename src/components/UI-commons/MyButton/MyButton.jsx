import React from 'react';
import s from './MyButton.module.css'

const MyButton = (props) => {
  return <button onClick={props?.onClick} className={s.button}>{props.text}</button>
};

export default MyButton;
