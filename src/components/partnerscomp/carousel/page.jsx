// import React from 'react';
"use client";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './page.module.css';
import jsonData from './images.json'; 

const SliderComp = () => {
  // Define your settings for the Slider
  const settings = {
    autoplay: true, 
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 slides at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 3 slides at a time for smaller screens
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2, // Show 2 slides at a time for mobile devices
        },
      },
    ],
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Subcontainer}>
      <div className={styles.Title}>Trusted by 12+ companies across globe</div>
      <div className={styles.Text}>
        Composed of legal experts specializing in healthcare, orchestrates legal strategies navigates
        regulatory complexities, and champions ethical standards in the intersection of medicine and law.
      </div>
      </div>
      <div className={styles.Slider}>
        <Slider {...settings}>
          {jsonData.map((company, index) => (
            <div key={index} className={styles.Slide}>
              <div className={styles.ImageContainer}>
                <img src={company.logoSrc} alt={company.name} className={styles.Image} />
                <div className={styles.CompanyName}>{company.name}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderComp;
