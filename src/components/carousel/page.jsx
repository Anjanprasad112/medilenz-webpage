"use client";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./page.module.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#0D6EFD",
        color: "#0D6EFD",
        borderRadius: "50%",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#0D6EFD",
        color: "#0D6EFD",
        borderRadius: "50%",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={onClick}
    ></div>
  );
}

const CarouselMain = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    // speed : 2000,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className={styles.Top}>
      <div className={styles.Container}>
        <Slider {...settings} className={styles.Slider}>
          {data.map((item) => (
            <div className={styles.Top} key={item.id}>
            <div className={styles.Card} >
              <div className={styles.ImageContainer}>
                <Image
                  src={item.img}
                  alt={item.img}
                  width={70}
                  height={70}
                  className={styles.Image}
                />
              </div>
              <div className={styles.Title}>
                {item.title}
              </div>
              <div className={styles.Desc}>
                {item.text}
              </div>
              <div className={styles.Name}>
                {item.name}
              </div>
              <div className={styles.NameTag}>
                {item.nametag}
              </div>
            </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselMain;

// "use client";

// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import styles from './page.module.css';

// const testimonialsData = [
//   {
//     "id": 1,
//     "img": "/Blog_1.jpg",
//     "title": "Title 1",
//     "text": "The opinion is well-written and easy to follow and provides all of the details that will allow us to move forward with the case. I will be back in touch & I will be sure to let others know as well.Thank you.",
//     "name": "LA-Based",
//     "nametag": "Medmal Law Firm"
//   },
//   {
//     "id": 2,
//     "img": "/Blog_2.jpg",
//     "title": "Title 2",
//     "text": "The opinion is well-written and easy to follow and provides all of the details that will allow us to move forward with the case. I will be back in touch & I will be sure to let others know as well.Thank you.",
//     "name": "PA-Based",
//     "nametag": "Law Firm"
//   },
//   {
//     "id": 3,
//     "img": "/Blog_3.jpeg",
//     "title": "Title 3",
//     "text": "The opinion is well-written and easy to follow and provides all of the details that will allow us to move forward with the case. I will be back in touch & I will be sure to let others know as well.Thank you.",
//     "name": "Alex Smith",
//     "nametag": "@alexsmith"
//   }
// ];

// const Testimonials = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     speed: 500,
//     slidesToShow: 2,  // Adjusted to display two cards per screen
//     slidesToScroll: 1
//   };

//   return (
//     <div className={`container ${styles.testimonials}`}>
//       <Slider {...settings}>
//         {testimonialsData.map(testimonial => (
//           <div key={testimonial.id}>
//             <div className={`card ${styles.card}`}>
//               <img src={testimonial.img} className={`card-img-top ${styles.image}`} alt={testimonial.title} />
//               <div className={`card-body ${styles.body}`}>
//                 <h5 className={`card-title ${styles.title}`}>{testimonial.title}</h5>
//                 <p className={`card-text ${styles.text}`}>{testimonial.text}</p>
//                 <p className={`card-text ${styles.meta}`}>
//                   <small className={`text-muted ${styles.name}`}>{testimonial.name}</small>
//                   <span className={`text-muted ${styles.separator}`}>|</span>
//                   <small className={`text-muted ${styles.nametag}`}>{testimonial.nametag}</small>
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Testimonials;
