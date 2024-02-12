// components/Carousel.js`
"use client";
// import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import styles from './page.module.css';

const Carousel = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="container">
      <div className="mt-5">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className={`bg-white h-[450px] text-black rounded-xl ${styles.slide}`}>
              <div className={`h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl ${styles.image}`}>
                <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
              </div>

              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="text-center">{d.review}</p>
                <button className='btn btn-primary px-4 py-2 rounded-xl'>Read More</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
