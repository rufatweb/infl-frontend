import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {
  render () {
    return (

    <div className='user-profile'>
      Profile of {this.props.user.username}
    </div>
   )
  }
}

export default UserProfile;
