import React from 'react';
import './header.css'
import Logo from '../../assets/logo.png'
import bars from '../../assets/bars.png'
import { useState } from 'react';
import {Link} from 'react-scroll'


const Header = () => {
    const mobile = window.innerWidth<=768?true:false;
    const [menuOpen,setMenuOpen] = useState(false);
    return (
        <div className='header'>
            <img src={Logo} className='logo'/>
            {(menuOpen === false && mobile ===true)?(
                <div
                style={{backgroundColor:'var(--appColor)',padding:'0.5rem',borderRadius:'5px'}}
                onClick={() => setMenuOpen(true)}
                ><img src={bars}
                style={{widows:'1.5rem',height:"1.5rem"}}
                /></div>
            ):(
                <ul className='headerMenu'>

                <li>
                <Link 
                onClick={() => setMenuOpen(false)}
                activeClass="active"
                to='mainChar'
                span={true}
                smooth={true}>Home</Link>
                
                </li>

                <li>
                <Link 
                onClick={() => setMenuOpen(false)}
                to='programs'
                span={true}
                smooth={true}>Programs</Link>
                </li>

                <li onClick={() => setMenuOpen(false)}>
                <Link 
                onClick={() => setMenuOpen(false)}
                to='Reasons'
                span={true}
                smooth={true}>Why us</Link></li>

                <li onClick={() => setMenuOpen(false)}>
                <Link 
                onClick={() => setMenuOpen(false)}
                to='plans'
                span={true}
                smooth={true}>Plans</Link></li>

                <li><Link 
                onClick={() => setMenuOpen(false)}
                to='testimonials'
                span={true}
                smooth={true}>Testimonals</Link></li>
            </ul>

            )}
            

        </div>
    );
}

export default Header;
