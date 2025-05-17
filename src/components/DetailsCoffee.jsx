import React from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { Link, useLoaderData } from 'react-router';

const DetailsCoffee = () => {
    const data = useLoaderData();
    // console.log(data)
    const { name, category, chef, photo, price, supplier, taste } = data;
    return (
        <div className='coffee-bg base-font py-7 mb-8'>
            <div className='max-w-6/7 mx-auto'>
                <Link to='/' className='flex items-center mb-10 gap-3 hover:bg-[#D2B48C] rounded-2xl w-40 p-3'><GoArrowLeft className='h-6 w-6 text-[#331a15]' /><p className='heading-font text-[#374151] text-xl drop-shadow font-bold'>Back to home</p></Link>
                {/* coffee details */}
                <div className='bg-[#F4F3F0] flex items-center px-20 py-10 rounded-lg'>
                    <div className='flex-1'>
                        <img className='w-1/2' src={photo} />
                    </div>
                    <div className='flex-1 space-y-3'>
                        <h3 className='heading-font text-[#331A15] text-3xl drop-shadow font-bold mb-6'>Niceties</h3>
                        <p className='font-bold'>Name: <span className='font-light'>{name}</span></p>
                        <p className='font-bold'>Chef: <span className='font-light'>{chef}</span></p>
                        <p className='font-bold'>Supplier: <span className='font-light'>{supplier}</span></p>
                        <p className='font-bold'>Taste: <span className='font-light'>{taste}</span></p>
                        <p className='font-bold'>Category: <span className='font-light'>{category}</span></p>
                        <p className='font-bold'>Price: <span className='font-light'>{price}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsCoffee;