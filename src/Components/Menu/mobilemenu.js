import {useState, useEffect} from "react";

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
        <div className='flex duration-75'>


            <button
                onClick={toggleMenu}
                className="flex items-center justify-center w-10 h-10 text-white"
            >
                {
                    isOpen ?
                        <FontAwesomeIcon icon={faXmark} className='p-3 text-2xl rounded-full'
                                         style={{color: '#fff', backgroundColor: '#ffb703', padding: '.7rem .75rem'}}/>
                        :
                        <FontAwesomeIcon icon={faBars} className='p-3 text-2xl rounded-full'
                                         style={{color: '#fff', backgroundColor: '#ffb703', padding: '.7rem .75rem'}}/>
                }
            </button>

            <div className="relative" style={{transition: 'all 700ms cubic-bezier(.77,0,.175,1)'}}>
                {isOpen && (
                    <div className="absolute right-[-20rem] z-10 w-[25rem] py-2 mt-20 rounded-md shadow-lg bg-amber-300" style={{transition: 'all 700ms cubic-bezier(.77,0,.175,1)'}}>
                        <a href="#" className="block px-4 py-4 text-gray-800 hover:bg-gray-200">
                            صفحه اصلی
                        </a>
                        <a href="#" className="block px-4 py-4 text-gray-800 hover:bg-gray-200">
                            وبلاگ
                        </a>
                        <a href="#" className="block px-4 py-4 text-gray-800 hover:bg-gray-200">
                            درباره ما
                        </a>
                        <a href="#" className="block px-4 py-4 text-gray-800 hover:bg-gray-200">
                            تماس با ما
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MobileMenu;