import React, { useState, useEffect } from 'react';
import styles from './header.module.css'

// components
import Menu from "../Menu/menu";
import MobileMenu from "../Menu/mobilemenu";

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

// image
import logo from '../assets/logo/logo.png';

const Header = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth > 700);

    useEffect(() => {
        // Function to handle resize event
        const handleResize = () => {
            setIsMobile(window.innerWidth > 800);
        };

        // Add event listener for resize
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='max-w-[80rem] m-auto px-10' style={{direction: 'rtl'}}>
            <div className='flex items-center justify-between'>
                <div>
                    <img src={logo} alt='logo' style={{width: '9rem'}}/>
                </div>

                {
                    isMobile ?
                        <div className='flex'>
                            <div className={`${styles.hoverIcon} flex items-center pl-5 text-right cursor-pointer`}>
                                <FontAwesomeIcon icon={faPhoneVolume} className={`${styles.icon} border rounded-[50%] text-3xl transition duration-500 ease-in-out`}
                                                 style={{color: "#ffb703", borderColor: "#ffb703", padding: ".9rem"}}/>
                                <div className='pr-3 hidden lg:block'>
                                    <p className='text-neutral-500'>ارتباط آنلاین</p>
                                    <span>09123757493</span>
                                </div>
                            </div>

                            <div className={`${styles.hoverIcon} flex items-center text-right cursor-pointer`}>
                                <FontAwesomeIcon icon={faHouse} className={`${styles.icon} border rounded-[50%] text-3xl transition duration-500 ease-in-out`}
                                                 style={{color: "#ffb703", borderColor: "#ffb703", padding: ".9rem .8rem"}}/>
                                <div className='pr-3 hidden lg:block'>
                                    <p className='text-neutral-500'>دفتر مرکزی ژیوار</p>
                                    <span>تهران، مجتمع تجاری تجریش</span>
                                </div>
                            </div>
                        </div>
                    :
                        <MobileMenu />
                }
            </div>

            {isMobile && <Menu/>}
        </div>
    );
};

export default Header;