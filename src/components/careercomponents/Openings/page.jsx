"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./page.module.css";
import jsonData from "./companies.json";

const Current = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3, // Show 4 slides at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 3 slides at a time for smaller screens
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Show 2 slides at a time for mobile devices
        },
      },
    ],
  };
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.Title}>Current Openings</div>
      </div>
      <div className={styles.Slider}>
        <Slider {...settings}>
          {jsonData.map((company, index) => (
            <div key={index} className={styles.Slide}>
              <div className={styles.ImageContainer}>
                <div className={styles.CompanyName}>{company.name}</div>
                <div>
                  Posted on:{" "}
                  <span className="text-primary">{company.date}</span>
                </div>
                <div>
                  Location:{" "}
                  <span className="text-primary">{company.location}</span>
                </div>
                <div>{company.text}</div>
                <div className="text-primary">View Job &#8594;</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Current;
