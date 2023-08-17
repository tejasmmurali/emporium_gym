import React from 'react';
import './testimonials.css'
import {testimonialsData} from '../../data/testimonialsData'
import { useState } from 'react';
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import {motion} from 'framer-motion'

const Testimonials = () => {

    const trans = {type: "spring", duration:3};
    const [selected, setSelected] = useState(0);
    const len = testimonialsData.length;
    return (
        <div className='Testimonials testimonials'>
            <div className='leftT'>
                <span>Testimonials</span>
                <span className='stroke-text'>What they</span>
                <span>say about us</span>
                <motion.span
                key={selected}
                initial={{opacity:0,x:-100}}
                animate={{opacity:1,x:0}}
                exit={{opacity:0,x:-100}}
                transition={trans}
                >{testimonialsData[selected].review}
                </motion.span>
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
                <motion.div
                    initial={{opacity: 0, x:-100}}
                    transition={{...trans, duration:2}}
                    whileInView={{opacity:1, x:0}}
                ></motion.div>
                <motion.div
                    initial={{opacity: 0, x:100}}
                    transition={{...trans, duration:2}}
                    whileInView={{opacity:1, x:0}}
                ></motion.div>
                
                <motion.img 
                key={selected}
                initial={{opacity:0,x:100}}
                animate={{opacity:1,x:0}}
                exit={{opacity:0,x:-100}}
                transition={trans}
                src={testimonialsData[selected].image}/>
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
