import * as types from './types'


const initialState = {
  users: [],
  pageSize: 4,
  totalPages: 0,
  currentPage: 1,
  isFetching: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case types.FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, isFollow: true};
          }
          return u;
        })
      }

    case types.UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, isFollow: false};
          }
          return u;
        })
      }

    case types.SET_USERS:
      return {...state, users: action.users};

    case types.SET_CURRENT_PAGE:
      return {...state, currentPage: action.current};

    case types.SET_TOTAL_COUNT:
      return {...state, totalPages: action.totalNum};

    case types.SET_IS_FETCHING:
      return {...state, isFetching: action.isFetching};

    default:
      return state;
  }
};

export default reducer;
