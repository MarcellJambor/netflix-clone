import { Routes, Route } from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Login from './components/Login';
import Movies from './components/Movies';
import Player from './components/Player';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/player/:id' element={<Player/>}/>
      </Routes>
    </div>
  );
}

export default App;
