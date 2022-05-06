import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from '../../../../redux/reducers/dialogsReducer'
import Dialogs from './Dialogs'


const DialogsContainer = (props) => {

  const updateNewMessage = (newText) => {
    props.store.dispatch(updateNewMessageActionCreator(newText))
  }

  const addMessage = () => {
    props.store.dispatch(addMessageActionCreator())
  }

  return <Dialogs onAddMessage={addMessage} onUpdateMessage={updateNewMessage}
                  state={props.store.getState().dialogsPage}/>
};

export default DialogsContainer;
