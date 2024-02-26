"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import cardsData from "./cards.json";
import Link from "next/link";

const Service = () => {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsData);
  }, []);
  return (
    
    <div className={styles.container}>
      <div className={styles.BG1}></div>
        <div className={styles.BG2}></div>
      <div>
        <h3 className={styles.Text}>Our Services</h3>
      </div>

      <div
        className={`d-flex flex-wrap justify-content-center gap-4 align-items-center ${styles.Box}`}
      >
        {cards.map((card)=>(
        <Link key={card.id} href={`services/${card.id}`} className={styles.Hover}>
          <div
            className={`card flex justify-content-center align-items-center ${styles.CardS}`}
            style={{margin:"10px 12px 10px 12px",borderRadius:"16px",boxShadow:"0 8px 30px 0 rgba(0, 0, 0, 0.1)" }}
          >
            <Image
              src={card.imageSrc}
              className="card-img-top"
              alt="Service Image"
              style={{borderRadius:"16px 16px 0px 0px"}}
              width={300}
              height={200}
            />
            <div className={`card-body ${styles.cardBody}`}>
              <h5 className="card-title text-center text-black" style={{fontWeight:"bold"}}>{card.title}</h5>
              <p className="card-text text-center" style={{color:"#707070",lineHeight:"1.36"}}>
               {card.text}
              </p>
            </div>
          </div>
        </Link>
      ))}
      </div>

      <Link href={`/services`} className={styles.ButtonContainer}>
        <div className="btn btn-primary">Additional Services</div>
      </Link>
    </div>
  );
};

export default Service;
