import React, { Component } from 'react'
import './startupcontent.css';
// import logo from './logo.svg';
import img1 from './halfcalaner.png';
import img2 from './mail.png';
import img3 from './me.png';
import img4 from './onenote.png';
import img5 from './xbox.png';
import img6 from './money.png';
import img7 from './news.png';
import img8 from './settingicon.png';
import img9 from './foldericon.png';
import img10 from './powericon.png';
import img11 from './allappicon.png';
import user from './userr.png';



class Start extends Component {
  
    render() {
      return (
        <div className="startup-container flex-start-start">
            <div className='left-sidebar pad-20'>
                <div className='flex-start hov-effect'>
                    <img className='user-logo' src={user}></img>
                    <h5 className='font-12'>Talha Abbas</h5>
                </div>
                <div className='flex-start'>
                    <h5 className='font-12'>Most used</h5>
                </div>
                <div className='flex-start hov-effect'>
                    <img className='used-img' src={img1}></img>
                    <h5 className='font-12'>Calander</h5>
                </div>
                <div className='flex-start hov-effect'>
                    <img className='used-img' src={img6}></img>
                    <h5 className='font-12'>Money</h5>
                </div>
                <div className='flex-start hov-effect'>
                    <img className='used-img' src={user}></img>
                    <h5 className='font-12'>Google Chrome</h5>
                </div>
                <div className='flex-start hov-effect'>
                    <img className='used-img' src={img4}></img>
                    <h5 className='font-12'>One Note</h5>
                </div>
                <div className='flex-start hov-effect'>
                    <img className='used-img' src={user}></img>
                    <h5 className='font-12'>Google Chrome</h5>
                </div>
                <div className='flex-start hov-effect'>
                    <img className='used-img' src={img3}></img>
                    <h5 className='font-12'>Gallary</h5>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className='flex-start hov-effect'>
                    <img className='used-img' src={img9}></img>
                    <h5 className='font-12'>File Explorer</h5>
                </div>
                <div className='flex-start hov-effect'>
                    <img className='used-img' src={img8}></img>
                    <h5 className='font-12'>Setting</h5>
                </div>
                <div className='flex-start hov-effect'>
                    <img className='used-img' src={img10}></img>
                    <h5 className='font-12'>Power</h5>
                </div>
                <div className='flex-start hov-effect'>
                    <img className='used-img' src={img11}></img>
                    <h5 className='font-12'>All apps</h5>
                </div>
            </div>



            <div className='right-sidebar flex-start-start'>
                <div>
                    <p className='p-5 font-14'>Life at a glance</p>
                    <div className='pm-0'>
                        <img className='width-100' src={img1}></img>
                        <img className='width-200' src={img2}></img>
                    </div>
                    <div className='pm-0'>
                        <img className='width-100' src={img1}></img>
                        <img className='width-100' src={img3}></img>
                        <img className='width-100' src={img1}></img>            
                    </div>
                    <div className='pm-0'>
                        <img className='width-100' src={img6}></img>
                        <img className='width-100' src={img1}></img>
                        <img className='width-100' src={img4}></img>            
                    </div>
                </div>
                <div className='ml-20'>
                <p className='p-5 font-14'>Play and explore</p>
                    <div className='pm-0'>
                        <img className='width-100' src={img5}></img>
                        <img className='width-100' src={img1}></img>
                        <img className='width-100' src={img1}></img> 
                    </div>
                    <div className='pm-0'>
                        <img className='width-100' src={img1}></img>
                        <img className='width-200' src={img7}></img>
                    </div>
                    <div className='pm-0'>
                        <img className='width-100' src={img1}></img>
                        <img className='width-100' src={img1}></img>
                        <img className='width-100' src={img4}></img>            
                    </div>
                </div>
            </div>
        </div>
      );
   }
}

export default Start;