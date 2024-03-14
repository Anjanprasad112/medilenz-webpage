"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import CardData from "./cards.json";
import styles from "./page.module.css";
import Image from "next/image";
import { MdOutlineZoomIn } from "react-icons/md";
import { MdOutlineZoomOut } from "react-icons/md";

const Page = () => {
  const pathname = usePathname();
  const arr = pathname.split("/");
  const blogId = arr[2];
  const selectedCard = CardData.find((card) => card.id === Number(blogId));

  
  const [zoomedIn, setZoomedIn] = useState(false);
  const [zoomedInOne, setZoomedInOne] = useState(false);

    const handleZoomClick = () => {
      setZoomedIn(!zoomedIn);
    };
    const handleZoomClickOne = ()=>{
      setZoomedInOne(!zoomedInOne);
    }
  return (
    
    <>
      {selectedCard && (
        <>
          <div className={styles.Top}>
            <div>{selectedCard.title}</div>
          </div>

          <div className={styles.Container}>
            <div className={styles.SubContainer}>
              <div className={styles.ImgContainer}>
                <Image
                  src={selectedCard.imageSrc}
                  alt="img"
                  fill
                  className={styles.Img}
                />
              </div>
              <div className={styles.TextContainer}>
                <div className={styles.Title}>{selectedCard.whymedical}</div>
                <div className={styles.Text}>{selectedCard.whysummary}</div>
              </div>
            </div>
          </div>

          <div className={styles.Box}>
            <div className={styles.MScontainer}>
              <div className={styles.TextCon}>
                <div className={styles.Title}>{selectedCard.msum}</div>
                <div className={styles.Text}>{selectedCard.mtext}</div>
              </div>
              <div className={styles.ImgCon}>
                <div className={styles.ImgContain}>
                  <Image
                    src={selectedCard.preport}
                    alt={selectedCard.preport}
                    fill
                    className={`${styles.ImgReport} ${zoomedInOne && styles.ZoomedIn}`}
                  />
                  <button className={styles.ZoomButton} onClick={handleZoomClickOne}>
              {zoomedIn ? <MdOutlineZoomOut style={{color : 'var(--bg)'}}/> : <MdOutlineZoomIn style={{color : 'var(--bg)'}}/>}
            </button>
                </div>
                <div className={styles.ImgContain}>
                  <Image
                    src={selectedCard.preport}
                    alt={selectedCard.preport}
                    fill
                    className={`${styles.ImgReport} ${zoomedIn && styles.ZoomedIn}`}
                  />
                  <button className={styles.ZoomButton} onClick={handleZoomClick}>
              {zoomedIn ? <MdOutlineZoomOut style={{color : 'var(--bg)'}}/> : <MdOutlineZoomIn style={{color : 'var(--bg)'}}/>}
            </button>
                  
                </div>
              </div>
            </div>
            
          </div>




          <div className={styles.Box}>
            <div className={styles.MScontainertwo}>
              <div className={styles.TextCon}>
                <div className={styles.Title}>{selectedCard.msum}</div>
                <div className={styles.Text}>{selectedCard.mtext}</div>
              </div>
              <div className={styles.ImgCon}>
                <div className={styles.ImgContain}>
                  <Image
                    src={selectedCard.preport}
                    alt={selectedCard.preport}
                    fill
                    className={styles.ImgReport}
                  />
                </div>
                <div className={styles.ImgContain}>
                  <Image
                    src={selectedCard.preport}
                    alt={selectedCard.preport}
                    fill
                    className={styles.ImgReport}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Page;
