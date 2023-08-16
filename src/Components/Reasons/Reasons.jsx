import React from 'react';
import nike from '../../assets/nike.png'
import adidas from '../../assets/adidas.png'
import nb from '../../assets/nb.png'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import tick from '../../assets/tick.png'
import './reason.css'


const Reasons = () => {
    return (
        <div className='Reasons' id='Reasons'>
            <div className='leftR'>
                <img src={image1}/>
                <img src={image2}/>
                <img src={image3}/>
                <img src={image4}/>
            </div>
            <div className='rightR'>
                <span>Some reasons</span>
                <div>
                    <span className='stroke-text'>Why</span>
                    <span> choose us?</span>
                </div>

                <div className='detailsR'>

                    <div>
                        <img src={tick}/>
                        <span>Over 6+ expert coaches</span>
                    </div>
                    <div>
                        <img src={tick}/>
                        <span>train smarter and faster than before</span>
                    </div>
                    <div>
                        <img src={tick}/>
                        <span>1 free program for new member</span>
                    </div>
                    <div>
                        <img src={tick}/>
                        <span>Reliable partners</span>
                    </div>
                </div>

                <span style={{
                    color: 'var(--gray)',
                    fontWeight: "normal",
                }}>Our Partners</span>

                <div className='partners'>
                    <img src={nike}/>
                    <img src={adidas}/>
                    <img src={nb}/>
                </div>
            </div>
        </div>
    );
}

export default Reasons;
