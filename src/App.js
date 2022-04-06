import './App.css';
import Headers from './components/Headers';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

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
