import styles from "./page.module.css";
import { BsTelephone } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";


const SubHeader = () => {
  return (
    <div className={`${styles.SubHeader}`}>
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
      <div className={styles.Social}>
      <Link className={styles.BoxContainer} href="https://www.facebook.com/MedilenzServices" target="_blank">
        <FaFacebookF className={styles.Icon} style={{color: "#fff"}}/>
      </Link>
      <Link className={styles.BoxContainer} href="https://www.linkedin.com/company/medilenz-innovations-pvt-ltd/" target="_blank">
        <FaLinkedinIn className={styles.Icon}  style={{color: "#fff"}}/>
      </Link>
      <Link className={styles.BoxContainer } href="https://www.instagram.com/medilenz_services/" target="_blank">
        <FaInstagram className={styles.Icon}  style={{color: "#fff"}}/>
      </Link>
      <Link className={styles.BoxContainer} href="https://twitter.com/MedilenzS34943" target="_blank">
        <FaXTwitter className={styles.Icon} style={{color: "#fff"}}/>
      </Link>
      <Link className={styles.BoxContainer} href="https://www.youtube.com/@medilenz5489" target="_blank">
        <FaYoutube className={styles.Icon} style={{color: "#fff"}}/>
      </Link>
      </div>
    </div>
  );
};


export default SubHeader;
