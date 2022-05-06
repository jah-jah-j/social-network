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

const App = (props) => {

  return (
    <div className="app">
      <Header/>
      <Navbar state={props.state.sidebar.links}/>
      <div className="app-content">
        <Routes>
          <Route index path="/*" element={<Profile state={props.state.profilePage}
                                                   store={props.store}/>}
          />
          <Route path="dialogs/*" element={<DialogsContainer store={props.store}/>}
          />
          <Route path="feed" element={<Feed/>}/>
          <Route path="music" element={<Music/>}/>
          <Route path="friends" element={<Friends state={props.state.sidebar.friends}/>}/>
          <Route path="settings" element={<Settings/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
