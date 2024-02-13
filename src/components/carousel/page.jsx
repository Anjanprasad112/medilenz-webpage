"use client";
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#0D6EFD",
        color:"#0D6EFD",
        borderRadius: "50%", 
        textAlign: "center",
        display:"flex",
        justifyContent: "center",
        alignItems : "center",
        cursor: "pointer"
      }}
      onClick={onClick}
    >
    </div>
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
        color:"#0D6EFD",
        borderRadius: "50%",
        textAlign: "center",
        display:"flex",
        justifyContent: "center",
        alignItems : "center",
        cursor: "pointer"
      }}
      onClick={onClick}
    >
    </div>
  );
}

const CarouselMain = ({ data }) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };


  return (
    <div className="bg-white p-3">
      <div className="container flex align-items-center justify-content-center">
        <div className="col">
          <Slider {...settings}>
            {data.map(item => (
              <div key={item.id} className="card border border-primary mb-3" style={{ borderRadius: '15px' }}>
                <div className="card-body d-flex flex-column  align-items-center justify-content-center">
                  <div className="rounded-circle overflow-hidden mr-3" style={{ width: '82px', height: '82px', border: '1px solid #007bff', marginBottom:"5px" }}>
                    <Image src={item.img} alt={item.title} width={82} height={82} className="" />
                  </div>
                  <div>
                    <h5 className="card-text text-black">{item.title}</h5>
                    <p className="card-text">{item.text}</p>
                    <p className="card-text">
                      <small className="text-primary">{item.name}
                      <span className="text-muted">{" | "}</span>
                      <span className="font-italic text-muted">{item.nametag}</span></small>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CarouselMain;
