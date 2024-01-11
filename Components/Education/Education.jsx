import React from 'react'
import './Education.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowCircleRight } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';

const Education = () => {
  return (
    <>


    <div className='action'>
      <h1>Drag to the left for more!</h1>
      <span className='arrow-btn'><FaArrowCircleRight /></span>
    </div>


      <div className='swiper-container'>
        <Swiper className='swiper'
          spaceBetween={50}
          slidesPerView={2}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >


          <SwiperSlide className='swiperSlide'>
            <h1>Massachisettes College of Art and Design</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, asperiores?</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores porro nihil maxime suscipit, sint quod deserunt labore obcaecati voluptatem tempora alias debitis adipisci. Veniam vel voluptate molestiae porro voluptatem.</p>
          </SwiperSlide>

          <SwiperSlide className='swiperSlide'>
            <h1>Coursera Front End Development Certificate</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, asperiores?</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores porro nihil maxime suscipit, sint quod deserunt labore obcaecati voluptatem tempora alias debitis adipisci. Veniam vel voluptate molestiae porro voluptatem.</p>
          </SwiperSlide>

          <SwiperSlide className='swiperSlide'>
            <h1>Codecademy</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, asperiores?</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores porro nihil maxime suscipit, sint quod deserunt labore obcaecati voluptatem tempora alias debitis adipisci. Veniam vel voluptate molestiae porro voluptatem.</p>
          </SwiperSlide>

          <SwiperSlide className='swiperSlide'>
            <h1>Massachisettes College of Art and Design</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, asperiores?</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores porro nihil maxime suscipit, sint quod deserunt labore obcaecati voluptatem tempora alias debitis adipisci. Veniam vel voluptate molestiae porro voluptatem.</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Education
