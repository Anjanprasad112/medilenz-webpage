import Image from 'next/image'
import styles from './page.module.css'

const Partenrs = () => {
  return (
    <div className={styles.Container}>
    <div className={styles.ImageContainer}>
      <Image src="/Partner_1.jpg" fill className={styles.Image} alt="image" />
    </div>
    <div className={styles.TextContainer}>
      <div className={styles.Title}>Becoming a Partner</div>
      <div className={styles.Text}>
      As a partner, one plays a pivotal role in fostering
client relationships, staying abreast of evolving
healthcare regulations within the dynamic
intersection of law and medicine.
      </div>
      <div className="btn btn-primary my-2 text-center text-white">View Benefits</div>
    </div>
  </div>
  )
}

export default Partenrs