import React from 'react'
import './Education.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
// Import Swiper styles
import 'swiper/css';

const Education = () => {
  return (
    <>

        <div className='action'>
          <h1>Education:</h1>
          <h2>Drag to the left for more!</h2>
          <span className='arrow-btn' id='education'><FaArrowCircleRight /><FaArrowCircleDown /></span>
          
        </div>


        <div className='swiper-container'>
          <Swiper className='swiper'
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              // when window width is >= 640px
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 1,
              },
            }}
          >


            <SwiperSlide className='swiperSlide'>
              <h1>Massachusettes College of Art and Design</h1>
              <h2>Art History | 2018 - 2022</h2>
              <p>
                I graduated with a degree in Art History along with Honors. I was also a double major in Painting but decided to drop the major my final year. The education prepared me to think abstractly and deeply. I cultivated necessary tools like communication -- add more skills ---

              </p>
            </SwiperSlide>

            <SwiperSlide className='swiperSlide'>
              <h1>Coursera Front End Development Certificate</h1>
              <h2>2023 - 2024</h2>
              <p>
                Although this course by no means was my own resource when learning Front End - it was largely my spring board - pointing me in different directions to dig deeper and sharpen my skills. This course covered the basics like HTML and CSS and basic Javascript and then moved into more advanced topics like state in React, Async functions/ fetching data and ended with a thorough introduction to Data Structures.
              </p>
            </SwiperSlide>

            <SwiperSlide className='swiperSlide'>
              <h1>Codecademy</h1>
              <h2>2023 - 2024</h2>
              <p>
                Completed two Javascript courses - Javascript and Intermediate Javascript. These courses have really helped me build a strong understanding of Javascript and set the foundation for more complicated concepts I will face as I continue on my course inot Front End Development.
              </p>
            </SwiperSlide>

            <SwiperSlide className='swiperSlide'>
              <h1>CS50</h1>
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, asperiores?</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores porro nihil maxime suscipit, sint quod deserunt labore obcaecati voluptatem tempora alias debitis adipisci. Veniam vel voluptate molestiae porro voluptatem.</p>
            </SwiperSlide>
          </Swiper>
        </div>

    </>
  )
}

export default Education
