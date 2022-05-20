import * as types from './types'

const initialState = {
  email: null,
  userId: null,
  login: null,
  isAuth: false,
  isFetching: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case types.SET_AUTH_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
        isFetching: false
      }

    case types.SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };

    default:
      return state;
  }
};

export default reducer;
