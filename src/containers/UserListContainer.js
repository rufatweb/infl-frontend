import React from 'react'
import {Route, Switch} from 'react-router-dom'
import UserList from './UserList'
import UserProfile from '../components/UserProfile'
import Home from '../components/Home'

class UserListContainer extends React.Component {


  state = {
    users: [],
    user: ''
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

  handleProfile = (user) => {
    this.setState({user})

  }

  render () {

    let influencers = [...this.state.users].filter(user => user.title.includes('influencer'))
    let photographers = [...this.state.users].filter(user => user.title.includes('photographer'))

    return (
      <div className='user-list-container'>
      <Switch>
      <Route path={`/${this.state.user.username}`} render = {() => <UserProfile user={this.state.user}/>} />
      <Route path="/influencers" render = {() => <UserList handleProfile={this.handleProfile} users={influencers}/>} />
      <Route path="/photographers" render = {() => <UserList handleProfile={this.handleProfile} users={photographers}/>} />
       </Switch>
    </div>
  )
  }
}

export default UserListContainer;
