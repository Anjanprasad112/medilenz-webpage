import styles from "./page.module.css";
import { BsTelephone } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const SubHeader = () => {
  return (
    <div className={`container-fluid ${styles.SubHeader}`}>
      <div className={styles.BoxContainer}>
        <div className={styles.ImgContainer}>
          <BsTelephone className={styles.Icon} style={{ color: "#fff" }} />
        </div>
        <div className={styles.TextContainer}>+1 (215) 219-1388</div>
      </div>

      <div className={styles.BoxContainer}>
        <div className={styles.ImgContainer}>
          <BsTelephone className={`${styles.Icon}`} style={{ color: "#fff" }} />
        </div>
        <div className={styles.TextContainer}>+1 (215) 391-1705</div>
      </div>

      <div className={styles.BoxContainer}>
        <div className={styles.ImgContainer}>
          <TfiLocationPin className={styles.Icon} style={{ color: "#fff" }} />
        </div>
        <div className={styles.TextContainer}>
          5 Harbor Point Drive, #302s Mill Valley, CA 94941
        </div>
      </div>

      <div className={styles.BoxContainer}>
        <div className={styles.ButtonContainer}>
          <div className={styles.Button}>Signup for a special discount %</div>
        </div>
      </div>
      <div className={styles.BoxContainer}>
        <FaFacebookF className={styles.Icon} style={{color: "#fff"}}/>
      </div>
      <div className={styles.BoxContainer}>
        <FaLinkedinIn className={styles.Icon} style={{color: "#fff"}}/>
      </div>
      <div className={styles.BoxContainer}>
        <FaInstagram className={styles.Icon} style={{color: "#fff"}}/>
      </div>
      <div className={styles.BoxContainer}>
        <FaXTwitter className={styles.Icon} style={{color: "#fff"}}/>
      </div>
      <div className={styles.BoxContainer}>
        <FaYoutube className={styles.Icon} style={{color: "#fff"}}/>
      </div>
    </div>
  );
};

export default SubHeader;
