import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

const Core = () => {
  return (
    <>
      <div className={styles.BG}></div>
    <div className={styles.Main}>
      <div className={styles.Title}>Our Core Values</div>
      <div className={styles.Text}>Excellence is our hallmark, as we continuously strive for the highest standards of legal proficiency
and client satisfaction, guided by a dedication to justice and fairness in the complex realm of medical law.</div>
    </div>
   
    <div className={styles.container}>
      <div className={styles.Image}>
      <div className={styles.Top}>
      Client Focus
        </div>
        <Image
          src="/Services_1.jpg"
          alt="Image 1"
          className={styles.Img}
          fill
        />
        <div className={styles.overlay}>
          <h2> Client Focus</h2>
          <p>Text 1</p>
        </div>
      </div>
      <div className={styles.Image}>
        <div className={styles.Top}>
        Creativity
        </div>
        <Image
          src="/Services_2.jpg"
          alt="Image 2"
          className={styles.Img}
          fill
        />
        <div className={styles.overlay}>
          <h2>Creativity</h2>
          <p className={styles.ParaText}>We promote a collaborative environment
among our staff, fostering the sharing of
knowledge, Ideas and opinions.</p>
        </div>
      </div>
      <div className={styles.Image}>
      <div className={styles.Top}>
      Excellency
        </div>
        <Image
          src="/Services_2.jpg"
          alt="Image 3"
          className={styles.Img}
          fill
        />
        <div className={styles.overlay}>
          <h2>Excellency</h2>
          <p>Text 3</p>
        </div>
      </div>
      <div className={styles.Image}>
      <div className={styles.Top}>
      Leadership & Owing tasks
        </div>
        <Image
          src="/Services_2.jpg"
          alt="Image 4"
          className={styles.Img}
          fill
        />
        <div className={styles.overlay}>
          <h2>Leadership & Owing tasks</h2>
          <p>Text 4</p>
        </div>
      </div>
      <div className={styles.Image}>
      <div className={styles.Top}>
      Teamwork & Integrity
        </div>
        <Image
          src="/Services_2.jpg"
          alt="Image 5"
          className={styles.Img}
          fill
        />
        <div className={styles.overlay}>
          <h2>Teamwork & Integrity</h2>
          <p>Text 5</p>
        </div>
      </div>
      <div className={styles.Image}>
      <div className={styles.Top}>
      Continuous Learning
        </div>
        <Image
          src="/Services_2.jpg"
          alt="Image 6"
          className={styles.Img}
          fill
        />
        <div className={styles.overlay}>
          <h2>Continuous Learning</h2>
          <p>Text 6</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Core;
