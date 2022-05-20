import * as types from './types'

const initialState = {
  profile: null,
  posts: [
    {
      id: 1,
      message: 'Вы не готовы!!!',
      likes: 10,
      avatar: 'https://cdn.caracter.ru/images/thumbnails/1117/1117/detailed/11/maska-illidan-19434.jpg'
    },
    {
      id: 2,
      message: 'Я получил истинную силу',
      likes: 15,
      avatar: 'https://cdn.caracter.ru/images/thumbnails/1117/1117/detailed/11/maska-illidan-19434.jpg'
    },
    {
      id: 3,
      message: 'Спасибо за всё',
      likes: 20,
      avatar: 'https://cdn.caracter.ru/images/thumbnails/1117/1117/detailed/11/maska-illidan-19434.jpg'
    },
    {
      id: 4,
      message: 'Круто, ты лучший',
      likes: 30,
      avatar: 'https://no-muggles.ru/wp-content/uploads/2019/12/%D0%98%D0%BB%D0%BB%D0%B8%D0%B4%D0%B0%D0%BD02.jpg'
    },
    {
      id: 5,
      message: 'Мой первый пост',
      likes: 12,
      avatar: 'https://no-muggles.ru/wp-content/uploads/2019/12/%D0%98%D0%BB%D0%BB%D0%B8%D0%B4%D0%B0%D0%BD02.jpg'
    },
  ],
  newPostText: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_POST:
      const newPost = {
        id: state.posts.length + 1,
        message: state.newPostText,
        likes: 0,
        avatar: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }

    case types.UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }

    case types.SET_PROFILE:

      return {
        ...state,
        profile: action.profile
      }

    default:
      return state;
  }
};

export default reducer;
