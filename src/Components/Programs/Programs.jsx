import React from 'react';
import './programs.css';
import {programsData} from '../../data/programsData';
import rightArrow from '../../assets/rightArrow.png';

const Programs = () => {
    return (
        <div className='programs' id='programs'>
            <div className='pgm-hdr'>
                <span className='stroke-text'>Explore our </span>
                <span>Programs</span>
                <span className='stroke-text'>to shape you</span>
            </div>

            <div className='pgm-categories'>
                {programsData.map((pgm) => (
                    <div className='category'>
                        {pgm.image}
                        <span>{pgm.heading}</span>
                        <span>{pgm.details}</span>
                        <div className='join-now'>
                            <span>Join now</span><img src={rightArrow}/>
                        </div>
                    </div>
                ))}
            
            </div>
            
        </div>
    );
}

export default Programs;
