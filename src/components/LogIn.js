import React from 'react'
import { Link } from 'react-router-dom';

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


       <input type='text' name='username' value={this.state.username} placeholder='username' onChange={this.handleChange} />


     <input type='password' name='password' value={this.state.password} placeholder='password' onChange={this.handleChange} />

     <button type='submit'>Log In</button>
   </form>
  <h3>Need an account?</h3>
  <Link to="/sign-up"><button color="orange">Sign Up</button></Link>
    </div>
  )
}



}

export default LogIn;
