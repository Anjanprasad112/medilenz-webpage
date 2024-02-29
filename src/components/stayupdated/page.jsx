"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import cardsData from "./cards.json";
import Link from "next/link";

const StayUpdated = () => {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsData);
  }, []);
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.Text}>Stay updated with us</h2>
      </div>

      <div
        className={`d-flex flex-wrap justify-content-center align-items-center ${styles.Box}`}
      >
        {cards.map((card)=>(
        <div key={card.id}>
          <div
            className={`card flex justify-content-center align-items-center ${styles.Card}`}
            
          >
            <Image
              src={card.imageSrc}
              className="card-img-top"
              style={{borderRadius:"16px"}}
              alt="Service Image"
              width={300}
              height={200}
            />
            <div className={styles.Date}>
              {card.date}
            </div>
            <div className="card-body">
              
              <h6 className="card-subtitle mb-2 text-muted">{card.subtitle}</h6>
              <h5 className="card-title">{card.title}</h5>
              <div className={styles.TextDesc}>
               {card.text}
              </div>
              <Link href="#" className={styles.Read}>
                Read More <span className={styles.Arrow}>
                &rarr;
                  </span> 
              </Link>
            </div>
          </div>
        </div>
      ))}
      </div>

      <div className={styles.ButtonContainer}>
        <div className="btn btn-primary">View Latest Articles</div>
      </div>
    </div>
  );
};

export default StayUpdated;
