import styles from "./page.module.css";
import Image from "next/image";
const Comp = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Top}>
      <div className={styles.ImageContainer}>
        <Image src="/Services_1.jpg" fill className={styles.Image} alt="image" />
      </div>
      <div className={styles.TextContainer}>
        <div className={styles.Title}>Compliance</div>
        <div className={styles.Text}>
          We have maintained a track record of 100% compliance on all our engagements, not only for operational delivery but also for client training and process requirements. Our specialists have knowledge of global and regional regulations and guidelines. Our specialists are regularly & continuously trained on ever-changing regulatory policies.We also engage closely with key personnel who are or have been involved in constituting regulatory guidelines.
        </div>
      </div>
    </div>
    </div>
  );
};

export default Comp;
