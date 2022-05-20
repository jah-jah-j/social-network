const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {
  dialogs: [
    {
      id: 1, name: 'Illdian',
      avatar: 'https://i.guim.co.uk/img/media/35d054f84a7fa5f7e7180353158bb00e0cc19566/0_103_3000_1800/master/3000.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=057da8f162bcddb77c9bb8d8cca1aa40'
    },
    {
      id: 2, name: 'Arthas',
      avatar: 'https://m3.healio.com/~/media/slack-news/infectious-disease/misc/infographics/2021/12_december/idn1221teres_graphic_01_web.jpg'
    },
    {
      id: 3, name: 'Malfurion',
      avatar: 'https://www.cbc.ca/kids/images/chinaanimals_header.jpg'
    },
    {
      id: 4, name: 'Tiranda',
      avatar: 'https://aldf.org/wp-content/uploads/2018/05/lamb-iStock-665494268-16x9-e1559777676675.jpg'
    },
    {
      id: 5, name: 'Kil\'Jedan',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgLalL8uhMRLwNiaLkgpD-TG89-t4hhaCMTLAujv7nTyAGhWIx1jrcCU1pFVxgyCmaDtI&usqp=CAU'
    },
  ],
  messages: [
    {id: 1, message: 'Ты не готов!', isMe: false},
    {id: 2, message: 'Я получил истинную силу', isMe: true},
    {id: 3, message: 'Иллидан предатель', isMe: false},
    {id: 4, message: 'Привет, герой', isMe: false},
    {id: 5, message: 'Тьма победит', isMe: true},
  ],
  newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        id: state.messages.length + 1,
        message: state.newMessageText,
        isMe: true
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: ''
      }

    case UPDATE_NEW_MESSAGE_TEXT:
      return  {
        ...state,
        newMessageText: action.newText
      }

    default:
      return state;
  }
};


export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageActionCreator = messageBody =>
  ({type: UPDATE_NEW_MESSAGE_TEXT, newText: messageBody});

export default dialogsReducer;
