import React from 'react'
import { Link } from 'react-router-dom';
import {TextField, Button} from '@material-ui/core';
class LogIn extends React.Component {


state = {
  username: '',
  password: ''
}

handleSubmit = (e) => {
e.preventDefault()
this.props.handleLogIn(this.state)

}

handleChange = (e) => {
  this.setState({[e.target.name]: e.target.value})
}

render () {
  return (
    <div className="log-in">
    <h1>Please log in</h1>
    <form onSubmit={this.handleSubmit}>

    <TextField
   label='username'
     name="username"
     value={this.state.username}
     onChange={this.handleChange} />
     <p></p>
     <TextField
     label='password'
      type="password"
      name="password"
      value={this.state.password}
      onChange={this.handleChange} />
     <p></p>



     <Button type='submit'>Log In</Button>
   </form>
  <h3>Need an account?</h3>
  <Link to="/sign-up"><Button >Sign Up</Button></Link>
    </div>
  )
}



}

export default LogIn;
