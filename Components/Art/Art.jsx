import React from 'react'
import './Art.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



const Art = () => {
    return (
        <>
            <div className='Art-Header'>
                <h1>Finally...</h1>
                <h2>If youre interested in my artwork. Here are two galleries you can scroll through! The left is for paintings and drawings. The right is for 3D work!</h2>
            </div>

            <div className='Art-container'>
                <div className='Swiper-left'>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                    </Swiper>

                </div>

                <div className='Swiper-right'>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                    </Swiper>

                </div>
            </div>


        </>
    )
}

export default Art