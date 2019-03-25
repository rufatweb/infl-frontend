import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, Avatar, Button, Typography} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const styles = {
  root: {
    width: 300,
    height: 300
  },
  card: {
    margin: 10,
    padding: 18,
    textAlign: 'center',
  },
  bigAvatar: {
   margin: 'auto',
   width: 70,
   height: 70,
 },
};

class UserCard extends React.Component {



  render() {
    const { classes, user } = this.props;
  return (
    <div className={classes.root}>
    <Card square={false} className={classes.card}>
      <CardActionArea >
        <Avatar
          className={classes.bigAvatar}
          src={`${user.imgUrl}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {user.username}
          </Typography>
          <Typography component="h3">
            {user.title} <p></p> {user.location}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/${user.username}`}><Button onClick={() => this.props.handleProfile(user)} size="small" color="primary">
          See Profile
        </Button></Link>
      </CardActions>
    </Card>

    <p></p>
    </div>

  );
}
}

UserCard.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(UserCard);
