import {useState} from "react";

// image
import iran from '../assets/flag/iran.webp';
import arabia from '../assets/flag/arabia.webp';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const MobileMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            {/* Hamburger Button */}
            <button
                className="p-4"
                onClick={toggleMenu}
            >
                <FontAwesomeIcon icon={faBars} className='p-3 text-2xl rounded-full'
                                 style={{color: '#fff', backgroundColor: '#ffb703', padding: '.8rem .8rem'}} />
            </button>

            {/* Sidebar Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-7/12 text-white transform transition-transform duration-500 ease-in-out z-50
                 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
                style={{backgroundColor: "#ffc971"}}
            >
                <div className="relative text-right px-8" style={{transition: 'all 700ms cubic-bezier(.77,0,.175,1)'}}>
                    {isOpen && (
                        <>
                            <FontAwesomeIcon icon={faXmark} className='fixed p-3 text-4xl -right-14 top-0 cursor-pointer'
                                             style={{color: '#fff'}}
                                            onClick={toggleMenu}/>

                            <ul className="py-2 mt-8" style={{transition: 'all 700ms cubic-bezier(.77,0,.175,1)'}}>
                                <li>
                                    <a href="#"
                                       className="block px-3 py-3 text-white bg-black rounded-full transition duration-500 ease-in-out">
                                        صفحه اصلی
                                    </a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block mt-2.5 px-4 py-3 text-black border-b rounded-full hover:bg-black hover:text-white transition duration-500 ease-in-out"
                                       style={{borderColor: "rgba(167,167,167,.2)"}}>
                                        وبلاگ
                                    </a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block mt-2.5 px-4 py-3 text-black border-b rounded-full hover:bg-black hover:text-white transition duration-500 ease-in-out"
                                       style={{borderColor: "rgba(167,167,167,.2)"}}>
                                        تماس با ما
                                    </a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block mt-2.5 px-4 py-3 text-black border-b rounded-full hover:bg-black hover:text-white transition duration-500 ease-in-out"
                                       style={{borderColor: "rgba(167,167,167,.2)"}}>
                                        درباره با ما
                                    </a>
                                </li>
                                <li className="flex items-center mt-2.5 px-4 py-3 text-black border-b rounded-full hover:bg-black hover:text-white transition duration-500 ease-in-out"
                                    style={{borderColor: "rgba(167,167,167,.2)"}}>
                                    <img src={arabia} className='w-5 ml-2'/>
                                    <a href='#'>
                                        العربیۀ
                                    </a>
                                </li>
                                <li className="flex items-center mt-2.5 px-4 py-3 bg-black text-white rounded-full transition duration-500 ease-in-out"
                                    style={{borderColor: "rgba(167,167,167,.2)"}}>
                                    <img src={iran} alt='iran' className='w-5 ml-2'/>
                                    <a href="#">
                                        فارسی
                                    </a>
                                </li>
                                <li>
                                <a href='#'
                                       className='block mt-2.5 py-3 px-4 text-black rounded-full border-b hover:bg-black hover:text-white transition duration-500 ease-in-out'
                                       style={{borderColor: "rgba(167,167,167,.2)"}}>
                                        آجر نسوز
                                    </a>
                                </li>
                            </ul>
                        </>
                    )}
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-black opacity-55 z-30" onClick={toggleMenu}></div>
            )}
        </div>
    );
};

export default MobileMenu;