import React from 'react';
import styles from './page.module.css';

const CircleImage = ({ src }) => {
  return (
    <div className={styles.CircleImage}>
      <img src={src} alt="circle" />
    </div>
  );
};

const Top = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.ImageContainer}>
        <div className={styles.ImageRow}>
          <CircleImage src="/Services_1.jpg" />
          <CircleImage src="/Services_1.jpg" />
        </div>
        <div className={styles.ImageRow}>
          <CircleImage src="/Services_1.jpg" />
        </div>
      </div>
      <div className={styles.TextContainer}>
        <div className={styles.Title}>MEDILENZ SERVICES</div>
        <div className={styles.Text}>
          Established in 2016, Medilenz specializes in Medical Records Review and Medical Legal Research. Our team of highly qualified doctors with extensive clinical experience excels in handling diverse cases related to Personal Injury, Medical Malpractice, and Mass-Tort Cases. We provide customized solutions to attorneys and law firms and have expanded our services to include litigation support and medical-legal research for various professionals. With global delivery centers in Bangalore, India, and Mill Valley, California, equipped with world-class facilities, we ensure top-quality service.
        </div>
      </div>
    </div>
  );
};

export default Top;
