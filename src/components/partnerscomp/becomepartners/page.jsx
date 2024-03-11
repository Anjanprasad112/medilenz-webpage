"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import cardsData from "./cards.json";
import { FaRocket, FaCar, FaBiking, FaBicycle } from "react-icons/fa";

const Part = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsData);
  }, []);
  return (
    <div className={styles.container}>
      <div
        className={`d-flex flex-wrap justify-content-center gap-5 align-items-center ${styles.Box}`}
      >
        {cards.map((card) => (
          <div key={card.id}>
            <div
              className={`card py-1 flex flex-row justify-content-center align-items-center ${styles.Card}`}
              
            >
             

              <div className={styles.Background} >
              <div className={styles.Img}>
                  {card.icon === "rocket" && <FaRocket size={70} style={{color:"var(--bg"}}/>}
                  {card.icon === "car" && <FaCar size={70} style={{color:"var(--bg"}}/>}
                  {card.icon === "bike" && <FaBiking size={70} style={{color:"var(--bg"}}/>}
                  {card.icon === "cycle" && <FaBicycle size={70} style={{color:"var(--bg"}}/>}
                </div>
                </div>
                
             

              <div className={styles.Boxtt}>
                <div className={styles.Title}>{card.title}</div>
                <div className={styles.Text}>{card.text}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Part;
