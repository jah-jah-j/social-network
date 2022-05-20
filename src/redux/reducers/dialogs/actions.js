import * as types from './types'

export const addMessage = () => ({type: types.ADD_MESSAGE});
export const updateNewMessage = messageBody =>
  ({type: types.UPDATE_NEW_MESSAGE_TEXT, newText: messageBody});
