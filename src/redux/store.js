import reducer from './reducers/sidebar/reducer'

const store = {
  _state: {
    profilePage: {
      profile: fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.json()),
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
    },
    dialogsPage: {
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
    },
    sidebar: {
      links: [
        {
          id: 1, path: '/profile', linkName: 'Profile',
          icon: () => {
            return <svg fill="none" height="40" viewBox="0 0 20 20" width="40" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd"
                    d="M5.84 15.63a6.97 6.97 0 008.32 0 8.2 8.2 0 00-8.32 0zM4.7 14.57a7 7 0 1110.6 0 9.7 9.7 0 00-10.6 0zM10 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zm-1.5 7a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm1.5-3a3 3 0 100 6 3 3 0 000-6z"
                    fill="currentColor" fillRule="evenodd"></path>
            </svg>
          }
        },
        {
          id: 2, path: '/dialogs', linkName: 'Messages',
          icon: () => {
            return <svg width="40" height="40" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <g id="message_outline_20__Page-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="message_outline_20__message_outline_20">
                  <path id="message_outline_20__Shape" opacity=".4" d="M0 0h20v20H0z"></path>
                  <path
                    d="M6.83 15.75c.2-.23.53-.31.82-.2.81.3 1.7.45 2.6.45 3.77 0 6.75-2.7 6.75-6s-2.98-6-6.75-6S3.5 6.7 3.5 10c0 1.21.4 2.37 1.14 3.35.1.14.16.31.15.49-.04.76-.4 1.78-1.08 3.13 1.48-.11 2.5-.53 3.12-1.22zM3.24 18.5a1.2 1.2 0 01-1.1-1.77A10.77 10.77 0 003.26 14 7 7 0 012 10c0-4.17 3.68-7.5 8.25-7.5S18.5 5.83 18.5 10s-3.68 7.5-8.25 7.5c-.92 0-1.81-.13-2.66-.4-1 .89-2.46 1.34-4.35 1.4z"
                    id="message_outline_20__Icon-Color" fill="currentColor" fillRule="nonzero"></path>
                </g>
              </g>
            </svg>
          }
        },
        {
          id: 3, path: '/feed', linkName: 'News',
          icon: () => {
            return <svg fill="none" height="40" viewBox="0 0 20 20" width="40" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd"
                    d="M11.84 2H8.16c-.93 0-1.67 0-2.26.05-.62.05-1.15.15-1.63.4a4.15 4.15 0 00-1.82 1.82 4.26 4.26 0 00-.4 1.63C2 6.5 2 7.23 2 8.16v3.68c0 .93 0 1.67.05 2.26.05.62.15 1.15.4 1.63.4.78 1.04 1.42 1.82 1.82.48.25 1.01.35 1.63.4.6.05 1.33.05 2.26.05h3.68c.93 0 1.67 0 2.26-.05a4.26 4.26 0 001.63-.4 4.15 4.15 0 001.82-1.82c.25-.48.35-1.01.4-1.63.05-.6.05-1.33.05-2.26V8.16c0-.93 0-1.67-.05-2.26a4.26 4.26 0 00-.4-1.63 4.15 4.15 0 00-1.82-1.82 4.26 4.26 0 00-1.63-.4C13.5 2 12.77 2 11.84 2zm-6.9 1.79c.25-.12.56-.2 1.08-.25.53-.04 1.2-.04 2.17-.04h3.62c.96 0 1.64 0 2.17.04.52.05.83.13 1.07.25.5.25.9.66 1.16 1.16.12.24.2.55.25 1.07l.02.48H3.52l.02-.48c.05-.52.13-.83.25-1.07.25-.5.66-.9 1.16-1.16zM3.5 8v3.81c0 .96 0 1.64.04 2.17.05.52.13.83.25 1.07.25.5.66.9 1.16 1.16.24.12.55.2 1.07.25.53.04 1.2.04 2.17.04h3.62c.96 0 1.64 0 2.17-.04a2.8 2.8 0 001.07-.25c.5-.25.9-.66 1.16-1.16.12-.24.2-.55.25-1.07.04-.53.04-1.2.04-2.17V8.19 8z"
                    fill="currentColor" fillRule="evenodd"></path>
            </svg>
          }
        },
        {
          id: 4, path: '/music', linkName: 'Music',
          icon: () => {
            return <svg fill="none" height="40" viewBox="0 0 20 20" width="40" xmlns="http://www.w3.org/2000/svg">
              <g clipRule="evenodd" fill="currentColor" fillRule="evenodd">
                <path
                  d="M5.7 7.97a1.48 1.48 0 011.95-1.13c1.25.45 2.39 1.15 3.35 2.03.67.6.67 1.66 0 2.26-.96.88-2.1 1.58-3.34 2.03a1.48 1.48 0 01-1.96-1.13 10.49 10.49 0 010-4.06zm1.47.29A8.54 8.54 0 0110 10.02h-.01a8.54 8.54 0 01-2.82 1.72 8.99 8.99 0 010-3.48z"></path>
                <path
                  d="M7.08 18h5.84c1.77 0 2.42-.18 3.07-.53A3.57 3.57 0 0017.47 16c.35-.65.53-1.3.53-3.07V7.08c0-1.77-.18-2.42-.53-3.07A3.57 3.57 0 0016 2.53c-.65-.35-1.3-.53-3.07-.53H7.08c-1.77 0-2.42.18-3.07.53-.64.34-1.14.84-1.48 1.48-.35.65-.53 1.3-.53 3.07v5.84c0 1.77.18 2.42.53 3.07.34.64.84 1.14 1.48 1.48.65.35 1.3.53 3.07.53zm4.04-14.46c-.5-.04-1.15-.04-2.07-.04H7.08c-1.66 0-2.02.17-2.36.35-.38.2-.67.5-.87.87-.18.34-.35.7-.35 2.36v5.84c0 1.66.17 2.02.35 2.36.2.38.5.67.87.87.34.18.7.35 2.36.35h1.97c.92 0 1.57 0 2.07-.04.5-.04.8-.12 1.01-.23a2.5 2.5 0 001.1-1.1c.11-.22.19-.51.23-1 .04-.51.04-1.16.04-2.08v-4.1c0-.92 0-1.57-.04-2.07-.04-.5-.12-.8-.23-1.01a2.5 2.5 0 00-1.1-1.1 2.65 2.65 0 00-1-.23zm4.16 12.61c-.23.12-.47.24-1.12.3a4 4 0 00.4-.63c.24-.47.35-.99.4-1.57.04-.58.04-1.28.04-2.17V7.92c0-.88 0-1.6-.05-2.17a4.1 4.1 0 00-.39-1.57 4 4 0 00-.4-.63c.65.06.89.18 1.12.3.38.2.67.5.87.87.18.34.35.7.35 2.36v5.84c0 1.66-.17 2.02-.35 2.36-.2.38-.5.67-.87.87z"></path>
              </g>
            </svg>
          }
        },
        {
          id: 5, path: '/friends', linkName: 'Friends',
          icon: () => {
            return <svg fill="none" height="40" viewBox="0 0 20 20" width="40" xmlns="http://www.w3.org/2000/svg">
              <g fill="currentColor">
                <g clipRule="evenodd" fillRule="evenodd">
                  <path
                    d="M6.25 3.5a3 3 0 100 6 3 3 0 000-6zm-1.5 3a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM2.69 11.57c.96-.55 2.22-.82 3.56-.82s2.6.27 3.56.82c.98.56 1.69 1.47 1.69 2.68 0 .7-.28 1.3-.78 1.71-.48.39-1.1.54-1.72.54H3.5c-.61 0-1.24-.15-1.72-.54-.5-.4-.78-1-.78-1.71 0-1.21.71-2.12 1.69-2.68zm.75 1.3c-.65.37-.94.84-.94 1.38 0 .3.1.44.22.54.14.11.4.21.78.21H9c.39 0 .64-.1.78-.21.12-.1.22-.25.22-.54 0-.54-.29-1-.94-1.38-.66-.39-1.65-.62-2.81-.62s-2.15.23-2.81.62zM13.75 3.5a3 3 0 100 6 3 3 0 000-6zm-1.5 3a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z"></path>
                </g>
                <path
                  d="M13.75 12.25c-.23 0-.45.01-.68.03a.75.75 0 11-.14-1.49c.27-.03.54-.04.82-.04 1.34 0 2.6.27 3.56.82.98.56 1.69 1.47 1.69 2.68 0 .7-.28 1.3-.78 1.71-.48.39-1.1.54-1.72.54h-3a.75.75 0 010-1.5h3c.39 0 .64-.1.78-.21.12-.1.22-.25.22-.54 0-.54-.29-1-.94-1.38a5.77 5.77 0 00-2.81-.62z"></path>
              </g>
            </svg>
          }
        },
        {
          id: 6, path: '/settings', linkName: 'Settings', isSettings: true,
          icon: () => {
            return <svg fill="none" height="40" viewBox="0 0 20 20" width="40" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.6 2c.98.03 1.63.58 1.96 1.6l.06.18.04.15.06.2.04.13.03.01.06-.02.1-.04.13-.06c1.16-.53 2.05-.43 2.78.36l.1.12.67.83c.6.8.58 1.63 0 2.54l-.1.15-.1.14-.12.16-.05.1-.03.04v.02l.08.05.1.06.13.07c1.13.58 1.6 1.35 1.42 2.4l-.03.16-.2.87c-.13.56-.23.82-.63 1.19-.39.35-.83.5-1.42.55h-.18l-.16.01-.2.01-.15.02.01.12.01.08.03.14c.26 1.25-.03 2.1-.97 2.62l-.14.08-.96.47c-.9.4-1.72.2-2.48-.58l-.12-.13-.11-.13-.14-.15-.08-.08-.04-.04-.07.08-.09.08-.1.11c-.78.93-1.6 1.27-2.6.88L7 17.49l-.86-.42-.26-.13c-.39-.22-.6-.42-.82-.87a2.38 2.38 0 01-.13-1.54l.03-.19.04-.2L5 14 4.93 14l-.12-.01h-.15c-1.27-.03-2.03-.51-2.33-1.55l-.04-.15-.24-1.04c-.2-.97.2-1.72 1.11-2.28l.16-.1.15-.07.17-.1.13-.08v-.02l-.05-.08-.06-.1-.09-.12c-.76-1.02-.85-1.92-.22-2.8l.1-.12.67-.83c.64-.75 1.47-.9 2.48-.52l.17.07.15.06.18.08.11.04.03-.01.03-.08.04-.11.03-.14c.3-1.17.9-1.83 1.96-1.92L9.46 2zm-.05 1.47h-1.1l-.1.01c-.24.03-.4.16-.54.68l-.04.13-.04.17c-.09.29-.22.61-.39.93a4.8 4.8 0 00-.94.46 5.28 5.28 0 01-.95-.29l-.28-.13c-.2-.08-.36-.13-.48-.14h-.07a.45.45 0 00-.33.16l-.06.06-.64.8-.08.1c-.15.21-.17.4.16.88l.18.25c.18.26.35.57.5.9-.11.32-.19.65-.23.99a5.3 5.3 0 01-.83.6l-.28.14c-.5.28-.57.46-.53.72l.01.06.23 1 .04.13c.07.25.21.39.79.41l.32.02c.3.01.65.07 1 .16.18.29.4.55.63.8.02.43-.02.85-.1 1.18-.16.78 0 .9.32 1.06l.92.45c.1.05.19.07.28.07h.05c.15-.02.32-.13.55-.4l.21-.24c.21-.23.48-.47.78-.68l.24.01h.5l.24-.02c.3.22.57.46.78.69l.21.24c.27.3.44.4.6.4h.06c.05 0 .1-.02.14-.04l.08-.03.92-.45.12-.06c.24-.14.34-.32.2-1a5.07 5.07 0 01-.1-1.18c.24-.25.45-.51.64-.8.34-.1.7-.15 1-.16l.31-.02c.67-.03.75-.2.83-.54l.22-.93c.07-.33.07-.53-.5-.85l-.29-.15a5.26 5.26 0 01-.83-.59 4.87 4.87 0 00-.22-.98c.14-.34.32-.65.49-.9l.19-.26c.33-.48.3-.67.16-.88l-.04-.06-.65-.8c-.11-.13-.2-.23-.37-.26h-.06c-.13 0-.3.04-.54.14l-.3.13c-.27.11-.6.22-.94.28-.3-.18-.61-.33-.94-.45-.16-.3-.29-.62-.37-.9l-.1-.33c-.15-.56-.32-.66-.58-.68zM10 6.9a3.11 3.11 0 110 6.23 3.11 3.11 0 010-6.23zm0 1.48a1.64 1.64 0 100 3.27 1.64 1.64 0 000-3.27z"
                fill="currentColor"></path>
            </svg>
          }
        },
      ],
      friends: [
        {
          id: 1, name: 'Illdian', isOnline: true,
          avatar: 'https://i.guim.co.uk/img/media/35d054f84a7fa5f7e7180353158bb00e0cc19566/0_103_3000_1800/master/3000.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=057da8f162bcddb77c9bb8d8cca1aa40'
        },
        {
          id: 2, name: 'Arthas', isOnline: true,
          avatar: 'https://m3.healio.com/~/media/slack-news/infectious-disease/misc/infographics/2021/12_december/idn1221teres_graphic_01_web.jpg'
        },
        {
          id: 3, name: 'Malfurion', isOnline: false,
          avatar: 'https://www.cbc.ca/kids/images/chinaanimals_header.jpg'
        },
        {
          id: 4, name: 'Tiranda', isOnline: false,
          avatar: 'https://aldf.org/wp-content/uploads/2018/05/lamb-iStock-665494268-16x9-e1559777676675.jpg'
        },
        {
          id: 5, name: 'Kil\'Jedan', isOnline: true,
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgLalL8uhMRLwNiaLkgpD-TG89-t4hhaCMTLAujv7nTyAGhWIx1jrcCU1pFVxgyCmaDtI&usqp=CAU'
        },
      ]
    },
  },
  _subscriber() {
    console.log('no subscribers');
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._subscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = reducer(this._state.profilePage, action);
    this._state.dialogsPage = reducer(this._state.dialogsPage, action);
    this._state.sidebar = reducer(this._state.sidebar, action);

    this._subscriber(this);
  }
}


window.store = store;
export default store;
