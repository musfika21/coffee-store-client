import React from 'react';
import cup1 from '../images/cups/Rectangle 9.png'
import cup2 from '../images/cups/Rectangle 10.png'
import cup3 from '../images/cups/Rectangle 11.png'
import cup4 from '../images/cups/Rectangle 12.png'
import cup5 from '../images/cups/Rectangle 13.png'
import cup6 from '../images/cups/Rectangle 14.png'
import cup7 from '../images/cups/Rectangle 15.png'
import cup8 from '../images/cups/Rectangle 16.png'


const Instagram = () => {
    return (
        <div className='container-bg'>
            <p className='text-[#1B1A1A] text-center base-font'>Follow Us Now</p>
            <p className='heading-font text-[#331A15] text-3xl drop-shadow font-bold text-center my-4'>Follow on Instagram</p>

            {/* images */}
            <div className='max-w-6/7 mx-auto my-10'>
                <div className='grid grid-cols-4 gap-6'>
                    <img src={cup1} />
                    <img src={cup2} />
                    <img src={cup3} />
                    <img src={cup4} />
                    <img src={cup5} />
                    <img src={cup6} />
                    <img src={cup7} />
                    <img src={cup8} />
                </div>
            </div>
        </div>
    );
};

export default Instagram;