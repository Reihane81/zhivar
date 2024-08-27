// image
import iran from '../assets/flag/iran.webp';
import arabia from '../assets/flag/arabia.webp';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
    return (
        <div className='relative flex justify-between items-center bg-zinc-800 text-white m-auto pl-10 py-2 rounded-full z-50 mb-[-2rem]' style={{direction: 'rtl'}}>
            <ul className='w-10/12 pr-4 flex items-center text-white justify-around cursor-pointer'>
                <li>
                    <a href='#' className='py-2 px-3 text-black font-semibold bg-amber-400 rounded-full'>صفحه اصلی</a>
                </li>
                <li>
                    <a href='#' className='py-2 px-3 rounded-full hover:bg-amber-400 hover:text-black transition duration-500 ease-in-out'>وبلاگ</a>
                </li>
                <li>
                    <a href='#' className='py-2 px-3 rounded-full hover:bg-amber-400 hover:text-black transition duration-500 ease-in-out'>تماس با ما</a>
                </li>
                <li>
                    <a href='#' className='py-2 px-3 rounded-full hover:bg-amber-400 hover:text-black transition duration-500 ease-in-out'>درباره ما</a>
                </li>
                <li className='flex items-center py-2 px-3 rounded-full hover:bg-amber-400 hover:text-black transition duration-500 ease-in-out'>
                    <img src={arabia} className='w-5 ml-2' />
                    <a href='#'>العربیۀ</a>
                </li>
                <li className='flex items-center py-2 px-3 text-black font-semibold bg-amber-400 rounded-full'>
                    <img src={iran} alt='iran' className='w-5 ml-2'/>
                    <a href='#'>فارسی</a>
                </li>
                <li>
                    <a href='#' className='py-2 px-3 rounded-full hover:bg-amber-400 hover:text-black transition duration-500 ease-in-out'>آجر نسوز</a>
                </li>
            </ul>

            <div>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='border text-xl p-3 rounded-full cursor-pointer' style={{borderColor: "#ffb703"}} />
            </div>
        </div>
    );
};

export default Menu;