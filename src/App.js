import './App.css';
import Header from './components/UI/Header/Header'
import Sidebar from './components/UI/Sidebar/Sidebar'
import ProfilePage from './components/UI/Pages/Profile/ProfilePage'

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <ProfilePage/>
    </div>
  );
}

export default App;
