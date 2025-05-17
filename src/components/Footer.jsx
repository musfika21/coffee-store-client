import React from 'react';
import logo from '../images/more/logo1.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { TbMailFilled } from 'react-icons/tb';
import { FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className='base-font'>
            <div className='footer-bg1'>
                <div className='max-w-6/7 mx-auto pt-18 pb-10 flex items-center justify-between gap-30'>
                    {/* left content */}
                    <div className='space-y-6 flex-1 '>
                        <img
                            className='w-14'
                            src={logo} />
                        <p className='heading-font text-[#331A15] text-3xl drop-shadow font-bold'>Espresso Emporium</p>
                        <p className='font-light'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                        <ul className='text-[#331A15] flex text-3xl gap-5'>
                            <li>
                                <a href=""><FaFacebook /></a>
                            </li>
                            <li>
                                <a href=""><FaTwitter /></a>
                            </li>
                            <li>
                                <a href=""><FaInstagram /></a>
                            </li>
                            <li>
                                <a href=""><FaLinkedin /></a>
                            </li>
                        </ul>
                        <p className='heading-font text-[#331A15] text-3xl drop-shadow font-bold'>Get in Touch</p>
                        <ul className='text-[#331A15] space-y-5'>
                            <li className='flex items-center gap-7'><FaPhoneAlt /> +88 01533 333 333</li>
                            <li className='flex items-center gap-7'><TbMailFilled /> info@gmail.com</li>
                            <li className='flex items-center gap-7'><FaLocationDot /> 72, Wall street, King Road, Dhaka</li>
                        </ul>
                    </div>
                    {/* right content */}
                    <div className='space-y-3 flex-1'>
                        <p className='heading-font text-[#331A15] text-3xl drop-shadow font-bold'>Contact with Us</p>
                        <input className='bg-white p-3 rounded-lg text-[#331A15] w-full hover:drop-shadow-xl hover:outline-2 hover:outline-[#E3B577]' type="text" name="name" placeholder='Name' />
                        <br/>
                        <input className='bg-white p-3 rounded-lg text-[#331A15] w-full hover:drop-shadow-xl hover:outline-2 hover:outline-[#E3B577]' type="email" name="email" placeholder='Email' />
                        <br/>
                        <textarea className='bg-white p-3 rounded-lg text-[#331A15] w-full hover:drop-shadow-xl hover:outline-2 hover:outline-[#E3B577]' name="text" placeholder='Message' rows="5"></textarea>
                    <button className='bg-transparent border-2 border-[#331A15] rounded-4xl heading-font px-6 py-2 text-xl cursor-pointer hover:text-white hover:bg-[#331A15]'>Send Message</button>
                    </div>
                </div>
            </div>

            <div className='footer-bg2'>
                <p className='heading-font text-xl font-medium text-white text-center py-2'>Copyright Espresso Emporium ! All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;