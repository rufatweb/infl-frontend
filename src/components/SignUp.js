import React from 'react'
import PropTypes from "prop-types"
import {TextField, Button, Radio} from '@material-ui/core';
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGooglePlacesSuggest from "react-google-places-suggest"


const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY



class SignUp extends React.Component {

  state = {
    username: '',
    email: '',
    password: '',
    title: 'influencer',
    location: '',
    imgUrl: ''
  }

handleChange = (e) => {
  this.setState({[e.target.name]: e.target.value})
}


handleSelectSuggest = (suggest) => {
  this.setState({location: suggest.formatted_address})
}


  handleSubmit = (e) => {
    e.preventDefault()
 this.props.handleSignUp(this.state)
 this.setState({
   username: '',
   email: '',
   password: '',
   title: 'influencer',
   location: '',
   imgUrl: ''
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
      <p></p>
  <TextField
 label='email'
type="email"
 name="email"
   value={this.state.email}
   onChange={this.handleChange} />
<p></p>
<TextField
label='password'
 type="password"
 name="password"
 value={this.state.password}
 onChange={this.handleChange} />
<p></p>
<TextField
label='image'
 name="imgUrl"
 value={this.state.imgUrl}
 onChange={this.handleChange} />
<ReactGoogleMapLoader
  params={{
    key: API_KEY,
    libraries: "places,geocode",
  }}
  render={googleMaps =>
    googleMaps && (
      <div>
        <ReactGooglePlacesSuggest
          autocompletionRequest={{input: this.state.location}}
          googleMaps={googleMaps}
          onSelectSuggest={this.handleSelectSuggest}
        >

          <TextField
            label="location"
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
          />

        </ReactGooglePlacesSuggest>
      </div>
    )
  }
/>
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
      <p></p>

     <Button type='submit'>Sign Up</Button>
    </form>

    </div>
  }
}

SignUp.propTypes = {
  googleMaps: PropTypes.object,
}

export default SignUp;
