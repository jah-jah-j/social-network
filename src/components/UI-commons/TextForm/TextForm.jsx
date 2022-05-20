import React from 'react';
import s from './TextForm.module.css';
import MyButton from '../MyButton/MyButton'

const TextForm = ({newText, updateNewTextValue, addNew, placeholder, btnName}) => {

  const send = (e) => {
    e.preventDefault()
    addNew()
  }

  const onChange = (e) => {
    let text = e.target.value
    updateNewTextValue(text)
  }

  return (
    <form onSubmit={send} className={s.textForm}>
      <textarea onChange={onChange} className={s.textarea} placeholder={placeholder} value={newText}/>
      <MyButton text={btnName}/>
    </form>
  );
};

export default TextForm;
