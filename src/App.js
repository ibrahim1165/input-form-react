import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Phone from './Components/Phone'
import Email from './Components/Email'
import User from './Components/User'
import Location from './Components/Location'
import Nav from './Components/Shared/Nav';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
      <Route path="/" element={<Phone />}></Route>
      <Route path="/phone" element={<Phone />}></Route>
      <Route path="/email" element={<Email />}></Route>
      <Route path="/user" element={<User />}></Route>
      <Route path="/location" element={<Location />}></Route>
      </Routes>
     
      
    </div>
  );
}

export default App;
