import './App.css';
import Header from './components/UI/Header/Header'
import Navbar from './components/UI/Navbar/Navbar'
import Profile from './components/UI/Pages/Profile/Profile'
import {Route, Routes} from 'react-router-dom'
import Settings from './components/UI/Pages/Settings/Settings'
import Music from './components/UI/Pages/Music/Music'
import Feed from './components/UI/Pages/Feed/Feed'
import Friends from './components/UI/Pages/Friends/Friends'
import DialogsContainer from './components/UI/Pages/Dialogs/DialogsContainer'
import UsersContainer from './components/UI/Pages/Users/UsersContainer'
import ProfileContainer from './components/UI/Pages/Profile/ProfileContainer'
import HeaderContainer from './components/UI/Header/HeaderContainer'

const App = ({state}) => {

  return (
    <div className="app">
      <HeaderContainer/>
      <Navbar state={state.sidebar.links}/>
      <div className="app-content">
        <Routes>
          <Route path="profile/*" element={<ProfileContainer />}/>
          <Route path="profile/:userId" element={<ProfileContainer />}/>
          <Route path="dialogs/*" element={<DialogsContainer/>}
          />
          <Route path="feed" element={<Feed/>}/>
          <Route path="music" element={<Music/>}/>
          <Route path="friends" element={<Friends state={state.friends}/>}/>
          <Route path="users" element={<UsersContainer/>}/>
          <Route path="settings" element={<Settings/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
