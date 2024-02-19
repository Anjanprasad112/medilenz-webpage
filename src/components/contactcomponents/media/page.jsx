import styles from "./page.module.css";
import { BsTelephone } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";
import { IoMailOutline } from "react-icons/io5";

const Media = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.SubContainer}>
        <div>
          <BsTelephone className={styles.Logo} />
        </div>
        <div className={styles.Title}>Call us at</div>
        <div className={styles.Text}>+1 (215) 391-1705</div>
        <div className={styles.Text}>+1 (215) 219-1388</div>
      </div>
      <div className={styles.SubContainer}>
        <div>
          <IoMailOutline className={styles.Logo} />
        </div>
        <div className={styles.Title}>Send an email</div>
        <div className={styles.Text}>support@medilenzltd.com</div>
        <div className={styles.Text}>sales@medilenzltd.com</div>
      </div>
      <div className={styles.SubContainer}>
        <div>
          <TfiLocationPin className={styles.Logo} />
        </div>
        <div className={styles.Title}>Visit us anytime</div>
        <div className={styles.Text}>5 Harbor Point Drive,
</div>
        <div className={styles.Text}>#302s Mill Valley, CA 94941</div>
      </div>
    </div>
  );
};

export default Media;
