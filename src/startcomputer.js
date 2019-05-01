import React, { Component } from 'react'
import './startcomputer.css';
import startimg from './startpc.png';
import laoder from './loader.gif';


class Pcstart extends Component {
  constructor(props) {
    super(props);
    this.setState = this.Closepcscreen.bind(this);
  }
  componentWillMount() {
    this.setState = setInterval(() => {
          this.Closepcscreen()
        }, 5000)
  }
  Closepcscreen() {
    document.querySelector(".main-screen").style.display = 'none';
  }
  render() {
      return (
        <div className="main-screen">
            <div className='flex-center-coloum'>
                <img src={startimg}></img>
                <img className='loader-img' src={laoder}></img>
            </div>
        </div>
      );
    }
  }
  export default Pcstart;