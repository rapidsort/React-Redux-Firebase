import React from 'react'
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

function SignedInLinks(props) {
  return (
    <div>
      <ul className='right'>
          <li><NavLink to='/create'>New Project</NavLink></li>
          <li><span onClick={props.signOut}>Logout</span></li>
          <li><NavLink to='/' className='btn btn-floating pink '>
          {props.profile.initials}
          </NavLink></li>
      </ul>
    </div>
  )
}



const mapDispatchToProps = (dispatch)=>{
  return {
    signOut: ()=>dispatch(signOut())
  }
}


export default connect(null, mapDispatchToProps)(SignedInLinks);
