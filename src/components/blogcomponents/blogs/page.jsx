"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import cardsData from "./cards.json";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const BlogPage = () => {
  const pathname = usePathname();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsData);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.BG1}></div>
        <div className={styles.BG2}></div>
    

      <div
        className={`d-flex flex-wrap justify-content-center gap-4 align-items-center ${styles.Box}`}
      >
        {cards.map((card)=>(
        <div key={card.id}>
          <div
            className="card flex justify-content-center align-items-center "
            style={{ width: "20rem" ,border:"1.5px solid var(--bg)",borderRadius:"16px",boxShadow:"0 8px 30px 0 rgba(0, 0, 0, 0.1)" }}
          >
            <Image
              src={card.imageSrc}
              className="card-img-top"
              alt="Service Image"
              style={{borderRadius:"16px 16px 0px 0px"}}
              width={300}
              height={200}
            />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">
               {card.text}
              </p>
              <Link href={`/blog/${card.id}`} as={`/blog/${card.id}`}  className="btn btn-primary">
                Read More
              </Link>
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

export default BlogPage;
