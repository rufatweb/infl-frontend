import React from 'react'
import ReactDOM from 'react-dom'
import {TextField, Button, Radio} from '@material-ui/core';


class SignUp extends React.Component {

  state = {
    username: '',
    email: '',
    password: '',
    influencer: true,
    photographer: false
  }



  handleSubmit = (e) => {
    e.preventDefault()
 this.props.handleSignUp(this.state)
 this.setState({
   username: '',
   email: '',
   password: '',
   influencer: true,
   photographer: false
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
      onChange={(e) => this.setState({username: e.target.value})} />
  <TextField
 label='email'
type="email"
 name="email"
   value={this.state.email}
   onChange={(e) => this.setState({email: e.target.value})} />

<TextField
label='password'
 type="password"
 name="password"
 value={this.state.password}
 onChange={(e) => this.setState({password: e.target.value})} />
<p></p>


       Influencer <Radio
          checked={this.state.influencer}
          onClick={() => this.setState({influencer: !this.state.influencer, photographer: !this.state.photographer})}
        />
        Photographer <Radio
           checked={this.state.photographer}
           onClick={() => this.setState({influencer: !this.state.influencer, photographer: !this.state.photographer})}
         />



     <Button type='submit'>Sign Up</Button>
    </form>

    </div>
  }
}

export default SignUp;
