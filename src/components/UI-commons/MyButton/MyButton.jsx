import React from 'react';
import s from './MyButton.module.css'

const MyButton = ({text, onClick}) => {
  return <button onClick={onClick ? onClick : null} className={s.button}>{text}</button>
};

export default MyButton;
