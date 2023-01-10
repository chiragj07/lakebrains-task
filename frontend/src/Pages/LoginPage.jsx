import React from 'react'
import { useState, useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import {fetchUserReq} from '../Redux/user/action'

import axios from 'axios'

const LoginPage = () => {

  const dispatch = useDispatch();

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const user = useSelector(state=>state.user)

  useEffect(()=>{
    console.log(user)
    if(user != null){
      console.log("hellp")
      window.location.replace('/')

    }
  },[user])

  const handleLogin = async(e)=>{
      e.preventDefault();
      console.log(email,password)
      const body = {
        email,
        password
      }
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      try{
      const data = await axios.post('http://localhost:5000/login', body, config )
      console.log(data)

      if(data && data.statusText === 'OK'){
        localStorage.setItem('userDetails', JSON.stringify(data))
        dispatch(fetchUserReq(data))
        window.location.replace('/')

      }
      else{
          window.alert("Invalid Email Or Password")
      }
    }
    catch{
      window.alert("Invalid Email Or Password")

    }

  }

  return (
    <div className="card-container">
          <div className='circle'></div>
          <div className='circle'></div>
           <h1>Login</h1>  
            <form>
                <div className='input-holder'>
                <label htmlFor='email'>Email</label>
                <input type="email" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                </div>
                <div className='input-holder'>
                <label htmlFor='password'>password</label>
                <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                </div>
                <button onClick={handleLogin}>Login</button>

            </form>
    </div>
    
  )
}

export default LoginPage