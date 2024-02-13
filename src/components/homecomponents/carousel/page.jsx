"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import styles from './page.module.css';

const CarouselComponent = () => {
  return (
    <div>
        <Carousel showThumbs={false} autoPlay infiniteLoop>
            <div className={styles.Images}>
                <div className={styles.ImageWrapper}>
                    <Image src="/Header_1.jpg" alt="image" fill style={{objectFit: "cover"}} />
                    <div className={styles.TextOverlay}>
                    <p className={styles.Text}>Our services include medical education</p>
                        <div className={styles.Buttons}>
                            <button className={styles.Button}>Service 1</button>
                            <button className={styles.Button}>Service 2</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.Images}>
                <div className={styles.ImageWrapper}>
                    <Image src="/About_1.jpg" alt="image2" fill style={{objectFit: "cover"}} />
                </div>
            </div>
        </Carousel>
    </div>
  )
}

export default CarouselComponent;
