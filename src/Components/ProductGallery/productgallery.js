import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import wall from '../assets/bg/wall.jpg'
import brick1 from '../assets/bg/brick (1).jpg'
import brick2 from '../assets/bg/brick (2).jpg'

const sliderData = [
    {
        id: 1,
        image: '../assets/bg/wall.jpg'
    },
    {
        id: 2,
        image: '../assets/bg/wall.jpg'
    },
    {
        id: 3,
        image: '../assets/bg/wall.jpg'
    },

];

const ProductGallery = () => {
    return (
        <section className="w-11/12 m-auto  py-12 mt-20">
            <div className='mr-1'>
                <h1 className='text-4xl text-center lg:text-right' style={{direction: 'rtl'}}>گالری <span className='text-amber-600'>محصولات</span></h1>
            </div>

            <div className="container mx-auto mt-9">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    autoplay= {{delay: 1000}}
                >
                    <SwiperSlide>
                        <img src={brick2} alt='wall' className='rounded-lg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={brick1} alt='wall' className='rounded-lg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={brick2} alt='wall' className='rounded-lg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={brick1} alt='wall' className='rounded-lg' />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default ProductGallery;
