import styles from './page.module.css';
import Image from 'next/image';


const Top = () => {
  return (
   <div className={styles.Container}>

    <div className={styles.ImageContainer}>
<Image src="/Career_1.jpg" className={styles.Img} fill alt="careerimg"/>
    </div>
    <div className={styles.TextContainer}>
      <div className={styles.Title}>
      We offer career, not a job
      </div>
      <div className={styles.Text}>At our organization, we go beyond simply providing employment
opportunities; we offer fulfilling careers. We are committed to
supporting our employees in their professional growth, providing
them with the necessary resources, training, and mentorship to
thrive and build a long-term, rewarding career path.</div>
    </div>
   </div>
  )
}

export default Top;