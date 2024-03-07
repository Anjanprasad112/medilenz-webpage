"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import cardsData from "./cards.json";

const Service = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsData);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.BG1}></div>
      <div className={styles.BG2}></div>

      <div
        className={`d-flex flex-wrap justify-content-center gap-5 align-items-center ${styles.Box}`}
      >
        {cards.map((card) => (
          <div key={card.id}>
            <div
              className="card flex justify-content-center align-items-center "
              style={{
                width: "20rem",
                borderRadius: "16px",
                boxShadow: "0 8px 30px 0 rgba(0, 0, 0, 0.1)",
              }}
            >
              <Image
                src={card.imageSrc}
                className="card-img-top"
                alt="Service Image"
                style={{ borderRadius: "16px 16px 0px 0px" }}
                width={300}
                height={200}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {card.title}
                  <span className="text-primary p-2" style={{fontSize: "x-large"}}>&rarr;</span>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
