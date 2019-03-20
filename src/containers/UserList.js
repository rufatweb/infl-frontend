import React from 'react'
import UserCard from '../components/UserCard'
import {GridList, GridListTile, ListSubheader} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  }
});

class UserList extends React.Component {






  render () {
    const { classes, users } = this.props;

  let listUsers = users.map(user => <UserCard key={user.id} user={user}/>)
    return (

    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Photographers</ListSubheader>
        </GridListTile>
        {listUsers}
      </GridList>
    </div>
  )
  }
}

UserList.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(UserList);
