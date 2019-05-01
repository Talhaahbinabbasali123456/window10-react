import React, { Component } from 'react'
import './bottombar.css';
import starticon from './start.png';
import tabicon from './tab.png';
import folder from './folder.png';
import ie from './ie.png';
import store from './playstore.png';
import noti from './noti.png';
import volume from './volume.png';
import wifi from './wifi.png';
import charging from './charge.png';
import arrow from './arrow.png';
import Openstartmenu from './opnestartmenu';

class Bottombar extends Component {
  render() {
    return (
      <div className="bottom-bar">
            <div className='flex-start'>
              <img className='icom-img open-bar' onClick={Openstartmenu} src={starticon}></img>
              <input type='text' className='searchinp' placeholder='Search the web and Windows'></input>
              <img className='icom-img' src={tabicon}></img>
              <img className='icom-img' src={folder}></img>
              <img className='icom-img' src={ie}></img>
              <img className='icom-img' src={store}></img>

            </div>
            <div className='flex-start'>
            <img className='icom-img-right' src={arrow}></img>
            <img className='icom-img-right' src={charging}></img>
            <img className='icom-img-right' src={wifi}></img>
            <img className='icom-img-right' src={volume}></img>
            <img className='icom-img-right' src={noti}></img>
                <div className='time'>
                    12:46 PM
                    <br></br>
                    4/25/2019
                </div>
            </div>
      </div>
    );
  }
}
export default Bottombar;