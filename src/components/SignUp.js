import React from 'react'
import ReactDOM from 'react-dom'

class SignUp extends React.Component {

  state = {
    username: '',
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})

  }

  handleSubmit = (e) => {
    e.preventDefault()
 this.props.handleSignUp(this.state)
 this.setState({
   username: '',
   email: '',
   password: ''
 })
  }

  render () {
    return <div className='sign-up'>
    Log In/SignUp
    <form onSubmit={this.handleSubmit}>
     <input type='text' value={this.state.username} name='username' placeholder='username' onChange={this.handleChange}/>
     <input type='email' value={this.state.email} name='email' placeholder='email' onChange={this.handleChange}/>
     <input type='password' value={this.state.password} name='password' placeholder='password' onChange={this.handleChange}/>
     <button type='submit'>Sign Up</button>
    </form>

    </div>
  }
}

export default SignUp;
