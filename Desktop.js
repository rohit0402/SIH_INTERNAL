import React from 'react'
import LOGO from "../assets/airguardian-logo.png";
import "../styles/Desktop.css"
function Desktop() {
  return (
    <div className='page'>
        <div className='navbar'>
            <div className='leftside'>
                <img src={LOGO} alt='imglogo' style={{width:'60px'}}/>
            </div>
            <div className='rightside'>
                <h2 style={{marginLeft:"8px"}}>AIRGUARDIAN</h2>
            </div>
        </div>
        <div className='hero'>
            <div className='lefthero'>
                <div className='content'>
                    <p>
                        camera
                    </p>
                </div>
            </div>
            <div className='righthero'>
                <div className='up'></div>
                <div className='down'></div>
            </div>
        </div>
    </div>
)
}

export default Desktop
