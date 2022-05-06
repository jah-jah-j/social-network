import React from 'react';
import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import TextForm from '../../TextForm/TextForm'


const Dialogs = (props) => {

  const dialogItems = props.state.dialogs
    .map(dialog => <Dialog state={dialog} key={dialog.id}/>)

  const messagesItems = props.state.messages
    .map(message => <Message state={message} key={message.id}/>)

  const updateNewMessage = (newText) => {
    props.onUpdateMessage(newText)
  }

  return (
    <div className="container">
      <div className={s.dialogs}>
        <div className={s.dialogNames}>
          <h3 className={s.title}>Ваши диалоги:</h3>
          {dialogItems}
        </div>
        <div className={s.messages}>
          <h3 className={s.title}>Активная переписка:</h3>
          {messagesItems}
          <TextForm
            addNew={props.onAddMessage}
            placeholder="Write your message..."
            btnName="Send message"
            updateNewTextValue={updateNewMessage}
            newText={props.state.newMessageText}
          />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
