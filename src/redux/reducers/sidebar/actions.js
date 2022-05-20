import * as types from './types'

export const follow = userId => ({type: types.FOLLOW, userId});
export const unfollow = userId => ({type: types.UNFOLLOW, userId});
export const setUsers = users => ({type: types.SET_USERS, users});
export const setCurrentPage = current => ({type: types.SET_CURRENT_PAGE, current});
export const setTotalCount = totalNum => ({type: types.SET_TOTAL_COUNT, totalNum});
export const setIsFetching = isFetching => ({type: types.SET_IS_FETCHING, isFetching});
