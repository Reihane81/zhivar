// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
    return (
        <div className='relative flex justify-between items-center bg-zinc-800 text-white m-auto pl-10 py-2 rounded-full z-50 mb-[-2rem]' style={{direction: 'rtl'}}>
            <ul className='w-9/12 flex text-white justify-around'>
                <li href='#'>صفحه اصلی</li>
                <li href='#'>وبلاگ</li>
                <li href='#'>تماس با ما</li>
                <li href='#'>درباره ما</li>
                <li href='#'>العربیۀ</li>
                <li href='#'>فارسی</li>
            </ul>

            <div>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='border p-3 rounded-full' style={{borderColor: "#ffb703"}} />
            </div>
        </div>
    );
};

export default Menu;