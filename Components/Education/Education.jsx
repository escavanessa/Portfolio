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

        <div className='action' id='education'>
          <h1>Some of my <span className='action-title'>Education</span></h1>
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
                I graduated with a degree in Art History. I was also a double major in Painting but decided to drop the major my final year. My arts education prepared me to think creatively and approach problems in new ways.
                Although I am following a different path, the core skills I learned - how to communicate effectively, how to work in a team settings and maintain productivity - will serve me in any path I choose.
              </p>
            </SwiperSlide>

            <SwiperSlide className='swiperSlide'>
              <h1>Coursera Front End Development Certificate</h1>
              <h2>2023 - 2024</h2>
              <p>
                Although this course by no means was my own resource when learning Front End - it was largely my spring board - pointing me in different directions to dig deeper and sharpen my skills. This course covered the basics like HTML and CSS and basic Javascript and then moved into more advanced topics like state/ useEffect in React, Async functions/ fetching data and ended with a thorough introduction to Data Structures.
              </p>
            </SwiperSlide>

            <SwiperSlide className='swiperSlide'>
              <h1>Codecademy</h1>
              <h2>2023 - 2024</h2>
              <p>
                Completed two Javascript courses - Javascript and Intermediate Javascript. These courses have really helped me build a strong understanding of Javascript and set the foundation for more complicated concepts I will face as I continue on my study into Front End Development.
              </p>
            </SwiperSlide>

            <SwiperSlide className='swiperSlide'>
              <h1>CS50</h1>
              <h2>2023 - Present</h2>
              <p>Who wouldnt want to sit in on Harvard lectures for free? The Computer Science course offered by Harvard was the perfect undertone for my work. As I continue to build projects, these lectures have provided me with the philosophical understanding of computers and its logical applications and approaches.</p>
            </SwiperSlide>
          </Swiper>
        </div>

    </>
  )
}

export default Education
