import {applyMiddleware, combineReducers, createStore} from 'redux';
import {usersReducer} from './reducers/users'
import {sidebarReducer} from './reducers/sidebar'
import {profileReducer} from './reducers/profile'
import {friendsReducer} from './reducers/friends'
import {dialogsReducer} from './reducers/dialogs'
import thunk from 'redux-thunk'
import {authReducer} from './reducers/auth'

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  friends: friendsReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
