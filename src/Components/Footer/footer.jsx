import React from 'react';
import './footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className='Footer-container'>
            <div className='blur blurF'></div>
            <hr/>
            <div className='footer'>

                <div className='socials'>
                    <img src={Github}/>
                    <img src={Instagram}/>
                    <img src={LinkedIn}/>
                </div>

                <div className='logoF'>
                    <img src={Logo}/>
                </div>    
            
            </div>

            <div className='blur blurF-1'></div>
            <div className='blur blurF-2'></div>



            
        </div>
    );
}

export default Footer;
