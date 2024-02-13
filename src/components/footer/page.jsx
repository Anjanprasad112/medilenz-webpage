import styles from "./page.module.css"; 
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube ,FaFacebookF } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";
import { IoMailOutline } from "react-icons/io5";
import Image from "next/image";
import SignUp from "./signup/page";

function Footer() {
  return (
    <> 
    <SignUp/>
      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.list}>
            <p className={`${styles.text} ${styles.bold} ${styles.medium}`}>
              We @ Medilenz
            </p>
            <p className={`${styles.text} ${styles.content} ${styles.medium}`}>
              Our team is comprised of doctors, each possessing 
              more than a decade of clinical experience in various
              specialities. Our doctors are from India and abroad.
            </p>
          </div>
        </div>
        <div className={styles.footerContent}>
          <div className={styles.list}>
            <p className={`${styles.text} ${styles.bold} ${styles.medium}`}>
              Contact Us
            </p>
            <div className={styles.Box}>
              <BsTelephone className={styles.Logo} />
              <span
                className={`${styles.text} ${styles.medium} ${styles.bold}`}
              >
                +1 (215) 219-1388
              </span>
            </div>
            <div className={styles.Box}>
              <BsTelephone className={styles.Logo} />
              <span
                className={`${styles.text} ${styles.medium} ${styles.bold}`}
              >
                +1 (215) 391-1705
              </span>
            </div>
          </div>
        </div>
        <div className={styles.footerContent}>
          <div className={styles.list}>
            <div className={styles.Box}>
              <IoMailOutline className={styles.Logo} />
              <span
                className={`${styles.text} ${styles.medium} ${styles.bold}`}
              >
                sales@medilenzlit.com
              </span>
            </div>
            <div className={styles.Box}>
              <TfiLocationPin className={styles.Logo} />
              <span
                className={`${styles.text} ${styles.medium} ${styles.bold}`}
              >
                5 Harbor Point Drive, #302s Mill Valley, CA 94941
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Line}></div>
      <div className={styles.footerBottom}>
        <div className="">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={20}
            height={20}
            className="mx-1"
          />
          <span className={styles.medium}>MEDILENZ</span>
        </div>

        <div className={`${styles.text} ${styles.medium}`}>
        ⓒ 2024. All Rights Reserved. Privacy Policy.
        </div>

        

        <div>
            <FaFacebookF className={styles.Logo}/>
        </div>
        <div>
            <FaInstagram className={styles.Logo}/>
        </div>
        <div>
            <FaLinkedin className={styles.Logo}/>
        </div>
        <div>
            <FaTwitter className={styles.Logo}/>
        </div>
        <div>
            <FaYoutube className={styles.Logo}/>
        </div>
      </div>
    </>
  );
}

export default Footer;
