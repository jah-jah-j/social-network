import * as types from './types'
import * as authAPI from '../../../API/authAPI'

export const setIsFetching = (isFetching) => ({type: types.SET_IS_FETCHING, isFetching: isFetching});

export const setAuthData = () => async (dispatch) => {
  try {
    dispatch(setIsFetching(true))
    const response = await authAPI.getAuthData()
    if (response.data.resultCode === 0) {
      const {email, id, login} = response.data.data
      dispatch({type: types.SET_AUTH_DATA, data: {email, id, login}})
    } else {
      dispatch(setIsFetching(false))
    }
  } catch {
    dispatch({type: types.SET_AUTH_DATA, data: null})
  }
}




