import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import {useState, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom';
import { auth } from "./firebase";
import RoomPage from './Pages/Room';
import About from './Pages/About/home';
import HomePage from './Pages/Home/index'
import CreateRoom from './Pages/CreateRoom/CreateRoom'
import Firstpage from './Pages/FirstPage/FirstPage'
import SignIn from './Components/SignIn/Signin'
import SignUp from './Components/SignUp/SignUp'

function App() {
  const [userName, setUserName] = useState("");
  const uuid = () => {
    // const [roomId, setroomId] = useState({roomCode})
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    );
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Firstpage />} />
        <Route path='/joinroom' element={<HomePage />} />
        {/* <Route path='/createroom' element={<CreateRoom />} /> */}
        <Route path='/home' element={<About />}></Route>
        <Route path='/login' element={<SignIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/createRoom' element={<CreateRoom uuid = {uuid}/>} />
        <Route path='/room/:roomId' element={<RoomPage />} />
      </Routes>

    </div>
  );
}

export default App;
