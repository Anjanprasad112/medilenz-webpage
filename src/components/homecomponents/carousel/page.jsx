"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import styles from "./page.module.css";
// 
const CarouselComponent = () => {
  return (
    <div>
      <Carousel showThumbs={false} showArrows={false} showStatus={false} autoPlay infiniteLoop>
        <div className={styles.Images}>
          <div className={styles.BG}></div>

          <div className={styles.ImageWrapper}>
            <Image
              src="/Header_1.jpg"
              alt="image"
              fill
              style={{ objectFit: "cover" }}
            />
            <div className={styles.TextOverlay}>
              <p className={styles.Text}>
                Our Medical <br />
                Expert Services
              </p>
              <div className={styles.Buttons}>
                <div className={styles.BTN}>
                  <button className={styles.Button}>Expert Opinions</button>
                  <button className={styles.Button}>Rebuttal Reports</button>
                </div>
                <div className={styles.BTN}>
                  <button className={styles.Button}>Life Care</button>
                  <button className={styles.Button}>
                    Radiology Analysis by MDs
                  </button>
                </div>
                <div className={styles.BTN}>
                  <button className={styles.Button}>Medical Writing</button>
                  <button className={styles.Button}>Literature Review</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.Images}>
          <div className={styles.BG}></div>
          <div className={styles.ImageWrapper}>
            <Image
              src="/Partner_1.jpg"
              alt="image2"
              fill
              style={{ objectFit: "cover" }}
            />
                    <div className={styles.TextOverlay}>
              <p className={styles.Text}>
                Our Medical <br />
                Expert Services
              </p>
              <div className={styles.Buttons}>
                <div className={styles.BTN}>
                  <button className={styles.Button}>Expert Opinions</button>
                  <button className={styles.Button}>Rebuttal Reports</button>
                </div>
                <div className={styles.BTN}>
                  <button className={styles.Button}>Life Care</button>
                  <button className={styles.Button}>
                    Radiology Analysis by MDs
                  </button>
                </div>
                <div className={styles.BTN}>
                  <button className={styles.Button}>Medical Writing</button>
                  <button className={styles.Button}>Literature Review</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
