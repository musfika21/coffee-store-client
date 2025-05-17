import React from 'react';

const Banner = () => {
    return (
        <div className='banner-img'>
            <div className='w-2/5 ml-25 py-58 text space-y-5'>
                <h3 className='heading-font text-white text-3xl'>Would you like a Cup of Delicious Coffee?</h3>
                <p className='base-font text-white '>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='heading-font bg-[#E3B577] text-[242222] px-6 py-2 rounded-xl text-2xl font-medium hover:bg-transparent hover:text-white hover:border-2 hover:border-white cursor-pointer'>Learn More</button>
            </div>
        </div>
    );
};

export default Banner;