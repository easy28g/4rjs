import './App.css';
import Headers from './components/Headers/Headers';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className='app-wrapper'>
        <Headers />
        <Navbar />
        <Profile />
    </div>
  );
}

export default App;
