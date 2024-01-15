import React from 'react'
import './Art.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import imageData from '../../data';

const art = imageData.art


const Art = () => {
    console.log(art)
    return (
        <>
            <div className='Art-Header'>
                <h1>Finally...</h1>
                <h2>If youre interested in my artwork, Here is some of my work!</h2>
            </div>

            <div className='Art-container'>
                <div className='Swiper-left'>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={2}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >

                        {
                            art.map((img, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <img src={img.img}></img>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>

                </div>
            </div>


        </>
    )
}

export default Art