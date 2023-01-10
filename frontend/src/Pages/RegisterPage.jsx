import React from 'react'
import { useState, useEffect } from 'react'

import {  useDispatch, useSelector } from 'react-redux'
import {fetchUserReq} from '../Redux/user/action'

import axios from 'axios'

const RegisterPage = () => {

  const dispatch = useDispatch();

  const [email,setEmail] = useState('')
  const [name,setName] = useState('')

  const [password,setPassword] = useState('')
  const user = useSelector(state=>state.user)

  useEffect(()=>{
    if(user){
        window.location.replace('/')
    }
  },[user])

  const handleLogin = async(e)=>{
      e.preventDefault();
      console.log(email,password)
      if(password.length < 6){
        window.alert('password must be atleast of lenght 6')
      }
      const body = {
        email,
        password,
        name
      }
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      try{
      const {data, statusText} = await axios.post('http://localhost:5000/register', body, config )
      console.log(statusText)
      if(statusText === 'Created'){
        console.log("hell0")
        localStorage.setItem('userDetails', JSON.stringify(data))
        dispatch(fetchUserReq(data));
        window.location.replace('/')
        

      }
      else{
            window.alert("Invalid data")
      }
    }
    catch{
        window.alert("Invalid data")

    }
}

  return (
    <div className="card-container">
          <div className='circle'></div>
          <div className='circle'></div>
           <h1>Register</h1>  
            <form>
                <div className='input-holder'>
                <label htmlFor='name'>Name</label>
                <input type="text" id="name" name="name" onChange={(e)=>setName(e.target.value)} value={name}/>
                </div>
                <div className='input-holder'>
                <label htmlFor='email'>Email</label>
                <input type="email" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                </div>
                <div className='input-holder'>
                <label htmlFor='password'>password</label>
                <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                </div>
                <button onClick={handleLogin}>Register</button>

            </form>
    </div>
    
  )
}

export default RegisterPage