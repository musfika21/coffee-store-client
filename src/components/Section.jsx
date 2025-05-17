import React from 'react';
import coffee from '../images/icons/1.png'
import badge from '../images/icons/2.png'
import beans from '../images/icons/3.png'
import mug from '../images/icons/4.png'

const Section = () => {
    return (
        <div className='bg-[#ECEAE3] py-10'>
            <div className='w-6/7 mx-auto grid grid-cols-4'>
                {/* 1 */}
                <div className='space-y-3 px-5 '>
                    <img src={coffee} />
                    <h4 className='heading-font text-[#331A15] text-2xl'>Awesome Aroma</h4>
                    <p className='base-font text-[#1B1A1A] text-sm'>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                {/* 2 */}
                <div className='space-y-3 px-5 '>
                    <img src={badge} />
                    <h4 className='heading-font text-[#331A15] text-2xl'>High Quality</h4>
                    <p className='base-font text-[#1B1A1A] text-sm'>We served the coffee to you maintaining the best quality</p>
                </div>
                {/* 3 */}
                <div className='space-y-3 px-5 '>
                    <img src={beans} />
                    <h4 className='heading-font text-[#331A15] text-2xl'>Pure Grades</h4>
                    <p className='base-font text-[#1B1A1A] text-sm'>The coffee is made of the green coffee beans which you will love</p>
                </div>

                <div className='space-y-3 px-5 '>
                    <img src={mug} />
                    <h4 className='heading-font text-[#331A15] text-2xl'>Proper Roasting</h4>
                    <p className='base-font text-[#1B1A1A] text-sm'>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default Section;