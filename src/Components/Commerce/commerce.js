// image
import wall from '../assets/bg/wall.jpg';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'


const Commerce = () => {
    return (
        <div className='flex flex-wrap m-auto justify-around flex-row-reverse mt-32' style={{maxWidth: '80rem'}}>
            <div className='w-9/12 lg:w-[48%]'>
                <div>
                    <h1 className='text-4xl text-center lg:text-right' style={{direction: 'rtl'}}><span className='text-amber-600'>بازرگانی ژیوار</span>، برای ساخت و سازهایی که به کیفیت اهمیت میدهند!</h1>
                </div>

                <div className='flex flex-wrap items-baseline mt-4 text-center lg:text-right' style={{direction: 'rtl'}}>
                    <div className='w-full lg:w-5/12 mx-auto mr-0'>
                        <div className='flex justify-center mt-6 lg:justify-start'>
                            <FontAwesomeIcon icon={faLocationArrow} className='text-2xl text-amber-600' />
                            <p className='pb-10 pr-2 text-2xl'>مشاوره قبل خرید</p>
                        </div>
                        <span>مشاوره قبل از خرید به مشتری کمک می کند تا خرید اقتصادی و هوشمندانه داشته باشد و هزینه بیهوده نکند.</span>
                    </div>

                    <div className='w-full lg:w-5/12 mr-0'>
                        <div className='flex items-baseline justify-center mt-14 lg:mt-6 lg:justify-start'>
                            <FontAwesomeIcon icon={faLocationArrow} className='text-2xl text-amber-600' />
                            <p className='pb-10 pr-2 text-2xl'>تضمین کیفیت</p>
                        </div>
                        <span>محصولات مجموعه ما بالاترین درجه کیفیت و پیشرفته ترین دستگاه ها تولید و در بازار عرضه می شود.</span>
                    </div>

                    <div className='w-full lg:w-5/12 md:mt-20 mr-0'>
                        <div className='flex items-baseline justify-center lg:mt-6 lg:justify-start'>
                            <FontAwesomeIcon icon={faLocationArrow} className='text-2xl text-amber-600' />
                            <p className='pb-10 pr-2 text-2xl'>پاسخگویی آنلاین</p>
                        </div>
                        <span>یکی از بهترین خدمات ما پاسخگویی در کمترین زمان ممکن به مشتریان خود می باشد که حائز اهمیت است.</span>
                    </div>

                    <div className='w-full lg:w-5/12 md:mt-20 lg:mr-20 mb-10 lg:mb-0'>
                        <div className='flex items-baseline justify-center lg:justify-start'>
                            <FontAwesomeIcon icon={faLocationArrow} className='text-2xl text-amber-600' />
                            <p className='pb-10 pr-2 text-2xl'>ارسال مطمئن</p>
                        </div>
                        <span>خرید، اتمام تعهدات ما نمی باشد; بلکه ارسال مطمئن آن بعد از خرید نیز یکی از خدمات مجموعه ما است.</span>
                    </div>
                </div>
            </div>

            <div>
                <img src={wall} alt={wall} className='h-[40rem] rounded-xl' />
            </div>
        </div>
    );
};

export default Commerce;