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
        <h3 className={styles.Text}>Stay updated with us</h3>
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
              alt="Service Image"
              width={300}
              height={200}
            />
            <div className="card-body">
              
              <h6 className="card-subtitle mb-2 text-muted">{card.subtitle}</h6>
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">
               {card.text}
              </p>
              <Link href="#" className="btn btn-primary">
                Read More
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
