import React from 'react';
import './join.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser'

const Join = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_dv93pft', 'template_sx3vdeg', form.current, 'nD1qYw_xg1e5z-4y3')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div className='join' id='join-us'>

        <div className='leftJ'>
            <hr/>
            <div>
                <span className='stroke-text'>Ready to</span>
                <span>level up</span>
            </div>
            <div>
                <span>your body</span>
                <span className='stroke-text'>with us</span>
            </div>
        </div>
        <div className='rightJ'>
            <form ref={form} className='email-container' onSubmit={sendEmail}>
                <input type='email' name='user_email' placeholder='Enter your email address'/>
                <button className='btn btnJ'>Join now</button>
            </form>
        
        </div>
            
        </div>
    );
}

export default Join;
