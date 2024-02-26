import { BsFiletypePdf } from "react-icons/bs";
import { BsFileEarmarkRichtextFill } from "react-icons/bs";
import { BsFileEarmarkCheckFill } from "react-icons/bs";
import { TbHandClick } from "react-icons/tb";
import styles from "./page.module.css";

const Page = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Headone}>
        Effortlessly upload medical records for efficient case tracking,
        ensuring a transparent and organized approach to managing healthcare
        information throughout the legal process.
      </div>
      <div className={styles.Headtwo}>
        Please Login if you have an account. Uploading after logging in allows
        you to keep track of the status of your case.
      </div>
      <div className={styles.Box}>
        <div className={styles.Headthree}>&tilde; SUBMISSION INSTRUCTIONS &tilde;</div>
        <div className={styles.Card}>
          <div className={styles.Mini}>
            <div className={styles.ImageContainer}>
              <BsFiletypePdf />
            </div>
            <div className={styles.TextContainer}>
              Scan your records as PDF document (Other file format will work
              such as word (doc, docx), excel (xls, xlsx), zip, video files,
              audio files, images, etc.)
            </div>
          </div>

          <div className={styles.Mini}>
            <div className={styles.ImageContainer}>
              <BsFileEarmarkRichtextFill />
            </div>
            <div className={styles.TextContainer}>
              Let's know what kind of document this PDF is by giving it a
              logical name.
            </div>
          </div>
          <div className={styles.Mini}>
            <div className={styles.ImageContainer}>
              <BsFileEarmarkCheckFill />
            </div>
            <div className={styles.TextContainer}>
              Check scanned images to make sure they are legible and right side
              up, not rotated.
            </div>
          </div>
          <div className={styles.Mini}>
            <div className={styles.ImageContainer}>
              <TbHandClick />
            </div>
            <div className={styles.TextContainer}>
              Fill out the form below, upload the file then click submit button
              to complete your order.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
