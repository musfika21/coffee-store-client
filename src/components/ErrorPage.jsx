import React from 'react';
import Header from './Header';
import Footer from './Footer';
import errorImage from '../images/404/404.gif'
import { Link } from 'react-router';
import { GoArrowLeft } from 'react-icons/go';

const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex flex-col items-center
             justify-center mt-5'>
                <Link to='/' className='flex items-center mb-10 gap-3 hover:bg-[#D2B48C] rounded-2xl w-40 p-3'><GoArrowLeft className='h-6 w-6 text-[#331a15]' /><p className='heading-font text-[#374151] text-xl drop-shadow font-bold'>Back to home</p></Link>
                <img src={errorImage} />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;