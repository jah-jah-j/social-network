import React from 'react';
import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import TextForm from '../../../UI-commons/TextForm/TextForm'


const Dialogs = ({onUpdateMessage, onAddMessage, state}) => {

  const dialogItems = state.dialogs
    .map(dialog => <Dialog state={dialog} key={dialog.id}/>)

  const messagesItems = state.messages
    .map(message => <Message state={message} key={message.id}/>)

  const updateNewMessage = (newText) => {
    onUpdateMessage(newText)
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
            addNew={onAddMessage}
            placeholder="Write your message..."
            btnName="Send message"
            updateNewTextValue={updateNewMessage}
            newText={state.newMessageText}
          />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
