import React from 'react';
import Dialogs from './Dialogs'
import {useSelector} from 'react-redux'
import {dialogsActions, dialogsSelectors} from '../../../../redux/reducers/dialogs'
import useActions from '../../../../Hooks/useActions'

const DialogsContainer = () => {
  const dialogsPageState = useSelector(dialogsSelectors.dialogs)
  const {addMessage, updateNewMessage} = useActions(dialogsActions)

  return <Dialogs onUpdateMessage={updateNewMessage}
                  onAddMessage={addMessage}
                  state={dialogsPageState}
  />
}

export default DialogsContainer;
