import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  img: {
    height: 300,
    width: 300

  }
}


class UserProfile extends React.Component {
  render () {
    const { user, classes } = this.props
    return (

    <div className='user-profile'>
      <img className={classes.img} src={`${user.imgUrl}`} alt={`${user.username}`} />
      <p></p>
       <h2>{user.username}</h2>
       <p></p>
       <p>{user.bio}</p>
    </div>
   )
  }
}

export default withStyles(styles)(UserProfile);
