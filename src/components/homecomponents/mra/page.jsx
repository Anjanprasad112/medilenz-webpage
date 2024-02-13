import styles from "./page.module.css";
import Image from "next/image";

const RecordAnalysis = () => {
  return (
    <div className={`${styles.Container} container-fluid`}>
      <div className={styles.BackgroundImage}></div>
      <div className={`row align-items-center justify-content-center`}>
        <div className={`col-md-6`}>
          <div className={`row align-items-center`}>
            <div className={`col ${styles.TextContainer}`}>
              <h2 className="text-center">Medilenz Record Analysis</h2>
              <p className="text-center">
                Composed of legal experts specializing in healthcare,
                orchestrates legal strategies navigates regulatory complexities,
                and champions ethical standards in the intersection of medicine
                and law.
              </p>
            </div>
          </div>
          <div className={`row align-items-center justify-content-center`}>
            <div className={`col-auto ${styles.ImageContainer}`}>
              
              <Image
                src="/Services_3.jpeg"
                alt="Images"
                className={styles.ImageBox}
                width={300} 
                height={300} 
                />
              
              <div className={styles.OverlayContainer}>
                <div className={styles.OverlayContent}>
                  <h6 className="text-center">Platform Partners</h6>
                  <div className={styles.Partner}>
                    <div>
                      <Image
                        src="/cilo.png"
                        alt="Images"
                        width={35}
                        height={30}
                      />
                    </div>
                    <div>lexisnexis</div>
                    <div>legaltechacclerator</div>
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
