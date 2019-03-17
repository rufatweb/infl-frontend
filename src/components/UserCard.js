import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, Avatar, Button, Typography, Grid} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
  root: {
    width: 300,
    height: 300
  },
  card: {
    margin: 10,
    padding: 18
  },
  bigAvatar: {
   margin: 'auto',
   width: 70,
   height: 70,
 },
};

const UserCard = (props) => {
  console.log(props)
  const { classes, user } = props;
  return (
    <div className={classes.root}>
    <Card square={false} className={classes.card}>
      <CardActionArea >
        <Avatar
          className={classes.bigAvatar}
          src="https://i.pinimg.com/236x/ed/bc/ef/edbceff5b8e2c33a3c78db336b81eac7--camera-photography-white-photography.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {user.username}
          </Typography>
          <Typography component="h3">
            {user.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          See Profile
        </Button>
      </CardActions>
    </Card>

    <p></p>
    </div>

  );
}

UserCard.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(UserCard);
