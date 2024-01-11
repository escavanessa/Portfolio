import React from 'react'
import './Art.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const art = [
    {
        img: '/bluegirl.png'
    },
    {
        img: './dominoes.jpg'
    },
    {
        img: '/dontknowwho copy.jpg'
    },
    {
        img: '/green reading 300 copy.jpg'
    },
    {
        img: '/greengirl.png'
    },
    {
        img: '/heavy green.jpg'
    },
    {
        img: '/hunger.jpg'
    },
    {
        img: '/IMG_6383.jpg'
    },
    {
        img: '/lost my mind not 300.jpg'
    },
    {
        img: '/Pierce_90x60.png'
    },
    {
        img: '/purplegirl.png'
    },
    {
        img: '/Screen Shot 2023-02-18 at 6.23.05 PM.png'
    },
    {
        img: '/spearbearer.jpg'
    },
    {
        img: '/thoughtful not 300.jpg'
    },
    {
        img: '/veridian.jpg'
    },
    {
        img: '/yellowgirl.png'
    }
]

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

                        {
                            art.map((img, index) => {
                                return(
                                    <SwiperSlide key={index}>
                                        <img src={img}></img>
                                    </SwiperSlide>
                                )
                            })
                        }
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