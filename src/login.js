import React, { Component } from 'react'
import './login.css';
import lock from './lockscreen.png';
import Lockopen from './lockscreenopen';

class Lock extends Component {
    render() {
      return (
        <div className="login-container">
            <img className='ls-img' onClick={Lockopen} src={lock}></img>
        </div>
      );
    }
  }
export default Lock;