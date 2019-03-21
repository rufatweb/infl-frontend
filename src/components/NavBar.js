import React from 'react'
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile'
import { Card, CardActionArea, CardActions, CardContent, Avatar, Button, Typography} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
const styles = {
  avatar: {
    margin: 10
  }
};


const NavBar = (props) => {
const { classes, user } = props;

  return (
    <div className='navbar'>
    <ul>
    {(user) ? <Link to="/my_profile"><li><Avatar alt="user" src={`${user.imgUrl}`} className={classes.avatar} /></li></Link> : null}
    <Link to="/influencers"><li>Influencers</li></Link>
    <Link to="/photographers"><li>Photographers</li></Link>
     <Link to="/sign-up"><li>Sign Up</li></Link>
     <Link to="/log-in"><li>Log In</li></Link>
     <Link to="/"><li>Home</li></Link>
     <li onClick={props.logOut}>Log Out</li>
     </ul>
  </div>
)
}

export default withStyles(styles)(NavBar);
