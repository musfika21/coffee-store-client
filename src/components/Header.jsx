import React from 'react';
import coffeeCup from '../images/more/logo1.png'

const Header = () => {
    return (
        <div className='flex items-center header-image justify-center gap-3 py-3'>
            <img
                className='w-10'
                src={coffeeCup} alt="a cup of coffee" />
            <p className='heading-font text-3xl font-medium text-white'>Espresso Emporium</p>
        </div>
    );
};

export default Header;