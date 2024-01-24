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
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={{
                            // when window width is >= 640px
                            640: {
                              width: 480,
                              slidesPerView: 1,
                            },
                            // when window width is >= 768px
                            768: {
                              width: 768,
                              slidesPerView: 1,
                            },
                          }}
                        
                    >

                        {
                            art.map((img, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <img className='art-img' src={img.img}></img>
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