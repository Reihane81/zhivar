import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation} from 'swiper/modules';
import styles from "./productgallery.module.css"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// images
import slide1 from "../assets/gallery/2.jpg";
import slide2 from "../assets/gallery/eewall.jpg";
import slide4 from  "../assets/gallery/iamge.jpg";
import slide5 from "../assets/gallery/wall-bg.jpg";
import slide6 from "../assets/gallery/wall-back.jpg";

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const sliderData = [
    {
        id: 1,
        image: slide1
    },
    {
        id: 2,
        image: slide2
    },
    {
        id: 3,
        image: slide6
    },
    {
        id: 4,
        image: slide4
    },
    {
        id: 5,
        image: slide5
    },
    {
        id: 6,
        image: slide6
    },
];

const ProductGallery = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const openModal = (image) => {
        setCurrentImage(image);
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentImage(null)
    }

    return (
        <section className="relative w-10/12 m-auto  py-12 mt-20 ">
            <div className='mr-1'>
                <h1 className='text-4xl text-center lg:text-right pb-8' style={{direction: 'rtl'}}>گالری <span
                    className='text-amber-600'>محصولات</span></h1>
            </div>
            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                modules={[Autoplay, Navigation]}
                loop={true}
                navigation={true}
                className="mySwiper transition duration-500 ease-in-out"
            >
                {
                    sliderData.map((slide) =>
                        <div className="container mx-auto mt-9">
                            <SwiperSlide key={slide.id}>
                                <img src={slide.image} alt='wall' className='rounded-lg cursor-pointer' onClick={() => openModal(slide.image)}/>
                            </SwiperSlide>
                        </div>
                    )
                }
            </Swiper>


                {isModalOpen && (
                    <div
                        className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
                        onClick={closeModal}
                    >
                        <div className="relative transition duration-500 ease-in-out">
                            <img
                                src={currentImage}
                                alt="Zoomed"
                                className="max-w-full max-h-full rounded-lg"
                            />
                            <button
                                onClick={closeModal}
                                className="absolute -top-16 -right-16 text-5xl text-white cursor-pointer"
                            >
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>
                    </div>
                )}

        </section>
    );
};

export default ProductGallery;
