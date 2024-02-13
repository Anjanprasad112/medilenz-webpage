import styles from "./page.module.css";
import { FaPeopleGroup } from "react-icons/fa6";
// import { FaUserMd } from 'react-icons/fa';
// import { FiLightbulb } from 'react-icons/fi';
import { GiArtificialIntelligence } from "react-icons/gi";
import { BsCalendar2Week } from "react-icons/bs";
const Diff = () => {
  return (
    <div className="container">
      <h3 className={styles.Header}>What makes us different</h3>
      <div className={`row justify-content-center ${styles.Container}`}>
        <div className={`col-md-4 col-sm-6 ${styles.BoxContainer}`}>
          <div className={styles.LogoContainer}>
            <FaPeopleGroup size={25} style={{ color: "#0D6FED" }} />
          </div>
          <div className={styles.TextHeader}>
            Qualified and Experienced Medical Professionals
          </div>
          <div className={styles.TextContainer}>
            We have a team of highly qualified and
            experienced healthcare professionals 
            who can review records of all 
            medical specialties.
          </div>
        </div>

        <div className={`col-md-4 col-sm-6 ${styles.BoxContainer}`}>
          <div className={styles.LogoContainer}>
            <GiArtificialIntelligence size={25} style={{ color: "#0D6FED" }} />
          </div>
          <div className={styles.TextHeader}>
          AI-Enabled proprietary software
          </div>
          <div className={styles.TextContainer}>
          It helps us manage the critical tasks
of processing medical records and
delivering Medical Indexes,
Chronologies, Summaries, Mass-tort,
and Expert Opinions.
          </div>
        </div>

        <div className={`col-md-4 col-sm-6 ${styles.BoxContainer}`}>
          <div className={styles.LogoContainer}>
            <BsCalendar2Week size={25} style={{ color: "#0D6FED" }} />
          </div>
          <div className={styles.TextHeader}>
          One-week delivery service
for platinum partners
          </div>
          <div className={styles.TextContainer}>
          With high-speed processing of both
unstructured and structured data utilizing
the latest AI techniques, we customize
the services as per the client’s requirement.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diff;
