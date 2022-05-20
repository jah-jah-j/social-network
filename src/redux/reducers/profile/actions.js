import * as types from './types'
import * as profileAPI from '../../../API/profileAPI'

export const onPostAdd = () => ({type: types.ADD_POST});
export const onUpdateNewPost = postBody =>
  ({type: types.UPDATE_NEW_POST_TEXT, newText: postBody});

export const setProfile = (profileID) => async (dispatch) => {
  try {
    const profile = await profileAPI.getProfile(profileID)
    dispatch({type: types.SET_PROFILE, profile: profile.data})
  } catch {
    dispatch({type: types.SET_PROFILE, profile: null})
  }
}
