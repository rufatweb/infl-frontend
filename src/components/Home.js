import React from 'react'
import ReactDOM from 'react-dom'


const Home = (props) => {

    return (
      <div className='home'>
      Home
      <ul>
       <li onClick={props.logOut}>Log Out</li>
       </ul>
    </div>
  )
}

export default Home;
