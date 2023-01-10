import './App.css';
import Navbar from './Components/Navbar';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserReq } from './Redux/user/action';
import RegisterPage from './Pages/RegisterPage';
function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    let userDetails = localStorage.getItem('userDetails');
    if(userDetails){
      dispatch(fetchUserReq(JSON.parse(userDetails)))
    }
  },[dispatch])
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path= "/" element={<HomePage />}/>
        <Route path= "login" element={<LoginPage />}/>
        <Route path= "/register" element={<RegisterPage />}/>

      </Routes>
      </Router>
    </div>
  );
}

export default App;
