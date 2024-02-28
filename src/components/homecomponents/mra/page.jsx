import styles from "./page.module.css";
import Image from "next/image";

const RecordAnalysis = () => {
  return (
    <div className={`${styles.Container} container-fluid`}>
      <div className={styles.BackgroundImage}></div>
      <div className={`${styles.Cont}`}>
          <div className={`row align-items-center justify-content-center`}>
            <div className={`col ${styles.TextContainer}`}>
              <h2 className="text-center">Medilenz Record Analysis</h2>
              <div className={styles.Text}>
                Composed of legal experts specializing in healthcare,
                orchestrates legal strategies navigates regulatory complexities,
                and champions ethical standards in the intersection of medicine
                and law.
              </div>
            </div>
          <div className={`row align-items-center justify-content-center`}>
            <div className={` ${styles.ImageContainer}`}>
              
              <Image
                src="/Services_3.jpeg"
                alt="Images"
                className={styles.ImageBox}
                fill
                />
              
              <div className={styles.OverlayContainer}>
                <div className={styles.OverlayContent}>
                  <div className={styles.Head}>Platform Partners</div>
                  <div className={styles.Partner}>
                    <div className={styles.ImgLogoOne}>
                      <Image
                        src="/cilologo.png"
                        alt="Images"
                       fill
                      />
                    </div>
                    <div className={styles.ImgLogoTwo}>
                      <Image 
                      src='/legal_logoHD.png'
                      alt="logo"
                      fill
                      />

                     
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordAnalysis;
