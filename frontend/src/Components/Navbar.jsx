import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchUserReq} from '../Redux/user/action'

const Navbar = () => {
    
    const user = useSelector(state=>state.user);
    const dispatch = useDispatch()
    console.log(user)
    const handleLogout =(e)=>{
        e.preventDefault();
        localStorage.removeItem('userDetails');
        dispatch(fetchUserReq(null))
        window.location.replace('/login')


    }
    
    
  return (
    <nav>
        {
        !user ?    
        (<div className='user-actions'><div> <Link style={{color:"wheat", textDecoration:"none"}} to={'/login'}>Login</Link> </div>
        <div> <Link to={'/register'} style={{color:"wheat", textDecoration:"none"}}> Register</Link></div> </div>) :
       (<div className='user-details'> <div>Home</div>
            <div onClick={handleLogout}> Logout</div></div>)

}    
</nav>
  )
}

export default Navbar