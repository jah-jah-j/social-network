import {combineReducers, createStore} from 'redux';
import profileReducer from './reducers/profileReducer';
import dialogsReducer from './reducers/dialogsReducer';
import sidebarReducer from './reducers/sidebarReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
});

let store = createStore(reducers);

export default store;
