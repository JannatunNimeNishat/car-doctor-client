import React from 'react';

import delivery from '../../assets/icons/deliveryt.svg'
import guaranty from '../../assets/icons/check.svg'
import group from '../../assets/icons/group.svg'
import support from '../../assets/icons/person.svg'
import service from '../../assets/icons/Wrench.svg'
import clock from '../../assets/icons/clock.svg'

const Features = () => {
    return (
        <div className='mt-5 mb-5'>
            <div className='text-center mb-5'>
                <h3 className='text-2xl font-bold text-orange-600'>Core Features</h3>
                <h2 className='text-5xl'>Why Choose Us</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            {/* cards */}
            <div className='text-center flex gap-3 justify-between'>

                <div className='border  p-3 rounded-lg flex flex-col  items-center justify-center hover:bg-orange-600 hover:text-white'>
                    <img className=' mb-1' src={group} alt="" />
                    <h3 className='text-xl font-bold'>Export Team</h3>
                </div>

                <div className='border  p-3 rounded-lg flex flex-col  items-center justify-center hover:bg-orange-600 hover:text-white'>
                    <img className=' mb-1 bg-black hover:bg-white' src={clock} alt="" />
                    <h3 className='text-xl font-bold'>Timely Delivery</h3>
                </div>
                <div className='border p-3 rounded-lg flex flex-col  items-center justify-center hover:bg-orange-600 hover:text-white'>
                    <img className='mb-1' src={support} alt="" />
                    <h3 className='text-xl font-bold'>24/7 Support</h3>
                </div>
                <div className='border p-3 rounded-lg flex flex-col  items-center justify-center hover:bg-orange-600 hover:text-white'>
                    <img className=' mb-1' src={service} alt="" />
                    <h3 className='text-xl font-bold'>Best Equipment</h3>
                </div>

                <div className='border p-3 rounded-lg flex flex-col  items-center justify-center hover:bg-orange-600 hover:text-white'>

                    <img className=' mb-1' src={guaranty} alt="" />


                    <h3 className='text-xl font-bold'>100% Guaranty</h3>
                </div>
                <div className='border p-3 rounded-lg flex flex-col  items-center justify-center hover:bg-orange-600 hover:text-white'>

                    <img className=' mb-1' src={delivery} alt="" />

                    <h3 className='text-xl font-bold'>Timely Delivery</h3>
                </div>

            </div>
        </div>
    );
};

export default Features;