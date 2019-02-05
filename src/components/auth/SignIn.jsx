import React, { Component } from 'react'

import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
 
import {Redirect} from 'react-router-dom';



class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }


  handleChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    // console.log(this.state);
    this.props.singIn(this.state);
  }


  render() {
    const { authError, auth } = this.props
    if (auth.uid) return <Redirect to='/' />

    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>

        { authError ? <div className='red-text center'><p>{authError}</p></div> : null }
        
      </div>
    )
  }
}


const mapStateToProps = (state)=>{
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    singIn: (credentials)=>dispatch(signIn(credentials))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)