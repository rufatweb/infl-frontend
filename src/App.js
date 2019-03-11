import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import Button from '@material-ui/core/Button';
import {Route, Switch, withRouter} from 'react-router-dom'
import Home from './components/Home'

class App extends Component {

state = {
  user: ''
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
          this.setState({ user: json.user})
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
      this.setState({user: json.user})
    })
 }
 handleLogIn = (logInData) => {
   this.getUser(logInData)
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
    this.setState({user: json.user})
  })
}

logOut = () => {
  localStorage.removeItem('token')
  this.setState({user: ''})
  this.props.history.push('/');
}


  render() {
    console.log(this.state.user)

    return (
      <div className="App">
    <Switch>
     <Route path="/log-in" render ={() => <LogIn handleLogIn={this.handleLogIn}/>} />
     <Route path="/sign-up" render ={() => <SignUp handleSignUp={this.handleSignUp}/>} />
     <Route path="/" render={() => <Home logOut={this.logOut}/>} />
     </Switch>
      </div>
    );
  }
}

export default withRouter(App);
