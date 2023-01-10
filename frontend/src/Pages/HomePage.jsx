import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'


const HomePage = () => {
    const user = useSelector(state=> state.user)
    useEffect(()=>{
        const user = localStorage.getItem('userDetails');
        console.log(user)
        if(!user){
            window.location.replace('/login')
        }
    },[])
  return (
    <div className='home'>Hello, {user && user.email} Welcome to our Page</div>
  )
}

export default HomePage