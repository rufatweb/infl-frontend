import React from 'react'
import {Route, Switch} from 'react-router-dom'
import UserList from './UserList'


class UserListContainer extends React.Component {


  state = {
    users: []
  }


  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users', {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Action: "application/json"
          }
        }).then(r => r.json())
      .then(data => this.setState({users: data.users}))
  }

  render () {
    let influencers = [...this.state.users].filter(user => user.title.includes('influencer'))
    let photographers = [...this.state.users].filter(user => user.title.includes('photographer') )

    return (
      <div className='user-list-container'>
      <Switch>
      <Route path="/influencers" render = {() => <UserList users={influencers}/>} />
      <Route path="/photographers" render = {() => <UserList users={photographers}/>} />
       </Switch>
    </div>
  )
  }
}

export default UserListContainer;
