"use client";
// import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import cardsData from "./cards.json";
// import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube ,FaFacebookF } from "react-icons/fa";

const Expert = () => {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsData);
  }, []);
  return (
    <div className={styles.container}>
        {/* <div className={styles.backgroundImage}></div> */}
      <div>
        <h2 className={styles.Text}>Expert Team</h2>
      </div>

      <div
        className={`d-flex flex-wrap justify-content-center  align-items-center ${styles.Box}`}
      >
        {cards.map((card)=>(
        <div key={card.id}>
          <div
            className="card p-3 m-3 flex justify-content-center align-items-center "
            style={{ width: "17rem" , borderRadius:"16px",background : "#fff",boxShadow:"0 8px 30px 0 rgba(0, 0, 0, 0.1)" ,borderBottom: "5px solid var(--bg)"}}
          >
            <div className={`${styles.Background} ${styles.Circle}`}>
                <div></div>
            </div>
              {/* <Image
                src={card.imageSrc}
                className="card-img-top"
                alt="Service Image"
                width={300}
                height={200}
              /> */}
              {/* <div className={styles.Background}></div> */}
            <div className="card-body">
              <h5 className="card-title text-center">{card.title}</h5>
              <p className="card-text text-center">
               {card.text}
              </p>
              {/* <div className={styles.Social}>
                <div>
                  <FaFacebookF className={styles.Logo}/>
                </div>
                <div>
                  <FaLinkedin className={styles.Logo}/>
                </div>
                <div>
                  <FaTwitter className={styles.Logo}/>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      ))}
      </div>

      {/* <div className={styles.ButtonContainer}>
        <div className="btn btn-primary">Additional Services</div>
      </div> */}
    </div>
  );
};

export default Expert;
