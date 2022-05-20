import React from 'react';
import s from './TextForm.module.css';
import MyButton from '../../UI-commons/MyButton/MyButton'

const TextForm = (props) => {

  const send = (e) => {
    e.preventDefault()
    props.addNew()
  }

  const onChange = (e) => {
    let text = e.target.value
    props.updateNewTextValue(text)
  }

  return (
    <form onSubmit={send} className={s.textForm}>
      <textarea onChange={onChange} className={s.textarea} placeholder={props.placeholder} value={props.newText}/>
      <MyButton text={props.btnName}/>
    </form>
  );
};

export default TextForm;
