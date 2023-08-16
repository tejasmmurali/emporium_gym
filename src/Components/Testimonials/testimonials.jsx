import React from 'react';
import './testimonials.css'
import {testimonialsData} from '../../data/testimonialsData'
import { useState } from 'react';
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'

const Testimonials = () => {

    const [selected, setSelected] = useState(0);
    const len = testimonialsData.length;
    return (
        <div className='Testimonials'>

            <div className='leftT'>
                <span>Testimonials</span>
                <span className='stroke-text'>What they</span>
                <span>say about us</span>
                <span>
                    {testimonialsData[selected].review}
                </span>
                <span>
                    <span style={{
                        color:'var(--red)',
                        fontSize: '1.6rem'
                        
                    }}>
                        {testimonialsData[selected].name}
                    </span>{" "}
                    - {testimonialsData[selected].status}
                </span>
            </div>

            <div className='rightT'>
                    <div></div>
                    <div></div>
                    <img src={testimonialsData[selected].image}/>
                    <div className='arrows'>
                        <img 
                            onClick={() => {
                                selected ===0?
                                setSelected(len-1):
                                setSelected((prev) => prev-1);
                            }}
                            src={leftArrow}/>
                        
                        <img 
                            onClick={() => {
                                selected ===len-1?
                                setSelected(0):
                                setSelected((prev) => prev + 1);
                            }}
                        src={rightArrow}/>
                    </div>
            </div>
        </div>
    );
}

export default Testimonials;
