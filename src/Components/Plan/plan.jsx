import React from 'react';
import {plansData} from '../../data/plansData'
import './plan.css'
import tick from '../../assets/whiteTick.png'

const Plan = () => {
    return (
        <div className='Plan-Container' id='plans'>
            <div className='blur blurP-1'></div>
            <div className='blur blurP-2'></div>
            <div className='pgm-hdr'>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>WITH US?</span>
            </div>

            <div className="plans">

            {plansData.map((plan,i) => (
                <div className='plan' key={i}>
                    {plan.icon}
                    <span>{plan.name} </span>
                    <span>$ {plan.price}</span>

                    <div className='features'>
                        {plan.features.map((feature,i)=> (
                            <div className='feature'>
                                <img src={tick}/>
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div>
                            <span>See more benefits</span>
                    </div>
                    <button className='btn'>Join now</button>
                </div>
            ))} 
            </div>

        </div>
    );
}

export default Plan;
