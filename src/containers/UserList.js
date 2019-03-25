import React from 'react'
import UserCard from '../components/UserCard'
import {GridList, GridListTile, ListSubheader, Grid} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  }
});

class UserList extends React.Component {






  render () {
    const { classes, users } = this.props;

  let listUsers = users.map(user => <Grid key={user.id} item xs='auto'><UserCard handleProfile={this.props.handleProfile} key={user.id} user={user}/></Grid>)
    return (

    <div className={classes.root}>
    <Grid wrap='wrap' container>
        {listUsers}
        </Grid>
    </div>
  )
  }
}

UserList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserList);
