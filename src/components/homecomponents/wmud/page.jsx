import styles from "./page.module.css";
import { FaPeopleGroup } from "react-icons/fa6";

const Diff = () => {
  return (
    <div className="container">
      <h3 className={styles.Header}>What makes us different</h3>
      <div className={`row justify-content-center ${styles.Container}`}>
        <div className={`col-md-4 col-sm-6 ${styles.BoxContainer}`}>
          <div className={styles.LogoContainer}>
            <FaPeopleGroup size={25} style={{ color: "#1872dd" }} />
          </div>
          <div className={styles.TextHeader}>
            Qualified and Experienced Medical Professionals
          </div>
          <div className={styles.TextContainer}>
            We have a team of highly qualified and <br />
            experienced healthcare professionals <br />
            who can review records of all <br />
            medical specialties.
          </div>
        </div>

        <div className={`col-md-4 col-sm-6 ${styles.BoxContainer}`}>
          <div className={styles.LogoContainer}>
            <FaPeopleGroup size={25} style={{ color: "#1872dd" }} />
          </div>
          <div className={styles.TextHeader}>
            Qualified and Experienced Medical Professionals
          </div>
          <div className={styles.TextContainer}>
            We have a team of highly qualified and <br />
            experienced healthcare professionals <br />
            who can review records of all <br />
            medical specialties.
          </div>
        </div>

        <div className={`col-md-4 col-sm-6 ${styles.BoxContainer}`}>
          <div className={styles.LogoContainer}>
            <FaPeopleGroup size={25} style={{ color: "#1872dd" }} />
          </div>
          <div className={styles.TextHeader}>
            Qualified and Experienced Medical Professionals
          </div>
          <div className={styles.TextContainer}>
            We have a team of highly qualified and <br />
            experienced healthcare professionals <br />
            who can review records of all <br />
            medical specialties.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diff;
