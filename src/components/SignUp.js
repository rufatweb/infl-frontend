import React from 'react'
import ReactDOM from 'react-dom'
import {TextField, Button, Radio} from '@material-ui/core';


class SignUp extends React.Component {

  state = {
    username: '',
    email: '',
    password: '',
    title: 'influencer'
  }

handleChange = (e, radioName) => {
  this.setState({[e.target.name]: e.target.value})
}


  handleSubmit = (e) => {
    e.preventDefault()
 this.props.handleSignUp(this.state)
 this.setState({
   username: '',
   email: '',
   password: '',
   title: ''
 })
  }

  render () {
    return <div className='sign-up'>
    SignUp
    <form onSubmit={this.handleSubmit}>
     <TextField
    label='username'
      name="username"
      value={this.state.username}
      onChange={this.handleChange} />
  <TextField
 label='email'
type="email"
 name="email"
   value={this.state.email}
   onChange={this.handleChange} />

<TextField
label='password'
 type="password"
 name="password"
 value={this.state.password}
 onChange={this.handleChange} />
<p></p>


       Influencer <Radio
        checked={this.state.title === 'influencer'}
        onClick={this.handleChange}
        value="influencer"
        name="title"
        />
        Photographer <Radio
         checked={this.state.title === 'photographer'}
         onClick={this.handleChange}
         value="photographer"
         name="title"
         />
         Both <Radio
          checked={this.state.title === 'influencer/photographer'}
          onClick={this.handleChange}
          value="influencer/photographer"
          name="title"
          />



     <Button type='submit'>Sign Up</Button>
    </form>

    </div>
  }
}

export default SignUp;
