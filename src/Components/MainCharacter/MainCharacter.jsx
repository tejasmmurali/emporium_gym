import React from 'react'
import './Main.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import {motion} from 'framer-motion'


const MainCharacter = () => {

    const trans = {type:'spring',duration:3}
    return(
        <div className='mainChar'>
            <div className='blur blurM'></div>
            <div className='mainLeft'>
                <Header/>

                <div className='ad1'>
                    <motion.div
                    initial = {{left:'238px'}}
                    whileInView={{left:'8px'}}
                    transition={{...trans, type:'tween'}}
                    ></motion.div>
                    <span>The perfect fitness club you need</span>
                </div>

                {/*Landing Page*/}

                <div className='Main-text'>
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>

                    <div>
                        <span>Empowering your fitness journey through state-of-the-art equipment and expert guidance at our welcoming gym.</span>
                    </div>
                </div>

                <div className='figures'>
                    <div>
                        <span>6+</span>
                        <span>Expert Coaches</span>
                    </div>
                    <div>
                        <span>100+</span>
                        <span>Members Joined</span>
                    </div>
                    <div>
                        <span>30+</span>
                        <span>Fitness Programs</span>
                    </div>
                </div>

                <div className='Main-btn'>
                    <button className='btn'>Get started</button>
                    <button className='btn'>Learn more</button>
                </div>

                {/*End of Landing page*/}
            </div>
            <div className='mainRight'>
                <button className='btn'>Join now</button>

                <motion.div 
                initial={{right:'-1rem'}}
                whileInView={{right:'4rem'}}
                transition={trans}
                className='heart-rate'>
                    <img src={Heart}/>
                    <span>heart rate</span><span>116 bpm</span>
                </motion.div>

                <img src={hero_image} className='Main_img'/>
                <motion.img 
                initial={{right:'11rem'}}
                whileInView={{right:'22rem'}}
                transition={trans}
                src={hero_image_back} className='Main_img_bck'/>


                
            </div>
            
        </div>

    )
}

export default MainCharacter