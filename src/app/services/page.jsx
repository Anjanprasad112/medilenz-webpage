import {lazy, Suspense} from 'react';
import styles from './page.module.css'
const Services = lazy(()=>import('@/components/servicecomponents/services/page'))

const Service = () => {
  return (
    <>
    <div className={styles.Title}>
    <div className={styles.Container}></div>
    <div className={styles.Head}>Services</div>
    <div className={styles.Para}>specialized Services in Medical Records Review & Medical Legal Research.</div>
  </div>
  <Services/>
    </>
  )
}

export default Service