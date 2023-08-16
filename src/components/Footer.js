import React from 'react';

// import social data
import {social} from '../data'

// import Logo
import Logo from '../assets/img/Logo-Backround-black.svg'
const Footer = () => {
    return (
        <footer className='bg-tertiary py-12'>
            <div className='container mx-auto '>
                <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
                    {/* social icon */}
                    <div className='flex space-x-6 items-center justify-center'>
                    {social.map((item, index) => {
                        const { href, icon } = item;
                        return (
                            <a className='text-accent text-base' href={href} key={index}>{ icon}</a>
                        );
                    })}
                    </div>
                    {/* Logo */}
                    <div>
                        <img src={Logo} alt="" />
                    </div>
                    {/* copyright */}
                    <p>&copy; 2023 HenrryNoise.  All rights reserved.</p>
                </div>
            </div>
            
        </footer>
    );
};

export default Footer;
