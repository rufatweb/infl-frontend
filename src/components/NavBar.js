import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';

const NavBar = (props) => {


  return (
    <div className='navbar'>
    <ul>
    <Link to="/"><li>Home</li></Link>
    <Link to="/influencers"><li>Influencers</li></Link>
    <Link to="/photographers"><li>Photographers</li></Link>
     <Link to="/sign-up"><li>Sign Up</li></Link>
     <Link to="/log-in"><li>Log In</li></Link>
     <li onClick={props.logOut}>Log Out</li>
     </ul>
  </div>
)
}

export default NavBar;
