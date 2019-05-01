import React, { Component } from 'react'
import './userlogin.css';
import userimg from './userr.png';
import Userin from './userin';

class Loginuser extends Component {
    render() {
      return (
        <div className="user-login-container">
            <div className='flex-center-coloum'>
                <img className='login-user-img' src={userimg}></img>
                <h1 className='c-white'>Talha Abbas</h1>
                <button className='signin-btn' onClick={Userin}>Sign in</button>
            </div>
        </div>
      );
    }
  }
export default Loginuser;