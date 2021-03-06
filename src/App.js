import React, { Component } from 'react';
import './App.css';
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import {Route, Switch, withRouter} from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import UserListContainer from './containers/UserListContainer'
import UserProfile from './components/UserProfile'
import ConversationList from './containers/ConversationList';

class App extends Component {

state = {
  currentUser: '',
  profile: ''
}


componentDidMount() {
    let token= localStorage.getItem("token")
    if (token) {

      fetch('http://localhost:3000/api/v1/current_user', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Action: "application/json",
          Authorization: `${token}`
        }
      })
        .then(r => r.json())
        .then(json => {
          this.setState({ currentUser: json.user})
        })
    } else {
      this.props.history.push('/log-in');
    }
  }


handleSignUp = newUser => {
   this.createUser(newUser);
   this.props.history.push('/');
}

createUser = newUser => {

    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
       'Content-Type': 'application/json',
          "Accepts": "application/json"
   },
   body: JSON.stringify({user: newUser})
    }).then(r => r.json())
    .then(json => {
      localStorage.setItem("token", json.jwt)
      this.setState({currentUser: json.user})
    })
 }

 handleLogIn = (logInData) => {
   this.getUser(logInData)
   // this.saveTokenAsCookie()
   this.props.history.push('/');
 }


 getUser = (logInData) => {
  fetch('http://localhost:3000/api/v1/login', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
        "Accepts": "application/json"
 },
 body: JSON.stringify({user: {
   username: logInData.username,
   password: logInData.password
 }
 })
}).then(r => {
  return r.json()
} )
  .then(json => {
    localStorage.setItem("token", json.jwt)
    this.setState({currentUser: json.user})
  })
}

logOut = () => {
  localStorage.removeItem('token')
  this.setState({currentUser: ''})
  this.props.history.push('/');
}

handleProfile = (user) => {
  this.setState({profile: user})
}

// saveTokenAsCookie = () => {
//    document.cookie = `X-Authorization=${localStorage.getItem('token')};path=/`;
// }

  render() {

    return (
      <div className="App">
    <NavBar handleProfile={this.handleProfile} user={this.state.currentUser} logOut={this.logOut}/>

    <Switch>
     <Route path="/influencers" render ={() => <UserListContainer handleProfile={this.handleProfile}/>} />
     <Route path="/photographers" render ={() => <UserListContainer handleProfile={this.handleProfile}/>} />
     <Route path="/inbox" render ={() => <ConversationList user={this.state.currentUser}/>} />
     <Route path={`/${this.state.profile.username}`} render ={() => <UserProfile sender={this.state.currentUser} user={this.state.profile}/>} />
     <Route path="/log-in" render ={() => <LogIn handleLogIn={this.handleLogIn}/>} />
     <Route path="/sign-up" render ={() => <SignUp handleSignUp={this.handleSignUp}/>} />
     <Route path="/" render={() => <Home/>} />
     </Switch>
      </div>
    );
  }
}

export default withRouter(App);
