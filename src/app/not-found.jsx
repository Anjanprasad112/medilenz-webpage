import styles from './not-found.module.css'
import Image from 'next/image'
import Link from 'next/link'


const notfound = () => {
  return (
    <div className={styles.container}>
        <div className={styles.Header}>404. That’s an error.</div>
        <div className={styles.Header}>PAGE NOT FOUND</div>
        <div className={styles.Imagecontainer}>

             <Image src="/images/About_1.jpg" alt="404" className={styles.Image}  fill/>
        </div>
            <Link href='/' className={styles.Button}>
            Back to Homepage
            </Link>

    </div>
  )
}

export default notfound;