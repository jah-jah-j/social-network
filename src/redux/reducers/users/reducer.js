const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_PAGES';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

const initialState = {
  users: [],
  pageSize: 4,
  totalPages: 0,
  currentPage: 1,
  isFetching: true,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {

    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, isFollow: true};
          }
          return u;
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, isFollow: false};
          }
          return u;
        })
      }

    case SET_USERS:
      return {...state, users: action.users};

    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.current};

    case SET_TOTAL_COUNT:
      return {...state, totalPages: action.totalNum};

    case SET_IS_FETCHING:
      return {...state, isFetching: action.isFetching};

    default:
      return state;
  }
};

export const followAC = userId => ({type: FOLLOW, userId});
export const unfollowAC = userId => ({type: UNFOLLOW, userId});
export const setUsersAC = users => ({type: SET_USERS, users});
export const setCurrentPageAC = current => ({type: SET_CURRENT_PAGE, current});
export const setTotalCountAC = totalNum => ({type: SET_TOTAL_COUNT, totalNum});
export const setIsFetchingAC = isFetching => ({type: SET_IS_FETCHING, isFetching});

export default usersReducer;
