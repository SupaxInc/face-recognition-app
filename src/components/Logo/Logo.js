import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brainlogo from './brainlogo.png';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt style={{height: 150, width: 150}}>
                <div className="logoBg br2 shadow-2" style={{height: 150, width: 150}}>
                    <div className='pa3'>
                        <img style={{paddingTop: '3px'}} src={brainlogo} alt='logo' />
                    </div>
                    
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;