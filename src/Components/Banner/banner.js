// images
import banner from '../assets/bg/banner.jpg'

const Banner = () => {
    return (
        <div className='w-full flex items-center h-[90vh] bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${banner}`}}>
            <div className='w-[95%] md:w-fit m-auto rounded-2xl md:px-16 py-9 font-bold' style={{backgroundColor: "rgba(239, 174, 22, .99)"}}>
                <h2 className='text-2xl sm:text-3xl'>مجموعه بازرگانی</h2>
                <p className='pt-4 text-3xl sm:text-4xl text-red-600'>آجر ژیوار</p>
            </div>
        </div>
    );
};

export default Banner;