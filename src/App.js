import './App.css';
import Headers from './components/Headers/Headers';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter , Route , Routes } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>

    <div className='app-wrapper'>

        <Headers />
        <Navbar />

        <div className='app-wrapper-content'>
       
         <Routes>
           <Route path='/dialogs/*' element={<Dialogs mess={props.state.dialogsPage.messagesData} dio={props.state.dialogsPage.dialogsData}/>} />
           <Route path='/profile' element={<Profile posts={props.state.profilePage.postsData}/>} />
           <Route path='/news' element={<News/>} />
           <Route path='/musics' element={<Music/>} />
           <Route path='/settings' element={<Settings/>} />
         </Routes>
      
        </div>
        
    </div>

    </BrowserRouter>
  );
}

export default App;
