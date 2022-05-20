const initialState = {
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
};

const reducer = (state = initialState, action) => {

  return state;
};

export default reducer;
