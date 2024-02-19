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
        className={`d-flex flex-wrap justify-content-center gap-4 align-items-center ${styles.Box}`}
      >
        {cards.map((card) => (
          <div key={card.id}>
            <div
              className={`card py-1 flex flex-row justify-content-center align-items-center ${styles.Card}`}
              style={{
                width: "20rem",
                borderRadius: "16px",
                background: "#fff",
                boxShadow: "0 8px 30px 0 rgba(0, 0, 0, 0.1)",
                border: "1.5px solid var(--bg)",
              }}
            >
             

              <div className={styles.Background} >
              <div className={styles.Img}>
                  {card.icon === "rocket" && <FaRocket size={60} style={{color:"var(--bg"}}/>}
                  {card.icon === "car" && <FaCar size={60} style={{color:"var(--bg"}}/>}
                  {card.icon === "bike" && <FaBiking size={60} style={{color:"var(--bg"}}/>}
                  {card.icon === "cycle" && <FaBicycle size={60} style={{color:"var(--bg"}}/>}
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
