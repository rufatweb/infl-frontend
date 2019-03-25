import React from 'react'
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile'
import { Avatar, Menu, MenuItem, Button} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
const styles = {
  avatar: {
    margin: 10
  }
};


class NavBar extends React.Component {
  state = {
      anchorEl: null,
    };

    handleClick = event => {
      this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
      this.setState({ anchorEl: null });
    };


render() {
  const { anchorEl } = this.state;
  const { classes, user } = this.props;
  if (user) {
    return (
      <div className='navbar'>
      <Button
            aria-owns={anchorEl ? 'simple-menu' : undefined}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            Menu
          </Button>
          <Menu
           id="simple-menu"
           anchorEl={anchorEl}
           open={Boolean(anchorEl)}
           onClose={this.handleClose}
         >
        <Link to={`/${user.username}`}><MenuItem  onClick={(e) => {this.props.handleProfile(user); this.handleClose(e)}} ><Avatar alt="user" src={`${user.imgUrl}`} className={classes.avatar} />My Profile</MenuItem></Link>
      <Link to="/influencers"><MenuItem onClick={this.handleClose}>Influencers</MenuItem></Link>
      <Link to="/photographers"><MenuItem onClick={this.handleClose}>Photographers</MenuItem></Link>
      <Link to="/"><MenuItem onClick={this.handleClose}>Home</MenuItem></Link>
      <Link to="/"><MenuItem onClick={this.props.logOut}>Log Out</MenuItem></Link>)
      </Menu>
   </div>
 )
} else {
  return (
    <div className='navbar'>
    <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Menu
        </Button>
        <Menu
         id="simple-menu"
         anchorEl={anchorEl}
         open={Boolean(anchorEl)}
         onClose={this.handleClose}
       >
       <Link to="/"><MenuItem onClick={this.handleClose}>Home</MenuItem></Link>
       <Link to="/influencers"><MenuItem onClick={this.handleClose}>Influencers</MenuItem></Link>
       <Link to="/photographers"><MenuItem onClick={this.handleClose}>Photographers</MenuItem></Link>
       <Link to="/log-in"><MenuItem onClick={this.handleClose}>Log In</MenuItem></Link>
    </Menu>
 </div>
)

 }
}
}

export default withStyles(styles)(NavBar);
